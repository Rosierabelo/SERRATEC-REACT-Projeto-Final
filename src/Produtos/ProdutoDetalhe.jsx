import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../Http";

const Produto = () => {
    const { id } = useParams();
    const [produto, setProduto] = useState({});

    useEffect(() => {
        http.get('produto/' + id).then(response => setProduto(response.data))
    }, [id])

    return(
        <div>
            <h2>{produto.nome}</h2>
            <div>
                <h4>{produto.categoria}</h4>
                <h4>{produto.codigo}</h4>
                <p>{produto.descricao}</p>
                <p>{produto.preco}</p>
            </div>
        </div>
    )
}
export default Produto;