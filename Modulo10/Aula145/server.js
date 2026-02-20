// Importação de módulos externos
require("dotenv").config(); // Carrega variáveis de ambiente do arquivo .env
const express = require("express"); // Framework para criação de servidores web
const mongoose = require("mongoose"); // Biblioteca para interagir com o MongoDB
const path = require("path"); // Módulo para manipulação de caminhos de arquivos
const helmet = require("helmet"); // Middleware para segurança HTTP
const csrf = require("csurf"); // Middleware para proteção contra CSRF
const session = require("express-session"); // Middleware para gerenciamento de sessões
const MongoStore = require("connect-mongo"); // Armazenamento de sessões no MongoDB
const flash = require("connect-flash"); // Middleware para mensagens temporárias (flash)

// Importação de módulos internos
const routes = require("./routes"); // Arquivo de rotas
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require("./src/middlewares/middleware"); // Middlewares personalizados

// Configuração do aplicativo Express
const app = express();

// Configuração do banco de dados MongoDB
mongoose
  .connect(process.env.CONNECTIONSTRING) // Conexão com o MongoDB usando a string de conexão do arquivo .env
  .then(() => {
    app.emit("pronto"); // Emite um evento quando a conexão é estabelecida
  })
  .catch((e) => console.log(e)); // Loga erros de conexão

// Middlewares globais
app.use(helmet()); // Adiciona cabeçalhos de segurança
app.use(
  express.urlencoded({
    extended: true, // Permite o envio de dados complexos via formulário
  })
);
app.use(express.json()); // Permite o envio de arquivos .json
app.use(express.static(path.resolve(__dirname, "public"))); // Define a pasta de arquivos estáticos

// Configuração de sessões
const sessionOptions = {
  secret: "dfghgdgsadfghjgutyrtytbyertybn", // Chave secreta para assinar a sessão
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), // Armazena sessões no MongoDB
  resave: false, // Não salva a sessão novamente se não houver alterações
  saveUninitialized: false, // Não salva sessões não inicializadas
  cookie: {
    maxAge: 1000 * 60 * 24 * 30, // Tempo de expiração do cookie (30 dias)
    httpOnly: true, // Impede acesso ao cookie via JavaScript no cliente
  },
};
app.use(session(sessionOptions)); // Aplica as configurações de sessão
app.use(flash()); // Habilita mensagens flash

// Configuração de views
app.set("views", path.resolve(__dirname, "src", "views")); // Define o diretório das views
app.set("view engine", "ejs"); // Define o motor de templates como EJS

// Configuração de proteção CSRF
app.use(csrf()); // Habilita proteção contra CSRF
app.use(middlewareGlobal); // Middleware global personalizado
app.use(csrfMiddleware); // Middleware para adicionar token CSRF às respostas
app.use(checkCsrfError); // Middleware para tratar erros de CSRF

// Rotas
app.use(routes); // Define as rotas da aplicação

// Inicialização do servidor
app.on("pronto", () => {
  app.listen(3000, () => console.log("Disponível em http://localhost:3000.")); // Inicia o servidor na porta 3000
});
