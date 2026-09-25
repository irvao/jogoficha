// =====================================================================
//  HISTÓRIA: Canavial, Inglaterra medieval, Reunião da ONU, Dentro de
//  uma baleia, Excursão de peruanos, Comercial de margarina, Fila do
//  banco e Programa de auditório (lugares 34 a 41)
//  Formato de cada opção: veja o guia em ferramentas/GUIA-HISTORIA.md
// =====================================================================

CENAS["canavial"] = {
  chegadas: [
    "Cana à esquerda, cana à direita, cana até onde a vista alcança. O Irving está no meio de um canavial sem fim, e todas as direções parecem a mesma.",
    "O vento sopra entre as canas como um coral de sussurros. O canavial é um labirinto verde, e o Irving, um herói sem bússola.",
  ],
  opcoes: [
    { t: "Seguir o cheiro de pão ao longe",
      r: "Um aroma fraco, quase uma lenda, guia o Irving entre as canas. O cheiro termina numa loja cheia de fornos de padaria novinhos.",
      vai: "loja-eletro-padaria", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Seguir a trilha de formigas",
      r: "Formigas sempre sabem onde tem açúcar. O Irving as segue por quilômetros até os portões de uma fábrica de chocolate. Sábias formigas.",
      vai: "fabrica-chocolate", p: { feliz: 1, "quase-feliz": 2 } },

    { t: "Andar sempre em linha reta",
      r: "Fiel como uma flecha, o Irving caminha reto por horas. O canavial acaba e uma placa anuncia: 'Bem-vindo a Xique-Xique, Bahia'.",
      vai: "xique-xique", p: { "onde-estou": 2 } },

    { t: "Pedir caldo de cana ao lavrador",
      precisa: "100-reais", perde: "100-reais",
      r: "O lavrador serve um caldo de cana gelado com limão, néctar dos deuses! Emocionado com os 100 reais, leva o Irving de carroça até o evento mais animado da região.",
      vai: ["feira", "leilao-gado", "casa-do-norte"], p: { "quase-feliz": 2, feliz: 1 }, cara: "feliz" },

    { t: "Subir no trator abandonado",
      risco: 11,
      r: "O trator ruge como um dragão e rasga o canavial! Na estrada, o Irving freia com estilo bem na cabine do pedágio.",
      vai: "pedagio", p: { feliz: 2, "hora-errada": 1 }, cara: "feliz",
      falha: { r: "O trator engasga e morre. O Irving empurra o trambolho por horas até uma oficina de beira de estrada.",
               vida: -15, vai: "oficina-mecanica", p: { "hora-errada": 1, "onde-estou": 1 }, cara: "confuso" } },

    { t: "Acenar pra colheitadeira",
      risco: 9,
      r: "A colheitadeira para e o motorista oferece carona até a estação. O Irving embarca no trem como o grande rei da colheita.",
      vai: "trem", p: { feliz: 1, "rei-misto": 1 },
      falha: { r: "A colheitadeira não vê o Irving e o recolhe junto com a palha. Ele é embalado com carinho e acorda dentro de uma caixa de papelão.",
               vida: -18, vai: "caixa-papelao", p: { sono: 1, matrix: 1 }, cara: "assustado" } },

    { t: "Pegar a corda de um feixe de cana",
      r: "Os feixes de cana são amarrados com corda da boa. O Irving pega um rolo. Herói sem corda não é herói.",
      vai: "fica", ganha: "corda", p: { "onde-estou": 1 } },

    { t: "Escutar a cana crescer",
      r: "Em silêncio absoluto, o Irving escuta. As canas cochicham que a padaria fica 'logo ali'. Ele desconfia. Canas mentem.",
      vai: "fica", p: { "onde-estou": 1, matrix: 1 }, cara: "confuso" },

    { t: "Deitar à sombra das canas",
      r: "As canas balançam como um berço verde. O Irving fecha os olhos só um instante e acorda em casa, sem saber como.",
      vai: ["casa-irving", "cama-irving"], p: { sono: 2 }, cara: "cansado" },

    { t: "Gritar por socorro",
      r: "O grito ecoa pelo canavial. Quem responde é um bando de pássaros, que agarram o Irving pela jaqueta e o levam pelos céus.",
      vai: ["carregado-passaros", "cristo-redentor"], p: { milagre: 3 }, cara: "assustado" },

    { t: "Seguir o espantalho que acenou",
      r: "Espantalhos não acenam. Mesmo assim, o Irving o segue até o alto de um morro, onde um espantalho gigante de braços abertos o espera. É o Cristo Redentor.",
      vai: "cristo-redentor", p: { matrix: 1, milagre: 1 }, cara: "assustado" },

    { t: "Apitar pra chamar ajuda",
      precisa: "apito",
      r: "Priiii! Um time inteiro surge correndo do meio da cana, achando que o jogo começou. Eles carregam o Irving até o campo como capitão.",
      vai: "campo-futebol", p: { famoso: 1, "rei-misto": 1 }, cara: "feliz" },

    { t: "Aceitar que agora mora aqui",
      cenaMin: 5,
      r: "O Irving constrói uma cabana de bagaço e se nomeia guardião do canavial. A padaria vira lenda. O caminho de volta, também.",
      fim: "onde-estou", cara: "confuso" },
  ],
};

CENAS["inglaterra-medieval"] = {
  chegadas: [
    "Lama, galinhas e um castelo no horizonte. O Irving está numa vila da Inglaterra medieval. Os camponeses encaram o boné dele como se fosse feitiçaria.",
    "Trombetas! Cavaleiros de armadura desfilam pela vila medieval. Ninguém aqui sabe o que é um misto quente. Ele ainda não foi inventado.",
  ],
  opcoes: [
    { t: "Procurar o padeiro da vila",
      r: "O padeiro tira um pão do forno de pedra. O cheiro é tão divino que o Irving se inclina demais e cai lá dentro. Um forno gigante!",
      vai: "forno-gigante", p: { feliz: 2, "antes-tempo": 1 }, cara: "determinado" },

    { t: "Pedir um misto na taverna",
      r: "O taverneiro serve pão duro e queijo de cabra. 'Presunto é coisa do futuro, forasteiro.' De consolo, ele dá ao Irving um garfo de ferro.",
      vai: "fica", ganha: "garfo", p: { "antes-tempo": 2, "quase-feliz": 1 } },

    { t: "Ajudar os camponeses na colheita",
      r: "Horas de trabalho honesto no trigo. Os camponeses chamam o Irving de irmão e dão a ele um chapéu de palha. Um chapéu maneiríssimo.",
      vai: "fica", ganha: "chapeu", p: { filosofico: 2, "antes-tempo": 1 }, cara: "feliz" },

    { t: "Ajoelhar-se diante do rei",
      r: "'Levanta-te, Sir Irving do Boné!' O rei o envia em missão diplomática. O mago da corte abre um portal, e o Irving surge no plenário da ONU.",
      vai: "reuniao-onu", p: { "rei-misto": 2, "antes-tempo": 1 }, cara: "determinado" },

    { t: "Puxar a espada da pedra",
      risco: 14,
      r: "A espada desliza como faca na manteiga! O povo aclama o novo rei, que parte em cortejo real montado no bicho mais majestoso do reino: um elefante.",
      vai: "elefante", p: { "rei-misto": 3, "antes-tempo": 1 }, cara: "feliz",
      falha: { r: "A espada não se mexe. A coluna do Irving, sim. O curandeiro receita um chá misterioso, e ele acorda num corredor de hospital.",
               vida: -15, vai: "hospital", p: { amnesia: 1, "antes-tempo": 1 }, cara: "cansado" } },

    { t: "Entrar no torneio de justa",
      risco: 11,
      r: "Montado num pônei chamado Trovão, o Irving derruba o campeão do reino! A multidão o carrega nos ombros até um ringue de luta.",
      vai: "luta-boxe", marca: "campeao", p: { "rei-misto": 2, "antes-tempo": 1 }, cara: "feliz",
      falha: { r: "A lança acerta o Irving em cheio. Ele gira três vezes no ar e cai numa carroça de feno que parte para um bairro desconhecido.",
               vida: -18, vai: "bairro-desconhecido", p: { amnesia: 1, "onde-estou": 1 }, cara: "assustado" } },

    { t: "Mostrar a câmera aos camponeses",
      r: "Flash! 'Bruxaria!', gritam os camponeses. Os guardas do rei jogam o Irving na masmorra, que é estranhamente parecida com uma prisão moderna.",
      vai: "prisao", p: { prisao: 2, "antes-tempo": 1 }, cara: "assustado" },

    { t: "Explicar ao mago o que é um misto",
      r: "Pão, queijo, presunto, chapa... O mago fica tão confuso que lança um feitiço errado. O Irving é arremessado pro futuro e flutua numa estação espacial.",
      vai: "estacao-espacial", p: { "alem-tempo": 3 }, cara: "confuso" },

    { t: "Oferecer o bouquet à princesa",
      precisa: "bouquet", perde: "bouquet",
      r: "A princesa cora e aceita as flores. Em minutos o reino organiza um casamento, e o Irving, sabe-se lá por quê, é promovido a padrinho.",
      vai: "casamento", p: { filosofico: 2, "rei-misto": 1 }, cara: "feliz" },

    { t: "Ligar a máquina do tempo",
      precisa: "maquina-do-tempo",
      r: "Os camponeses acham que é um baú mágico. O Irving aperta 'centrifugar'. A máquina chacoalha como numa lavagem pesada e o engole num túnel de luz azul.",
      vai: "tunel-do-tempo", p: { "antes-tempo": 2, "alem-tempo": 1 } },

    { t: "Esconder-se num barril",
      r: "O barril rola até o porto, cai num navio e cruza o oceano. Quando a tampa abre, o Irving está em Massachusetts, cheirando a peixe e a história.",
      vai: "massachusetts", p: { "onde-estou": 1, "antes-tempo": 1 }, cara: "confuso" },

    { t: "Seguir o bobo da corte",
      r: "O bobo dá cambalhotas e atravessa uma cortina. Do outro lado: luzes, plateia e um apresentador de terno brilhante gritando o nome do Irving.",
      vai: "programa-auditorio", p: { matrix: 1, famoso: 1, "antes-tempo": 1 } },

    { t: "Aceitar a vida na Idade Média",
      cenaMin: 5,
      r: "O Irving troca o boné por um elmo e o sonho do misto por pão com queijo de cabra. Sir Irving, o Forasteiro, nunca mais volta.",
      fim: "antes-tempo", cara: "triste" },
  ],
};

CENAS["reuniao-onu"] = {
  chegadas: [
    "Bandeiras de todas as cores, fones de tradução e um silêncio solene. O Irving está no plenário da ONU, atrás de uma plaquinha que diz 'DELEGADO'.",
    "Um diplomata encerra um discurso de três horas sobre a padronização mundial das tampas de caneta. Aplausos. Agora, todos os olhos se voltam para o Irving.",
  ],
  opcoes: [
    { t: "Perguntar onde é o café da manhã",
      r: "Um delegado gentil aponta o refeitório. Mas o Irving abre a porta errada e entra num set com a mesa de café mais perfeita do mundo.",
      vai: "comercial-margarina", p: { feliz: 2 } },

    { t: "Discursar sobre o misto quente",
      risco: 11,
      r: "Com voz de trovão: 'Um misto para cada cidadão!' O plenário se levanta. As TVs transmitem ao vivo e um programa de auditório o convoca na hora.",
      vai: "programa-auditorio", marca: "famoso-tv", p: { "rei-misto": 3 }, cara: "determinado",
      falha: { r: "Microfonia. O Irving gagueja, derruba a água no tradutor e é gentilmente escoltado pra fora, bem no meio de um protesto na calçada.",
               vida: -12, vai: "protesto", p: { "dia-errado": 3 }, cara: "assustado" } },

    { t: "Propor o Dia Mundial do Misto",
      r: "Aprovado por unanimidade! Só que, na empolgação, marcaram pra hoje. Todas as padarias do planeta fecham para comemorar.",
      vai: "fica", p: { "dia-errado": 3 }, cara: "confuso" },

    { t: "Colocar o fone de tradução",
      r: "O fone traduz tudo para uma língua que talvez nem exista. Tudo gira, e o Irving sai do prédio andando sem rumo até o estado vizinho: Massachusetts.",
      vai: "massachusetts", p: { amnesia: 2 }, cara: "confuso" },

    { t: "Votar sim em tudo",
      r: "Sim às tampas de caneta, sim aos feriados, sim a tudo. A votação não acaba nunca. Um funcionário entrega uma senha e manda o Irving pra fila do banco.",
      vai: "fila-banco", p: { "hora-errada": 1, "dia-errado": 2 } },

    { t: "Cochilar na poltrona de veludo",
      r: "Poltrona macia, discurso monótono. O Irving pisca devagar e acorda na própria cama, com a plaquinha de delegado grudada na testa.",
      vai: "cama-irving", p: { sono: 2 }, cara: "cansado" },

    { t: "Fazer amizade com os tradutores",
      r: "Os tradutores adoram o Irving e ensinam 'bom dia' em 90 línguas. Um deles o leva pro congresso que acontece no salão ao lado.",
      vai: "conferencia-dermatologia", p: { filosofico: 2, "dia-errado": 1 }, cara: "feliz" },

    { t: "Pegar as flores da mesa oficial",
      r: "O Irving abraça o arranjo da mesa principal. Os seguranças acham que ele é do casamento no salão ao lado e o empurram pra lá.",
      vai: "casamento", ganha: "bouquet", p: { filosofico: 1, "dia-errado": 2 } },

    { t: "Fugir pelo corredor dos tradutores",
      risco: 9,
      r: "Portas com placas em 40 idiomas. Uma delas diz 'Pão'. O Irving entra e sai numa cantina de escola, com cheirinho de pão na chapa.",
      vai: "cantina-escola", p: { feliz: 2, filosofico: 1 }, cara: "feliz",
      falha: { r: "Portas e mais portas. O Irving abre uma qualquer e sai muito, muito longe do prédio, num lugar que ele não reconhece.",
               vida: -12, vai: ["bairro-desconhecido", "massachusetts"], p: { "onde-estou": 2 }, cara: "confuso" } },

    { t: "Espirrar no microfone",
      r: "Atchim! O eco dura sete minutos. Então tudo se repete: o mesmo discurso, o mesmo aplauso, a mesma tampa de caneta. As luzes piscam e se apagam.",
      vai: "lugar-escuro", p: { matrix: 2 }, cara: "assustado" },

    { t: "Entrar no carro da comitiva",
      r: "Um carro preto espera na saída. O Irving entra, e alguém coloca um capuz nele 'por protocolo de segurança'. O carro arranca.",
      vai: "encapuzado-carro", p: { prisao: 2, "onde-estou": 1 } },

    { t: "Pedir silêncio com o apito",
      precisa: "apito",
      r: "Priiii! O plenário inteiro se cala. O Irving tem a palavra e declara o café da manhã um direito universal. Aplausos em 190 idiomas.",
      vai: "fica", p: { "rei-misto": 2, feliz: 1 }, cara: "determinado" },

    { t: "Declarar-se Imperador da Terra",
      cenaMin: 5,
      r: "Silêncio. Depois, uma salva de palmas. As bandeiras são trocadas por fotos do Irving de boné. O planeta tem um novo imperador.",
      fim: "rei-misto", cara: "determinado" },
  ],
};

CENAS["dentro-baleia"] = {
  chegadas: [
    "Escuridão, umidade e um cheiro de sardinha ancestral. O Irving está dentro de uma baleia. Ao fundo, um coração do tamanho de um fusca bate como tambor.",
    "Peixinhos boiam ao redor. Na parede, um rabisco antigo: 'Pinóquio esteve aqui'. A baleia ronca. O Irving está na barriga dela.",
  ],
  opcoes: [
    { t: "Seguir o cheiro de pão quentinho",
      r: "Absurdo, mas verdade: a baleia engoliu uma padaria flutuante. O Irving segue o aroma por um túnel morno e sai dentro de um forno gigante.",
      vai: "forno-gigante", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Fazer cócegas na garganta dela",
      risco: 9,
      r: "A baleia espirra com a força de mil tempestades. O Irving voa pelo céu e aterrissa de pé no convés de uma balsa.",
      vai: "balsa", p: { feliz: 1, "hora-errada": 1 }, cara: "feliz",
      falha: { r: "A baleia engole de novo, mais fundo. O Irving escorrega, bate a cabeça numa espinha de peixe e acorda num corredor de hospital.",
               vida: -15, vai: "hospital", p: { amnesia: 2 }, cara: "confuso" } },

    { t: "Sair nadando pelo respiradouro",
      risco: 12,
      r: "Braçadas de campeão! O Irving sobe pelo respiradouro, é lançado num jato d'água e cai numa barraca de peixe da feira. O feirante nem se abala.",
      vai: "feira", p: { "quase-feliz": 2, feliz: 1 }, cara: "feliz",
      falha: { r: "O respiradouro fecha no meio do caminho. O Irving fica entalado, é sacudido pra lá e pra cá e desmaia num lugar escuríssimo.",
               vida: -18, vai: "lugar-escuro", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Explorar o estômago",
      r: "Entre botas, pneus e um celular de 2004, o Irving acha um rolo de corda em ótimo estado. A baleia tem um gosto eclético.",
      vai: "fica", ganha: "corda", p: { "onde-estou": 1 } },

    { t: "Contar os peixinhos engolidos",
      r: "Um, dois, trezentos e doze... O Irving perde a conta, recomeça, perde de novo. Agora já nem lembra por que estava contando.",
      vai: "fica", p: { amnesia: 2, "hora-errada": 1 }, cara: "confuso" },

    { t: "Gritar 'Tem alguém aí?'",
      r: "O eco responde em doze vozes. Uma diz o nome do Irving. Outra grita 'Corta!'. A escuridão se abre em luzes de estúdio e uma mesa de café perfeita.",
      vai: "comercial-margarina", p: { matrix: 1, feliz: 1 }, cara: "assustado" },

    { t: "Dormir no colchão de algas",
      r: "As algas são macias como edredom de hotel. A baleia canta uma canção de ninar grave. O Irving acorda em casa, cheirando a maresia.",
      vai: ["casa-irving", "cama-irving"], p: { sono: 2 }, cara: "cansado" },

    { t: "Cantar uma balada pra baleia",
      r: "A baleia se emociona e responde com um canto ouvido em todos os oceanos. Tocada, ela cospe o Irving direto no palco de um karaokê.",
      vai: "karaoke", p: { famoso: 2 }, cara: "feliz" },

    { t: "Mandar um recado numa garrafa",
      r: "'Socorro, quero um misto.' Astronautas avistam a garrafa lá de cima. Um feixe de luz puxa o Irving para fora e para o alto, até uma estação espacial.",
      vai: "estacao-espacial", p: { "alem-tempo": 3 } },

    { t: "Acender um fósforo",
      precisa: "fosforos",
      r: "A luz revela um velho pescador que mora ali há 40 anos. Ele aponta a saída e um jato d'água lança o Irving ao céu, onde pássaros o agarram.",
      vai: "carregado-passaros", p: { milagre: 3 } },

    { t: "Passar hidratante nas paredes",
      precisa: "hidratante", perde: "hidratante",
      r: "Ninguém nunca hidratou a baleia por dentro. Grata, ela nada até a praia e deposita o Irving na porta de um congresso de dermatologia, onde vira celebridade.",
      vai: "conferencia-dermatologia", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Montar casa na baleia",
      cenaMin: 5,
      r: "O Irving decora a barriga com algas e conchas e esquece que um dia quis um misto. Esquece até o próprio nome. A baleia agora é o lar dele.",
      fim: "amnesia", cara: "confuso" },

    { t: "Rezar como o profeta Jonas",
      r: "Se funcionou com o Jonas, há de funcionar agora. A baleia soluça, e o Irving é cuspido direto pro céu, onde um bando de pássaros o apanha com todo o cuidado.",
      vai: "carregado-passaros", p: { milagre: 3 }, cara: "determinado" },
  ],
};

CENAS["excursao-peruanos"] = {
  chegadas: [
    "Uma guia ergue uma bandeirinha e conta cabeças: 'Cuarenta y uno... cuarenta y dos?'. O Irving foi contado. Agora ele faz parte da excursão de turistas peruanos.",
    "Sorrisos, câmeras e um ônibus de dois andares. A excursão peruana adotou o Irving como mascote. Uma senhora já oferece a ele um saquinho de milho torrado.",
  ],
  opcoes: [
    { t: "Tirar foto com o grupo todo",
      r: "Quarenta e dois sorrisos e um 'whiskyyy!' coletivo. O Irving ganha quarenta e um amigos e um convite pra visitar Cusco. O coração dele cresce.",
      vai: "fica", marca: "amigo-peruanos", p: { filosofico: 3 }, cara: "feliz" },

    { t: "Perguntar à guia pela padaria",
      r: "A guia confere o roteiro: '¡Panadería! Parada número 7.' O ônibus estaciona numa loja de fornos de padaria. Quase lá!",
      vai: "loja-eletro-padaria", p: { feliz: 2 }, cara: "determinado" },

    { t: "Seguir a bandeirinha da guia",
      r: "Onde a bandeirinha vai, o grupo vai. E hoje ela vai ao Cristo Redentor. O Irving sobe junto, feliz como um turista de primeira viagem.",
      vai: "cristo-redentor", p: { filosofico: 1, milagre: 2 } },

    { t: "Ganhar um gorro andino",
      r: "Um senhor tira da mochila um gorro de lã com pompons, tricotado como há quinhentos anos, e coloca na cabeça do Irving. É oficialmente o chapéu mais maneiro do mundo.",
      vai: "fica", ganha: "chapeu", p: { filosofico: 1, "antes-tempo": 1 }, cara: "feliz" },

    { t: "Puxar um trenzinho da alegria",
      r: "O trenzinho atravessa a cidade cantando e só para quando entra, sem querer, num casamento de desconhecidos. Os noivos aplaudem.",
      vai: "casamento", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Aprender a dançar a marinera",
      r: "A senhora mais animada ensina a marinera, com lenço e tudo. O Irving gira tanto que sai girando porta afora e para numa aula de hidroginástica.",
      vai: "hidroginastica", p: { filosofico: 2 } },

    { t: "Cochilar no ônibus da excursão",
      r: "O ônibus balança como uma rede. O Irving cochila no ombro de um desconhecido gentil e acorda no ponto final: a porta da própria casa.",
      vai: "casa-irving", p: { sono: 2 }, cara: "cansado" },

    { t: "Ir ao banheiro 'rapidinho'",
      r: "Quando o Irving volta, o ônibus já foi. Ele corre atrás dele por horas e o alcança parado numa oficina, com o motor fervendo.",
      vai: "oficina-mecanica", p: { "onde-estou": 2 }, cara: "triste" },

    { t: "Subir no andar de cima do ônibus",
      risco: 9,
      r: "Vento no rosto, vista de rei! Na frente de um estúdio, o Irving é confundido com uma celebridade e puxado pra um programa de auditório.",
      vai: "programa-auditorio", p: { famoso: 2 }, cara: "feliz",
      falha: { r: "Um galho baixo! O Irving é arrancado do ônibus e rola por uma ribanceira até o meio de um canavial sem fim.",
               vida: -15, vai: "canavial", p: { "onde-estou": 2 }, cara: "assustado" } },

    { t: "Tentar ser o guia do grupo",
      risco: 11,
      r: "Bandeirinha no alto, voz de general! Quarenta e dois turistas seguem o Irving até o plenário da ONU, onde ele é recebido com aplausos.",
      vai: "reuniao-onu", p: { "rei-misto": 2, filosofico: 1 }, cara: "determinado",
      falha: { r: "O Irving leva o grupo pelo caminho errado. Muito errado. Quarenta e dois turistas e um Irving embarcam num trem para lugar nenhum.",
               vida: -12, vai: "trem", p: { "onde-estou": 1, "hora-errada": 1 }, cara: "confuso" } },

    { t: "Jogar alpiste pras fotos do grupo",
      precisa: "alpiste", perde: "alpiste",
      r: "Centenas de pássaros descem e os turistas fotografam, maravilhados. Gratos pelo banquete, os pássaros erguem o Irving nos ares.",
      vai: "carregado-passaros", p: { milagre: 2, filosofico: 1 } },

    { t: "Pagar um pastel pra cada um",
      precisa: "100-reais", perde: "100-reais",
      r: "Os 100 reais não dão pra todo mundo, mas a intenção comove. O grupo carrega o Irving nos ombros até a feira mais próxima.",
      vai: "feira", marca: "amigo-peruanos", p: { filosofico: 2, "quase-feliz": 1 }, cara: "feliz" },

    { t: "Abraçar o grupo e voltar pra casa",
      cenaMin: 4, precisaMarca: "amigo-peruanos",
      r: "O Irving percebe que o misto nunca foi o ponto. O ponto eram eles. Um abraço coletivo, quarenta e duas despedidas, e ele volta a pé, leve.",
      fim: "filosofico", cara: "feliz" },
  ],
};

CENAS["comercial-margarina"] = {
  chegadas: [
    "Luzes, câmera, margarina! Uma família perfeita sorri em volta de um café perfeito: pão quentinho, suco de laranja, sol na janela. Nada disso é do Irving.",
    "'Ação!', grita o diretor. A família passa margarina no pão com sorrisos de 64 dentes. O Irving está no set, ao lado da mesa de café mais linda do mundo.",
  ],
  opcoes: [
    { t: "Sentar à mesa como se fosse da família",
      r: "Ninguém percebe. O pai perfeito passa margarina no pão do Irving e sorri. O cheiro acende uma chama no peito do herói: a padaria o espera!",
      vai: "fica", p: { feliz: 3 }, cara: "feliz" },

    { t: "Perguntar ao figurante de padeiro",
      r: "O figurante é padeiro de verdade! Ele anota o endereço da padaria dele e leva o Irving na van da loja de fornos onde faz compras.",
      vai: "loja-eletro-padaria", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Seguir o cheiro do pão de verdade",
      r: "O pão da mesa é cenográfico, mas o cheiro vem dos fundos do estúdio. O Irving abre uma porta de ferro e entra num forno de padaria gigante.",
      vai: "forno-gigante", p: { feliz: 2, "quase-feliz": 1 } },

    { t: "Morder o pão da mesa",
      r: "É de isopor. A mesa é de papelão. O sol é um refletor. O Irving desconfia de tudo, e quando as luzes se apagam, sobra só a escuridão.",
      vai: "lugar-escuro", vida: -3, p: { matrix: 2 }, cara: "confuso" },

    { t: "Roubar um gole do café no intervalo",
      risco: 11,
      r: "Movimento ninja entre um take e outro: um gole do café perfeito! Energia de herói. O Irving sai correndo e pula no primeiro Uber que passa.",
      vai: "uber", p: { feliz: 3 }, cara: "feliz",
      falha: { r: "'Corta!' O diretor pega o Irving no flagra. Os seguranças o jogam no banco de trás de um carro, com capuz e tudo.",
               vida: -12, vai: "encapuzado-carro", p: { prisao: 2 }, cara: "assustado" } },

    { t: "Gritar 'Corta!' antes do diretor",
      risco: 14,
      r: "O grito sai com tanta autoridade que o set inteiro obedece. O Irving é o novo diretor, e o café perfeito agora é dele.",
      vai: "fica", p: { "rei-misto": 2, feliz: 2 }, cara: "determinado",
      falha: { r: "O diretor fica vermelho como tomate. Os seguranças escoltam o Irving até a rua e o largam no meio de um protesto de figurantes.",
               vida: -12, vai: "protesto", p: { "dia-errado": 3 }, cara: "bravo" } },

    { t: "Sorrir mais que a família",
      r: "O Irving sorri tanto que as bochechas tremem. O diretor chora: 'Achamos nosso astro!' Uma limusine o leva direto pra um programa de auditório.",
      vai: "programa-auditorio", marca: "famoso-tv", p: { famoso: 2 }, cara: "feliz" },

    { t: "Declarar amor à margarina",
      r: "O Irving se ajoelha diante do pote. A mãe perfeita chora, o pai perfeito desmaia, violinos tocam. O comercial virou uma novela mexicana.",
      vai: "novela-mexicana", p: { matrix: 2 } },

    { t: "Fazer carinho no cachorro do set",
      r: "O cachorro do comercial é o mais fofo do mundo. E o mais faminto: rouba o pão da mesa e foge. O Irving corre atrás dele até uma feira.",
      vai: "feira", p: { "quase-feliz": 3 } },

    { t: "Pegar a banana da fruteira",
      r: "A banana é de verdade. O Irving a guarda com desconfiança e é expulso por roubar objeto de cena. A porta dos fundos dá numa sorveteria.",
      vai: "sorveteria", ganha: "banana", p: { banana: 3 }, cara: "confuso" },

    { t: "Deitar na cama do cenário",
      r: "O quarto perfeito tem a cama mais fofa já fabricada. O Irving deita 'só pra testar' e acorda na própria cama, sem saber como.",
      vai: "cama-irving", p: { sono: 2 }, cara: "cansado" },

    { t: "Pôr a peruca e virar figurante",
      precisa: "peruca",
      r: "De peruca linda, o Irving é escalado como tio da família perfeita. Recebe 100 reais de cachê, um abraço coletivo e um convite de casamento.",
      vai: "casamento", ganha: "100-reais", p: { filosofico: 1, feliz: 1 }, cara: "feliz" },

    { t: "Ler o roteiro do comercial",
      r: "'Cena 1: Dia do Padeiro. Padarias fechadas. A família fica em casa com margarina.' O Irving empalidece e corre pra casa, pra conferir se é verdade.",
      vai: "casa-irving", p: { "dia-errado": 3 }, cara: "assustado" },
  ],
};

CENAS["fila-banco"] = {
  chegadas: [
    "Fila do banco, 9h01. O painel mostra a senha 12. O papel na mão do Irving diz 847. À frente, um idoso conta moedas de 5 centavos como quem conta estrelas.",
    "O ar-condicionado sopra um frio polar. A fila serpenteia como um dragão sonolento. Plim! 'Senha 13'. O Irving olha a dele: 847. A jornada será longa.",
  ],
  opcoes: [
    { t: "Perguntar da padaria à moça do caixa",
      r: "Sem tirar os olhos da tela, a moça do caixa aponta: 'Duas quadras, à esquerda.' O Irving vira à direita e entra na primeira loja que vê. Perto! Ou não.",
      vai: ["loja-eletro-padaria", "loja-patinetes"], p: { feliz: 2, "quase-feliz": 1 } },

    { t: "Ajudar o idoso a contar as moedas",
      r: "Juntos, eles contam 3.482 moedas. Grato, o idoso ensina ao Irving o segredo da vida e dá a ele um saquinho de alpiste pros pombos da praça.",
      vai: "fica", ganha: "alpiste", p: { filosofico: 2, milagre: 1 }, cara: "feliz" },

    { t: "Fingir ser idoso pro preferencial",
      risco: 11,
      r: "Mão nas costas, passinhos lentos: o Irving é atendido na hora! Sai do banco em tempo recorde e pula no primeiro Uber que passa.",
      vai: "uber", p: { feliz: 2 }, cara: "feliz",
      falha: { r: "O segurança não se convence. 'Documento, vovô?' O Irving é levado pra conversar com a polícia numa sala muito, muito pequena.",
               vida: -12, vai: "prisao", marca: "procurado", p: { prisao: 3 }, cara: "assustado" } },

    { t: "Pedir empréstimo pra comprar o misto",
      risco: 14,
      r: "O gerente analisa o crédito por quarenta minutos e... aprova! 100 reais e um abraço. O Irving corre pro estacionamento, onde o próprio carro o espera.",
      vai: "carro-irving", ganha: "100-reais", p: { feliz: 2, "hora-errada": 1 }, cara: "feliz",
      falha: { r: "Negado. O gerente exige 17 documentos. O Irving preenche formulários até desmaiar e acorda dentro de uma caixa de arquivo morto.",
               vida: -12, vai: "caixa-papelao", p: { "hora-errada": 2, "dia-errado": 1 }, cara: "cansado" } },

    { t: "Cochilar na cadeira de espera",
      r: "A cadeira é dura, mas o tédio é macio. O Irving sonha com mistos e acorda na própria cama, com a senha 847 grudada na bochecha.",
      vai: "cama-irving", p: { sono: 2, "hora-errada": 1 }, cara: "cansado" },

    { t: "Trocar de senha com um estranho",
      r: "Um homem de óculos escuros troca a 848 pela 847 e some. No verso da senha nova está escrito: 'Beco, 10h'. Curioso, o Irving vai até lá.",
      vai: "beco-perigoso", p: { prisao: 3 }, cara: "confuso" },

    { t: "Escrever no livro de reclamações",
      r: "Catorze páginas de reclamação épica. O gerente, comovido até as lágrimas, convida o Irving a apresentá-la numa reunião da ONU.",
      vai: "reuniao-onu", p: { "dia-errado": 2, "rei-misto": 1 } },

    { t: "Organizar a fila por ordem alfabética",
      r: "Nada de senha: agora é por nome! A fila vira revolução. Metade do banco sai às ruas protestando a favor, a outra metade, contra.",
      vai: "protesto", p: { "dia-errado": 2, "rei-misto": 1 }, cara: "determinado" },

    { t: "Passar pela porta giratória",
      r: "A porta trava, destrava e gira sem parar. O Irving roda, roda, roda... Quando finalmente sai, está num corredor de hospital, sem lembrar quem é.",
      vai: "hospital", vida: -5, p: { amnesia: 2 }, cara: "confuso" },

    { t: "Olhar o relógio da parede",
      r: "9h01. De novo. O relógio está parado ou o tempo está? Plim! 'Senha 12'. Tudo se repete, a luz pisca e o banco inteiro some no escuro.",
      vai: "lugar-escuro", p: { matrix: 2, "hora-errada": 1 }, cara: "assustado" },

    { t: "Apitar pra fila andar",
      precisa: "apito",
      r: "Priiii! O gerente acha que é o juiz chegando e manda o Irving apitar a final do campeonato no estádio ao lado. Ele vai, de apito em punho.",
      vai: "campo-futebol", p: { famoso: 1, "rei-misto": 1 } },

    { t: "Aceitar a vez que o fã oferece",
      precisaMarca: "famoso-tv",
      r: "'É o moço da TV!' Uma senhora cede a vez, a fila inteira pede selfie e a senha 847 é atendida em três minutos. O Irving sai pra rua aclamado.",
      vai: "rua-irving", p: { feliz: 2, famoso: 1 }, cara: "feliz" },

    { t: "Esperar a 847 custe o que custar",
      cenaMin: 4,
      r: "Plim! 'Senha 847!' O Irving é atendido às 12h50 e corre até a padaria como um raio. O relógio da parede marca 13h em ponto.",
      fim: "hora-errada", cara: "cansado" },
  ],
};

CENAS["programa-auditorio"] = {
  chegadas: [
    "Luzes piscando, plateia gritando e um apresentador de terno brilhante berrando o nome do Irving. É domingo, é ao vivo, e ele virou participante sem querer.",
    "A plateia grita, as dançarinas rodopiam e notas de dinheiro voam como aviõezinhos pelo estúdio. O Irving está no palco de um programa de auditório.",
  ],
  opcoes: [
    { t: "Girar a roleta dos prêmios",
      risco: 9,
      r: "A roleta para em 'CAFÉ DA MANHÃ COMPLETO'! Confetes! Uma limusine leva o Irving até um set com a mesa de café mais perfeita do mundo.",
      vai: "comercial-margarina", p: { feliz: 3 }, cara: "feliz",
      falha: { r: "A roleta para em 'VIAGEM SURPRESA'. O Irving é vendado e empurrado pra algum lugar. Quando tira a venda, está num avião, acima das nuvens.",
               vida: -12, vai: "aviao", p: { "onde-estou": 1, amnesia: 1 }, cara: "assustado" } },

    { t: "Pegar uma nota voando",
      r: "O Irving salta como um goleiro e agarra uma nota de 100 reais no ar. A plateia vai à loucura. O apresentador pede mais uma salva de palmas.",
      vai: "fica", ganha: "100-reais", p: { famoso: 1 }, cara: "feliz" },

    { t: "Responder o quiz valendo um misto",
      risco: 14,
      r: "'Quanto é dois mais dois?' 'Misto quente!' Resposta certa, por algum motivo. O Irving ganha o prêmio máximo: um misto quente embrulhado em papel dourado.",
      vai: "fica", ganha: "misto-quente", p: { feliz: 2, "rei-misto": 1 }, cara: "feliz",
      falha: { r: "'Qual a capital da Mongólia?' O Irving entra em pane. Informação demais, luz demais. Ele desmaia e acorda num corredor de hospital.",
               vida: -15, vai: "hospital", p: { amnesia: 2 }, cara: "confuso" } },

    { t: "Cantar no palco",
      r: "O Irving solta a voz. A plateia chora, o apresentador chora, até o câmera chora. Uma produtora o leva na hora pra gravar num karaokê.",
      vai: "karaoke", marca: "famoso-tv", p: { famoso: 2 }, cara: "feliz" },

    { t: "Dançar com as dançarinas",
      r: "O Irving entra na coreografia e acerta todos os passos por pura sorte. Faz tanto sucesso que é contratado pra animar um casamento.",
      vai: "casamento", p: { filosofico: 1, famoso: 1 }, cara: "feliz" },

    { t: "Perguntar se é pegadinha",
      r: "O apresentador congela. A plateia congela. As câmeras congelam. Só o Irving se mexe. As luzes se apagam uma a uma, até sobrar o escuro.",
      vai: "lugar-escuro", p: { matrix: 3 }, cara: "assustado" },

    { t: "Mandar um beijo pra mãe na câmera",
      r: "'Beijo, mãe!' A câmera acena de volta. A imagem chia e o Irving é sugado pra dentro da TV, direto no meio de uma novela mexicana.",
      vai: "novela-mexicana", p: { matrix: 2 }, cara: "confuso" },

    { t: "Fazer a plateia gritar 'MISTO!'",
      r: "'MIS-TO! MIS-TO!' Trezentas pessoas obedecem ao Irving. O poder sobe à cabeça, e um diplomata na plateia o convida pra discursar na ONU.",
      vai: "reuniao-onu", p: { "rei-misto": 3 }, cara: "determinado" },

    { t: "Mergulhar na piscina de espuma",
      r: "O Irving mergulha atrás da chave do carro-prêmio e nada muito, muito longe. Emerge no meio de uma aula de hidroginástica da terceira idade.",
      vai: "hidroginastica", p: { filosofico: 1, famoso: 1 } },

    { t: "Pedir ajuda à plateia",
      r: "Todos gritam ao mesmo tempo. O Irving escolhe a voz mais confiante: 'Sobe no elefante!' Por algum motivo, há um elefante no estúdio. Ele sobe.",
      vai: "elefante", p: { banana: 2, matrix: 1 }, cara: "confuso" },

    { t: "Fugir pelos bastidores",
      r: "Atrás da cortina, um labirinto de cabos e cenários de papelão. O Irving corre até a última porta e pula no primeiro carro que encosta: um Uber.",
      vai: "uber", p: { "onde-estou": 1, "hora-errada": 1 } },

    { t: "Desfilar com o chapéu maneiro",
      precisa: "chapeu",
      r: "O chapéu é tão maneiro que o júri dá nota 10. O prêmio é uma viagem ao espaço, com decolagem imediata. O Irving acena da escada do foguete.",
      vai: "estacao-espacial", p: { "alem-tempo": 2, famoso: 1 }, cara: "feliz" },

    { t: "Encarar a câmera em silêncio",
      cenaMin: 5,
      r: "O Irving encara a câmera. Do outro lado, alguém encara de volta. Não há padaria. Não há misto. Só um roteiro, e ele está nele.",
      fim: "matrix", cara: "confuso" },
  ],
};
