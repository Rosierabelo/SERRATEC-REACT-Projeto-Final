import { useState, useEffect } from "react";
import http from '../Http';
<<<<<<< HEAD
import CardProdutos from '../Produtos/CardProdutos';
=======
import CardProdutos from './CardProdutos';
>>>>>>> 7b1e2afa22b143f01a69fd4dc6dd7232a22b4263

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