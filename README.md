# Desafio do Irving

Um dia na vida do Irving, que só quer tomar café da manhã na padaria. O jogador escreve o que o Irving faz, uma IA (Gemini) narra e decide a dificuldade, e um d20 decide o resto. São 49 lugares, 17 itens, 14 adversidades e 19 finais.

Jogue em `https://irvao.github.io/jogoficha/`. Feito em HTML, CSS e JavaScript puros, sem instalar nada.

## Estrutura

```
jogoficha/
├── index.html              # o jogo
├── jogo.html               # endereço antigo (redireciona pro index.html)
├── css/
│   └── desafio.css         # visual do jogo
├── js/
│   ├── desafio-dados.js    # CONTEÚDO do jogo: lugares, itens, adversidades, finais e regras (edite aqui)
│   ├── desafio-ia.js       # instruções pro narrador (Gemini) e conversa com o Worker
│   └── desafio.js          # lógica do jogo (telas, dado, sorteio de final)
└── assets/desafio/
    ├── fundos/             # fundo-NN-lugar.webp (1920x1080)
    ├── irving/             # irving-<expressao>.webp (fundo transparente)
    ├── itens/              # item-NN-nome.webp (fundo transparente)
    └── ui/                 # d20 e coração
```

## Como o jogo fala com a IA

A chave do Gemini **não** fica neste repositório. O jogo chama um Cloudflare Worker (`https://jogo-irving.irvingarruda.workers.dev/`), que guarda a chave como segredo e só aceita pedidos vindos de `https://irvao.github.io`. Por isso, abrindo o `index.html` direto do computador o narrador não responde: teste pela página publicada.

## Como mudar o jogo

Tudo que é conteúdo está em `js/desafio-dados.js`:

- `REGRAS`: duração do dia (8 a 12 cenas), chance de item e de adversidade (10%), máximo de itens (3), quantas cenas seguidas o Irving pode ficar no mesmo lugar (3).
- `LUGARES`, `ITENS` (com o efeito secreto que só o narrador conhece), `ADVERSIDADES` e `FINAIS`.
- `PUXA_FINAL`: o que soma +1 de peso em cada final no sorteio do fim do dia.

O jeito de narrar (tom, humor, regras pro narrador) fica no topo de `js/desafio-ia.js`. Quanto de Vida cada resultado tira fica em `aplicarResultado`, no `js/desafio.js`.

## Como publicar

GitHub Pages: em *Settings > Pages*, branch `main`, pasta raiz.

## Ilustrações

O Irving do jogo foi gerado com Google Gemini a partir de descrições próprias. Fundos e itens: fotos reunidas pelo Irving, tratadas para o jogo.
