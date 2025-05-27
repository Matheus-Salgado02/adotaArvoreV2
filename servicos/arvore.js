const fs = require("fs");

function getArvoreServicos() {
  return JSON.parse(fs.readFileSync("arvores.json"));
}

module.exports = {
  getArvoreServicos,
};
