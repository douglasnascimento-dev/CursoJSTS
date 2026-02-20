const {Livro, livrosAntigos} = require("./livro.js")


const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const livro2 = new Livro("O Alquimista", "Paulo Coelho", 1988);
const livro3 = new Livro("1984", "George Orwell", 1949);
const livro4 = new Livro("A Revolução dos Bichos", "George Orwell", 1945);
const livro5 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
let livros = [livro1, livro2, livro3, livro4, livro5];

for (const livro of livros) {
    console.log(livro.detalhes())
}

console.log(livrosAntigos(livros, 1950))