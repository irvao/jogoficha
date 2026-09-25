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
  img: "", emoji: "🧐",
  entrada: "Um homem de beca bloqueia o caminho, batendo uma régua na palma da mão. É o PROFESSOR PERGUNTA! Ninguém passa sem responder às suas perguntas!",
  perguntas: [
    { p: "Quantas fatias de pão tem um misto quente de respeito?", respostas: ["Uma", "Duas", "Sete"], certa: 2 },
    { p: "O que vai dentro do misto quente?", respostas: ["Presunto e queijo", "Banana e alpiste", "Esperança"], certa: 1 },
    { p: "O Irving mora numa...", respostas: ["Chácara", "Casa", "Baleia"], certa: 2 },
  ],
});

// Chefes de quiz criados pelo Irving (set/2026). Cada um entra no jogo
// sozinho assim que tiver pelo menos 3 perguntas na lista.
// gatilho: "lugar" = o chefe só aparece nesse lugar (e não entra no sorteio normal)
// acerto / erro: frases que o chefe fala quando o Irving acerta ou erra (opcional)
CHEFES.push(
  {
    id: "homem-lixo", tipo: "quiz", nome: "Homem Lixoso", genero: "o", img: "chefe-homem-lixo.webp", emoji: "🗑️",
    entrada: "Um fedor lendário anuncia a chegada. Uma lata de lixo com braços, pernas e coturnos bloqueia o caminho, e dois olhos brilham lá de dentro. É o HOMEM LIXOSO! Ninguém passa sem responder às suas perguntas!",
    acerto: ["\"Grrr... acertou.\"", "O Homem Lixoso bate a tampa, contrariado."],
    erro: ["\"HA! Isso foi um lixo!\"", "O Homem Lixoso solta um arroto de chorume."],
    perguntas: [
      { p: "Qual é o cesto de reciclável para vidro?", respostas: ["Verde", "O do vizinho", "Azul-bebê com bolinhas"], certa: 1 },
      { p: "Qual dessas bandas é um lixo?", respostas: ["Legião Urbana", "Os Sacos Plásticos", "Tampinhas do Brasil"], certa: 1 },
      { p: "Você gosta de sorvete?", respostas: ["Sim", "Não", "Só de flocos com farofa"], certa: "todas" },
    ],
  },
  {
    id: "senhor-do-tempo", tipo: "quiz", gatilho: "tunel-do-tempo", nome: "Senhor do Tempo", genero: "o", img: "chefe-senhor-do-tempo.webp", emoji: "⏳",
    entrada: "No meio do túnel de luz, tudo congela. Um homem de terno amassado, apoiado num cajado com um relógio brilhante, boceja: é o SENHOR DO TEMPO, o dono deste túnel. \"Quem viaja pelo meu tempo paga pedágio. Responda!\"",
    acerto: ["\"Hum. Correto, por enquanto.\"", "O Senhor do Tempo confere o relógio e suspira."],
    erro: ["\"Errado. Eu vi isso acontecer 400 vezes.\"", "O Senhor do Tempo boceja, entediado."],
    perguntas: [
      { p: "Que horas são?", respostas: ["Não sei", "Hora do misto", "Vinte e cinco e meia"], certa: 1 },
      { p: "Quantos minutos tem um dia?", respostas: ["Pelo menos 12", "Depende do humor do relógio", "Sete e meio, no máximo"], certa: 1 },
      { p: "Quanto é 121/35?", respostas: ["3,4", "Um misto e meio", "121 com 35 avos de banana"], certa: 1 },
    ],
  },
  {
    id: "apresentador", tipo: "quiz", nome: "Silmo Samos", genero: "o", img: "chefe-apresentador.webp", emoji: "🎤",
    entrada: "Luzes, aplausos e um terno de paetê azul girando no ar! É SILMO SAMOS, com o microfone colado no peito: \"Ma oeee! Vale um milhão de mistos quentes, hein? Três perguntas! Está preparado? Posso perguntar?\"",
    acerto: ["\"Certa a resposta! Ma oeee!\"", "\"Está certo disso? ESTÁ CERTO!\" A plateia vai à loucura."],
    erro: ["\"Que pena... errou!\" A plateia faz \"ôôôô\".", "\"Ihhh, vai ficar sem o misto!\""],
    perguntas: [
      { p: "Qual a capital da Austrália?", respostas: ["Camberra", "Sydney", "Cangurulândia"], certa: 1 },
      { p: "Quem foi o primeiro presidente do Brasil?", respostas: ["Deveria ter sido o Irving", "Marechal Deodoro da Fonseca", "O Rei do Dog"], certa: [1, 2] },
      { p: "Cebola é um bom tempero?", respostas: ["Não, é horrível", "Sim", "Só na lua cheia"], certa: 1 },
    ],
  },
  {
    id: "dona-barata", tipo: "quiz", nome: "Dona Barata", genero: "a", img: "chefe-dona-barata.webp", emoji: "🪳",
    entrada: "Um farfalhar de asas arrepia a nuca do Irving. De jaqueta de couro e coturno, antenas em pé, surge DONA BARATA, a rainha dos rodapés: \"Daqui ninguém passa sem responder às minhas perguntas, meu bem!\"",
    acerto: ["\"Hunf. Acertou, meu bem.\"", "Dona Barata bate as antenas, contrariada."],
    erro: ["\"Errou feio, errou rude!\"", "Dona Barata dá uma risadinha de rodapé."],
    perguntas: [
      { p: "Quantas saias de filó eu tenho?", respostas: ["0", "Sete, uma pra cada perna", "Todas as do mundo"], certa: 1 },
      { p: "Toda a informação tridimensional do interior de um buraco negro estaria codificada na sua superfície bidimensional externa, como o selo holográfico de um cartão de crédito?",
        respostas: ["Talvez", "Só às terças-feiras", "Pergunta pro Senhor do Tempo"], certa: 1 },
      { p: "A fórmula molecular C₁₀H₁₄N₂, de nome químico IUPAC 3-(1-metilpirrolidin-2-il)piridina, é de qual substância?",
        respostas: ["Nicotina", "Queijo derretido", "Suor de crossfiteira"], certa: 1 },
    ],
  },
);

// ---------------------------------------------------------------------
//  NPCs
//  Aparecem de vez em quando (20% por cena, no máximo 2 por partida).
//  Cada resposta pode ser só um texto (e "certa" diz qual ganha) ou um
//  objeto com efeitos: { txt, ok, fala, dano, adv, vai, premio }
//    ok: true = deu certo (ganha item aleatório, a não ser premio: false)
//    fala: o que acontece    dano: Vida perdida    adv: adversidade que começa
//    vai: lugar pra onde o Irving é levado
// ---------------------------------------------------------------------
const FOTOS_TANIA = [
  "meditando no topo de uma montanha", "terminando uma maratona", "lendo um livro de filosofia russa",
  "comendo salada e amando", "salvando um gatinho de uma árvore",
];
NPCS.push(
  {
    id: "tania", nome: "Tania", img: "npc-tania.webp", emoji: "💅",
    fala: "Um perfume de lavanda e laquê invade a cena. Envolta em oncinha e paetê, com um cachorrinho em cada ombro, surge TANIA, celular em punho: \"Querido! Você chegou na hora certa!\"",
    desafios: FOTOS_TANIA.map((acao) => ({
      tipo: "pergunta",
      p: `"Tira uma foto minha fingindo que eu tô ${acao}? É pro pessoal da internet fingir que se importa comigo!"`,
      respostas: [
        { txt: "Clicar a foto mais épica da história", ok: true,
          fala: "Tania faz a pose, o Irving capricha no ângulo. Mil curtidas em 3 segundos! Ela dá um gritinho e tira um presente da bolsa de oncinha." },
        { txt: "\"Isso não é meio mentira, Tania?\"", ok: false,
          fala: "Tania arregala os olhos, ofendida: \"Mentira não, querido. Conteúdo.\" E vai embora num rastro de laquê." },
        { txt: "Fotografar só os cachorrinhos", ok: false,
          fala: "A foto dos cachorrinhos viraliza. Tania, esquecida no canto do quadro, sai pisando duro." },
      ],
    })),
  },
  {
    id: "pomba", nome: "Pomba", img: "npc-pomba.webp", emoji: "🕊️",
    fala: "Um bater de asas, uma bolsinha de carteiro e um lencinho no pescoço. Uma POMBA pousa bem na frente do Irving e o encara com muita seriedade.",
    desafios: [
      { tipo: "pergunta", p: "\"Pru. Pru pru? Pruuu. PRU!\"", respostas: [
        { txt: "\"Pru.\"", ok: true, vai: "carregado-passaros",
          fala: "Os olhos da Pomba brilham: finalmente alguém que fala a língua dela! Ela assobia, um bando inteiro desce do céu, e o Irving é erguido pelos ares. De presente, a Pomba ainda tira algo da bolsinha." },
        { txt: "\"Oi, dona pomba!\"", ok: false, fala: "A Pomba suspira, decepcionada com a falta de cultura do Irving, e vai embora a pé." },
        { txt: "\"Xô! Xô!\"", ok: false, fala: "A Pomba anota alguma coisa num bloquinho e levanta voo, ofendidíssima." },
      ] },
      { tipo: "pergunta", p: "\"Pru pru pru. Pru? PRU PRU.\" (Ela parece esperar uma resposta muito importante.)", respostas: [
        { txt: "\"Pru pru!\"", ok: true, vai: "carregado-passaros",
          fala: "\"PRU!\" A Pomba bate as asas de emoção e chama os amigos. Em segundos, o Irving está voando, carregado por uma nuvem de pássaros, e com um presente no bolso." },
        { txt: "Oferecer um pedaço de pão", ok: false, fala: "A Pomba aceita o pão, mas balança a cabeça: não era isso. Ela vai embora mastigando." },
        { txt: "Fingir que é uma estátua", ok: false, fala: "A Pomba pousa na cabeça do Irving, pensa um pouco, e vai embora. Que bom que foi só isso." },
      ] },
    ],
  },
  {
    id: "luiz-miguel", nome: "Luiz Miguel", img: "npc-luiz-miguel.webp", emoji: "📈",
    fala: "Um topete descomunal surge antes do dono. De terno apertado e olhar de quem não dorme desde 2019, aparece LUIZ MIGUEL, o coach: \"Você! Sim, você! Tem cara de quem quer mudar de vida!\"",
    desafios: [
      { tipo: "pergunta", p: "\"Quer entrar no meu curso de como vender cursos pra quem já comprou um curso de vender cursos? Vagas limitadíssimas!\"", respostas: [
        { txt: "\"Parece uma ótima ideia!\"", ok: false, dano: 10, adv: "desmaio", premio: false,
          fala: "Luiz Miguel começa a explicar o método. Na terceira camada de curso dentro de curso, o cérebro do Irving não aguenta tanta idiotice e desliga." },
        { txt: "\"Quanto custa?\"", ok: false, dano: 10, adv: "desmaio", premio: false,
          fala: "\"Só 12 parcelas de 12 parcelas de 12 parcelas!\" O Irving tenta fazer a conta e desmaia no meio dela." },
        { txt: "Fugir correndo", ok: true,
          fala: "O Irving foge como nunca fugiu na vida. Luiz Miguel grita: \"ISSO! FUJA DA ZONA DE CONFORTO!\" e arremessa um brinde, que o Irving pega no ar." },
      ] },
      { tipo: "pergunta", p: "\"Tenho uma mentoria exclusiva: te ensino a ensinar pessoas a ensinarem pessoas a vender cursos. Topa?\"", respostas: [
        { txt: "\"Topo! Quero ser milionário!\"", ok: false, dano: 10, adv: "desmaio", premio: false,
          fala: "Luiz Miguel desenha uma pirâmide no ar. O Irving tenta entender a pirâmide. A pirâmide vence." },
        { txt: "\"Tem certificado?\"", ok: false, dano: 10, adv: "desmaio", premio: false,
          fala: "\"Tem certificado do certificado!\" A frase é tão poderosa que o Irving desaba ali mesmo." },
        { txt: "Sair de fininho", ok: true,
          fala: "Enquanto Luiz Miguel ajeita o topete no reflexo de uma vitrine, o Irving escapa. No chão, ficou um brinde esquecido do coach." },
      ] },
    ],
  },
);

// ---------------------------------------------------------------------
//  SEBASTIÃO, O VENDEDOR DA CASA DO NORTE
//  Aparece na primeira vez que o Irving entra na Casa do Norte e oferece
//  3 itens sorteados (entre os 17 do jogo). O jogador leva 1.
// ---------------------------------------------------------------------
const VENDEDOR_NORTE = {
  nome: "Sebastião", img: "npc-sebastiao.webp", emoji: "🤠",
  fala: "Atrás do balcão, um senhor de chapéu de couro abre um sorrisão: \"Oxente, que cabra arretado entrou aqui! Sou Sebastião, o Rei do Sertão, e fui com a tua cara, visse? Escolhe uma coisinha dessas aí, que é presente da casa!\"",
  escolheu: "\"Vixe, escolheu bem demais!\" Sebastião embrulha o presente num jornal velho. \"Vai com Deus, meu fi, e volte sempre!\"",
  recusou: "\"Oxe, não quer nada não? Tá certo, cabra. Mas a porteira aqui tá sempre aberta!\"",
};
