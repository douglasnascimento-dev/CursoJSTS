const path = require("path");
const pathArq = path.resolve(__dirname, "teste.json"); //caminho do arquivo que se quer explicar
const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

const pessoas = [
  { nome: "João" },
  { nome: "Maria" },
  { nome: "André" },
  { nome: "Luiz" },
];

const json = JSON.stringify(pessoas, "", 2); // passa para json
escreve(pathArq, json);

async function lerArq(caminho) {
  let leitura = await ler(caminho);
  leitura = JSON.parse(leitura)
  leitura.forEach(val => console.log(val.nome));
}
  