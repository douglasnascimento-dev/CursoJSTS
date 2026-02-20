const fs = require("fs").promises;
const path = require("path");

async function readdir(rootDir = path.resolve(__dirname)) {
  let files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (const file of files) {
    const fullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fullPath);

    if (/\.git/g.test(fullPath)) continue;

    if (stats.isDirectory()) {
      readdir(fullPath);
      continue;
    }

    if (!/\.json/g.test(fullPath)) continue;

    console.log(file);
  }
}

readdir("../");
