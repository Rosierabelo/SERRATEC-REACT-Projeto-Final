import { useState, useEffect } from 'react';
import http from '../Http';
import './Login.css'
import axios from "axios"
const Cadastro = () =>{

    const id = localStorage.getItem('id')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dataNascimento, setData] = useState('')
    const [cep, setCep] = useState('')
    const [numeroResidencia, setNumero] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [complemento, setComplemento] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')

    const obterCep = (evento) => {
        if (!evento.target.value){
            return
        }
        const url = `https://viacep.com.br/ws/${evento.target.value}/json/`;
        axios.get(url)
        .then(response => {
          if (!response.data.erro){
              setRua(response.data.logradouro)
              setBairro(response.data.bairro)
              setCidade(response.data.localidade)
              setUf(response.data.uf)
          }
          console.log(response.data);
        })
        .catch(erro => {
          console.log(erro);
        })
      }

    useEffect(() => {
        http.get('cliente/detalhe/' + id)
          .then(response => {
            setNome(response.data.nome)
            setTelefone(response.data.telefone)
            setCpf(response.data.cpf)
            setData(response.data.dataNascimento)
            setCep(response.data.cep)
            setNumero(response.data.numeroResidencia)
            setComplemento(response.data.complemento)
            setEmail(response.data.email)
            setUsername(response.data.username)
          })
      }, [id])


    const efetuarCadastro = (evento) =>{
        evento.preventDefault()
        const usuario = {
            nome: nome,
            cpf: cpf,
            telefone : telefone,
            dataNascimento : dataNascimento,
            endereco : {
                cep : cep,
                numeroResidencia : numeroResidencia,
                rua : rua,
                bairro : bairro,
                cidade : cidade,
                estado : uf,
                complemento : complemento
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

    const manipuladorComplemento = (evento) =>{
        setComplemento(evento.target.value)
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
                <input onChange={manipuladorNome} type="text" required></input>
            </div>
            <div>
                <label>CPF</label>
                <input onChange={manipuladorCpf} type="number" required></input>
            </div>
            <div>
                <label>Telefone</label>
                <input onChange={manipuladorTelefone} type="number" required></input>
            </div>
            <div>
                <label>Data de Nascimento</label>
                <input onChange={manipuladorData} type="date" required></input>
            </div>
            <div>
                <label>Endereço</label>
                <label>CEP</label>
                <input onBlur={obterCep} onChange={manipuladorCep} type="number"></input>
            </div>
            <div>
                <label>Numero Residencial</label>
                <input onChange={manipuladorNumero}  type="number"></input>
            </div>
            <div>
                <label>Bairro</label>
                <input value={bairro} onChange={obterCep}  type="text"></input>
            </div>
            <div>
                <label>Cidade</label>
                <input value={cidade} onChange={obterCep} type="text"></input>
            </div>
            <div>
                <label>Complemento</label>
                <input value={complemento} onChange={manipuladorComplemento}  type="text"></input>
            </div>
            <div>
                <label>Estado</label>
                <input value={uf} onChange={obterCep}  type="text"></input>
            </div>
            <div>
                <label>Rua</label>
                <input value={rua} onChange={obterCep}  type="text"></input>
            </div>
            <div>
                <label>Numero Residencial</label>
                <input value={numeroResidencia} onChange={manipuladorNumero} type="number" required></input>
            </div>
            <div>
                <label>Email</label>
                <input onChange={manipuladorEmail} type="text" required></input>
            </div>
            <div>
                <label>Username</label>
                <input onChange={manipuladorUsername} type="text" required></input>
            </div>
            <div>
                <label>Senha</label>
                <input onChange={manipuladorSenha} type="password" required></input>
            </div>
            <button className="botaoLoginCadastro">Cadastrar</button>
        </form>
    </div>
    )
}

export default Cadastro;