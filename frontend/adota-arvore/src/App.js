import Botao from "./componentes/botao/botao";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inserir from "./componentes/inserir/Inserir";
import Home from "./componentes/home/Home";
import Editar from "./componentes/editar/editar";
import Visualizar from "./componentes/visualizar/visualizar";
import Header from "./componentes/header/header";

function App() {
  return (
    <div className= "App">
      <BrowserRouter>
      <Botao/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inserir" element={<Inserir />} />
        <Route path="/editar" element={<Editar />} />
        <Route path="/visu" element={<Visualizar />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
