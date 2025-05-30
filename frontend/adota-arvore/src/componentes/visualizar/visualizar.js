import { useEffect, useState } from "react";
import getArvore from "../../servicos/api";

export default function Visualizar() {
  const [mostrar, setMostrar] = useState([]);

  async function lerArvore() {
    const dados = await getArvore();
    console.log(dados);
    setMostrar(dados);
  }

  useEffect(() => {
    lerArvore();
  });

  return (
    <div>
      <div className="main">
        <div className="quadrado-principal">
          <h1>Arvores adotadas</h1>

          <div className="lista-arvores"></div>
          <button>Ver</button>
        </div>
      </div>
    </div>
  );
}
