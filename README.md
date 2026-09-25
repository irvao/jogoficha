# Desafio do Irving

Um dia na vida do Irving, que só quer tomar café da manhã na padaria. Em cada cena o jogador escolhe entre 6 opções, e as escolhas levam o Irving por um emaranhado de 50 lugares até um dos 19 finais. São 17 itens, 13 adversidades, chefes (duelo de pedra, papel e tesoura ou quiz), NPCs com desafios que dão itens e a Casa do Norte, onde um vendedor oferece 1 de 3 itens. Não usa IA: todos os textos estão escritos nos arquivos do jogo.

Jogue em `https://irvao.github.io/jogoficha/`. Feito em HTML, CSS e JavaScript puros, sem instalar nada.

## Estrutura

```
jogoficha/
├── index.html                  # o jogo
├── jogo.html                   # endereço antigo (redireciona pro index.html)
├── css/desafio.css             # visual do jogo
├── js/
│   ├── desafio-dados.js        # REGRAS, lugares, itens, adversidades, finais, chefes e o ajuste de cada final
│   ├── historia/               # A HISTÓRIA: textos de chegada e opções de cada lugar
│   │   ├── lugares-01.js       #   Casa do Irving (exemplo comentado)
│   │   ├── lugares-02-09.js ... lugares-42-50.js
│   │   ├── lugar-53-casa-do-norte.js
│   │   ├── itens-adversidades.js  # opções dos itens da mochila, das adversidades e coringas
│   │   └── personagens.js      # chefes de quiz, NPCs com desafio e o vendedor da Casa do Norte
│   ├── desafio-motor.js        # as regras: sorteia as 6 opções, aplica escolhas, calcula o final
│   └── desafio.js              # a tela: botões, dado, duelo, tela final
├── ferramentas/
│   ├── GUIA-HISTORIA.md        # como escrever/editar lugares e opções (formato e tom)
│   ├── validar.js              # confere se a história está bem montada
│   └── simular.js              # joga milhares de partidas e mostra a chance de cada final
└── assets/desafio/             # fundos, caras do Irving, itens e interface
```

## Como o jogo funciona

- Cada lugar tem 2 textos de chegada e 12 ou 13 opções. Em cada cena aparecem 6, sorteadas entre as do lugar, as dos itens da mochila e as das adversidades que estão acontecendo.
- Cada opção leva a outro lugar (ou segura o Irving no mesmo), pode tirar Vida, dar ou gastar itens, resolver problemas e soma **pontos** para os finais.
- Opções com 🎲 são arriscadas: rola um d20 e precisa tirar o número indicado. Falhar tira mais Vida.
- O dia dura de 10 a 12 cenas (sorteado em segredo). Toda partida tem 1 chefe; NPCs aparecem em 20% das cenas (no máximo 2 por partida).
- No fim do dia, ganha o final com mais pontos (as escolhas + 1 ponto por lugar, item ou adversidade ligados a ele na tabela `PUXA_FINAL`). Algumas opções encerram o dia na hora.

## Como mudar o jogo

- Chefes de quiz, NPCs e o vendedor da Casa do Norte: `js/historia/personagens.js` (explicado dentro do arquivo).
- Textos e opções: arquivos em `js/historia/`. O formato está explicado em `ferramentas/GUIA-HISTORIA.md`.
- Regras (duração, dano, quantas opções, etc.): `REGRAS` em `js/desafio-dados.js`.
- Se um final estiver saindo demais ou de menos: `AJUSTE_FINAL` em `js/desafio-dados.js`.

Depois de mexer, dá pra conferir (precisa do Node instalado):

```
node ferramentas/validar.js
node ferramentas/simular.js
```

## Como publicar

GitHub Pages: em *Settings > Pages*, branch `main`, pasta raiz.

## Ilustrações

O Irving do jogo foi gerado com Google Gemini a partir de descrições próprias. Fundos e itens: fotos reunidas pelo Irving, tratadas para o jogo.
