const mod = require("./mod.js");
console.log(mod.nomeCompleto());

const nomeUser = require("./mod.js").nome;
console.log(nomeUser);

const { nome, sobrenome, nomeCompleto } = require("./mod.js");
console.log(nome, sobrenome, nomeCompleto());

const { Pessoa } = require("./mod2.js");
const p1 = new Pessoa("Dgas");
console.log(p1);
