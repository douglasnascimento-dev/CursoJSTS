const { html2 } = require('./base')

console.log(html2)

const htmlRegExpr = /(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g
console.log("\n\n\n\n")
console.log(html2.match(htmlRegExpr))
console.log(html2.replace(htmlRegExpr, '$1HAHAHA $3 HAHAHA$4'))


/* 
$1 $2 $3 - RETROVISOR | Representam os grupos
-> NO MATCH: \1 - \2 - \3
O . não pega quebras de linha, então pode se utilizar ([\s\S]*?)  
/s qualquar carectere em branco VS \S qualquer catactere que não seja em branco
?: - ignorar grupos - criar grupos sem retrovisores

*/