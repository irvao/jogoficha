// =====================================================================
//  HISTÓRIA: Beco perigoso, Oficina mecânica, Sorveteria, Caixa de papelão,
//            Carro do Irving, Novela mexicana, Xique-Xique e Lugar escuro (lugares 10 a 17)
//  Formato de cada opção: veja o guia em ferramentas/GUIA-HISTORIA.md
// =====================================================================

CENAS["beco-perigoso"] = {
  chegadas: [
    "Um beco estreito, úmido e mal iluminado. Um gato de um olho só vigia o Irving. Ao fundo, alguém assobia uma melodia ameaçadora. Até os ratos andam em dupla aqui.",
    "O beco perigoso! Grafites de caveira, uma lata de lixo que se mexe sozinha e três sombras encostadas na parede. O herói engole seco e segura firme a câmera.",
  ],
  opcoes: [
    { t: "Perguntar às sombras pela padaria",
      r: "As três sombras cochicham e apontam juntas: \"Segue o cheiro, parceiro.\" O aroma de pão guia o Irving até uma loja cheia de fornos e masseiras.",
      vai: "loja-eletro-padaria", p: { feliz: 2, filosofico: 1 }, cara: "feliz" },

    { t: "Aceitar o pacote do homem de capuz",
      r: "Um encapuzado entrega um pacote e sussurra: \"Entra no carro.\" O Irving, educado demais pra recusar, entra. As portas travam com um clique sinistro.",
      vai: "encapuzado-carro", p: { prisao: 3 }, cara: "assustado" },

    { t: "Fotografar a lata de lixo que se mexe",
      r: "Flash! A lata solta um miado ofendido. O gato caolho sai de dentro e, com desprezo, deixa pra trás uma caixa de fósforos.",
      vai: "fica", ganha: "fosforos", p: { "quase-feliz": 2 }, cara: "confuso" },

    { t: "Correr pelo beco sem olhar pra trás",
      risco: 11,
      r: "Pernas de herói! O Irving pula três caixotes e sai do outro lado do beco, bem na porta de uma fábrica que cheira a chocolate.",
      vai: "fabrica-chocolate", p: { feliz: 3 }, cara: "determinado",
      falha: { r: "Ele tropeça, cai numa carrocinha de tomates e desce a ladeira junto com ela. Para no meio de uma feira, todo amassado.",
               vida: -15, vai: "feira", p: { "quase-feliz": 2, amnesia: 1 } } },

    { t: "Pular o muro no fim do beco",
      risco: 9,
      r: "Salto majestoso! Do outro lado, um canavial sem fim. O Irving está livre das sombras. E completamente perdido.",
      vai: "canavial", p: { "onde-estou": 2 }, cara: "determinado",
      falha: { r: "O Irving fica pendurado no muro bem quando passa uma viatura. Explicar não adianta. O dia termina atrás das grades.",
               vida: -12, vai: "prisao", p: { prisao: 2 }, marca: "procurado" } },

    { t: "Entrar na porta escrito \"Não entre\"",
      r: "Placas existem pra ser desafiadas. O Irving gira a maçaneta, dá um passo, e a porta some atrás dele. Escuridão total.",
      vai: "lugar-escuro", p: { matrix: 2, prisao: 1 }, cara: "assustado" },

    { t: "Fazer amizade com as três sombras",
      r: "As sombras são só três tiozinhos esperando o karaokê abrir. Eles adotam o Irving na hora e o arrastam pra dentro, já cantando.",
      vai: "karaoke", p: { filosofico: 2, famoso: 1 }, cara: "feliz" },

    { t: "Pagar a taxa do valentão",
      precisa: "100-reais", perde: "100-reais",
      r: "O valentão conta o dinheiro, faz uma reverencia e entrega um apito: 'Se precisar, apita.' Depois leva o Irving ao ringue onde luta aos domingos.",
      vai: "luta-boxe", ganha: "apito", p: { "rei-misto": 1, famoso: 1 } },

    { t: "Ameaçar os bandidos com a banana",
      precisa: "banana", perde: "banana",
      r: "O Irving saca a banana no escuro como uma arma lendária. As sombras fogem gritando. Nunca uma fruta que ele odeia lhe deu tanto orgulho.",
      vai: "fica", p: { banana: 2, "rei-misto": 1 }, cara: "determinado" },

    { t: "Se esconder numa caixa de papelão",
      r: "Uma caixa abandonada oferece abrigo. O Irving entra e se encolhe. Lá dentro é quentinho. Talvez quentinho demais.",
      vai: "caixa-papelao", p: { sono: 2 }, cara: "cansado" },

    { t: "Gritar por socorro com voz de tenor",
      r: "O grito é tão afinado que uma equipe de TV aparece correndo: \"Achamos o convidado surpresa!\" Em minutos, ele está num palco sob holofotes.",
      vai: "programa-auditorio", p: { famoso: 1, matrix: 1 }, cara: "assustado" },

    { t: "Se entregar à polícia só por garantia",
      cenaMin: 5,
      r: "Sem ter feito nada, o Irving marcha até a delegacia e confessa tudo o que não fez. O delegado, confuso, aceita. Pelo menos lá dentro é seguro.",
      fim: "prisao", cara: "triste" },
  ],
};

CENAS["oficina-mecanica"] = {
  chegadas: [
    "Uma oficina mecânica ecoa com o som sagrado das chaves de boca. Um carro flutua no elevador como um trono. Seu Zé, o mecânico, limpa as mãos num pano mais sujo que as mãos.",
    "Cheiro de graxa e de café requentado. Moda de viola no rádio, um calendário de 2009 na parede e um orçamento que ninguém ousa ler. Eis a oficina, templo dos motores.",
  ],
  opcoes: [
    { t: "Seguir o cheiro da marmita do Seu Zé",
      r: "É pão na chapa! Seu Zé revela, de boca cheia: 'Comprei na padaria ali perto.' E devolve uma chave: é o carro do Irving, consertado há meses!",
      vai: "carro-irving", p: { feliz: 2 }, cara: "feliz" },

    { t: "Deitar no carrinho de mecânico",
      r: "O Irving desliza pra baixo do carro. Lá é escuro, fresco e silencioso. Ele fecha os olhos um segundinho e acorda na própria cama, cobertinho.",
      vai: "cama-irving", p: { sono: 2 }, cara: "cansado" },

    { t: "Subir no carro do elevador",
      risco: 11,
      r: "Lá do alto, o Irving faz um discurso sobre o valor da graxa. Os mecânicos aplaudem de pé e o coroam com uma calota. Rei da oficina!",
      vai: "fica", p: { "rei-misto": 3 }, cara: "feliz",
      falha: { r: "O elevador desce de repente. O carro sai rolando pela rua com o Irving no teto e só para na cabine de um pedágio.",
               vida: -15, vai: "pedagio", p: { "hora-errada": 2 } } },

    { t: "Levar a máquina de lavar esquecida",
      r: "No canto, uma máquina de lavar cheia de fios e botões piscando. \"Deixaram pra consertar e nunca voltaram\", diz Seu Zé. O Irving leva. Pesa como um século.",
      vai: "fica", ganha: "maquina-do-tempo", p: { "antes-tempo": 2, "alem-tempo": 1 }, cara: "confuso" },

    { t: "Pegar carona no guincho",
      r: "O guincho parte e o Irving vai junto, agarrado na corda de reboque. Só solta quando o caminhão para diante de uma balsa. A corda fica de lembrança.",
      vai: "balsa", ganha: "corda", p: { "hora-errada": 1, "onde-estou": 1 } },

    { t: "Pedir um orçamento",
      r: "Seu Zé coça a cabeça: \"Fica 3 mil, só no boleto.\" O Irving nem tem carro ali, mas vai pagar no banco mesmo assim. A fila dá duas voltas no quarteirão.",
      vai: "fila-banco", p: { "hora-errada": 2, "dia-errado": 1 }, cara: "confuso" },

    { t: "Pagar o conserto de uma senhora",
      precisa: "100-reais", perde: "100-reais",
      r: "Uma senhora chora: o fusca dela ficou caro demais. O Irving paga a diferença. Emocionada, ela o leva junto pro compromisso sagrado dela, que é agora!",
      vai: ["casamento", "hidroginastica"], p: { filosofico: 3 }, cara: "feliz" },

    { t: "Colar o para-choque com fita crepe",
      precisa: "fita-crepe",
      r: "O Irving aplica a fita com precisão cirúrgica. Seu Zé chora de emoção e lhe dá o chapéu mais maneiro da oficina: \"Você é dos nossos.\"",
      vai: "fica", ganha: "chapeu", p: { filosofico: 1, "rei-misto": 1 }, cara: "feliz" },

    { t: "Cantar a moda de viola do rádio",
      r: "A voz do Irving ecoa tão bonita que um caminhoneiro freia: \"Precisamos de um locutor no leilão!\" E lá vai o herói, rumo ao leilão de gado.",
      vai: "leilao-gado", p: { famoso: 2, "rei-misto": 1 } },

    { t: "Conferir o estepe no porta-malas",
      r: "O Irving entra no porta-malas de um sedã preto pra inspecionar. A tampa fecha. Alguém bate a porta do motorista. Tudo fica escuro.",
      vai: "lugar-escuro", p: { matrix: 2, prisao: 1 }, cara: "assustado" },

    { t: "Fazer o test drive do carro consertado",
      risco: 9,
      r: "O motor ronca como um dragão. O Irving percebe, emocionado, que o carro consertado é o dele mesmo! Senta ao volante, pronto pra padaria.",
      vai: "carro-irving", p: { feliz: 2 }, cara: "feliz",
      falha: { r: "O carro dispara sozinho, invade um campo de futebol e para no meio de uma final. O juiz apita. O Irving agora é o centroavante.",
               vida: -12, vai: "campo-futebol", p: { "rei-misto": 1 } } },

    { t: "Pedir pra calibrar os tênis",
      r: "Seu Zé calibra os tênis com 40 libras. Cada passo vira um pulo gigante. O último arremessa o Irving tão alto que ele pousa numa estação espacial.",
      vai: "estacao-espacial", vida: -5, p: { "alem-tempo": 3 }, cara: "assustado" },
  ],
};

CENAS["sorveteria"] = {
  chegadas: [
    "Uma sorveteria colorida como um arco-íris derretido. Quarenta e oito sabores repousam no balcão, cada um mais suspeito que o outro. O sorveteiro sorri com a calma de quem sabe demais.",
    "Sinos tocam na porta. Luz neon rosa, cheiro de casquinha e um freezer que zumbe como um dragão adormecido. No cardápio, em letras douradas: sabor Misto Quente (em teste).",
  ],
  opcoes: [
    { t: "Pedir o sabor Misto Quente",
      risco: 11,
      r: "Milagre gelado: tem o gosto exato de um misto! Inspirado, o Irving sente o chamado do pão verdadeiro e marcha porta afora rumo à padaria.",
      vai: "rua-irving", p: { feliz: 3 }, cara: "feliz",
      falha: { r: "Presunto gelado com... banana. O Irving desmaia de desgosto e acorda num hospital, com uma casquinha na mão.",
               vida: -15, vai: "hospital", p: { banana: 2, amnesia: 1 } } },

    { t: "Provar os 48 sabores",
      r: "No sabor 31, o cérebro congela. No 48, o Irving já não lembra o próprio nome. Acorda num avião, com uma colherzinha na boca.",
      vai: "aviao", vida: -8, p: { amnesia: 2, banana: 1 }, cara: "confuso" },

    { t: "Pedir banana split sem banana",
      r: "O sorveteiro se ofende: \"Sem banana não existe split!\" Por garantia, serve a banana à parte, embrulhada, pra viagem.",
      vai: "fica", ganha: "banana", p: { banana: 3 }, cara: "bravo" },

    { t: "Dar sorvete ao cachorro da porta",
      r: "Um cachorro de olhos pidões ganha uma bola de baunilha. Grato, ele guia o Irving pelas ruas até uma feira barulhenta, abanando o rabo.",
      vai: "feira", p: { "quase-feliz": 2, filosofico: 1 }, cara: "feliz" },

    { t: "Pagar sorvete pra todo mundo",
      precisa: "100-reais", perde: "100-reais",
      r: "\"É por minha conta!\" A sorveteria explode em aplausos. Uma excursão de peruanos que estava na fila adota o Irving como líder espiritual.",
      vai: "excursao-peruanos", marca: "amigo-peruanos", p: { filosofico: 2, "rei-misto": 1 }, cara: "feliz" },

    { t: "Entrar no freezer pra se refrescar",
      r: "A porta bate. O Irving congela como um astronauta criogênico e desperta séculos depois, flutuando numa estação espacial.",
      vai: "estacao-espacial", vida: -10, p: { "alem-tempo": 3 }, cara: "assustado" },

    { t: "Perguntar de onde vêm as casquinhas",
      r: "O sorveteiro sussurra: \"Da mesma fábrica que faz o pão das padarias.\" O Irving segue o caminhão de entregas até um forno gigantesco.",
      vai: "forno-gigante", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Montar uma torre de 12 bolas",
      risco: 13,
      r: "Doze bolas, equilíbrio perfeito! Uma equipe de TV grava tudo e leva o Irving direto pra um programa de auditório. Herói nacional!",
      vai: "programa-auditorio", marca: "famoso-tv", p: { famoso: 2, "rei-misto": 1 }, cara: "feliz",
      falha: { r: "A torre desaba sobre o Irving. Coberto de sorvete, ele escorrega porta afora, ladeira abaixo, até um bairro que nunca viu.",
               vida: -12, vai: "bairro-desconhecido", p: { "onde-estou": 2 } } },

    { t: "Jogar alpiste pros pardais da calçada",
      precisa: "alpiste", perde: "alpiste",
      r: "Uma revoada de pardais agradecidos desce, agarra o Irving pelos braços e o ergue aos céus como um santo de procissão.",
      vai: "carregado-passaros", p: { milagre: 3 }, cara: "assustado" },

    { t: "Pedir um talher",
      r: "Por algum motivo, o sorveteiro entrega um garfo. O Irving tenta tomar o sorvete com ele por vinte minutos. Desiste, mas guarda o garfo por respeito.",
      vai: "fica", ganha: "garfo", p: { "hora-errada": 1, "quase-feliz": 1 }, cara: "confuso" },

    { t: "Dividir o sorvete com o elefante",
      r: "Um elefante lambe a vitrine do sabor amendoim. O Irving oferece a casquinha. O elefante aceita, agradece com a tromba e o põe nas costas.",
      vai: "elefante", p: { banana: 3 }, cara: "feliz" },

    { t: "Provar o sabor Xique-Xique, Bahia",
      r: "Caju, calor e mistério. Na primeira lambida, um sol escaldante queima a nuca do Irving. Ele abre os olhos na entrada de Xique-Xique.",
      vai: "xique-xique", p: { banana: 2, "onde-estou": 1 }, cara: "confuso" },

    { t: "Perguntar o sabor do dia",
      r: "'Hoje é Dia do Padeiro, então é sabor pão francês!' Nenhuma padaria abre hoje, avisa o sorveteiro. O Irving sai correndo pra conferir e cai no meio de uma passeata.",
      vai: "protesto", p: { "dia-errado": 3 }, cara: "assustado" },
  ],
};

CENAS["caixa-papelao"] = {
  chegadas: [
    "O interior de uma caixa de papelão. Escuro, apertado e estranhamente aconchegante. Lá fora, uma voz diz: \"Frágil, este lado pra cima.\" O Irving está de cabeça pra baixo.",
    "Paredes de papelão, cheiro de mudança e silêncio absoluto. É o esconderijo perfeito. Também é, talvez, uma encomenda a caminho de algum lugar.",
  ],
  opcoes: [
    { t: "Rasgar a caixa e sair",
      r: "Com a fúria de um gladiador, o Irving rasga o papelão! A luz entra, e ele está na calçada, livre e faminto de misto.",
      vai: "rua-irving", p: { feliz: 2 }, cara: "determinado" },

    { t: "Tirar um cochilo estratégico",
      r: "O papelão abraça o Irving. Ele sonha com misto. Ao acordar, a caixa foi fechada com fita e está balançando. O rolo de fita crepe ficou lá dentro.",
      ganha: "fita-crepe", vai: "fica", p: { sono: 2 }, cara: "cansado" },

    { t: "Fingir que é uma encomenda",
      r: "O Irving fica imóvel (nisso ele é ótimo). Um carteiro o pesa, cola um selo e despacha. Quando a caixa abre, ele está no porão de um avião.",
      vai: "aviao", p: { sono: 1, "onde-estou": 1 }, cara: "neutro" },

    { t: "Gritar \"Tem gente aqui dentro!\"",
      r: "A caixa é aberta num palanque. O leiloeiro anuncia: \"Lote 12: um homem de boné, com câmera!\" Alguém na plateia dá o primeiro lance.",
      vai: "leilao-gado", p: { "rei-misto": 1, matrix: 1 }, cara: "assustado" },

    { t: "Desenhar uma janela na caixa",
      r: "O Irving desenha uma janela e espia. Do outro lado, uma novela. Uma mulher de vestido vermelho abre a caixa: \"¡Ricardo, eres tú!\"",
      vai: "novela-mexicana", p: { matrix: 2 }, cara: "confuso" },

    { t: "Transformar a caixa num carro",
      risco: 9,
      r: "Com imaginação de criança de sete anos, a caixa vira um carro de corrida. O Irving pedala com os pés de fora e só freia dentro de uma loja cheia de vitrines.",
      vai: ["loja-eletro-padaria", "loja-patinetes"], p: { feliz: 3 }, cara: "feliz",
      falha: { r: "A caixa-carro desce uma ladeira sem freio, voa sobre um barranco e aterrissa no meio de um canavial.",
               vida: -15, vai: "canavial", p: { "onde-estou": 2 } } },

    { t: "Soprar o apito lá de dentro",
      precisa: "apito",
      r: "Píiií! Um guarda abre a caixa, jura que o Irving é um mágico e o leva direto a um palco de karaokê pra fazer o número de encerramento.",
      vai: "karaoke", p: { famoso: 2 }, cara: "feliz" },

    { t: "Acender um fósforo pra ver melhor",
      precisa: "fosforos", perde: "fosforos",
      r: "Luz! Na parede alguém escreveu: \"Você já esteve aqui antes.\" O déjà vu é tão forte que o fósforo apaga sozinho, e tudo fica ainda mais escuro.",
      vai: "lugar-escuro", p: { matrix: 3 }, cara: "assustado" },

    { t: "Tatear o fundo da caixa",
      r: "Tateando, o Irving encontra uma peruca linda e sedosa, esquecida de alguma mudança. Ele a veste. Fica deslumbrante, mesmo no escuro.",
      vai: "fica", ganha: "peruca", p: { famoso: 1 }, cara: "feliz" },

    { t: "Escrever \"Frágil\" na própria testa",
      r: "Uma ambulância passa, lê a testa e recolhe o Irving com todo o cuidado. Ele é levado, embrulhado em plástico bolha, até um prédio cheio de jalecos.",
      vai: ["hospital", "conferencia-dermatologia"], p: { amnesia: 1, sono: 1 }, cara: "confuso" },

    { t: "Rolar a caixa ladeira abaixo",
      risco: 11,
      r: "A caixa rola como um barril épico e para no meio de um casamento. Os noivos acham que é presente. O Irving sai e é aplaudido de pé.",
      vai: "casamento", p: { filosofico: 3 }, cara: "feliz",
      falha: { r: "A caixa rola, cai num rio e segue boiando até algo gigantesco abrir a boca. Nhac. É a barriga de uma baleia.",
               vida: -18, vai: "dentro-baleia", p: { amnesia: 1, "onde-estou": 1 } } },

    { t: "Morar na caixa pra sempre",
      cenaMin: 5,
      r: "O Irving decide: aqui é o lar. Ajeita um travesseiro de plástico bolha e dorme o sono dos justos. A padaria que espere.",
      fim: "sono", cara: "cansado" },
  ],
};

CENAS["carro-irving"] = {
  chegadas: [
    "O fiel corcel de quatro rodas! Banco no formato exato do Irving, aromatizante de pinho vencido e uma moeda de 25 centavos no porta-copos. O motor aguarda o comando do herói.",
    "O Irving está no próprio carro. O painel acende luzes que ele nunca viu. O GPS pisca \"Recalculando\" mesmo parado. No banco de trás, uma sacola misteriosa.",
  ],
  opcoes: [
    { t: "Dirigir direto pra padaria",
      r: "O herói engata a primeira com determinação! Mas, entre ele e a padaria, surge um pedágio. Ele chega à cabine cheio de fé e sem trocado.",
      vai: "pedagio", p: { feliz: 2, "hora-errada": 1 }, cara: "determinado" },

    { t: "Seguir o GPS sem questionar",
      r: "\"Vire à esquerda. Agora à direita. Agora na rotatória.\" São 47 rotatórias. \"Você chegou ao seu destino.\" É Osasco. Não chegou.",
      vai: "osasco", p: { "onde-estou": 2 }, cara: "confuso" },

    { t: "Abrir a sacola do banco de trás",
      r: "Dentro, um bouquet de flores fresquinho com um cartão: \"Para a noiva.\" O Irving não lembra de ter noiva. Guarda mesmo assim.",
      vai: "fica", ganha: "bouquet", p: { filosofico: 1, amnesia: 1 }, cara: "confuso" },

    { t: "Seguir o carro preto misterioso",
      r: "Um carro preto pisca o farol. O Irving o segue como num filme de espionagem. No semáforo, um encapuzado acena: \"Entra aqui.\" Ele entra.",
      vai: "encapuzado-carro", p: { prisao: 3 }, cara: "assustado" },

    { t: "Ligar o rádio",
      r: "Só pega uma estação: uma radionovela mexicana. \"¡Dios mío!\" O grito ecoa, o carro some, e o Irving está no meio de um set de novela.",
      vai: "novela-mexicana", p: { matrix: 2 }, cara: "assustado" },

    { t: "Fazer uma baliza perfeita",
      risco: 13,
      r: "Baliza de primeira, sem encostar! Uma multidão aplaude, e um empresário de boxe, impressionado com os reflexos, contrata o Irving pra luta principal da noite.",
      vai: "luta-boxe", marca: "campeao", p: { "rei-misto": 3 }, cara: "feliz",
      falha: { r: "O carro sobe na calçada, derruba uma barraca de bananas e precisa ser rebocado até a oficina. O Irving desce com uma penca no colo.",
               vida: -12, vai: "oficina-mecanica", p: { prisao: 1, banana: 1 } } },

    { t: "Reclinar o banco e cochilar",
      r: "O banco reclina até o fim. E mais um pouco. E mais. O Irving desliza por um túnel de estofado e aterrissa na própria cama.",
      vai: "cama-irving", p: { sono: 2 }, cara: "cansado" },

    { t: "Entrar no drive-thru do banco",
      r: "Existe drive-thru de banco? Existe. Anda um metro por hora. O Irving desce pra resolver lá dentro, e a fila de dentro é pior.",
      vai: "fila-banco", p: { "hora-errada": 2, "dia-errado": 1 }, cara: "cansado" },

    { t: "Abastecer com os 100 reais",
      precisa: "100-reais", perde: "100-reais",
      r: "Tanque cheio, alma cheia! O frentista, grato pela gorjeta, ensina um atalho secreto pra padaria. O atalho passa por dentro de uma fábrica de chocolate.",
      vai: "fabrica-chocolate", p: { feliz: 3 }, cara: "feliz" },

    { t: "Investigar o barulho do motor",
      r: "\"Tec, tec, PUM.\" O Irving para na oficina mais próxima, onde um mecânico já o esperava, como quem conhece uma antiga profecia.",
      vai: "oficina-mecanica", p: { "hora-errada": 1 }, cara: "confuso" },

    { t: "Pisar fundo na estrada",
      risco: 11,
      r: "O carro vira um cometa! Em minutos, o Irving freia diante de um forno do tamanho de um prédio. O cheiro de pão é divino.",
      vai: "forno-gigante", p: { feliz: 3 }, cara: "determinado",
      falha: { r: "O carro voa por uma rampa e aterrissa numa balsa que já estava partindo. A travessia dura duas horas.",
               vida: -12, vai: "balsa", p: { "hora-errada": 2 } } },

    { t: "Buzinar sem motivo",
      r: "Bi-bi! Outros 200 carros buzinam junto. Nasce um buzinaço. Em minutos, o Irving lidera um protesto que nem sabe do que se trata.",
      vai: "protesto", p: { "dia-errado": 2, "rei-misto": 1 }, cara: "confuso" },
  ],
};

CENAS["novela-mexicana"] = {
  chegadas: [
    "Violinos dramáticos. Uma mansão de cortinas de veludo. Uma mulher de vestido vermelho aponta para o Irving: \"¡Carlos Eduardo! ¡Estás vivo!\" Ele não é o Carlos Eduardo. Ou é?",
    "O Irving está dentro de uma novela mexicana. Tudo em câmera lenta. Um casal se abraça na escadaria, a vilã sorri atrás do vaso, e o zoom dramático vem direto no rosto dele.",
  ],
  opcoes: [
    { t: "Assumir que é o Carlos Eduardo",
      r: "O Irving aceita o destino. Carlos Eduardo tem uma fazenda, três ex-noivas e um irmão gêmeo malvado. O gêmeo acaba de entrar pela porta.",
      vai: "fica", p: { matrix: 2, amnesia: 1 }, cara: "confuso" },

    { t: "Enfrentar o gêmeo malvado",
      risco: 11,
      r: "Duelo de olhares em câmera lenta! O gêmeo arranca o bigode falso e foge. A avó revela: \"Somos de sangue real inglês!\" Um retrato se abre como portal.",
      vai: "inglaterra-medieval", p: { "rei-misto": 1, "antes-tempo": 2 }, cara: "determinado",
      falha: { r: "O gêmeo dá um tapa dramático, filmado de três ângulos. O Irving rola escada abaixo e acorda num hospital, com amnésia de novela.",
               vida: -15, vai: "hospital", p: { amnesia: 3 } } },

    { t: "Fingir amnésia de novela",
      r: "O Irving põe a mão na testa: \"¿Quién soy yo?\" Atua tão bem que esquece de verdade. Acorda num avião, sem saber pra onde vai.",
      vai: "aviao", p: { amnesia: 2, matrix: 1 }, cara: "confuso" },

    { t: "Pedir a mocinha em casamento",
      precisa: "bouquet", perde: "bouquet",
      r: "O Irving se ajoelha com o bouquet. \"¡Sí, mi amor!\" Violinos, lágrimas, fogos. Em segundos, estão todos numa igreja de verdade.",
      vai: "casamento", p: { filosofico: 3 }, cara: "feliz" },

    { t: "Perguntar à empregada pela padaria",
      r: "A empregada, que sabe todos os segredos da mansão, sussurra: \"Fica depois dos comerciais.\" Corta! O Irving está num comercial de margarina.",
      vai: "comercial-margarina", p: { feliz: 2, matrix: 1 }, cara: "feliz" },

    { t: "Gritar \"¡Dios mío!\" pra câmera",
      r: "O grito é tão perfeito que o diretor chora. O Irving é contratado na hora e levado a um programa de auditório pra dar entrevista.",
      vai: "programa-auditorio", marca: "famoso-tv", p: { famoso: 2 }, cara: "feliz" },

    { t: "Olhar direto pra câmera",
      r: "O Irving encara a lente. A novela congela. Aparece na tela: \"Sin señal\". E tudo fica preto.",
      vai: "lugar-escuro", p: { matrix: 3 }, cara: "assustado" },

    { t: "Revelar o segredo da vilã",
      r: "\"Foi ela que trocou os bebês!\" A vilã responde com um tapa dramático e chama a polícia. Reviravolta: quem sai algemado é o Irving.",
      vai: "prisao", vida: -5, p: { prisao: 2, matrix: 1 }, cara: "bravo" },

    { t: "Se esconder atrás da cortina",
      r: "Atrás da cortina há um corredor secreto. Atrás dele, outra cortina. E outra. Na décima, o Irving sai num galpão cheio de bois, com uma plaquinha na mão.",
      vai: "leilao-gado", p: { "onde-estou": 2 }, cara: "confuso" },

    { t: "Cantar a música de abertura",
      r: "O Irving solta a voz na abertura, com vibrato e tudo. Os créditos sobem, e ele se vê num karaokê, ainda com o microfone na mão.",
      vai: "karaoke", p: { famoso: 2 }, cara: "feliz" },

    { t: "Pegar o chapéu do fazendeiro",
      r: "Um fazendeiro de bigode deixa o chapéu no cabide e sai em câmera lenta. O Irving o pega. Fica tão bem que a trilha sonora muda sozinha.",
      vai: "fica", ganha: "chapeu", p: { famoso: 1, "rei-misto": 1 }, cara: "feliz" },

    { t: "Fugir a cavalo pela janela",
      risco: 9,
      r: "Um cavalo branco espera na janela, como manda o roteiro. O Irving galopa pelo pôr do sol até uma quermesse animada no fim do capítulo.",
      vai: "quermesse", p: { feliz: 1, famoso: 1 }, cara: "determinado",
      falha: { r: "O cavalo era cenográfico, de papelão. O Irving despenca da janela. \"Continuará...\" Ele acorda dentro de uma caixa.",
               vida: -15, vai: "caixa-papelao", p: { amnesia: 1, sono: 1 } } },
  ],
};

CENAS["xique-xique"] = {
  chegadas: [
    "Eis o portal: \"Bem-vindo a Xique-Xique, Bahia.\" O sol castiga como um deus antigo. O Rio São Francisco brilha ao longe. O Irving sente que já viu este lugar em mil memes.",
    "Xique-Xique, Bahia! Quarenta graus à sombra, e não há sombra. Um bode observa o Irving com ar de sábio. Ao longe, alguém grita o nome da cidade só pelo prazer de falar.",
  ],
  opcoes: [
    { t: "Tirar foto na placa da cidade",
      r: "Clique! A foto viraliza em quatro segundos. Um milhão de curtidas. O povo já aponta na rua: \"Olha o moço do meme!\"",
      vai: "fica", marca: "famoso-tv", p: { famoso: 2 }, cara: "feliz" },

    { t: "Perguntar ao bode onde tem padaria",
      r: "O bode encara o Irving longamente e sai andando. O herói segue. Sábio, o bode o leva até uma feira com uma barraca de pão caseiro.",
      vai: "feira", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Mergulhar no Rio São Francisco",
      risco: 11,
      r: "Mergulho heroico no Velho Chico! O Irving emerge no meio de uma turma de hidroginástica, que o adota como neto na hora.",
      vai: "hidroginastica", p: { filosofico: 3 }, cara: "feliz",
      falha: { r: "A correnteza leva o Irving rio abaixo, rio acima, rio adentro. Algo enorme abre a boca. Tudo escurece: é uma baleia. No rio. Não pergunte.",
               vida: -18, vai: "dentro-baleia", p: { amnesia: 1, "onde-estou": 1 } } },

    { t: "Esperar a balsa do Velho Chico",
      r: "'A balsa sai daqui a pouco.' Um vendedor dá de brinde um hidratante pro sol. Em Xique-Xique, 'daqui a pouco' dura três horas. Hidratadíssimo, o Irving embarca.",
      ganha: "hidratante", vai: "balsa", p: { "hora-errada": 2 }, cara: "cansado" },

    { t: "Pedir algo gelado na barraca",
      r: "\"Só tem banana congelada, meu rei. É o que refresca aqui.\" O Irving aceita por educação. Detesta. Guarda no bolso.",
      vai: "fica", ganha: "banana", p: { banana: 3 }, cara: "bravo" },

    { t: "Seguir o eco de \"Xique-Xique!\"",
      r: "Alguém grita o nome da cidade e o eco responde de todo lado. O Irving segue o som por horas, até Massachusetts. O eco ainda responde, com sotaque.",
      vai: "massachusetts", p: { "onde-estou": 2, matrix: 1 }, cara: "confuso" },

    { t: "Deitar na rede da praça",
      r: "Uma rede entre dois postes balança com a brisa quente. O Irving deita só pra refrescar. Acorda na própria cama, sem entender a logística.",
      vai: "cama-irving", p: { sono: 2 }, cara: "cansado" },

    { t: "Dar alpiste aos periquitos",
      precisa: "alpiste", perde: "alpiste",
      r: "Um bando de periquitos desce das palmeiras. Em gratidão, erguem o Irving pelos ombros e sobem com ele no céu azul do sertão.",
      vai: "carregado-passaros", p: { milagre: 3 }, cara: "feliz" },

    { t: "Passar hidratante contra o sol",
      precisa: "hidratante",
      r: "O rosto do Irving brilha tanto sob o sol que ele é confundido com um palestrante e levado a uma conferência de dermatologia.",
      vai: "conferencia-dermatologia", p: { "dia-errado": 2 }, cara: "confuso" },

    { t: "Andar no sol a pino",
      risco: 13,
      r: "O Irving caminha como um monge do deserto. Surge a miragem de um misto gigante. Não é miragem: é um comercial de margarina gravado no sertão!",
      vai: "comercial-margarina", p: { feliz: 3 }, cara: "determinado",
      falha: { r: "O calor derrete o juízo. O Irving desmaia e acorda num auditório, onde duzentos médicos de jaleco estudam seu bronzeado.",
               vida: -15, vai: "conferencia-dermatologia", p: { amnesia: 1, "dia-errado": 1 } } },

    { t: "Entrar na quadrilha da cidade",
      r: "Um sanfoneiro puxa o Irving pra dança. Anarriê! Ele dança, gira, faz o túnel e só para no meio de uma quermesse, cercado de amigos novos.",
      vai: "quermesse", p: { filosofico: 2, "quase-feliz": 1 }, cara: "feliz" },

    { t: "Se declarar prefeito de Xique-Xique",
      r: "O Irving sobe num caixote e discursa. O povo, derretendo de calor, aplaude. Uma comitiva o leva à reunião da ONU pra representar a cidade.",
      vai: "reuniao-onu", p: { "rei-misto": 2, "dia-errado": 1 }, cara: "determinado" },

    { t: "Provar as frutas da barraquinha",
      r: "Umbu, cajá, pinha e, claro, banana. A vendedora insiste na última. Um macaco rouba a pinha e foge, e o Irving corre atrás dele até uma feira.",
      vai: "feira", p: { banana: 2, "quase-feliz": 1 }, cara: "bravo" },
  ],
};

CENAS["lugar-escuro"] = {
  chegadas: [
    "Escuridão total. O Irving não enxerga nem a própria mão. Uma goteira pinga em ritmo de suspense. Algo roça o tornozelo dele. Provavelmente nada. Provavelmente.",
    "Breu absoluto. Sem chão visível, sem teto, sem paredes. Só um silêncio que parece escutar de volta. Em algum lugar, uma voz sussurra: \"Carregando...\"",
  ],
  opcoes: [
    { t: "Seguir o cheiro de pão no escuro",
      r: "O nariz do herói vira bússola. O aroma fica mais quente, mais crocante. Uma porta se abre, e o Irving está numa loja cheia de fornos e masseiras.",
      vai: "loja-eletro-padaria", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Acender um fósforo",
      precisa: "fosforos", perde: "fosforos",
      r: "Luz! O Irving está numa sala cheia de cópias dele mesmo, todas com fósforos. Uma delas sopra. Quando a luz volta, ele está num palco de auditório.",
      vai: "programa-auditorio", p: { matrix: 3 }, cara: "assustado" },

    { t: "Tatear o chão",
      r: "Entre coisas que é melhor não identificar, o Irving encontra uma pedra. Lisa, fria, com cara de ter mil anos. Ele a guarda como um amuleto.",
      vai: "fica", ganha: "pedra", p: { matrix: 1, "antes-tempo": 1 }, cara: "confuso" },

    { t: "Gritar \"Tem alguém aí?\"",
      r: "\"Surpresa!\" As luzes acendem. É um casamento, e os noivos juram que o Irving é o fotógrafo contratado. Ele tem uma câmera. Faz sentido.",
      vai: "casamento", p: { filosofico: 2 }, cara: "assustado" },

    { t: "Dormir, já que está escuro mesmo",
      r: "Escuro, silêncio, temperatura ideal. O corpo do Irving entende o recado. Ele dorme e desperta em algum lugar macio e familiar.",
      vai: ["cama-irving", "caixa-papelao"], p: { sono: 2 }, cara: "cansado" },

    { t: "Disparar o flash da câmera",
      risco: 11,
      r: "FLASH! Por um instante, tudo aparece: uma porta com cheiro de pão. O Irving corre e sai diante de um forno do tamanho de uma catedral.",
      vai: "forno-gigante", p: { feliz: 3 }, cara: "feliz",
      falha: { r: "O Irving se cega com o próprio flash, tropeça, rola e cai por um buraco. Aterrissa no teto de um trem em movimento.",
               vida: -12, vai: "trem", p: { "hora-errada": 1, amnesia: 1 } } },

    { t: "Seguir o barulho de ondas",
      r: "O chão é mole e molhado. Tudo balança. Um jato de água sobe ao longe. O Irving entende: estava o tempo todo dentro de uma baleia.",
      vai: "dentro-baleia", p: { amnesia: 1, matrix: 1 }, cara: "assustado" },

    { t: "Ligar a máquina do tempo no escuro",
      precisa: "maquina-do-tempo",
      r: "A máquina de lavar acende luzes coloridas e começa a centrifugar. O Irving gira junto e é sugado por um túnel de luz.",
      vai: "tunel-do-tempo", p: { "antes-tempo": 2, "alem-tempo": 2 }, cara: "assustado" },

    { t: "Esperar os olhos se acostumarem",
      r: "O Irving espera. E espera. Os olhos se acostumam ao escuro, ao silêncio, à vida. Horas depois, um portão de ferro range, e a luz de um lugar movimentado invade tudo.",
      vai: ["fila-banco", "oficina-mecanica", "leilao-gado"], p: { "hora-errada": 2 }, cara: "cansado" },

    { t: "Pedir pra reiniciar a realidade",
      risco: 13,
      r: "\"Reiniciar.\" A escuridão pisca. O Irving está na porta de casa, como se o dia recomeçasse do zero. Desta vez, vai dar certo.",
      vai: "casa-irving", p: { feliz: 2, matrix: 1 }, cara: "determinado",
      falha: { r: "A realidade reinicia errado. O Irving acorda num castelo medieval, com um alaúde nas mãos e sem saber em que século está.",
               vida: -12, vai: "inglaterra-medieval", p: { "antes-tempo": 3 } } },

    { t: "Andar reto sem parar",
      r: "Passo após passo, no breu, o Irving chuta uma caixa de fósforos e a guarda. Horas depois, a luz aparece: ele está no meio de um canavial, a 400 km de casa.",
      ganha: "fosforos", vai: "canavial", p: { "onde-estou": 2 }, cara: "cansado" },

    { t: "Segurar a mão que encostou nele",
      r: "Aperto firme. \"Somos uma excursão de peruanos, também perdidos.\" De mãos dadas, cantando, o grupo encontra a saída. O Irving ganhou amigos pra vida.",
      vai: "excursao-peruanos", marca: "amigo-peruanos", p: { filosofico: 2 }, cara: "feliz" },
  ],
};
