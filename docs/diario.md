# Diário - Construindo um Cronômetro em 7 dias.

O intuito desse material é catalogar o meu processo de aprendizagem de React utilizando o framework Next JS. **OBS: Sem usar Inteligência Artificial.** A proposta do desafio é provar que ainda é possível aprender sem dependência de IA, embora com dificuldades RS.

## Dia 01 (18/09/2026):
Hoje eu aprendi a configurar um projeto Next JS. Se não me engano o comando é `npx create-next-app@latest` (Enquanto eu escrevia, eu escrevi npm invés de NPX, maldito Angular rs)

Além disso, aprendi como funciona a componentização no React/Next e o uso dos Props pra variação estática.

## Dia 02 (19/09/2026):

Tô tendo uma dificuldade danada de compreender a documentação, mas no pior dos casos eu procuro as aulas no YouTube.

Aprendi a passar funções, o tal do useState do React. Porém não consegui fazer o que eu queria: A DROGA DO CONTADOR

## Dia 03 (20/09/2026):

Eu tiltei. Decidi regredir um nível tendo em vista que o teste vai ser puramente com React, além de que códigos funcionais vistos no youtube não funcionavam :D

CONSEGUI FAZER CONTAGEM, MEU DEUS COMO EU ODEIO JAVASCRIPTTTTTTTTTTTTTTTTTTTTTTT, ERA SÓ UMA SETA =========>>>>>>>>>>>

CONSEGUI, TÁ FUNCIONANDO, MEU DEEEEEEEEEEEEEEEEEEEEEUS DOIS DIAS PRA FAZER ISSO FUNCIONAR QUE ÓDIO.

## Dia 04 (21/09/2026)

Tive um dia cheio de coisas pra fazer, não pude mexer no código.

## Dia 05 (22/09/2026)

É muito interessante esse limite que eu impus de não desenvolver nada com IA, porque me obriga a procurar outras formas de resolver. O que antes eu podia resolver em 5 minutos agora leva 3 dias <3

O código que eu havia feito funcionava. Porém, quando fui aplicar a lógica para conversão dos valores, não funcionou. Conversando com outro desenvolvedor, ele me contou que havia uma diferença entre uma simples `function` e `useEffect`.
- Na function, não é possível manipular os states sem o set, seja com um if ou outras operações. As variáveis ficam fixas.
- Já no useEffect funciona. Por que? Não sei. Porém é possível. E foi a solução do meu problema.

Agora eu tenho um state pro status do cronometro, que pode ser melhor trabalhado. E funções pros controles.

Como próximo objetivo, quero melhorar a abordagem com relação a formatação das horas.
- Opção 1: Tratar segundo, minuto e hora individualmente. 
    - Vantagens: Mais simples, foco na ferramenta
    - Desvantagens: Código feiokkkkkk
- Opção 2: Invés de unidade, trabalhar com TEMPO
    - Vantagens: Lógica e código bem-feito
    - Desvantagens: Não faço ideia de como fazer isso

## Dia 06 (23/09/2026)

Hoje o dia foi mais tranquilo. Até cheguei a pesquisar no Youtube se havia outra forma de formatar o valor de `0` pra `00`, mas não achei, então fui lá e eu mesmo fiz. Deve possuir formas melhores, mas a minha funcionou.

Além disso consegui implementar a lógica que eu queria para o cronômetro. O foco desse projeto era ser simples, então sem estresse. Estou feliz com o resultado de hoje. (Acho que só tem que ajeitar esse tempo dos milisegundos q tá meio estranho mas tranquilidade)

Objetivo de amanhã: **responsividade.**

## Dia 07 (24/09/2026)

### Parte 1: Responsividade

Como todo desafio que leva dias, o temido dia aconteceu. O dia do desânimo, cansaço, sei lá. Mas eu tenho um objetivo e vou fazer o que precisa ser feito.

Responsividade feita. O que achei mais interessante foi a forma de trabalhar com os textos:
1. Texto base - Pensar sempre na menor tela possível
2. Texto md - Como se comporta numa tela media
3. Texto lg - Tela de destkop

Além disso, uso de wrap para o elemento se adaptar ao width, por exemplo: `text-wrap`, `flex-wrap`.

### Parte 2: Roteamento + Rotas Privadas e Públicas

Eu ja tava indo me deitar, porém fiquei encucado por ter ouvido, lido, que as rotas no next são pelos arquivos, mas ao testar não funcionou.

Graças a Deus a Rocketseat existe, e me explicou. As rotas são organizadas por pasta, e a rota precisa de um arquivo `page.tsx`. Por exemplo: `localhost:3000/produtos`, você cria uma pasta dentro de app como `app/(public)` para conter as rotas públicas, depois cria outra pasta `app/(public)/produtos`. Assim você consegue ter uma nova rota.

## Considerações finais

Com isso finalizo esse projeto de cronômetro simples em uma semana. Me estressei bastante no começo, mas acho que foi devido o meu pouco contato com JavaScript e costume com o Angular. 

Além disso, desenvolver sem utilizar Inteligência Artificial me estimulou bastante. Procurei aulas no YouTube, li e re-li a documentação do React e Next várias vezes, acessei o StackOverFlow (quem diria), **foi um processo divertido**. Percebi também que procurar a solução com a IA, embora seja mais fácil e rápido, não é uma boa forma de estudo. Entretanto, se usar de forma certa priorizando eficência invés de respostas rápidas, te potencializa.

Com relação a esse projeto, pretendo aprender outros frameworks de Back-end, como Laravel, FastAPI. E como ainda falta aprender conexão com back-end, talvez seja uma boa forma implementar isso aqui.

Meus próximos passos agora pra melhorar meu domínio no React é:
1. Trabalhar com GRID 
2. Desenvolver mais projetos 