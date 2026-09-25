// =====================================================================
//  DESAFIO DO IRVING - A TELA (cenário, botões, dado, duelo, final)
//  As regras ficam em desafio-motor.js e o conteúdo em js/historia/.
// =====================================================================

const $ = (id) => document.getElementById(id);
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

let est = null;           // estado da partida
let digitando = null;     // efeito de máquina de escrever
let proximoPasso = null;  // o que o botão "Continuar" faz
let travado = false;      // evita clique duplo nas opções

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
function atualizarHud(bater, itemNovo) {
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
      s.className = "slot" + (id === itemNovo ? " novo" : "");
      s.dataset.nome = it.dica ? `${it.nome}: ${it.dica}` : it.nome;
      s.tabIndex = 0;
      s.title = it.nome;
      s.innerHTML = `<img src="assets/desafio/itens/${it.arq}.webp" alt="${it.nome}">`;
    } else {
      s.className = "slot vazio";
    }
    m.appendChild(s);
  }
}

// ---------- caixa de texto ----------
function estadoCaixa(modo) {
  // modo: "opcoes" (esperando o jogador escolher), "continuar", "nada"
  $("opcoes").hidden = modo !== "opcoes";
  $("caixa-botoes").hidden = modo !== "continuar";
}
function rolarCaixa(topo) {
  const c = $("caixa");
  requestAnimationFrame(() => { c.scrollTop = topo ? 0 : c.scrollHeight; });
}
async function escrever(partes) {
  // partes: [{txt, cls, digitar}] ; só as partes com digitar=true aparecem letra por letra
  const el = $("caixa-texto");
  el.innerHTML = "";
  if (digitando) digitando.pular = true;
  const ctrl = { pular: false };
  digitando = ctrl;
  for (const p of partes) {
    if (!p.txt) continue;
    const span = document.createElement("span");
    span.className = "parte" + (p.cls ? " " + p.cls : "");
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
  $("caixa-delta").innerHTML = (tags || []).map((t) => `<span class="tag ${t.cls || ""}">${escaparHtml(t.txt)}</span>`).join("");
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

async function comecar() {
  est = novaPartida();
  document.body.classList.remove("morte", "vendado");
  $("tela-inicio").hidden = true;
  $("tela-final").hidden = true;
  $("hud").hidden = false;
  $("caixa").hidden = false;
  mostrarDelta([]);
  estadoCaixa("nada");
  atualizarHud();
  await trocarFundo("casa-irving");
  mostrarPlaca("casa-irving");
  cara("determinado", "pulo");
  await escrever([{ txt: INTRO, digitar: true }]);
  mostrarOpcoes();
}

// ---------- as 6 opções ----------
function mostrarOpcoes() {
  const ops = opcoesDaCena(est);
  est.opcoesAtuais = ops;
  const box = $("opcoes");
  box.innerHTML = "";
  ops.forEach((ref, i) => {
    const o = ref.o;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "opcao" + (ref.id.startsWith("adv:") ? " opcao-adv" : "") + (ref.id.startsWith("item:") ? " opcao-item" : "") + (ref.desfecho ? " opcao-fim" : "");
    let extra = ref.desfecho ? `<span class="opcao-ico opcao-estrela">✨</span>` : "";
    if (ref.id.startsWith("item:")) {
      const it = ITENS.find((x) => x.id === o.precisa);
      if (it) extra += `<img class="opcao-ico" src="assets/desafio/itens/${it.arq}.webp" alt="">`;
    }
    const risco = o.risco !== undefined ? `<span class="opcao-risco" title="Opção arriscada: rola o dado">🎲 ${Math.round(((21 - o.risco) / 20) * 100)}%</span>` : "";
    b.innerHTML = `<span class="opcao-num">${i + 1}</span>${extra}<span class="opcao-txt">${escaparHtml(o.t)}</span>${risco}`;
    b.addEventListener("click", () => escolher(i));
    box.appendChild(b);
  });
  travado = false;
  estadoCaixa("opcoes");
  rolarCaixa(true); // volta pro começo do texto: lê a cena e depois desce pras opções
}

async function escolher(i) {
  if (travado || !est || !est.opcoesAtuais) return;
  const ref = est.opcoesAtuais[i];
  if (!ref) return;
  travado = true;
  estadoCaixa("nada");
  let valor = null;
  if (ref.o.risco !== undefined) valor = await rolarDado(ref.o.risco);
  const r = aplicarEscolha(est, ref, valor);
  est.opcoesAtuais = null;

  cara(r.cara, r.dVida < 0 || (r.arriscada && !r.sucesso) ? "tremor" : "pulo");
  atualizarHud(r.dVida < 0, r.itemNovo);
  if (r.curou) { $("vida").classList.remove("curou"); void $("vida").offsetWidth; $("vida").classList.add("curou"); }
  if (r.itemNovo) mostrarAchado(ITENS.find((x) => x.id === r.itemNovo));
  mostrarDelta(r.tags);
  await escrever([{ txt: "» " + ref.o.t, cls: "acao-jogador" }, { txt: r.texto, digitar: true }]);

  if (r.fim) proximoPasso = () => mostrarFinal(r.fim);
  else proximoPasso = () => irPara(r.destino, r.fica ? r.texto : null);
  estadoCaixa("continuar");
  $("btn-continuar").focus({ preventScroll: true });
  rolarCaixa();
}

// ---------- próxima cena ----------
async function irPara(destino, textoAnterior) {
  const c = avancarCena(est, destino);
  mostrarDelta(c.tags);
  estadoCaixa("nada");
  const estavaVendado = document.body.classList.contains("vendado");
  document.body.classList.toggle("vendado", !!c.vendado);
  if (!c.mesmo || estavaVendado) {
    await trocarFundo(destino);
    if (!c.vendado) mostrarPlaca(destino);
    else $("placa").hidden = true;
  }
  cara(c.adversidade ? "assustado" : c.chefe ? "determinado" : c.npc || c.vendedor ? "feliz" : "neutro", "pulo");
  atualizarHud(c.tags.length > 0, c.item ? c.item.id : null);
  if (c.item) setTimeout(() => mostrarAchado(c.item), 600);
  if (c.adversidade) setTimeout(() => mostrarAlerta(c.adversidade), c.item ? 4300 : 600);

  const partes = [];
  if (c.mesmo && textoAnterior) partes.push({ txt: textoAnterior, cls: "anterior" });
  partes.push({ txt: c.texto || "O Irving respira fundo e olha em volta.", digitar: true });
  await escrever(partes);

  if (c.morreu) {
    proximoPasso = () => mostrarFinal("morte");
    estadoCaixa("continuar");
    return;
  }
  // encontros (chefe, vendedor, NPC): espera o jogador clicar em Continuar, pra dar tempo de ler a cena
  const encontro = c.chefe ? () => iniciarDuelo(c.chefe) : c.vendedor ? () => iniciarVendedor(c.vendedor) : c.npc ? () => iniciarNpc(c.npc) : null;
  if (encontro) {
    proximoPasso = encontro;
    estadoCaixa("continuar");
    $("btn-continuar").focus({ preventScroll: true });
    rolarCaixa();
    return;
  }
  mostrarOpcoes();
}

// ---------- dado (só nas opções arriscadas) ----------
async function rolarDado(risco) {
  const palco = $("dado-palco"), dado = $("dado"), num = $("dado-num"), selo = $("dado-selo");
  selo.textContent = ""; selo.className = "dado-selo";
  dado.className = "dado";
  num.textContent = "?";
  const chance = Math.round(((21 - risco) / 20) * 100);
  $("dado-dif").innerHTML = `Precisa tirar ${risco} ou mais<small>${chance}% de chance</small>`;
  palco.hidden = false;
  await esperar(800);
  dado.classList.add("rolando");
  const valor = 1 + Math.floor(Math.random() * 20);
  const t0 = Date.now();
  while (Date.now() - t0 < 1400) {
    num.textContent = 1 + Math.floor(Math.random() * 20);
    await esperar(80);
  }
  num.textContent = valor;
  dado.classList.remove("rolando");
  void dado.offsetWidth;
  dado.classList.add("parou");
  const deu = valor >= risco;
  if (valor === 20) dado.classList.add("critico");
  if (valor === 1) dado.classList.add("desastre");
  await esperar(300);
  selo.textContent = deu ? "DEU CERTO!" : "DEU ERRADO!";
  selo.classList.add(deu ? "bom" : "ruim");
  await esperar(1300);
  palco.hidden = true;
  return valor;
}

// ---------- encontros: painel comum (chefes, NPCs e vendedor) ----------
let duelo = null;
function abrirPainel({ img, emoji, titulo, nome, amigo, placar }) {
  const el = $("chefe-img"), em = $("chefe-emoji");
  em.hidden = true;
  if (img) {
    el.hidden = false;
    el.onerror = () => { el.hidden = true; em.textContent = emoji || "❓"; em.hidden = false; };
    el.src = img;
  } else {
    el.hidden = true;
    em.textContent = emoji || "❓";
    em.hidden = false;
  }
  el.alt = nome;
  $("duelo-titulo").textContent = titulo;
  $("duelo-nome").textContent = nome;
  $("duelo-placar").hidden = !placar;
  $("duelo-fim").hidden = true;
  $("baloes").hidden = true;
  $("respostas").hidden = true;
  $("respostas").className = "respostas";
  $("duelo").classList.toggle("amigo", !!amigo);
  $("placa").hidden = true; // a placa do lugar ficava atrás do personagem
  $("duelo").hidden = false;
}
function botoesResposta(lista, classe, aoClicar) {
  const box = $("respostas");
  box.className = "respostas" + (classe ? " " + classe : "");
  box.innerHTML = "";
  lista.forEach((item, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "resposta" + (item.cls ? " " + item.cls : "");
    b.innerHTML = item.html;
    b.addEventListener("click", () => aoClicar(i, b));
    box.appendChild(b);
  });
  box.hidden = false;
}
function travarRespostas() { document.querySelectorAll("#respostas .resposta").forEach((b) => (b.disabled = true)); }
function mostrarFimPainel(bom, selo, premio, resultado) {
  $("baloes").hidden = true;
  $("respostas").hidden = true;
  const s = $("duelo-selo");
  s.className = "dado-selo " + (bom ? "bom" : "ruim");
  s.textContent = selo;
  $("duelo-premio").innerHTML = premio;
  $("duelo-fim").hidden = false;
  $("btn-duelo-ok").focus({ preventScroll: true });
  duelo.resultado = resultado;
}

// ---------- chefe ----------
async function iniciarDuelo(chefe) {
  await esperar(200);
  if (chefe.tipo === "quiz") return iniciarQuiz(chefe);
  duelo = { chefe, pontosIrving: 0, pontosChefe: 0, jogada: 0, travado: false };
  abrirPainel({ img: chefe.img, emoji: chefe.emoji, titulo: "DUELO!", nome: chefe.nome, placar: true });
  $("placar-nome").textContent = chefe.nome;
  $("baloes").hidden = false;
  $("duelo-jogada").innerHTML = "Escolha sua jogada. Quem fizer <b>2 pontos</b> vence!";
  atualizarPlacar();
  cara("determinado", "pulo");
}
function atualizarPlacar() {
  $("placar-ir").textContent = duelo.pontosIrving;
  $("placar-ch").textContent = duelo.pontosChefe;
}
async function jogarDuelo(escolha) {
  if (!duelo || duelo.travado || !duelo.chefe || duelo.chefe.tipo === "quiz") return;
  duelo.travado = true;
  document.querySelectorAll(".balao").forEach((b) => b.classList.toggle("escolhido", b.dataset.j === escolha));
  const vil = duelo.chefe.sequencia[duelo.jogada % duelo.chefe.sequencia.length];
  duelo.jogada++;
  const eu = JOGADAS[escolha], ele = JOGADAS[vil];
  let msg;
  if (escolha === vil) { duelo.pontosIrving++; msg = "Empate! Vantagem do Irving: o ponto é dele!"; cara("feliz", "pulo"); }
  else if (eu.ganhaDe === vil) { duelo.pontosIrving++; msg = "Ponto do Irving!"; cara("feliz", "pulo"); }
  else { duelo.pontosChefe++; msg = `Ponto ${doChefe(duelo.chefe)}!`; cara("assustado", "tremor"); }
  $("duelo-jogada").innerHTML = `<span class="lance">${eu.emoji} ${eu.nome}</span> x <span class="lance">${ele.emoji} ${ele.nome}</span><br><b>${msg}</b>`;
  atualizarPlacar();
  await esperar(1300);
  document.querySelectorAll(".balao").forEach((b) => b.classList.remove("escolhido"));
  if (duelo.pontosIrving >= 2 || duelo.pontosChefe >= 2) return fimDuelo(duelo.pontosIrving >= 2);
  duelo.travado = false;
}

// chefe de quiz: 3 perguntas, acertou 2 vence
function iniciarQuiz(chefe) {
  const quiz = montarQuiz(chefe.perguntas, Math.min(REGRAS.perguntasQuiz, chefe.perguntas.length));
  duelo = { chefe, quiz, i: 0, pontosIrving: 0, pontosChefe: 0, travado: false };
  abrirPainel({ img: chefe.img, emoji: chefe.emoji, titulo: "QUIZ!", nome: chefe.nome, placar: true });
  $("placar-nome").textContent = chefe.nome;
  cara("determinado", "pulo");
  perguntaQuiz();
}
function perguntaQuiz() {
  const q = duelo.quiz[duelo.i];
  atualizarPlacar();
  $("duelo-jogada").innerHTML = `<small>Pergunta ${duelo.i + 1} de ${duelo.quiz.length} · acerte ${REGRAS.acertosQuiz} pra vencer</small><div class="duelo-pergunta">${escaparHtml(q.p)}</div>`;
  botoesResposta(q.respostas.map((r) => ({ html: escaparHtml(r.txt) })), "", responderQuiz);
  duelo.travado = false;
}
async function responderQuiz(i, botao) {
  if (!duelo || duelo.travado) return;
  duelo.travado = true;
  const q = duelo.quiz[duelo.i];
  travarRespostas();
  const botoes = [...document.querySelectorAll("#respostas .resposta")];
  q.respostas.forEach((r, k) => { if (r.certa) botoes[k].classList.add("certa"); });
  const acertou = q.respostas[i].certa;
  if (acertou) { duelo.pontosIrving++; cara("feliz", "pulo"); }
  else { duelo.pontosChefe++; botao.classList.add("errada"); cara("assustado", "tremor"); }
  const frases = (acertou ? duelo.chefe.acerto : duelo.chefe.erro) || [acertou ? "Resposta certa!" : "Errou!"];
  $("duelo-jogada").insertAdjacentHTML("beforeend", `<div class="quiz-fala ${acertou ? "bom" : "ruim"}">${escaparHtml(sortear(frases))}</div>`);
  atualizarPlacar();
  const atual = duelo;
  await esperar(2000);
  if (duelo !== atual) return;
  const precisa = REGRAS.acertosQuiz;
  const total = duelo.quiz.length;
  if (duelo.pontosIrving >= precisa) return fimDuelo(true);
  if (duelo.pontosChefe > total - precisa) return fimDuelo(false);
  duelo.i++;
  perguntaQuiz();
}

function fimDuelo(venceu) {
  const chefe = duelo.chefe;
  const res = resultadoDuelo(est, venceu);
  let premio, resumo;
  const tags = [];
  if (venceu) {
    if (res.item) {
      premio = `${oChefe(chefe)} foi derrotad${chefe.genero} e deixou cair: <b>${res.item.nome}</b>!`;
      resumo = `${oChefe(chefe)} foi derrotad${chefe.genero}! Como espólio, o Irving ganhou: ${res.item.nome}.`;
      tags.push({ txt: `ganhou: ${res.item.nome}`, cls: "mais" });
    } else {
      premio = `${oChefe(chefe)} foi derrotad${chefe.genero}! Mas a mochila está cheia e o espólio ficou pra trás.`;
      resumo = `${oChefe(chefe)} foi derrotad${chefe.genero}! Mas a mochila estava cheia e o espólio ficou pra trás.`;
    }
    cara("feliz", "pulo");
  } else {
    premio = `${oChefe(chefe)} venceu. O Irving perdeu <b>${res.dano} de Vida</b>.`;
    resumo = `${oChefe(chefe)} venceu o duelo, e o Irving saiu ferido.`;
    tags.push({ txt: `-${res.dano} Vida`, cls: "menos" });
    cara("triste", "tremor");
  }
  mostrarFimPainel(venceu, venceu ? "VITÓRIA!" : "DERROTA!", premio, { resumo, tags, item: res.item, bater: !venceu });
}

// ---------- NPC com desafio ----------
function iniciarNpc(npc) {
  duelo = { npc, travado: false };
  abrirPainel({ img: npc.img, emoji: npc.emoji, titulo: "DESAFIO!", nome: npc.nome, amigo: true });
  cara("determinado", "pulo");
  const d = desafioNpc(npc); // cada NPC pode ter vários desafios (sorteia 1)
  if (d.tipo === "adivinha") {
    const max = d.max || 10;
    duelo.segredo = 1 + Math.floor(Math.random() * max);
    duelo.chutes = d.tentativas || 3;
    $("duelo-jogada").innerHTML = `<div class="duelo-pergunta">${escaparHtml(d.p || `Adivinhe o número de 1 a ${max}!`)}</div><small id="npc-dica">Chutes restantes: ${duelo.chutes}</small>`;
    const nums = Array.from({ length: max }, (_, k) => ({ html: String(k + 1) }));
    botoesResposta(nums, "numeros", chutarNumero);
  } else {
    const q = d;
    duelo.q = q;
    $("duelo-jogada").innerHTML = `<div class="duelo-pergunta">${escaparHtml(q.p)}</div>`;
    botoesResposta(q.respostas.map((r) => ({ html: escaparHtml(r.txt) })), "", responderNpc);
  }
}
async function responderNpc(i, botao) {
  if (!duelo || duelo.travado) return;
  duelo.travado = true;
  travarRespostas();
  const botoes = [...document.querySelectorAll("#respostas .resposta")];
  duelo.q.respostas.forEach((r, k) => { if (r.certa) botoes[k].classList.add("certa"); });
  const resp = duelo.q.respostas[i];
  const ok = resp.certa;
  if (!ok) botao.classList.add("errada");
  cara(ok ? "feliz" : "confuso", ok ? "pulo" : "tremor");
  const atual = duelo;
  await esperar(1300);
  if (duelo !== atual) return;
  fimNpc(ok, resp);
}
async function chutarNumero(i, botao) {
  if (!duelo || duelo.travado) return;
  const n = i + 1;
  botao.disabled = true;
  duelo.chutes--;
  if (n === duelo.segredo) {
    duelo.travado = true;
    travarRespostas();
    botao.classList.add("certa");
    cara("feliz", "pulo");
    await esperar(1100);
    return fimNpc(true);
  }
  botao.classList.add("errada");
  if (duelo.chutes <= 0) {
    duelo.travado = true;
    travarRespostas();
    document.querySelectorAll("#respostas .resposta")[duelo.segredo - 1].classList.add("certa");
    $("npc-dica").textContent = `Era o ${duelo.segredo}!`;
    cara("confuso", "tremor");
    await esperar(1500);
    return fimNpc(false);
  }
  $("npc-dica").textContent = `É ${duelo.segredo > n ? "MAIOR" : "MENOR"} que ${n}! Chutes restantes: ${duelo.chutes}`;
}
function fimNpc(venceu, resp) {
  resp = resp || {};
  const npc = duelo.npc;
  const res = resultadoNpc(est, npc, venceu, resp);
  const tags = [];
  const fala = resp.fala || (venceu ? npc.acertou : npc.errou) || (venceu ? "" : "Não foi dessa vez.");
  let premio = escaparHtml(fala), resumo = fala;
  if (res.item) {
    premio += ` O Irving ganhou: <b>${res.item.nome}</b>!`;
    resumo += ` O Irving ganhou: ${res.item.nome}.`;
    tags.push({ txt: `ganhou: ${res.item.nome}`, cls: "mais" });
  } else if (res.cheia) {
    premio += " Mas a mochila está cheia e o prêmio ficou pra trás.";
    resumo += " Mas a mochila estava cheia e o prêmio ficou pra trás.";
  }
  if (res.dano) {
    premio += ` O Irving perdeu <b>${res.dano} de Vida</b>.`;
    tags.push({ txt: `-${res.dano} Vida`, cls: "menos" });
  }
  if (res.adv) {
    const x = OPCOES_ADV[res.adv.id];
    resumo += "\n\n" + (x && x.chegada ? x.chegada : res.adv.texto + "!");
  }
  cara(venceu ? "feliz" : res.adv ? "cansado" : "triste", venceu ? "pulo" : "tremor");
  mostrarFimPainel(venceu, venceu ? "CONSEGUIU!" : "NÃO DEU!", premio, { resumo: resumo.trim(), tags, item: res.item, bater: !!res.dano, adv: res.adv, vai: res.vai });
}

// ---------- vendedor da Casa do Norte: escolha 1 de 3 itens ----------
function iniciarVendedor(v) {
  duelo = { vendedor: v, travado: false };
  abrirPainel({ img: v.img, emoji: v.emoji, titulo: "PRESENTE!", nome: v.nome, amigo: true });
  cara("feliz", "pulo");
  $("duelo-jogada").innerHTML = `<div class="duelo-pergunta">Escolha um presente:</div>`;
  const lista = v.oferta.map((it) => ({ cls: "presente", html: `<img src="assets/desafio/itens/${it.arq}.webp" alt="">${escaparHtml(it.nome)}` }));
  lista.push({ cls: "nada", html: "Não quero nada" });
  botoesResposta(lista, "presentes", (i) => escolherPresente(i < v.oferta.length ? v.oferta[i] : null));
}
function escolherPresente(item) {
  if (!duelo || duelo.travado) return;
  const v = duelo.vendedor;
  if (!item) return fimVendedor(null);
  if (est.itens.length < REGRAS.maxItens) { pegarPresente(est, item.id); return fimVendedor(item); }
  // mochila cheia: escolher o que deixar
  $("duelo-jogada").innerHTML = `<div class="duelo-pergunta">A mochila está cheia! Deixar o quê pra levar ${escaparHtml(item.nome)}?</div>`;
  const atuais = est.itens.map((id) => ITENS.find((x) => x.id === id));
  const lista = atuais.map((it) => ({ cls: "presente", html: `<img src="assets/desafio/itens/${it.arq}.webp" alt="">${escaparHtml(it.nome)}` }));
  lista.push({ cls: "nada", html: "Deixa pra lá, não quero trocar" });
  botoesResposta(lista, "presentes", (i) => {
    if (i >= atuais.length) return fimVendedor(null);
    pegarPresente(est, item.id, atuais[i].id);
    fimVendedor(item, atuais[i]);
  });
}
function fimVendedor(item, deixou) {
  const v = duelo.vendedor;
  duelo.travado = true;
  const tags = [];
  let premio, resumo;
  if (item) {
    premio = `${escaparHtml(v.escolheu || "")} O Irving levou: <b>${escaparHtml(item.nome)}</b>!`;
    resumo = `${v.escolheu || ""} O Irving levou: ${item.nome}${deixou ? ` (e deixou ${deixou.nome} no balcão)` : ""}.`.trim();
    tags.push({ txt: `ganhou: ${item.nome}`, cls: "mais" });
    if (deixou) tags.push({ txt: `deixou: ${deixou.nome}`, cls: "neutra" });
    cara("feliz", "pulo");
  } else {
    premio = escaparHtml(v.recusou || "Fica pra próxima.");
    resumo = v.recusou || "O Irving agradece e não leva nada.";
  }
  mostrarFimPainel(!!item, item ? "PRESENTE!" : "TUDO BEM!", premio, { resumo, tags, item: item || null, bater: false });
}

async function sairDuelo() {
  if (!duelo || !duelo.resultado) return;
  const { resumo, tags, item, bater, adv, vai } = duelo.resultado;
  $("duelo").hidden = true;
  duelo = null;
  atualizarHud(bater, item ? item.id : null);
  if (item) setTimeout(() => mostrarAchado(item), 300);
  if (adv) setTimeout(() => mostrarAlerta(adv), item ? 4300 : 300);
  mostrarDelta(tags);
  if (est.vida <= 0) return mostrarFinal("morte");
  await escrever([{ txt: resumo, digitar: true }]);
  // o encontro pode levar o Irving pra outro lugar (ex.: a Pomba leva pra voar com os pássaros)
  if (vai) {
    proximoPasso = () => irPara(vai);
    estadoCaixa("continuar");
    $("btn-continuar").focus({ preventScroll: true });
    return;
  }
  mostrarOpcoes();
}

// ---------- avisos ----------
function mostrarAchado(item) {
  if (!item) return;
  const a = $("achado");
  a.hidden = true; void a.offsetWidth;
  $("achado-img").src = `assets/desafio/itens/${item.arq}.webp`;
  $("achado-nome").textContent = item.nome;
  $("achado-dica").textContent = item.dica || "";
  a.classList.toggle("longo", !!item.dica);
  a.hidden = false;
  setTimeout(() => { a.hidden = true; }, item.dica ? 6000 : 3700);
}
function mostrarAlerta(adv) {
  const a = $("alerta");
  a.hidden = true; void a.offsetWidth;
  $("alerta-texto").textContent = adv.texto + "!";
  a.hidden = false;
  setTimeout(() => { a.hidden = true; }, 4700);
}

// ---------- final ----------
async function mostrarFinal(id) {
  const f = { id, ...FINAIS[id] };
  $("caixa").hidden = true;
  $("hud").hidden = true;
  $("placa").hidden = true;
  document.body.classList.remove("vendado");
  if (id === "morte") document.body.classList.add("morte");
  else await trocarFundo(f.fundo);
  cara(f.cara, "pulo");

  const lista = guardarFinal(id);
  $("final-tipo").textContent = { bom: "final bom", medio: "final médio", ruim: "final ruim" }[f.tipo];
  $("final-tipo").className = "final-tipo " + f.tipo;
  $("final-nome").textContent = f.nome;
  $("final-texto").textContent = f.texto;
  const motivos = motivosFinal(est, id);
  $("final-motivos").innerHTML = motivos.length
    ? `<b>O que te trouxe até aqui:</b> ${motivos.map((m) => `«${escaparHtml(m)}»`).join(", ")}`
    : "";
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
}

function escaparHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ---------- ligações ----------
document.addEventListener("DOMContentLoaded", () => {
  $("btn-comecar").addEventListener("click", comecar);
  $("btn-denovo").addEventListener("click", comecar);
  document.querySelectorAll(".balao").forEach((b) => b.addEventListener("click", () => jogarDuelo(b.dataset.j)));
  $("btn-duelo-ok").addEventListener("click", sairDuelo);
  $("btn-continuar").addEventListener("click", () => { const p = proximoPasso; proximoPasso = null; if (p) { estadoCaixa("nada"); p(); } });
  // clicar na caixa pula o efeito de digitação
  $("caixa").addEventListener("click", (e) => { if (digitando && !e.target.closest("button")) digitando.pular = true; });
  // teclado do computador: 1 a 6 escolhem, Enter/Espaço continuam
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (!$("opcoes").hidden && /^[1-9]$/.test(e.key)) { escolher(Number(e.key) - 1); return; }
    if (!$("caixa-botoes").hidden && (e.key === "Enter" || e.key === " ") && document.activeElement !== $("btn-continuar")) {
      e.preventDefault(); $("btn-continuar").click();
    }
  });
  // pré-carrega as caras do Irving
  EXPRESSOES.forEach((x) => carregarImagem(`assets/desafio/irving/irving-${x}.webp`));
  telaInicio();
});
