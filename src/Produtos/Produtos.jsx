import { useState, useEffect } from "react";
import http from '../Http';
import CardProdutos from '../Produtos/CardProdutos';

const Produtos = () => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        http.get('produtos').then(response => setProdutos(response.data))
    }, [])

    return (
        <div>
            <section>
                <h2>Produtos</h2>
            </section>
            <section> 
                {produtos.map((item, indice) => <CardProdutos key={indice} id={item.id} codigo={item.codigo} categoria={item.categoria} nome={item.nome} descricao={item.descricao} preco={item.preco}/>)}
            </section>
        </div>
    )

}
export default Produtos;