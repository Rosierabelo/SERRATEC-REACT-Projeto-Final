import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../Http";

const Produto = () => {
    const { nome } = useParams();
    const [produto, setProduto] = useState({categoria:{}});

    useEffect(() => {
        http.get('produto/' + nome).then(response => setProduto(response.data))
    }, [nome])

    return(
        <div>
            <h2>{produto.nome}</h2>
            <div>
                <h4>{produto.categoria.nome}</h4>
                <h4>{produto.codigo}</h4>
                <p>{produto.descricao}</p>
                <p>{produto.preco}</p>
            </div>
        </div>
    )
}
export default Produto;