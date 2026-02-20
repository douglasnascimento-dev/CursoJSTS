/* let nome: string = 'Luiz'; // o tipo aqui é inferido automaticamente
let idade: number = 30; // qualquer tipo de número, incluindo hexa, octa, bin, com pontos, negativos
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
let big: bigint = 10n; //

// tipos de referencia

let arrayNumbers: Array<number> = [0x275a, 45, 24];
let arrayNumbers2: number[] = [0x275a, 45, 24];

let person: { nome: string; idade: number; adulto?: boolean } = { nome: 'Luiz', idade: 30, adulto: true };
// o ? representa opcional
//
//funcoes

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

const result = soma('1', 7);
*/
