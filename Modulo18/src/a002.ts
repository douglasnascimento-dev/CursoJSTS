// TIPO ANY
//
/*
function showMessage(msg: any) {
  return msg;
}

// TIPO VOID
//
function semRetorno(msg: string): void {
  console.log('Esta função não retorna nada' + msg);
}

semRetorno('Olá');

// sempre é recomendado ser explicito com a assinatura de uma função/metodo.

// TIPO OBJECT
//
const data = {
  dia: 10,
  mes: 10,
  ano: 10,
};

const data2: {
  dia: string;
  mes: string;
  ano: string;
  [key: string]: unknown; // permite a criação de chaves extras
} = {
  dia: '1',
  mes: '1',
  ano: '1',
};

// TIPO TUPLE
// similar a tabela / tupla
//

const dadosCliente: [number, string] = [1, 'Luiz'];
const array: readonly string[] = ['Luiz', 'Douglas'];

// UNDEFINED E NULL
//
// se evita utilizar o tipo UNDEFINED
// ela é usada quando algum agurmente é opcional

export function createPerson(
  first: string,
  last: string,
): {
  first: string;
  last: string;
} {
  return {
    first,
    last,
  };
}

// o tipo null é mais utilizado concientemente
//
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf(2);
const squareOfThree = squareOf('3');

// TIPO NEVER
// representa que não retorna nada nunca

function criaErro(): never {
  throw new Error('Erro');
}

criaErro();

// TIPO ENUM

enum Cores {
  VERMELHO = 204, // A CONTAGEM INICIA DO 204
  AZUL,
  AMARELO,
  ROXO = 'ROXO',
}

enum Cores {
  PRETO,
  BRANCO,
}

//ele faz o merge automaticamente,  pq eles tem o mesmo nome
//
// TIPO UNKNOWN
//
// o tipo unknown é mais seguro que o any, pois ele proibe operações antes de acontecer uma checagem
//

// UNION TYPES
// QUANDO HÁ MAIS DE UM TIPO DE TIPO
// EX: string | number | boolean

// TIPOS LITERAIS
//

let x = 10; // tipo number
const y = 100; // tipo 100 (literal) -- subtipo de number
let a: 100 = 100; // tipo 100 (literal)

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Murando',
};
// o nome (tipo Luiz) não podera ser mudado, já o sobrenome (tipo string) pode

// 'VERMELHO' | 'AMARELO' | 'AZUL' > semelhante a enum com mas com tipos literais
//
// TYPE ALIAS

type Idade = number;
type Pessoa = {
  nome: string;
  Idade: Idade;
  cor?: cores;
};

type cores = 'VERMELHO' | 'AMARELO' | 'AZUL';

// VERMELHO' | 'AMARELO' | 'AZUL'
//
//
//  iNTESERCTION TYPES
// O tipo intersection (&) permite combinar múltiplos tipos em um único tipo.
// O objeto resultante deve ter todas as propriedades dos tipos combinados.

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa2 = TemNome & TemSobrenome & TemIdade;

const pessoa2: Pessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

// Função como tipo

type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callback: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  return newArray;
};

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abcMapped);

// Structural Type
// a identidade do tipo não importa muito, apenas as restrições dele
// exemplo em java mesmo que duas entidades tenham o mesma estrutura, mas com identidades diferentes, elas sempre serão diferentes, já em ts isso não ocorres,
//
//

type VerifyUser = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUser = (user, sentUser) => {
  return user.username === sentUser.username && user.password === sentUser.password;
};

const dbUser: User = { username: 'joao', password: '123456' };
const sendUser = { username: 'joao', password: '123456', permisions: '78' };

console.log(verifyUser(dbUser, sendUser));

//mesmo que o dbUser seja de um tipo não especificado, por atender as restrições do ts, ele é entendido como válido para a verificação
// */
//
// // type assertions
//
//  o ! no final de uma expressão indica que aquilo não ira retornar null, chamado de non-null-assertion. ex:
/*
const body = document.querySelector('body')!;
body.style.background = 'red';

const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

const className = document.querySelector('body')?.className;

*/
