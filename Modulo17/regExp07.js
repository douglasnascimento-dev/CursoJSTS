/* 
^ - APENAS NO ÍNICIO VS
[^] - DENTRO DO CONJUNTO - NEGAÇÃO DO CONJUNTO
$ - TERMINA COM
m - MULTILINE - CADA LINHA SERIA UM REGEXP
*/

const { cpfs2  } = require('./base.js')
const cpfRegExp = /^(\d{3}.){2}\d{3}-\d{2}$/gm

console.log(cpfs2.match(cpfRegExp))