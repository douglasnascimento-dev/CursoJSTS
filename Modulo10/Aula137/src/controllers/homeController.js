exports.paginaInicial = (req, res) => {
  res.render("index");
};

exports.postPagInicial = (req, res) => {
  res.send(req.body);
};
