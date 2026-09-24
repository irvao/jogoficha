// =====================================================================
//  JOGO.JS  - "Um Dia na Fortaleza"
//  Usa: CATEGORIAS (dados.js) pra pegar as notas, SITUACOES (situacoes.js).
// =====================================================================

// ---------- regras (mexa aqui pra deixar mais fácil ou mais difícil) ----------
const REGRAS = {
  situacoesPorDia: 8,
  dificuldade: 16,        // d20 + nota >= 16 é sucesso (nota 10 acerta 75%, nota 4 acerta 45%)
  vidaInicial: 100,
  bateriaInicial: 100,
  bonusPorSucesso: 10,
  desgasteVida: 8,        // o dia cansa: perde isso a cada situação, ganhando ou não
  desgasteBateria: 8,
};

// ---------- estado da partida ----------
let estado = null;

// ---------- utilidades ----------
const $ = (id) => document.getElementById(id);

// Procura a nota de uma habilidade na ficha (dados.js)
function notaDe(nomeHabilidade) {
  for (const cat of CATEGORIAS) {
    for (const [nome, nota] of cat.habilidades) {
      if (nome === nomeHabilidade) return nota;
    }
  }
  console.warn("Habilidade não encontrada na ficha:", nomeHabilidade);
  return 5;
}

function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function limitar(v) { return Math.max(0, Math.min(100, v)); }

function mostrarTela(id) {
  document.querySelectorAll(".tela").forEach((t) => (t.hidden = true));
  $(id).hidden = false;
  // reinicia a animação de entrada
  const el = $(id);
  el.classList.remove("entrando");
  void el.offsetWidth;
  el.classList.add("entrando");
}

function trocarCena(nome) {
  const cena = $("cena");
  cena.style.backgroundImage = `url(assets/img/cena-${nome}.jpg)`;
}

// ---------- medidores ----------
function atualizarHud(animarQual) {
  $("vida-num").textContent = estado.vida;
  $("bateria-num").textContent = estado.bateria;
  $("vida-barra").style.width = estado.vida + "%";
  $("bateria-barra").style.width = estado.bateria + "%";
  $("progresso").textContent = `${Math.min(estado.indice + 1, REGRAS.situacoesPorDia)} / ${REGRAS.situacoesPorDia}`;

  $("med-vida").classList.toggle("baixo", estado.vida <= 30);
  $("med-bateria").classList.toggle("baixo", estado.bateria <= 30);

  if (animarQual) {
    const el = $("med-" + animarQual.medidor);
    el.classList.remove("pulso-bom", "pulso-ruim");
    void el.offsetWidth;
    el.classList.add(animarQual.delta >= 0 ? "pulso-bom" : "pulso-ruim");
  }
}

// ---------- início ----------
function comecar() {
  estado = {
    vida: REGRAS.vidaInicial,
    bateria: REGRAS.bateriaInicial,
    indice: 0,
    sucessos: 0,
    fila: embaralhar(SITUACOES).slice(0, REGRAS.situacoesPorDia),
    historico: [],
  };
  $("hud").hidden = false;
  atualizarHud();
  mostrarSituacao();
}

// ---------- situação ----------
function mostrarSituacao() {
  const sit = estado.fila[estado.indice];
  trocarCena(sit.cena);
  $("sit-num").textContent = estado.indice + 1;
  $("sit-titulo").textContent = sit.titulo;
  $("sit-texto").textContent = sit.texto;

  const box = $("opcoes");
  box.innerHTML = "";
  sit.opcoes.forEach((op, i) => {
    const nota = notaDe(op.habilidade);
    const chance = Math.round(Math.max(5, Math.min(95, (21 - Math.max(1, REGRAS.dificuldade - nota)) / 20 * 100)));
    const btn = document.createElement("button");
    btn.className = "opcao";
    btn.style.setProperty("--atraso", `${i * 90}ms`);
    btn.innerHTML = `
      <span class="opcao-texto">${op.texto}</span>
      <span class="opcao-meta">
        <span class="opcao-skill">${op.habilidade} <b>${nota}</b></span>
        <span class="opcao-chance">${chance}% de chance</span>
      </span>`;
    btn.addEventListener("click", () => escolher(op, nota));
    box.appendChild(btn);
  });

  atualizarHud();
  mostrarTela("tela-situacao");
}

// ---------- escolha + dado ----------
function escolher(opcao, nota) {
  const sorteado = 1 + Math.floor(Math.random() * 20);
  mostrarTela("tela-dado");
  $("resultado").hidden = true;
  $("dado-conta").textContent = "";
  $("dado-num").textContent = "?";

  const dado = $("dado");
  dado.classList.remove("girando", "critico", "desastre");
  void dado.offsetWidth;
  dado.classList.add("girando");

  // números aleatórios passando enquanto gira
  let ticks = 0;
  const intervalo = setInterval(() => {
    $("dado-num").textContent = 1 + Math.floor(Math.random() * 20);
    ticks++;
    if (ticks > 14) {
      clearInterval(intervalo);
      $("dado-num").textContent = sorteado;
      dado.classList.remove("girando");
      if (sorteado === 20) dado.classList.add("critico");
      if (sorteado === 1) dado.classList.add("desastre");
      setTimeout(() => resolver(opcao, nota, sorteado), 600);
    }
  }, 90);
}

function resolver(opcao, nota, dado) {
  const total = dado + nota;
  const sucesso = dado === 20 || (dado !== 1 && total >= REGRAS.dificuldade);
  const mult = dado === 20 || dado === 1 ? 2 : 1;
  const efeito = sucesso ? opcao.sucesso : opcao.falha;

  const dVida = efeito.vida * mult;
  const dBateria = efeito.bateria * mult;
  estado.vida = limitar(estado.vida + dVida - REGRAS.desgasteVida);
  estado.bateria = limitar(estado.bateria + dBateria - REGRAS.desgasteBateria);
  if (sucesso) estado.sucessos++;
  estado.historico.push({ sucesso, dado });

  $("dado-conta").innerHTML =
    `d20 <b>${dado}</b> + ${opcao.habilidade} <b>${nota}</b> = <b>${total}</b> &nbsp;·&nbsp; precisa de ${REGRAS.dificuldade}`;

  const selo = $("res-selo");
  selo.textContent = dado === 20 ? "SUCESSO CRÍTICO" : dado === 1 ? "FALHA CRÍTICA" : sucesso ? "SUCESSO" : "FALHA";
  selo.className = "resultado-selo " + (sucesso ? "bom" : "ruim");
  $("res-frase").textContent = efeito.frase;

  const partes = [];
  if (dVida) partes.push(`<span class="${dVida > 0 ? "mais" : "menos"}">${dVida > 0 ? "+" : ""}${dVida} Vida</span>`);
  if (dBateria) partes.push(`<span class="${dBateria > 0 ? "mais" : "menos"}">${dBateria > 0 ? "+" : ""}${dBateria} Bateria</span>`);
  if (!partes.length) partes.push(`<span>nada mudou</span>`);
  partes.push(`<span class="cansaco">cansaço do dia -${REGRAS.desgasteVida} / -${REGRAS.desgasteBateria}</span>`);
  $("res-delta").innerHTML = partes.join(" &nbsp; ");

  const alvo = dVida ? { medidor: "vida", delta: dVida } : dBateria ? { medidor: "bateria", delta: dBateria } : null;
  atualizarHud(alvo);
  $("resultado").hidden = false;
}

// ---------- próxima ou fim ----------
function proxima() {
  if (estado.vida <= 0 || estado.bateria <= 0) return terminar(true);
  estado.indice++;
  if (estado.indice >= estado.fila.length) return terminar(false);
  mostrarSituacao();
}

function terminar(colapso) {
  const score = estado.vida + estado.bateria + estado.sucessos * REGRAS.bonusPorSucesso;
  let titulo, texto;

  if (colapso && estado.vida <= 0) {
    titulo = "Apagou no sofá"; texto = "O corpo desligou antes do dia acabar. A forja fica pra amanhã.";
  } else if (colapso) {
    titulo = "Bloqueou todo mundo"; texto = "A bateria social zerou. Você está na forja, celular no modo avião, e está tudo bem.";
  } else if (score >= 220) {
    titulo = "Dia lendário"; texto = "Nada te pegou de surpresa. Nem o cavalo. Você já estava preparado antes de acordar.";
  } else if (score >= 170) {
    titulo = "Senhor da Fortaleza"; texto = "Alguns arranhões, nenhuma derrota. A casa continua de pé e a faca continua afiada.";
  } else if (score >= 110) {
    titulo = "Sobreviveu"; texto = "Não foi bonito, mas foi. Amanhã tem mais.";
  } else {
    titulo = "Melhor voltar pra cama"; texto = "Hoje o dado não gostou de você. Acontece. A bigorna entende.";
  }

  $("fim-titulo").textContent = titulo;
  $("fim-texto").textContent = texto;
  $("fim-vida").textContent = estado.vida;
  $("fim-bateria").textContent = estado.bateria;
  $("fim-sucessos").textContent = `${estado.sucessos} / ${estado.historico.length}`;
  $("fim-score").textContent = score;

  // recorde fica salvo só neste navegador
  let recorde = 0;
  try { recorde = Number(localStorage.getItem("fortaleza-recorde") || 0); } catch (e) {}
  const rec = $("recorde");
  if (score > recorde) {
    rec.textContent = recorde ? `Novo recorde! O anterior era ${recorde}.` : "Primeiro dia registrado. Esse é o recorde.";
    rec.className = "recorde novo";
    try { localStorage.setItem("fortaleza-recorde", String(score)); } catch (e) {}
  } else {
    rec.textContent = `Recorde: ${recorde}`;
    rec.className = "recorde";
  }

  trocarCena("forja");
  mostrarTela("tela-fim");
}

// ---------- ligação dos botões ----------
document.addEventListener("DOMContentLoaded", () => {
  trocarCena("forja");
  $("btn-comecar").addEventListener("click", comecar);
  $("btn-proxima").addEventListener("click", proxima);
  $("btn-denovo").addEventListener("click", comecar);
  mostrarTela("tela-inicio");
});
