import http from '../Http'
import './Login.css'
import { useState } from 'react'
const Login = () =>{

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const efetuarLogin = (evento) =>{
        evento.preventDefaul()
        const usuario = {
            email : email,
            senha : senha
        }
        http.post('auth', usuario)
        .then(response => {
            console.log(response.data)
            localStorage.setItem('token', response.data.access_token)
        })
        .catch(erro => {
            console.log("Algo deu errado");
            console.log(erro);
        })
    }

    const manipuladorEmail = (evento) =>{
        setEmail(evento.target.value)
    }

    const manipuladorSenha = (evento) =>{
        setSenha(evento.target.value)
    }

    return (
        <div>
        <h1>Tela de Login</h1>
        <form>
 
            <div>
                <label>Email</label>
                <input value={email} onChange={manipuladorEmail} type="text" required></input>
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

export default Login;