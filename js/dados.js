// =====================================================================
//  DADOS DO PERSONAGEM
//  Este é o único arquivo que você precisa editar pra mudar a ficha:
//  notas, nomes de habilidade, traços, nível. O visual fica no CSS e a
//  lógica fica em ficha.js, então aqui é só "conteúdo".
// =====================================================================

const PERSONAGEM = {
  nome: "IRVING",
  classe: "Ferreiro-Estrategista",
  subclasse: "Senhor da Fortaleza",
  nascimento: "1992-12-04",          // usado pra calcular o nível (idade)
  especializacao: "Ofícios",
  status: "Sempre pronto",
  lore: 'Personagem híbrido que comanda pessoas e números de dia e forja, cozinha e conserta de noite. Raro por unir mãos calejadas com planilha aberta. Ganha bônus em qualquer situação em que "chamar alguém" não é opção.',
};

// Cada categoria tem: id (nome do arquivo do ícone), título e lista de
// habilidades no formato [nome, nota de 0 a 10].
const CATEGORIAS = [
  {
    id: "gestao",
    titulo: "Gestão",
    habilidades: [
      ["Liderança", 9],
      ["Oratória", 9],
      ["Gestão de inventário", 9],
      ["Finanças", 8],
      ["Negociação", 8],
      ["Análise ótica", 8],
      ["Marketing", 7],
      ["Sociabilidade", 4],
    ],
  },
  {
    id: "tecnologia",
    titulo: "Tecnologia",
    habilidades: [
      ["Inteligência artificial", 9],
      ["Impressão 3D", 8],
      ["Automação residencial", 8],
      ["Infraestrutura", 7],
      ["Programação", 5],
      ["Eletrônica", 3],
      ["Modelagem 3D", 2],
    ],
  },
  {
    id: "oficios",
    titulo: "Ofícios",
    habilidades: [
      ["Cutelaria", 10],
      ["Culinária", 10],
      ["Recarga de munição", 9],
      ["Mecânica automotiva", 7],
      ["Elétrica automotiva", 7],
      ["Áudio automotivo", 7],
      ["Elétrica residencial", 7],
      ["Hidráulica", 7],
      ["Criação de animais", 7],
      ["Solda", 6],
      ["Relojoaria", 5],
      ["Costura", 4],
    ],
  },
  {
    id: "sobrevivencia",
    titulo: "Sobrevivência e Combate",
    habilidades: [
      ["Preparação", 10],
      ["Resiliência", 10],
      ["Armas de fogo", 10],
      ["EDC (kit de bolso diário)", 10],
      ["Sobrevivência selvagem", 8],
    ],
  },
  {
    id: "mobilidade",
    titulo: "Mobilidade",
    habilidades: [
      ["Pilotagem de carro", 9],
      ["Pilotagem de moto", 9],
      ["Skate", 8],
      ["Pilotagem de barco", 7],
    ],
  },
  {
    id: "artes",
    titulo: "Artes e Cultura",
    habilidades: [
      ["Inglês", 10],
      ["Fotografia", 9],
      ["Filosofia", 8],
      ["Pintura", 7],
      ["Produção de vídeo", 7],
      ["Instrumentos de corda", 6],
    ],
  },
];

// Traços de classe: [nome, efeito]
const TRACOS = [
  ["Autossuficiente", "+2 em qualquer tarefa manual, -1 em garantia de fábrica"],
  ["Forja à mesa", "Faz a faca, corta a carne, cozinha e fotografa o prato"],
  ["Aprendiz de mago", "XP dobrado aprendendo na prática, zero em curso tradicional"],
  ["Inabalável", 'Imune ao status "pânico"; adversidade vira tarefa'],
  ["Sempre pronto", "O item necessário já está no bolso; nunca é pego de surpresa"],
  ["Lobo de palco", "+5 falando pra 200 pessoas, -5 em conversa fiada com 2"],
];
