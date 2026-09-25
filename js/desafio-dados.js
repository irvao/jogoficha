// =====================================================================
//  DESAFIO DO IRVING - DADOS DO JOGO
//  Aqui fica tudo que o Irving definiu: lugares, itens, adversidades,
//  finais e o que puxa cada final. Pra mudar o jogo, mexa aqui.
// =====================================================================

const WORKER_URL = "https://jogo-irving.irvingarruda.workers.dev/";

const REGRAS = {
  vidaInicial: 100,
  cenasMin: 8,             // o dia dura entre 8 e 12 cenas (sorteado em segredo)
  cenasMax: 12,
  chanceItem: 0.10,        // 10% de achar item em cada lugar
  chanceAdversidade: 0.10, // 10% de acontecer adversidade em cada lugar
  maxItens: 3,
  maxCenasMesmoLugar: 3,   // o narrador pode segurar o Irving no mesmo lugar por até 3 cenas seguidas
};

// ---------- LUGARES ----------
// id = nome do arquivo sem "fundo-NN-"; foco = parte da foto que aparece no celular em pé (0% esquerda, 100% direita)
const LUGARES = [
  { n: 1,  id: "casa-irving", nome: "Casa do Irving", desc: "a casa do Irving (é uma CASA, nunca chame de chácara)" },
  { n: 2,  id: "rua-irving", nome: "Rua do Irving", desc: "a rua arborizada onde o Irving mora" },
  { n: 3,  id: "uber", nome: "Dentro de um Uber", desc: "banco de trás de um carro de aplicativo" },
  { n: 4,  id: "osasco", nome: "Osasco", desc: "calçadão movimentado do centro de Osasco" },
  { n: 5,  id: "cristo-redentor", nome: "Cristo Redentor", desc: "aos pés do Cristo Redentor, lotado de turistas" },
  { n: 6,  id: "massachusetts", nome: "Massachusetts", desc: "uma rua de tijolinhos em Massachusetts, EUA" },
  { n: 7,  id: "campo-futebol", nome: "Campo de futebol", desc: "gramado de um estádio de futebol com refletores" },
  { n: 8,  id: "quermesse", nome: "Quermesse", desc: "uma quermesse animada com bandeirinhas e quadrilha" },
  { n: 9,  id: "luta-boxe", nome: "Luta de boxe", desc: "um ringue de boxe no meio de uma luta" },
  { n: 10, id: "beco-perigoso", nome: "Beco perigoso", desc: "um beco escuro e suspeito" },
  { n: 11, id: "oficina-mecanica", nome: "Oficina mecânica", desc: "uma oficina mecânica com carro no elevador" },
  { n: 12, id: "sorveteria", nome: "Sorveteria", desc: "uma sorveteria colorida" },
  { n: 13, id: "caixa-papelao", nome: "Dentro de uma caixa de papelão", desc: "o interior de uma caixa de papelão grande" },
  { n: 14, id: "carro-irving", nome: "Carro do Irving", desc: "dentro do carro do próprio Irving" },
  { n: 15, id: "novela-mexicana", nome: "Novela mexicana", desc: "dentro de uma novela mexicana dramática, com casal apaixonado" },
  { n: 16, id: "xique-xique", nome: "Xique-Xique, Bahia", desc: "a entrada da cidade de Xique-Xique, na Bahia" },
  { n: 17, id: "lugar-escuro", nome: "Algum lugar escuro", desc: "um lugar totalmente escuro, sem saber onde" },
  { n: 18, id: "feira", nome: "Frente de uma feira", desc: "uma feira livre cheia de barracas de frutas" },
  { n: 19, id: "aviao", nome: "Avião de passageiros", desc: "dentro de um avião de passageiros em voo" },
  { n: 20, id: "cama-irving", nome: "Cama do Irving", desc: "a cama do Irving, quentinha e tentadora" },
  { n: 21, id: "fabrica-chocolate", nome: "Fábrica de chocolate", desc: "uma fábrica de chocolate com esteira de bombons" },
  { n: 22, id: "loja-eletro-padaria", nome: "Loja de equipamentos de padaria", desc: "uma loja que vende fornos, chapas e máquinas para padaria" },
  { n: 23, id: "hospital", nome: "Hospital", desc: "um corredor de hospital" },
  { n: 24, id: "protesto", nome: "Protesto", desc: "no meio de um protesto barulhento" },
  { n: 25, id: "loja-patinetes", nome: "Loja de patinetes elétricos", desc: "uma loja de patinetes e scooters elétricos" },
  { n: 26, id: "conferencia-dermatologia", nome: "Conferência de dermatologistas", desc: "um auditório lotado numa conferência de dermatologistas" },
  { n: 27, id: "cantina-escola", nome: "Cantina da escola", desc: "a cantina de uma escola na hora do recreio" },
  { n: 28, id: "encapuzado-carro", nome: "Encapuzado no banco de trás", desc: "encapuzado no banco de trás de um carro desconhecido, sem enxergar nada" },
  { n: 29, id: "carregado-passaros", nome: "Carregado por pássaros", desc: "no céu, sendo carregado por vários pássaros" },
  { n: 30, id: "elefante", nome: "Montado em um elefante", desc: "montado em cima de um elefante" },
  { n: 31, id: "trem", nome: "Trem", desc: "dentro de um vagão de trem" },
  { n: 32, id: "bairro-desconhecido", nome: "Bairro desconhecido", desc: "um bairro antigo e desconhecido" },
  { n: 33, id: "pedagio", nome: "Pedágio", desc: "uma praça de pedágio na rodovia" },
  { n: 34, id: "canavial", nome: "Canavial", desc: "no meio de um canavial sem fim" },
  { n: 35, id: "inglaterra-medieval", nome: "Inglaterra medieval", desc: "uma vila da Inglaterra medieval" },
  { n: 36, id: "reuniao-onu", nome: "Reunião da ONU", desc: "o plenário de uma assembleia da ONU" },
  { n: 37, id: "dentro-baleia", nome: "Dentro de uma baleia", desc: "dentro da barriga de uma baleia, tudo escuro" },
  { n: 38, id: "excursao-peruanos", nome: "Excursão de peruanos", desc: "no meio de uma excursão de turistas peruanos" },
  { n: 39, id: "comercial-margarina", nome: "Comercial de margarina", desc: "a gravação de um comercial de margarina, com a família perfeita tomando o café perfeito (que não é o do Irving)" },
  { n: 40, id: "fila-banco", nome: "Fila do banco", desc: "uma fila de banco às 9h01: a senha é 847 e está chamando a 12" },
  { n: 41, id: "programa-auditorio", nome: "Programa de auditório", desc: "um programa de auditório de domingo, virou participante sem querer" },
  { n: 42, id: "leilao-gado", nome: "Leilão de gado", desc: "um leilão de gado: coçou o nariz, comprou um boi" },
  { n: 43, id: "hidroginastica", nome: "Hidroginástica", desc: "uma aula de hidroginástica da terceira idade; elas não deixam sair" },
  { n: 44, id: "balsa", nome: "Balsa", desc: "uma balsa atravessando o rio; o motor pifou no meio" },
  { n: 45, id: "karaoke", nome: "Karaokê", desc: "um karaokê às 7 da manhã, com o microfone na mão do Irving" },
  { n: 46, id: "forno-gigante", nome: "Forno de padaria gigante", desc: "dentro de um forno de padaria gigante: tão perto e tão longe do objetivo" },
  { n: 47, id: "estacao-espacial", nome: "Estação Espacial Internacional", desc: "a Estação Espacial Internacional, café em gravidade zero" },
  { n: 48, id: "casamento", nome: "Casamento de desconhecidos", desc: "um casamento de desconhecidos, onde acham que o Irving é o padrinho" },
  { n: 49, id: "prisao", nome: "Prisão", desc: "uma cela de prisão" },
];
// cenas especiais (não sorteáveis)
const CENAS_EXTRAS = {
  "tunel-do-tempo": { n: 50, nome: "Túnel do tempo", desc: "um túnel de luz azul, viajando no tempo dentro da máquina do tempo" },
  "padaria": { n: 51, nome: "A padaria", desc: "a padaria" },
  "padaria-fechada": { n: 52, nome: "A padaria (fechada)", desc: "a padaria de portas fechadas" },
};

function arquivoFundo(id) {
  const l = LUGARES.find((x) => x.id === id);
  const n = l ? l.n : CENAS_EXTRAS[id].n;
  return `assets/desafio/fundos/fundo-${String(n).padStart(2, "0")}-${id}.webp`;
}
function nomeLugar(id) {
  const l = LUGARES.find((x) => x.id === id);
  return l ? l.nome : CENAS_EXTRAS[id].nome;
}

// ---------- ITENS ----------
// segredo = só o narrador sabe (o jogador nunca vê)
const ITENS = [
  { id: "garfo", arq: "item-01-garfo", nome: "Garfo", segredo: "É inútil. Nada que o jogador fizer com ele ajuda de verdade." },
  { id: "100-reais", arq: "item-02-100-reais", nome: "100 reais", segredo: "Pode ser usado como o jogador quiser. SEM esse item o Irving não tem dinheiro nenhum e não pode pagar nada." },
  { id: "banana", arq: "item-03-banana", nome: "Banana", segredo: "Se o jogador tentar comer a banana: perde 10 de Vida, a banana some, e o narrador avisa que o Irving ODEIA banana." },
  { id: "skate", arq: "item-04-skate", nome: "Skate", segredo: "Deixa MUITO mais fácil qualquer tentativa de se locomover até algum lugar. Depois de usado para se locomover, o skate quebra e some." },
  { id: "fosforos", arq: "item-05-fosforos", nome: "Fósforos", segredo: "Funciona como na vida real." },
  { id: "fita-crepe", arq: "item-06-fita-crepe", nome: "Fita crepe", segredo: "Rolo novinho. Funciona como na vida real." },
  { id: "pedra", arq: "item-07-pedra", nome: "Pedra", segredo: "Funciona como na vida real." },
  { id: "peruca", arq: "item-08-peruca", nome: "Peruca linda", segredo: "Funciona como na vida real (disfarce, estilo...)." },
  { id: "misto-quente", arq: "item-09-misto-quente", nome: "Misto quente", segredo: "Se o jogador tentar COMER o misto quente fora da padaria, ativa o final 'Misto triste' (marque comeu_misto_fora = true)." },
  { id: "maquina-do-tempo", arq: "item-10-maquina-do-tempo", nome: "Máquina do tempo", segredo: "Funciona DE VERDADE, e tem a cara de uma máquina de lavar roupa (brinque com isso). Ao usar, o Irving vai para o túnel do tempo (marque usou_maquina_tempo = true)." },
  { id: "corda", arq: "item-11-corda", nome: "Corda", segredo: "Funciona como na vida real." },
  { id: "chapeu", arq: "item-12-chapeu-maneiro", nome: "Chapéu maneiro", segredo: "Se o jogador COLOCAR o chapéu, a partir daí o narrador SEMPRE menciona como o chapéu é maneiro. Só isso, não tem outro efeito." },
  { id: "alpiste", arq: "item-13-alpiste", nome: "Alpiste", segredo: "Funciona como na vida real (atrai pássaros)." },
  { id: "hidratante", arq: "item-14-hidratante", nome: "Hidratante para as mãos", segredo: "Funciona como na vida real." },
  { id: "cortador-unha", arq: "item-15-cortador-unha", nome: "Cortador de unha", segredo: "Funciona como na vida real." },
  { id: "bouquet", arq: "item-16-bouquet", nome: "Bouquet de flores", segredo: "Funciona como na vida real." },
  { id: "apito", arq: "item-17-apito", nome: "Apito", segredo: "Funciona como na vida real." },
];

// ---------- ADVERSIDADES ----------
const ADVERSIDADES = [
  { id: "pacote", texto: "Um homem suspeito passa um pacote para o Irving" },
  { id: "cachorro", texto: "Um cachorro branco pede ajuda ao Irving para comprar um refri" },
  { id: "mesario", texto: "O Irving é chamado para ser mesário" },
  { id: "estrondo", texto: "O Irving ouve um estrondo forte" },
  { id: "policia", texto: "A polícia para o Irving para fazer questionamentos" },
  { id: "chuva", texto: "Começa a chover forte" },
  { id: "sem-calcas", texto: "O Irving percebe que esqueceu de colocar as calças antes de sair de casa" },
  { id: "cobra", texto: "Tem uma cobra no caminho" },
  { id: "desmaio", texto: "O Irving perde a consciência por 30 minutos" },
  { id: "tropeco", texto: "O Irving tropeça em alguém que está sentado na rua" },
  { id: "alienigena", texto: "Um alienígena tenta abduzir o Irving" },
  { id: "camarao", texto: "O Irving descobre que é alérgico a camarão" },
  { id: "banheiro", texto: "O Irving fica com muita vontade de ir ao banheiro" },
  { id: "rifa", texto: "O Irving ganha a rifa da firma" },
];

// ---------- FINAIS ----------
// tipo: bom / medio / ruim   |   fundo e cara: como a tela final aparece
const FINAIS = {
  "misto-triste":  { nome: "Misto triste", tipo: "ruim", fundo: "rua-irving", cara: "triste",
    texto: "O Irving come o misto que conseguiu, sentado no meio-fio da rua, sem nunca alcançar seu objetivo. Uma lágrima escorre do rosto dele enquanto come o misto." },
  "feliz":         { nome: "Final feliz", tipo: "bom", fundo: "padaria", cara: "feliz",
    texto: "O Irving chega na padaria, come o misto e fica muito feliz!" },
  "sono":          { nome: "O Sono ganha", tipo: "medio", fundo: "cama-irving", cara: "cansado",
    texto: "O Irving volta pra casa sem misto, sem padaria, e volta a dormir." },
  "onde-estou":    { nome: "Onde eu estou", tipo: "ruim", fundo: "bairro-desconhecido", cara: "confuso",
    texto: "O Irving se perde e nunca mais encontra o caminho de volta." },
  "rei-misto":     { nome: "O Rei Misto", tipo: "bom", fundo: "reuniao-onu", cara: "determinado",
    texto: "O Irving consegue dominar o planeta Terra e vira o imperador supremo." },
  "matrix":        { nome: "Matrix", tipo: "medio", fundo: "lugar-escuro", cara: "confuso",
    texto: "O Irving percebe que não existe misto quente nem padaria. Ele está dentro de uma simulação." },
  "quase-feliz":   { nome: "Quase feliz", tipo: "medio", fundo: "padaria", cara: "bravo",
    texto: "O Irving está quase lá, mas quando vai morder o misto na padaria, um cão vem correndo e rouba o misto das mãos dele." },
  "misto-dupla":   { nome: "Misto em dupla", tipo: "bom", fundo: "padaria", cara: "feliz",
    texto: "O Irving come DOIS mistos quentes na padaria, já que ele já tinha um consigo." },
  "filosofico":    { nome: "Final filosófico", tipo: "bom", fundo: "rua-irving", cara: "neutro",
    texto: "O Irving percebe que o misto quente de verdade são os amigos que fez pelo caminho, e volta a pé pra casa." },
  "antes-tempo":   { nome: "Antes do tempo", tipo: "ruim", fundo: "inglaterra-medieval", cara: "assustado",
    texto: "O Irving se perde no passado, numa época em que o misto quente ainda não foi inventado." },
  "alem-tempo":    { nome: "Além do tempo", tipo: "ruim", fundo: "estacao-espacial", cara: "triste",
    texto: "O Irving se perde no futuro, onde o misto quente já está frio." },
  "famoso":        { nome: "O famoso", tipo: "bom", fundo: "rua-irving", cara: "feliz",
    texto: "O Irving encontra o cantor Naldo na rua e pede um autógrafo." },
  "prisao":        { nome: "Prisão", tipo: "ruim", fundo: "prisao", cara: "triste",
    texto: "O Irving termina a jornada trancafiado numa prisão, sem nem vislumbre de um misto quente." },
  "dia-errado":    { nome: "Dia errado", tipo: "medio", fundo: "padaria-fechada", cara: "confuso",
    texto: "O Irving chega na padaria, mas ela está fechada: hoje é o dia internacional do padeiro." },
  "hora-errada":   { nome: "Hora errada", tipo: "medio", fundo: "padaria", cara: "triste",
    texto: "O Irving chega na padaria, mas já é 13h e ele fica sem graça de pedir um misto quente. Uma lágrima escorre do rosto dele." },
  "milagre":       { nome: "Milagre", tipo: "bom", fundo: "carregado-passaros", cara: "feliz",
    texto: "Sem vislumbre de sucesso, o Irving está pronto pra desistir, mas dois pássaros vêm carregando um misto no bico e largam no colo dele." },
  "banana":        { nome: "Banana", tipo: "ruim", fundo: "padaria", cara: "triste",
    texto: "Quando o Irving vai finalmente comer o misto, percebe que tem uma banana no meio. Isso não faz sentido nenhum, e ele fica triste." },
  "amnesia":       { nome: "Amnésia", tipo: "medio", fundo: "hospital", cara: "confuso",
    texto: "Tudo o que aconteceu sobrecarrega o Irving, que tem amnésia e esquece que queria um misto." },
  "morte":         { nome: "Morte", tipo: "ruim", fundo: null, cara: "cansado",
    texto: "A Vida do Irving chegou a zero. O misto quente vai ter que esperar outra vida." },
};

// Finais que entram no sorteio do fim do dia (os outros são automáticos)
const FINAIS_SORTEIO = ["feliz", "quase-feliz", "hora-errada", "dia-errado", "banana", "sono", "onde-estou",
  "rei-misto", "matrix", "filosofico", "antes-tempo", "alem-tempo", "famoso", "prisao", "milagre", "amnesia"];

// O que soma +1 de peso em cada final (lugares visitados, itens na mochila, adversidades que apareceram)
const PUXA_FINAL = {
  "feliz":       ["comercial-margarina", "fabrica-chocolate", "loja-eletro-padaria", "forno-gigante"],
  "quase-feliz": ["feira", "quermesse", "adv:cachorro"],
  "hora-errada": ["fila-banco", "pedagio", "trem", "balsa", "adv:desmaio"],
  "dia-errado":  ["protesto", "reuniao-onu", "conferencia-dermatologia", "adv:mesario"],
  "banana":      ["xique-xique", "sorveteria", "elefante", "item:banana"],
  "sono":        ["casa-irving", "cama-irving", "caixa-papelao"],
  "onde-estou":  ["bairro-desconhecido", "canavial", "massachusetts", "osasco"],
  "rei-misto":   ["reuniao-onu", "inglaterra-medieval", "luta-boxe", "adv:rifa"],
  "matrix":      ["lugar-escuro", "novela-mexicana", "programa-auditorio", "adv:alienigena"],
  "filosofico":  ["excursao-peruanos", "casamento", "hidroginastica", "cantina-escola", "item:bouquet"],
  "antes-tempo": ["inglaterra-medieval", "tunel-do-tempo", "item:maquina-do-tempo"],
  "alem-tempo":  ["estacao-espacial", "tunel-do-tempo", "item:maquina-do-tempo"],
  "famoso":      ["karaoke", "quermesse", "cristo-redentor", "item:apito"],
  "prisao":      ["prisao", "beco-perigoso", "encapuzado-carro", "adv:policia", "adv:pacote"],
  "milagre":     ["carregado-passaros", "cristo-redentor", "hospital", "item:alpiste"],
  "amnesia":     ["hospital", "luta-boxe", "dentro-baleia", "aviao", "adv:desmaio"],
};

const EXPRESSOES = ["neutro", "feliz", "determinado", "assustado", "confuso", "bravo", "triste", "cansado"];
