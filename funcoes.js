const fs = require("fs");

function getArvoreId(id) {
  const arvores = JSON.parse(fs.readFileSync("arvores.json"));
  arvoreFiltrada = arvores.filter((arv) => arv.id == id)[0];
  return arvoreFiltrada;
}

function addArvore(novaArvore) {
  const arvores = JSON.parse(fs.readFileSync("arvores.json"));
  novaListaArvores = [...arvores, novaArvore];
  fs.writeFileSync("arvores.json", JSON.stringify(novaListaArvores));
}

function removeArvore(id) {
  const arvores = JSON.parse(fs.readFileSync("arvores.json"));
  const arvoresFiltradas = arvores.filter((arv) => arv.id != id);
  fs.writeFileSync("arvores.json", JSON.stringify(arvoresFiltradas));
}

module.exports = {
  getArvoreId,
  removeArvore,
  addArvore,
};
