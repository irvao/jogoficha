# Ficha do Ferreiro-Estrategista

Ficha de personagem estilo RPG, com habilidades reais e notas de 0 a 10. Feita em HTML, CSS e JavaScript puros, sem instalar nada: é só abrir o `index.html` no navegador.

Este projeto é a base de um mini jogo que vem depois.

## Estrutura

```
jogoficha/
├── index.html          # a página (esqueleto)
├── css/
│   └── style.css       # visual: cores, fontes, animações
├── js/
│   ├── dados.js        # CONTEÚDO: nome, nível, habilidades, traços (edite aqui)
│   └── ficha.js        # lógica: monta a página e anima
└── assets/img/
    ├── retrato.jpg     # retrato do personagem
    └── icones/         # um emblema por categoria
```

## Como mudar a ficha

Abra `js/dados.js`. Cada habilidade é uma linha `["Nome", nota]`. Mude a nota, salve, atualize a página.

O nível é calculado automaticamente a partir da data de nascimento.

## Como publicar

O repositório está preparado para o GitHub Pages: em *Settings > Pages*, escolha a branch `main` e a pasta raiz. A página fica no ar em `https://irvao.github.io/jogoficha/`.

## Ilustrações

Retrato e emblemas gerados com Google Gemini a partir de descrições próprias.
