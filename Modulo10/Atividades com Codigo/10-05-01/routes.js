const express = require("express");
const app = express();
const route = express.Router();
const userControllers = require("./src/controllers/userControllers")

/* route.get("/:userID/:section?", userControllers.home)*/
route.get("/usuario", userControllers.usuario)
route.post("/usuario", userControllers.postUsuario)


module.exports = route
