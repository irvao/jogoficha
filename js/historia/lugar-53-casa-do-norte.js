// =====================================================================
//  HISTÓRIA: Casa do Norte (lugar 53)
//  Na primeira visita, o vendedor oferece 1 de 3 itens (veja personagens.js).
//  Formato de cada opção: veja o guia em ferramentas/GUIA-HISTORIA.md
// =====================================================================

CENAS["casa-do-norte"] = {
  chegadas: [
    "Uma Casa do Norte! Prateleiras de fubá, queijo curado, cachaça, rapadura e carne de sol. O cheiro é de avó feliz. Uma balança vermelha reina sobre o balcão como um trono.",
    "O Irving cruza a porta de uma Casa do Norte e é abraçado por aromas ancestrais: queijo, café coado, mel e manteiga de garrafa. Aqui, o tempo anda mais devagar.",
  ],
  opcoes: [
    { t: "Perguntar se tem misto quente",
      r: "\"Misto a gente não faz, mas a padaria do Seu Nonato é logo ali, freguês!\" O Irving parte guiado pela sabedoria do balcão.",
      vai: ["rua-irving", "feira", "loja-eletro-padaria"], p: { feliz: 2, "quase-feliz": 1 }, cara: "feliz" },

    { t: "Provar o queijo coalho na chapa",
      r: "O queijo chia na chapa como um dragão dourado. O Irving come e sente a alma se acalmar. O misto pode esperar mais um pouquinho.",
      vai: "fica", p: { filosofico: 1, "hora-errada": 1 }, cara: "feliz" },

    { t: "Pesar a si mesmo na balança",
      r: "O Irving sobe na balança do balcão. O ponteiro gira três voltas e trava. O dono anota no caderninho: \"um Irving e meio\". Constrangimento épico.",
      vai: "fica", vida: -3, p: { matrix: 1, amnesia: 1 }, cara: "confuso" },

    { t: "Comprar rapadura com os 100 reais", precisa: "100-reais",
      r: "Com 100 reais, o Irving compra rapadura pra um batalhão. Distribui pelo caminho e vira lenda entre desconhecidos adoçados.",
      vai: ["excursao-peruanos", "quermesse", "casamento"], perde: "100-reais", p: { filosofico: 3 }, cara: "feliz" },

    { t: "Ouvir os causos do dono",
      r: "O dono conta de quando viu um disco voador no sertão, de uma cobra de sete metros e de um primo que foi à Lua. Três horas passam num piscar.",
      vai: "fica", p: { "hora-errada": 2, filosofico: 1 }, cara: "neutro" },

    { t: "Tocar a sanfona pendurada na parede",
      risco: 11,
      r: "O Irving puxa a sanfona e sai um forró de arrepiar. O salão enche, o povo dança, e alguém o leva no braço até o palco mais próximo.",
      vai: ["karaoke", "quermesse", "programa-auditorio"], p: { famoso: 3 }, cara: "feliz",
      falha: { r: "A sanfona solta um gemido de boi triste. Os fregueses fogem, e o dono enxota o Irving com a vassoura até a rua.",
               vida: -12, vai: ["rua-irving", "bairro-desconhecido"], p: { "onde-estou": 1 } } },

    { t: "Pegar carona no caminhão de farinha",
      r: "Um caminhão sai carregado de sacos de farinha rumo ao interior. O Irving se acomoda entre eles como um rei num trono de mandioca.",
      vai: ["xique-xique", "canavial", "pedagio"], p: { "onde-estou": 2 }, cara: "determinado" },

    { t: "Roubar um pedaço de carne de sol",
      risco: 14,
      r: "Mão mais rápida que o olhar! O Irving sai com o pedaço de carne de sol escondido na jaqueta, perseguido só pela própria consciência.",
      vai: ["beco-perigoso", "rua-irving"], p: { prisao: 2 }, cara: "determinado",
      falha: { r: "O dono apita, o vizinho chama a polícia, e o Irving termina a manhã explicando tudo atrás das grades.",
               vida: -10, vai: "prisao", p: { prisao: 3 } } },

    { t: "Pedir cafezinho de cortesia",
      r: "O café vem no copo americano, forte como um trovão. O Irving desperta com uma clareza que nenhum herói jamais teve. Agora ele sabe o caminho.",
      vai: ["loja-eletro-padaria", "forno-gigante", "comercial-margarina"], p: { feliz: 3 }, cara: "determinado" },

    { t: "Experimentar um chapéu de couro",
      r: "O chapéu de couro assenta como uma coroa do sertão. O Irving se olha no espelho e sente que poderia governar o mundo, ou pelo menos o bairro.",
      vai: "fica", p: { "rei-misto": 2 }, cara: "feliz" },

    { t: "Seguir o jegue que passou na porta",
      r: "Um jegue passa na calçada com ar de quem sabe das coisas. O Irving o segue, confiante. O jegue não sabe das coisas.",
      vai: ["canavial", "elefante", "leilao-gado", "bairro-desconhecido"], p: { "onde-estou": 1, banana: 1 }, cara: "confuso" },

    { t: "Comprar a banana-da-terra do cesto",
      r: "O dono empurra uma banana-da-terra pro Irving, de graça. \"Vai que precisa!\" O herói, que odeia banana, aceita por educação.",
      vai: "fica", ganha: "banana", p: { banana: 2 }, cara: "confuso" },

    { t: "Tirar um cochilo na rede do fundo",
      r: "No fundo da loja, uma rede balança sozinha. O Irving deita só pra testar. O ventilador canta uma cantiga, e o mundo some.",
      vai: ["cama-irving", "lugar-escuro"], p: { sono: 3 }, cara: "cansado" },
  ],
};
