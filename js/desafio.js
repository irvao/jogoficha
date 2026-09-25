// =====================================================================
//  DESAFIO DO IRVING - O JOGO (telas, dado, regras)
//  Usa: desafio-dados.js (conteúdo) e desafio-ia.js (narrador)
// =====================================================================

const $ = (id) => document.getElementById(id);
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));
const limitar = (v, min, max) => Math.max(min, Math.min(max, v));

let est = null;          // estado da partida
let passoPendente = null; // pra botão "tentar de novo"
let digitando = null;     // efeito de máquina de escrever

const INTRO = "Bom dia! O Irving acorda em casa com uma ideia brilhante: tomar café da manhã na padaria. O estômago ronca alto, a cama ainda chama, e o dia parece tranquilo. Parece.\n\nO que o Irving faz?";

// ---------- memória do navegador (finais descobertos) ----------
function finaisDescobertos() {
  try { return JSON.parse(localStorage.getItem("desafio-finais") || "[]"); } catch { return []; }
}
function guardarFinal(id) {
  const lista = finaisDescobertos();
  if (!lista.includes(id)) lista.push(id);
  try { localStorage.setItem("desafio-finais", JSON.stringify(lista)); } catch {}
  return lista;
}

// ---------- cenário e personagem ----------
let fundoAtivo = "a";
async function trocarFundo(id) {
  const url = arquivoFundo(id);
  await carregarImagem(url);
  const prox = fundoAtivo === "a" ? "b" : "a";
  $("fundo-" + prox).style.backgroundImage = `url(${url})`;
  $("fundo-" + prox).classList.add("ativo");
  $("fundo-" + fundoAtivo).classList.remove("ativo");
  fundoAtivo = prox;
}
function carregarImagem(url) {
  return new Promise((ok) => {
    const img = new Image();
    const fim = () => ok();
    img.onload = fim; img.onerror = fim;
    setTimeout(fim, 4000);
    img.src = url;
  });
}
function cara(expr, efeito) {
  const el = $("irving");
  el.src = `assets/desafio/irving/irving-${expr}.webp`;
  if (efeito) {
    el.classList.remove("pulo", "tremor");
    void el.offsetWidth;
    el.classList.add(efeito);
  }
}
function mostrarPlaca(id) {
  const p = $("placa");
  p.hidden = true; void p.offsetWidth;
  p.textContent = nomeLugar(id);
  p.hidden = false;
}

// ---------- HUD ----------
function atualizarHud(bater) {
  $("vida-num").textContent = est.vida;
  $("vida-barra").style.width = est.vida + "%";
  $("vida").classList.toggle("baixa", est.vida <= 30);
  if (bater) { $("vida").classList.remove("bateu"); void $("vida").offsetWidth; $("vida").classList.add("bateu"); }
  $("hud-cena").textContent = "Cena " + est.cena;
  const m = $("mochila");
  m.innerHTML = "";
  for (let i = 0; i < REGRAS.maxItens; i++) {
    const id = est.itens[i];
    const s = document.createElement("div");
    if (id) {
      const it = ITENS.find((x) => x.id === id);
      s.className = "slot" + (id === est.itemNovo ? " novo" : "");
      s.dataset.nome = it.nome;
      s.tabIndex = 0;
      s.title = it.nome;
      s.innerHTML = `<img src="assets/desafio/itens/${it.arq}.webp" alt="${it.nome}">`;
    } else {
      s.className = "slot vazio";
    }
    m.appendChild(s);
  }
  est.itemNovo = null;
}

// ---------- caixa de texto ----------
function estadoCaixa(modo) {
  // modo: "acao" (esperando o jogador), "pensando", "continuar", "erro", "nada"
  $("form-acao").hidden = modo !== "acao";
  $("pensando").hidden = modo !== "pensando";
  $("caixa-botoes").hidden = modo !== "continuar";
  $("erro").hidden = modo !== "erro";
}
function pensando(txt) {
  $("pensando-txt").textContent = txt;
  estadoCaixa("pensando");
  rolarCaixa();
}
function rolarCaixa() {
  const c = $("caixa");
  requestAnimationFrame(() => { c.scrollTop = c.scrollHeight; });
}
async function escrever(partes) {
  // partes: [{txt, cls}] ; a última parte é "digitada"
  const el = $("caixa-texto");
  el.innerHTML = "";
  if (digitando) digitando.pular = true;
  const ctrl = { pular: false };
  digitando = ctrl;
  for (const p of partes) {
    const span = document.createElement("span");
    if (p.cls) span.className = p.cls;
    el.appendChild(span);
    if (!p.digitar) { span.textContent = p.txt; continue; }
    const txt = p.txt;
    for (let i = 0; i < txt.length; i += 2) {
      if (ctrl.pular) break;
      span.textContent = txt.slice(0, i + 2);
      if (i % 40 === 0) rolarCaixa();
      await esperar(14);
    }
    span.textContent = txt;
  }
  if (digitando === ctrl) digitando = null;
  rolarCaixa();
}
function mostrarDelta(tags) {
  $("caixa-delta").innerHTML = tags.map((t) => `<span class="tag ${t.cls || ""}">${t.txt}</span>`).join("");
}
function mostrarErro(e, repetir) {
  let msg = "O narrador tropeçou. ";
  if (e && e.status === 429) msg = "O narrador cansou de tanto falar (limite de uso da IA). Espere um pouquinho e tente de novo. ";
  else if (e && e.status === 403) msg = "Este endereço não tem permissão pra falar com o narrador. ";
  else if (!navigator.onLine) msg = "Parece que a internet caiu. ";
  $("erro-txt").textContent = msg;
  passoPendente = repetir;
  estadoCaixa("erro");
  rolarCaixa();
}

// ---------- início ----------
function telaInicio() {
  document.body.classList.remove("morte");
  trocarFundo("casa-irving");
  cara("feliz");
  $("tela-inicio").hidden = false;
  $("tela-final").hidden = true;
  $("caixa").hidden = true;
  $("hud").hidden = true;
  $("placa").hidden = true;
  const n = finaisDescobertos().length;
  $("inicio-finais").textContent = n ? `Finais descobertos: ${n} de ${Object.keys(FINAIS).length}` : "";
}

function comecar() {
  est = {
    vida: REGRAS.vidaInicial,
    cena: 1,
    totalCenas: REGRAS.cenasMin + Math.floor(Math.random() * (REGRAS.cenasMax - REGRAS.cenasMin + 1)),
    lugar: "casa-irving",
    situacao: INTRO,
    itens: [],
    itensJaTidos: [],
    adversidades: [],
    advAparecidas: [],
    visitados: ["casa-irving"],
    cenasNoLugar: 1,
    chapeuNaCabeca: false,
    historico: [],
    itemNovo: null,
  };
  // toda partida tem pelo menos 1 item: se até esta cena (2ª a 4ª) nada apareceu, um item aparece com certeza
  est.cenaItemGarantido = 2 + Math.floor(Math.random() * 3);
  document.body.classList.remove("morte");
  $("tela-inicio").hidden = true;
  $("tela-final").hidden = true;
  $("hud").hidden = false;
  $("caixa").hidden = false;
  atualizarHud();
  entrarNaCena("casa-irving", INTRO, "determinado");
}

async function entrarNaCena(lugar, situacao, expr) {
  const mesmoLugar = est.lugar === lugar && est.cena > 1;
  est.lugar = lugar;
  est.situacao = situacao;
  mostrarDelta([]);
  estadoCaixa("nada");
  if (!mesmoLugar) {
    await trocarFundo(lugar);
    mostrarPlaca(lugar);
  }
  cara(expr || "neutro", "pulo");
  atualizarHud();
  $("campo-acao").value = "";
  await escrever([{ txt: situacao, digitar: true }]);
  estadoCaixa("acao");
  if (window.matchMedia("(pointer: fine)").matches) $("campo-acao").focus();
  rolarCaixa();
}

// ---------- jogada ----------
async function agir(ev) {
  ev.preventDefault();
  const acao = $("campo-acao").value.trim().replace(/\s+/g, " ");
  if (acao.length < 2) { $("campo-acao").focus(); return; }
  $("campo-acao").blur();
  await passoAvaliar(acao);
}

async function passoAvaliar(acao) {
  $("caixa-texto").innerHTML = "";
  await escrever([{ txt: "» " + acao, cls: "acao-jogador" }]);
  pensando("o narrador está avaliando a ideia");
  let av;
  try {
    av = await avaliarAcao(est, est.situacao, acao);
  } catch (e) {
    return mostrarErro(e, () => passoAvaliar(acao));
  }
  const rolagem = await rolarDado(av);
  await passoResolver(acao, av, rolagem);
}

async function rolarDado(av) {
  const palco = $("dado-palco"), dado = $("dado"), num = $("dado-num"), selo = $("dado-selo");
  selo.textContent = ""; selo.className = "dado-selo";
  dado.className = "dado";
  num.textContent = "?";
  const coment = av.comentario ? `<small>${escaparHtml(av.comentario)}</small>` : "";
  $("dado-dif").innerHTML = av.impossivel ? `Isso não dá pra fazer...${coment}` : `Precisa tirar ${av.dificuldade} ou mais${coment}`;
  palco.hidden = false;

  let valor = null, tipo;
  if (av.impossivel) {
    await esperar(1400);
    tipo = "impossivel";
    selo.textContent = "IMPOSSÍVEL";
    selo.classList.add("ruim");
  } else {
    await esperar(900);
    dado.classList.add("rolando");
    valor = 1 + Math.floor(Math.random() * 20);
    const t0 = Date.now();
    while (Date.now() - t0 < 1500) {
      num.textContent = 1 + Math.floor(Math.random() * 20);
      await esperar(80);
    }
    num.textContent = valor;
    dado.classList.remove("rolando");
    void dado.offsetWidth;
    dado.classList.add("parou");
    if (valor === 20) { tipo = "critico"; dado.classList.add("critico"); }
    else if (valor === 1) { tipo = "desastre"; dado.classList.add("desastre"); }
    else tipo = valor >= av.dificuldade ? "sucesso" : "falha";
    await esperar(350);
    const rot = { critico: "SUCESSO CRÍTICO!", desastre: "FALHA CRÍTICA!", sucesso: "SUCESSO!", falha: "FALHOU!" }[tipo];
    selo.textContent = rot;
    selo.classList.add(tipo === "critico" || tipo === "sucesso" ? "bom" : "ruim");
  }
  await esperar(1500);
  palco.hidden = true;

  const textos = {
    critico: { texto: `SUCESSO CRÍTICO (tirou 20 no dado)`, explicacao: "Deu certo de um jeito espetacular, muito melhor do que o esperado." },
    sucesso: { texto: `SUCESSO (tirou ${valor}, precisava de ${av.dificuldade})`, explicacao: "A ação dá certo." },
    falha: { texto: `FALHA (tirou ${valor}, precisava de ${av.dificuldade})`, explicacao: "A ação dá errado, de um jeito engraçado." },
    desastre: { texto: `FALHA CRÍTICA (tirou 1 no dado)`, explicacao: "Dá tudo errado, do pior e mais absurdo jeito possível." },
    impossivel: { texto: "FALHA AUTOMÁTICA (a ação era impossível pelas regras)", explicacao: "Não dá certo. Explique de forma engraçada por que não rolou (ex.: sem dinheiro)." },
  };
  return { tipo, valor, ...textos[tipo] };
}

function sortearProxima() {
  const ultima = est.cena >= est.totalCenas;
  let item = null, adversidade = null;
  if (!ultima) {
    const garantido = est.itensJaTidos.length === 0 && est.cena + 1 >= est.cenaItemGarantido;
    if (est.itens.length < REGRAS.maxItens && (garantido || Math.random() < REGRAS.chanceItem)) {
      const livres = ITENS.filter((i) => !est.itens.includes(i.id));
      item = sortear(livres);
    }
    if (Math.random() < REGRAS.chanceAdversidade) {
      const livres = ADVERSIDADES.filter((a) => !est.adversidades.includes(a.id));
      if (livres.length) adversidade = sortear(livres);
    }
  }
  return { ultima, item, adversidade };
}

async function passoResolver(acao, av, rolagem, proxima) {
  proxima = proxima || sortearProxima();
  pensando(rolagem.tipo === "falha" || rolagem.tipo === "desastre" ? "o narrador está rindo" : "o narrador está contando o que aconteceu");
  let r;
  try {
    r = await resolverAcao(est, est.situacao, acao, rolagem, proxima);
  } catch (e) {
    return mostrarErro(e, () => passoResolver(acao, av, rolagem, proxima));
  }
  aplicarResultado(acao, rolagem, proxima, r);
}

function aplicarResultado(acao, rolagem, proxima, r) {
  // vida (dentro de limites por tipo de resultado)
  // a Vida nunca aumenta: o dia só desgasta
  const faixas = { critico: [0, 0], sucesso: [-8, 0], falha: [-20, -8], desastre: [-40, -20], impossivel: [-15, -5] };
  const [mn, mx] = faixas[rolagem.tipo];
  const dVida = limitar(r.vida, mn, mx);
  est.vida = limitar(est.vida + dVida, 0, 100);

  // itens e problemas
  const tags = [];
  if (dVida) tags.push({ txt: `${dVida > 0 ? "+" : ""}${dVida} Vida`, cls: dVida > 0 ? "mais" : "menos" });
  const tinhaMisto = est.itens.includes("misto-quente");
  const tinhaMaquina = est.itens.includes("maquina-do-tempo");
  r.itensRemovidos.forEach((id) => {
    if (est.itens.includes(id)) {
      est.itens = est.itens.filter((x) => x !== id);
      tags.push({ txt: `perdeu: ${ITENS.find((i) => i.id === id).nome}`, cls: "menos" });
    }
  });
  r.adversidadesResolvidas.forEach((id) => {
    if (est.adversidades.includes(id)) est.adversidades = est.adversidades.filter((x) => x !== id);
  });
  if (r.colocouChapeu && est.itens.includes("chapeu")) est.chapeuNaCabeca = true;
  if (!est.itens.includes("chapeu")) est.chapeuNaCabeca = false;

  est.historico.push({ lugar: nomeLugar(est.lugar), acao, resumo: r.resultado.slice(0, 220) });

  // mostra o resultado
  const exprResultado = { critico: "feliz", sucesso: "determinado", falha: sortear(["assustado", "bravo", "confuso"]), desastre: "assustado", impossivel: "confuso" }[rolagem.tipo];
  cara(exprResultado, rolagem.tipo === "falha" || rolagem.tipo === "desastre" ? "tremor" : "pulo");
  atualizarHud(dVida < 0);
  mostrarDelta(tags);
  escrever([{ txt: "» " + acao, cls: "acao-jogador" }, { txt: r.resultado, digitar: true }]).then(() => {
    estadoCaixa("continuar");
    $("btn-continuar").focus({ preventScroll: true });
    rolarCaixa();
  });

  // o que vem depois
  if (est.vida <= 0) return (proximoPasso = () => mostrarFinal("morte"));
  if (r.comeuMistoFora && tinhaMisto) return (proximoPasso = () => mostrarFinal("misto-triste"));
  if (proxima.ultima) return (proximoPasso = () => mostrarFinal(sortearFinal()));

  let destino = r.proximoLugar;
  if (r.usouMaquinaTempo && tinhaMaquina) destino = "tunel-do-tempo";
  const valido = destino === "tunel-do-tempo" ? tinhaMaquina : (LUGARES.some((l) => l.id === destino) || destino === est.lugar);
  const podeFicar = est.cenasNoLugar < REGRAS.maxCenasMesmoLugar;
  if (!valido || (destino === est.lugar && !podeFicar)) destino = sortear(LUGARES.filter((l) => l.id !== est.lugar && !est.visitados.includes(l.id))).id;

  proximoPasso = () => {
    est.cena++;
    est.cenasNoLugar = destino === est.lugar ? est.cenasNoLugar + 1 : 1;
    if (!est.visitados.includes(destino)) est.visitados.push(destino);
    if (proxima.item) {
      est.itens.push(proxima.item.id);
      if (!est.itensJaTidos.includes(proxima.item.id)) est.itensJaTidos.push(proxima.item.id);
      est.itemNovo = proxima.item.id;
      setTimeout(() => mostrarAchado(proxima.item), 900);
    }
    if (proxima.adversidade) {
      est.adversidades.push(proxima.adversidade.id);
      if (!est.advAparecidas.includes(proxima.adversidade.id)) est.advAparecidas.push(proxima.adversidade.id);
    }
    const sit = r.situacao || "O Irving chega num lugar novo e olha em volta, confuso. O que ele faz?";
    entrarNaCena(destino, sit, r.expressao);
  };
}
let proximoPasso = null;

function mostrarAchado(item) {
  const a = $("achado");
  a.hidden = true; void a.offsetWidth;
  $("achado-img").src = `assets/desafio/itens/${item.arq}.webp`;
  $("achado-nome").textContent = item.nome;
  a.hidden = false;
  setTimeout(() => { a.hidden = true; }, 3700);
}

// ---------- finais ----------
function sortearFinal() {
  const marcas = new Set([
    ...est.visitados,
    ...est.itensJaTidos.map((i) => "item:" + i),
    ...est.advAparecidas.map((a) => "adv:" + a),
  ]);
  const pesos = FINAIS_SORTEIO.map((id) => 1 + (PUXA_FINAL[id] || []).filter((m) => marcas.has(m)).length);
  const soma = pesos.reduce((a, b) => a + b, 0);
  let sorte = Math.random() * soma;
  let escolhido = FINAIS_SORTEIO[0];
  for (let i = 0; i < FINAIS_SORTEIO.length; i++) {
    sorte -= pesos[i];
    if (sorte <= 0) { escolhido = FINAIS_SORTEIO[i]; break; }
  }
  if (escolhido === "feliz" && est.itens.includes("misto-quente")) escolhido = "misto-dupla";
  return escolhido;
}

async function mostrarFinal(id) {
  const f = { id, ...FINAIS[id] };
  $("caixa").hidden = true;
  $("hud").hidden = true;
  $("placa").hidden = true;
  if (id === "morte") document.body.classList.add("morte");
  else await trocarFundo(f.fundo);
  cara(f.cara, "pulo");

  const lista = guardarFinal(id);
  $("final-tipo").textContent = { bom: "final bom", medio: "final médio", ruim: "final ruim" }[f.tipo];
  $("final-tipo").className = "final-tipo " + f.tipo;
  $("final-nome").textContent = f.nome;
  $("final-texto").textContent = f.texto;
  const lugares = est.visitados.map(nomeLugar);
  $("final-resumo").textContent = `${est.cena} ${est.cena === 1 ? "cena" : "cenas"} · Vida ${est.vida} · Passou por: ${lugares.join(", ")}`;

  const total = Object.keys(FINAIS).length;
  $("galeria-titulo").textContent = `Finais descobertos: ${lista.length} de ${total}`;
  $("galeria").innerHTML = Object.entries(FINAIS).map(([k, v]) => {
    const ok = lista.includes(k);
    return `<div class="${ok ? "ok " + v.tipo : "bloq"}${k === id ? " agora" : ""}">${ok ? v.nome : "???"}</div>`;
  }).join("");

  $("tela-final").hidden = false;
  $("btn-denovo").focus({ preventScroll: true });

  // o narrador personaliza o final com a jornada
  if (est.historico.length) {
    const texto = await narrarFinal(est, f);
    if (!$("tela-final").hidden && $("final-nome").textContent === f.nome) $("final-texto").textContent = texto;
  }
}

function escaparHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ---------- ligações ----------
document.addEventListener("DOMContentLoaded", () => {
  $("btn-comecar").addEventListener("click", comecar);
  $("btn-denovo").addEventListener("click", comecar);
  $("form-acao").addEventListener("submit", agir);
  $("campo-acao").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("form-acao").requestSubmit(); }
  });
  $("campo-acao").addEventListener("input", (e) => {
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
  });
  $("campo-acao").addEventListener("focus", () => setTimeout(rolarCaixa, 300));
  // teclado do celular: sobe a caixa de texto pra ficar acima do teclado
  if (window.visualViewport) {
    const vv = window.visualViewport;
    const ajustarTeclado = () => {
      const teclado = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
      document.documentElement.style.setProperty("--teclado", teclado + "px");
      document.documentElement.style.setProperty("--visivel", vv.height + "px");
      document.body.classList.toggle("com-teclado", teclado > 80);
      if (teclado > 80) rolarCaixa();
    };
    vv.addEventListener("resize", ajustarTeclado);
    vv.addEventListener("scroll", ajustarTeclado);
    $("campo-acao").addEventListener("blur", () => setTimeout(() => { window.scrollTo(0, 0); ajustarTeclado(); }, 100));
  }
  $("btn-continuar").addEventListener("click", () => { const p = proximoPasso; proximoPasso = null; if (p) p(); });
  $("btn-tentar").addEventListener("click", () => { const p = passoPendente; passoPendente = null; if (p) p(); });
  $("caixa").addEventListener("click", (e) => { if (digitando && !e.target.closest("form, button")) digitando.pular = true; });
  // pré-carrega as caras do Irving
  EXPRESSOES.forEach((x) => carregarImagem(`assets/desafio/irving/irving-${x}.webp`));
  telaInicio();
});
