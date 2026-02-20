class Livro {
  constructor(titulo, autor, anoPublicacao) {
    (this.titulo = titulo),
      (this.autor = autor),
      (this.anoPublicacao = anoPublicacao);
  }

  detalhes() {
    return `O Livro ${this.titulo} foi publicado em ${this.anoPublicacao} por ${this.autor}`;
  }
}

function livrosAntigos(livrosData, ano) {
  let livrosMaisAntigos = [];

  for (const livroData of livrosData) {
    if (livroData.anoPublicacao < ano) {
      livrosMaisAntigos.push(livroData);
    }
  }
  return livrosMaisAntigos;
}

module.exports = {
  Livro,
  livrosAntigos,
};
