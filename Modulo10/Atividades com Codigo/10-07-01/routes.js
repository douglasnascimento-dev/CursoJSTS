const express = require("express");
const route = express.Router();

// Controllers

const homeContoller = require("./src/controllers/homeController");

// Rotas

    // PagInicial
route.get("/", homeContoller.homePage);

module.exports = route;
