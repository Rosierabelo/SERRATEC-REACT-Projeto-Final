import { useState } from "react";
import { useParams } from "react-router-dom";
import http from "../Http";
import './carrinho.css'

const Finalizar = () => {
    const { id } = useParams()

    const [pagamento, setPagamento] = useState('')
    const [pagamentos] = useState(['PIX', 'BOLETO', 'CREDITO', 'DEBITO'])

    const manipuladorPagamento = (evento) => {
        setPagamento(evento.target.value)
    }

    const finalizarPedido = (evento) => {
        evento.preventDefault()
        const pedido = {
            numeroPedido: id,
            formaPagamento: pagamento
        }
        http.post('pedido/finalizar', pedido)
            .then(response => {
                console.log(response);
            }
            ).catch(erro => {
                console.log(erro);
            })

    }


    return (
        <div>
            <h1>Finalizar</h1>
            <div>
                <form onSubmit={finalizarPedido}>
                    <label>Forma de Pagamento:</label>
                    <select className="selectPagamento" value={pagamento} onChange={manipuladorPagamento}>
                        <option></option>
                        {pagamentos.map((pgto, indice) => (
                            <option key={indice} value={pgto}>{pgto}</option>
                        ))}
                    </select>
                    <button className="botaoFinalizar">Finalizar</button>
                </form>
            </div>
        </div>


    )
}

export default Finalizar;