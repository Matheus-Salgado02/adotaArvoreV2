import { useState } from "react";
import { postArvore } from "../../servicos/api";
import "./styles.css";

export default function Inserir() {
  const [form, setForm] = useState([]);

  async function post() {
    console.log("aqi");
    await postArvore();
  }

  async function formulario(e) {
    const id = e.target.id.value;
    const especie = e.target.especie.value;
    const habitat = e.target.habitat.value;

    console.log(id, especie, habitat);
  }

  return (
    <div>
      <div className="main">
        <div className="quadrado-principal">
          <div className="insercoes">
            <form onSubmit={async (e) => {
             await formulario(e)
            }}>
              <h2>Adicionar uma nova arvore</h2>
              <label>Id da árvore</label>
              <input
                type="number"
                className="inserir-"
                placeholder="..."
                name="id"
              ></input>
              <label>Especie</label>
              <input
                type="text"
                className="inserir-"
                placeholder="..."
                name="especie"
              ></input>
              <label>Habitat</label>
              <input
                type="text"
                className="inserir-"
                placeholder="..."
                name="habitat"
              ></input>

              <input className="botao-submit" type="submit"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
