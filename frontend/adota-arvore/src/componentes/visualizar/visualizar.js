import { useEffect, useState } from "react";
import getArvore from "../../servicos/api";

export default function Visualizar() {
  const [mostrar, setMostrar] = useState([]);

  async function lerArvore() {
    const dados = await getArvore();
    setMostrar(dados);
  }

  return (
    <div>
      <div className="main">
        <div className="quadrado-principal">
          <h1>Arvores adotadas</h1>

          <ul>
            {mostrar.map((e) => (
              <li key={e.id}>
                <p>{e.id}</p>
              </li>
            ))}
          </ul>
          <button onClick={lerArvore}>Ver</button>
        </div>
      </div>
    </div>
  );
}
