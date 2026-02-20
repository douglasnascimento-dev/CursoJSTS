const nome = "Douglas"; 
const sobrenome = "Nascimento";

const nomeCompleto = () => {
  return `${nome} ${sobrenome}`;
};

// Formas de Exportar  
module.exports.nome = nome;
exports.sobrenome = sobrenome
this.nomeCompleto = nomeCompleto; 

