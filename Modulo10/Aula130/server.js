const express = require('express')
const app = express()


 // CRUD -> CREATE, READ, UPDATE, DELETE
 //                     POST       GET      PUT            DELETE       
                  
 // http://meusite.com/ <- GET  -> Entregue a Página
// http://meusite.com/sobre <- GET  -> Entregue a Página /sobre
// http://meusite.com/contato <- GET  -> Entregue a Página /contato

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/contato', (req, res) => {
    res.send('+55 43 996529598!')
})

app.get("/", (req, res) => {
    res.send("Recebi o Form");
  });


app.listen(3000, () => console.log('Disponível em http://localhost:3000. Servidor executando na porta 3000')) 
