const express = require("express");
const app = express();
const fs = require("fs");
const {
  getArvoreId,
  addArvore,
  removeArvore,
  updateArvore,
} = require("./funcoes");
//const rotasArvore = require("./rotas/arvore");
const cors = require("cors");

const PORT = 5000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
});

app.get("/", (req, res) => {
  const arvore = JSON.parse(fs.readFileSync("arvores.json"));
  console.log("recebido");
  res.send(arvore);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(getArvoreId(id));
});

app.post("/", (req, res) => {
  const novo = req.body;
  res.send(addArvore(novo));
  res.send('post recebido')
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  arvoreApagada = removeArvore(id);
  res.send(arvoreApagada);
});

app.patch("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  arvoreEditada = updateArvore(id, body);
  res.send(arvoreEditada);
});

//app.use(rotasArvore);
