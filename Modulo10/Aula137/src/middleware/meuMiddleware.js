module.exports = (req, res, next) => {
  if (req.body.name) {
    console.log(`Foi postado por ${req.body.name}`);
  }
  next();
};
