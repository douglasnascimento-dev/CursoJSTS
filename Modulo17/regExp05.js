const { alfabeto } = require('./base.js')

/* 
[   ] | Conjuntos - Qualquer coisa do conjunto pode ser achadaa
[   ]+ | Se as coisas estiverem juntas, ele considera apenas uma coisa única
[^    ] | Tudo menos o que estiver ali dentro
*/
/*
[0-9] | Rang - 'De 0 a 9' // Sempre na ordem menor > maior
/uXXXX | Carecter unicode
/w - atalho para o range de [a-zA-Z0-9]
/W - nega (/w)
/d - atalho do range [0-9]
/D - nega (/d)
/s - atalho para qualquer espaço (quebra de linha, espaço, avanço de págino)
*/
const regExp06 = /[abc]/g
const regExp07 = /[abc]+/g
const regExp08 = /[^abc]/g

const regExp09 = /[0-9]/g
const regExp10 = /[0-9]+/g
const regExp11 = /[a-k]+/g
const regExp12 = /[a-kA-Z0-9]+/g
const regExp13 = /[^a-kA-Z0-9]+/g
const regExp14 = /[\u00A0-\u00BA]+/g


console.log(alfabeto)
/*  console.log(alfabeto.match(regExp06))
console.log(alfabeto.match(regExp07))
*/ console.log(alfabeto.match(regExp08))
/* console.log(alfabeto.match(regExp09)) 
console.log(alfabeto.match(regExp10))
console.log(alfabeto.match(regExp11))
console.log(alfabeto.match(regExp12))
console.log(alfabeto.match(regExp13)) */
console.log(alfabeto.match(regExp14))



