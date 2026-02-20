export function joinObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
	return Object.assign({}, obj1, obj2)
}

const obj1 = { chave1: 'valor1' }
const obj2 = { chave2: 'valor2' }
const obj3 = { chave3: 145 }

// Exemplo 1: Unindo Objetos (<O1, O2> torna-se <{ chave1: string; }, { chave2: string; }>) 
const union1 = joinObjects(obj1, obj2)
// TIPO DE RETORNO: ➝  { chave1: string; } & { chave2: string; } //

// Exemplo 1: Unindo Objetos (<O1, O2> torna-se <{ chave1: string; }, { chave2: number; }>) 
const union2 = joinObjects(obj1, obj3)
// TIPO DE RETORNO: ➝  { chave1: string; } & { chave2: number; } //