const express = require("express");
const route = express.Router();

// Controllers

const homeContoller = require("./src/controllers/homeController");
const infosController = require("./src/controllers/infosController");

// Rotas

// PagInicial
route.get("/", homeContoller.paginaInicial);
route.post("/", homeContoller.postPagInicial);

// PagInfos
route.get("/telefone", infosController.telefone);
route.get("/email", infosController.email);

module.exports = route;
