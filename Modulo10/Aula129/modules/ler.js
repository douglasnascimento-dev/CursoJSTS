const fs = require("fs").promises;

module.exports = (caminho, dados) => {
    return fs.readFile(caminho, 'utf8');
    /* CAMINHO, PADRÃO DE CARACTERES
*/
}


 