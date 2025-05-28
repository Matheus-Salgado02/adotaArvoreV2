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

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log("ouvindo...");
});

app.get("/", (req, res) => {
  const arvore = JSON.parse(fs.readFileSync("arvores.json"));
  res.send(arvore);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(getArvoreId(id));
});

app.post("/", (req, res) => {
  const novo = req.body;
  res.send(addArvore(novo));
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
