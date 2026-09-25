// =====================================================================
//  HISTÓRIA: Rua do Irving, Uber, Osasco, Cristo Redentor, Massachusetts,
//            Campo de futebol, Quermesse, Luta de boxe (lugares 2 a 9)
//  Formato de cada opção: veja o guia em ferramentas/GUIA-HISTORIA.md
// =====================================================================

CENAS["rua-irving"] = {
  chegadas: [
    "A rua do Irving se estende sob as árvores como um corredor de catedral. Pássaros cantam, um vizinho rega a calçada e, em algum lugar, existe uma padaria.",
    "Eis a rua arborizada, primeiro campo de batalha de todo herói. A vizinha espia pela janela. Um caminhão de mudança ronca na esquina.",
  ],
  opcoes: [
    { t: "Passar na Casa do Norte do bairro",
      r: "Na esquina, a velha Casa do Norte abre as portas de madeira. \"Vai que eles têm misto\", pensa o herói, com a fé de quem nunca perguntou.",
      vai: "casa-do-norte", p: { feliz: 1, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Seguir o cheiro de pão no ar",
      r: "O nariz do Irving vira bússola. O cheiro é forte, promissor, e termina numa loja que vende fornos. Pão, nenhum.",
      vai: "loja-eletro-padaria", p: { feliz: 2 }, cara: "determinado" },

    { t: "Subir na árvore pra achar a padaria",
      risco: 11,
      r: "Do galho mais alto, o Irving avista a padaria! Um bando de pássaros confunde o boné com um ninho e o leva voando na direção certa.",
      vai: "carregado-passaros", p: { feliz: 1, milagre: 3 }, cara: "feliz",
      falha: { r: "O galho estala. O herói despenca com a dignidade de uma jaca madura e acorda num corredor de hospital.",
               vida: -15, vai: "hospital", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Dar bom dia pra vizinha da janela",
      r: "A vizinha adora o Irving. Tanto que o arrasta pelo braço até o compromisso dela, que está começando agora.",
      vai: ["casamento", "hidroginastica"], p: { filosofico: 2 }, cara: "confuso" },

    { t: "Espiar o caminhão de mudança",
      r: "Lá dentro, um skate largado e uma caixa enorme e fofinha. O Irving pega o skate e entra na caixa só pra testar. Os carregadores fecham a tampa.",
      ganha: "skate", vai: "caixa-papelao", p: { sono: 1, "onde-estou": 1 }, cara: "confuso" },

    { t: "Ajudar o gari a varrer as folhas",
      r: "Juntos, os dois vencem a batalha das folhas secas. Entre elas, reluz um garfo, como uma Excalibur de inox.",
      vai: "fica", ganha: "garfo", p: { filosofico: 1 } },

    { t: "Correr atrás do carrinho de sorvete",
      r: "A musiquinha do sorvete hipnotiza o herói. Ele corre três quarteirões e só para dentro de uma sorveteria colorida.",
      vai: "sorveteria", p: { banana: 2 } },

    { t: "Jogar alpiste pros pombos da calçada",
      precisa: "alpiste",
      r: "Os pombos se reúnem em conselho. Aceitam a oferenda, agarram o Irving pela jaqueta e decolam rumo ao céu.",
      vai: "carregado-passaros", perde: "alpiste", p: { milagre: 3 }, cara: "feliz" },

    { t: "Descer a ladeira de skate",
      precisa: "skate",
      r: "A ladeira é longa e o skate, valente. Ele se despedaça no último metro, bem na porta de uma loja de patinetes. Quase!",
      vai: "loja-patinetes", perde: "skate", p: { feliz: 1, "quase-feliz": 1, "alem-tempo": 1 } },

    { t: "Cortar caminho pelo terreno baldio",
      r: "O atalho parecia curto. Parecia. Depois de muito mato, o Irving surge num lugar que não reconhece de jeito nenhum.",
      vai: ["bairro-desconhecido", "canavial"], p: { "onde-estou": 2 }, cara: "confuso" },

    { t: "Perguntar a padaria pro carteiro",
      r: "O carteiro jura que conhece um atalho. O atalho termina numa fila de banco. Senha 847. Estão chamando a 12.",
      vai: "fila-banco", p: { "hora-errada": 2, "dia-errado": 1 }, cara: "triste" },

    { t: "Correr atrás do ônibus que passou",
      risco: 11,
      r: "Arrancada olímpica! O Irving alcança o ônibus. O motorista avisa, orgulhoso, que a linha é expressa para Osasco.",
      vai: "osasco", p: { feliz: 1, "onde-estou": 1 }, cara: "determinado",
      falha: { r: "O ônibus some na curva. Ofegante, o Irving tropeça num grupo de faixas e cartazes e é engolido pela multidão.",
               vida: -12, vai: "protesto", p: { "dia-errado": 3 }, cara: "cansado" } },

    { t: "Tocar a campainha e sair correndo",
      r: "Uma travessura digna de lenda. O dono sai de roupão e o Irving foge por três esquinas, até entrar num beco escuro.",
      vai: "beco-perigoso", p: { prisao: 3 }, cara: "assustado" },
  ],
};

CENAS["uber"] = {
  chegadas: [
    "O Irving está no banco de trás de um carro de aplicativo. Cheiro de aromatizante de baunilha. O motorista, nota 4,97, sorri pelo retrovisor como quem guarda um segredo.",
    "Eis a carruagem moderna: ar ligado, balinha no console, GPS falando sozinho. O motorista pergunta se a temperatura está boa. O destino, ninguém sabe.",
  ],
  opcoes: [
    { t: "Pedir pro motorista seguir o GPS",
      r: "O GPS recalcula a rota catorze vezes e decide, com toda a certeza, que a padaria fica depois de um pedágio.",
      vai: "pedagio", p: { "hora-errada": 2 }, cara: "confuso" },

    { t: "Aceitar a balinha de cortesia",
      r: "É bala de banana. Um arrepio percorre a espinha do herói. O motorista, feliz, enche o bolso dele com mais uma, de fruta mesmo.",
      vai: "fica", ganha: "banana", p: { banana: 3 }, cara: "bravo" },

    { t: "Puxar papo sobre futebol",
      r: "O motorista se empolga tanto que entra no estacionamento do estádio e larga o Irving no meio do gramado.",
      vai: "campo-futebol", p: { filosofico: 1, "rei-misto": 1 } },

    { t: "Pedir pra colocar uma música",
      r: "O carro tem modo karaokê. O Irving canta o refrão com tanta alma que o motorista para na porta de um karaokê e entrega o microfone.",
      vai: "karaoke", p: { famoso: 2 }, cara: "feliz" },

    { t: "Cochilar no banco de trás",
      r: "O balanço do carro embala o herói. O motorista, com pena, faz meia-volta e o deixa de volta em casa, ainda cochilando.",
      vai: ["casa-irving", "cama-irving"], p: { sono: 2 }, cara: "cansado" },

    { t: "Mudar o destino pra \"qualquer lugar\"",
      r: "O aplicativo aceita o desafio. Horas de estrada depois, o motorista abre a porta num lugar que nenhum dos dois sabe pronunciar.",
      vai: ["xique-xique", "massachusetts", "canavial"], p: { "onde-estou": 2 }, cara: "confuso" },

    { t: "Mandar o motorista furar o sinal",
      risco: 12,
      r: "O carro cruza o sinal como um cavalo de batalha! Na esquina seguinte, surge uma loja de fornos de padaria. Sinal divino.",
      vai: "loja-eletro-padaria", p: { feliz: 3, milagre: 1 }, cara: "determinado",
      falha: { r: "Sirene. Uma viatura estava bem ali. O Irving passa o resto da manhã explicando tudo atrás das grades.",
               vida: -12, vai: "prisao", p: { prisao: 3 }, marca: "procurado", cara: "assustado" } },

    { t: "Pagar a corrida com os 100 reais",
      precisa: "100-reais",
      r: "Emocionado com a gorjeta, o motorista promete o caminho mais doce da cidade. Ele cumpre: para na porta de uma fábrica de chocolate.",
      vai: "fabrica-chocolate", perde: "100-reais", p: { feliz: 2 }, cara: "feliz" },

    { t: "Fuçar o bolso do banco da frente",
      r: "Entre folhetos e uma garrafinha d'água, repousa uma peruca linda. O motorista diz que foi esquecida por um cantor famoso.",
      vai: "fica", ganha: "peruca", p: { famoso: 1 }, cara: "confuso" },

    { t: "Pular do carro em movimento",
      risco: 14,
      r: "Rolamento de cinema! O Irving cai de pé no meio da gravação de um comercial de café da manhã. O diretor grita: \"Perfeito!\"",
      vai: "comercial-margarina", p: { feliz: 3 }, cara: "feliz",
      falha: { r: "O asfalto não perdoa. O herói quica duas vezes e acorda num corredor branco, com cheiro de álcool em gel e gente de jaleco.",
               vida: -20, vai: ["hospital", "conferencia-dermatologia"], p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Aceitar o atalho do motorista",
      r: "O atalho inclui atravessar um rio. O carro sobe numa balsa, que anda dez metros e pifa bem no meio.",
      vai: "balsa", p: { "hora-errada": 2 }, cara: "triste" },

    { t: "Olhar pela janela",
      r: "O mesmo poste passa três vezes. O mesmo cachorro. A mesma senhora de guarda-chuva. O Irving pisca e há violinos tocando.",
      vai: "novela-mexicana", p: { matrix: 2 }, cara: "assustado" },

    { t: "Aceitar o floral do motorista",
      r: "O motorista abre o porta-luvas: dezenas de vidrinhos. \"Floral de Bach, fórmula Urgências. Pra passageiro apressado.\" Entrega um ao Irving com sorriso nota 5.",
      vai: "fica", ganha: "floral", p: { filosofico: 1, "hora-errada": 1 }, cara: "confuso" },
  ],
};

CENAS["osasco"] = {
  chegadas: [
    "O calçadão de Osasco ferve. Camelôs anunciam ofertas, um homem-placa grita \"compro ouro\" e um carro de som disputa a atenção com todos. O Irving respira fundo.",
    "Eis Osasco, a cidade que nunca para. Sacolas, pastel, panfletos e um mar de gente. Em algum lugar desse labirinto, deve haver um misto quente.",
  ],
  opcoes: [
    { t: "Seguir a placa \"Produtos do Norte\"",
      r: "Uma placa pintada à mão aponta para uma portinha. Lá dentro, fubá, rapadura e um balcão azul que parece esperar pelo Irving há anos.",
      vai: "casa-do-norte", p: { "quase-feliz": 1, "onde-estou": 1 }, cara: "confuso" },

    { t: "Pegar o panfleto do homem-placa",
      r: "No verso, um mapa desenhado à mão da \"melhor padaria da região\". O Irving segue à risca. Três ônibus depois, está em Xique-Xique, Bahia.",
      vai: "xique-xique", marca: "mapa", p: { "onde-estou": 2 }, cara: "confuso" },

    { t: "Comprar um apito no camelô",
      precisa: "100-reais",
      r: "Por 100 reais, um apito \"oficial de árbitro\". É tão oficial que um olheiro convoca o Irving para apitar um jogo agora mesmo.",
      vai: "campo-futebol", perde: "100-reais", ganha: "apito", p: { "rei-misto": 1, famoso: 1 }, cara: "determinado" },

    { t: "Garimpar na loja de R$ 1,99",
      r: "Entre capinhas de celular e patos de borracha, uma caixa de fósforos sem preço. A moça do caixa diz pra levar.",
      vai: "fica", ganha: "fosforos", p: { filosofico: 1 } },

    { t: "Pegar o trem na estação",
      r: "O Irving embarca rumo à padaria. Ou rumo a algum lugar. O trem sacoleja e o destino fica nas mãos dos trilhos.",
      vai: "trem", p: { "hora-errada": 2 } },

    { t: "Seguir o cheiro de pastel",
      r: "O cheiro de pastel puxa o herói como um ímã. Quando percebe, está diante de uma feira inteira, e um cachorro o encara.",
      vai: "feira", p: { "quase-feliz": 3 }, cara: "feliz" },

    { t: "Seguir o carro de som",
      r: "O carro de som anuncia ofertas, depois palavras de ordem. Quando o Irving percebe, está segurando uma faixa num protesto.",
      vai: "protesto", p: { "dia-errado": 3 }, cara: "confuso" },

    { t: "Seguir o homem do \"compro ouro\"",
      r: "O homem-placa entra numa viela. O Irving entra atrás. A placa agora diz \"compro sanduíches\". O beco é escuro demais.",
      vai: "beco-perigoso", p: { prisao: 3 }, cara: "assustado" },

    { t: "Atravessar o calçadão correndo",
      risco: 10,
      r: "Desviando de sacolas, carrinhos e panfletos, o Irving cruza o calçadão como um herói grego. Do outro lado, uma loja de patinetes oferece test drive grátis!",
      vai: "loja-patinetes", p: { feliz: 2, "alem-tempo": 1 }, cara: "determinado",
      falha: { r: "Uma avalanche de sacolas derruba o herói. Ele levanta tonto, anda sem rumo e para num bairro que nenhum mapa conhece.",
               vida: -15, vai: "bairro-desconhecido", p: { "onde-estou": 2 }, cara: "confuso" } },

    { t: "Perguntar o caminho a um senhor",
      r: "O senhor aponta com firmeza: \"Reto toda vida!\" O Irving vai reto toda vida e só para no meio de um canavial.",
      vai: "canavial", p: { feliz: 1, "onde-estou": 1 } },

    { t: "Entrar na roda de dança de rua",
      risco: 12,
      r: "O passinho sai perfeito! Uma equipe de TV filma tudo e, em minutos, o Irving está no palco de um programa de auditório.",
      vai: "programa-auditorio", marca: "famoso-tv", p: { famoso: 3 }, cara: "feliz",
      falha: { r: "O giro dá errado e acerta um lutador que passava. Ofendido, ele desafia o Irving pro ringue mais próximo.",
               vida: -12, vai: "luta-boxe", p: { "rei-misto": 1, amnesia: 1 }, cara: "confuso" } },

    { t: "Pedir ajuda a um grupo de turistas",
      r: "São turistas peruanos, perdidos também. Eles adotam o Irving na hora e o colocam no ônibus da excursão.",
      vai: "excursao-peruanos", marca: "amigo-peruanos", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Sentar no banco da praça",
      r: "Um senhor senta ao lado e conta a vida inteira. No fim, dá ao Irving o skate da juventude dele. Três lições, um skate e nenhum misto.",
      ganha: "skate", vai: "fica", p: { filosofico: 1, sono: 1, "antes-tempo": 1 }, cara: "cansado" },

    { t: "Comprar um espetinho no carrinho",
      r: "O espetinho chega fumegante. Um cachorro caramelo salta, abocanha e foge. O Irving persegue o ladrão pelo calçadão até o meio de uma feira.",
      vai: "feira", p: { "quase-feliz": 3 }, cara: "bravo" },
  ],
};

CENAS["cristo-redentor"] = {
  chegadas: [
    "Aos pés do Cristo Redentor, o Irving contempla o Rio de Janeiro. Mil turistas disputam o mesmo metro quadrado para a mesma selfie de braços abertos.",
    "Eis o Corcovado, lá no alto, entre as nuvens. O Cristo abre os braços para a cidade. Os turistas também. Um sagui observa o boné do Irving com interesse.",
  ],
  opcoes: [
    { t: "Abrir os braços igual ao Cristo",
      r: "Uma rajada de vento sopra. Um bando de pássaros confunde o Irving com a estátua, agarra a jaqueta dele e o ergue aos céus.",
      vai: "carregado-passaros", p: { milagre: 3 }, cara: "assustado" },

    { t: "Ajoelhar e pedir um misto aos céus",
      r: "O Irving faz uma prece fervorosa. Os céus respondem com um trovão. Quando ele abre os olhos, tudo é escuro e silencioso.",
      vai: "lugar-escuro", p: { milagre: 2, matrix: 1 }, cara: "assustado" },

    { t: "Fotografar a cidade com a câmera",
      r: "No zoom máximo, o Irving avista uma padaria! Ele desce correndo, mas o letreiro dizia \"equipamentos para padaria\".",
      vai: "loja-eletro-padaria", p: { feliz: 2 }, cara: "determinado" },

    { t: "Entrar na selfie de uns turistas",
      r: "É uma excursão de peruanos. Eles adoram o intruso, fazem mais doze fotos e o levam junto no ônibus.",
      vai: "excursao-peruanos", marca: "amigo-peruanos", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Cantar \"Cidade Maravilhosa\"",
      r: "Os turistas aplaudem, filmam e pedem bis. Um empresário emocionado arrasta o Irving para um karaokê, com contrato assinado num guardanapo.",
      vai: "karaoke", p: { famoso: 2 }, cara: "feliz" },

    { t: "Descer as escadarias correndo",
      risco: 11,
      r: "Duzentos degraus em trinta segundos! Lá embaixo, uma feira de rua cheirando a pastel quentinho recebe o herói.",
      vai: "feira", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado",
      falha: { r: "O Irving erra o degrau 47 e rola o resto do morro como uma bola de boliche. Acorda num corredor de hospital.",
               vida: -18, vai: "hospital", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Pegar o bondinho pra descer",
      r: "O bondinho balança, balança, e o cabo desce reto até uma balsa parada no meio do rio. Ninguém sabe explicar.",
      vai: "balsa", p: { "hora-errada": 2 }, cara: "confuso" },

    { t: "Jogar alpiste aos pés do Cristo",
      precisa: "alpiste",
      r: "Centenas de pássaros descem do céu em formação sagrada. Um deles deixa cair, no colo do Irving, uma migalha de pão. É um sinal.",
      vai: "fica", perde: "alpiste", p: { milagre: 3 }, cara: "feliz" },

    { t: "Correr atrás do sagui do boné",
      risco: 12,
      r: "Boné recuperado! O sagui, derrotado, entrega uma banana como tributo. O Irving aceita com nojo, por diplomacia.",
      vai: "fica", ganha: "banana", p: { banana: 3, "rei-misto": 1 }, cara: "bravo",
      falha: { r: "O sagui é mais rápido. O Irving se embrenha na mata atrás dele e sai do outro lado num canavial sem fim.",
               vida: -12, vai: "canavial", p: { "onde-estou": 2 }, cara: "confuso" } },

    { t: "Comprar mate e biscoito de polvilho",
      precisa: "100-reais",
      r: "Mate gelado numa mão, biscoito na outra. O Irving sorri tanto que uma equipe o contrata na hora para um comercial de café da manhã.",
      vai: "comercial-margarina", perde: "100-reais", p: { feliz: 2 }, cara: "feliz" },

    { t: "Discursar aos turistas",
      r: "Do alto de um banquinho, braços abertos, o Irving discursa em seis línguas que não fala. Um diplomata o leva direto à ONU.",
      vai: "reuniao-onu", p: { "rei-misto": 2 }, cara: "determinado" },

    { t: "Entrar no helicóptero de passeio",
      r: "O helicóptero sobe mais do que devia. No meio das nuvens, o Irving é transferido para um avião sem entender como.",
      vai: "aviao", p: { amnesia: 1, "onde-estou": 1, milagre: 1 }, cara: "confuso" },

    { t: "Sentar e esperar um sinal divino",
      cenaMin: 5,
      r: "Exausto, o Irving senta aos pés do Cristo e fecha os olhos. Ao longe, um bater de asas se aproxima, trazendo algo quentinho.",
      fim: "milagre", cara: "cansado" },

    { t: "Filmar a vista com a Tekpix", precisa: "tekpix",
      r: "O Irving filma o Rio de braços abertos, igual ao Cristo. Um sagui entra na cena e faz pose. O vídeo viraliza, e turistas do mundo inteiro pedem autógrafo.",
      vai: "fica", p: { famoso: 3, filosofico: 1 }, cara: "feliz" },
  ],
};

CENAS["massachusetts"] = {
  chegadas: [
    "Tijolinhos vermelhos, folhas de outono e esquilos apressados. O Irving está em Massachusetts, Estados Unidos. Ninguém aqui sabe o que é um misto quente.",
    "Eis a Nova Inglaterra, terra de universidades e chá jogado no porto. O vento é gelado. Um esquilo encara o Irving como quem sabe algo.",
  ],
  opcoes: [
    { t: "Pedir um misto quente em inglês",
      r: "O Irving pede um \"hot mixed\". O americano entende \"hot mess\" e o leva para um programa de TV sobre bagunça.",
      vai: "programa-auditorio", p: { matrix: 1, famoso: 1 }, cara: "confuso" },

    { t: "Visitar a universidade famosa",
      r: "Num laboratório, um cientista escolhe o Irving como voluntário. Contagem regressiva. Quando a fumaça baixa, ele está em órbita.",
      vai: "estacao-espacial", p: { "alem-tempo": 3 }, cara: "assustado" },

    { t: "Jogar chá no porto como em 1773",
      r: "O Irving joga uma caixa de chá no mar. Os ingleses se ofendem tanto que o levam de volta pra Inglaterra. De séculos atrás.",
      vai: "inglaterra-medieval", p: { "antes-tempo": 3 }, cara: "assustado" },

    { t: "Seguir um esquilo apressado",
      r: "O esquilo o guia até um monte de folhas e cava um tesouro enterrado: um cortador de unha. O Irving aceita o presente.",
      vai: "fica", ganha: "cortador-unha", p: { filosofico: 1, "quase-feliz": 1 }, cara: "confuso" },

    { t: "Pegar um táxi amarelo",
      r: "O taxista não entende uma palavra e, na dúvida, leva o Irving pro aeroporto. Ele acorda com um cinto de segurança afivelado.",
      vai: "aviao", p: { "onde-estou": 1, amnesia: 1, banana: 1 }, cara: "confuso" },

    { t: "Pedir um mapa pra voltar ao Brasil",
      r: "Um americano entrega um mapa e aponta errado com toda a confiança. Seguindo-o, o Irving atravessa o continente e chega a um lugar muito diferente.",
      vai: ["canavial", "bairro-desconhecido", "xique-xique"], marca: "mapa", p: { "onde-estou": 2 } },

    { t: "Pagar panquecas com os 100 reais",
      precisa: "100-reais",
      r: "Os 100 reais viram uma panqueca e um sorriso. O cozinheiro, comovido, apresenta o Irving ao seu fornecedor de fornos.",
      vai: "loja-eletro-padaria", perde: "100-reais", p: { feliz: 2 }, cara: "feliz" },

    { t: "Fingir ser americano pro policial",
      risco: 11,
      r: "Um \"howdy\" perfeito! O policial bate continência e escolta o Irving até um estádio lotado, na tribuna de honra.",
      vai: "campo-futebol", p: { "rei-misto": 2, feliz: 1 }, cara: "determinado",
      falha: { r: "O \"howdy\" sai com sotaque de Osasco. O policial pede documentos, e o Irving passa a manhã explicando tudo numa cela.",
               vida: -12, vai: "prisao", marca: "procurado", p: { prisao: 3 }, cara: "triste" } },

    { t: "Atravessar o rio congelado",
      risco: 13,
      r: "O gelo aguenta! Do outro lado, uma feira de fazendeiros com cheiro de pão caseiro saindo do forno.",
      vai: "feira", p: { feliz: 2, "quase-feliz": 1 }, cara: "feliz",
      falha: { r: "Crac. O gelo cede, a correnteza leva o herói até o mar, e uma baleia distraída abre a boca na hora errada.",
               vida: -18, vai: "dentro-baleia", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Entrar numa festa de família",
      r: "Os americanos acham que o Irving é o primo do Brasil. Abraços, torta de abóbora e, de repente, ele está no altar como padrinho.",
      vai: "casamento", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Contar os tijolinhos da calçada",
      r: "Cada tijolo tem o nome do Irving gravado. A rua se repete. E se repete. Ele pisca, e a luz se apaga de vez.",
      vai: "lugar-escuro", p: { matrix: 2 }, cara: "assustado" },

    { t: "Deitar no banco sob as folhas",
      r: "As folhas caem como um cobertor dourado. O Irving cochila e acorda com um chapéu que alguém pôs nele. É muito maneiro.",
      vai: "fica", ganha: "chapeu", p: { sono: 2 }, cara: "cansado" },

    { t: "Visitar um casarão de 1700",
      r: "Mosquetes, perucas brancas e um relógio de pêndulo parado. O Irving dá corda nele. Tic, tac, BLÉM! Quando a poeira baixa, está numa vila de cavaleiros, séculos antes de qualquer misto.",
      vai: "inglaterra-medieval", p: { "antes-tempo": 3 }, cara: "assustado" },
  ],
};

CENAS["campo-futebol"] = {
  chegadas: [
    "Refletores acesos, gramado impecável, sessenta mil torcedores. O Irving está no meio do campo, e o juiz aponta pra ele como se fosse o camisa 10.",
    "Eis o estádio, coliseu dos tempos modernos. A torcida canta, o gandula boceja e o placar marca zero a zero. Todos olham para o homem de jaqueta bege.",
  ],
  opcoes: [
    { t: "Bater o pênalti decisivo",
      risco: 11,
      r: "GOOOL! A torcida carrega o Irving nos ombros, e o herói é levado direto para o palco do programa de domingo.",
      vai: "programa-auditorio", marca: "campeao", p: { "rei-misto": 2, famoso: 1 }, cara: "feliz",
      falha: { r: "A bola bate na trave e volta, com juros, na testa do Irving. Ele acorda num hospital sem saber quem ganhou.",
               vida: -15, vai: "hospital", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Comprar cachorro-quente do estádio",
      precisa: "100-reais",
      r: "Um cachorro de verdade rouba o cachorro-quente. O Irving persegue o ladrão pela arquibancada e para no meio de uma feira.",
      vai: "feira", perde: "100-reais", p: { "quase-feliz": 3 }, cara: "bravo" },

    { t: "Virar gandula",
      r: "Busca bola, devolve bola. Os jogadores adoram o novo gandula e, no banco de reservas, ele acha um apito esquecido.",
      vai: "fica", ganha: "apito", p: { filosofico: 1, famoso: 1 } },

    { t: "Puxar a ola da torcida",
      r: "Sessenta mil pessoas obedecem ao Irving. É o poder! Um diplomata na tribuna fica tão impressionado que o leva para a ONU.",
      vai: "reuniao-onu", p: { "rei-misto": 2 }, cara: "determinado" },

    { t: "Pedir pro juiz checar o VAR",
      r: "O VAR revisa o lance por quarenta minutos. No telão, aparece o Irving de pijama. A imagem trava, e tudo fica escuro.",
      vai: "lugar-escuro", p: { matrix: 2, "hora-errada": 1 }, cara: "assustado" },

    { t: "Vestir a fantasia do mascote",
      r: "A fantasia de macaco é quente e fofa como um edredom. O Irving cochila lá dentro e é guardado numa caixa no depósito.",
      vai: "caixa-papelao", p: { sono: 2, banana: 1 }, cara: "cansado" },

    { t: "Seguir o cheiro de pão do vestiário",
      r: "No vestiário, pão na chapa para o time! O cozinheiro pede ajuda ao Irving para buscar mais, lá dentro de um forno enorme.",
      vai: "forno-gigante", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Cantar o hino no telão",
      r: "A câmera foca no Irving, que canta o hino como um tenor. Um produtor o arrasta para um karaokê para gravar a versão estendida.",
      vai: "karaoke", p: { famoso: 2 }, cara: "feliz" },

    { t: "Invadir o campo e abraçar o craque",
      risco: 12,
      r: "O craque retribui o abraço e troca de camisa com o Irving. A torcida chora. Uma amizade eterna nasce ali.",
      vai: "fica", p: { filosofico: 2, famoso: 1 }, cara: "feliz",
      falha: { r: "Os seguranças fazem uma marcação perfeita no círculo central. O Irving sai do estádio escoltado, direto para uma cela.",
               vida: -12, vai: "prisao", marca: "procurado", p: { prisao: 3 }, cara: "triste" } },

    { t: "Entrar na van dos jogadores",
      r: "A van leva o time ao aeroporto, e o Irving embarca junto sem ninguém perguntar nada. O jogo fora de casa é bem fora.",
      vai: ["aviao", "massachusetts"], p: { "onde-estou": 1, amnesia: 1 } },

    { t: "Apitar o jogo com o apito",
      precisa: "apito",
      r: "O Irving marca catorze pênaltis seguidos. A torcida sai do estádio revoltada e faz um protesto na rua. Ele vai junto, por curiosidade.",
      vai: "protesto", p: { "rei-misto": 1, "dia-errado": 2 }, cara: "determinado" },

    { t: "Fazer amizade com a torcida rival",
      r: "A torcida visitante veio do Peru. Eles ensinam três músicas, dão um abraço coletivo e levam o Irving junto no ônibus.",
      vai: "excursao-peruanos", marca: "amigo-peruanos", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Puxar a torcida com a caixa de som", precisa: "caixa-de-som",
      r: "O Irving liga a caixa de som no meio do gramado. Sessenta mil torcedores cantam e pulam no ritmo dele. O juiz esquece o jogo e pede autógrafo.",
      vai: "fica", p: { famoso: 2, "rei-misto": 2 }, cara: "feliz" },
  ],
};

CENAS["quermesse"] = {
  chegadas: [
    "Bandeirinhas coloridas, cheiro de quentão e sanfona tocando. O Irving está numa quermesse, e alguém já grita \"Olha a cobra!\" na quadrilha.",
    "Eis a quermesse, festa de reis caipiras. Fogueira acesa, pescaria, correio elegante e um pau de sebo desafiando os bravos. O estômago do Irving presta atenção.",
  ],
  opcoes: [
    { t: "Dançar a quadrilha",
      r: "\"Caminho da roça!\" A quadrilha inteira sai dançando da festa e só para no meio de um canavial. Os pares se olham, perdidos.",
      vai: "canavial", p: { filosofico: 1, "onde-estou": 1 }, cara: "confuso" },

    { t: "Ser o noivo do casamento caipira",
      r: "O Irving pega o bouquet de chita e diz \"sim\". A brincadeira sai do controle, e de repente ele está num casamento de verdade.",
      vai: "casamento", ganha: "bouquet", marca: "padrinho", p: { filosofico: 2 }, cara: "confuso" },

    { t: "Tentar a sorte na pescaria",
      r: "O Irving fisga o prêmio maior: uma máquina de lavar. O dono da barraca pisca e sussurra: \"Não é de lavar\".",
      vai: "fica", ganha: "maquina-do-tempo", p: { "alem-tempo": 1, "antes-tempo": 2 }, cara: "confuso" },

    { t: "Mandar um correio elegante",
      r: "O bilhete chega às mãos de uma dama misteriosa. Violinos surgem do nada. Ela desmaia de emoção. Isso é uma novela mexicana.",
      vai: "novela-mexicana", p: { matrix: 1, filosofico: 1 }, cara: "assustado" },

    { t: "Tomar quentão perto da fogueira",
      r: "O quentão esquenta, a fogueira embala, o sanfoneiro toca devagar. O Irving guarda os fósforos da fogueira e acorda em casa, sem saber como.",
      ganha: "fosforos", vai: ["casa-irving", "cama-irving"], p: { sono: 2, amnesia: 1 }, cara: "cansado" },

    { t: "Subir no pau de sebo",
      risco: 13,
      r: "Glória! No topo, o Irving ergue o prêmio: um sanduíche de mortadela. A multidão o aclama rei e o leva ao ringue da festa pra defender a coroa.",
      vai: "luta-boxe", marca: "campeao", p: { "rei-misto": 3 }, cara: "feliz",
      falha: { r: "O sebo vence. O herói escorrega, gira e cai de cabeça na barraca de pamonha. Acorda num corredor de hospital.",
               vida: -15, vai: "hospital", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Visitar a cadeia da quermesse",
      r: "O \"delegado\" da brincadeira leva o papel a sério demais. A cela de bambu vira uma cela de concreto.",
      vai: "prisao", p: { prisao: 3 }, cara: "triste" },

    { t: "Jogar no bingo",
      r: "Falta só o 47. O Irving espera uma hora. Sai o 48, o 49 e, como prêmio de consolação, uma senha de banco. Ele vai pra fila.",
      vai: "fila-banco", p: { "hora-errada": 2, "dia-errado": 1 }, cara: "triste" },

    { t: "Seguir o cheiro de bolo de fubá",
      r: "O cheiro leva até o forno comunitário da festa. É gigantesco. O Irving entra pra ver de perto, e a porta se fecha.",
      vai: "forno-gigante", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Comprar pamonha com os 100 reais",
      precisa: "100-reais",
      r: "O Irving compra todas as pamonhas. Um cachorro caramelo o segue, faminto e determinado, até a feira da cidade.",
      vai: "feira", perde: "100-reais", p: { "quase-feliz": 3 } },

    { t: "Arrematar uma prenda no leilão",
      r: "O Irving coça a orelha e arremata uma prenda. A prenda é um boi. O leiloeiro, empolgado, o leva a um leilão de gado de verdade.",
      vai: "leilao-gado", p: { "rei-misto": 1, "onde-estou": 1 }, cara: "confuso" },

    { t: "Cantar forró no palco",
      risco: 10,
      r: "A sanfona chora, o Irving canta, a festa inteira dança. Uma equipe de TV grava tudo e o leva ao programa de domingo.",
      vai: "programa-auditorio", marca: "famoso-tv", p: { famoso: 3 }, cara: "feliz",
      falha: { r: "O Irving desafina tão alto que a sanfona para. Fugindo da vaia, ele tropeça e cai dentro do primeiro trem que passa.",
               vida: -12, vai: "trem", p: { "hora-errada": 1 }, cara: "triste" } },

    { t: "Perguntar de que santo é a festa",
      r: "'Santo Honorato, padroeiro dos padeiros!', diz o festeiro. Hoje é o dia dele, e toda padaria da cidade fechou pra vir à festa. O Irving olha em volta: são todos padeiros.",
      vai: "fica", p: { "dia-errado": 3 }, cara: "assustado" },

    { t: "Ganhar uma pinga na pescaria",
      r: "O Irving lança a vara e fisga um peixinho de papel. O prêmio: uma garrafinha de pinga com laço de fita. A quermesse inteira aplaude o pescador.",
      vai: "fica", ganha: "pinga", p: { "dia-errado": 1, filosofico: 1 }, cara: "feliz" },

    { t: "Ganhar a caixa de som no bingo",
      r: "\"Bingo!\", grita o Irving, sem saber como. O prêmio é uma caixa de som que toca forró sozinha. Ele a coloca no ombro como um trovador moderno.",
      vai: "fica", ganha: "caixa-de-som", p: { famoso: 2 }, cara: "feliz" },
  ],
};

CENAS["luta-boxe"] = {
  chegadas: [
    "Um ringue. Luvas nas mãos. O gongo acaba de soar. O Irving está no meio de uma luta de boxe, e o adversário tem o tamanho de uma geladeira duplex.",
    "Eis o ringue sagrado, arena dos bravos. Refletores, gritos, cheiro de suor. No canto oposto, o campeão estala o pescoço. O juiz olha para o Irving.",
  ],
  opcoes: [
    { t: "Nocautear o campeão",
      risco: 14,
      r: "Um jab heroico! O campeão desaba como uma torre. O cinturão brilha na cintura do Irving e a multidão entoa seu nome.",
      vai: "fica", marca: "campeao", p: { "rei-misto": 3 }, cara: "determinado",
      falha: { r: "O campeão responde com um gancho de desenho animado. O Irving vê estrelas, passarinhos e acorda num hospital.",
               vida: -20, vai: "hospital", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Jogar a toalha",
      r: "O Irving joga a toalha. Depois deita nela, se enrola e dorme. Os organizadores o guardam numa caixa, junto das luvas velhas.",
      vai: "caixa-papelao", p: { sono: 2 }, cara: "cansado" },

    { t: "Fazer amizade com o adversário",
      r: "Em vez de socos, um abraço. O gigante chora, conta da infância e leva o Irving pra conhecer a aula de hidroginástica da avó.",
      vai: "hidroginastica", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Roubar o microfone do locutor",
      r: "\"Neste canto, o invencível Irving!\" A plateia pede música. Um empresário o leva para um karaokê antes do segundo round.",
      vai: "karaoke", p: { famoso: 2 }, cara: "feliz" },

    { t: "Pedir um misto no corner",
      r: "O treinador entende \"mais forte\", joga um balde de água no Irving e o manda gravar o comercial de café da manhã do patrocinador.",
      vai: "comercial-margarina", p: { feliz: 2 }, cara: "confuso" },

    { t: "Tocar o gongo sem parar",
      r: "O Irving toca o gongo. O round recomeça igualzinho. Toca de novo. Mesmo round, mesmo soco, mesmo grito. Déjà vu.",
      vai: "fica", p: { matrix: 2 }, cara: "confuso" },

    { t: "Fugir por baixo das cordas",
      r: "Rolamento tático! O Irving escapa pela plateia, sai pela porta dos fundos e dá num beco escuro e suspeito.",
      vai: "beco-perigoso", p: { prisao: 2, "onde-estou": 1 }, cara: "assustado" },

    { t: "Flutuar como borboleta no ringue",
      risco: 11,
      r: "Flutua como borboleta! Tão leve que um bando de pássaros o confunde com um colega e o leva embora pelo teto.",
      vai: "carregado-passaros", p: { milagre: 3, feliz: 1 }, cara: "feliz",
      falha: { r: "Pica como abelha, mas o próprio pé. O Irving rodopia pra fora do ringue e só para dentro de uma sorveteria.",
               vida: -12, vai: "sorveteria", p: { banana: 2 }, cara: "confuso" } },

    { t: "Apitar o fim da luta",
      precisa: "apito",
      r: "Com um apito firme, o Irving se declara juiz e depois vencedor. O público o carrega nos ombros até uma reunião da ONU.",
      vai: "reuniao-onu", marca: "campeao", p: { "rei-misto": 3 }, cara: "determinado" },

    { t: "Perguntar a padaria pro juiz",
      r: "O juiz conta até dez antes de responder. Depois conta de novo. Quarenta minutos depois: \"Pega o trem\".",
      vai: "trem", p: { feliz: 1, "hora-errada": 1 } },

    { t: "Vestir o roupão de cetim",
      r: "Com o roupão brilhante, o Irving parece um galã. Uma diretora de novela o leva para gravar o capítulo final.",
      vai: "novela-mexicana", p: { matrix: 1, famoso: 1 }, cara: "feliz" },

    { t: "Tirar a pedra que calça o ringue",
      r: "O Irving guarda a pedra de lembrança. O ringue tomba, e ele escorrega pela lona até o lombo de um elefante do circo ao lado.",
      vai: "elefante", ganha: "pedra", p: { banana: 2, "onde-estou": 1 }, cara: "assustado" },

    { t: "Deitar na lona e ouvir a contagem",
      cenaMin: 4,
      r: "Um... dois... três... No sete, o Irving já ronca. O juiz chega ao dez, e o herói nem ouve o gongo final.",
      fim: "sono", cara: "cansado" },

    { t: "Ganhar um nunchaku do treinador",
      r: "O treinador tira da mochila um nunchaku antigo: \"Não vale no boxe, mas vale na vida.\" O Irving o recebe como herdeiro de uma tradição milenar.",
      vai: "fica", ganha: "nunchaku", p: { "rei-misto": 1, filosofico: 1 }, cara: "determinado" },

    { t: "Girar o nunchaku no ringue", precisa: "nunchaku",
      risco: 9,
      r: "O Irving gira o nunchaku com gritos de filme antigo. A geladeira duplex arregala os olhos, joga a toalha e desce do ringue. Vitória por intimidação!",
      vai: "fica", marca: "campeao", p: { "rei-misto": 3 }, cara: "determinado",
      falha: { r: "O nunchaku dá uma volta a mais e quica no próprio boné do Irving. Ele vê estrelinhas e acorda sendo carregado pra fora do ringue.",
               vida: -15, vai: ["hospital", "lugar-escuro"], p: { amnesia: 2 }, cara: "confuso" } },
  ],
};
