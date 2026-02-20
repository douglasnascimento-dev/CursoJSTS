const multiplicação = require('./mod')
console.log(multiplicação(2, 9.4))

const Cachorro = require('./mod2')
const bob = new Cachorro('Bob')
bob.latir()

// -- -- -- -- -- 

const path = require('path');
console.log(path.resolve(__dirname, "..", "..", "algumaPasta"))

console.log(__filename)
console.log(__dirname)