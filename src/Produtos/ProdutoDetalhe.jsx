import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../Http";

const Produto = () => {
    const { nome } = useParams();
    const [produto, setProduto] = useState({categoria:{}, preco:0});
    const [carrinho, setCarrinho] = useState([]);
    
    const adicionaProduto = (item) =>{
    setCarrinho([
        ...carrinho,
        item
        ])
     }

    useEffect(() => {
        http.get('produto/' + nome).then(response => setProduto(response.data))
    }, [nome])

    return(
        <div className="detalhe-prod">
            <h2 className="titulo-prod">{produto.nome}</h2>
            <div>
                <h4>{produto.categoria.nome}</h4>
                <h4>{produto.codigo}</h4>
                <p>{produto.descricao}</p>
                <div className="preco-prod">
                    <p>R$ </p><p>{produto.preco.toFixed(2)}</p>
                </div>
                <button>
                    Comprar{adicionaProduto}
                </button>
            </div>
        </div>
    )
}
export default Produto;