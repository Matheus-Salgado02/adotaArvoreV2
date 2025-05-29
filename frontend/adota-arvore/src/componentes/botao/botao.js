import { Link } from "react-router-dom"
import "./styles.css"

export default function Botao(){
    return(
        <div>
            <Link to='/'><button className="retornar">Retornar</button></Link>
        </div>
    )
}