const { text } = require('./base.js')

const regExp01 = /(João|Joao)/gi;

console.log(text.match(regExp01)) // Similar ao RegExp.test()
console.log(text.replace(regExp01, 'Lipe')) // Substitui a epressão regular pelo segundo parâmetro
console.log(text.replace(regExp01, '---$1---')) // Adiciona ao termo encontrado, cada grupo é representado por $1 > $2 > ....
console.log(text.replace(regExp01, function(input){
  return input.toUpperCase()
})) /// Também é possível criar funções dentro do replace() 
