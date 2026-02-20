const fs = require("fs").promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: "w"})
    /* CAMINHO, CONTEUDO, {FLAG: 
    w - APAGAR TUDO O QUE TIVER NO ARQ, } 
    a  - ADD AO CONTEUDO QUE JÁ ESTA LÁ
*/
}


 