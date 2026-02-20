const Task = require("../models/Task");

exports.homePage = async (req, res) => {
  const tasks = await Task.find();
  res.render("home", {
    tasks,
  });
};

