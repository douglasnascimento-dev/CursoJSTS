/* const HomeModel = require("../models/homeModel");
HomeModel.create({
  titulo: "Qualquer Titulo",
  descricao: "Qualquer Descricao",
}).then((dados) => console.log(dados)); */

exports.paginaInicial = (req, res) => {
  res.render("index");
};

exports.postPagInicial = (req, res) => {
  res.send("Formulário recebido");
};
