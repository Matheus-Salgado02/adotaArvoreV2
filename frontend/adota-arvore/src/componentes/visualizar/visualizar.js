import { useEffect, useState } from "react";
import getArvore from "../../servicos/api";

export default function Visualizar() {
  const [mostrar, setMostrar] = useState([]);

  async function lerArvore() {
    const dados = await getArvore();
    console.log(mostrar);
    setMostrar(dados);
  }

  return (
    <div>
      <div className="main">
        <div className="quadrado-principal">
          <h1>Arvores adotadas</h1>
          <div>
            <ul>
              {mostrar.map((e) => (
                <li key={e.id}>
                  <h1>{e.id}</h1>
                  <h3>{e.especie}</h3>
                  <h3>{e.habitat}</h3>
                </li>
              ))}
            </ul>
          </div>

          <button onClick={lerArvore}>Mostrar</button>
          <button
            onClick={() => {
              setMostrar([]);
            }}
          >
            Esconder
          </button>
        </div>
      </div>
    </div>
  );
}
