// =====================================================================
//  PERSONAGENS: chefes de quiz, NPCs com desafio e o vendedor da Casa do Norte
//  Personagens e imagens criados pelo Irving.
//
//  IMAGENS: WEBP/PNG com fundo transparente, na pasta principal do site
//  (igual aos chefes). Sem imagem ainda? Deixe img: "" e use um emoji.
// =====================================================================

// ---------------------------------------------------------------------
//  CHEFES DE QUIZ
//  O chefe faz 3 perguntas (sorteadas da lista dele). Acertou 2 = venceu.
//  Venceu: ganha 1 item. Perdeu: -20 de Vida (igual aos outros chefes).
//  certa = número da resposta certa (1, 2 ou 3). A ordem das respostas é
//  embaralhada no jogo, então pode escrever a certa em qualquer posição.
//  Quanto mais perguntas na lista, menos repete de uma partida pra outra.
//  ativo: false = não aparece no jogo (este é só um modelo).
// ---------------------------------------------------------------------
CHEFES.push({
  id: "modelo-quiz", tipo: "quiz", ativo: false, nome: "Professor Pergunta", genero: "o",
  img: "", emoji: "🤐",
  entrada: "Um homem de beca bloqueia o caminho, batendo uma régua na palma da mão. É o PROFESSOR PERGUNTA! Ninguém passa sem responder às suas perguntas!",
  perguntas: [
    { p: "Quantas fatias de pão tem um misto quente de respeito?", respostas: ["Uma", "Duas", "Sete"], certa: 2 },
    { p: "O que vai dentro do misto quente?", respostas: ["Presunto e queijo", "Banana e alpiste", "Esperança"], certa: 1 },
    { p: "O Irving mora numa...", respostas: ["Chácara", "Casa", "Baleia"], certa: 2 },
  ],
});

// ---------------------------------------------------------------------
//  NPCs COM DESAFIO
//  Aparecem de vez em quando (20% por cena, no máximo 2 por partida).
//  Cada um pede ajuda com um problema (sorteado da lista "desafios").
//  Acertou a resposta: ganha 1 item aleatório. Errou: não perde nada.
//  lugares: ["feira", "quermesse"] faz o NPC só aparecer nesses lugares
//  (sem lugares = aparece em qualquer um).
//  Tipos de desafio:
//   - pergunta: 3 respostas, certa = 1, 2 ou 3 (a ordem é embaralhada)
//   - adivinha: { tipo: "adivinha", max: 10, tentativas: 3 } (número com dica maior/menor)
// ---------------------------------------------------------------------
NPCS.push(
  {
    id: "tania", nome: "Tania", img: "npc-tania.webp", emoji: "💅",
    fala: "Um perfume de lavanda e laquê invade a cena. Envolta em oncinha e paetê, com um cachorrinho em cada ombro, surge TANIA: \"Querido, você tem cara de quem resolve problemas. Me ajuda?\"",
    desafios: [
      { tipo: "pergunta", p: "\"O Biscoito, meu poodle, fugiu atrás de um cheiro! Onde eu procuro?\"",
        respostas: ["Na barraca de cachorro-quente", "Na loja de gatos", "Na fila do banco"], certa: 1 },
      { tipo: "pergunta", p: "\"A Chanel está com calor, coitadinha! O que eu faço?\"",
        respostas: ["Abano ela com um leque de plumas", "Visto um casaco de pele nela", "Coloco ela no forno pra secar"], certa: 1 },
      { tipo: "pergunta", p: "\"Tenho um jantar de gala e uma festa junina hoje. O que eu visto?\"",
        respostas: ["Paetê com chapéu de palha, óbvio", "Pijama de flanela", "O terno do meu ex-marido"], certa: 1 },
      { tipo: "pergunta", p: "\"Seja sincero: meu cabelo parece o quê?\"",
        respostas: ["Uma nuvem de ouro", "Um ninho de pombo", "Uma vassoura de piaçava"], certa: 1 },
      { tipo: "pergunta", p: "\"Perdi meu brinco de ouro! Estava nas duas orelhas agora há pouco. Onde está?\"",
        respostas: ["Preso no pelo da Chanel", "No fundo do mar", "Na Lua"], certa: 1 },
    ],
    acertou: "Tania solta um gritinho, beija o ar dos dois lados e tira um presente da bolsa de oncinha: \"Você é um amor!\"",
    errou: "Tania revira os olhos, ajeita os cachorrinhos nos ombros e vai embora num rastro de laquê: \"Homens...\"",
  },
  {
    id: "pomba", nome: "Pomba", img: "npc-pomba.webp", emoji: "🕊️",
    fala: "Um bater de asas, uma bolsinha de carteiro e um lencinho no pescoço. Uma POMBA pousa na frente do Irving, séria como uma funcionária dos Correios: \"Com licença, senhor. Tenho um probleminha.\"",
    desafios: [
      { tipo: "pergunta", p: "\"Preciso entregar esta carta. O envelope diz: Rua das Flores, número 12. Pra onde eu voo?\"",
        respostas: ["Rua das Flores, número 12", "Rua dos Espinhos, número 21", "Direto pro Cristo Redentor"], certa: 1 },
      { tipo: "pergunta", p: "\"O relógio da praça marca 8h, mas ele está 1 hora adiantado. Que horas são de verdade?\"",
        respostas: ["7h", "9h", "8h em ponto"], certa: 1 },
      { tipo: "pergunta", p: "\"Tem um gato me encarando do telhado. O que eu faço?\"",
        respostas: ["Voo pra longe, rapidinho", "Chamo ele pra um chá", "Tiro um cochilo ali mesmo"], certa: 1 },
      { tipo: "pergunta", p: "\"Minha bolsinha só cabe uma coisa. Levo a carta ou o tijolo?\"",
        respostas: ["A carta", "O tijolo", "Os dois, empilhados"], certa: 1 },
      { tipo: "pergunta", p: "\"Qual é o jeito mais rápido de atravessar a cidade?\"",
        respostas: ["Voando, ué, eu sou uma pomba", "Pegando o ônibus", "Chamando um Uber"], certa: 1 },
    ],
    acertou: "A Pomba arrulha de alegria, tira um presente da bolsinha e entrega com a asa: \"Serviço de primeira. Assine aqui.\"",
    errou: "A Pomba suspira, anota alguma coisa num bloquinho e levanta voo: \"Vou registrar uma reclamação.\"",
  },
  {
    id: "luiz-miguel", nome: "Luiz Miguel", img: "npc-luiz-miguel.webp", emoji: "📈",
    fala: "Um topete descomunal surge antes do dono. De terno apertado e olhar de quem não dorme desde 2019, aparece LUIZ MIGUEL, o coach: \"Você! Sim, você! Quer sair da zona de conforto? Então prove seu valor!\"",
    desafios: [
      { tipo: "pergunta", p: "\"Um campeão acorda às 5h e leva 1 hora penteando o topete. Que horas ele sai de casa?\"",
        respostas: ["6h", "5h", "Nunca, o topete nunca fica pronto"], certa: 1 },
      { tipo: "pergunta", p: "\"Complete o mantra: quem acorda cedo...\"",
        respostas: ["...Deus ajuda", "...dorme mais tarde", "...perde o misto"], certa: 1 },
      { tipo: "pergunta", p: "\"Um vencedor encontra um muro no caminho. O que ele faz?\"",
        respostas: ["Procura a porta", "Senta e chora", "Come o muro"], certa: 1 },
      { tipo: "pergunta", p: "\"Meu curso custa 100 reais. Com 10% de desconto, quanto fica?\"",
        respostas: ["90 reais", "110 reais", "Continua 100, desconto é mentalidade"], certa: 1 },
      { tipo: "pergunta", p: "\"Qual destes é um hábito de alta performance?\"",
        respostas: ["Beber água", "Dormir nas reuniões", "Pentear a sobrancelha com garfo"], certa: 1 },
    ],
    acertou: "Luiz Miguel aponta pro Irving com as duas mãos: \"ISSO É MINDSET!\" E entrega um prêmio como se fosse um troféu.",
    errou: "Luiz Miguel balança a cabeça, decepcionado: \"Crenças limitantes, meu amigo.\" E some atrás do próprio topete.",
  },
);

// ---------------------------------------------------------------------
//  SEBASTIÃO, O VENDEDOR DA CASA DO NORTE
//  Aparece na primeira vez que o Irving entra na Casa do Norte e oferece
//  3 itens sorteados (entre os 17 do jogo). O jogador leva 1.
// ---------------------------------------------------------------------
const VENDEDOR_NORTE = {
  nome: "Sebastião", img: "npc-sebastiao.webp", emoji: "🤠",
  fala: "Atrás do balcão, um senhor de chapéu de couro e avental sorri de orelha a orelha: \"Oxe, freguês novo! Sou o Sebastião, o Rei do Sertão. Hoje é dia de presente: escolha uma coisa, que é por conta da casa.\"",
  escolheu: "Sebastião embrulha o presente num jornal velho e entrega com um aceno: \"Vá com Deus e volte sempre!\"",
  recusou: "Sebastião dá de ombros: \"Quem não quer, não quer. Mas a porta fica aberta, viu?\"",
};
