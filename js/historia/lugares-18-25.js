// =====================================================================
//  HISTÓRIA: Feira, Avião, Cama do Irving, Fábrica de chocolate,
//  Loja de equipamentos de padaria, Hospital, Protesto,
//  Loja de patinetes (lugares 18 a 25)
//  Formato de cada opção: veja o guia em ferramentas/GUIA-HISTORIA.md
// =====================================================================

CENAS["feira"] = {
  chegadas: [
    "Eis a feira livre, campo de batalha de lonas azuis. Feirantes bradam como arautos: \"Olha a promoção, freguês!\" O cheiro de pastel paira no ar como uma bênção.",
    "Caixotes de laranja, pilhas de chuchu e um exército de carrinhos de compras. É hora da xepa, e as vovós avançam com a fúria de uma cavalaria.",
  ],
  opcoes: [
    { t: "Entrar na Casa do Norte da esquina",
      r: "Entre as barracas, uma porta de madeira azul exala cheiro de queijo coalho e café coado. O Irving entra como quem encontra um templo.",
      vai: "casa-do-norte", p: { "quase-feliz": 1, filosofico: 1 }, cara: "feliz" },

    { t: "Perguntar ao feirante da padaria",
      r: "\"Padaria? Segue o cheiro do pão, freguês!\" O Irving fareja o ar como um cão de caça, e o aroma o conduz até uma loja cheia de fornos.",
      vai: "loja-eletro-padaria", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Pagar um pastel com os 100 reais",
      precisa: "100-reais",
      r: "O pastel vem do tamanho de uma prancha de surfe. Um vira-lata o encara com cobiça. O Irving foge abraçado ao pastel e só para numa quermesse.",
      vai: "quermesse", p: { "quase-feliz": 3 }, cara: "feliz" },

    { t: "Gritar \"olha a promoção\" junto",
      r: "A voz do Irving ecoa como a de um tenor. A feira inteira aplaude, e um produtor de óculos escuros o arrasta direto para um karaokê.",
      vai: "karaoke", p: { famoso: 2 }, cara: "feliz" },

    { t: "Aceitar a banana de cortesia",
      r: "\"Leva que é brinde!\" A feirante enfia uma banana no bolso do Irving antes que ele possa protestar. O inimigo agora viaja com ele.",
      vai: "fica", ganha: "banana", p: { banana: 3 }, cara: "confuso" },

    { t: "Disputar a xepa com as vovós",
      r: "Cotoveladas, sacolas, sombrinhas. O Irving é empurrado pela multidão de vovós e, quando se levanta, está numa fila. A fila do banco. Ninguém sabe como.",
      vai: "fila-banco", vida: -5, p: { "hora-errada": 2, "quase-feliz": 1 }, cara: "assustado" },

    { t: "Pular no caminhão de melancias",
      risco: 11,
      r: "O caminhão parte, e o Irving viaja deitado entre melancias como um rei tropical. Desembarca num lugar ensolarado e cheio de frutas: Xique-Xique!",
      vai: "xique-xique", p: { banana: 2, "quase-feliz": 1 }, cara: "feliz",
      falha: { r: "Uma melancia rola, o Irving rola junto, e os dois só param no meio de um canavial sem fim.",
               vida: -15, vai: "canavial", p: { "onde-estou": 2 }, cara: "assustado" } },

    { t: "Perseguir o cão que roubou um pastel",
      r: "O vira-lata dispara com o pastel na boca. O Irving persegue o ladrão por vielas tortuosas até um beco escuro, onde o cão some.",
      vai: "beco-perigoso", p: { "quase-feliz": 2, prisao: 1 }, cara: "bravo" },

    { t: "Pechinchar a dúzia de laranja",
      r: "Negociação épica! O feirante cede, e a multidão ergue o Irving nos ombros como um general. Carregado pela massa, ele desemboca num leilão de gado.",
      vai: "leilao-gado", p: { "rei-misto": 2, banana: 1 }, cara: "determinado" },

    { t: "Encher o bolso de alpiste grátis",
      r: "O Irving enche os bolsos de alpiste da barraca de ração. Os pombos da feira percebem. Em segundos, uma revoada o ergue do chão.",
      vai: "carregado-passaros", ganha: "alpiste", p: { milagre: 3 }, cara: "assustado" },

    { t: "Trocar a banana por flores",
      precisa: "banana",
      r: "A florista examina a banana e declara: \"A mais bela da temporada!\" Em troca, entrega um bouquet de flores. O Irving sai no lucro.",
      vai: "fica", perde: "banana", ganha: "bouquet", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Ajudar a vovó com o carrinho",
      r: "O Irving empurra o carrinho da vovó ladeira acima. Grata, ela o apresenta à turma dela: a hidroginástica das oito, que o adota na hora.",
      vai: "hidroginastica", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Furar a fila do pastel",
      risco: 12,
      r: "Audácia de cavaleiro! O pasteleiro declara o Irving \"freguês número um milhão\". O prêmio: uma visita à fábrica de chocolate do cunhado dele.",
      vai: "fabrica-chocolate", p: { feliz: 2, "quase-feliz": 1 }, cara: "feliz",
      falha: { r: "As vovós da fila não perdoam. Sombrinhas voam, a confusão chama a polícia, e o Irving ganha uma carona de viatura.",
               vida: -15, vai: "prisao", p: { prisao: 3 }, cara: "assustado" } },

    { t: "Dividir o pastel com um vira-lata",
      r: "O pasteleiro dá um pastel de degustação. O Irving parte ao meio. O vira-lata come a metade dele, depois a do Irving, e sai abanando o rabo. O herói o segue até uma sorveteria.",
      vai: "sorveteria", p: { "quase-feliz": 2, filosofico: 1 }, cara: "triste" },
  ],
};

CENAS["aviao"] = {
  chegadas: [
    "O Irving está num avião, a dez mil metros de altura. Não lembra de ter comprado passagem. A comissária oferece amendoim como quem oferece um tesouro.",
    "Turbulência! O avião chacoalha como um dragão ferido. O piloto anuncia um destino pelo alto-falante, mas ninguém entende uma palavra.",
  ],
  opcoes: [
    { t: "Perguntar o destino à comissária",
      r: "\"Massachusetts, senhor.\" O Irving tenta repetir a palavra, erra três vezes, e o avião pousa antes que ele consiga.",
      vai: "massachusetts", p: { "onde-estou": 2 }, cara: "confuso" },

    { t: "Recusar o misto frio de bordo",
      r: "Murcho e triste, o misto de bordo não é digno. O Irving jura comer o verdadeiro. Comovido, o piloto faz um pouso de emergência ao lado de um forno gigante.",
      vai: "forno-gigante", p: { feliz: 2 }, cara: "determinado" },

    { t: "Pagar upgrade pra primeira classe",
      precisa: "100-reais",
      r: "Na primeira classe servem pão quentinho. O cheiro desperta o chamado da padaria. O piloto entende a missão e pousa perto de uma loja de fornos.",
      vai: "loja-eletro-padaria", perde: "100-reais", p: { feliz: 3 }, cara: "feliz" },

    { t: "Cochilar encostado na janela",
      r: "O ronco do motor embala o herói. Ele fecha os olhos acima das nuvens e, ao abrir, está em casa. Foi um sonho? Ninguém sabe.",
      vai: ["casa-irving", "cama-irving"], p: { sono: 2, amnesia: 1 }, cara: "cansado" },

    { t: "Abrir o bagageiro de cima",
      r: "Uma mala despenca na cabeça do Irving. Tonto, ele encontra no bagageiro um chapéu maneiro que ninguém reclama. Mas o que ele fazia ali mesmo?",
      vai: "fica", ganha: "chapeu", vida: -8, p: { amnesia: 2 }, cara: "confuso" },

    { t: "Apertar o botão da comissária",
      r: "O Irving aperta o botão 47 vezes. A comissária traz 47 pacotinhos de amendoim, um kit com cortador de unha e um olhar de profunda decepção.",
      ganha: "cortador-unha", vai: "fica", p: { "hora-errada": 1, matrix: 1 }, cara: "neutro" },

    { t: "Saltar de paraquedas",
      risco: 12,
      r: "Paraquedas aberto! O Irving plana majestoso como uma águia de jaqueta bege e pousa, com precisão divina, no braço do Cristo Redentor.",
      vai: "cristo-redentor", p: { milagre: 3, famoso: 1 }, cara: "feliz",
      falha: { r: "O paraquedas era uma mochila de lanches. O Irving despenca no oceano e é engolido por uma baleia que estava de boca aberta.",
               vida: -20, vai: "dentro-baleia", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Assumir o controle do avião",
      risco: 14,
      r: "Os passageiros aplaudem o comandante Irving! Com uma manobra lendária, ele pousa bem em frente à ONU, onde é recebido como herói mundial.",
      vai: "reuniao-onu", p: { "rei-misto": 3 }, cara: "determinado",
      falha: { r: "Botão errado. O avião sobe, sobe, sobe e só para quando acopla numa estação espacial.",
               vida: -15, vai: "estacao-espacial", p: { "alem-tempo": 3 }, cara: "assustado" } },

    { t: "Puxar papo com o vizinho",
      r: "O vizinho de poltrona é guia de uma excursão de peruanos. Ao pousar, o grupo inteiro adota o Irving como mascote oficial.",
      vai: "excursao-peruanos", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Ver a novela na telinha",
      r: "Na tela, a vilã de uma novela mexicana olha fundo nos olhos do Irving e diz o nome dele. A telinha o suga para dentro do drama.",
      vai: "novela-mexicana", p: { matrix: 2 }, cara: "assustado" },

    { t: "Ir ao banheiro do avião",
      r: "O banheiro é tão apertado que parece uma caixa. É uma caixa. O Irving está dentro de uma caixa de papelão e não faz ideia de como.",
      vai: "caixa-papelao", p: { sono: 1, matrix: 1 }, cara: "confuso" },

    { t: "Dar alpiste ao pombo clandestino",
      precisa: "alpiste",
      r: "Um pombo escondido na poltrona 14C come o alpiste, agradece e convoca a revoada. Os pássaros tiram o Irving pela janelinha com toda a delicadeza.",
      vai: "carregado-passaros", perde: "alpiste", p: { milagre: 3 }, cara: "feliz" },
  ],
};

CENAS["cama-irving"] = {
  chegadas: [
    "A cama do Irving. Lençol morno, travesseiro no ponto exato, cobertor abraçando como um velho amigo. Na mesinha, o despertador, inimigo mortal, aguarda sua hora.",
    "O herói repousa em seu leito sagrado. Lá fora, o mundo chama. Aqui dentro, a soneca sussurra promessas irresistíveis.",
  ],
  opcoes: [
    { t: "Levantar num pulo heroico",
      r: "Num salto digno de lenda, o Irving abandona o leito, veste a jaqueta e cruza a porta. A padaria que se prepare!",
      vai: "rua-irving", p: { feliz: 2 }, cara: "determinado" },

    { t: "Apertar a soneca",
      r: "Nove minutos de paraíso. O despertador toca de novo, mais irritado. O Irving sente que está perdendo uma batalha. E o horário.",
      vai: "fica", p: { sono: 2, "hora-errada": 1 }, cara: "cansado" },

    { t: "Jogar o despertador pela janela",
      risco: 10,
      r: "O despertador voa e cai certinho no caminhão de lixo. Silêncio vitorioso! Revigorado, o Irving desce até a garagem e pula no carro como um campeão.",
      vai: "carro-irving", p: { feliz: 1, "rei-misto": 2 }, cara: "feliz",
      falha: { r: "O despertador bate na parede, volta como bumerangue e acerta a testa do Irving. Ele acorda num hospital sem lembrar o próprio nome.",
               vida: -15, vai: "hospital", p: { amnesia: 2 }, cara: "confuso" } },

    { t: "Procurar o chinelo embaixo da cama",
      r: "Embaixo da cama é mais fundo do que parecia. O Irving engatinha, engatinha e sai por baixo de um carro, no meio de uma oficina mecânica.",
      vai: "oficina-mecanica", p: { matrix: 2 }, cara: "assustado" },

    { t: "Sonhar com um misto quente",
      r: "No sonho, um misto gigante chama o Irving pelo nome. Ele caminha até o chamado e acorda de pé, diante da porta de um forno enorme.",
      vai: "forno-gigante", p: { feliz: 1, sono: 1 }, cara: "confuso" },

    { t: "Revirar o criado-mudo",
      r: "Entre remédios vencidos e três controles de TV sem TV, brilha um cortador de unha. O Irving o guarda como uma relíquia ancestral.",
      vai: "fica", ganha: "cortador-unha", p: { sono: 1, "antes-tempo": 1 }, cara: "neutro" },

    { t: "Pedir café da manhã pelo app",
      r: "O app entende errado e manda um Uber até a porta do quarto. O motorista buzina ao lado da cama. O Irving embarca de pantufas.",
      vai: "uber", p: { feliz: 1, "hora-errada": 1 }, cara: "confuso" },

    { t: "Rolar até cair da cama",
      r: "O Irving rola, rola e não para. Atravessa o quarto, a sala, a calçada e o bairro, parando só numa rua que ele nunca viu.",
      vai: "bairro-desconhecido", vida: -5, p: { "onde-estou": 2 }, cara: "assustado" },

    { t: "Contar carneirinhos",
      r: "No carneiro 347, o Irving percebe que os carneiros são bois. E que ele está num leilão de gado, levantando a plaquinha sem querer.",
      vai: "leilao-gado", p: { sono: 1, "rei-misto": 1 }, cara: "confuso" },

    { t: "Pôr a peruca e encarar o dia",
      precisa: "peruca",
      r: "Com a peruca linda no lugar, o Irving se sente uma estrela de cinema. Sai do quarto e, sem entender como, cai no set de um comercial de margarina.",
      vai: "comercial-margarina", p: { feliz: 2, famoso: 1 }, cara: "feliz" },

    { t: "Fazer 50 flexões pra acordar",
      risco: 12,
      r: "Na flexão 50, o Irving está desperto como um gladiador. Um vizinho o vê pela janela e o inscreve numa luta de boxe beneficente.",
      vai: "luta-boxe", p: { "rei-misto": 2, feliz: 1 }, cara: "determinado",
      falha: { r: "Na segunda flexão, o braço cede. O Irving dorme no tapete e acorda num trem que parece nunca chegar a lugar nenhum.",
               vida: -12, vai: "trem", p: { sono: 1, "hora-errada": 1 }, cara: "cansado" } },

    { t: "Desistir e virar um burrito",
      cenaMin: 4,
      r: "O herói se enrola no lençol como um burrito de algodão e declara, solene: a padaria fica pra amanhã.",
      fim: "sono", cara: "cansado" },

    { t: "Conferir o calendário na parede",
      r: "Um círculo vermelho marca a data de hoje: 'Dia do Padeiro'. O Irving não lembra de ter marcado. Um arrepio sobe a espinha, e ele sai de casa pra conferir.",
      vai: "rua-irving", p: { "dia-errado": 3 }, cara: "assustado" },
  ],
};

CENAS["fabrica-chocolate"] = {
  chegadas: [
    "Um rio de chocolate corre entre máquinas reluzentes. Na esteira, bombons desfilam como soldados em parada militar. O cheiro é tão doce que o Irving quase esquece o misto.",
    "A fábrica de chocolate zumbe e borbulha. Operários de touca vigiam a esteira de bombons, e um gerente de bigode grita ordens como um general.",
  ],
  opcoes: [
    { t: "Perguntar se a fábrica faz pão",
      r: "\"Pão não, mas o nosso forno veio da loja aqui do lado!\" O Irving parte na hora, guiado pela fé inabalável no misto.",
      vai: "loja-eletro-padaria", p: { feliz: 2, "quase-feliz": 1 }, cara: "determinado" },

    { t: "Subir na esteira de bombons",
      r: "A esteira carrega o Irving, deitado entre bombons, até a boca de um forno gigantesco. Lá dentro, estranhamente, cheira a pão.",
      vai: "forno-gigante", p: { feliz: 2 }, cara: "feliz" },

    { t: "Provar um bombom da esteira",
      r: "O bombom tem recheio de banana. O Irving cospe com toda a dignidade possível. A esteira acelera, como se zombasse dele.",
      vai: "fica", vida: -3, p: { banana: 3 }, cara: "bravo" },

    { t: "Pôr o chapéu do chocolateiro",
      r: "O chapéu alto do mestre chocolateiro cai como uma coroa na cabeça do Irving. Os operários se curvam em silêncio. Ninguém sabe por quê.",
      vai: "fica", ganha: "chapeu", p: { "rei-misto": 2 }, cara: "feliz" },

    { t: "Nadar no rio de chocolate",
      risco: 11,
      r: "Braçadas olímpicas no cacau! O Irving emerge brilhando e é confundido com um astro de TV. Um diretor o leva correndo para gravar um comercial de margarina.",
      vai: "comercial-margarina", p: { feliz: 2, famoso: 1 }, cara: "feliz",
      falha: { r: "A correnteza de chocolate é forte demais. O Irving é sugado por um cano e cuspido dentro de uma baleia, que adorou o sabor.",
               vida: -18, vai: "dentro-baleia", p: { amnesia: 2 }, cara: "assustado" } },

    { t: "Escorregar no tobogã de caramelo",
      risco: 13,
      r: "Descida gloriosa! O tobogã termina num palco iluminado, e uma plateia de programa de auditório aplaude a entrada triunfal do Irving.",
      vai: "programa-auditorio", p: { famoso: 2, matrix: 1 }, cara: "feliz",
      falha: { r: "O caramelo gruda. O Irving fica horas preso no meio do tobogã e só é resgatado a tempo de pegar o trem da tarde.",
               vida: -15, vai: "trem", p: { "hora-errada": 2 }, cara: "cansado" } },

    { t: "Discursar para os operários",
      r: "O Irving sobe num caixote e fala sobre o direito sagrado ao misto quente. Os operários largam tudo e saem marchando num protesto.",
      vai: "protesto", p: { "rei-misto": 2, "dia-errado": 1 }, cara: "determinado" },

    { t: "Ajudar a embalar os bombons",
      r: "O Irving embala bombons com tanto carinho que o mandam entregá-los pessoalmente num casamento. Os noivos o abraçam como se fosse da família.",
      vai: "casamento", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Entrar na sala proibida",
      r: "Lá dentro, um elevador de vidro com um único botão: \"PRA CIMA\". O Irving aperta. O elevador fura o teto, as nuvens e o céu, até uma estação espacial.",
      vai: "estacao-espacial", p: { "alem-tempo": 3 }, cara: "assustado" },

    { t: "Pedir emprego de provador",
      r: "O gerente exige carteira de trabalho, três fotos e um carimbo que só existe num lugar. O Irving é mandado para a fila do banco.",
      vai: "fila-banco", p: { "hora-errada": 2, "dia-errado": 1 }, cara: "triste" },

    { t: "Jogar a banana no triturador",
      precisa: "banana",
      r: "A máquina engole a banana e cospe 400 picolés de banana. O gerente, encantado, manda o Irving entregá-los numa sorveteria.",
      vai: "sorveteria", perde: "banana", p: { banana: 3 }, cara: "confuso" },

    { t: "Espalhar alpiste na esteira",
      precisa: "alpiste",
      r: "Pardais invadem a fábrica, bicam o alpiste e, em gratidão, erguem o Irving pela claraboia rumo ao céu.",
      vai: "carregado-passaros", perde: "alpiste", p: { milagre: 3 }, cara: "feliz" },

    { t: "Visitar a ala das frutas com chocolate",
      r: "Morango, abacaxi e muita banana, tudo coberto de chocolate. A banana, disfarçada, quase engana o Irving. Quase. Ele foge da ala tropical e só para dentro de uma sorveteria.",
      vai: "sorveteria", p: { banana: 3 }, cara: "confuso" },
  ],
};

CENAS["loja-eletro-padaria"] = {
  chegadas: [
    "Fornos de lastro, chapas reluzentes e cilindros de massa enfileirados como armaduras num salão real. O cheiro de pão de demonstração deixa o Irving tonto de esperança.",
    "Um vendedor de gravata surge do nada, como um fantasma do comércio. \"Tá procurando forno, chefe? Faço em doze vezes!\" Ao fundo, uma chapa chia.",
  ],
  opcoes: [
    { t: "Perguntar onde tem padaria",
      r: "\"Todo cliente nosso é padaria!\" O vendedor desenha um mapa num guardanapo. O Irving sai pela rua guardando o mapa como um pergaminho sagrado.",
      vai: "rua-irving", marca: "mapa", p: { feliz: 3 }, cara: "determinado" },

    { t: "Testar a chapa de demonstração",
      r: "A chapa esquenta, chia e canta. O Irving sente, pela primeira vez no dia, que o misto está perto. Uma lágrima heroica escorre.",
      vai: "fica", p: { feliz: 2, "quase-feliz": 1 }, cara: "feliz" },

    { t: "Entrar no forno pra ver o tamanho",
      r: "O vendedor jura que é o maior forno do mundo. O Irving entra pra conferir. A porta fecha, e o forno é bem maior por dentro.",
      vai: "forno-gigante", p: { feliz: 2 }, cara: "confuso" },

    { t: "Ligar o cilindro de massa",
      risco: 12,
      r: "O cilindro abre uma massa lisa como seda. O dono da loja, emocionado, dá ao Irving o apito de mestre padeiro. O cheiro de padaria está mais forte.",
      vai: "fica", ganha: "apito", p: { feliz: 3 }, cara: "feliz",
      falha: { r: "O cilindro puxa a jaqueta do Irving e o estica como massa de pizza. Ele é enrolado, embalado e despachado num caminhão pra Osasco.",
               vida: -15, vai: "osasco", p: { "onde-estou": 2 }, cara: "assustado" } },

    { t: "Fugir do vendedor insistente",
      risco: 10,
      r: "Drible magistral entre batedeiras! O Irving escapa pela porta dos fundos, monta num patinete de entrega e só freia numa loja de patinetes.",
      vai: "loja-patinetes", p: { feliz: 2 }, cara: "determinado",
      falha: { r: "O vendedor o alcança. Três horas depois, o Irving sai com um carnê de 48 parcelas e vai pagar a primeira na fila do banco.",
               vida: -12, vai: "fila-banco", p: { "hora-errada": 3 }, cara: "triste" } },

    { t: "Ouvir a proposta do vendedor",
      r: "O vendedor explica as 47 funções da batedeira. Na função 12, o Irving adormece em pé e sonha com a própria cama. Acorda nela.",
      vai: "cama-irving", p: { sono: 2, "hora-errada": 1 }, cara: "cansado" },

    { t: "Ajudar na aula de fazer pão",
      r: "O Irving sova massa ao lado de uma turma de merendeiras. Ele se entrosa tão bem que elas o levam para a cozinha da cantina de uma escola.",
      vai: "cantina-escola", p: { filosofico: 2, feliz: 1 }, cara: "feliz" },

    { t: "Pegar o garfo gigante do mostruário",
      r: "É o garfo oficial de testar bolo. Inútil e reluzente. O Irving o ergue como a espada de um rei, e um clarão o leva direto à Idade Média.",
      vai: "inglaterra-medieval", ganha: "garfo", p: { "antes-tempo": 3 }, cara: "determinado" },

    { t: "Perguntar o preço do forno grande",
      r: "O preço é tão alto que o vendedor sugere vender um boi. Duas quadras depois, o Irving está num leilão de gado, de plaquinha na mão.",
      vai: "leilao-gado", p: { "hora-errada": 1, "rei-misto": 1 }, cara: "confuso" },

    { t: "Comprar uma luva com os 100 reais",
      precisa: "100-reais",
      r: "\"Com 100 reais, só a luvinha!\" O vendedor, comovido, conta o segredo: a padaria abre cedo e fica logo ali. Ele até chama um Uber pro Irving.",
      vai: "uber", perde: "100-reais", p: { feliz: 3 }, cara: "feliz" },

    { t: "Ligar a máquina do tempo na tomada",
      precisa: "maquina-do-tempo",
      r: "O vendedor jura que é uma lava-louças de última geração e liga na tomada. A máquina gira, apita e engole o Irving num redemoinho de luzes.",
      vai: "tunel-do-tempo", p: { "antes-tempo": 1, "alem-tempo": 2 }, cara: "assustado" },

    { t: "Entrar na caixa do forno novo",
      r: "A caixa do forno é enorme e fofinha por dentro. O Irving entra só pra ver como é, e a equipe de entrega fecha a tampa com fita crepe, esquecendo o rolo lá dentro.",
      ganha: "fita-crepe", vai: "caixa-papelao", p: { sono: 2 }, cara: "cansado" },

    { t: "Testar o forno inteligente",
      r: "O forno fala, pensa e se recusa a assar: 'Sou do futuro.' Uma escotilha se abre no painel, e o Irving é sugado até um módulo espacial.",
      vai: "estacao-espacial", p: { "alem-tempo": 3 }, cara: "assustado" },
  ],
};

CENAS["hospital"] = {
  chegadas: [
    "Um corredor de hospital, branco e infinito. Macas passam como carruagens silenciosas. Uma enfermeira de prancheta olha o Irving de cima a baixo.",
    "Luzes frias, cheiro de álcool em gel e uma TV na sala de espera passando novela. O painel chama senhas que nunca são a do Irving.",
  ],
  opcoes: [
    { t: "Perguntar à enfermeira da padaria",
      r: "\"Tem uma na esquina, mas antes preenche essa ficha.\" O Irving preenche dezoito páginas e sai pela rua, faminto e determinado.",
      vai: "rua-irving", p: { feliz: 2, "dia-errado": 1 }, cara: "determinado" },

    { t: "Pegar uma senha e esperar",
      r: "Senha 847. O painel mostra 12. Uma planta na sala de espera floresce e murcha. Com pena, a enfermeira dá ao Irving um cortador de unha pra passar o tempo.",
      ganha: "cortador-unha", vai: "fica", p: { "hora-errada": 2, "dia-errado": 1 }, cara: "cansado" },

    { t: "Deitar numa maca vazia",
      r: "A maca está destravada. Ela desliza pelo corredor, desce a rampa e ganha a rua como um trenó, parando só dentro de uma loja de patinetes. O vendedor quer comprar a maca.",
      vai: "loja-patinetes", p: { "onde-estou": 2, sono: 1 }, cara: "assustado" },

    { t: "Fazer um check-up completo",
      r: "São tantos exames com nomes difíceis que o Irving esquece o próprio nome. Sai pela porta errada, pega um táxi errado e acorda muito, muito longe.",
      vai: ["aviao", "massachusetts"], p: { amnesia: 2 }, cara: "confuso" },

    { t: "Animar a ala das crianças",
      r: "O Irving faz caretas com a câmera e arranca gargalhadas. As crianças o elegem melhor amigo, e as tias da merenda o convidam pro almoço na escola.",
      vai: "cantina-escola", p: { filosofico: 3 }, cara: "feliz" },

    { t: "Assistir à novela da sala de espera",
      r: "Na novela, um médico de bigode anuncia: \"O Irving é meu irmão gêmeo perdido!\" A sala suspira, e a TV puxa o herói para dentro da trama.",
      vai: "novela-mexicana", p: { matrix: 2 }, cara: "assustado" },

    { t: "Pegar hidratante do carrinho",
      r: "Um pote de hidratante com cheirinho de lavanda. Um médico vê o Irving passando no rosto e o arrasta, maravilhado, para uma conferência de dermatologia.",
      vai: "conferencia-dermatologia", ganha: "hidratante", p: { "dia-errado": 2 }, cara: "confuso" },

    { t: "Rezar na capela do hospital",
      r: "O Irving pede aos céus um misto quente. Uma revoada de pássaros entra pela janela da capela e o leva, com todo o carinho, rumo ao alto.",
      vai: ["carregado-passaros", "cristo-redentor"], p: { milagre: 3 }, cara: "feliz" },

    { t: "Fugir da vacina da gripe",
      risco: 10,
      r: "Fuga lendária! O Irving desvia de três enfermeiras, salta pela janela do térreo e cai sentado dentro de um Uber que esperava na porta.",
      vai: "uber", p: { feliz: 2, prisao: 1 }, cara: "determinado",
      falha: { r: "A enfermeira é mais rápida. Uma picadinha, um \"ai\", e o Irving desmaia de susto. Acorda no banco de reservas de um campo de futebol.",
               vida: -12, vai: "campo-futebol", p: { amnesia: 2 }, cara: "confuso" } },

    { t: "Pegar o elevador de serviço",
      risco: 12,
      r: "O elevador sobe além do último andar, além das nuvens, e abre as portas numa estação espacial. O Irving ajeita o boné, impressionado.",
      vai: "estacao-espacial", p: { "alem-tempo": 3 }, cara: "feliz",
      falha: { r: "O elevador despenca até um subsolo sem luz, sem sinal e sem saída. Só o eco do Irving responde.",
               vida: -15, vai: "lugar-escuro", p: { matrix: 2 }, cara: "assustado" } },

    { t: "Seguir as linhas coloridas do chão",
      r: "Linha azul, linha verde, linha amarela. O Irving segue a vermelha por quilômetros e sai num auditório lotado de jalecos, bem no meio de um congresso.",
      vai: "conferencia-dermatologia", p: { "onde-estou": 1, "dia-errado": 1 }, cara: "confuso" },

    { t: "Dar o bouquet a um paciente",
      precisa: "bouquet",
      r: "O senhor do quarto 12 chora de emoção. É um padeiro aposentado! Ele indica uma loja de fornos onde os amigos dele sempre sabem o caminho da padaria.",
      vai: "loja-eletro-padaria", perde: "bouquet", p: { feliz: 2, filosofico: 2 }, cara: "feliz" },
  ],
};

CENAS["protesto"] = {
  chegadas: [
    "Um protesto toma a avenida! Cartazes gritam \"VOLTA, PÃO DE 10 CENTAVOS!\" Tambores ecoam, apitos soam, e a multidão marcha como um exército faminto.",
    "Faixas enormes exigem \"MISTO QUENTE É DIREITO DE TODOS\" e \"FERIADO PRO PADEIRO JÁ\". Um homem de megafone puxa um coro que ninguém entende.",
  ],
  opcoes: [
    { t: "Perguntar o motivo do protesto",
      r: "\"É o Dia do Padeiro, e as padarias fecharam!\", explica uma senhora. O Irving sente um frio na espinha. O calendário do poste parece concordar.",
      vai: "fica", p: { "dia-errado": 3 }, cara: "assustado" },

    { t: "Pegar o megafone e liderar",
      risco: 12,
      r: "A voz do Irving troveja: \"Pão de 10 centavos!\" A multidão o ergue nos ombros e marcha até a sede da ONU, onde ele é recebido como líder mundial.",
      vai: "reuniao-onu", p: { "rei-misto": 3 }, cara: "determinado",
      falha: { r: "Microfonia! A multidão se dispersa e só sobra o Irving, sozinho, gritando pra um guarda. O guarda não achou graça nenhuma.",
               vida: -12, vai: "prisao", p: { prisao: 3 }, cara: "assustado" } },

    { t: "Perguntar onde tem padaria aberta",
      r: "\"Aberta? Nenhuma! Mas o forno gigante da praça tá ligado\", sussurra um manifestante. O Irving corre até lá, cheio de esperança.",
      vai: "forno-gigante", p: { feliz: 1, "dia-errado": 2 }, cara: "determinado" },

    { t: "Furar o cordão de isolamento",
      risco: 14,
      r: "Drible de cavaleiro! Do outro lado do cordão, uma loja de patinetes oferece test drive grátis até a padaria!",
      vai: "loja-patinetes", p: { feliz: 3 }, cara: "feliz",
      falha: { r: "O Irving tropeça no próprio cadarço e cai pela porta aberta de um carro preto. Lá dentro, um encapuzado o encara em silêncio.",
               vida: -15, vai: "encapuzado-carro", marca: "procurado", p: { prisao: 2 }, cara: "assustado" } },

    { t: "Seguir o carro de som",
      r: "O carro de som toca uma música chiclete. O Irving sobe na caçamba, canta junto e, quando percebe, o carro estaciona na porta de um karaokê.",
      vai: "karaoke", p: { famoso: 2, "dia-errado": 1 }, cara: "feliz" },

    { t: "Pegar um apito do chão",
      r: "O Irving apita com gosto. A multidão acha que é o início do jogo e o carrega até o estádio. Ele agora é o maestro do caos.",
      vai: "campo-futebol", ganha: "apito", p: { famoso: 1, "rei-misto": 1, "dia-errado": 1 }, cara: "feliz" },

    { t: "Erguer um cartaz \"MISTO JÁ\"",
      r: "Um cinegrafista enquadra o cartaz. Minutos depois, o Irving está repetindo a frase ao vivo, no palco de um programa de auditório.",
      vai: "programa-auditorio", marca: "famoso-tv", p: { famoso: 1, matrix: 1, "dia-errado": 1 }, cara: "confuso" },

    { t: "Marchar com as vovós do protesto",
      r: "O pelotão das vovós adota o Irving na hora. Depois da marcha, elas o levam de braços dados para a aula de hidroginástica.",
      vai: "hidroginastica", p: { filosofico: 2, "dia-errado": 1 }, cara: "feliz" },

    { t: "Sair de fininho pela lateral",
      r: "O Irving escapa da multidão e se enfia num beco estreito e escuro. Talvez não tenha sido a saída mais sábia do dia.",
      vai: "beco-perigoso", p: { prisao: 2, "onde-estou": 1 }, cara: "assustado" },

    { t: "Deitar na faixa gigante",
      r: "A faixa é macia como um edredom. O Irving deita, a multidão o enrola e o carrega como um casulo. Ele acorda numa caixa de papelão, com o rolo de fita crepe da faixa.",
      ganha: "fita-crepe", vai: "caixa-papelao", p: { sono: 2, "dia-errado": 1 }, cara: "cansado" },

    { t: "Doar os 100 reais pra causa",
      precisa: "100-reais",
      r: "O tesoureiro do protesto chora de emoção e nomeia o Irving \"Amigo do Pão\". Em agradecimento, o leva como convidado de honra num casamento.",
      vai: "casamento", perde: "100-reais", p: { filosofico: 3 }, cara: "feliz" },

    { t: "Oferecer a banana ao elefante",
      precisa: "banana",
      r: "No meio do protesto marcha um elefante (pelos direitos dos elefantes). Ele aceita a banana, agradece com a tromba e põe o Irving nas costas.",
      vai: "elefante", perde: "banana", p: { banana: 3 }, cara: "feliz" },
  ],
};

CENAS["loja-patinetes"] = {
  chegadas: [
    "Uma loja reluzente de patinetes elétricos. Dezenas deles, alinhados como corcéis prontos para a batalha, piscam luzinhas azuis. Um vendedor de capacete sorri demais.",
    "Scooters zumbem, baterias carregam, e um patinete de teste passa voando pelo corredor sem ninguém em cima. O futuro chegou, e parece meio descontrolado.",
  ],
  opcoes: [
    { t: "Fazer test drive até a padaria",
      risco: 10,
      r: "O patinete voa baixo pelas ruas. O Irving sente o vento na barba e o cheiro de fornos novos: uma loja de equipamentos de padaria!",
      vai: "loja-eletro-padaria", p: { feliz: 3 }, cara: "feliz",
      falha: { r: "A bateria morre na primeira curva. O Irving empurra o patinete por horas até uma oficina de beira de estrada, onde cobram até pra olhar.",
               vida: -12, vai: "oficina-mecanica", p: { "hora-errada": 2 }, cara: "cansado" } },

    { t: "Pedir o caminho da padaria no GPS",
      r: "\"É só seguir o GPS do patinete!\" O GPS recalcula, recalcula, recalcula e, com toda a confiança do mundo, manda o Irving pra Osasco.",
      vai: "osasco", p: { feliz: 1, "onde-estou": 1 }, cara: "confuso" },

    { t: "Ativar o modo turbo",
      risco: 14,
      r: "Modo turbo! O patinete rompe a barreira do som, do espaço e do bom senso. O Irving freia numa estação espacial, de barba arrepiada.",
      vai: "estacao-espacial", p: { "alem-tempo": 3 }, cara: "assustado",
      falha: { r: "O turbo dispara de ré. O Irving atravessa a vitrine de costas e cai num caminhão de bananas rumo a Xique-Xique.",
               vida: -18, vai: "xique-xique", p: { banana: 3 }, cara: "assustado" } },

    { t: "Ouvir a palestra sobre baterias",
      r: "Volts, amperes, autonomia, ciclos de recarga. Informação demais! O Irving foge da palestra e entra, por engano, noutra: um congresso de dermatologia.",
      vai: "conferencia-dermatologia", p: { amnesia: 1, "dia-errado": 1 }, cara: "confuso" },

    { t: "Pegar o skate da promoção",
      r: "\"Skate de brinde na compra de nada!\" O vendedor, confuso com a própria promoção, entrega um skate ao Irving e pede silêncio sobre o assunto.",
      vai: "fica", ganha: "skate", p: { feliz: 1 }, cara: "feliz" },

    { t: "Trocar o skate por um patinete",
      precisa: "skate",
      r: "O vendedor aceita a troca, emocionado com o skate vintage. O Irving parte num patinete novinho, veloz como um relâmpago, rumo à padaria.",
      vai: "rua-irving", perde: "skate", p: { feliz: 3 }, cara: "determinado" },

    { t: "Sentar no patinete da vitrine",
      r: "O banquinho é tão confortável que o Irving cochila. O patinete de exposição, que funcionava sim, sai andando sozinho e só para dentro de uma balsa.",
      vai: "balsa", p: { sono: 1, "hora-errada": 1 }, cara: "cansado" },

    { t: "Correr na corrida de patinetes",
      r: "Sprint lendário! O Irving vence a corrida da loja por um fio de barba. Ganha medalha e um convite pra uma luta de boxe beneficente.",
      vai: "luta-boxe", marca: "campeao", p: { "rei-misto": 2 }, cara: "feliz" },

    { t: "Chamar o patinete fantasma",
      r: "O patinete sem dono para, pisca duas vezes e leva o Irving embora. As luzinhas apagam uma a uma, até sobrar só a escuridão.",
      vai: "lugar-escuro", p: { matrix: 2, "alem-tempo": 1 }, cara: "assustado" },

    { t: "Experimentar o capacete com chifres",
      r: "O capacete viking da vitrine entala na cabeça. Uns cavaleiros de armadura passam, confundem o Irving com um nobre e o levam pra Inglaterra medieval.",
      vai: "inglaterra-medieval", p: { "antes-tempo": 3 }, cara: "confuso" },

    { t: "Ajudar um vovô a subir no patinete",
      r: "O vovô dá uma volta, grita de alegria e convida o Irving pra hidroginástica da terceira idade. Lá, todos o recebem como um neto querido.",
      vai: "hidroginastica", p: { filosofico: 2 }, cara: "feliz" },

    { t: "Alugar um patinete com os 100 reais",
      precisa: "100-reais",
      r: "O Irving acelera sem rumo. O aluguel acaba justo no meio de um canavial, e o patinete trava, se recusando a dar mais um metro.",
      vai: "canavial", perde: "100-reais", p: { "onde-estou": 2 }, cara: "triste" },

    { t: "Olhar a máquina esquisita do estoque",
      r: "No fundo do estoque, uma máquina de lavar cheia de luzes. 'Veio no lugar de um patinete do futuro', explica o vendedor. 'Pode levar.' Ela zumbe como quem sabe das coisas.",
      vai: "fica", ganha: "maquina-do-tempo", p: { "alem-tempo": 2 }, cara: "confuso" },
  ],
};
