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

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

// Middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = {
  secret: "dfghgdgsadfghjgutyrtytbyertybn ",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 24 * 30,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

// Configuração de views
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Rotas
app.use(routes);

// Inicialização do servidor
app.on("pronto", () => {
  app.listen(3000, () => console.log("Disponível em http://localhost:3000."));
});
