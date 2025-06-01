import { postArvore } from "../../servicos/api";
import "./styles.css";

export default function Inserir() {
  async function post() {
    const postArv = await postArvore();
  }

  return (
    <div>
      <div className="main">
        <div className="quadrado-principal">
          <div className="insercoes">
            <h2>Adicionar uma nova arvore</h2>
            <label>Id da árvore</label>
            <input type="number" placeholder="..."></input>
            <label>Especie</label>
            <input type="text" placeholder="..."></input>
            <label>Habitat</label>
            <input type="text" placeholder="..."></input>

            <button
              onClick={async () => {
                await postArvore();
              }}
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
