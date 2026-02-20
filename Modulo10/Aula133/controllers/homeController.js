exports.paginaInicial = (req, res) => {
  res.send(`
        <form action="/" method="POST">
        Nome: <input type="text"  name="nome">
        <button>Enviar formulário</button>
        </form>
        `);
};

exports.postPagInicial = (req, res) => {
  res.send("Formulário recebido");
};
