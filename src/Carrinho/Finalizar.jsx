import { useState } from "react";
import { useParams } from "react-router-dom";
import http from "../Http";
import './carrinho.css'
import MensagemErro from '../Login/MensagemAlerta';

const Finalizar = () => {
    const { id } = useParams()

    const [pagamento, setPagamento] = useState('')
    const [pagamentos] = useState(['PIX', 'BOLETO', 'CREDITO', 'DEBITO'])
    const [mensagem, setMensagem] = useState('')
    const [tipo, setTipo] = useState('');

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
                setTipo("sucesso")
                setMensagem("Compra Efetuada com sucesso")
                setTimeout(() => {
                    setMensagem("")
                    setTipo('')
                }, 4000)
            }
            ).catch(erro => {
                console.log(erro);
                setMensagem("Pedido não efetuado")
                setTimeout(() => {
                    setMensagem('')
                }, 4000)
            })

    }


    return (
        <div>
            <h1>Finalizar</h1>
            <div>
                <form onSubmit={finalizarPedido}>
                    <label>Forma de Pagamento:</label>
                    <select className="selectPagamento" value={pagamento} onChange={manipuladorPagamento}>
                        <option>----</option>
                        {pagamentos.map((pgto, indice) => (
                            <option key={indice} value={pgto}>{pgto}</option>
                        ))}
                    </select>
                    {mensagem && <MensagemErro tipo={tipo} msg={mensagem} />}
                    <button className="botaoFinalizar">Finalizar</button>
                </form>
            </div>
        </div>


    )
}

export default Finalizar;