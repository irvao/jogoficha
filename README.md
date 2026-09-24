# Ficha do Ferreiro-Estrategista

Ficha de personagem estilo RPG, com habilidades reais e notas de 0 a 10. Feita em HTML, CSS e JavaScript puros, sem instalar nada: é só abrir o `index.html` no navegador.

Inclui o mini jogo **Um Dia na Fortaleza**: 8 situações sorteadas, 3 escolhas cada, um d20 decide. Abra `jogo.html` ou clique em "Jogar" na ficha.

## Estrutura

```
jogoficha/
├── index.html          # a ficha (esqueleto)
├── jogo.html           # o mini jogo
├── css/
│   ├── style.css       # visual da ficha
│   └── jogo.css        # visual do jogo
├── js/
│   ├── dados.js        # CONTEÚDO da ficha: habilidades e notas (edite aqui)
│   ├── situacoes.js    # CONTEÚDO do jogo: as situações e respostas (edite aqui)
│   ├── ficha.js        # lógica da ficha
│   └── jogo.js         # lógica do jogo (regras no topo do arquivo)
└── assets/img/
    ├── retrato.jpg     # retrato do personagem
    ├── cena-*.jpg      # fundos do jogo (forja, escritorio, garagem, casa, quintal)
    ├── vida.png, bateria.png, d20.png
    └── *.png           # um emblema por categoria
```

## Como mudar a ficha

Abra `js/dados.js`. Cada habilidade é uma linha `["Nome", nota]`. Mude a nota, salve, atualize a página.

O nível é calculado automaticamente a partir da data de nascimento.

## Como criar situações novas

Abra `js/situacoes.js`, copie um bloco inteiro de situação e mude os textos. O campo `habilidade` precisa ter o nome exato de uma habilidade de `dados.js`, porque a nota vem de lá. As regras (dificuldade, quantas situações por dia) ficam no topo de `js/jogo.js`.

## Como publicar

O repositório está preparado para o GitHub Pages: em *Settings > Pages*, escolha a branch `main` e a pasta raiz. A página fica no ar em `https://irvao.github.io/jogoficha/`.

## Ilustrações

Retrato, emblemas e cenários gerados com Google Gemini a partir de descrições próprias.
