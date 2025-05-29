import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <header className="header">
        <h1>AdotaArvoreV2</h1>
      </header>

      <div className="main">
        <div className="quadrado-principal">
          <div className="inserir">
            <h1 className="texto-inserir">Inserir arvores</h1>
            <Link to="/inserir">
            <button>Selecionar</button>
            </Link>
          </div>

          <div className="editar">
            <h1>Editar ou remover arvores</h1>
            <Link to = "/editar"><button>Selecionar</button></Link>
            
          </div>

          <div className="visualizar">
            <h1>Visualizar todas arvores</h1>
            <Link to = "visu">
            <button>Selecionar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
