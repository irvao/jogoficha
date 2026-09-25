# Guia para escrever a história do Desafio do Irving

O jogo NÃO usa mais IA. Cada lugar tem textos de chegada e uma lista de opções escritas à mão.
Em cada cena o jogo sorteia 6 opções (entre as do lugar, as dos itens da mochila e as das adversidades ativas) e o jogador clica numa.
Cada opção leva a outro lugar, mexe na Vida, dá ou gasta itens e soma PONTOS para os finais.
No fim do dia (6 a 8 cenas, o jogador não sabe quantas), ganha o final com mais pontos.

O exemplo oficial é `js/historia/lugares-01.js` (Casa do Irving). Siga o mesmo formato.

## A história
O Irving (33 anos, barba, boné, óculos aviador, jaqueta bege, câmera fotográfica pendurada no ombro) acorda em casa com a brilhante ideia de tomar café da manhã na padaria (quer um misto quente). O dia vai ficando cada vez mais absurdo, e ele vai parar nos lugares mais improváveis.

## Tom (obrigatório)
- Narrador ÉPICO e HEROICO: bardo medieval / voz de trailer de filme. O humor vem do contraste entre a narração solene e as situações banais e absurdas. "E assim, o bravo Irving..."
- SEJA BREVE: frases curtas. O jogo roda no celular.
- Terceira pessoa ("O Irving...").
- NUNCA use travessão (—) nem meia-risca (–). Use vírgula, ponto ou parênteses.
- A casa do Irving é uma CASA. Nunca "chácara".
- Sem palavrão, sem violência explícita, sem sangue. Nada ofensivo com grupos de pessoas.
- O Naldo (cantor) é pessoa real: NÃO escreva sobre ele. No máximo, pistas vagas ("dizem que um cantor famoso passou por aqui").
- Português do Brasil.

## Formato de um lugar
```js
CENAS["id-do-lugar"] = {
  chegadas: [ "texto 1", "texto 2" ],   // 2 textos. Aparece quando o Irving chega. Máx. 40 palavras cada.
  opcoes: [ { ... }, { ... } ],          // 12 opções (mínimo 11)
};
```
O texto de chegada deve funcionar venha o Irving de onde vier (não cite o lugar anterior). Descreve o lugar e o que está acontecendo, pode terminar com um gancho. NÃO termine com "O que o Irving faz?" (o jogo já pergunta).

## Formato de uma opção
| campo | obrigatório | o que é |
|---|---|---|
| `t` | sim | texto do botão. Curto! Máx. 42 caracteres. Verbo no infinitivo ("Pular o muro", "Pedir ajuda ao guarda"). |
| `r` | sim | resultado narrado. 1 a 3 frases, máx. 40 palavras. DEVE narrar a transição até o próximo lugar quando `vai` muda de lugar (ex.: "...e quando abre os olhos, está num trem."). |
| `vai` | sim (menos quando tem `fim`) | pra onde o Irving vai: `"id-do-lugar"`, ou uma lista `["id1","id2"]` (o jogo escolhe um que ele ainda não visitou), ou `"fica"` (continua no mesmo lugar, o resultado vira a nova situação). Com lista, o `r` precisa servir pra todos os destinos (ex.: "...e acorda em algum lugar muito diferente."). |
| `p` | quase sempre | pontos pros finais, ex. `{ feliz: 2, sono: 1 }`. Total de 1 a 3 por opção (4 só em momentos decisivos). |
| `vida` | não | mudança de Vida, sempre NEGATIVA ou 0 (a Vida nunca sobe). Opções normais: 0 a -10. Perigosas: -10 a -20. |
| `ganha` | não | id de item que o Irving pega (ele guarda na mochila). |
| `perde` | não | id de item que é gasto/perdido. |
| `precisa` | não | id de item que o Irving PRECISA ter pra essa opção aparecer (ex.: pagar algo precisa de `"100-reais"`). |
| `precisaAdv` | não | a opção só aparece se essa adversidade estiver acontecendo. |
| `resolve` | não | id da adversidade que essa opção resolve. |
| `marca` | não | grava uma lembrança da partida (ex.: `"comprou-boi"`). |
| `precisaMarca` / `semMarca` | não | a opção só aparece se a lembrança existir / não existir. |
| `cenaMin` | não | a opção só aparece a partir dessa cena (1 a 8). |
| `fim` | não | ENCERRA o dia na hora com esse final (use com `cenaMin: 4` ou mais). Máximo 1 por lugar, e só quando fizer muito sentido. |
| `risco` | não | opção arriscada: o jogador rola um d20 e precisa tirar `risco` ou mais (ex.: 9 = 60%, 11 = 50%, 14 = 35%). O botão mostra a chance. Quando tem `risco`, os campos normais são o SUCESSO e é obrigatório o campo `falha`. |
| `falha` | com `risco` | o que acontece se falhar: `{ r, vida, vai, p, ... }` (mesmos campos). Falha tira -12 a -25 de Vida. |
| `cara` | não | expressão do Irving: neutro, feliz, determinado, assustado, confuso, bravo, triste, cansado. |

## Regras de cada lugar (12 opções)
- Pelo menos 7 destinos DIFERENTES entre as opções (isso é o emaranhado). Use lugares de todo o mapa, não só os do seu grupo.
- 1 ou 2 opções com `"fica"` (a situação evolui ali mesmo).
- 2 ou 3 opções arriscadas (`risco` + `falha`). A recompensa do sucesso deve valer o risco (mais pontos, item bom, destino melhor).
- 1 a 3 opções que dão item (`ganha`), coerentes com o lugar.
- 1 ou 2 opções que usam item (`precisa`), com resultado especial (ex.: dar alpiste aos pássaros, pagar com os 100 reais).
- Pontos: cada lugar puxa para os finais ligados a ele (tabela abaixo), mas as opções devem permitir virar a história pra outros caminhos. Pelo menos 1 opção que puxa pra `feliz` (focar no objetivo: perguntar o caminho da padaria, seguir cheiro de pão...).
- Opção sem sentido nenhum é bem-vinda, desde que seja engraçada.
- Máx. 1 opção com `fim`, e só se fizer muito sentido.

## Finais (ids para usar em `p` e `fim`)
| id | final | tema que puxa pra ele |
|---|---|---|
| `feliz` | Final feliz: chega na padaria e come o misto | foco no objetivo, cheiro de pão, padeiros, equipamentos de padaria, café da manhã perfeito |
| `quase-feliz` | Quase feliz: um cão rouba o misto na padaria | cachorros, animais famintos, feiras, comida de rua, quase conseguir |
| `hora-errada` | Hora errada: chega às 13h | perder tempo, filas, trânsito, esperar, burocracia lenta, relógios |
| `dia-errado` | Dia errado: padaria fechada (dia do padeiro) | feriados, datas, eventos oficiais, calendário, protestos |
| `banana` | Banana: tem banana no misto | bananas, frutas, sorvetes, coisas tropicais, macacos, elefantes |
| `sono` | O Sono ganha: volta pra cama | cansaço, preguiça, conforto, deitar, caixas aconchegantes |
| `onde-estou` | Onde eu estou: se perde pra sempre | pegar caminhos desconhecidos, atalhos errados, lugares longe, mapas |
| `rei-misto` | O Rei Misto: domina o planeta | poder, liderança, discursos, vencer disputas, coroas, multidões obedecendo |
| `matrix` | Matrix: está numa simulação | coisas que não fazem sentido, déjà vu, TV, novelas, escuridão, falhas na realidade |
| `filosofico` | Final filosófico: os amigos são o misto | fazer amizades, ajudar pessoas, gentileza, grupos, festas |
| `antes-tempo` | Antes do tempo: perdido no passado | coisas antigas, medieval, história, máquina do tempo |
| `alem-tempo` | Além do tempo: perdido no futuro | espaço, tecnologia, futuro, robôs, máquina do tempo |
| `famoso` | O famoso: encontra um cantor famoso | música, cantar, palco, fama, microfone, autógrafos |
| `prisao` | Prisão: acaba preso | coisas ilegais, fugir da polícia, pacotes suspeitos, bagunça |
| `milagre` | Milagre: pássaros trazem um misto | pássaros, fé, sorte divina, alpiste, desistir e ser salvo |
| `amnesia` | Amnésia: esquece o que queria | pancadas na cabeça, confusão, excesso de informação, voos, desmaios |

Automáticos (NÃO use em `p`): `morte` (Vida zerou), `misto-triste` (comeu o misto fora da padaria), `misto-dupla` (terminou o dia com o misto na mochila).

## Lugares (ids)
casa-irving, rua-irving, uber, osasco, cristo-redentor, massachusetts, campo-futebol, quermesse, luta-boxe, beco-perigoso, oficina-mecanica, sorveteria, caixa-papelao, carro-irving, novela-mexicana, xique-xique, lugar-escuro, feira, aviao, cama-irving, fabrica-chocolate, loja-eletro-padaria, hospital, protesto, loja-patinetes, conferencia-dermatologia, cantina-escola, encapuzado-carro, carregado-passaros, elefante, trem, bairro-desconhecido, pedagio, canavial, inglaterra-medieval, reuniao-onu, dentro-baleia, excursao-peruanos, comercial-margarina, fila-banco, programa-auditorio, leilao-gado, hidroginastica, balsa, karaoke, forno-gigante, estacao-espacial, casamento, prisao, tunel-do-tempo

(`tunel-do-tempo` só deve ser destino de opções que usam a máquina do tempo. A padaria NÃO é destino: ela só aparece nos finais.)

## Itens (ids)
garfo (inútil), 100-reais (sem ele o Irving não paga nada), banana (o Irving ODEIA banana), skate (ajuda a se locomover, quebra ao usar), fosforos, fita-crepe, pedra, peruca (peruca linda), misto-quente (comer fora da padaria = final Misto triste, NÃO crie opção de comer o misto), maquina-do-tempo (tem cara de máquina de lavar, funciona de verdade), corda, chapeu (chapéu maneiro), alpiste, hidratante, cortador-unha, bouquet (bouquet de flores), apito

## Adversidades (ids)
pacote (homem suspeito passa um pacote), cachorro (cachorro branco pede ajuda pra comprar refri), mesario (chamado pra ser mesário), policia (polícia para pra questionar), chuva (chuva forte), sem-calcas (esqueceu as calças), cobra (cobra no caminho), desmaio (perdeu a consciência 30 min), tropeco (tropeçou em alguém sentado na rua), alienigena (alienígena tenta abduzir), camarao (descobriu alergia a camarão), banheiro (vontade de ir ao banheiro), rifa (ganhou a rifa da firma)

## Lembranças compartilhadas (marcas)
Podem ser gravadas (`marca`) num lugar e usadas (`precisaMarca`) em qualquer outro:
- `comprou-boi`: comprou um boi no leilão (o boi pode reaparecer seguindo o Irving)
- `padrinho`: foi padrinho num casamento de desconhecidos
- `famoso-tv`: apareceu na TV (as pessoas reconhecem ele)
- `procurado`: fez algo que deixou a polícia de olho nele
- `amigo-peruanos`: fez amizade com a excursão de peruanos
- `campeao`: venceu uma disputa (boxe, futebol, etc.)
- `mapa`: conseguiu um mapa (que provavelmente está errado)
Use marcas com moderação: 0 a 2 por lugar.
