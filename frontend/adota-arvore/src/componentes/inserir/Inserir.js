import './styles.css'

export default function Inserir() {
  return (
    <div>
      <div className="main">
        <div className="quadrado-principal">
          <div className="insercoes">
            <label>Id da árvore</label>
            <input type="number" placeholder="id..."></input>
            <label>Especie</label>
            <input type="text" placeholder="especie..."></input>
            <label>Habitat</label>
            <input type="text" placeholder="habitat..."></input>
            <br />
            <br />
            <button>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
