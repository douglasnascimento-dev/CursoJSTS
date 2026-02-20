const fs = require("fs").promises;
const path = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function getUserInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

let caminho = path.resolve("modules", "dados.json");

let array = [];

async function initFile(path, conteudo = []) {
  await fs.writeFile(path, conteudo, { flag: "w" });
}

async function writeFile(path, conteudo) {
  const data = JSON.parse(await readFile(path));
  data.push(conteudo);
  await fs.writeFile(path, JSON.stringify(data, "", 2));
}

async function readFile(path) {
  const arqvJSON = await fs.readFile(path, "utf8");
  return arqvJSON;
}

async function executar() {
  await initFile(caminho, JSON.stringify(array, "", 2));
  let arqvJSON = await readFile(caminho);

  const nome = await getUserInput("Qual é o seu nome? ");
  const sobrenome = await getUserInput("Qual é o seu sobrenome? ");
  await writeFile(caminho, { nome, sobrenome });
  arqvJSON = await readFile(caminho);
  console.log(arqvJSON);
}

executar();
