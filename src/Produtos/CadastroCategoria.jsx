import { useState} from 'react';
import './formProduto.css';
import http from "../Http";
import MensagemErro from '../Login/MensagemErro';
const FormularioRegistroCategoria = () => {

    const [nome, setNome] = useState('');

    const [descricao, setDescricao] = useState('');

    const [mensagem, setMensagem] = useState('');

    const manipuladorNome = (evento) => {
        setNome(evento.target.value)
    }



    const manipuladorDescricao = (evento) => {
        setDescricao(evento.target.value)
    }



    const cadastrarCategoria = (evento) => {
        evento.preventDefault()
        const categoria = {
            nome: nome,
            descricao: descricao,
        }

        http.post('categoria', categoria).then(response => {
            console.log(response.data)
            setMensagem("Cadastro Efetuado com sucesso")
            setTimeout(() => {
                setMensagem("")
            }, 3000)
        }).catch(erro => {
            console.log(erro)
            setMensagem("Cadastro não efetuado")
            setTimeout(() => {
                setMensagem('')
            }, 4000)
        })
    }

    return (
        <div className="formulario">
            <h1>Cadastro de Categoria</h1>
            <form onSubmit={cadastrarCategoria}>
                <div>
                    <label className="labels">Nome</label>
                    <input required value={nome} onChange={manipuladorNome} />
                </div>

                <div>
                    <label className="labels">Descrição</label>
                    <input required value={descricao} onChange={manipuladorDescricao} />
                </div>


                {mensagem && <MensagemErro msg={mensagem} />}
                <button className="botaoProdCadastro">
                    Cadastrar Categoria
                </button>
            </form>
        </div>
    );
}

export default FormularioRegistroCategoria;