// =====================================================================
//  HISTÓRIA: opções que aparecem EM QUALQUER LUGAR
//  1) OPCOES_ITENS: quando o Irving tem o item na mochila
//  2) OPCOES_ADV: quando uma adversidade está acontecendo
//  3) OPCOES_GERAIS: coringas que completam qualquer cena
//  Formato de cada opção: veja o guia em ferramentas/GUIA-HISTORIA.md
// =====================================================================

// ---------------------------------------------------------------------
//  1) ITENS
// ---------------------------------------------------------------------

OPCOES_ITENS["garfo"] = [
  { t: "Pentear a barba com o garfo", precisa: "garfo",
    r: "Dente por dente, o Irving penteia a barba com o garfo. Nada muda. Mas ele se sente um cavaleiro muito bem cuidado.",
    vai: "fica", p: { matrix: 1 }, cara: "neutro" },

  { t: "Erguer o garfo como uma espada", precisa: "garfo",
    r: "O Irving ergue o garfo aos céus e solta um grito de guerra. Ninguém se intimida. Um pombo boceja.",
    vai: "fica", p: { "rei-misto": 1 }, cara: "determinado" },

  { t: "Usar o garfo como antena de celular", precisa: "garfo",
    r: "O Irving ergue o garfo e surge uma barrinha de sinal. O GPS recalcula, manda virar dezessete vezes e o larga num lugar que ele não reconhece.",
    vai: ["bairro-desconhecido", "canavial", "osasco"], p: { "onde-estou": 1 }, cara: "confuso" },
];

OPCOES_ITENS["100-reais"] = [
  { t: "Pegar um táxi com os 100 reais", precisa: "100-reais",
    r: "Um táxi freia como carruagem real. \"Pra padaria, e não poupe os cavalos!\" A nota some no taxímetro, e o Irving desce onde o cheiro de pão é mais forte.",
    vai: ["loja-eletro-padaria", "forno-gigante", "comercial-margarina", "rua-irving"], perde: "100-reais", p: { feliz: 3 }, cara: "feliz" },

  { t: "Comprar uma viagem surpresa", precisa: "100-reais",
    r: "Um homem de terno vende uma viagem surpresa por exatos 100 reais. O Irving paga, é vendado com gentileza e só volta a enxergar muito, muito longe de casa.",
    vai: ["trem", "excursao-peruanos", "xique-xique", "balsa", "massachusetts"], perde: "100-reais", p: { "onde-estou": 2 }, cara: "confuso" },

  { t: "Comprar uma coroa de plástico", precisa: "100-reais",
    r: "O Irving gasta os 100 reais numa coroa de plástico dourada. Ela aperta, dá coceira e brilha demais. Ele nunca se sentiu tão digno de governar.",
    vai: "fica", perde: "100-reais", p: { "rei-misto": 2 }, cara: "determinado" },
];

OPCOES_ITENS["banana"] = [
  { t: "Comer a banana", precisa: "banana",
    r: "O Irving descasca e morde. O narrador precisa avisar: o Irving ODEIA banana. A careta que ele faz vai entrar para os livros de história.",
    vai: "fica", vida: -10, perde: "banana", p: { banana: 1 }, cara: "bravo" },

  { t: "Seguir a banana como uma bússola", precisa: "banana",
    r: "A banana treme na mão do Irving e aponta um rumo, como a bússola das frutas. Ele obedece e vai parar num lugar estranhamente amarelo.",
    vai: ["sorveteria", "elefante", "xique-xique", "feira"], p: { banana: 2 }, cara: "confuso" },

  { t: "Dar a banana a um desconhecido", precisa: "banana",
    r: "Um estranho recebe a banana com lágrimas nos olhos: \"Ninguém nunca me deu nada.\" Nasce uma amizade, e a mochila fica mais leve.",
    vai: "fica", perde: "banana", p: { filosofico: 2, banana: 1 }, cara: "feliz" },
];

OPCOES_ITENS["skate"] = [
  { t: "Partir de skate rumo à padaria", precisa: "skate",
    r: "O Irving pisa no skate e parte como um cometa de boné. Na chegada, as rodinhas explodem em glória. O skate cumpriu sua missão.",
    vai: ["rua-irving", "loja-eletro-padaria", "comercial-margarina", "feira", "forno-gigante"], perde: "skate", p: { feliz: 3 }, cara: "feliz" },

  { t: "Pegar rabeira num caminhão de skate", precisa: "skate",
    risco: 9,
    r: "O Irving agarra a traseira de um caminhão e voa sobre quatro rodinhas. Quando o caminhão para, bem longe, o skate se parte em dois. Valeu a pena.",
    vai: ["pedagio", "osasco", "xique-xique", "loja-eletro-padaria"], perde: "skate", p: { feliz: 2, "onde-estou": 1 }, cara: "feliz",
    falha: { r: "O caminhão faz uma curva, o skate segue reto e o Irving voa por cima de tudo. Aterrissa longe, sem skate e sem dignidade.",
             vida: -15, vai: ["canavial", "bairro-desconhecido", "pedagio"], perde: "skate", p: { "onde-estou": 2 }, cara: "assustado" } },

  { t: "Fazer uma manobra radical", precisa: "skate",
    r: "O Irving tenta um kickflip. O skate gira três vezes no ar e volta certinho pro pé dele. Uma plateia invisível aplaude.",
    vai: "fica", p: { famoso: 1, matrix: 1 }, cara: "feliz" },
];

OPCOES_ITENS["fosforos"] = [
  { t: "Acender um fósforo e fazer um pedido", precisa: "fosforos",
    r: "O Irving acende um fósforo como vela de aniversário e pede um misto quente. A chama se apaga. Ao longe, um pássaro pisca pra ele.",
    vai: "fica", p: { milagre: 2 }, cara: "determinado" },

  { t: "Fazer sinal de fumaça pedindo socorro", precisa: "fosforos",
    r: "Com todos os fósforos e muita fé, o Irving manda um sinal de fumaça: MISTO. Lá longe, alguém responde com outra fumaça. Ele segue o sinal.",
    vai: ["quermesse", "canavial", "excursao-peruanos", "xique-xique"], perde: "fosforos", p: { filosofico: 1, "onde-estou": 1 } },

  { t: "Tostar um pão imaginário", precisa: "fosforos",
    r: "O Irving segura o fósforo sob um pão que não existe. O cheiro de torrada, porém, é real. Ele segue o aroma com a fé de um peregrino.",
    vai: ["forno-gigante", "loja-eletro-padaria", "comercial-margarina"], p: { feliz: 2, matrix: 1 }, cara: "confuso" },
];

OPCOES_ITENS["fita-crepe"] = [
  { t: "Consertar algo com fita crepe", precisa: "fita-crepe",
    r: "O Irving remenda tudo o que está quebrado ao redor. Não era pra funcionar, mas funciona. Os presentes o saúdam como engenheiro supremo.",
    vai: "fica", p: { "rei-misto": 1, filosofico: 1 }, cara: "feliz" },

  { t: "Fazer uma seta de fita pra padaria", precisa: "fita-crepe",
    r: "O Irving cola uma seta de fita crepe no chão e escreve PADARIA. Depois segue a própria seta, com toda a confiança do mundo.",
    vai: ["bairro-desconhecido", "rua-irving", "loja-eletro-padaria", "canavial"], p: { feliz: 1, "onde-estou": 1 }, cara: "determinado" },

  { t: "Fazer um crachá VIP de fita crepe", precisa: "fita-crepe",
    r: "Com fita crepe e muita cara de pau, o Irving cria um crachá: VIP. Seguranças abrem caminho em reverência e o levam a um lugar exclusivo.",
    vai: ["programa-auditorio", "reuniao-onu", "karaoke", "casamento"], p: { famoso: 1, "rei-misto": 1 } },
];

OPCOES_ITENS["pedra"] = [
  { t: "Arremessar a pedra bem longe", precisa: "pedra",
    r: "O Irving arremessa a pedra com a força de mil guerreiros. Ela some no horizonte. Um alarme dispara ao longe. Ele corre até não saber mais onde está.",
    vai: ["beco-perigoso", "bairro-desconhecido", "canavial", "osasco"], perde: "pedra", p: { prisao: 2 }, cara: "assustado" },

  { t: "Desabafar com a pedra", precisa: "pedra",
    r: "O Irving conta à pedra tudo sobre o misto quente. Ela escuta sem julgar. É a melhor amiga que ele fez o dia inteiro.",
    vai: "fica", p: { filosofico: 2, matrix: 1 }, cara: "triste" },

  { t: "Pular amarelinha com a pedra", precisa: "pedra",
    r: "O Irving risca uma amarelinha no chão e joga a pedra. Pula do 1 até o céu. Quando chega no céu, sente um cheirinho de pão.",
    vai: "fica", p: { feliz: 1, milagre: 1 }, cara: "feliz" },
];

OPCOES_ITENS["peruca"] = [
  { t: "Colocar a peruca linda", precisa: "peruca",
    r: "As madeixas balançam ao vento como numa novela das nove. Ninguém mais reconhece o Irving. Nem ele mesmo, no reflexo de uma vitrine.",
    vai: "fica", p: { famoso: 1, matrix: 1 }, cara: "feliz" },

  { t: "Fugir disfarçado com a peruca", precisa: "peruca",
    r: "Disfarçado, o Irving escapa de fininho. Alguém grita \"É ELA, A ESTRELA!\" e o arrasta, sem perguntar nada, para um lugar muito dramático.",
    vai: ["novela-mexicana", "programa-auditorio", "comercial-margarina", "karaoke"], p: { famoso: 2, matrix: 1 }, cara: "assustado" },

  { t: "Dar a peruca a um senhor careca", precisa: "peruca",
    r: "O senhor careca coloca a peruca, se olha no espelho e chora de alegria. Um abraço longo sela uma amizade eterna.",
    vai: "fica", perde: "peruca", p: { filosofico: 3 }, cara: "feliz" },
];

OPCOES_ITENS["misto-quente"] = [
  { t: "Comer o misto quente agora", precisa: "misto-quente", cenaMin: 4,
    r: "O Irving ergue o misto. O queijo brilha. Uma voz interior grita \"NÃO! NA PADARIA!\". O estômago grita mais alto. A mordida ecoa pelos séculos.",
    fim: "misto-triste", cara: "triste" },

  { t: "Guardar o misto com carinho", precisa: "misto-quente",
    r: "O Irving embrulha o misto num guardanapo, como quem guarda uma relíquia sagrada, e promete: \"Você vai conhecer a padaria.\"",
    vai: "fica", p: { feliz: 1, filosofico: 1 }, cara: "determinado" },

  { t: "Proteger o misto de olhares famintos", precisa: "misto-quente",
    r: "O Irving abraça a mochila e encara cada ser vivo ao redor. Um cachorro passa. O Irving rosna primeiro. O misto está a salvo.",
    vai: "fica", p: { "quase-feliz": 2 }, cara: "bravo" },
];

OPCOES_ITENS["maquina-do-tempo"] = [
  { t: "Entrar na máquina no ciclo \"Passado\"", precisa: "maquina-do-tempo",
    r: "O Irving entra na máquina, fecha a portinha redonda e gira o botão até PASSADO. Tudo centrifuga. Ele sai rodopiando num túnel de luz azul.",
    vai: "tunel-do-tempo", p: { "antes-tempo": 2 }, cara: "assustado" },

  { t: "Ligar a máquina no modo \"Futuro\"", precisa: "maquina-do-tempo",
    r: "O Irving põe amaciante, escolhe FUTURO e aperta INICIAR. A máquina treme como numa lavagem pesada e o suga para um redemoinho azul.",
    vai: "tunel-do-tempo", p: { "alem-tempo": 2 }, cara: "assustado" },

  { t: "Lavar a jaqueta na máquina do tempo", precisa: "maquina-do-tempo",
    r: "A jaqueta bege sai limpinha, mas agora está na moda de 1987. Ou de 2087. Difícil dizer. O Irving veste assim mesmo.",
    vai: "fica", p: { "antes-tempo": 1, "alem-tempo": 1 }, cara: "confuso" },
];

OPCOES_ITENS["corda"] = [
  { t: "Laçar a primeira coisa que passar", precisa: "corda",
    r: "O Irving gira a corda como um cauboi e laça a primeira coisa que passa. Era algo muito rápido. Ele é arrastado para longe, com dignidade.",
    vai: ["trem", "balsa", "pedagio", "canavial", "elefante"], vida: -5, p: { "onde-estou": 2 }, cara: "assustado" },

  { t: "Escalar algo alto com a corda", precisa: "corda",
    r: "O Irving amarra a corda num ponto alto e sobe com bravura de alpinista. Lá de cima, avista a fumaça de um forno. Esperança!",
    vai: "fica", p: { feliz: 2 }, cara: "determinado" },

  { t: "Pular corda pra passar o tempo", precisa: "corda",
    r: "Um, dois, dez, cem. Quando o Irving para, ofegante, o sol está bem mais alto no céu. Quanto tempo se passou? Ninguém sabe.",
    vai: "fica", vida: -3, p: { "hora-errada": 2 }, cara: "cansado" },
];

OPCOES_ITENS["chapeu"] = [
  { t: "Colocar o chapéu maneiro", precisa: "chapeu", marca: "chapeu", semMarca: "chapeu",
    r: "O Irving coloca o chapéu. O vento para. Os pássaros se calam. Nunca, na história da humanidade, existiu um chapéu tão maneiro.",
    vai: "fica", cara: "feliz" },
];

OPCOES_ITENS["alpiste"] = [
  { t: "Espalhar alpiste pros pássaros", precisa: "alpiste",
    r: "Vem um pardal. Depois dez. Depois mil. Eles comem tudo, agarram o Irving pela jaqueta e o levam voando para as alturas.",
    vai: ["carregado-passaros", "cristo-redentor", "aviao"], perde: "alpiste", p: { milagre: 3 }, cara: "assustado" },

  { t: "Rezar com alpiste na mão", precisa: "alpiste",
    r: "O Irving ergue o alpiste aos céus e pede um sinal. Uma pomba pousa na mão dele, bica um grão e pisca. Isso foi um sim?",
    vai: "fica", p: { milagre: 2 }, cara: "determinado" },

  { t: "Deixar uma trilha de alpiste", precisa: "alpiste",
    r: "Como nas lendas antigas, o Irving deixa uma trilha de alpiste pra achar o caminho de volta. Os pássaros comem tudo atrás dele. Agora ele está perdido.",
    vai: ["bairro-desconhecido", "canavial", "osasco"], perde: "alpiste", p: { "onde-estou": 2, milagre: 1 }, cara: "confuso" },
];

OPCOES_ITENS["hidratante"] = [
  { t: "Passar hidratante nas mãos", precisa: "hidratante",
    r: "O Irving hidrata as mãos com calma. A pele fica macia como pão de leite. Ele se sente pronto para qualquer batalha.",
    vai: "fica", p: { feliz: 1, sono: 1 }, cara: "feliz" },

  { t: "Oferecer hidratante a um estranho", precisa: "hidratante",
    r: "Um homem de mãos ressecadas aceita o hidratante e, emocionado, conta a história da vida dele. Agora são amigos.",
    vai: "fica", p: { filosofico: 2 }, cara: "feliz" },

  { t: "Passar hidratante no chão e deslizar", precisa: "hidratante",
    risco: 10,
    r: "O Irving desliza como um patinador olímpico, atravessa portas, esquinas e quarteirões, e só para ao bater de leve numa porta que se abre para outro lugar.",
    vai: ["conferencia-dermatologia", "loja-patinetes", "hidroginastica", "sorveteria"], p: { famoso: 1, feliz: 1 }, cara: "feliz",
    falha: { r: "O Irving escorrega, dá uma cambalhota involuntária e bate a cabeça. Acorda sem saber direito onde está.",
             vida: -15, vai: ["hospital", "lugar-escuro", "bairro-desconhecido"], p: { amnesia: 2 }, cara: "confuso" } },
];

OPCOES_ITENS["cortador-unha"] = [
  { t: "Cortar as unhas com calma", precisa: "cortador-unha",
    r: "Tec. Tec. Tec. O Irving corta as unhas com a concentração de um monge. Quando termina, já é bem mais tarde do que deveria.",
    vai: "fica", p: { "hora-errada": 2 }, cara: "neutro" },

  { t: "Abrir um salão de manicure", precisa: "cortador-unha",
    r: "O Irving monta um salão improvisado. Clientes surgem do nada. Em minutos, há fila, fofoca e uma nova comunidade.",
    vai: "fica", p: { filosofico: 2, "hora-errada": 1 }, cara: "feliz" },

  { t: "Apresentar o cortador como invenção", precisa: "cortador-unha",
    r: "O Irving anuncia uma invenção revolucionária. Ninguém entende, todos aplaudem. Um homem de terno o leva às pressas a um lugar muito importante.",
    vai: ["conferencia-dermatologia", "reuniao-onu", "programa-auditorio"], p: { "rei-misto": 1, "dia-errado": 1 }, cara: "determinado" },
];

OPCOES_ITENS["bouquet"] = [
  { t: "Dar o bouquet a um desconhecido", precisa: "bouquet",
    r: "O Irving entrega as flores a alguém que passava. A pessoa sorri como quem não ganhava flores há anos. O dia inteiro fica mais bonito.",
    vai: "fica", perde: "bouquet", p: { filosofico: 3 }, cara: "feliz" },

  { t: "Jogar o bouquet para o alto", precisa: "bouquet",
    r: "O Irving joga o bouquet como numa festa de casamento. Uma multidão surge do nada para pegá-lo, e ele é arrastado junto na correria.",
    vai: ["casamento", "quermesse", "excursao-peruanos", "protesto"], perde: "bouquet", p: { filosofico: 2 }, cara: "assustado" },

  { t: "Cheirar as flores e refletir", precisa: "bouquet",
    r: "O Irving cheira o bouquet e pensa na vida, nos amigos, no misto. Será que o misto é só um símbolo? Ele guarda a dúvida no coração.",
    vai: "fica", p: { filosofico: 2 }, cara: "neutro" },
];

OPCOES_ITENS["apito"] = [
  { t: "Apitar bem alto", precisa: "apito",
    r: "PRIIIIII! O som ecoa como a trombeta de um rei. Todos param e olham. Pela primeira vez, o Irving sente o peso dos holofotes.",
    vai: "fica", p: { famoso: 2 }, cara: "feliz" },

  { t: "Apitar pra parar um carro", precisa: "apito",
    r: "O Irving apita como um maestro do trânsito. Um motorista freia na hora, o herói embarca e ordena: \"Pra padaria!\" Pelo menos, ele acha que é pra lá.",
    vai: ["uber", "pedagio", "loja-eletro-padaria", "osasco"], p: { feliz: 1, famoso: 1 }, cara: "determinado" },

  { t: "Apitar uma música animada", precisa: "apito",
    r: "O Irving apita uma melodia tão contagiante que as pessoas dançam atrás dele. Ele lidera o cortejo até um lugar com microfone.",
    vai: ["karaoke", "quermesse", "programa-auditorio", "casamento"], p: { famoso: 2, filosofico: 1 }, cara: "feliz" },
];

// ---------------------------------------------------------------------
//  2) ADVERSIDADES
// ---------------------------------------------------------------------

OPCOES_ADV["pacote"] = {
  chegada: "Um homem de sobretudo cochicha \"segura aí\", enfia um pacote pardo nas mãos do Irving e some. O pacote está morno e cheira a queijo. Suspeito demais.",
  lembretes: [
    "O pacote suspeito continua nas mãos do Irving, cheirando a queijo.",
    "O pacote parece mais pesado a cada minuto.",
  ],
  opcoes: [
    { t: "Abrir o pacote", precisaAdv: "pacote", resolve: "pacote",
      r: "O Irving rasga o papel com coragem. Dentro, outro pacote. E outro. No último, um bilhete: \"Você caiu.\" Uma sirene toca ao longe.",
      vai: "fica", p: { prisao: 1, matrix: 1 }, cara: "confuso" },

    { t: "Entregar o pacote à polícia", precisaAdv: "pacote", resolve: "pacote",
      r: "O policial agradece, olha o pacote, olha o Irving e decide que o herói precisa prestar um longo depoimento, bem longe dali.",
      vai: ["prisao", "fila-banco", "encapuzado-carro"], p: { prisao: 2, "hora-errada": 1 }, cara: "assustado" },

    { t: "Sair correndo com o pacote", precisaAdv: "pacote",
      risco: 11,
      r: "O Irving foge como o vento, despista todo mundo e larga o pacote numa caixa de correio. Missão cumprida, seja lá qual fosse.",
      vai: ["trem", "osasco", "bairro-desconhecido", "canavial"], resolve: "pacote", p: { prisao: 1, "onde-estou": 1 }, cara: "determinado",
      falha: { r: "Dois homens de óculos escuros cercam o Irving, cobrem a cabeça dele com um capuz e o levam embora.",
               vida: -15, vai: ["encapuzado-carro", "beco-perigoso", "prisao"], p: { prisao: 2 }, cara: "assustado" } },

    { t: "Lacrar o pacote e devolver", precisaAdv: "pacote", precisa: "fita-crepe", resolve: "pacote",
      r: "O Irving lacra o pacote com a fita crepe inteira e escreve DEVOLVER AO REMETENTE. Um carteiro passa e leva. Problema resolvido.",
      vai: "fica", perde: "fita-crepe", p: { feliz: 1, prisao: 1 }, cara: "feliz" },
  ],
};

OPCOES_ADV["cachorro"] = {
  chegada: "Um cachorro branco senta na frente do Irving e diz, com voz grave: \"Amigo, me ajuda a comprar um refri?\" Ele parece falar muito sério.",
  lembretes: [
    "O cachorro branco continua seguindo o Irving. Ainda quer o refri.",
    "O cachorro branco late baixinho: \"E o refri, amigo?\"",
  ],
  opcoes: [
    { t: "Procurar um refri pro cachorro", precisaAdv: "cachorro", resolve: "cachorro",
      r: "Lado a lado como velhos parceiros, os dois saem em busca de refri. Na primeira barraca, o vendedor dá um de graça. O cachorro agradece e parte.",
      vai: ["feira", "quermesse", "cantina-escola", "sorveteria"], p: { "quase-feliz": 2, filosofico: 1 }, cara: "feliz" },

    { t: "Explicar que está sem dinheiro", precisaAdv: "cachorro",
      r: "O Irving mostra os bolsos vazios. O cachorro suspira, compreensivo: \"Tudo bem. Amizade não se compra.\" E continua seguindo o Irving.",
      vai: "fica", p: { filosofico: 2 }, cara: "triste" },

    { t: "Fugir do cachorro falante", precisaAdv: "cachorro",
      risco: 9,
      r: "O Irving corre em zigue-zague e despista o cachorro atrás de uma banca. Ufa. Só não sabe mais onde está.",
      vai: ["rua-irving", "bairro-desconhecido", "osasco", "feira"], resolve: "cachorro", p: { "onde-estou": 1, "quase-feliz": 1 }, cara: "assustado",
      falha: { r: "O cachorro é mais rápido. Alcança o Irving, derruba ele de leve e diz: \"Ainda quero o refri.\"",
               vida: -12, vai: "fica", p: { "quase-feliz": 1 }, cara: "bravo" } },

    { t: "Pagar o refri do cachorro", precisaAdv: "cachorro", precisa: "100-reais", resolve: "cachorro",
      r: "O Irving compra o refri mais gelado do reino. O cachorro bebe, arrota com elegância e jura lealdade eterna. Parte balançando o rabo.",
      vai: "fica", perde: "100-reais", p: { filosofico: 2, "quase-feliz": 1 }, cara: "feliz" },
  ],
};

OPCOES_ADV["mesario"] = {
  chegada: "Um oficial de colete surge com uma prancheta: \"Irving? O senhor foi convocado para ser mesário. Hoje. Agora.\" Ao longe, uma urna aguarda seu guardião.",
  lembretes: [
    "A convocação de mesário continua no bolso do Irving. O dever chama.",
    "Uma urna distante parece chamar o nome do Irving.",
  ],
  opcoes: [
    { t: "Cumprir o dever de mesário", precisaAdv: "mesario", resolve: "mesario",
      r: "O Irving assume a mesa com a honra de um cavaleiro. Carimba, confere, sorri. Horas depois é liberado, com um lanche e um certificado.",
      vai: "fica", p: { "dia-errado": 2, "hora-errada": 1 }, cara: "determinado" },

    { t: "Ir justificar a ausência", precisaAdv: "mesario", resolve: "mesario",
      r: "Um funcionário manda o Irving para outro prédio, que o manda para outro, que o manda para um lugar que ninguém entende. Justificado, enfim.",
      vai: ["fila-banco", "reuniao-onu", "conferencia-dermatologia"], p: { "hora-errada": 2, "dia-errado": 1 }, cara: "cansado" },

    { t: "Fingir que não é o Irving", precisaAdv: "mesario",
      risco: 10,
      r: "\"Irving? Nunca ouvi falar\", diz o Irving, de voz grossa. O oficial pede desculpas e vai embora. Atuação digna de novela.",
      vai: "fica", resolve: "mesario", p: { matrix: 1, famoso: 1 }, cara: "determinado",
      falha: { r: "O oficial confere a foto, confere o Irving e o escolta pessoalmente até a seção eleitoral. No caminho, o herói tropeça na escada.",
               vida: -12, vai: ["cantina-escola", "protesto", "reuniao-onu"], p: { "dia-errado": 2 }, cara: "triste" } },

    { t: "Se disfarçar com a peruca", precisaAdv: "mesario", precisa: "peruca", resolve: "mesario",
      r: "Com a peruca linda, o Irving vira outra pessoa. O oficial passa reto por ele, procurando um tal de Irving.",
      vai: "fica", p: { matrix: 1, famoso: 1 }, cara: "feliz" },
  ],
};

OPCOES_ADV["policia"] = {
  chegada: "Uma viatura encosta com a sirene ligada. O policial desce devagar, ajeita o quepe e pergunta: \"O senhor pode me dizer o que está fazendo aqui?\"",
  lembretes: [
    "O policial continua de olho no Irving, anotando tudo numa caderneta.",
    "Uma viatura segue o Irving à distância, bem devagarinho.",
  ],
  opcoes: [
    { t: "Explicar que só quer um misto quente", precisaAdv: "policia", resolve: "policia",
      r: "O Irving conta toda a jornada, com lágrimas nos olhos. O policial se emociona, devolve os documentos e aponta: \"A padaria é por ali.\" O herói segue.",
      vai: ["rua-irving", "loja-eletro-padaria", "bairro-desconhecido", "feira"], p: { feliz: 2 }, cara: "feliz" },

    { t: "Mostrar os documentos com calma", precisaAdv: "policia", resolve: "policia",
      r: "O policial analisa os documentos por longos minutos, consulta o rádio, suspira e libera o Irving. O tempo perdido, porém, não volta.",
      vai: "fica", p: { "hora-errada": 2, prisao: 1 }, cara: "cansado" },

    { t: "Sair correndo da polícia", precisaAdv: "policia",
      risco: 13,
      r: "O Irving corre como nunca. Pula uma cerca, atravessa um varal e some na paisagem. A polícia desiste. Mas anota o nome dele.",
      vai: ["canavial", "bairro-desconhecido", "trem", "beco-perigoso"], resolve: "policia", marca: "procurado", p: { prisao: 2, "onde-estou": 1 }, cara: "determinado",
      falha: { r: "O Irving tropeça no próprio cadarço, bate o queixo e é levado embora na viatura, sem entender bem pra onde.",
               vida: -15, vai: ["prisao", "encapuzado-carro", "hospital"], p: { prisao: 3 }, cara: "triste" } },

    { t: "Oferecer flores ao policial", precisaAdv: "policia", precisa: "bouquet", resolve: "policia",
      r: "O Irving estende o bouquet. O policial fica vermelho, aceita as flores e o dispensa com um aceno tímido.",
      vai: "fica", perde: "bouquet", p: { filosofico: 2 }, cara: "feliz" },
  ],
};

OPCOES_ADV["chuva"] = {
  chegada: "O céu escurece como no fim do mundo. Trovões rugem. Uma chuva torrencial despenca, e o Irving agora é um herói encharcado.",
  lembretes: [
    "A chuva continua caindo forte. O Irving pinga a cada passo.",
    "Os tênis do Irving fazem \"ploc\" a cada passo. Ainda chove.",
  ],
  opcoes: [
    { t: "Correr pro primeiro abrigo", precisaAdv: "chuva", resolve: "chuva",
      r: "O Irving corre de cabeça baixa e entra no primeiro lugar coberto que vê. Lá dentro, a chuva vira só um barulhinho distante.",
      vai: ["fila-banco", "sorveteria", "karaoke", "loja-patinetes", "cantina-escola"], p: { feliz: 1, "hora-errada": 1 }, cara: "cansado" },

    { t: "Dançar na chuva", precisaAdv: "chuva", resolve: "chuva",
      r: "O Irving dança na chuva como num filme antigo. Pessoas se juntam. Quando o sol volta, ele tem uma plateia e três novos amigos.",
      vai: "fica", p: { filosofico: 2, famoso: 1 }, cara: "feliz" },

    { t: "Esperar a chuva passar", precisaAdv: "chuva", resolve: "chuva",
      r: "O Irving se encolhe sob uma marquise e espera. E espera. A chuva passa, o sol volta, e o relógio andou mais do que devia.",
      vai: "fica", p: { "hora-errada": 2, sono: 1 }, cara: "cansado" },

    { t: "Pedir aos céus uma trégua", precisaAdv: "chuva",
      r: "O Irving ergue os braços e implora. Um trovão responde. A chuva continua, mas ele sente que foi ouvido lá em cima.",
      vai: "fica", vida: -5, p: { milagre: 2 }, cara: "determinado" },
  ],
};

OPCOES_ADV["sem-calcas"] = {
  chegada: "Um vento gelado sopra nas pernas do Irving. Ele olha pra baixo. Terror. O bravo herói saiu de casa sem calças.",
  lembretes: [
    "O Irving continua sem calças. Um vento frio faz questão de lembrar.",
    "As pessoas olham para as pernas do Irving e cochicham.",
  ],
  opcoes: [
    { t: "Voltar pra casa buscar as calças", precisaAdv: "sem-calcas", resolve: "sem-calcas",
      r: "Usando a mochila como escudo, o Irving corre de volta pra casa e veste as calças. Dignidade restaurada. A padaria que espere mais um pouco.",
      vai: "casa-irving", p: { sono: 1, feliz: 1 }, cara: "cansado" },

    { t: "Amarrar a jaqueta como saia", precisaAdv: "sem-calcas", resolve: "sem-calcas",
      r: "O Irving amarra a jaqueta bege na cintura. Não é uma calça, mas tem estilo. Um estilista que passava pede o contato dele.",
      vai: "fica", p: { famoso: 2 }, cara: "determinado" },

    { t: "Andar sem calças como se fosse moda", precisaAdv: "sem-calcas",
      r: "De cabeça erguida, o Irving desfila como se fosse tendência. Ninguém ousa questionar. Em minutos, três pessoas tiram as calças em apoio.",
      vai: "fica", p: { "rei-misto": 2 }, cara: "determinado" },

    { t: "Fazer uma calça de fita crepe", precisaAdv: "sem-calcas", precisa: "fita-crepe", resolve: "sem-calcas",
      r: "O Irving enrola as pernas com a fita crepe inteira. O resultado é uma calça bege, firme e barulhenta. A engenharia venceu.",
      vai: "fica", perde: "fita-crepe", p: { feliz: 1, matrix: 1 }, cara: "feliz" },
  ],
};

OPCOES_ADV["cobra"] = {
  chegada: "Sssss. Uma cobra enorme surge no caminho, enrolada, com os olhos fixos no Irving. Ela não parece ter pressa. Ele também não.",
  lembretes: [
    "A cobra continua por perto, observando cada passo do Irving.",
    "Um \"sssss\" discreto lembra que a cobra ainda está ali.",
  ],
  opcoes: [
    { t: "Dar a volta bem devagar", precisaAdv: "cobra", resolve: "cobra",
      r: "Passo a passo, como um ninja de boné, o Irving contorna a cobra. Ela boceja. Caminho livre, mas o desvio é longo, muito longo.",
      vai: ["canavial", "bairro-desconhecido", "feira", "rua-irving"], p: { "onde-estou": 1, "hora-errada": 1 }, cara: "assustado" },

    { t: "Encarar a cobra nos olhos", precisaAdv: "cobra",
      risco: 11,
      r: "Olho no olho, o Irving não pisca. A cobra, humilhada, recua e some no mato. O herói ergue o punho em vitória.",
      vai: "fica", resolve: "cobra", p: { "rei-misto": 2, feliz: 1 }, cara: "determinado",
      falha: { r: "A cobra vence a disputa e dá uma picadinha de aviso no tornozelo. O mundo gira, o Irving apaga e acorda sem saber onde está.",
               vida: -18, vai: ["hospital", "lugar-escuro", "bairro-desconhecido"], resolve: "cobra", p: { amnesia: 2 }, cara: "confuso" } },

    { t: "Afastar a cobra com a corda", precisaAdv: "cobra", precisa: "corda", resolve: "cobra",
      r: "O Irving sacode a corda no chão como se fosse outra cobra. A cobra verdadeira se apaixona pela corda e vai embora com ela.",
      vai: "fica", perde: "corda", p: { filosofico: 1, matrix: 1 }, cara: "confuso" },

    { t: "Encantar a cobra com o apito", precisaAdv: "cobra", precisa: "apito", resolve: "cobra",
      r: "O Irving apita uma melodia hipnótica. A cobra dança, rebola e segue o som até sumir no horizonte.",
      vai: "fica", p: { famoso: 2 }, cara: "feliz" },
  ],
};

OPCOES_ADV["desmaio"] = {
  chegada: "De repente, tudo gira. O herói cambaleia, sussurra \"misto...\" e desaba como uma árvore antiga. Trinta minutos de escuridão total.",
  lembretes: [
    "O Irving ainda está zonzo. O chão parece se mexer um pouquinho.",
    "Uma tontura leve lembra o Irving do apagão de mais cedo.",
  ],
  opcoes: [
    { t: "Acordar e perguntar que dia é hoje", precisaAdv: "desmaio", resolve: "desmaio",
      r: "O Irving abre os olhos e pergunta que dia é hoje. Um estranho responde, e ele não acredita. Levanta, sacode a poeira e segue, meio torto.",
      vai: "fica", p: { "dia-errado": 1, amnesia: 1, "hora-errada": 1 }, cara: "confuso" },

    { t: "Levantar e andar sem rumo", precisaAdv: "desmaio", resolve: "desmaio",
      r: "O Irving se levanta sem lembrar direito por que saiu de casa. Anda, anda, e só desperta de verdade num lugar que não reconhece.",
      vai: ["bairro-desconhecido", "hospital", "osasco", "canavial"], p: { amnesia: 2, "onde-estou": 1 }, cara: "confuso" },

    { t: "Continuar deitado mais um pouco", precisaAdv: "desmaio",
      r: "O chão é surpreendentemente confortável. O Irving conclui que desmaiar foi a melhor parte do dia e tira mais um cochilo.",
      vai: "fica", p: { sono: 2, "hora-errada": 1 }, cara: "cansado" },
  ],
};

OPCOES_ADV["tropeco"] = {
  chegada: "Pensando no misto, o Irving tropeça em alguém sentado no chão. Os dois rolam. Quando param, o desconhecido o encara em silêncio.",
  lembretes: [
    "O desconhecido do tropeço segue o Irving com o olhar, esperando desculpas.",
    "O joelho do Irving ainda lateja por causa do tropeço.",
  ],
  opcoes: [
    { t: "Pedir desculpas e ajudar a levantar", precisaAdv: "tropeco", resolve: "tropeco",
      r: "O Irving ajuda o desconhecido a se levantar e pede mil desculpas. Os dois riem, trocam histórias e se despedem como velhos amigos.",
      vai: "fica", p: { filosofico: 3 }, cara: "feliz" },

    { t: "Sentar junto com a pessoa", precisaAdv: "tropeco", resolve: "tropeco",
      r: "O Irving senta ao lado do desconhecido. Juntos, observam o mundo em silêncio. É a meia hora mais tranquila da vida dele.",
      vai: "fica", p: { sono: 1, filosofico: 1, "hora-errada": 1 }, cara: "neutro" },

    { t: "Sair de fininho", precisaAdv: "tropeco",
      r: "O Irving finge que nada aconteceu e acelera o passo. Olha pra trás: o desconhecido vem atrás. Ele acelera mais, e mais, até se perder.",
      vai: ["bairro-desconhecido", "beco-perigoso", "trem", "osasco"], p: { "onde-estou": 1, prisao: 1 }, cara: "assustado" },
  ],
};

OPCOES_ADV["alienigena"] = {
  chegada: "Um disco voador para no céu, zumbindo. Um raio verde envolve o Irving, que começa a flutuar. Uma voz metálica anuncia: \"HUMANO. VOCÊ FOI ESCOLHIDO.\"",
  lembretes: [
    "O disco voador continua pairando sobre o Irving, zumbindo baixinho.",
    "De vez em quando, um raio verde tenta puxar o Irving pro céu.",
  ],
  opcoes: [
    { t: "Deixar ser abduzido", precisaAdv: "alienigena", resolve: "alienigena",
      r: "O Irving relaxa e sobe no raio verde. Lá dentro, luzes, botões e um alienígena que só queria uma selfie. Depois, é devolvido... em algum lugar.",
      vai: ["estacao-espacial", "lugar-escuro", "xique-xique", "massachusetts", "canavial"], p: { "alem-tempo": 2, matrix: 1 }, cara: "assustado" },

    { t: "Se agarrar em algo e resistir", precisaAdv: "alienigena",
      risco: 10,
      r: "O Irving se agarra com unhas e barba. O raio puxa, puxa, e desiste. O disco vai embora, decepcionado.",
      vai: "fica", resolve: "alienigena", p: { "rei-misto": 1, feliz: 1 }, cara: "determinado",
      falha: { r: "O raio vence. O Irving é sugado, examinado e devolvido de cabeça pra baixo, sem lembrar de nada.",
               vida: -15, vai: ["lugar-escuro", "canavial", "estacao-espacial"], resolve: "alienigena", p: { amnesia: 2, matrix: 1 }, cara: "confuso" } },

    { t: "Negociar com o alienígena", precisaAdv: "alienigena", resolve: "alienigena",
      r: "O Irving propõe um acordo: fica na Terra e, em troca, ensina o alienígena a fazer misto quente. O ET aceita e parte, emocionado.",
      vai: "fica", p: { "rei-misto": 2, filosofico: 1 }, cara: "feliz" },

    { t: "Explicar o que é um misto quente", precisaAdv: "alienigena",
      r: "O Irving desenha no chão: pão, queijo, presunto. O alienígena chora de emoção e revela, baixinho, que a Terra é uma simulação.",
      vai: "fica", p: { matrix: 3 }, cara: "confuso" },
  ],
};

OPCOES_ADV["camarao"] = {
  chegada: "O Irving prova um salgadinho de uma bandeja misteriosa. Era camarão. Os lábios incham, o rosto coça. Ele descobre, do pior jeito, que é alérgico.",
  lembretes: [
    "Os lábios do Irving continuam inchados. A alergia não passou.",
    "O rosto do Irving ainda coça muito. Maldito camarão.",
  ],
  opcoes: [
    { t: "Correr atrás de um médico", precisaAdv: "camarao", resolve: "camarao",
      r: "Com a boca inchada, o Irving corre gritando \"CAMAÃO!\" até achar alguém de jaleco. Uma pomada depois, o rosto volta ao normal.",
      vai: ["hospital", "conferencia-dermatologia"], vida: -5, p: { milagre: 1, amnesia: 1 }, cara: "assustado" },

    { t: "Beber muita água e esperar", precisaAdv: "camarao", resolve: "camarao",
      r: "O Irving bebe três garrafas d'água e espera, sentado, contando os minutos. A alergia passa. O relógio, esse, não perdoa.",
      vai: "fica", p: { "hora-errada": 2 }, cara: "cansado" },

    { t: "Ignorar a alergia e seguir", precisaAdv: "camarao",
      r: "O Irving segue com a boca do tamanho de uma boia. Tenta pedir informação, mas só sai \"bbbfff\". Ninguém entende nada.",
      vai: "fica", vida: -8, p: { "onde-estou": 1, amnesia: 1 }, cara: "confuso" },

    { t: "Passar hidratante no rosto", precisaAdv: "camarao", precisa: "hidratante", resolve: "camarao",
      r: "O Irving espalha hidratante no rosto inchado. Não é remédio, mas alivia. O inchanço desce aos poucos, e a dignidade sobe.",
      vai: "fica", p: { feliz: 1 }, cara: "feliz" },
  ],
};

OPCOES_ADV["banheiro"] = {
  chegada: "Uma pontada. Depois outra. O Irving congela: uma vontade urgente e poderosa de ir ao banheiro toma conta do seu ser. A missão agora é outra.",
  lembretes: [
    "A vontade de ir ao banheiro está cada vez mais forte.",
    "O Irving anda de pernas cruzadas. Urgência máxima.",
  ],
  opcoes: [
    { t: "Procurar um banheiro às pressas", precisaAdv: "banheiro", resolve: "banheiro",
      r: "O Irving corre como quem foge de um dragão e invade o primeiro lugar com banheiro. Alívio épico. Os anjos cantam.",
      vai: ["sorveteria", "fila-banco", "karaoke", "cantina-escola", "hospital"], p: { feliz: 1, "hora-errada": 1 }, cara: "feliz" },

    { t: "Pedir o banheiro emprestado", precisaAdv: "banheiro", resolve: "banheiro",
      r: "O Irving bate na primeira porta e implora. Uma senhora gentil o deixa entrar, serve café e conta a vida inteira. Ele sai aliviado e com uma nova avó.",
      vai: "fica", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Segurar com toda a força", precisaAdv: "banheiro",
      r: "O Irving respira fundo e segura com a força de mil guerreiros. Por dentro, uma batalha épica. Por fora, só um homem suando.",
      vai: "fica", vida: -5, p: { "hora-errada": 1, "rei-misto": 1 }, cara: "determinado" },

    { t: "Pagar um banheiro de luxo", precisaAdv: "banheiro", precisa: "100-reais", resolve: "banheiro",
      r: "Por 100 reais, o Irving entra num banheiro com perfume, música ambiente e toalha quentinha. Sai de lá renovado, como um rei.",
      vai: "fica", perde: "100-reais", p: { "rei-misto": 2 }, cara: "feliz" },
  ],
};

OPCOES_ADV["rifa"] = {
  chegada: "O celular vibra: \"PARABÉNS! Você ganhou a rifa da firma!\" O Irving nem lembrava da rifa. O prêmio precisa ser retirado pessoalmente, hoje.",
  lembretes: [
    "O prêmio da rifa da firma ainda espera ser retirado.",
    "O celular vibra de novo: \"Não esqueça de retirar seu prêmio!\"",
  ],
  opcoes: [
    { t: "Ir buscar o prêmio da rifa", precisaAdv: "rifa", resolve: "rifa",
      r: "O prêmio é entregue num palco, diante de uma multidão: uma coroa de plástico. O Irving a coloca na cabeça e sente o poder.",
      vai: ["programa-auditorio", "quermesse", "luta-boxe", "reuniao-onu"], p: { "rei-misto": 3 }, cara: "determinado" },

    { t: "Doar o prêmio pra quem precisa", precisaAdv: "rifa", resolve: "rifa",
      r: "O Irving liga para a firma e manda doar o prêmio. Os colegas se emocionam e criam o grupo \"Amigos do Irving\". O celular não para de vibrar.",
      vai: "fica", p: { filosofico: 2, "rei-misto": 1 }, cara: "feliz" },

    { t: "Trocar o prêmio por um misto", precisaAdv: "rifa", resolve: "rifa",
      r: "O Irving negocia por telefone e troca o prêmio por um misto quente. Um motoboy aparece em minutos com o misto embrulhado em papel dourado.",
      vai: "fica", ganha: "misto-quente", p: { feliz: 1, "rei-misto": 1 }, cara: "feliz" },

    { t: "Perguntar qual é o prêmio", precisaAdv: "rifa",
      r: "\"Um boi\", responde a voz ao telefone. O Irving desliga. Liga de novo. \"Um boi.\" Ele precisa se sentar.",
      vai: "fica", p: { "rei-misto": 1, matrix: 1 }, cara: "confuso" },
  ],
};

// ---------------------------------------------------------------------
//  3) OPÇÕES GERAIS (coringas, servem em qualquer lugar)
// ---------------------------------------------------------------------

OPCOES_GERAIS.push(
  { t: "Perguntar o caminho da padaria",
    r: "Uma senhora aponta com certeza absoluta: \"É logo ali, depois da esquina.\" O Irving agradece e segue. A esquina leva a um lugar que ninguém mencionou.",
    vai: ["rua-irving", "bairro-desconhecido", "feira", "osasco", "loja-eletro-padaria", "oficina-mecanica", "loja-patinetes"], p: { feliz: 2, "onde-estou": 1 }, cara: "determinado" },

  { t: "Sair correndo sem rumo",
    r: "O Irving dispara como um corcel selvagem, sem olhar pra onde vai. Quando para, ofegante, a paisagem é completamente outra.",
    vai: ["canavial", "bairro-desconhecido", "protesto", "excursao-peruanos", "osasco", "massachusetts", "campo-futebol", "oficina-mecanica"], vida: -5, p: { "onde-estou": 2 }, cara: "assustado" },

  { t: "Sentar e refletir sobre a vida",
    r: "O Irving senta e pensa. Por que um misto? Por que hoje? Por que ele? As respostas não vêm, mas uma sensação de paz, sim.",
    vai: "fica", p: { filosofico: 2, sono: 1 }, cara: "neutro" },

  { t: "Seguir o cheiro de pão",
    r: "O nariz do Irving capta, ao longe, o perfume sagrado do pão quentinho. Ele segue o rastro como um cão de caça faminto.",
    vai: ["loja-eletro-padaria", "forno-gigante", "comercial-margarina", "fabrica-chocolate", "feira"], p: { feliz: 3 }, cara: "determinado" },

  { t: "Tirar uma foto com a câmera",
    r: "O Irving ergue a câmera do ombro e clica. O flash é tão forte que, quando ele volta a enxergar, está em outro lugar.",
    vai: ["programa-auditorio", "novela-mexicana", "lugar-escuro", "comercial-margarina", "casamento"], p: { matrix: 2, famoso: 1 }, cara: "confuso" },

  { t: "Gritar \"MISTO QUENTE!\" para os céus",
    r: "O grito ecoa por montanhas e vales. Pássaros levantam voo. Em algum lugar, um padeiro sente um arrepio. Nada mais acontece. Por enquanto.",
    vai: "fica", p: { milagre: 2, feliz: 1 }, cara: "determinado" },

  { t: "Fazer amizade com um estranho",
    r: "O Irving puxa conversa com um desconhecido. Em cinco minutos, são melhores amigos. O novo amigo insiste em levá-lo a um lugar especial.",
    vai: ["casamento", "hidroginastica", "excursao-peruanos", "karaoke", "quermesse", "campo-futebol", "cristo-redentor"], p: { filosofico: 3 }, cara: "feliz" },

  { t: "Deitar no chão um pouquinho",
    r: "O Irving deita no chão, só por um minuto. O chão é frio, firme e acolhedor. Os olhos pesam. Quando abre, já não está no mesmo lugar.",
    vai: ["cama-irving", "caixa-papelao", "lugar-escuro", "dentro-baleia"], p: { sono: 2, amnesia: 1 }, cara: "cansado" },

  { t: "Conferir as horas no relógio",
    r: "O Irving olha o relógio: 9h. Olha de novo: 10h. Olha mais uma vez: 11h. Ele decide parar de olhar, por segurança.",
    vai: "fica", p: { "hora-errada": 3 }, cara: "assustado" },

  { t: "Fazer um discurso inspirador",
    r: "O Irving sobe num banquinho e discursa sobre o misto quente. Uma multidão se forma. Alguns choram. Outros já o chamam de líder.",
    vai: "fica", p: { "rei-misto": 3 }, cara: "determinado" },

  { t: "Cantar pra passar o tempo",
    r: "O Irving solta a voz. Um produtor musical que passava o puxa pelo braço: \"Você precisa de um palco!\" E o leva sem pedir licença.",
    vai: ["karaoke", "programa-auditorio", "quermesse", "cristo-redentor"], p: { famoso: 3 }, cara: "feliz" },

  { t: "Olhar o calendário no celular",
    r: "Um lembrete pisca na tela: \"Hoje é feriado de alguma coisa.\" De quê? Ninguém sabe. Mas o Irving sente um mau pressentimento.",
    vai: "fica", p: { "dia-errado": 3 }, cara: "confuso" },

  { t: "Seguir um macaco que passou correndo",
    r: "Um macaco passa com um cacho de bananas. O Irving, por algum motivo, decide segui-lo. O macaco o leva a um lugar colorido e muito estranho.",
    vai: ["elefante", "xique-xique", "sorveteria", "feira"], p: { banana: 2 }, cara: "confuso" },

  { t: "Seguir um cachorro que parece saber",
    r: "Um cachorro de rua olha para o Irving e vira a cabeça, como quem diz \"vem\". O herói confia no guia de quatro patas.",
    vai: ["feira", "quermesse", "cantina-escola", "sorveteria", "rua-irving", "oficina-mecanica"], p: { "quase-feliz": 2, feliz: 1 }, cara: "determinado" },

  { t: "Apertar um botão vermelho misterioso",
    r: "Na parede, um botão vermelho diz NÃO APERTE. O Irving aperta. Um zumbido, um clarão, e tudo ao redor muda de época. Ou de planeta.",
    vai: ["estacao-espacial", "inglaterra-medieval", "lugar-escuro", "reuniao-onu"], p: { "antes-tempo": 1, "alem-tempo": 1, matrix: 1 }, cara: "assustado" },

  { t: "Entrar pela porta \"Proibido\"",
    risco: 10,
    r: "Atrás da porta há um corredor secreto que leva a um lugar muito importante. Ninguém pergunta nada: o Irving parece saber o que faz.",
    vai: ["reuniao-onu", "estacao-espacial", "programa-auditorio", "fabrica-chocolate"], p: { "rei-misto": 1, "alem-tempo": 1, feliz: 1 }, cara: "determinado",
    falha: { r: "Um alarme. Seguranças. Um capuz. O Irving é levado embora sem ter a chance de explicar nada sobre o misto.",
             vida: -15, vai: ["prisao", "encapuzado-carro", "beco-perigoso"], p: { prisao: 3 }, cara: "assustado" } },

  { t: "Pedir carona pro primeiro que passar",
    r: "Um motorista para, abre a porta e sorri demais. O Irving entra sem pensar duas vezes. A viagem é curta, estranha e termina num lugar inesperado.",
    vai: ["uber", "oficina-mecanica", "pedagio", "luta-boxe", "massachusetts", "loja-patinetes"], p: { "onde-estou": 1, "hora-errada": 1 }, cara: "confuso" },

  { t: "Voltar pra casa e pegar o carro",
    r: "Todo herói sábio sabe a hora de recuar. O Irving marcha de volta, decidido a buscar o carro na garagem.",
    vai: ["carro-irving", "casa-irving"], p: { feliz: 1, sono: 1 }, cara: "determinado" },
);
