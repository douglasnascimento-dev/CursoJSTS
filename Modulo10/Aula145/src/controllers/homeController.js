/* const HomeModel = require("../models/homeModel");
HomeModel.create({
  titulo: "Qualquer Titulo",
  descricao: "Qualquer Descricao",
}).then((dados) => console.log(dados)); */

exports.paginaInicial = (req, res) => {
  /* req.flash("info", "Olá imundo");
  console.log(req.flash("info"))
  console.log(req.session.usuario);*/
  res.render("index", {
    titulo: undefined,
    dia: [10, 8, 9, 5],
  });
};

exports.postPagInicial = (req, res) => {
  res.send("Formulário recebido");
};
