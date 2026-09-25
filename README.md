# Ficha do Ferreiro-Estrategista

Ficha de personagem estilo RPG, com habilidades reais e notas de 0 a 10. Feita em HTML, CSS e JavaScript puros, sem instalar nada: é só abrir o `index.html` no navegador.

Inclui o jogo **Desafio do Irving**: um dia na vida do Irving, que só quer tomar café da manhã na padaria. O jogador escreve o que o Irving faz, uma IA (Gemini) narra e decide a dificuldade, e um d20 decide o resto. São 49 lugares, 17 itens, 14 adversidades e 19 finais. Abra `jogo.html` ou clique em "Jogar" na ficha.

## Estrutura

```
jogoficha/
├── index.html              # a ficha (esqueleto)
├── jogo.html               # o jogo Desafio do Irving
├── css/
│   ├── style.css           # visual da ficha
│   └── desafio.css         # visual do jogo
├── js/
│   ├── dados.js            # CONTEÚDO da ficha: habilidades e notas (edite aqui)
│   ├── ficha.js            # lógica da ficha
│   ├── desafio-dados.js    # CONTEÚDO do jogo: lugares, itens, adversidades, finais e regras (edite aqui)
│   ├── desafio-ia.js       # instruções pro narrador (Gemini) e conversa com o Worker
│   └── desafio.js          # lógica do jogo (telas, dado, sorteio de final)
└── assets/
    ├── img/                # retrato e emblemas da ficha
    └── desafio/
        ├── fundos/         # fundo-NN-lugar.webp (1920x1080)
        ├── irving/         # irving-<expressao>.webp (fundo transparente)
        ├── itens/          # item-NN-nome.webp (fundo transparente)
        └── ui/             # d20 e coração
```

## Como o jogo fala com a IA

A chave do Gemini **não** fica neste repositório. O jogo chama um Cloudflare Worker (`https://jogo-irving.irvingarruda.workers.dev/`), que guarda a chave como segredo e só aceita pedidos vindos de `https://irvao.github.io`. Por isso, abrindo o `jogo.html` direto do computador o narrador não responde: teste pela página publicada.

## Como mudar o jogo

Tudo que é conteúdo está em `js/desafio-dados.js`:

- `REGRAS`: duração do dia (8 a 12 cenas), chance de item e de adversidade (10%), máximo de itens (3).
- `LUGARES`, `ITENS` (com o efeito secreto que só o narrador conhece), `ADVERSIDADES` e `FINAIS`.
- `PUXA_FINAL`: o que soma +1 de peso em cada final no sorteio do fim do dia.

O jeito de narrar (tom, humor, regras pro narrador) fica no topo de `js/desafio-ia.js`.

## Como mudar a ficha

Abra `js/dados.js`. Cada habilidade é uma linha `["Nome", nota]`. Mude a nota, salve, atualize a página.

O nível é calculado automaticamente a partir da data de nascimento.

## Como publicar

O repositório está preparado para o GitHub Pages: em *Settings > Pages*, escolha a branch `main` e a pasta raiz. A página fica no ar em `https://irvao.github.io/jogoficha/`.

## Ilustrações

Retrato, emblemas e o Irving do jogo gerados com Google Gemini a partir de descrições próprias. Fundos e itens do jogo: fotos reunidas pelo Irving, tratadas para o jogo.
