// =====================================================================
//  DESAFIO DO IRVING - O MOTOR (as regras, sem nada de tela)
//  Escolhe as 6 opções de cada cena, aplica o que cada escolha faz
//  e calcula o final pelos pontos. É usado pelo jogo (desafio.js)
//  e pelo simulador (ferramentas/simular.js).
// =====================================================================

const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];
const limitar = (v, min, max) => Math.max(min, Math.min(max, v));
function embaralhar(lista) {
  const a = lista.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const INTRO = "Bom dia! O Irving acorda em casa com uma ideia brilhante: tomar café da manhã na padaria. O estômago ronca alto, a cama ainda chama, e o dia parece tranquilo. Parece.";

// o chapéu maneiro: depois de colocado, o narrador SEMPRE comenta
const FRASES_CHAPEU = [
  "(E o chapéu, diga-se, continua maneiríssimo.)",
  "(O chapéu maneiro brilha, imponente, como uma coroa.)",
  "(Tudo isso sem que o chapéu maneiro perdesse a pose.)",
  "(Pessoas se viram para admirar o chapéu. Ele é MUITO maneiro.)",
  "(O chapéu segue firme. Maneiro como sempre.)",
];

// entrada de cada chefe (o duelo de pedra, papel e tesoura começa logo depois)
const ENTRADA_CHEFE = {
  "rei-do-dog": "De repente, um cheiro de salsicha toma o ar. Um vulto fantasiado de cachorro-quente gigante bloqueia o caminho, disparando jatos de ketchup e mostarda. É o REI DO DOG! Ele desafia o Irving para um duelo lendário de pedra, papel e tesoura!",
  "pedra": "O chão treme. Uma pedra gigante, fofa e sorridente, de lacinho vermelho, rola até o Irving e acena. É a PEDRA, e ela não sai do caminho por nada. Só um duelo de pedra, papel e tesoura pode decidir quem passa!",
  "crossfitera": "Um grito de \"MAIS UMA SÉRIE!\" corta o ar. Suada, descabelada e de olhos arregalados, surge a CROSSFITERA, bloqueando o caminho entre burpees. Ela desafia o Irving para um duelo de pedra, papel e tesoura!",
  "veia-bumerang": "Um bumerangue passa zunindo pela orelha do Irving e volta para a mão de uma vovó de boina e sorriso maligno. É a VEIA BUMERANG! Ela ajeita os óculos e desafia o Irving para um duelo de pedra, papel e tesoura!",
};

// ---------- começo da partida ----------
function novaPartida() {
  const est = {
    vida: REGRAS.vidaInicial,
    cena: 1,
    totalCenas: REGRAS.cenasMin + Math.floor(Math.random() * (REGRAS.cenasMax - REGRAS.cenasMin + 1)),
    lugar: "casa-irving",
    itens: [],
    itensJaTidos: [],
    adversidades: [],
    advAparecidas: [],
    visitados: ["casa-irving"],
    cenasNoLugar: 1,
    marcas: [],
    usadas: [],          // opções já escolhidas nesta partida (não aparecem de novo)
    pontos: {},          // pontos de cada final, somados pelas escolhas
    escolhas: [],        // histórico: { t, p, lugar }
  };
  est.cenaItemGarantido = 2 + Math.floor(Math.random() * 3);
  est.temAdversidade = Math.random() < REGRAS.chancePartidaComAdversidade;
  est.cenaAdvGarantida = 2 + Math.floor(Math.random() * 4);
  est.advSorteadas = 0;
  // chefe de quiz só entra no sorteio quando tiver pelo menos 3 perguntas
  est.chefe = sortear(CHEFES.filter((c) => chefeValido(c) && !c.gatilho));
  est.gatilhosFeitos = [];
  est.cenaChefe = 2 + Math.floor(Math.random() * (est.totalCenas - 1));
  est.chefeFeito = false;
  est.npcsFeitos = [];          // NPCs que já apareceram nesta partida
  est.vendedorFeito = false;    // o NPC da Casa do Norte só aparece uma vez por partida
  return est;
}

function chefeValido(c) {
  // chefe de quiz só entra quando tiver pelo menos 3 perguntas
  return c.ativo !== false && (c.tipo !== "quiz" || (c.perguntas || []).length >= REGRAS.perguntasQuiz);
}

// ---------- quais opções podem aparecer ----------
function disponivel(est, o) {
  if (o.precisa && !est.itens.includes(o.precisa)) return false;
  if (o.precisaAdv && !est.adversidades.includes(o.precisaAdv)) return false;
  if (o.precisaMarca && !est.marcas.includes(o.precisaMarca)) return false;
  if (o.semMarca && est.marcas.includes(o.semMarca)) return false;
  if (o.cenaMin && est.cena < o.cenaMin) return false;
  if (o.fim && est.cena < Math.max(o.cenaMin || 0, REGRAS.cenaMinFim)) return false;
  if (o.ganha && est.itens.includes(o.ganha)) return false;
  // chegou no limite de cenas no mesmo lugar: some quem manda ficar
  if (o.vai === "fica" && est.cenasNoLugar >= REGRAS.maxCenasMesmoLugar) return false;
  return true;
}

function refs(lista, prefixo) {
  return (lista || []).map((o, i) => ({ id: `${prefixo}#${i}`, o }));
}

function opcoesDaCena(est) {
  const total = REGRAS.opcoesPorCena;
  const livre = (r) => !est.usadas.includes(r.id) && disponivel(est, r.o);
  const escolhidas = [];

  // 1) problemas acontecendo: até 2 opções de cada, no máximo 3 no total
  let advs = [];
  for (const a of est.adversidades) advs.push(...embaralhar(refs((OPCOES_ADV[a] || {}).opcoes, "adv:" + a).filter(livre)).slice(0, 2));
  advs = embaralhar(advs).slice(0, 3);
  escolhidas.push(...advs);

  // 2) itens da mochila: no máximo 2 opções
  const itens = [];
  for (const it of est.itens) itens.push(...refs(OPCOES_ITENS[it], "item:" + it).filter(livre));
  const itensEsc = embaralhar(itens).slice(0, REGRAS.maxOpcoesItem);

  // 3) opções do lugar
  const cena = CENAS[est.lugar];
  const doLugar = embaralhar(refs(cena ? cena.opcoes : [], est.lugar).filter(livre));
  const vagas = total - escolhidas.length - itensEsc.length;
  // as que exigem item/marca são mais raras: se aparecerem, entram primeiro (são "especiais")
  const especiais = doLugar.filter((r) => r.o.precisa || r.o.precisaMarca);
  const comuns = doLugar.filter((r) => !(r.o.precisa || r.o.precisaMarca));
  const lugarEsc = [...especiais.slice(0, 1), ...comuns].slice(0, vagas);
  escolhidas.push(...lugarEsc, ...itensEsc);

  // 3b) última cena: 2 opções de desfecho, que levam direto aos finais que estão vencendo
  if (est.desfechos) {
    const comMisto = est.itens.includes("misto-quente");
    const fins = est.desfechos.map((f) => {
      const pt = PONTE_FINAL[f === "feliz" && comMisto ? "misto-dupla" : f];
      return { id: "fim:" + f, desfecho: true, o: { t: pt.t, r: pt.r, fim: f, p: {} } };
    });
    while (escolhidas.length + fins.length > total) escolhidas.pop();
    escolhidas.push(...fins);
  }

  // 4) completa com coringas
  if (escolhidas.length < total) {
    const gerais = embaralhar(refs(OPCOES_GERAIS, "geral").filter(livre));
    escolhidas.push(...gerais.slice(0, total - escolhidas.length));
  }

  // problemas aparecem primeiro; o resto vem embaralhado
  const lista = escolhidas.slice(0, total);
  const ordem = [...lista.filter((r) => r.id.startsWith("adv:")), ...embaralhar(lista.filter((r) => !r.id.startsWith("adv:") && !r.desfecho)), ...lista.filter((r) => r.desfecho)];
  return ordem;
}

// ---------- pra onde a escolha leva ----------
function resolverDestino(est, vai) {
  if (vai === "fica") {
    if (est.cenasNoLugar < REGRAS.maxCenasMesmoLugar) return est.lugar;
    vai = destinosDoLugar(est.lugar);
  }
  const lista = (Array.isArray(vai) ? vai : [vai]).filter((v) => v && v !== "fica");
  const novos = lista.filter((v) => v !== est.lugar && !est.visitados.includes(v));
  const outros = lista.filter((v) => v !== est.lugar);
  if (novos.length) return sortear(novos);
  if (outros.length) return sortear(outros);
  return sortear(destinosDoLugar(est.lugar));
}
function destinosDoLugar(id) {
  const s = new Set();
  const c = CENAS[id];
  if (c) c.opcoes.forEach((o) => (Array.isArray(o.vai) ? o.vai : [o.vai]).forEach((v) => v && v !== "fica" && v !== "tunel-do-tempo" && s.add(v)));
  s.delete(id);
  return s.size ? [...s] : LUGARES.map((l) => l.id).filter((x) => x !== id);
}

// ---------- aplicar a escolha ----------
// valorDado: número do d20 (só nas opções arriscadas)
function aplicarEscolha(est, ref, valorDado) {
  const base = ref.o;
  const arriscada = base.risco !== undefined;
  const sucesso = !arriscada || valorDado >= base.risco;
  const ef = arriscada && !sucesso ? { ...base.falha } : base;
  est.usadas.push(ref.id);

  const tags = [];
  const escrito = Math.min(0, ef.vida || 0);
  const dVida = arriscada && !sucesso ? Math.round(escrito * REGRAS.danoFalha) : escrito;
  est.vida = limitar(est.vida + dVida, 0, 100);
  if (dVida) tags.push({ txt: `${dVida} Vida`, cls: "menos" });
  // itens que curam (pinga, queijo, yakult, antialérgico): a única forma de a Vida subir
  let curou = 0;
  if (ef.cura > 0) {
    const antes = est.vida;
    est.vida = limitar(est.vida + ef.cura, 0, 100);
    curou = est.vida - antes;
    tags.push({ txt: curou ? `+${curou} Vida` : "Vida já está cheia", cls: "mais" });
  }
  // tapa-olho duplo: a próxima cena fica toda escura
  if (ef.efeito === "vendado") est.vendarProxima = true;

  let texto = ef.r;

  // itens
  if (ef.perde && est.itens.includes(ef.perde)) {
    est.itens = est.itens.filter((x) => x !== ef.perde);
    if (ef.perde === "chapeu") est.marcas = est.marcas.filter((m) => m !== "chapeu");
    tags.push({ txt: `perdeu: ${nomeItem(ef.perde)}`, cls: "menos" });
  }
  // item usado some da mochila (mas continua na memória da partida e conta pros finais)
  if (base.precisa && !base.mantem && base.precisa !== ef.ganha && est.itens.includes(base.precisa)) {
    est.itens = est.itens.filter((x) => x !== base.precisa);
    tags.push({ txt: `usou: ${nomeItem(base.precisa)}`, cls: "neutra" });
  }
  let itemNovo = null;
  if (ef.ganha && !est.itens.includes(ef.ganha)) {
    if (est.itens.length < REGRAS.maxItens) {
      est.itens.push(ef.ganha);
      if (!est.itensJaTidos.includes(ef.ganha)) est.itensJaTidos.push(ef.ganha);
      itemNovo = ef.ganha;
      tags.push({ txt: `ganhou: ${nomeItem(ef.ganha)}`, cls: "mais" });
    } else {
      tags.push({ txt: `mochila cheia: ${nomeItem(ef.ganha)} ficou pra trás`, cls: "neutra" });
    }
  }
  // problemas resolvidos
  if (ef.resolve && est.adversidades.includes(ef.resolve)) {
    est.adversidades = est.adversidades.filter((x) => x !== ef.resolve);
    tags.push({ txt: "problema resolvido", cls: "mais" });
  }
  if (ef.marca && !est.marcas.includes(ef.marca)) est.marcas.push(ef.marca);

  // pontos dos finais
  for (const [f, n] of Object.entries(ef.p || {})) est.pontos[f] = (est.pontos[f] || 0) + n;
  est.escolhas.push({ t: base.t, p: ef.p || {}, lugar: est.lugar });

  // chapéu maneiro
  if (est.marcas.includes("chapeu") && base.marca !== "chapeu") texto += " " + sortear(FRASES_CHAPEU);

  // o que vem depois
  let fim = null;
  if (est.vida <= 0) fim = "morte";
  else if (ef.fim) fim = ef.fim === "feliz" && est.itens.includes("misto-quente") ? "misto-dupla" : ef.fim;
  else if (est.cena >= est.totalCenas) {
    fim = calcularFinal(est);
    // ponte: a última escolha já leva o Irving pro final, sem cair "do nada"
    const ponte = PONTE_FINAL[fim];
    if (ponte) texto += "\n\n" + ponte.r;
  }

  const destino = fim ? null : resolverDestino(est, ef.vai);
  const cara = ef.cara || (curou ? "feliz" : arriscada ? (sucesso ? "feliz" : sortear(["assustado", "bravo"])) : dVida <= -10 ? "assustado" : dVida < 0 ? "confuso" : "determinado");

  return { texto, tags, fim, destino, fica: destino === est.lugar, cara, arriscada, sucesso, itemNovo, dVida, curou };
}

// ---------- ir para a próxima cena ----------
// devolve o que aparece na chegada: texto, item achado, adversidade nova, chefe
function avancarCena(est, destino) {
  const mesmo = destino === est.lugar;
  est.cena++;
  est.cenasNoLugar = mesmo ? est.cenasNoLugar + 1 : 1;
  est.lugar = destino;
  if (!est.visitados.includes(destino)) est.visitados.push(destino);

  const partes = [];
  // tapa-olho duplo: uma cena no escuro, depois ele tira
  const tirouVenda = est.vendado;
  est.vendado = !!est.vendarProxima;
  est.vendarProxima = false;
  if (tirouVenda) partes.push("O Irving arranca o tapa-olho duplo, que já estava apertando as orelhas. A luz volta!");
  if (est.vendado) {
    partes.push("Tudo escuro. Com o tapa-olho duplo, o Irving não enxerga NADA. Só ouve sons estranhos ao redor... mas, por algum milagre, as opções continuam claras na mente dele.");
  } else if (!mesmo || tirouVenda) {
    const c = CENAS[destino];
    partes.push(c ? sortear(c.chegadas) : `O Irving chega em ${nomeLugar(destino)}.`);
  }

  // item: toda partida tem pelo menos 1 (se até a cena sorteada nada veio, vem agora)
  let item = null;
  const garantido = est.itensJaTidos.length === 0 && est.cena >= est.cenaItemGarantido;
  if (est.itens.length < REGRAS.maxItens && (garantido || Math.random() < REGRAS.chanceItem)) {
    const livres = ITENS.filter((i) => !est.itens.includes(i.id));
    item = sortear(livres);
    est.itens.push(item.id);
    if (!est.itensJaTidos.includes(item.id)) est.itensJaTidos.push(item.id);
    partes.push(`No chão, brilhando como um tesouro esquecido, o Irving encontra: ${item.nome}!`);
  }

  // problemas que continuam: lembrete + desgaste de Vida
  const tags = [];
  for (const a of est.adversidades) {
    const x = OPCOES_ADV[a];
    if (x && x.lembretes) partes.push(sortear(x.lembretes));
  }
  const incomodam = est.adversidades.filter((id) => !(ADVERSIDADES.find((a) => a.id === id) || {}).semDano);
  if (incomodam.length && REGRAS.danoAdversidade) {
    const dano = REGRAS.danoAdversidade * incomodam.length;
    est.vida = limitar(est.vida - dano, 0, 100);
    tags.push({ txt: `-${dano} Vida (problema sem resolver)`, cls: "menos" });
  }

  // adversidade nova
  let adversidade = null;
  const advGarantida = est.temAdversidade && est.advSorteadas === 0 && est.cena >= est.cenaAdvGarantida;
  const advExtra = est.temAdversidade && est.advSorteadas > 0 && Math.random() < REGRAS.chanceAdversidade;
  if ((advGarantida || advExtra) && est.advSorteadas < REGRAS.maxAdversidades) {
    est.advSorteadas++;
    const livres = ADVERSIDADES.filter((a) => !est.advAparecidas.includes(a.id));
    if (livres.length) {
      adversidade = sortear(livres);
      est.adversidades.push(adversidade.id);
      est.advAparecidas.push(adversidade.id);
      const x = OPCOES_ADV[adversidade.id];
      partes.push(x && x.chegada ? x.chegada : adversidade.texto + "!");
    }
  }

  // chefe especial de lugar (ex.: Senhor do Tempo, só no túnel do tempo)
  let chefe = null;
  const especial = CHEFES.find((c) => chefeValido(c) && c.gatilho === destino && !est.gatilhosFeitos.includes(c.id));
  if (especial) {
    chefe = especial;
    est.gatilhosFeitos.push(especial.id);
    partes.push(especial.entrada);
  }
  // chefe da partida (nunca na casa do Irving: se cair lá, fica pra próxima cena)
  if (!chefe && !est.chefeFeito && est.cena >= est.cenaChefe) {
    if (destino === "casa-irving" || destino === "cama-irving") {
      if (est.cena < est.totalCenas) est.cenaChefe = est.cena + 1;
    } else {
      chefe = est.chefe;
      est.chefeFeito = true;
      partes.push(chefe.entrada || ENTRADA_CHEFE[chefe.id] || `${oChefe(chefe)} surge e desafia o Irving para um duelo!`);
    }
  }

  // reta final: na penúltima cena aparece uma pista do final que está vencendo;
  // na última, o dia avisa que está acabando e 2 opções de desfecho entram na cena
  est.desfechos = null;
  if (est.cena === est.totalCenas - 1) {
    const [lider] = lideresFinais(est, 1);
    const chave = est.itens.includes("misto-quente") ? "misto-dupla" : lider;
    if (PONTE_FINAL[chave]) partes.push(PONTE_FINAL[chave].pista);
  } else if (est.cena === est.totalCenas) {
    // com o misto na mochila, uma das saídas é sempre levar o misto até a padaria
    est.desfechos = est.itens.includes("misto-quente") ? ["feliz", lideresFinais(est, 3).filter((f) => f !== "feliz")[0]] : lideresFinais(est, 2);
    partes.push("O dia está chegando ao fim, e o destino do Irving começa a se desenhar...");
  }

  // Casa do Norte: o vendedor oferece 1 de 3 itens (uma vez por partida)
  let vendedor = null;
  if (!chefe && destino === "casa-do-norte" && !est.vendedorFeito && typeof VENDEDOR_NORTE !== "undefined") {
    est.vendedorFeito = true;
    const livres = embaralhar(ITENS.filter((i) => !est.itens.includes(i.id)));
    vendedor = { ...VENDEDOR_NORTE, oferta: livres.slice(0, 3) };
    partes.push(VENDEDOR_NORTE.fala);
  }

  // NPC com desafio (nunca junto com chefe ou vendedor)
  let npc = null;
  if (!chefe && !vendedor && est.cena >= 2 && est.npcsFeitos.length < REGRAS.maxNpcs && Math.random() < REGRAS.chanceNpc) {
    const possiveis = NPCS.filter((n) => n.ativo !== false && !est.npcsFeitos.includes(n.id) && (!n.lugares || n.lugares.includes(destino)));
    if (possiveis.length) {
      npc = sortear(possiveis);
      est.npcsFeitos.push(npc.id);
      partes.push(npc.fala);
    }
  }

  return { texto: partes.join("\n\n"), mesmo, item, adversidade, chefe, npc, vendedor, tags, vendado: est.vendado, morreu: est.vida <= 0 };
}

// ---------- duelo contra o chefe ----------
function resultadoDuelo(est, venceu) {
  if (venceu) {
    const livres = ITENS.filter((i) => !est.itens.includes(i.id));
    if (est.itens.length < REGRAS.maxItens && livres.length) {
      const item = sortear(livres);
      est.itens.push(item.id);
      if (!est.itensJaTidos.includes(item.id)) est.itensJaTidos.push(item.id);
      return { item };
    }
    return { item: null };
  }
  est.vida = limitar(est.vida - REGRAS_CHEFE.danoDerrota, 0, 100);
  return { dano: REGRAS_CHEFE.danoDerrota };
}

// ---------- NPC: venceu o desafio, ganha item ----------
function resultadoNpc(est, npc, venceu, resp) {
  resp = resp || {};
  const dano = resp.dano !== undefined ? resp.dano : venceu ? 0 : npc.dano || 0;
  if (dano) est.vida = limitar(est.vida - dano, 0, 100);
  const adv = resp.adv ? ativarAdversidade(est, resp.adv) : null;
  const vai = resp.vai || null;
  if (!venceu || resp.premio === false) return { item: null, dano, adv, vai };
  if (est.itens.length >= REGRAS.maxItens) return { item: null, cheia: true, dano, adv, vai };
  let item = npc.premio && !est.itens.includes(npc.premio) ? ITENS.find((i) => i.id === npc.premio) : null;
  if (!item) item = sortear(ITENS.filter((i) => !est.itens.includes(i.id)));
  est.itens.push(item.id);
  if (!est.itensJaTidos.includes(item.id)) est.itensJaTidos.push(item.id);
  return { item, dano, adv, vai };
}

// ---------- Casa do Norte: pegar o presente (deixar = item que sai da mochila cheia) ----------
function pegarPresente(est, itemId, deixar) {
  if (deixar) est.itens = est.itens.filter((x) => x !== deixar);
  if (deixar === "chapeu") est.marcas = est.marcas.filter((m) => m !== "chapeu");
  if (est.itens.length >= REGRAS.maxItens) return false;
  est.itens.push(itemId);
  if (!est.itensJaTidos.includes(itemId)) est.itensJaTidos.push(itemId);
  return true;
}

// ---------- quiz: sorteia 3 perguntas e embaralha as respostas ----------
// certa: número (1, 2 ou 3), lista de números ([1, 2]) ou "todas".
// A resposta também pode ser um objeto com efeitos: { txt, ok, fala, dano, adv, vai }.
function montarQuiz(perguntas, quantas) {
  return embaralhar(perguntas).slice(0, quantas).map((q) => {
    const certas = q.certa === "todas" ? q.respostas.map((_, i) => i) : [].concat(q.certa || []).map((n) => n - 1);
    const lista = q.respostas.map((r, i) => (typeof r === "string" ? { txt: r, certa: certas.includes(i) } : { ...r, certa: r.ok !== undefined ? !!r.ok : certas.includes(i) }));
    return { p: q.p, respostas: q.embaralhar === false ? lista : embaralhar(lista) };
  });
}
// sorteia o desafio do NPC já montado
function desafioNpc(npc) {
  const d = npc.desafios ? sortear(npc.desafios) : npc.desafio;
  return d.tipo === "adivinha" ? d : { ...montarQuiz([d], 1)[0], tipo: "pergunta" };
}
// problema novo vindo de um NPC (ex.: o coach faz o Irving desmaiar)
function ativarAdversidade(est, id) {
  const a = ADVERSIDADES.find((x) => x.id === id);
  if (!a || est.adversidades.includes(id)) return null;
  est.adversidades.push(id);
  if (!est.advAparecidas.includes(id)) est.advAparecidas.push(id);
  return a;
}
// os finais com mais pontos agora (pra direcionar a reta final)
function lideresFinais(est, n) {
  const pl = placarFinais(est);
  return Object.keys(pl).sort((a, b) => pl[b] - pl[a] || Math.random() - 0.5).slice(0, n);
}

// ---------- o final ----------
// Pontos = o que as escolhas somaram + 1 por lugar visitado / item carregado / adversidade que apareceu (tabela PUXA_FINAL).
// Ganha o final com mais pontos (ajustados por AJUSTE_FINAL). Empate: sorteio entre os empatados.
function placarFinais(est) {
  const marcas = new Set([...est.visitados, ...est.itensJaTidos.map((i) => "item:" + i), ...est.advAparecidas.map((a) => "adv:" + a)]);
  const placar = {};
  for (const f of FINAIS_SORTEIO) {
    const extra = (PUXA_FINAL[f] || []).filter((m) => marcas.has(m)).length;
    placar[f] = ((est.pontos[f] || 0) + extra) * (AJUSTE_FINAL[f] || 1);
  }
  return placar;
}
function calcularFinal(est) {
  if (est.itens.includes("misto-quente")) return "misto-dupla";
  const placar = placarFinais(est);
  const max = Math.max(...Object.values(placar));
  const empatados = FINAIS_SORTEIO.filter((f) => Math.abs(placar[f] - max) < 1e-9);
  return sortear(empatados);
}
// as escolhas que mais levaram a este final (pra mostrar na tela final)
function motivosFinal(est, id) {
  return est.escolhas.filter((e) => e.p[id]).sort((a, b) => b.p[id] - a.p[id]).slice(0, 3).map((e) => e.t);
}

function nomeItem(id) { const i = ITENS.find((x) => x.id === id); return i ? i.nome : id; }
