import { cpfs } from "./base.js";

const texto = "Aqui está uma foto do gato: ![Gato Fofo](img/gato.jpg) e aqui o cachorro: ![Cachorro](https://site.com/dog.png).";

// Construa a RegEx
const regExpImg = /\!\[(.*?)\]\((.*?)\)/g;

// Realize a substituição
//console.log(texto.replace(regExpImg, '<img src="$2" alt="$1" />'));

// Saída Esperada:
// Aqui está uma foto do gato: <img src="img/gato.jpg" alt="Gato Fofo" /> e aqui o cachorro: <img src="[https://site.com/dog.png](https://site.com/dog.png)" alt="Cachorro" />.
// 
// 
 const queryString = "produto=notebook&id=500&categoria=eletronicos&promo=true";

// Construa a RegEx para capturar as chaves e os valores separadamente
const regExpQuery = /(\w*)=(\w*)[^\W]?/g;

let match;
const params = {};

while ((match = regExpQuery.exec(queryString)) !== null) {
  params[match[1]] = match[2];
}

//console.log(params);

// Saída Esperada:
// { produto: 'notebook', id: '500', categoria: 'eletronicos', promo: 'true' }

const comentario = "Olá! Eu <b>adorei</b> o post. <script>alert('hack')</script> Mas precisa ajustar a <div>cor</div>.";

// Construa a RegEx para encontrar as tags completas
const regExpTags = /<.*?>/g;

// Substitua as tags por uma string vazia
//console.log(comentario.replace(regExpTags, ''));

// Saída Esperada:
// Olá! Eu adorei o post. alert('hack') Mas precisa ajustar a cor.
// 


const caminhos = [
    "C:\\Users\\Documento.txt",      // Válido
    "D:\\Jogos\\Game.exe",           // Válido
    "c:\\users\\doc.txt",            // Inválido (Letra da unidade minúscula)
    "F:\\Dados\\Planilha",           // Inválido (Sem extensão)
    "Z:Arquivo.bat",                 // Inválido (Falta a pasta)
    "A:\\Pasta123\\arq.pdf"          // Inválido (Pasta tem números, só letras permitidas)
];

// Construa a RegEx para validar o padrão estrito descrito
const regExpPath = /[A-Z]:((\\)[a-zA-Z]+){2}(\.)[a-z]+/;

let validos = caminhos.filter(caminho => regExpPath.test(caminho));

//console.log(validos);

// Saída Esperada:
// [ 'C:\\Users\\Documento.txt', 'D:\\Jogos\\Game.exe' ]

import { ips, cpfs2 } from "./base.js";

const regExpCPF = /(\d{3}[\.\-]){3}\d{2}/g;

console.log(cpfs, cpfs.match(regExpCPF));
//console.log(cpfs2, cpfs2.match(regExpCPF));

let regExpIP = /((([2][0-5][0-5])|([1][0-9][0-9])|([1-9][0-9])|([0-9]))\.){3}(([2][0-5][0-5])|([1][0-9][0-9])|([1-9][0-9])|([0-9]))/g;

//
// console.log(ips, ips.match(regExpIP));