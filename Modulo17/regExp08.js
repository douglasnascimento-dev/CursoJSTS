const { html2 } = require('./base')

console.log(html2)

const htmlRegExpr = /<(\w+)>.+?<\/\1>/gi
console.log("\n\n\n\n")
console.log(html2.match(htmlRegExpr))

/* 
$1 $2 $3 - RETROVISOR | Representam os grupos
-> NO MATCH: \1 - \2 - \3
*/