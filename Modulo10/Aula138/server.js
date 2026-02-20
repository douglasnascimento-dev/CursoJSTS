// Importações de módulos
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");

// Configuração do aplicativo Express
const app = express();

// Configuração do banco de dados MongoDB
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto");
  })
  .catch((e) => console.log(e));

// Middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.resolve(__dirname, "public")));

// Configuração de views
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Rotas
app.use(routes);

// Inicialização do servidor
app.on("pronto", () => {
  app.listen(3000, () => console.log("Disponível em http://localhost:3000."));
});
