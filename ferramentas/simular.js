// Simula milhares de partidas pra ver se o emaranhado está equilibrado.
// Uso: node ferramentas/simular.js [numero-de-partidas]
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const raiz = path.join(__dirname, "..");
const ctx = { console, Math };
vm.createContext(ctx);
const arquivos = ["js/desafio-dados.js", ...fs.readdirSync(path.join(raiz, "js/historia")).sort().map((f) => "js/historia/" + f), "js/desafio-motor.js"];
vm.runInContext(arquivos.map((a) => fs.readFileSync(path.join(raiz, a), "utf8")).join("\n") + "\n;globalThis.J = {novaPartida, opcoesDaCena, aplicarEscolha, avancarCena, resultadoDuelo, resultadoNpc, desafioNpc, pegarPresente, calcularFinal, FINAIS, FINAIS_SORTEIO, CENAS};", ctx);
const J = ctx.J;
// teste de regras sem mexer nos arquivos: REGRAS='{"danoFalha":2}' node ferramentas/simular.js
if (process.env.REGRAS) vm.runInContext(`Object.assign(REGRAS, ${process.env.REGRAS})`, ctx);
if (process.env.AJUSTE) vm.runInContext(`Object.assign(AJUSTE_FINAL, ${process.env.AJUSTE})`, ctx);
if (process.env.CHEFE) vm.runInContext(`REGRAS_CHEFE.danoDerrota = ${process.env.CHEFE}`, ctx);
const N = Number(process.argv[2]) || 20000;

function jogar(estrategia) {
  const est = J.novaPartida();
  let guard = 0;
  let destino = null;
  while (guard++ < 60) {
    if (!destino) {
      const ops = J.opcoesDaCena(est);
      const ref = estrategia(est, ops);
      const dado = 1 + Math.floor(Math.random() * 20);
      const r = J.aplicarEscolha(est, ref, dado);
      if (r.fim) return { fim: r.fim, est };
      destino = r.destino;
    }
    const c = J.avancarCena(est, destino);
    destino = null;
    if (c.morreu) return { fim: "morte", est };
    if (c.chefe) {
      const p = 2 / 3; let a = 0, b = 0;
      while (a < 2 && b < 2) Math.random() < p ? a++ : b++;
      J.resultadoDuelo(est, a >= 2);
      if (est.vida <= 0) return { fim: "morte", est };
    }
    if (c.npc) {
      const d = J.desafioNpc(c.npc);
      const resp = d.respostas ? d.respostas[Math.floor(Math.random() * d.respostas.length)] : { certa: Math.random() < 0.3 };
      const res = J.resultadoNpc(est, c.npc, !!resp.certa, resp);
      if (est.vida <= 0) return { fim: "morte", est };
      if (res.vai) destino = res.vai;
    }
    if (c.vendedor && c.vendedor.oferta.length && est.itens.length < 3) J.pegarPresente(est, c.vendedor.oferta[0].id);
  }
  return { fim: "erro", est };
}
const aleatorio = (est, ops) => ops[Math.floor(Math.random() * ops.length)];

// modo calibragem: TUNAR=1 node ferramentas/simular.js  (sugere novos valores pro AJUSTE_FINAL)
if (process.env.TUNAR) {
  const alvo = {}; for (const f of J.FINAIS_SORTEIO) alvo[f] = 0.0546;
  alvo.feliz = 0.12; alvo["antes-tempo"] = 0.035; alvo["alem-tempo"] = 0.035;
  const aj = vm.runInContext("AJUSTE_FINAL", ctx);
  for (let it = 0; it < 14; it++) {
    const c = {}; for (let i = 0; i < 8000; i++) { const f = jogar(aleatorio).fim; c[f] = (c[f] || 0) + 1; }
    for (const f of J.FINAIS_SORTEIO) aj[f] *= Math.pow(alvo[f] / Math.max((c[f] || 0) / 8000, 0.002), 0.35);
  }
  const base = aj.feliz;
  console.log(JSON.stringify(Object.fromEntries(Object.entries(aj).map(([k, v]) => [k, Math.round((v / base) * 100) / 100]))));
  process.exit(0);
}
function focado(alvo) {
  return (est, ops) => {
    const nota = (r) => { const o = r.o; const chance = o.risco ? (21 - o.risco) / 20 : 1; const ps = (o.p || {})[alvo] || 0; const pf = o.falha ? ((o.falha.p || {})[alvo] || 0) : 0; return chance * ps + (1 - chance) * pf + (o.fim === alvo ? 50 : 0) - (o.fim && o.fim !== alvo ? 100 : 0) + Math.random() * 0.1; };
    return ops.slice().sort((a, b) => nota(b) - nota(a))[0];
  };
}
const pct = (n, t) => (100 * n / t).toFixed(1).padStart(5) + "%";

// 1) jogador aleatório
const cont = {}; let vidaSoma = 0, cenasSoma = 0, lugaresSoma = 0;
const lugaresVistos = {};
for (let i = 0; i < N; i++) {
  const { fim, est } = jogar(aleatorio);
  cont[fim] = (cont[fim] || 0) + 1; vidaSoma += est.vida; cenasSoma += est.cena; lugaresSoma += est.visitados.length;
  est.visitados.forEach((l) => (lugaresVistos[l] = (lugaresVistos[l] || 0) + 1));
}
console.log(`JOGADOR QUE ESCOLHE AO ACASO (${N} partidas)`);
console.log(`Vida média no fim: ${(vidaSoma / N).toFixed(0)} | cenas: ${(cenasSoma / N).toFixed(1)} | lugares diferentes por partida: ${(lugaresSoma / N).toFixed(1)}`);
Object.entries(cont).sort((a, b) => b[1] - a[1]).forEach(([f, n]) => console.log(`  ${pct(n, N)}  ${f}`));
const poucos = Object.keys(J.CENAS).filter((l) => (lugaresVistos[l] || 0) / N < 0.03);
console.log("Lugares visitados em menos de 3% das partidas:", poucos.map((l) => `${l} ${pct(lugaresVistos[l] || 0, N).trim()}`).join(", ") || "nenhum");

// 1b) jogador maluco que sempre arrisca (escolhe opção com dado sempre que tiver)
{
  const M = Math.round(N / 4); let morte = 0;
  const maluco = (est, ops) => { const r = ops.filter((x) => x.o.risco !== undefined); return (r.length ? r : ops)[Math.floor(Math.random() * (r.length || ops.length))]; };
  for (let i = 0; i < M; i++) if (jogar(maluco).fim === "morte") morte++;
  console.log(`\nJOGADOR QUE SEMPRE ARRISCA: morreu em ${pct(morte, M).trim()} das partidas`);
}

// 2) jogador que persegue um final
console.log(`\nJOGADOR QUE PERSEGUE UM FINAL (${Math.round(N / 10)} partidas cada): chance de conseguir`);
for (const alvo of J.FINAIS_SORTEIO) {
  const M = Math.round(N / 10); let ok = 0, morte = 0;
  for (let i = 0; i < M; i++) { const { fim } = jogar(focado(alvo)); if (fim === alvo) ok++; if (fim === "morte") morte++; }
  console.log(`  ${pct(ok, M)}  ${alvo}   (morreu ${pct(morte, M).trim()})`);
}
