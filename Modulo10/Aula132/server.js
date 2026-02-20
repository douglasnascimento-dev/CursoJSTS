const express = require("express");
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//                     POST       GET      PUT            DELETE

// http://meusite.com/ <- GET  -> Entregue a Página
// http://meusite.com/sobre <- GET  -> Entregue a Página /sobre
// http://meusite.com/contato <- GET  -> Entregue a Página /contato

// http://meusite.com/profiles/idOuNomeDoUsuario
// http://meusite.com/profiles/idOuNomeDoUsuario?campanha=googleads &nome_campanha=pascoa
// PARAMETROS DE URL ? // QUERY STRINGS

app.get("/", (req, res) => {
  res.send(`
        <form action="/" method="POST">
        Nome: <input type="text"  name="nome">
        <button>Enviar formulário</button>
        </form>
        `);
});

app.use( // ATIVA OS PARAMETROS DA REQUISIÇÃO
  express.urlencoded({
    extended: true,
  })
);

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`Você me enviou: Nome = ${req.body.nome}`); // REQUISIÇÃO DO CORPO  (FORMULARIO)
});

app.get("/teste/:idUser?/:outroParametro?", (req, res) => {
  console.log(req.query); // PARAMETROS DA URL
  console.log(req.params); // QUERY STRINGS
  res.send(req.query);
});

app.listen(3000, () =>
  console.log(
    "Disponível em http://localhost:3000. Servidor executando na porta 3000"
  )
);
