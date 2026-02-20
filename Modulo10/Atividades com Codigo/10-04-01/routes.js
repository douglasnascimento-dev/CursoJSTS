const express = require("express");
const route = express.Router();
const atividadeController = require("./controllers/ativadeController.js");

route.get("/", atividadeController.home);
route.get("/sobre", atividadeController.sobre);
route.get("/mensagem", atividadeController.getMensagem);
route.get("/cadastro", atividadeController.getCadastro);


route.post("/mensagem", atividadeController.postMensagem);
route.post("/cadastro", atividadeController.postCadastro);

module.exports = route;
