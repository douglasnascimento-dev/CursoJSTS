const { lookahead } = require('./base')

console.log(lookahead)

const activeRegEx = /.+ active$/gim
// console.log(lookahead.match(activeRegEx))
// const positiveLookaHead = /.+(?= active)/gim
// console.log(lookahead.match(positiveLookaHead))

//const negativeLookaHead = /^(?!.+ active).+$/gim
//console.log(lookahead.match(negativeLookaHead))

const positiveLookBehind = /(?<=online\s+).*/gim
 console.log(lookahead.match(positiveLookBehind))

 const negativeLookBehind = /^.+(?<!online.+)$/gim
 console.log(lookahead.match(negativeLookBehind))


/* 
Revisão do LookAhead Positivo e Negativo
LookAhead Positivo (?=...):
A regex só vai corresponder se a sua condição principal for seguida pelo padrão dentro do (?=...).
Exemplo: /cor(?=azul)/ encontra "cor" apenas se a palavra "azul" vier logo depois.

LookAhead Negativo (?!...):
A regex só vai corresponder se a sua condição principal NÃO for seguida pelo padrão dentro do (?!...).
É como se você estivesse dizendo: "encontre isso, mas apenas se isso não tiver X vindo logo em seguida".
Exemplo: /cor(?!azul)/ encontra "cor" apenas se a palavra "azul" não vier logo depois


Revisão do LookBehind Positivo e Negativo
LookBehind Positivo (?<=...):
A regex só vai corresponder se a sua condição principal for precedida (vier antes) do padrão dentro do (?<=...).
Exemplo: /(?<=R\$)100/ encontra "100" apenas se o texto "R$" vier logo antes.

LookBehind Negativo (?<!...):
A regex só vai corresponder se a sua condição principal NÃO for precedida (não vier antes) do padrão dentro do (?<!...).
Exemplo: /(?<!R\$)100/ encontra "100" apenas se o texto "R$" não vier logo antes.
*/