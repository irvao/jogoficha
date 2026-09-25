// Confere se a história está bem montada (ligações, itens, finais, tamanhos de texto).
// Uso: node ferramentas/validar.js            (confere tudo)
//      node ferramentas/validar.js rua-irving uber   (confere só esses lugares, mais o geral)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const raiz = path.join(__dirname, "..");
function carregar() {
  const ctx = { console };
  vm.createContext(ctx);
  const arquivos = ["js/desafio-dados.js", ...fs.readdirSync(path.join(raiz, "js/historia")).sort().map((f) => "js/historia/" + f)];
  let codigo = "";
  for (const a of arquivos) codigo += fs.readFileSync(path.join(raiz, a), "utf8") + "\n";
  codigo += "\n;({REGRAS, LUGARES, CENAS_EXTRAS, ITENS, ADVERSIDADES, FINAIS, FINAIS_SORTEIO, PUXA_FINAL, CENAS, OPCOES_ITENS, OPCOES_ADV, OPCOES_GERAIS, EXPRESSOES})";
  return vm.runInContext(codigo, ctx, { filename: "historia" });
}
module.exports = { carregar };

if (require.main === module) {
  const D = carregar();
  const so = process.argv.slice(2);
  const erros = [], avisos = [];
  const lugaresIds = new Set([...D.LUGARES.map((l) => l.id), "tunel-do-tempo"]);
  const itensIds = new Set(D.ITENS.map((i) => i.id));
  const advIds = new Set(D.ADVERSIDADES.map((a) => a.id));
  const finaisP = new Set(D.FINAIS_SORTEIO);
  const exprs = new Set(D.EXPRESSOES);
  const marcasUsadas = new Set(), marcasGravadas = new Set();
  const palavras = (s) => String(s).trim().split(/\s+/).length;

  function checarTexto(onde, txt, maxPal) {
    if (typeof txt !== "string" || !txt.trim()) return erros.push(`${onde}: texto vazio`);
    if (/[—–]/.test(txt)) erros.push(`${onde}: tem travessão (—/–)`);
    if (/ch[aá]cara/i.test(txt)) erros.push(`${onde}: usou "chácara"`);
    if (/naldo/i.test(txt)) erros.push(`${onde}: citou o Naldo`);
    if (maxPal && palavras(txt) > maxPal) avisos.push(`${onde}: texto longo (${palavras(txt)} palavras, máx ${maxPal})`);
  }
  function checarEfeitos(onde, o, ehFalha, lugarAtual) {
    checarTexto(onde + " r", o.r, 45);
    if (o.fim) {
      if (!finaisP.has(o.fim) && o.fim !== "misto-triste") erros.push(`${onde}: fim "${o.fim}" não existe`);
    } else if (o.vai === undefined) {
      erros.push(`${onde}: falta "vai"`);
    } else {
      const lista = Array.isArray(o.vai) ? o.vai : [o.vai];
      for (const v of lista) {
        if (v === "fica") { if (!lugarAtual) erros.push(`${onde}: "fica" fora de um lugar`); continue; }
        if (!lugaresIds.has(v)) erros.push(`${onde}: destino "${v}" não existe`);
        if (v === lugarAtual) avisos.push(`${onde}: destino é o próprio lugar (use "fica")`);
      }
    }
    if (o.p) for (const [k, n] of Object.entries(o.p)) {
      if (!finaisP.has(k)) erros.push(`${onde}: final "${k}" não existe em p`);
      if (typeof n !== "number" || n < 0) erros.push(`${onde}: pontos inválidos em ${k}`);
    }
    if (o.vida !== undefined && (typeof o.vida !== "number" || o.vida > 0)) erros.push(`${onde}: vida deve ser número <= 0`);
    if (o.cura !== undefined && (typeof o.cura !== "number" || o.cura <= 0)) erros.push(`${onde}: cura deve ser número > 0`);
    if (o.efeito !== undefined && o.efeito !== "vendado") erros.push(`${onde}: efeito desconhecido "${o.efeito}"`);
    for (const campo of ["ganha", "perde", "precisa"]) if (o[campo] && !itensIds.has(o[campo])) erros.push(`${onde}: item "${o[campo]}" não existe (${campo})`);
    for (const campo of ["resolve", "precisaAdv"]) if (o[campo] && !advIds.has(o[campo])) erros.push(`${onde}: adversidade "${o[campo]}" não existe (${campo})`);
    if (o.cara && !exprs.has(o.cara)) erros.push(`${onde}: cara "${o.cara}" não existe`);
    if (o.marca) marcasGravadas.add(o.marca);
    if (o.precisaMarca) marcasUsadas.add(o.precisaMarca);
    if (o.ganha === "misto-quente" && o.fim) erros.push(`${onde}: ganha misto e encerra`);
  }
  function checarOpcao(onde, o, lugarAtual) {
    if (!o || typeof o !== "object") return erros.push(`${onde}: opção inválida`);
    checarTexto(onde + " t", o.t);
    if (o.t && o.t.length > 42) avisos.push(`${onde}: botão longo (${o.t.length} letras): "${o.t}"`);
    checarEfeitos(onde, o, false, lugarAtual);
    if (o.risco !== undefined) {
      if (typeof o.risco !== "number" || o.risco < 2 || o.risco > 19) erros.push(`${onde}: risco deve ser 2 a 19`);
      if (!o.falha) erros.push(`${onde}: tem risco mas falta "falha"`);
      else checarEfeitos(onde + " falha", o.falha, true, lugarAtual);
    } else if (o.falha) erros.push(`${onde}: tem "falha" mas não tem risco`);
    const somaP = Object.values(o.p || {}).reduce((a, b) => a + b, 0);
    if (somaP > 4) avisos.push(`${onde}: muitos pontos (${somaP})`);
  }

  // lugares
  const todos = [...D.LUGARES.map((l) => l.id), "tunel-do-tempo"];
  const resumo = [];
  for (const id of todos) {
    const c = D.CENAS[id];
    if (!c) { if (!so.length || so.includes(id)) erros.push(`FALTA o lugar ${id}`); continue; }
    if (so.length && !so.includes(id)) continue;
    if (!Array.isArray(c.chegadas) || c.chegadas.length < 2) erros.push(`${id}: precisa de 2 chegadas`);
    (c.chegadas || []).forEach((t, i) => checarTexto(`${id} chegada ${i + 1}`, t, 42));
    if (!Array.isArray(c.opcoes)) { erros.push(`${id}: sem opcoes`); continue; }
    if (c.opcoes.length < 11) erros.push(`${id}: só ${c.opcoes.length} opções (mínimo 11)`);
    c.opcoes.forEach((o, i) => checarOpcao(`${id} #${i + 1}`, o, id));
    const destinos = new Set();
    c.opcoes.forEach((o) => [o, o.falha].filter(Boolean).forEach((x) => (Array.isArray(x.vai) ? x.vai : [x.vai]).forEach((v) => v && v !== "fica" && destinos.add(v))));
    const semCond = c.opcoes.filter((o) => !o.precisa && !o.precisaAdv && !o.precisaMarca && !o.cenaMin && !o.fim).length;
    if (semCond < 7) avisos.push(`${id}: só ${semCond} opções sempre disponíveis`);
    if (destinos.size < 6) avisos.push(`${id}: só ${destinos.size} destinos diferentes`);
    const riscos = c.opcoes.filter((o) => o.risco).length;
    const fins = c.opcoes.filter((o) => o.fim).length;
    if (fins > 1) avisos.push(`${id}: ${fins} opções com fim`);
    if (!c.opcoes.some((o) => o.p && o.p.feliz)) avisos.push(`${id}: nenhuma opção puxa pra feliz`);
    resumo.push(`${id}: ${c.opcoes.length} opções, ${destinos.size} destinos, ${riscos} arriscadas`);
  }
  for (const k of Object.keys(D.CENAS)) if (!lugaresIds.has(k)) erros.push(`CENAS tem lugar desconhecido: ${k}`);

  // itens, adversidades, gerais
  if (!so.length) {
    for (const it of D.ITENS) {
      const l = D.OPCOES_ITENS[it.id];
      if (!l || !l.length) { avisos.push(`item ${it.id}: sem opções próprias`); continue; }
      l.forEach((o, i) => { checarOpcao(`item ${it.id} #${i + 1}`, o, "qualquer"); if (o.precisa !== it.id) erros.push(`item ${it.id} #${i + 1}: precisa deve ser "${it.id}"`); });
    }
    for (const a of D.ADVERSIDADES) {
      const x = D.OPCOES_ADV[a.id];
      if (!x) { erros.push(`adversidade ${a.id}: sem conteúdo`); continue; }
      checarTexto(`adv ${a.id} chegada`, x.chegada, 40);
      (x.lembretes || []).forEach((t, i) => checarTexto(`adv ${a.id} lembrete ${i + 1}`, t, 25));
      if (!x.lembretes || x.lembretes.length < 2) erros.push(`adv ${a.id}: precisa de lembretes`);
      (x.opcoes || []).forEach((o, i) => checarOpcao(`adv ${a.id} #${i + 1}`, o, "qualquer"));
      if (!(x.opcoes || []).some((o) => o.resolve === a.id || (o.falha && o.falha.resolve === a.id))) erros.push(`adv ${a.id}: nenhuma opção resolve`);
    }
    D.OPCOES_GERAIS.forEach((o, i) => checarOpcao(`geral #${i + 1}`, o, "qualquer"));
    if (D.OPCOES_GERAIS.length < 10) avisos.push(`poucas opções gerais (${D.OPCOES_GERAIS.length})`);
    for (const m of marcasUsadas) if (!marcasGravadas.has(m)) erros.push(`marca "${m}" é usada mas nunca gravada`);

    // quais itens dá pra ganhar em algum lugar
    const ganhaveis = new Set();
    for (const c of Object.values(D.CENAS)) c.opcoes.forEach((o) => { if (o.ganha) ganhaveis.add(o.ganha); if (o.falha && o.falha.ganha) ganhaveis.add(o.falha.ganha); });
    for (const it of D.ITENS) if (!ganhaveis.has(it.id)) avisos.push(`item ${it.id}: nenhum lugar dá esse item`);
    // quem chega em cada lugar
    const chegam = {};
    for (const [id, c] of Object.entries(D.CENAS)) c.opcoes.forEach((o) => [o, o.falha].filter(Boolean).forEach((x) => (Array.isArray(x.vai) ? x.vai : [x.vai]).forEach((v) => { if (v && v !== "fica") chegam[v] = (chegam[v] || 0) + 1; })));
    for (const id of todos) if (!chegam[id]) avisos.push(`ninguém leva para ${id}`);
    // pontos totais por final
    const tot = {};
    const somar = (o) => { for (const [k, n] of Object.entries(o.p || {})) tot[k] = (tot[k] || 0) + n; };
    for (const c of Object.values(D.CENAS)) c.opcoes.forEach((o) => { somar(o); if (o.falha) somar(o.falha); });
    resumo.push("pontos distribuídos por final: " + D.FINAIS_SORTEIO.map((f) => `${f}=${tot[f] || 0}`).join(", "));
  }

  console.log(resumo.join("\n"));
  if (avisos.length) console.log("\nAVISOS (" + avisos.length + "):\n- " + avisos.join("\n- "));
  if (erros.length) { console.log("\nERROS (" + erros.length + "):\n- " + erros.join("\n- ")); process.exit(1); }
  console.log("\nOK, sem erros.");
}
