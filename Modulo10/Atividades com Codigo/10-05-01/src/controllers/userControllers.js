exports.home = (req, res) => {
  res.send(`
        UserID: ${req.params.userID} - 
        Section: ${req.params.section ? req.params.section : "Não Houve"} -
        Status: ${req.query.status ? req.query.status : "Não Houve"} -
        Categoria: ${req.query.categoria ? req.query.categoria : "Não Houve"}
    `);
};

exports.usuario = (req, res) => {
  res.render("index");
};

exports.postUsuario = (req, res) => {
  res.send(`
    Seu nome é ${req.body.name} - 
    Seu email é ${req.body.email}
    `);
};
