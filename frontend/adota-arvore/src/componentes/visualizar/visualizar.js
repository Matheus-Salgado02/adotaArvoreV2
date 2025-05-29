import getArvore from "../../servicos/api";

export default function Visualizar() {

  async function fetchArvore(){
    const ArvoreDaAPI = await getArvore();
    console.log(ArvoreDaAPI)
  }

  return (
    <div>
      <div className="main">
        <div className="quadrado-principal">
          <h1>Arvores adotadas</h1>
          
          <div className="lista-arvores">{/* adicionar logica */}</div>
          <button onClick={fetchArvore}>Ver</button>
        </div>
      </div>
    </div>
  );
}
