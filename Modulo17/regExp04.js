/* 
<*> *** </*> em loop  === <.*> .* <\/.*>
O . representa qualquer caractere que não seja uma quebra de Linha
greedy === guloso. Ele sempre irá até o final
non-gredy === não guloso. Ele sempre irá pegar o minímo possível
*/

const { html } = require('./base.js')

const regExp03 = /<.*>.*<\/.*>/g
const regExp04 = /<.*?>.*?<\/.*?>/g

console.log(html.match(regExp03))
console.log(html.match(regExp04))