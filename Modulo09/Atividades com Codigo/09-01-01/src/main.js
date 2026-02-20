import divisao, {soma as adicionar, multiplicacao as multiplicar} from "./modules/calculadora.js"
import {areaCirculo, perimetroCirculo} from "./modules/geometria.js"

console.log(adicionar(2, 3)); // 5
console.log(multiplicar(2, 3)); // 6
console.log(divisao(6, 3)); // 2

console.log(areaCirculo(3)); // 28.274333882308138
console.log(perimetroCirculo(3)); // 18.84955592153876