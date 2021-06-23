import { Link } from "react-router-dom";
import './estilo.css'

const CardProdutos = ({ nome, preco, id, categoria }) => {
    return (
        <div className="cardProduto">
            <h3 className="titulo">{nome}</h3>
            <div>
                <h4>{categoria}</h4>
                <p>{preco}</p>
            </div>
            <div className='link'><Link to={`/produtos/${id}`}>Ver detalhes</Link></div>
        </div>
    )
}
export default CardProdutos;