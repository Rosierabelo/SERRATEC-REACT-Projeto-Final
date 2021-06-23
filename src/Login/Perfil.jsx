import { useEffect, useState } from "react"
import http from "../Http"
const Perfil = () => {

     const id = localStorage.getItem('id')
    // const [clientes, setCliente] = useState([])

    // const obterCliente = () => {
    //     http.get('cliente/detalhe' + id)
    //     .then(response => setCliente(response.data))
    // }

    // useEffect(() =>{
    //     obterCliente()
    // },[id])

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dataNascimento, setData] = useState('')
    const [cep, setCep] = useState('')
    const [numeroResidencia, setNumero] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() => {
        http.get('cliente/detalhe/' + id)
          .then(response => {
            setNome(response.data.nome)
            setTelefone(response.data.telefone)
            setCpf(response.data.cpf)
            setData(response.data.dataNascimento)
            setCep(response.data.cep)
            setNumero(response.data.numeroResidencia)
            setEmail(response.data.email)
            setUsername(response.data.username)
          })
      }, [id])

    const salvar = (evento) => {
        evento.preventDefault()
        const cliente = {
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
            id: id
        }
        http.put('cliente/' + id, cliente)
        .then(response => {
          console.log(response.data)
        })
        .catch(erro => {
          console.log('Algo deu errado')
          console.log(erro)
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


    return (
        <div>
            <h1>Perfil</h1>
            <div>
                  <form onSubmit={salvar}>
                    <div>
                        <div>
                            <label>Nome</label>
                            <input value={nome} onChange={manipuladorNome} type="text"></input>
                        </div>
                        <div>
                            <label>CPF</label>
                            <input value={cpf} onChange={manipuladorCpf} type="number" disabled></input>
                        </div>
                        <div>
                            <label>Telefone</label>
                            <input value={telefone} onChange={manipuladorTelefone} type="number"></input>
                        </div>
                        <div>
                            <label>Data de Nascimento</label>
                            <input value={dataNascimento} onChange={manipuladorData}  type="date" disabled></input>
                        </div>
                        <div>
                            <label>CEP</label>
                            <input value={cep} onChange={manipuladorCep} type="number"></input>
                        </div>
                        <div>
                            <label>Numero Residencial</label>
                            <input value={numeroResidencia} onChange={manipuladorNumero}  type="number"></input>
                        </div>
                        <div>
                            <label>Email</label>
                            <input value={email} onChange={manipuladorEmail} type="email" disabled></input>
                        </div>
                        <div>
                            <label>Username</label>
                            <input value={username} onChange={manipuladorUsername} type="text" ></input>
                        </div>
                        <div>
                            <label>Senha</label>
                            <input type="password" disabled></input>
                        </div>
                    </div>
                    <button className="botaoLoginCadastro">Salvar</button>
                </form>
                {/* )} */}
            </div>
        </div>

    )
}

export default Perfil;