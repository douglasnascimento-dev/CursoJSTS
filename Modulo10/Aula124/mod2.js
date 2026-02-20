class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;

let nome1 = "Giovinazzi";
let nome2 = "Fuoco";
let nome3 = "Kubtiza";

// Sobreescreve os outros exports
module.exports = {
  nome1,
  nome2,
  nome3,
};

console.log(module.exports);
