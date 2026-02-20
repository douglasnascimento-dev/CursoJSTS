exports.home = (req, res) => {
  res.send("Seja bem vindo ao Nosso Site");
};

exports.sobre = (req, res) => {
  res.send("Estamos na Ativa desde o ano de 1503");
};

exports.getMensagem = (req, res) => {
  res.send(`
        <form action="/mensagem" method="POST">
        Deseja receber Mensagens: <input type="checkbox"  name="resposta">
        <button>Enviar Respota</button>
        </form>
        `);
};


exports.postMensagem = (req, res) => {
    res.send(`Sua resposta foi ${req.body.resposta.value()}`)
}

exports.getCadastro = (req, res) => {
  res.send(`
        <form action="/cadastro" method="POST">
        Nome: <input type="text"  name="nome">
        <button>Enviar Nome</button>
        </form>
        `);
};

exports.postCadastro = (req, res) => {
    res.send(`Seu nome é ${req.body.nome}`)
}