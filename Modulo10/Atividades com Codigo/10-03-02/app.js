const ler = require("./modules/ler")
const escrever = require("./modules/escrever")
const path = require("path")
const pathArq = path.resolve(__dirname, "listaDeAtividade.txt"); //caminho do arquivo que se quer explicar


let listaDeAtividade = [
    "Ler",
    "Beber Água",
    "Ir ao Parque",
    "Beber Café",
    "Entrar pela porta....",
    (new Date()).toLocaleDateString()
]
 listaDeAtividade = listaDeAtividade.join("\n")

const executar = async (dados, filePath) => {
    await escrever(dados, filePath);
    console.log(await ler(filePath))
}

executar(listaDeAtividade, pathArq)