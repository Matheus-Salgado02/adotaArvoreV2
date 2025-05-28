const { getArvoreServicos } = require("../servicos/arvore");

function getArvoreControlador(req, res) {
  const arvores = getArvoreServicos();
  res.send(arvores);
}

module.exports = {
  getArvoreControlador,
};
