const { text } = require('./base.js')

const regExp01 = /(futebol)/gi;

console.log(regExp01.exec(text))

/* 
FLAGS: 
  g > global (encontre todas as ocorrências, diferente do padrão que para na primeira ocasião)
  i > insentive (desative a case sensitive)
*/

/* 
  () > grupos
   | > ou
*/