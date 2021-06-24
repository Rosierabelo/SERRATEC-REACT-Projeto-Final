import { Link } from "react-router-dom";
import './estilo.css'

const CardProdutos = ({ nome, preco, id, categoria }) => {


    return (
        <div className="cardProduto">
            <h3 className="titulo">{nome}</h3>
            <div>
               <div> <h4>{categoria}</h4></div>
                <div className='cardPreco'><p>R$ </p><p>{preco}</p></div>
            </div>
            <div className='link'><Link to={`/produtos/${nome}`}>Ver detalhes</Link></div>
        </div>
    )
}
export default CardProdutos;