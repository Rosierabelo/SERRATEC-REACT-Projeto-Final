import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../Http";
import './carrinho.css';


const Carrinho = ({produtos, aoExcluir}) =>{

    
    return(
        <div>
            <h1>Carrinho</h1>
            <div>
                <p>{produtos.lenght}</p>
                <table>
                    <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th></th>
                    </tr>
                    {produtos.map((item, indice) => <tr key={item.numeroPedido} numeroPedido={item.numeroPedido}>
                        <td>{item.nome}</td>
                        <td className="preco"><p>R$ </p>{item.preco.toFixed(2)}</td>
                        <td><button className="botaoExcluir" onClick={() =>{
                            aoExcluir(indice)
                        }}>Excluir</button></td>
                    </tr>)}
                </table>
                <button className="botaoComprar">Comprar</button>
            </div>
        </div>
        
    )
}

export default Carrinho;