const fs = require("fs").promises;

module.exports = async function (dados, filePath) {
    await fs.writeFile(filePath, dados, {
        flag: "w",
    });
};
