// =====================================================================
//  FICHA.JS  - monta a ficha na tela e cuida das animações
//  Lê os dados de dados.js (PERSONAGEM, CATEGORIAS, TRACOS).
// =====================================================================

// ---------- 1. Nível = idade calculada a partir da data de nascimento ----------
function calcularIdade(dataISO) {
  const nasc = new Date(dataISO + "T00:00:00");
  const hoje = new Date();
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const aindaNaoFezAniversario =
    hoje.getMonth() < nasc.getMonth() ||
    (hoje.getMonth() === nasc.getMonth() && hoje.getDate() < nasc.getDate());
  if (aindaNaoFezAniversario) idade--;
  return idade;
}

// ---------- 2. Cabeçalho ----------
function montarCabecalho() {
  const nivel = calcularIdade(PERSONAGEM.nascimento);
  const total = CATEGORIAS.reduce((soma, c) => soma + c.habilidades.length, 0);
  const [ano, mes, dia] = PERSONAGEM.nascimento.split("-");

  document.getElementById("nome").textContent = PERSONAGEM.nome;
  document.getElementById("classe").textContent = `${PERSONAGEM.classe} · ${PERSONAGEM.subclasse}`;
  document.getElementById("subtitulo").innerHTML =
    `Especialização: ${PERSONAGEM.especializacao} &nbsp;·&nbsp; Nascido em ${dia}/${mes}/${ano} &nbsp;·&nbsp; Status: ${PERSONAGEM.status}`;
  document.getElementById("lore").textContent = PERSONAGEM.lore;
  document.getElementById("total-skills").textContent = `${total} HABILIDADES`;
  document.getElementById("rodape-nivel").textContent = `NÍVEL ${nivel}`;

  const elNivel = document.getElementById("nivel");
  elNivel.dataset.alvo = nivel;
  contarAte(elNivel, nivel, 1200);
}

// Animação de "contador": o número sobe de 0 até o alvo
function contarAte(el, alvo, duracaoMs) {
  const inicio = performance.now();
  function passo(agora) {
    const t = Math.min(1, (agora - inicio) / duracaoMs);
    const suave = 1 - Math.pow(1 - t, 3);            // desacelera no fim
    el.textContent = Math.round(alvo * suave);
    if (t < 1) requestAnimationFrame(passo);
  }
  requestAnimationFrame(passo);
}

// ---------- 3. Painéis de habilidades ----------
function classeDaNota(nota) {
  if (nota === 10) return "max";
  if (nota <= 4) return "low";
  return "";
}

function montarPaineis() {
  const grid = document.getElementById("grid");

  CATEGORIAS.forEach((cat, indiceCat) => {
    const painel = document.createElement("section");
    painel.className = "panel";
    painel.style.setProperty("--atraso", `${indiceCat * 120}ms`);

    const linhas = cat.habilidades
      .map(([nome, nota], i) => {
        const cls = classeDaNota(nota);
        return `
          <div class="skill" title="${nome}: ${nota} de 10">
            <span class="skill-nome">${nome}</span>
            <div class="bar ${cls}">
              <i style="--largura:${nota * 10}%; --atraso:${indiceCat * 120 + i * 70}ms"></i>
            </div>
            <span class="val ${cls}" data-alvo="${nota}">0</span>
          </div>`;
      })
      .join("");

    painel.innerHTML = `
      <h3 class="panel-title">
        <img src="assets/img/${cat.id}.png" alt="">
        <span>
          <span class="ttl">${cat.titulo}</span>
          <span class="cnt">${cat.habilidades.length} habilidades</span>
        </span>
      </h3>
      ${linhas}`;

    grid.appendChild(painel);
  });
}

// ---------- 4. Traços de classe ----------
function montarTracos() {
  const lista = document.getElementById("lista-tracos");
  lista.innerHTML = TRACOS.map(
    ([nome, efeito]) => `<div class="trait"><b>${nome}</b><span>${efeito}</span></div>`
  ).join("");
}

// ---------- 5. Animações que só disparam quando o painel aparece na tela ----------
function ativarAnimacoesAoRolar() {
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      const painel = entrada.target;
      painel.classList.add("visivel");

      // números das notas contam de 0 até a nota
      painel.querySelectorAll(".val[data-alvo]").forEach((el) => {
        const alvo = Number(el.dataset.alvo);
        if (reduzir) el.textContent = alvo;
        else contarAte(el, alvo, 900);
      });

      observador.unobserve(painel); // anima só uma vez
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".panel").forEach((p) => observador.observe(p));
}

// ---------- 6. Faíscas de forja no fundo (canvas) ----------
function iniciarFaiscas() {
  const canvas = document.getElementById("faiscas");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.remove();
    return;
  }
  const ctx = canvas.getContext("2d");
  let particulas = [];

  function redimensionar() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", redimensionar);
  redimensionar();

  function novaFaisca() {
    return {
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      raio: 0.6 + Math.random() * 1.6,
      velY: 0.3 + Math.random() * 0.9,
      velX: (Math.random() - 0.5) * 0.4,
      vida: 1,
      cor: Math.random() < 0.3 ? "243,207,122" : "224,138,85",
    };
  }

  function quadro() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (particulas.length < 60 && Math.random() < 0.5) particulas.push(novaFaisca());

    particulas.forEach((p) => {
      p.y -= p.velY;
      p.x += p.velX + Math.sin(p.y / 40) * 0.2;
      p.vida -= 0.003;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.raio, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.cor},${Math.max(0, p.vida) * 0.8})`;
      ctx.fill();
    });
    particulas = particulas.filter((p) => p.vida > 0 && p.y > -10);
    requestAnimationFrame(quadro);
  }
  quadro();
}

// ---------- Início ----------
document.addEventListener("DOMContentLoaded", () => {
  montarCabecalho();
  montarPaineis();
  montarTracos();
  ativarAnimacoesAoRolar();
  iniciarFaiscas();
});
