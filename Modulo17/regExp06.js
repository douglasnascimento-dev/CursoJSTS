const { cpfs, ips } = require('./base.js')

const regExp15 = /[0-999]{3}\.[0-999]{3}\.[0-999]{3}\-[0-99]{2}/g
const regExp15Resposta = /(\d{3}.){2}\d{3}-\d{2}/g

const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?|0)\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?|0)$/g;

console.log(cpfs)
console.log(cpfs.match(regExp15))
console.log(cpfs.match(regExp15Resposta))

console.log(ips)
console.log(ips.match(ipRegex))