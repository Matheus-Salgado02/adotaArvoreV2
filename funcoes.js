const fs = require("fs");

function getArvoreId(id) {
  const arvores = JSON.parse(fs.readFileSync("arvores.json"));
  arvoreFiltrada = arvores.filter((arv) => arv.id == id)[0];
  if (arvoreFiltrada == null) {
    return "Id invalido";
  } else {
    return arvoreFiltrada;
  }
}

function addArvore(novaArvore) {
  const arvores = JSON.parse(fs.readFileSync("arvores.json"));
  novaListaArvores = [...arvores, novaArvore];
  if (
    "id" in novaArvore &&
    "especie" in novaArvore &&
    "habitat" in novaArvore
  ) {
    fs.writeFileSync("arvores.json", JSON.stringify(novaListaArvores));
  } else {
    return "dados inválidos";
  }
}

function removeArvore(id) {
  const arvores = JSON.parse(fs.readFileSync("arvores.json"));
  validacaoArvore = arvores.filter((arv) => arv.id == id)[0];
  if (validacaoArvore == null) {
    return "id para deletar invalido";
  } else {
    const arvoresFiltradas = arvores.filter((arv) => arv.id != id);
    fs.writeFileSync("arvores.json", JSON.stringify(arvoresFiltradas));
  }
}

function updateArvore(id, dadoEditado) {
  const arvores = JSON.parse(fs.readFileSync("arvores.json"));
  const index = arvores.findIndex((arv) => arv.id == id);
  const conteudoNovo = { ...arvores[index], ...dadoEditado };
  arvores[index] = conteudoNovo;
  fs.writeFileSync("arvores.json", JSON.stringify(arvores));
}

module.exports = {
  getArvoreId,
  removeArvore,
  addArvore,
  updateArvore,
};
