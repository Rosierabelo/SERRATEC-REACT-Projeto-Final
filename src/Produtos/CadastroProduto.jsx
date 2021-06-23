import { useState } from 'react';
import './formProduto.css';
import http from "../Http";
const FormularioRegistro = () => {

    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidadeEstoque, setQuantidadeEstoque] = useState('');
    const [categoria, setCategoria] = useState('');

    const manipuladorNome = (evento) => {
        setNome(evento.target.value)
    }

    const manipuladorCodigo = (evento) => {
        setCodigo(evento.target.value)
    }    

    const manipuladorDescricao = (evento) => {
        setDescricao(evento.target.value)
    }

    const manipuladorPreco = (evento) => {
        setPreco(evento.target.value)
    }

    const manipuladorQuantidadeEstoque = (evento) => {
        setQuantidadeEstoque(evento.target.value)
    }

    const manipuladorCategoria = (evento) => {
        setCategoria(evento.target.value)
    }

    const cadastrarProduto = (evento) => {
        evento.preventDefault()
        const produto = {
            nome: nome,
            codigo: codigo,
            descricao: descricao,
            preco: preco,
            quantidadeEstoque: quantidadeEstoque,
            categoria:{
                id: 1
            }
        }

        http.post('produto', produto).then(response => {
            console.log(response.data)
        }).catch(erro => {
            console.log(erro)
        })
    }

    return (
       <div className="formulario">
           <h1>Página de cadastro de produto</h1>
           <form onSubmit={cadastrarProduto}>
            <div>
                <label className="labels">Nome</label>
                <input required value={nome} onChange={manipuladorNome} />
            </div>
            <div>
                <label className="labels">Cógigo</label>
                <input required value={codigo} onChange={manipuladorCodigo} />
            </div>
            <div>
                <label className="labels">Descrição</label>
                <input required value={descricao} onChange={manipuladorDescricao} />
            </div>
            <div>
                <label className="labels">Preço</label>
                <input required value={preco} onChange={manipuladorPreco} />
            </div>
            <div>
                <label className="labels">Quantidade em Estoque</label>
                <input required value={quantidadeEstoque} onChange={manipuladorQuantidadeEstoque} />
            </div>
            <div>
                <label className="labels">Categoria</label>
                <input required value={categoria} onChange={manipuladorCategoria} />
            </div>
            <button>
                Cadastrar
            </button>
        </form>
       </div>
    );
}

export default FormularioRegistro;