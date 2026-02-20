const fs = require("fs").promises;

module.exports = async function (filePath) {
  return fs.readFile(filePath, "UTF-8");
};
