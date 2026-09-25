// =====================================================================
//  HISTÓRIA: Leilão de gado, Hidroginástica, Balsa, Karaokê, Forno gigante,
//  Estação Espacial, Casamento, Prisão e Túnel do tempo (lugares 42 a 50)
//  Formato de cada opção: veja o guia em ferramentas/GUIA-HISTORIA.md
// =====================================================================

CENAS["leilao-gado"] = {
  chegadas: [
    "Um galpão de chapéus de couro e bois de olhar sábio. No palanque, o leiloeiro fala mais rápido que a luz. E o nariz do Irving começa a coçar.",
    "Poeira, berrante e um leiloeiro metralhando números. O Irving está num leilão de gado, onde qualquer gesto pode custar uma fortuna. Melhor nem piscar.",
  ],
  opcoes: [
    { t: "Coçar o nariz",
      semMarca: "comprou-boi",
      r: "Dou-lhe uma, dou-lhe duas, VENDIDO! O Irving acaba de comprar um boi chamado Trovão. O boi o encara com lealdade eterna.",
      vai: "fica", marca: "comprou-boi", p: { "rei-misto": 1, "quase-feliz": 1 }, cara: "assustado" },

    { t: "Montar no Trovão rumo à padaria",
      precisaMarca: "comprou-boi",
      risco: 11,
      r: "Trovão dispara como um cavalo de guerra! Pasto, estrada, asfalto. Ele freia na porta de uma loja de fornos: o boi farejou pão.",
      vai: "loja-eletro-padaria", p: { feliz: 3 }, cara: "feliz",
      falha: { r: "Trovão tem outros planos. Corre pro mato e larga o Irving no meio de um canavial sem fim, com o chapéu de lado.",
               vida: -15, vai: "canavial", p: { "onde-estou": 2 } } },

    { t: "Arrematar a coroa do Rei do Gado",
      precisa: "100-reais",
      r: "O Irving ergue a nota como um estandarte. Lance vencedor! A multidão o carrega nos ombros até um ringue lá fora: todo rei precisa provar seu valor.",
      vai: "luta-boxe", perde: "100-reais", p: { "rei-misto": 3 }, cara: "determinado" },

    { t: "Perguntar ao leiloeiro da padaria",
      r: "O leiloeiro responde a 900 palavras por minuto. O Irving entende só 'pão', 'esquerda' e 'Xique-Xique'. Por via das dúvidas, pega carona até lá.",
      vai: "xique-xique", p: { feliz: 1, "onde-estou": 1 }, cara: "confuso" },

    { t: "Pegar carona no caminhão de bois",
      r: "Entre mugidos e sacolejos, o Irving viaja de pé como um general em sua biga. O caminhão para, e a espera que vem depois parece não ter fim.",
      vai: ["pedagio", "oficina-mecanica"], p: { "hora-errada": 2 } },

    { t: "Tocar o berrante do peão",
      r: "Um som épico ecoa pelo galpão. Os bois se levantam em marcha, e o Irving é arrastado pela boiada até o meio de um protesto na cidade.",
      vai: "protesto", p: { "rei-misto": 1, "dia-errado": 2 }, cara: "assustado" },

    { t: "Pegar o chapéu largado na arquibancada",
      r: "Um chapéu de peão, largo como a ambição de um rei. Serve perfeitamente. O Irving agora parece dono de três fazendas.",
      vai: "fica", ganha: "chapeu", p: { "rei-misto": 1 }, cara: "feliz" },

    { t: "Levantar a mão pra ir ao banheiro",
      r: "Erro fatal: acaba de arrematar o lote 7, uma máquina de lavar que zumbe e pisca. Pra pagar, o Irving vai parar numa fila de banco que não anda.",
      ganha: "maquina-do-tempo", vai: "fila-banco", p: { "hora-errada": 2, "alem-tempo": 1 }, cara: "triste" },

    { t: "Sair de fininho sem mexer um músculo",
      risco: 9,
      r: "Imóvel como estátua, o Irving desliza até a saída. Do outro lado da estrada, uma feira exala cheiro de pastel e pão fresco.",
      vai: "feira", p: { feliz: 1, "quase-feliz": 2 },
      falha: { r: "Um espirro. VENDIDO! Achando que ele quer dar calote, os seguranças o levam direto pra uma cela.",
               vida: -12, vai: "prisao", p: { prisao: 3 }, cara: "assustado" } },

    { t: "Subir no palanque e virar leiloeiro",
      risco: 12,
      r: "O Irving pega o microfone e dispara números como um poeta do agro. O público delira. Um produtor de TV o leva direto pra um programa de auditório.",
      vai: "programa-auditorio", p: { famoso: 2, "rei-misto": 1 }, cara: "feliz",
      falha: { r: "Tropeça no fio e cai de cara no cocho. Acorda num corredor de hospital com cheiro de feno.",
               vida: -15, vai: "hospital", p: { amnesia: 2 } } },

    { t: "Consolar o bezerro mais tristinho",
      r: "O bezerro se chama Neblina e sente falta da mãe. O Irving o abraça. A dona da fazenda, emocionada, o arrasta pro casamento da filha, que é hoje.",
      vai: "casamento", p: { filosofico: 2, "quase-feliz": 1 }, cara: "feliz" },

    { t: "Oferecer a banana ao boi",
      precisa: "banana",
      r: "O boi come a banana com gratidão. Enfim alguém que gosta disso! O Irving deita no feno ao lado dele e só acorda na própria cama.",
      vai: "cama-irving", perde: "banana", p: { sono: 1, banana: 2 }, cara: "cansado" },

    { t: "Arrematar uma pinga por engano",
      r: "O Irving coça o nariz. O leiloeiro grita \"VENDIDO!\". Por sorte, era o lote 14: uma garrafinha de pinga, cortesia da casa. O herói respira aliviado.",
      vai: "fica", ganha: "pinga", p: { "rei-misto": 1, "hora-errada": 1 }, cara: "assustado" },
  ],
};

CENAS["hidroginastica"] = {
  chegadas: [
    "Piscina morna, música dos anos 80 e doze senhoras de touca florida fazendo polichinelo aquático. A professora apita. O Irving está dentro d'água até a cintura.",
    "Macarrões de espuma erguidos como lanças! A turma da hidroginástica recebe o Irving como novo aluno. Dona Cida já trancou o portão.",
  ],
  opcoes: [
    { t: "Avisar que precisa ir à padaria",
      r: "As senhoras riem com ternura. 'Padaria? Fica mais um pouquinho, meu filho.' Dona Cida passa hidratante na bochecha dele e deixa o pote de presente.",
      ganha: "hidratante", vai: "fica", p: { filosofico: 1, "hora-errada": 1 }, cara: "triste" },

    { t: "Entrar no ritmo da aula",
      r: "O Irving se entrega ao polichinelo aquático com a fúria de um gladiador. Impressionadas, as senhoras o inscrevem no torneio de boxe beneficente da academia.",
      vai: "luta-boxe", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Virar monitor da turma",
      r: "A professora entrega o apito sagrado. O Irving comanda o pelotão da terceira idade, que marcha piscina afora rumo a um protesto por mais aulas.",
      vai: "protesto", ganha: "apito", p: { "rei-misto": 2, "dia-errado": 1 }, cara: "determinado" },

    { t: "Comer o bolo da Dona Zilda",
      r: "Dona Zilda faz 90 anos e o bolo é de banana. Ninguém recusa bolo da Dona Zilda. Ainda ganha uma banana de lembrancinha e um convite pro casamento da neta.",
      vai: "casamento", ganha: "banana", p: { banana: 2, filosofico: 1 }, cara: "triste" },

    { t: "Boiar de costas e relaxar",
      r: "A água morna embala o herói como um berço. Os olhos pesam. Quando abre, está enrolado no próprio edredom, com cheiro de cloro.",
      vai: "cama-irving", p: { sono: 2 }, cara: "cansado" },

    { t: "Fugir mergulhando pelo ralo",
      risco: 14,
      r: "Um herói, um ralo, uma escolha ousada. O Irving desliza pelos canos e emerge numa esteira de bombons. Uma fábrica de chocolate!",
      vai: "fabrica-chocolate", p: { feliz: 2, "onde-estou": 1 }, cara: "feliz",
      falha: { r: "Os canos não acabam nunca. O Irving escorrega por quilômetros até o breu úmido da barriga de uma baleia. Como? Ninguém sabe.",
               vida: -15, vai: "dentro-baleia", p: { amnesia: 1, matrix: 1 }, cara: "assustado" } },

    { t: "Pular o muro da academia",
      risco: 12,
      r: "Fuga lendária! O Irving escala o muro de touca e cai, pingando, dentro de uma loja de patinetes. O vendedor já oferece um test drive.",
      vai: "loja-patinetes", p: { feliz: 2 }, cara: "determinado",
      falha: { r: "Dona Cida o laça com um macarrão de espuma. O Irving despenca, bate a cabeça e acorda num hospital, ainda de touca.",
               vida: -15, vai: "hospital", p: { amnesia: 1, filosofico: 1 } } },

    { t: "Passar hidratante nas senhoras",
      precisa: "hidratante",
      r: "Pele macia depois do cloro! Uma das senhoras, dermatologista aposentada, fica tão impressionada que leva o Irving pra palestrar no congresso dela.",
      vai: "conferencia-dermatologia", perde: "hidratante", p: { filosofico: 2, "dia-errado": 1 }, cara: "feliz" },

    { t: "Perguntar se alguém tem pão",
      r: "Dona Neide tira da bolsa um pão de queijo e ensina um atalho pra padaria. O atalho dá num bairro que nem o mapa conhece.",
      vai: "bairro-desconhecido", p: { feliz: 1, "onde-estou": 1 } },

    { t: "Fingir cãibra pra sair da água",
      r: "Encenação digna de novela! As senhoras choram, a música vira bolero e, de repente, um galã de bigode segura a mão do Irving.",
      vai: "novela-mexicana", p: { matrix: 2 }, cara: "confuso" },

    { t: "Jogar alpiste na piscina",
      precisa: "alpiste",
      r: "Pássaros mergulham na aula! Um bando forte agarra a jaqueta do Irving, e ele decola da piscina sob aplausos da terceira idade.",
      vai: "carregado-passaros", perde: "alpiste", p: { milagre: 3 }, cara: "assustado" },

    { t: "Cantar Evidências com a turma",
      r: "As senhoras fazem coro, a vizinhança ouve, e o dono do karaokê ao lado arrasta o Irving pro seu palco.",
      vai: "karaoke", p: { famoso: 2 }, cara: "feliz" },

    { t: "Aceitar o Yakult da Dona Cida",
      r: "Dona Cida tira um Yakult da bolsa térmica: \"Toma, meu filho, faz bem.\" Todas as senhoras concordam em coro. O Irving obedece e guarda.",
      vai: "fica", ganha: "yakult", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Ganhar o floral da professora",
      r: "A professora, serena como um lago, entrega ao Irving um vidrinho de floral de Bach: \"Urgências. Pra quem tem pressa de viver.\" Ele agradece com uma reverência molhada.",
      vai: "fica", ganha: "floral", p: { sono: 1, filosofico: 1 }, cara: "neutro" },
  ],
};

CENAS["balsa"] = {
  chegadas: [
    "Uma balsa enferrujada no meio de um rio largo. O motor tosse, engasga e morre. Carros parados, um bode no convés, e a outra margem a um mundo de distância.",
    "O rio corre manso e a balsa, parada. O motor pifou no meio da travessia. O balseiro olha o relógio e suspira: 'Coisa de umas três horinhas.'",
  ],
  opcoes: [
    { t: "Esperar o conserto com paciência",
      r: "Uma hora. Duas. O balseiro troca uma peça e desmonta outra. Quando enfim atracam, o Irving desembarca direto em outra espera sem fim.",
      vai: ["pedagio", "oficina-mecanica"], p: { "hora-errada": 2 }, cara: "cansado" },

    { t: "Remar com o garfo",
      precisa: "garfo",
      r: "Movimento heroico e totalmente inútil. A balsa não anda um centímetro, e o garfo afunda no rio. O bode, porém, admira a coragem.",
      vai: "fica", perde: "garfo", p: { "hora-errada": 1, matrix: 1 }, cara: "determinado" },

    { t: "Consertar o motor com fita crepe",
      precisa: "fita-crepe",
      r: "Três voltas de fita e muita fé. O motor ruge como um dragão! A balsa cruza o rio e atraca ao lado de uma feira cheirando a pastel.",
      vai: "feira", perde: "fita-crepe", p: { feliz: 2, "quase-feliz": 1 }, cara: "feliz" },

    { t: "Pular no rio e nadar até a margem",
      risco: 12,
      r: "Braçadas de campeão olímpico! O Irving alcança a margem, reconhece o caminho e chega, ensopado e vitorioso, à própria rua.",
      vai: "rua-irving", p: { feliz: 3 }, cara: "determinado",
      falha: { r: "A correnteza leva o herói rio abaixo, depois mar adentro, depois boca adentro. Uma baleia acaba de engolir o Irving.",
               vida: -18, vai: "dentro-baleia", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Puxar papo com o dono do bode",
      r: "Seu Genivaldo e o bode Jurandir voltam pra Bahia. Quando a balsa atraca, o Irving já é da família e vai no caminhão de bananas deles até Xique-Xique.",
      vai: "xique-xique", p: { filosofico: 1, "onde-estou": 1, banana: 1 }, cara: "feliz" },

    { t: "Cochilar num carro destrancado",
      r: "O banco de trás de um sedã desconhecido é macio como nuvem. O Irving adormece. Acorda com um capuz na cabeça e o carro andando.",
      vai: "encapuzado-carro", p: { sono: 1, prisao: 2 }, cara: "cansado" },

    { t: "Acenar pro avião que passa baixo",
      r: "O piloto acena de volta e joga uma escada de corda. Resgate de cinema! Minutos depois, o Irving está na classe econômica, com a corda de lembrança.",
      vai: "aviao", ganha: "corda", p: { amnesia: 1, "onde-estou": 1, milagre: 1 }, cara: "assustado" },

    { t: "Pescar com a alça da câmera",
      r: "O Irving fisga uma bota, um pneu e um chapéu de palha. O chapéu até que ficou bonito. O motor continua morto.",
      vai: "fica", ganha: "chapeu", p: { "hora-errada": 1 } },

    { t: "Tomar o leme e virar capitão",
      risco: 11,
      r: "Ninguém contesta. O Capitão Irving discursa sobre coragem e destino. Emocionados, os passageiros o mandam representar a balsa na ONU.",
      vai: "reuniao-onu", p: { "rei-misto": 2 }, cara: "determinado",
      falha: { r: "O leme gira, a balsa gira, o Irving gira. Tonto, cai no rio e é pescado por um barquinho cheio de turistas peruanos.",
               vida: -12, vai: "excursao-peruanos", p: { amnesia: 1, filosofico: 1 } } },

    { t: "Contar as tábuas da balsa",
      r: "O Irving conta 412 tábuas. De novo: 413. De novo: 411. O rio pisca como uma TV com defeito, e tudo se apaga.",
      vai: "lugar-escuro", p: { matrix: 2 }, cara: "confuso" },

    { t: "Dançar forró com os passageiros",
      r: "Um sanfoneiro puxa o fole e a balsa vira baile. Um casal dança tão bem que resolve casar na outra margem, e o Irving vai junto.",
      vai: "casamento", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Perguntar ao balseiro da padaria",
      r: "'O pão mais perto tá lá no forno', diz o balseiro, misterioso. O Irving encosta na caldeira quente, fecha os olhos e acorda dentro de um forno enorme.",
      vai: "forno-gigante", p: { feliz: 2, "quase-feliz": 1 }, cara: "confuso" },

    { t: "Consertar o motor com a chave de fenda", precisa: "chave-de-fenda",
      risco: 8,
      r: "O Irving mergulha no motor e aperta um único parafuso. O motor ruge como um leão, a balsa cruza o rio num instante e o herói desembarca triunfante do outro lado.",
      vai: ["xique-xique", "casa-do-norte", "canavial", "feira"], p: { feliz: 2, "rei-misto": 1 }, cara: "feliz",
      falha: { r: "O parafuso pula no rio e o motor solta uma nuvem preta bem no rosto do Irving. Três horas de conserto depois, ele ainda tosse.",
               vida: -12, vai: "fica", p: { "hora-errada": 2 }, cara: "cansado" } },
  ],
};

CENAS["karaoke"] = {
  chegadas: [
    "Sete da manhã. Neon, globo de espelhos e cheiro de ontem. O Irving está num palco de karaokê com o microfone na mão, e a plateia de madrugadores exige uma canção.",
    "Um karaokê que nunca fechou. Na tela, a letra rola sozinha. Na mão do Irving, um microfone. Na plateia, doze pessoas de pijama esperando o show.",
  ],
  opcoes: [
    { t: "Soltar a voz numa balada romântica",
      r: "O Irving canta com a alma. O garçom chora. Os vizinhos abrem as janelas. Uma equipe de TV que passava grava tudo.",
      vai: "fica", marca: "famoso-tv", p: { famoso: 3 }, cara: "feliz" },

    { t: "Cantar o jingle da padaria do bairro",
      r: "Todo mundo canta junto e a fome bate geral. A plateia de pijama marcha com o Irving rumo ao pão, mas erra a porta e entra numa loja de fornos.",
      vai: "loja-eletro-padaria", p: { feliz: 2, famoso: 1 }, cara: "determinado" },

    { t: "Buscar a nota 100 na máquina",
      risco: 13,
      r: "Nota 100! Fogos na tela! O dono coroa o Irving com uma coroa de papel e o manda direto pro programa de auditório de domingo.",
      vai: "programa-auditorio", marca: "campeao", p: { famoso: 2, "rei-misto": 1 }, cara: "feliz",
      falha: { r: "Nota 12, com som de derrota. Envergonhado, o Irving se esconde numa caixa de papelão nos fundos e fecha a tampa.",
               vida: -12, vai: "caixa-papelao", p: { sono: 1, matrix: 1 }, cara: "triste" } },

    { t: "Fazer dueto com o senhor de pijama",
      r: "Seu Osvaldo desafina, mas canta com o coração. No fim, abraça o Irving e o leva pro casamento da filha, que começa agora.",
      vai: "casamento", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Largar o microfone e ir embora",
      r: "O Irving pousa o microfone como quem abandona uma espada. Silêncio no salão. Lá fora, um calçadão lotado que ele nunca viu.",
      vai: "osasco", p: { feliz: 1, "onde-estou": 1 } },

    { t: "Escolher a música mais longa",
      r: "Dezessete minutos de rock progressivo. No solo de flauta, a plateia dorme. No segundo solo, o Irving também. Acorda na própria cama.",
      vai: "cama-irving", p: { sono: 2, "hora-errada": 1 }, cara: "cansado" },

    { t: "Cantar um bolero dramático",
      r: "Ay, ay, ay! Tão intenso que a realidade se dobra. Quando o Irving abre os olhos, um bigodudo chora na frente dele: 'Mi amor, volviste!'",
      vai: "novela-mexicana", p: { matrix: 2 }, cara: "confuso" },

    { t: "Vestir a peruca do figurino",
      r: "No baú de figurinos, uma peruca linda, digna de estrela pop. O Irving a coloca e o salão inteiro suspira.",
      vai: "fica", ganha: "peruca", p: { famoso: 1 }, cara: "feliz" },

    { t: "Apitar a batida como DJ",
      precisa: "apito",
      r: "O apito vira batida, a batida vira baile às sete da manhã. A festa transborda pela porta e se transforma num protesto por mais festa.",
      vai: "protesto", p: { famoso: 2, "dia-errado": 1 }, cara: "feliz" },

    { t: "Pagar o café da casa com 100 reais",
      precisa: "100-reais",
      r: "O dono agradece e aponta a cozinha: 'O forno lá atrás é o maior da cidade.' O Irving vai conferir e entra fundo demais.",
      vai: "forno-gigante", perde: "100-reais", p: { feliz: 3 }, cara: "determinado" },

    { t: "Sair em turnê com a banda da casa",
      risco: 11,
      r: "A banda adota o Irving como vocalista. Primeira parada da turnê: um show aos pés do Cristo Redentor!",
      vai: "cristo-redentor", p: { famoso: 3 }, cara: "feliz",
      falha: { r: "O ônibus da turnê quebra na estrada e é rebocado até uma oficina. A banda some. Restam o Irving e um pandeiro.",
               vida: -12, vai: "oficina-mecanica", p: { "onde-estou": 1, "hora-errada": 1 }, cara: "confuso" } },

    { t: "Pedir bis até o meio-dia",
      cenaMin: 4,
      r: "A plateia não deixa o Irving descer do palco. Bis, bis, bis. Dizem que um cantor famoso entrou pra dividir o microfone. A padaria pode esperar.",
      fim: "famoso", cara: "feliz" },

    { t: "Pegar um CD esquecido no palco",
      r: "Atrás do monitor, esquecido pelos séculos, repousa um CD do Tihuana. O Irving o ergue como quem desenterra um artefato perdido. A plateia de pijama aplaude.",
      vai: "fica", ganha: "cd-tihuana", p: { famoso: 1 }, cara: "feliz" },

    { t: "Plugar a caixa de som no karaokê", precisa: "caixa-de-som",
      r: "O grave sacode o globo de espelhos, a voz do Irving vira trovão e a plateia de pijama entra em êxtase. Nasce uma lenda do karaokê.",
      vai: "fica", p: { famoso: 3, filosofico: 1 }, cara: "feliz" },
  ],
};

CENAS["forno-gigante"] = {
  chegadas: [
    "Calor dourado, paredes de tijolo e um cheiro de pão tão perfeito que dá vontade de chorar. O Irving está DENTRO de um forno de padaria gigante. Tão perto. Tão longe.",
    "Bandejas do tamanho de campos de futebol. Pães franceses como troncos. Do outro lado do vidro, um padeiro colossal assobia. A padaria nunca esteve tão perto.",
  ],
  opcoes: [
    { t: "Bater no vidro e chamar o padeiro",
      r: "O padeiro gigante arregala os olhos, abre a porta e, com um peteleco gentil, lança o Irving pela janela, direto na vitrine de uma loja do outro lado da rua.",
      vai: ["loja-eletro-padaria", "loja-patinetes"], p: { feliz: 2, "quase-feliz": 1 }, cara: "assustado" },

    { t: "Subir na bandeja e seguir o cheiro",
      r: "Guiado pelo nariz, o Irving escala pães, contorna um sonho e chega pertinho da porta. Lá fora, a vitrine da padaria. Falta tão pouco...",
      vai: "fica", p: { feliz: 2, "quase-feliz": 2 }, cara: "determinado" },

    { t: "Escalar até a bandeja do misto",
      risco: 12,
      r: "Escalada de lenda! Lá no alto, dourado e fumegante, repousa um misto quente perfeito. O Irving o guarda com reverência, queimando só um pouquinho os dedos.",
      vai: "fica", ganha: "misto-quente", vida: -5, p: { feliz: 2 }, cara: "feliz",
      falha: { r: "A bandeja vira. O Irving despenca na massa de bolo, é embalado numa caixa e despachado sabe-se lá pra onde.",
               vida: -15, vai: "caixa-papelao", p: { sono: 1, "onde-estou": 1 }, cara: "assustado" } },

    { t: "Deitar no pão de forma quentinho",
      r: "Fofo como colchão, quente como edredom. O herói fecha os olhos por um segundo. Acorda na própria cama, com farinha na barba.",
      vai: "cama-irving", p: { sono: 3 }, cara: "cansado" },

    { t: "Fugir pela chaminé",
      risco: 11,
      r: "O Irving escala a chaminé como um Papai Noel ao contrário e sai no topo do mundo. Um bando de pássaros o agarra pela jaqueta.",
      vai: "carregado-passaros", p: { milagre: 3, feliz: 1 }, cara: "determinado",
      falha: { r: "Fuligem, fumaça e escuridão total. O Irving se perde no duto e já não sabe onde é em cima.",
               vida: -15, vai: "lugar-escuro", p: { matrix: 2 }, cara: "assustado" } },

    { t: "Espetar o pão com o garfo",
      precisa: "garfo",
      r: "O garfo sai limpo: pronto! O forno reconhece um padeiro de verdade e abre uma porta secreta para a fábrica de chocolate vizinha.",
      vai: "fabrica-chocolate", p: { feliz: 2 }, cara: "feliz" },

    { t: "Mexer no painel do forno",
      r: "Botões demais. O Irving aperta um que diz TEMPO. O forno vira luz azul e se abre numa vila de telhados de palha e cavaleiros.",
      vai: "inglaterra-medieval", p: { "antes-tempo": 3 }, cara: "confuso" },

    { t: "Gritar por socorro",
      r: "O grito sai pelo exaustor. Quem abre a porta é um policial desconfiado: 'Invasão de forno, é?' E lá se vai o Irving pra uma cela.",
      vai: "prisao", marca: "procurado", p: { prisao: 3 }, cara: "assustado" },

    { t: "Cavar um túnel no pão francês",
      r: "O Irving escava miolo adentro como um minerador. Do outro lado surge uma feira ao ar livre, e um vira-lata o encara com fome.",
      vai: "feira", p: { "quase-feliz": 2, feliz: 1 }, cara: "determinado" },

    { t: "Pegar os fósforos da prateleira",
      r: "Ao puxar a caixinha, a prateleira gira como passagem secreta. O Irving escorrega num tobogã de farinha e cai sentado num vagão de trem.",
      vai: "trem", ganha: "fosforos", p: { "hora-errada": 1, "onde-estou": 1 }, cara: "confuso" },

    { t: "Posar de pão para a câmera",
      r: "Um holofote acende. 'Gravando!' Uma família perfeita surge com margarina, sorrindo pro Irving como se ele fosse o pão mais bonito do café.",
      vai: "comercial-margarina", p: { feliz: 1, matrix: 1 }, cara: "confuso" },

    { t: "Esperar o padeiro abrir a porta",
      cenaMin: 5,
      risco: 12,
      r: "A porta se abre. O padeiro tira o Irving com a pá, senta ele no balcão e serve um misto quente. Perfeito. A jornada está completa.",
      fim: "feliz", cara: "feliz",
      falha: { r: "A porta abre, mas é pra entrar mais pão. Uma fornada inteira empurra o Irving pro fundo do forno, mais quente que nunca.",
               vida: -15, vai: "fica", p: { "hora-errada": 1, "quase-feliz": 1 }, cara: "triste" } },
  ],
};

CENAS["estacao-espacial"] = {
  chegadas: [
    "Silêncio cósmico. A Terra gira lá embaixo, azul e distante. O Irving flutua na Estação Espacial Internacional, e uma gota de café passa girando na frente do nariz dele.",
    "Painéis piscando, astronautas de meia e migalhas flutuando como estrelas. O Irving está em órbita. A padaria mais próxima fica 400 quilômetros pra baixo.",
  ],
  opcoes: [
    { t: "Tomar café em gravidade zero",
      r: "O Irving caça as bolhas de café pelo módulo, boca aberta, como um peixe heroico. Café espacial conquistado! Mas e o misto?",
      vai: "fica", p: { "alem-tempo": 2, feliz: 1 }, cara: "feliz" },

    { t: "Perguntar se tem padaria no espaço",
      r: "O astronauta ri: 'Só lá embaixo.' Põe o Irving numa cápsula de carga e aperta o botão vermelho. Queda livre até algum lugar bem longe de casa.",
      vai: ["canavial", "massachusetts"], p: { feliz: 1, "onde-estou": 1 }, cara: "assustado" },

    { t: "Voltar pra Terra na cápsula",
      risco: 12,
      r: "Reentrada perfeita! O paraquedas abre e a cápsula pousa, com precisão absurda, no quintal da casa do Irving.",
      vai: "casa-irving", p: { feliz: 2, sono: 1 }, cara: "feliz",
      falha: { r: "A cápsula quica na atmosfera, gira mil vezes e mergulha no oceano. Algo enorme abre a boca.",
               vida: -18, vai: "dentro-baleia", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Apertar o botão que ninguém aperta",
      r: "Alarmes! Luzes! A estação pisca e se desliga inteira. O Irving fica suspenso no breu absoluto, sem saber se ainda existe.",
      vai: "lugar-escuro", p: { matrix: 2, "alem-tempo": 1 }, cara: "assustado" },

    { t: "Conversar com o robô da estação",
      r: "O robô CIRO-9 confessa que nunca provou um misto. Viram amigos. De presente, ele teletransporta o Irving pro lugar mais feliz da Terra, segundo seus cálculos. Os cálculos são duvidosos.",
      vai: ["sorveteria", "loja-patinetes"], p: { filosofico: 1, "alem-tempo": 2 }, cara: "feliz" },

    { t: "Transmitir ao vivo para a Terra",
      r: "'Alô, planeta!' O Irving discursa sobre pão para bilhões de pessoas. A ONU convoca o novo líder espacial para uma reunião de emergência.",
      vai: "reuniao-onu", marca: "famoso-tv", p: { "rei-misto": 2, famoso: 1 }, cara: "determinado" },

    { t: "Dormir no saco preso na parede",
      r: "O saco de dormir espacial abraça o Irving como um casulo. Sem gravidade, sem preocupação. Ele sonha com a própria cama e acorda nela.",
      vai: "cama-irving", p: { sono: 2, "alem-tempo": 1 }, cara: "cansado" },

    { t: "Fazer uma caminhada espacial",
      risco: 14,
      r: "O Irving flutua no infinito, sereno. Um disco voador se aproxima, pisca as luzes e o deixa, com educação, no alto do Cristo Redentor.",
      vai: "cristo-redentor", p: { "alem-tempo": 2, milagre: 2 }, cara: "feliz",
      falha: { r: "O cabo se solta. O Irving rodopia pelo espaço até ser recolhido por um avião de passageiros. Como? A ciência não explica.",
               vida: -15, vai: "aviao", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Dar alpiste ao sabiá clandestino",
      precisa: "alpiste",
      r: "Havia um sabiá escondido na estação! Grato, ele chama a família inteira, e o bando carrega o Irving de volta pra Terra.",
      vai: "carregado-passaros", perde: "alpiste", p: { milagre: 3 }, cara: "feliz" },

    { t: "Guardar o garfo que passa flutuando",
      r: "Um garfo de titânio passa girando, brilhante como um cometa. Inútil em qualquer planeta, mas lindo. O Irving o guarda.",
      vai: "fica", ganha: "garfo", p: { "alem-tempo": 2 } },

    { t: "Seguir o cheiro de pão do módulo russo",
      r: "No módulo russo, um cosmonauta assa pão num forno experimental. O Irving chega perto demais, a porta se fecha e o forno cresce.",
      vai: "forno-gigante", p: { feliz: 2 }, cara: "determinado" },

    { t: "Morar na estação para sempre",
      cenaMin: 4,
      r: "O Irving assina o contrato de astronauta vitalício. A Terra vira uma bolinha azul na janela. O misto vira lenda de um tempo que não volta mais.",
      fim: "alem-tempo", cara: "triste" },

    { t: "Consertar a estação com a chave de fenda", precisa: "chave-de-fenda",
      r: "Um painel pisca ERRO. O Irving flutua até ele e aperta um parafuso solto. Tudo se acende. Os astronautas o condecoram Engenheiro Galáctico.",
      vai: "fica", p: { "alem-tempo": 2, "rei-misto": 1 }, cara: "feliz" },

    { t: "Filmar a Terra com a Tekpix", precisa: "tekpix",
      r: "O Irving aponta a Tekpix pela janela e filma a Terra girando. O vídeo passa em todos os telejornais lá embaixo. O mundo inteiro conhece o homem de boné.",
      vai: "fica", marca: "famoso-tv", p: { famoso: 2, "alem-tempo": 1 }, cara: "feliz" },
  ],
};

CENAS["casamento"] = {
  chegadas: [
    "Flores brancas, violinos e cento e vinte convidados desconhecidos. Alguém prende uma flor na jaqueta do Irving: 'Até que enfim, padrinho!' A noiva sorri. O noivo chora.",
    "Um salão com tule e luzinhas. Todos olham para o Irving com expectativa. Pelo visto, ele é o padrinho. E está atrasado.",
  ],
  opcoes: [
    { t: "Assumir o papel de padrinho",
      semMarca: "padrinho",
      r: "O Irving caminha até o altar com a dignidade de um cavaleiro. Segura as alianças, se emociona no 'sim' e ganha a lembrancinha dos padrinhos: um hidratante.",
      ganha: "hidratante", vai: "fica", marca: "padrinho", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Fazer o discurso do padrinho",
      r: "'O amor é como um misto quente...' O salão inteiro chora. Aclamado, o Irving é levado nos ombros até o karaokê do salão ao lado.",
      vai: "karaoke", p: { filosofico: 1, famoso: 1, "rei-misto": 1 }, cara: "determinado" },

    { t: "Pegar o bouquet no ar",
      risco: 10,
      r: "Salto espetacular por cima de dez madrinhas! O bouquet é dele. Os convidados aplaudem de pé.",
      vai: "fica", ganha: "bouquet", p: { filosofico: 2, milagre: 1 }, cara: "feliz",
      falha: { r: "Uma tia lendária o derruba em pleno voo. O Irving cai no bolo, que desaba sobre ele. Acorda no hospital, com glacê na orelha.",
               vida: -15, vai: "hospital", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Atacar a mesa de doces",
      r: "Bem-casados, brigadeiros, camafeus. O Irving come como um rei e, distraído, entra na van do bufê, que volta pra fábrica de chocolate.",
      vai: "fabrica-chocolate", p: { feliz: 1, "quase-feliz": 2 }, cara: "feliz" },

    { t: "Perguntar quem são os noivos",
      r: "Silêncio. A noiva olha o noivo. O noivo olha o Irving. 'Você não é o Clebinho?' Um violino dramático começa a tocar, e tudo vira novela mexicana.",
      vai: "novela-mexicana", p: { matrix: 2 }, cara: "confuso" },

    { t: "Entregar o bouquet à noiva",
      precisa: "bouquet",
      r: "A noiva recebe as flores com lágrimas nos olhos. Gesto mais bonito da festa! Os turistas peruanos da mesa 7 adotam o Irving na excursão deles.",
      vai: "excursao-peruanos", perde: "bouquet", p: { filosofico: 3 }, cara: "feliz" },

    { t: "Valsar com a avó da noiva",
      r: "Dona Olga conduz com firmeza de campeã. No último rodopio, revela: foi pugilista! E leva o Irving pro ringue do clube, pra uma luta beneficente.",
      vai: "luta-boxe", p: { "rei-misto": 1, amnesia: 1 }, cara: "confuso" },

    { t: "Fugir no carro dos noivos",
      risco: 12,
      r: "Latinhas no para-choque e placa de RECÉM-CASADOS! O Irving acelera rumo à padaria e freia numa loja de fornos, quase lá.",
      vai: "loja-eletro-padaria", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado",
      falha: { r: "O noivo acha que é roubo do carro. A polícia chega antes do bolo ser cortado.",
               vida: -12, vai: "prisao", marca: "procurado", p: { prisao: 3 }, cara: "assustado" } },

    { t: "Dar os 100 reais de presente",
      precisa: "100-reais",
      r: "Envelope improvisado num guardanapo. O pai da noiva, comovido, oferece carona no transporte oficial da família: um elefante.",
      vai: "elefante", perde: "100-reais", p: { filosofico: 1, banana: 2 }, cara: "confuso" },

    { t: "Fotografar a festa com a câmera",
      r: "O fotógrafo faltou e a câmera do Irving salva o dia. As fotos ficam tão lindas que ele é chamado, ao vivo, num programa de auditório.",
      vai: "programa-auditorio", p: { famoso: 2 }, cara: "feliz" },

    { t: "Cochilar na mesa das crianças",
      r: "Entre balões e cadeirinhas, o Irving encosta a cabeça na toalha. A festa vira um murmúrio doce. Acorda dentro de uma caixa de presente enorme.",
      vai: "caixa-papelao", p: { sono: 2 }, cara: "cansado" },

    { t: "Perguntar ao garçom da padaria",
      r: "'A padaria que fez o bolo é aqui perto', diz o garçom. Mas o caminho passa bem no meio de um protesto de confeiteiros.",
      vai: "protesto", p: { feliz: 1, "dia-errado": 2 } },

    { t: "Perguntar a data do casamento",
      r: "'Hoje, Dia do Padeiro!', diz a noiva, filha de padeiro. Toda padaria da cidade fechou pra festa. Derrotado, o Irving embrulha um bem-casado e volta pra casa.",
      vai: "casa-irving", p: { "dia-errado": 3 }, cara: "triste" },

    { t: "Cuidar da caixa de som do DJ",
      r: "O DJ some atrás dos bem-casados e deixa a caixa de som com o padrinho: \"Cuida dela como se fosse sua.\" Ele nunca mais volta. Agora ela é.",
      vai: "fica", ganha: "caixa-de-som", p: { famoso: 1, filosofico: 1 }, cara: "feliz" },

    { t: "Segurar a Tekpix do tio da filmagem",
      r: "O tio da filmagem entrega a Tekpix ao Irving: \"Segura aí, que eu vou dançar.\" E some na pista para sempre. A luzinha vermelha pisca, fiel ao novo dono.",
      vai: "fica", ganha: "tekpix", p: { famoso: 1, filosofico: 1 }, cara: "confuso" },
  ],
};

CENAS["prisao"] = {
  chegadas: [
    "Grades, um beliche rangendo e uma janelinha lá no alto. O Irving está preso. O colega de cela, Seu Tatu, cava a parede com uma colher há 11 anos.",
    "A porta de ferro bate com um estrondo de filme. Cela 7. No cardápio da prisão, nada de misto. O Irving encara as grades como um herói injustiçado.",
  ],
  opcoes: [
    { t: "Cavar com a colher do Tatu",
      r: "Centímetro a centímetro, a lenda avança. Horas depois, o túnel sai num canavial a quilômetros dali. Livre! Mas onde?",
      vai: "canavial", p: { "onde-estou": 1, "hora-errada": 1, prisao: 1 }, cara: "cansado" },

    { t: "Cavar com o garfo",
      precisa: "garfo",
      r: "O garfo enfim encontra sua vocação! O túnel avança rápido e sai no chão de uma cantina de escola, bem debaixo da mesa da merendeira.",
      vai: "cantina-escola", perde: "garfo", p: { feliz: 1, filosofico: 1, prisao: 1 }, cara: "feliz" },

    { t: "Descer pela janela com a corda",
      precisa: "corda",
      risco: 9,
      r: "Descida perfeita, estilo filme de ação. O Irving pousa do lado de fora e pula num Uber que esperava na esquina. 'Toca pra padaria!'",
      vai: "uber", perde: "corda", p: { feliz: 2, prisao: 1 }, cara: "determinado",
      falha: { r: "A corda era curta. O Irving fica pendurado até os guardas o puxarem de volta, sob aplausos irônicos.",
               vida: -12, vai: "fica", perde: "corda", p: { prisao: 2 }, cara: "triste" } },

    { t: "Fazer amizade com o Tatu",
      r: "Tatu foi preso por roubar o último pão de queijo de uma festa. Viram irmãos. De presente, ganha a pedra de estimação dele, a Rosângela.",
      vai: "fica", ganha: "pedra", p: { filosofico: 2, prisao: 1 }, cara: "feliz" },

    { t: "Fingir que é advogado",
      risco: 13,
      r: "Com a câmera no ombro e confiança absoluta, o Irving convence o guarda. Tão convincente que é chamado pra defender um caso na ONU.",
      vai: "reuniao-onu", p: { "rei-misto": 2, "dia-errado": 1 }, cara: "determinado",
      falha: { r: "O guarda pede a carteirinha. O Irving mostra a da biblioteca. Vai direto pra solitária, escura como breu.",
               vida: -12, vai: "lugar-escuro", p: { matrix: 1, prisao: 1 }, cara: "triste" } },

    { t: "Se esconder no cesto da lavanderia",
      risco: 10,
      r: "Clássico dos clássicos! O cesto passa pelo portão e vai num caminhão que entrega toalhas num casamento. O Irving sai de lá de dentro, dobradinho.",
      vai: "casamento", p: { filosofico: 1, feliz: 1, prisao: 1 }, cara: "feliz",
      falha: { r: "Revista! O guarda acha o Irving entre os lençóis e o põe no carro da escolta, encapuzado 'por segurança'.",
               vida: -12, vai: "encapuzado-carro", p: { prisao: 2 }, cara: "assustado" } },

    { t: "Liderar a rebelião do misto",
      r: "'Queremos misto!' Os presos batem as canecas. A revolta cresce, atravessa o pátio e vira um protesto na rua em frente à cadeia.",
      vai: "protesto", p: { "rei-misto": 2, "dia-errado": 1 }, cara: "bravo" },

    { t: "Dormir no beliche de cima",
      r: "O colchão é fino como papel, mas o Irving está exausto. Sonha com a própria cama com tanta força que acorda nela.",
      vai: "cama-irving", p: { sono: 2, prisao: 1 }, cara: "cansado" },

    { t: "Brilhar no show de talentos",
      r: "O Irving canta no pátio. Os guardas choram. O diretor, fã de karaokê, o solta com uma condição: cantar no karaokê do cunhado.",
      vai: "karaoke", p: { famoso: 2 }, cara: "feliz" },

    { t: "Pedir pão na hora do café",
      r: "O carcereiro o leva à cozinha pra buscar pão. Lá, um forno enorme está de porta aberta. O Irving entra, por via das dúvidas.",
      vai: "forno-gigante", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Fugir no caminhão da feira",
      r: "O caminhão de frutas entrega toda quinta. O Irving se esconde entre as bananas (sacrifício!) e desembarca numa feira livre.",
      vai: "feira", p: { banana: 2, "quase-feliz": 1 }, cara: "triste" },

    { t: "Aceitar o destino e cumprir a pena",
      cenaMin: 5,
      r: "O Irving senta no beliche, suspira e pega a colher do Tatu. Onze anos passam depressa quando se tem um bom amigo e um bom túnel.",
      fim: "prisao", cara: "triste" },

    { t: "Fugir com o disfarce de bigode", precisa: "disfarce",
      r: "De óculos, nariz e bigode, o Irving vira visitante. O carcereiro procura o preso de boné, não acha, e acompanha o Doutor Bigodes até a rua. A liberdade tem cheiro de pão.",
      vai: ["rua-irving", "bairro-desconhecido", "feira", "trem"], p: { feliz: 2, prisao: 1 }, cara: "feliz" },

    { t: "Desparafusar a grade da janelinha", precisa: "chave-de-fenda",
      risco: 11,
      r: "Parafuso por parafuso, a grade cede. Seu Tatu chora: onze anos de colher, e bastava uma chave de fenda. Os dois escapam pela janelinha rumo ao desconhecido.",
      vai: ["canavial", "bairro-desconhecido", "beco-perigoso", "osasco"], p: { filosofico: 2, "onde-estou": 1 }, cara: "determinado",
      falha: { r: "O último parafuso range alto. O carcereiro aparece, confisca a chave de fenda e dobra a vigilância. Seu Tatu volta para a colher.",
               vida: -12, vai: "fica", perde: "chave-de-fenda", p: { prisao: 3 }, cara: "triste" } },
  ],
};

CENAS["tunel-do-tempo"] = {
  chegadas: [
    "Centrifugação máxima! A máquina do tempo, com sua cara de máquina de lavar, gira o Irving num túnel de luz azul. Séculos passam como meias soltas no tambor.",
    "Blub, blub, VRUUUM! O Irving viaja dentro do tambor da máquina do tempo. Lá fora, dinossauros, reis e robôs passam voando. No painel pisca: 'Enxágue temporal'.",
  ],
  opcoes: [
    { t: "Girar no programa 'Roupa Medieval'",
      r: "O tambor gira pra trás. Cheiro de lama e cavalo. A tampa se abre numa vila de telhados de palha, e um cavaleiro pergunta se o Irving é feiticeiro.",
      vai: "inglaterra-medieval", p: { "antes-tempo": 3 }, cara: "assustado" },

    { t: "Apertar 'Centrifugar pro futuro'",
      r: "Velocidade de dobra! O Irving atravessa séculos e aterrissa flutuando num módulo metálico. Um astronauta derruba o café de susto.",
      vai: "estacao-espacial", p: { "alem-tempo": 3 }, cara: "assustado" },

    { t: "Escolher o programa 'Delicadas'",
      r: "Viagem suave, cheirinho de amaciante. A máquina deposita o Irving com carinho na própria cama, quentinha como roupa recém-seca.",
      vai: "cama-irving", p: { sono: 2 }, cara: "cansado" },

    { t: "Programar 'Hoje de manhã, padaria'",
      risco: 13,
      r: "Precisão temporal! A máquina acerta o dia e a hora. Erra só o endereço por um metro: o Irving aparece dentro do forno da padaria.",
      vai: "forno-gigante", p: { feliz: 3 }, cara: "feliz",
      falha: { r: "A máquina entende 'pão' como 'Japão', erra as contas e larga o Irving num bairro antigo que ninguém sabe onde fica.",
               vida: -15, vai: "bairro-desconhecido", p: { "onde-estou": 2 }, cara: "confuso" } },

    { t: "Apertar 'Fim de ciclo'",
      r: "Tim-tim-tim! A tampa abre e o Irving rola pra fora na lavanderia da própria casa. Ninguém percebeu que ele sumiu.",
      vai: "casa-irving", p: { sono: 1, feliz: 1 } },

    { t: "Dar um chute na máquina",
      risco: 11,
      r: "Pancada certeira! A máquina engata e o cospe na garagem de casa, no banco do motorista do próprio carro, cinco minutos antes de ele ter acordado.",
      vai: "carro-irving", p: { feliz: 2 }, cara: "determinado",
      falha: { r: "A máquina engasga, solta espuma e cospe o Irving num lugar e ano desconhecidos. Ele bate a cabeça e não lembra nem o século.",
               vida: -15, vai: ["lugar-escuro", "dentro-baleia", "hospital", "massachusetts"], p: { amnesia: 1, "antes-tempo": 1 }, cara: "confuso" } },

    { t: "Jogar a banana no tambor",
      precisa: "banana",
      r: "A máquina detecta fruta e ativa o modo 'Tropical'. A tampa abre em plena savana, e o Irving cai sentado nas costas de um elefante.",
      vai: "elefante", perde: "banana", p: { banana: 3 }, cara: "confuso" },

    { t: "Parar numa final de Copa antiga",
      r: "Estádio lotado, bandeiras, gritaria. O Irving sai do tambor no meio do gramado, bem na hora do pênalti, e a bola vem nos pés dele.",
      vai: "campo-futebol", p: { "rei-misto": 1, "antes-tempo": 2 }, cara: "assustado" },

    { t: "Visitar o futuro da humanidade",
      r: "Ano 3000: a humanidade inteira vive dentro de uma novela mexicana eterna. O Irving desembarca já escalado como o gêmeo malvado.",
      vai: "novela-mexicana", p: { matrix: 2, "alem-tempo": 1 }, cara: "confuso" },

    { t: "Pegar uma pedra da Idade da Pedra",
      r: "O Irving estica o braço pela tampa e arranca uma lembrancinha do paleolítico: uma pedra legítima. Um homem das cavernas reclama muito.",
      vai: "fica", ganha: "pedra", p: { "antes-tempo": 2 } },

    { t: "Ir ao dia em que inventaram o misto",
      r: "O tambor para numa assembleia solene: líderes mundiais votam a criação do misto quente. O voto decisivo é do Irving.",
      vai: "reuniao-onu", p: { "rei-misto": 1, "antes-tempo": 2 }, cara: "determinado" },

    { t: "Apertar todos os botões juntos",
      cenaMin: 4,
      r: "A máquina lava, centrifuga, enxágua e esquece o Irving no ano 1200, junto com um pé de meia. Nunca mais volta o ciclo.",
      fim: "antes-tempo", cara: "assustado" },
  ],
};
