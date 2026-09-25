// =====================================================================
//  HISTÓRIA: lugares 26 a 33
//  (Conferência de dermatologistas, Cantina da escola, Encapuzado no carro,
//   Carregado por pássaros, Elefante, Trem, Bairro desconhecido, Pedágio)
//  Formato de cada opção: veja o guia em ferramentas/GUIA-HISTORIA.md
// =====================================================================

CENAS["conferencia-dermatologia"] = {
  chegadas: [
    "Um auditório lotado de jalecos brancos. No telão, a foto ampliada de um poro. Duzentos dermatologistas aplaudem de pé. Alguém prende um crachá no peito do Irving: PALESTRANTE CONVIDADO.",
    "Eis o Congresso Nacional de Dermatologia, templo sagrado da pele bem cuidada. Há protetor solar em cada cadeira e um coffee break que cheira a pão de queijo.",
  ],
  opcoes: [
    { t: "Subir ao palco e palestrar sobre poros",
      risco: 11,
      r: "O Irving improvisa: \"O poro é a janela da alma.\" Ovação! Carregado nos ombros, ele é levado para discursar numa assembleia internacional.",
      vai: "reuniao-onu", p: { "rei-misto": 3 }, cara: "determinado",
      falha: { r: "Ele confunde poro com porão. Vaias. Na fuga, bate a testa no microfone e sai pelos fundos, num beco escuro e suspeito.",
               vida: -15, vai: "beco-perigoso", p: { prisao: 2, amnesia: 1 }, cara: "assustado" } },

    { t: "Atacar o coffee break",
      r: "Entre pães de queijo e sucos verdes, o Irving sente o chamado do misto. Segue o garçom até a cozinha, que dá direto numa loja de fornos e chapas.",
      vai: "loja-eletro-padaria", p: { feliz: 2, "quase-feliz": 1 } },

    { t: "Pegar amostra grátis no estande",
      r: "O estande distribui amostras. O Irving guarda um hidratante para as mãos e sente o dedão agradecer. Hidratação: nível lendário.",
      vai: "fica", ganha: "hidratante", p: { "dia-errado": 2 }, cara: "feliz" },

    { t: "Ler a data no banner do congresso",
      r: "'Congresso anual, sempre no Dia do Padeiro.' O banner despenca, preso só com fita crepe. O Irving guarda o rolo e sai correndo, direto pro meio de um protesto.",
      ganha: "fita-crepe", vai: "protesto", p: { "dia-errado": 3 }, cara: "assustado" },

    { t: "Pedir pra examinarem uma pinta",
      r: "Doze especialistas cercam a pinta com lupas. Debate acalorado. Diagnóstico: é uma migalha de pão. Mesmo assim, mandam o Irving pro hospital.",
      vai: "hospital", vida: -3, p: { amnesia: 2 }, cara: "confuso" },

    { t: "Passar protetor fator 100",
      r: "O Irving se besunta. Fica tão branco que um diretor o confunde com o fantasma da novela e o arrasta para o set de gravação.",
      vai: "novela-mexicana", p: { matrix: 2 }, cara: "confuso" },

    { t: "Cochilar na palestra de cutícula",
      r: "A voz monótona do palestrante é uma canção de ninar. O Irving cochila abraçado ao cortador de unha da demonstração e acorda na própria cama.",
      ganha: "cortador-unha", vai: "cama-irving", p: { sono: 3 }, cara: "cansado" },

    { t: "Dar autógrafos de palestrante",
      r: "Formam fila. O Irving assina jalecos, crachás e um tubo de pomada. A fama sobe à cabeça, e os fãs o levam para um karaokê.",
      vai: "karaoke", p: { famoso: 2, "dia-errado": 1 }, cara: "feliz" },

    { t: "Fazer amizade na fila do crachá",
      r: "A doutora Célia, do Paraná, adota o Irving como sobrinho. Ela o leva no passeio oficial do congresso: uma excursão de turistas peruanos.",
      vai: "excursao-peruanos", p: { filosofico: 2, "dia-errado": 1 }, cara: "feliz" },

    { t: "Comprar o kit VIP com 100 reais",
      precisa: "100-reais", perde: "100-reais",
      r: "O kit VIP inclui roupão, sabonete de lama e spa aquático. O Irving afunda na piscina aquecida, cercado de senhoras na hidroginástica.",
      vai: "hidroginastica", p: { sono: 1, filosofico: 1 } },

    { t: "Hidratar as mãos ao vivo no telão",
      precisa: "hidratante", perde: "hidratante",
      r: "O auditório chora de emoção. Um patrocinador contrata o Irving na hora e o embarca na turnê mundial da marca. Primeira parada: bem longe daqui.",
      vai: ["aviao", "massachusetts"], p: { famoso: 2, amnesia: 1 }, cara: "feliz" },

    { t: "Fugir pela saída de emergência",
      risco: 9,
      r: "O alarme toca, mas o herói já está longe. A porta dá no estacionamento, e lá está, sabe-se lá como, o carro do próprio Irving!",
      vai: "carro-irving", p: { feliz: 2 }, cara: "determinado",
      falha: { r: "A porta dá numa escada que desce, desce e desce. O Irving tropeça no último degrau e surge num bairro que nenhum mapa conhece.",
               vida: -12, vai: "bairro-desconhecido", p: { "onde-estou": 2 }, cara: "confuso" } },
  ],
};

CENAS["cantina-escola"] = {
  chegadas: [
    "O sinal do recreio ecoa como uma trombeta de guerra. Trezentas crianças correm para a cantina. No meio delas, alto como uma torre, está o Irving. A tia da cantina o encara.",
    "Eis a cantina da escola, reino da tia Neide e seus pães com manteiga. A fila do recreio dá duas voltas no pátio. Uma criança pergunta se o Irving é aluno novo.",
  ],
  opcoes: [
    { t: "Entrar na fila do recreio",
      r: "Trinta crianças na frente. Uma fura, depois outra. O sinal toca, a tia fecha a janela e o Irving sai derrotado, direto para outra fila: a do banco.",
      vai: "fila-banco", p: { "hora-errada": 2, "quase-feliz": 1 }, cara: "cansado" },

    { t: "Pedir um misto à tia da cantina",
      risco: 11,
      r: "A tia Neide olha no fundo da alma dele. \"Pra você, meu filho, tem.\" O Irving sai da escola com um misto embrulhado, como quem leva o Santo Graal.",
      vai: "rua-irving", ganha: "misto-quente", p: { feliz: 2 }, cara: "feliz",
      falha: { r: "\"Só pra aluno!\" Os inspetores escoltam o Irving até o portão dos fundos. Ele tropeça em três mochilas de rodinha e rola até um canavial.",
               vida: -12, vai: "canavial", p: { "onde-estou": 1, "hora-errada": 1, "quase-feliz": 1 }, cara: "triste" } },

    { t: "Trocar figurinhas com as crianças",
      r: "Negociação épica. O Irving troca uma figurinha achada no bolso por um apito e ganha a amizade eterna da turma do quinto ano.",
      vai: "fica", ganha: "apito", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Jogar queimada no pátio",
      risco: 9,
      r: "Esquiva lendária! O Irving vence a queimada sozinho e é erguido pela turma. Um olheiro, impressionado, o leva direto para um estádio.",
      vai: "campo-futebol", marca: "campeao", p: { "rei-misto": 2, filosofico: 1 }, cara: "determinado",
      falha: { r: "Bolada certeira na testa. O mundo gira. Quando para, o Irving está num corredor de hospital, sem lembrar nem da merenda.",
               vida: -15, vai: "hospital", p: { amnesia: 2 }, cara: "confuso" } },

    { t: "Provar a merenda do dia",
      r: "Arroz, feijão e, de sobremesa, banana. Uma menininha, generosa, deixa a dela na bandeja do Irving. Recusar partiria o coração dela.",
      vai: "fica", ganha: "banana", p: { banana: 3 }, cara: "confuso" },

    { t: "Se esconder no saco de bolas",
      r: "Entre bolas murchas e cones, o escuro é aconchegante. O Irving fecha os olhos por um minuto. Quando abre, está dentro de uma caixa de papelão.",
      vai: "caixa-papelao", p: { sono: 2 }, cara: "cansado" },

    { t: "Cantar junto com o coral",
      r: "Trinta vozinhas cantam o hino da escola. O Irving se emociona e solta a voz. Quando percebe, está num karaokê, cantando para desconhecidos.",
      vai: "karaoke", p: { famoso: 2 }, cara: "feliz" },

    { t: "Ajudar a tia a servir o suco",
      r: "De touca, o Irving serve suco de caju com a precisão de um alquimista. A tia Neide, comovida, o leva para o casamento da sobrinha, que é hoje.",
      vai: "casamento", p: { filosofico: 3 }, cara: "feliz" },

    { t: "Entrar no ônibus da excursão",
      r: "O ônibus escolar parte para o passeio do dia. O Irving senta no fundo, com a turma. O destino, anunciado pela professora: uma fábrica de chocolate!",
      vai: "fabrica-chocolate", p: { feliz: 2 }, cara: "feliz" },

    { t: "Ir parar na sala do diretor",
      r: "O diretor acha que o Irving é o pai do Enzo. O telefone toca: pedem um representante da escola na ONU. O diretor aponta pro Irving.",
      vai: "reuniao-onu", p: { "rei-misto": 1, "dia-errado": 2 }, cara: "confuso" },

    { t: "Pagar coxinha pra turma toda",
      precisa: "100-reais", perde: "100-reais",
      r: "Cem reais viram trinta coxinhas. A turma grita o nome do Irving e o carrega até o zoológico em frente, onde o colocam em cima de um elefante.",
      vai: "elefante", p: { filosofico: 2, banana: 1 }, cara: "feliz" },

    { t: "Apitar o fim do recreio",
      precisa: "apito",
      r: "PRIIII! Trezentas crianças obedecem na hora. O Irving sente o gosto do poder. Em marcha, a escola inteira o segue até um protesto na avenida.",
      vai: "protesto", p: { "rei-misto": 2, "dia-errado": 1 }, cara: "determinado" },

    { t: "Entrar na aula de História",
      r: "A professora fala da Idade Média com tanta paixão que o Irving fecha os olhos pra imaginar. Quando abre, há cavaleiros, lama e um rei desconfiado.",
      vai: "inglaterra-medieval", p: { "antes-tempo": 3 }, cara: "confuso" },
  ],
};

CENAS["encapuzado-carro"] = {
  chegadas: [
    "Escuridão total. Um saco de pano cobre a cabeça do Irving. Ele está no banco de trás de um carro que faz curvas demais. No rádio, toca um pagode romântico.",
    "Encapuzado, no banco de trás de um carro desconhecido. Na frente, duas vozes discutem: \"Era pra pegar o cara de boné?\" \"Todo mundo usa boné, Wanderley!\"",
  ],
  opcoes: [
    { t: "Perguntar pra onde estão indo",
      r: "\"Pro esconderijo\", diz uma voz. \"Qual esconderijo?\", pergunta a outra. Eles discutem, erram a saída e param numa praça de pedágio.",
      vai: "pedagio", p: { "hora-errada": 2, prisao: 1 }, cara: "confuso" },

    { t: "Dizer que só queria um misto",
      r: "Silêncio no carro. \"Pô, eu também\", confessa o motorista. Comovidos, eles mudam o GPS para uma loja de equipamentos de padaria.",
      vai: "loja-eletro-padaria", p: { feliz: 2, filosofico: 1 } },

    { t: "Fazer amizade com os sequestradores",
      r: "Em dez minutos, o Irving já sabe o nome das mães deles. Wanderley chora. Eles o convidam para o casamento da irmã, que é hoje.",
      vai: "casamento", p: { filosofico: 3 }, cara: "feliz" },

    { t: "Pular do carro em movimento",
      risco: 14,
      r: "Rolamento cinematográfico! O Irving cai de pé, tira o capuz e vê a rua de casa. A padaria está logo ali.",
      vai: "rua-irving", p: { feliz: 3 }, cara: "determinado",
      falha: { r: "O Irving rola pela ribanceira, quica numa placa e para no meio de um canavial. O capuz continua na cabeça.",
               vida: -20, vai: "canavial", p: { "onde-estou": 2 }, cara: "assustado" } },

    { t: "Tirar um cochilo no escuro",
      r: "Escuro, quentinho, balanço de estrada: o berço perfeito. O Irving ronca tão alto que os sequestradores, assustados, o devolvem direto em casa.",
      vai: ["casa-irving", "cama-irving"], p: { sono: 3 }, cara: "cansado" },

    { t: "Contar as curvas pra decorar o caminho",
      r: "Esquerda, direita, rotatória. O Irving decora tudo e rabisca o mapa num guardanapo. Quando o capuz sai, está num bairro que nenhuma curva explica.",
      vai: "bairro-desconhecido", marca: "mapa", p: { "onde-estou": 2 }, cara: "determinado" },

    { t: "Espiar pelo furinho do capuz",
      r: "Pelo furinho, o Irving vê: o motorista usa uma peruca linda. Na primeira lombada, a peruca voa direto para o colo dele.",
      vai: "fica", ganha: "peruca", p: { prisao: 2, matrix: 1 }, cara: "confuso" },

    { t: "Cantar junto o pagode do rádio",
      r: "O Irving puxa o refrão. Os sequestradores fazem segunda voz. Chegam cantando num karaokê, onde já tem um microfone esperando por ele.",
      vai: "karaoke", p: { famoso: 2 }, cara: "feliz" },

    { t: "Gritar por socorro",
      risco: 11,
      r: "Uma viatura encosta. Os sequestradores juram que era trote de aniversário. O policial dá ao Irving um apito, \"pra próxima\", e o deixa em Osasco.",
      vai: "osasco", ganha: "apito", p: { feliz: 1, filosofico: 1 },
      falha: { r: "A polícia ouve, sim, mas acha que o suspeito é o Irving. Ele troca o banco de trás de um carro pelo banco de uma cela.",
               vida: -15, vai: "prisao", marca: "procurado", p: { prisao: 3 }, cara: "assustado" } },

    { t: "Oferecer 100 reais pelo resgate",
      precisa: "100-reais", perde: "100-reais",
      r: "\"Fechado!\", dizem, aliviados. É o primeiro resgate que dá certo na carreira deles. Deixam o Irving numa feira, com troco em pastel.",
      vai: "feira", p: { "quase-feliz": 2 }, cara: "feliz" },

    { t: "Revelar que é famoso da TV",
      precisaMarca: "famoso-tv",
      r: "\"É o cara da TV!\" O carro vira fã-clube. Eles tiram o capuz, pedem selfie e levam o Irving direto ao estúdio de um programa de auditório.",
      vai: "programa-auditorio", p: { famoso: 2, matrix: 1 }, cara: "feliz" },

    { t: "Ficar quietinho e esperar",
      r: "O carro para. Vozes. Barulho de macaco hidráulico e cheiro de graxa. Quando o capuz sai, o Irving está numa oficina, e os sequestradores sumiram.",
      vai: "oficina-mecanica", p: { matrix: 1, "hora-errada": 1, prisao: 1 }, cara: "neutro" },

    { t: "Confessar crimes que não cometeu",
      cenaMin: 5,
      r: "Confuso, o Irving confessa tudo, até ter roubado uma merenda em 2001. Os sequestradores, chocados, o entregam na delegacia mais próxima.",
      fim: "prisao", cara: "triste" },
  ],
};

CENAS["carregado-passaros"] = {
  chegadas: [
    "Dezenas de pássaros seguram o Irving pela jaqueta e pelo boné. Lá embaixo, a cidade parece uma maquete. O vento assobia uma canção épica. Nenhum pássaro explica nada.",
    "Carregado por pombos, sabiás e um papagaio muito falante, o Irving voa sobre os telhados. Lá longe, uma chaminé solta fumaça com cheiro de pão.",
  ],
  opcoes: [
    { t: "Apontar pra padaria lá embaixo",
      r: "Os pássaros entendem! Mergulham rumo à fumaça de pão, erram por dois quarteirões e largam o Irving dentro de um forno de padaria gigante.",
      vai: "forno-gigante", p: { feliz: 2, milagre: 1 }, cara: "determinado" },

    { t: "Dar alpiste ao bando",
      precisa: "alpiste", perde: "alpiste",
      r: "O bando pia em êxtase. O líder, um pombo solene, faz uma reverência no ar. Algo se decide nos céus. O Irving sente que foi abençoado.",
      vai: "fica", p: { milagre: 4 }, cara: "feliz" },

    { t: "Rezar pra ninguém soltar",
      r: "O Irving reza com fervor. Os pássaros, tocados pela fé, o pousam com delicadeza aos pés do Cristo Redentor.",
      vai: "cristo-redentor", p: { milagre: 3 } },

    { t: "Pedir misto ao papagaio",
      r: "\"MISTO! MISTO!\", repete o papagaio, tão alto que o bando se assusta e solta o Irving em cima de uma barraca de melancia na feira.",
      vai: "feira", vida: -5, p: { "quase-feliz": 2, banana: 1 }, cara: "assustado" },

    { t: "Desenhar o mapa da cidade lá de cima",
      r: "Lá de cima tudo faz sentido. O Irving rabisca o mapa num guardanapo, mas o vento o leva, e o bando vai atrás dele até um bairro desconhecido.",
      vai: "bairro-desconhecido", marca: "mapa", p: { "onde-estou": 2, feliz: 1 }, cara: "confuso" },

    { t: "Cochilar embalado pelo vento",
      r: "O balanço é tão gostoso que o Irving adormece. Os pássaros, gentis, o acomodam dentro de uma caixa de papelão numa calçada.",
      vai: "caixa-papelao", p: { sono: 2, milagre: 1 }, cara: "cansado" },

    { t: "Pedir pra subir mais alto",
      risco: 14,
      r: "Mais alto! As nuvens ficam para trás, o céu escurece e, com um último bater de asas, o Irving flutua até a Estação Espacial.",
      vai: "estacao-espacial", p: { "alem-tempo": 3 }, cara: "determinado",
      falha: { r: "O ar fica fino, o mundo gira e as ideias somem. O Irving acorda num avião, sem lembrar como embarcou.",
               vida: -15, vai: "aviao", p: { amnesia: 2 }, cara: "confuso" } },

    { t: "Se soltar e confiar no destino",
      risco: 11,
      r: "Queda livre heroica! No último segundo, mil pássaros o apanham e o pousam suavemente no braço do Cristo Redentor. Que fé!",
      vai: "cristo-redentor", p: { milagre: 2, feliz: 1 }, cara: "feliz",
      falha: { r: "O destino estava distraído. O Irving cai em cheio no lombo de um elefante, que não gosta nada da surpresa.",
               vida: -18, vai: "elefante", p: { banana: 2 }, cara: "assustado" } },

    { t: "Ensinar o bando a voar em V",
      r: "Sob o comando do Irving, o bando forma um V perfeito. As aves o proclamam seu rei e o levam para discursar numa assembleia da ONU.",
      vai: "reuniao-onu", p: { "rei-misto": 2, filosofico: 1 }, cara: "determinado" },

    { t: "Aceitar o chapéu do pombo",
      r: "Um pombo tira o próprio chapéu (sim, ele usava um) e coloca na cabeça do Irving. É um chapéu maneiro. A amizade está selada.",
      vai: "fica", ganha: "chapeu", p: { filosofico: 1, milagre: 1 }, cara: "feliz" },

    { t: "Acenar pro trem lá embaixo",
      r: "O Irving acena para o trem que passa. Os pássaros acham que ele quer descer e o largam no teto do último vagão.",
      vai: "trem", vida: -5, p: { "hora-errada": 2 } },

    { t: "Cantar junto com os sabiás",
      r: "O coral de sabiás acompanha a voz do Irving. Um produtor, na janela de um prédio, grita \"contratado!\". O bando o deixa na porta de um karaokê.",
      vai: "karaoke", p: { famoso: 2, milagre: 1 }, cara: "feliz" },

    { t: "Desistir e esperar um milagre",
      cenaMin: 5,
      r: "O Irving fecha os olhos e desiste de tudo. Então dois pássaros se destacam do bando, carregando no bico algo quentinho e dourado.",
      fim: "milagre", cara: "feliz" },
  ],
};

CENAS["elefante"] = {
  chegadas: [
    "Balançando como num navio, o Irving está montado num elefante. O gigante cinzento anda devagar pela avenida, e ninguém parece estranhar. A tromba fareja o ar atrás de bananas.",
    "Eis o Irving, cavaleiro de um elefante majestoso. O trânsito para em respeito. Na tromba, o elefante ergue um cacho de bananas como quem ergue um troféu.",
  ],
  opcoes: [
    { t: "Guiar o elefante até a padaria",
      r: "Com gestos de comandante, o Irving aponta o caminho. O elefante obedece, mas entende \"padaria\" como \"fábrica de chocolate\". Quase isso!",
      vai: "fabrica-chocolate", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Aceitar a banana que ele oferece",
      r: "O elefante estende a tromba, orgulhoso. Recusar seria uma afronta diplomática. O Irving guarda a banana com a cara mais triste do reino.",
      vai: "fica", ganha: "banana", p: { banana: 3 }, cara: "triste" },

    { t: "Seguir o cheiro de sorvete",
      r: "O elefante fareja sorvete de banana e dispara. O Irving se agarra às orelhas dele até pararem na porta de uma sorveteria.",
      vai: "sorveteria", p: { banana: 3 }, cara: "assustado" },

    { t: "Desfilar como imperador",
      r: "O povo aplaude. O Irving acena como um imperador romano. O desfile segue, segue e, sem que ninguém saiba como, termina em Xique-Xique, na Bahia.",
      vai: "xique-xique", p: { "rei-misto": 1, banana: 2 }, cara: "feliz" },

    { t: "Mandar o elefante correr",
      risco: 11,
      r: "O elefante galopa como um trovão cinza. Carros abrem caminho. Em minutos, estão na garagem do Irving, e o carro dele espera de portas abertas!",
      vai: "carro-irving", p: { feliz: 3 }, cara: "determinado",
      falha: { r: "O elefante corre, sim, mas pro lado errado. Entra numa agência bancária e se acomoda na fila. O Irving desce de cara no chão.",
               vida: -15, vai: "fila-banco", p: { "hora-errada": 2 }, cara: "bravo" } },

    { t: "Cochilar no lombo do elefante",
      r: "O lombo é largo, quente e balança no ritmo certo. O Irving dorme como um rei. Acorda em casa, sem saber se foi sonho.",
      vai: ["casa-irving", "cama-irving"], p: { sono: 2 }, cara: "cansado" },

    { t: "Passar com ele pela rodovia",
      r: "O elefante pega a estrada. Na cabine do pedágio, o atendente consulta a tabela: \"Elefante é categoria 9, eixo especial.\" A fila atrás deles cresce.",
      vai: "pedagio", p: { "hora-errada": 2 }, cara: "confuso" },

    { t: "Dar carona pros turistas",
      r: "Turistas peruanos pedem para subir. O elefante vira ônibus de excursão, e o Irving, guia oficial. No fim do passeio, ninguém quer se despedir.",
      vai: "excursao-peruanos", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Tirar uma selfie épica com a câmera",
      r: "A foto viraliza em segundos. Uma emissora manda um helicóptero buscar o Irving para um programa de auditório ao vivo.",
      vai: "programa-auditorio", p: { famoso: 2 }, cara: "feliz" },

    { t: "Arremessar a banana longe",
      precisa: "banana", perde: "banana",
      r: "O elefante dispara atrás da banana e dá um coice de alegria. O Irving é lançado aos céus, onde um bando de pássaros o apanha no ar.",
      vai: "carregado-passaros", p: { milagre: 2, banana: 1 }, cara: "assustado" },

    { t: "Pular num caminhão que passa",
      risco: 14,
      r: "Salto de cinema! O Irving cai na carroceria de um caminhão de farinha de trigo, que vai direto para uma loja de equipamentos de padaria.",
      vai: "loja-eletro-padaria", p: { feliz: 3 }, cara: "feliz",
      falha: { r: "O caminhão era de cana. O Irving afunda na carga e só sai horas depois, no meio de um canavial sem fim.",
               vida: -18, vai: "canavial", p: { "onde-estou": 2 }, cara: "confuso" } },

    { t: "Desabafar com o elefante",
      r: "O elefante escuta tudo em silêncio, com olhos sábios. No fim, faz um cafuné no Irving com a tromba. É o melhor amigo que ele já teve.",
      vai: "fica", p: { filosofico: 2 }, cara: "feliz" },
  ],
};

CENAS["trem"] = {
  chegadas: [
    "O Irving está num vagão de trem lotado, sacolejando no ritmo dos trilhos. Um vendedor anuncia paçoca. O painel diz \"próxima estação\", mas nunca diz qual.",
    "Eis o trem, serpente de aço que corta a cidade. O relógio do vagão está três horas atrasado, ou adiantado, ninguém sabe. Um senhor dorme no ombro do Irving.",
  ],
  opcoes: [
    { t: "Perguntar em qual estação descer",
      r: "Um senhor jura que é na próxima. Outro jura que é na anterior. O Irving desce no meio-termo, que é um bairro que ninguém conhece.",
      vai: "bairro-desconhecido", p: { "onde-estou": 2 }, cara: "confuso" },

    { t: "Comprar toda a paçoca do vendedor",
      precisa: "100-reais", perde: "100-reais",
      r: "Cem reais em paçoca! O vendedor, emocionado, dá de brinde um chapéu maneiro e desce abraçado com o Irving numa quermesse.",
      vai: "quermesse", ganha: "chapeu", p: { "quase-feliz": 2, filosofico: 1 }, cara: "feliz" },

    { t: "Deixar o senhor dormir no ombro",
      r: "O senhor dorme três estações. Ao acordar, agradece e dá ao Irving um saquinho de alpiste. \"Pros pombos\", diz, com olhar misterioso.",
      vai: "fica", ganha: "alpiste", p: { milagre: 2, filosofico: 1 }, cara: "neutro" },

    { t: "Descer na estação Padaria Central",
      r: "O Irving salta do vagão com fé. A estação é nova, cheira a pão e fica bem na porta de uma loja de fornos e chapas.",
      vai: "loja-eletro-padaria", p: { feliz: 2, "quase-feliz": 1 }, cara: "feliz" },

    { t: "Surfar no teto do trem",
      risco: 14,
      r: "Em pé no teto, jaqueta ao vento, o Irving parece um herói de cinema. Um bando de pássaros, impressionado, o ergue aos céus.",
      vai: "carregado-passaros", p: { milagre: 3 }, cara: "determinado",
      falha: { r: "Um túnel. O Irving se abaixa tarde demais. Acorda num corredor de hospital, perguntando a todos em que ano estamos.",
               vida: -20, vai: "hospital", p: { amnesia: 3 }, cara: "confuso" } },

    { t: "Acertar o relógio do vagão",
      r: "O Irving sobe no banco e gira os ponteiros para trás. Um clarão azul! O trem ressurge numa estrada de terra da Inglaterra medieval.",
      vai: "inglaterra-medieval", p: { "antes-tempo": 3 }, cara: "assustado" },

    { t: "Puxar papo com os turistas",
      r: "Um grupo de turistas peruanos adota o Irving. Trocam lanches, fotos e abraços. Quando descem, ele desce junto, já com camiseta da excursão.",
      vai: "excursao-peruanos", marca: "amigo-peruanos", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Puxar a alavanca de emergência",
      r: "O trem para. Os seguranças também param, em volta do Irving. Explicar que queria um misto não ajuda em nada.",
      vai: "prisao", vida: -5, marca: "procurado", p: { prisao: 3 }, cara: "assustado" },

    { t: "Seguir o carrinho de lanches",
      r: "O carrinho vai de vagão em vagão, e o Irving atrás. A porta do último vagão, por algum motivo, dá direto numa praça de pedágio.",
      vai: "pedagio", p: { "hora-errada": 1, "quase-feliz": 2 }, cara: "confuso" },

    { t: "Cantar pra animar o vagão",
      r: "O Irving solta a voz entre as estações. O vagão inteiro canta junto. Um produtor de TV o leva direto para um programa de auditório.",
      vai: "programa-auditorio", p: { famoso: 2 }, cara: "feliz" },

    { t: "Cronometrar o atraso",
      r: "Doze minutos. Vinte. Quarenta. O Irving desiste e chama um Uber, que também atrasa, mas chega. É uma vitória, de certa forma.",
      vai: "uber", p: { "hora-errada": 3 }, cara: "cansado" },

    { t: "Pular pro trem expresso ao lado",
      risco: 11,
      r: "Salto entre trens, digno de filme de ação! O expresso voa pelos trilhos e deixa o Irving na rua de casa em dois minutos.",
      vai: "rua-irving", p: { feliz: 3 }, cara: "determinado",
      falha: { r: "O outro trem era de carga. O Irving cai dentro de uma caixa enorme, e a tampa se fecha sobre ele.",
               vida: -15, vai: "caixa-papelao", p: { sono: 2 }, cara: "assustado" } },
  ],
};

CENAS["bairro-desconhecido"] = {
  chegadas: [
    "Ruas de paralelepípedo, casas antigas, placas com nomes que não existem. O Irving está num bairro que nenhum aplicativo reconhece. O GPS mostra apenas um ponto de interrogação.",
    "Um bairro antigo e silencioso. Uma senhora rega plantas de plástico. O relógio da praça marca uma hora que não existe. O Irving nunca esteve aqui, e o bairro parece saber disso.",
  ],
  opcoes: [
    { t: "Pedir informação à senhora",
      r: "\"Padaria? Fica depois da ponte, antes da ponte.\" O Irving agradece e segue a instrução como pode. A rua termina num rio, onde uma balsa o espera.",
      vai: "balsa", p: { "onde-estou": 1, "hora-errada": 1 }, cara: "confuso" },

    { t: "Seguir o cheiro de pão",
      r: "Um fio de aroma, como o fio de Ariadne. O Irving dobra seis esquinas e encontra uma porta de ferro enorme. É um forno gigante!",
      vai: "forno-gigante", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Consultar o mapa",
      precisaMarca: "mapa",
      r: "O mapa diz: \"vire à direita no elefante\". O Irving vira. Por incrível que pareça, havia um elefante, e agora o Irving está em cima dele.",
      vai: "elefante", p: { "onde-estou": 1, banana: 2 }, cara: "confuso" },

    { t: "Cortar pelo terreno baldio",
      risco: 11,
      r: "Atalho perfeito! O mato abre caminho como o mar para um profeta, e o Irving sai, triunfante, bem ao lado do próprio carro, estacionado ali sabe-se lá por quem.",
      vai: "carro-irving", p: { feliz: 3 }, cara: "feliz",
      falha: { r: "O atalho não termina. O mato vira cana, a cana vira mais cana. Arranhado e sem rumo, o Irving está num canavial.",
               vida: -12, vai: "canavial", p: { "onde-estou": 3 }, cara: "assustado" } },

    { t: "Bater na porta da casa azul",
      r: "A porta se abre sozinha. Dentro, escuridão total. O Irving dá um passo, e a porta se fecha atrás dele com um rangido de filme de terror.",
      vai: "lugar-escuro", p: { matrix: 2 }, cara: "assustado" },

    { t: "Entrar no antiquário da esquina",
      r: "Entre relógios cuco e armaduras, uma máquina de lavar com botões estranhos. \"Viaja no tempo\", garante o dono, e dá de brinde.",
      vai: "fica", ganha: "maquina-do-tempo", p: { "antes-tempo": 2, "alem-tempo": 1 }, cara: "confuso" },

    { t: "Ler as placas das ruas",
      r: "Rua Sem Saída Nº 2. Travessa Talvez. Avenida Você Já Passou Aqui. Encostado numa placa, um skate sem dono. O Irving o adota.",
      ganha: "skate", vai: "fica", p: { "onde-estou": 2, matrix: 1 }, cara: "confuso" },

    { t: "Sentar no banco da praça",
      r: "O banco é quente, a praça é calma, os pombos são amigos. O Irving fecha os olhos por um instante, e os pombos o erguem aos céus.",
      vai: ["carregado-passaros", "cristo-redentor"], p: { milagre: 3 }, cara: "cansado" },

    { t: "Entrar na festa da rua",
      r: "Uma festa junina fora de época! Bandeirinhas, quentão e fogueira. Os vizinhos recebem o Irving como um velho conhecido.",
      vai: "quermesse", p: { filosofico: 2, "dia-errado": 1 }, cara: "feliz" },

    { t: "Subir na torre da igreja",
      risco: 9,
      r: "Lá do alto, o Irving vê tudo: telhados, ruas e, lá longe, a padaria! Ele desce correndo até a estação e embarca no primeiro trem.",
      vai: "trem", p: { feliz: 2, milagre: 1 }, cara: "determinado",
      falha: { r: "O sino toca bem do lado da cabeça dele. BLÓM! O Irving desperta num hospital, sem lembrar nem do próprio boné.",
               vida: -15, vai: "hospital", p: { amnesia: 3 }, cara: "confuso" } },

    { t: "Descer a ladeira de skate",
      precisa: "skate", perde: "skate",
      r: "O skate voa pelo paralelepípedo e se parte na última pedra, mas o Irving já está no calçadão movimentado de Osasco. Civilização!",
      vai: "osasco", p: { feliz: 1, "onde-estou": 1 }, cara: "feliz" },

    { t: "Pedir carona a um carro preto",
      r: "Um carro preto encosta. Antes que o Irving diga \"obrigado\", alguém coloca um saco de pano na cabeça dele.",
      vai: "encapuzado-carro", p: { prisao: 3 }, cara: "assustado" },

    { t: "Aceitar que agora mora aqui",
      cenaMin: 5,
      r: "O Irving compra uma rede, pinta a porta de azul e cumprimenta os vizinhos pelo nome. A padaria? Que padaria?",
      fim: "onde-estou", cara: "neutro" },
  ],
};

CENAS["pedagio"] = {
  chegadas: [
    "Uma praça de pedágio sem fim. Doze cabines, doze filas, nenhuma andando. As buzinas formam uma sinfonia de desespero. A placa avisa: \"Pedestre: R$ 100,00\".",
    "Eis a praça de pedágio, fronteira sagrada da rodovia. A cancela sobe e desce como a ponte levadiça de um castelo. O atendente masca o mesmo chiclete há três horas.",
  ],
  opcoes: [
    { t: "Pagar o pedágio com os 100 reais",
      precisa: "100-reais", perde: "100-reais",
      r: "A cancela se ergue como o portão de um castelo. Do outro lado, estacionado por engano, está o próprio carro do Irving, de chave no contato!",
      vai: "carro-irving", p: { feliz: 3 }, cara: "feliz" },

    { t: "Pedir desconto de pedestre",
      r: "O atendente consulta o manual, a supervisora e o gerente regional. Quarenta minutos depois, a resposta: \"Aguarde mais um pouquinho.\"",
      vai: "fica", p: { "hora-errada": 2, "dia-errado": 1 }, cara: "cansado" },

    { t: "Passar por baixo da cancela",
      risco: 11,
      r: "O Irving desliza sob a cancela como um ninja de boné. Ninguém o alcança. Do outro lado, uma loja de equipamentos de padaria à beira da estrada!",
      vai: "loja-eletro-padaria", p: { feliz: 3 }, cara: "determinado",
      falha: { r: "A cancela desce bem na testa. O alarme dispara, a viatura chega, e o Irving termina o passeio numa cela.",
               vida: -15, vai: "prisao", marca: "procurado", p: { prisao: 3 }, cara: "assustado" } },

    { t: "Pegar carona num caminhão",
      r: "Um caminhoneiro gente boa oferece carona entre caixas de banana. O Irving dorme na boleia e acorda sob uma placa gigante: Xique-Xique, Bahia.",
      vai: "xique-xique", p: { "onde-estou": 1, sono: 1, banana: 1 }, cara: "confuso" },

    { t: "Ajudar a contar as moedas",
      r: "Três mil moedas de cinco centavos. No processo, o Irving e o atendente viram amigos de infância. Ele é convidado pro casamento da prima, que é agora.",
      vai: "casamento", p: { filosofico: 3 }, cara: "feliz" },

    { t: "Vender água na fila parada",
      r: "O Irving vende água, depois biscoito, depois guarda-chuva. Vira empresário. Um cliente fiel, motorista de aplicativo, oferece carona grátis.",
      vai: "uber", p: { "rei-misto": 1, "hora-errada": 1 }, cara: "feliz" },

    { t: "Cochilar na cabine vazia",
      r: "Ar-condicionado e cadeira reclinável. O Irving se acomoda. Quando acorda, está dentro de uma caixa de papelão, despachado como encomenda.",
      vai: "caixa-papelao", p: { sono: 2 }, cara: "cansado" },

    { t: "Olhar o relógio da praça",
      r: "9h. Depois 11h. Depois 12h50. O tempo aqui passa diferente. Em pânico, o Irving pula no primeiro ônibus, que é de uma excursão de turistas.",
      vai: "excursao-peruanos", p: { "hora-errada": 2, filosofico: 1 }, cara: "assustado" },

    { t: "Apitar e organizar o trânsito",
      precisa: "apito",
      r: "PRIIII! As doze filas obedecem. Os motoristas aplaudem. O Irving é aclamado Rei do Pedágio e escoltado com honras até a ONU.",
      vai: "reuniao-onu", p: { "rei-misto": 3 }, cara: "determinado" },

    { t: "Desviar pelo mato ao lado",
      risco: 9,
      r: "O atalho funciona! O Irving sai do outro lado bem na frente de uma feira livre com cheiro de pastel.",
      vai: "feira", p: { "quase-feliz": 2, feliz: 1 }, cara: "feliz",
      falha: { r: "O mato vira cana, e cada fileira de cana é igual à anterior. Arranhado e sem rumo, o Irving está perdido num canavial.",
               vida: -12, vai: "canavial", p: { "onde-estou": 3 }, cara: "assustado" } },

    { t: "Assumir o posto na cabine",
      r: "Crachá, chiclete e cancela sob seu comando. O Irving cobra um caminhão de bois em bois. Na hora do almoço, o chefe o manda vender a féria num leilão de gado.",
      vai: "leilao-gado", p: { "rei-misto": 2, "hora-errada": 1 }, cara: "determinado" },

    { t: "Aceitar o apito do fiscal cansado",
      r: "Um fiscal exausto entrega o apito ao Irving com solenidade. 'É seu agora. Hoje é feriado pra mim', diz, e vai embora pra casa dormir.",
      vai: "fica", ganha: "apito", p: { "rei-misto": 1, "dia-errado": 1 }, cara: "neutro" },

    { t: "Esperar a fila andar",
      cenaMin: 5,
      r: "O Irving espera. E espera. A fila anda um carro por hora. Quando enfim atravessa, o sol está a pino e o relógio marca 13h.",
      fim: "hora-errada", cara: "triste" },
  ],
};
