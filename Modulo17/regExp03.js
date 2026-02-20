const { texto, arquivos } = require('./base.js')

const regExp01 = /(Jo+ão)/gi;
const regExp02 = /\.jpe{0,1}g/gi;
console.log(texto.match(regExp01))

for(const arquivo of arquivos) {
  console.log(arquivo, " > ", arquivo.match(regExp02))
}

/* 
  \ carectere de escape - informa que um caracter será literal e não terá função
  * (opcionais) | 0 ou n vezes
  + (obrigatório) | 1 ou n vezes
  ? (opcionais) | 0 ou 1 vezes 
  {n, m} | minímo, máximo vezes - { , 1} / {1, } / {1} / {1, 20}0,0

*/