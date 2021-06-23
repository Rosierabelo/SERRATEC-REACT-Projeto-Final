import { useState } from 'react';
import http from '../Http';
import './Login.css'
const Cadastro = () =>{

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dataNascimento, setData] = useState('')
    const [cep, setCep] = useState('')
    const [numeroResidencia, setNumero] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')

    const efetuarCadastro = (evento) =>{
        evento.preventDefault()
        const usuario = {
            nome: nome,
            cpf: cpf,
            telefone : telefone,
            dataNascimento : dataNascimento,
            endereco : {
                cep : cep,
                numeroResidencia : numeroResidencia
            },
            email : email,
            username : username,
            senha : senha
        }
        http.post('cliente', usuario)
        .then(response => console.log(response.data))
        .catch(erro => {
            console.log("Algo deu errado");
            console.log(erro);
        })
    }

    const manipuladorNome = (evento) =>{
        setNome(evento.target.value)
    }

    const manipuladorCpf = (evento) =>{
        setCpf(evento.target.value)
    }

    const manipuladorTelefone = (evento) =>{
        setTelefone(evento.target.value)
    }

    const manipuladorData = (evento) =>{
        setData(evento.target.value)
    }

    const manipuladorCep = (evento) =>{
        setCep(evento.target.value)
    }

    const manipuladorNumero = (evento) =>{
        setNumero(evento.target.value)
    }

    const manipuladorEmail = (evento) =>{
        setEmail(evento.target.value)
    }

    const manipuladorUsername = (evento) =>{
        setUsername(evento.target.value)
    }

    const manipuladorSenha = (evento) =>{
        setSenha(evento.target.value)
    }


    return (
        <div>
        <h1>Tela de Cadastro</h1>
        <form onSubmit={efetuarCadastro}>
            <div>
                <label>Nome</label>
                <input value={nome}  onChange={manipuladorNome} type="text" required></input>
            </div>
            <div>
                <label>CPF</label>
                <input value={cpf} onChange={manipuladorCpf} type="number" required></input>
            </div>
            <div>
                <label>Telefone</label>
                <input value={telefone} onChange={manipuladorTelefone} type="number" required></input>
            </div>
            <div>
                <label>Data de Nascimento</label>
                <input value={dataNascimento} onChange={manipuladorData} type="date" required></input>
            </div>
            <div>
                <label>Endereço</label>
                <label>CEP</label>
                <input value={cep} onChange={manipuladorCep} type="number" required></input>
            </div>
            <div>
                <label>Numero Residencial</label>
                <input value={numeroResidencia} onChange={manipuladorNumero} type="number" required></input>
            </div>
            <div>
                <label>Email</label>
                <input value={email} onChange={manipuladorEmail} type="text" required></input>
            </div>
            <div>
                <label>Username</label>
                <input value={username} onChange={manipuladorUsername} type="text" required></input>
            </div>
            <div>
                <label>Senha</label>
                <input value={senha} onChange={manipuladorSenha} type="password" required></input>
            </div>
            <button className="botaoLoginCadastro">Cadastrar</button>
        </form>
    </div>
    )
}

export default Cadastro;