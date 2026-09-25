// CÓPIA DO CÓDIGO DO WORKER (o que roda de verdade está na Cloudflare: Workers & Pages > jogo-irving > Edit code).
// Este arquivo existe só pra guardar o histórico. Nenhuma chave fica aqui.

// =====================================================================
//  WORKER DO JOGO  ("porteiro" entre o jogo e o Gemini)
//  O jogo manda o pedido pra cá; só este Worker conhece a chave do Gemini.
//
//  Configurar no painel da Cloudflare (Settings > Variables and Secrets):
//    GEMINI_API_KEY     (tipo Secret)  -> a chave do Google AI Studio
//    ORIGENS_PERMITIDAS (opcional)     -> sites que podem usar o Worker,
//                                         separados por vírgula
//    MODELO             (opcional)     -> modelo do Gemini a usar
//    PARTIDAS_POR_DIA   (opcional)     -> partidas por pessoa por dia (padrão 6)
//  Binding (Settings > Bindings > KV namespace):
//    USO -> guarda quantas partidas cada pessoa jogou hoje
// =====================================================================

const ORIGENS_PADRAO = "https://irvao.github.io";
const MODELO_PADRAO = "gemini-flash-latest";
const LIMITE_CARACTERES = 30000; // trava contra pedidos gigantes
const LIMITE_MENSAGENS = 60;
const PARTIDAS_POR_DIA_PADRAO = 6;   // partidas por pessoa (endereço de internet) por dia
const PEDIDOS_POR_PARTIDA = 30;      // uma partida normal usa uns 20 pedidos

export default {
  async fetch(request, env) {
    const origem = request.headers.get("Origin") || "";
    const permitidas = (env.ORIGENS_PERMITIDAS || ORIGENS_PADRAO)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const liberada = permitidas.includes(origem);

    const cors = {
      "Access-Control-Allow-Origin": liberada ? origem : permitidas[0],
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
    };

    // navegador perguntando "posso?" antes do pedido de verdade
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });

    // alguém abrindo o endereço no navegador
    if (request.method === "GET") return responder({ ok: true, jogo: "worker no ar" }, 200, cors);

    if (request.method !== "POST") return responder({ erro: "Método não permitido" }, 405, cors);
    if (!liberada) return responder({ erro: "Este site não pode usar o narrador" }, 403, cors);
    if (!env.GEMINI_API_KEY) return responder({ erro: "Chave do Gemini não configurada" }, 500, cors);

    // ---- lê o pedido do jogo ----
    let corpo;
    try {
      corpo = await request.json();
    } catch {
      return responder({ erro: "Pedido inválido" }, 400, cors);
    }
    const sistema = typeof corpo?.sistema === "string" ? corpo.sistema : "";
    const conversa = Array.isArray(corpo?.conversa) ? corpo.conversa.slice(-LIMITE_MENSAGENS) : [];
    const querJson = corpo?.json === true;
    const partida = String(corpo?.partida || "sem-id").slice(0, 40);
    if (!conversa.length) return responder({ erro: "Conversa vazia" }, 400, cors);

    const tamanho = sistema.length + conversa.reduce((s, m) => s + String(m?.texto || "").length, 0);
    if (tamanho > LIMITE_CARACTERES) return responder({ erro: "Texto grande demais" }, 413, cors);

    // ---- limite de uso por pessoa e por dia ----
    const bloqueio = await controlarUso(env, request, partida);
    if (bloqueio) return responder({ erro: bloqueio.erro, limite: true }, 429, cors);

    // ---- monta o pedido no formato do Gemini ----
    const pedido = {
      contents: conversa.map((m) => ({
        role: m?.papel === "ia" ? "model" : "user",
        parts: [{ text: String(m?.texto || "") }],
      })),
      generationConfig: {
        temperature: 0.9,
        ...(querJson ? { responseMimeType: "application/json" } : {}),
      },
    };
    if (sistema) pedido.systemInstruction = { parts: [{ text: sistema }] };

    const modelo = env.MODELO || MODELO_PADRAO;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`;

    // ---- pergunta pro Gemini ----
    let resp;
    try {
      resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_API_KEY },
        body: JSON.stringify(pedido),
      });
    } catch {
      return responder({ erro: "Não consegui falar com o Gemini" }, 502, cors);
    }

    let dados = {};
    try {
      dados = await resp.json();
    } catch {}

    if (!resp.ok) {
      const msg = dados?.error?.message || `Gemini respondeu ${resp.status}`;
      const status = resp.status === 429 ? 429 : 502;
      return responder({ erro: msg }, status, cors);
    }

    const texto = (dados?.candidates?.[0]?.content?.parts || [])
      .map((p) => p?.text || "")
      .join("")
      .trim();
    if (!texto) return responder({ erro: "O Gemini não respondeu nada" }, 502, cors);

    return responder({ texto }, 200, cors);
  },
};

// ---------------------------------------------------------------------
//  Controle de uso: cada pessoa (endereço de internet) pode jogar
//  PARTIDAS_POR_DIA partidas por dia, e cada partida tem um teto de
//  pedidos. O registro fica no KV "USO" e some sozinho depois de 2 dias.
//  Se o KV não estiver configurado ou falhar, o Worker NÃO libera
//  (melhor o narrador descansar do que a conta estourar).
// ---------------------------------------------------------------------
async function controlarUso(env, request, partida) {
  const descanso = { erro: "O narrador está descansando. Tente de novo mais tarde." };
  if (!env.USO) return { erro: "Controle de uso não configurado (binding USO)" };

  const limitePartidas = Number(env.PARTIDAS_POR_DIA) > 0 ? Number(env.PARTIDAS_POR_DIA) : PARTIDAS_POR_DIA_PADRAO;
  const ip = request.headers.get("CF-Connecting-IP") || "desconhecido";
  const dia = new Date().toISOString().slice(0, 10); // AAAA-MM-DD (UTC)
  const chave = `uso:${dia}:${await resumir(ip)}`;

  try {
    const atual = (await env.USO.get(chave, { type: "json" })) || { partidas: {} };
    const partidas = atual.partidas || {};

    if (!(partida in partidas)) {
      if (Object.keys(partidas).length >= limitePartidas) {
        return { erro: `Você já jogou ${limitePartidas} partidas hoje. O narrador precisa dormir. Volte amanhã!` };
      }
      partidas[partida] = 0;
    }
    if (partidas[partida] >= PEDIDOS_POR_PARTIDA) {
      return { erro: "Esta partida já falou demais com o narrador. Comece uma partida nova." };
    }
    partidas[partida] += 1;

    await env.USO.put(chave, JSON.stringify({ partidas }), { expirationTtl: 60 * 60 * 48 });
    return null;
  } catch {
    return descanso;
  }
}

// guarda só um "resumo" (hash) do endereço de internet, não o endereço em si
async function resumir(texto) {
  const dados = new TextEncoder().encode("jogo-irving:" + texto);
  const hash = await crypto.subtle.digest("SHA-256", dados);
  return [...new Uint8Array(hash)].slice(0, 12).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function responder(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...cors },
  });
}
