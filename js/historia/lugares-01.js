// =====================================================================
//  HISTÓRIA: Casa do Irving (lugar 1)
//  Formato de cada opção: veja o guia em ferramentas/GUIA-HISTORIA.md
// =====================================================================

CENAS["casa-irving"] = {
  // a primeira cena do dia usa o texto de abertura do jogo; estas aparecem quando ele VOLTA pra casa
  chegadas: [
    "O Irving está de volta ao lar. A casa o recebe em silêncio, como um castelo que aguarda seu senhor. Lá fora, a padaria continua esperando.",
    "Eis a casa do Irving, fortaleza de onde partem todas as jornadas. O estômago ronca como um tambor de guerra.",
  ],
  opcoes: [
    { t: "Sair pela porta rumo à padaria",
      r: "Com passos firmes de herói, o Irving cruza o portão. A jornada começa!",
      vai: "rua-irving", p: { feliz: 2 } },

    { t: "Chamar um Uber",
      r: "Três toques na tela e o destino está selado. Um carro prateado encosta no portão como uma carruagem moderna.",
      vai: "uber", p: { feliz: 1, "hora-errada": 1 } },

    { t: "Pegar o carro na garagem",
      r: "O Irving empunha a chave como quem empunha uma espada e monta no seu fiel corcel de quatro rodas.",
      vai: "carro-irving", p: { feliz: 1 } },

    { t: "Só mais cinco minutinhos na cama",
      r: "O herói hesita. A cama chama com a voz doce de uma sereia, e ele atende.",
      vai: "cama-irving", p: { sono: 2 }, cara: "cansado" },

    { t: "Procurar dinheiro na gaveta",
      r: "Entre boletos antigos e um carregador sem dono, o Irving encontra uma nota de 100 reais. O tesouro do reino!",
      vai: "fica", ganha: "100-reais", p: { feliz: 1 }, cara: "feliz" },

    { t: "Olhar a fruteira",
      r: "Solitária e amarela, repousa uma banana. O Irving a pega com desconfiança, como quem mantém o inimigo por perto.",
      vai: "fica", ganha: "banana", p: { banana: 2 }, cara: "confuso" },

    { t: "Pegar o skate velho da garagem",
      r: "Coberto de poeira e glória antiga, o skate desperta. O Irving desce a rampa da garagem e ganha a rua!",
      vai: "rua-irving", ganha: "skate", p: { feliz: 1 } },

    { t: "Entrar na caixa da última mudança",
      r: "Uma caixa enorme chama o Irving. Ele entra só pra ver como é. A tampa se fecha sozinha.",
      vai: "caixa-papelao", p: { sono: 1, matrix: 1 }, cara: "confuso" },

    { t: "Pular o muro pra cortar caminho",
      risco: 9,
      r: "Salto digno de lenda! O Irving aterrissa do outro lado com a elegância de um gato.",
      vai: "rua-irving", p: { feliz: 2 }, cara: "feliz",
      falha: { r: "O muro vence. O Irving rola ladeira abaixo e para num bairro que jura nunca ter visto.",
               vida: -15, vai: "bairro-desconhecido", p: { "onde-estou": 2 } } },

    { t: "Ligar a TV pra ver a previsão",
      r: "A TV liga sozinha num programa de auditório. O apresentador aponta pra tela e grita o nome do Irving. Num piscar de olhos, ele está no palco.",
      vai: "programa-auditorio", p: { matrix: 2 }, cara: "assustado" },

    { t: "Pesquisar \"padaria perto de mim\"",
      r: "O celular acha 347 padarias, uma delas em Massachusetts. Um toque errado e a passagem está comprada. Quando percebe, ele está no avião.",
      vai: "aviao", p: { "onde-estou": 1, amnesia: 1 }, cara: "confuso" },

    { t: "Revirar o armário de bagunça",
      r: "Avalanche! Entre cabos e manuais de aparelhos que nem existem mais, sobrevive um rolo de fita crepe novinho.",
      vai: "fica", ganha: "fita-crepe", vida: -3 },

    { t: "Desistir e voltar a dormir de vez",
      cenaMin: 4,
      r: "O herói olha para a porta, olha para a cama e toma a decisão mais honesta do dia.",
      fim: "sono", cara: "cansado" },
  ],
};
