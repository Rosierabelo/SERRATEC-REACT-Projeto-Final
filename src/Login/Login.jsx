import './Login.css'
const Login = () =>{
    return (
        <div>
        <h1>Tela de Login</h1>
        <form>
 
            <div>
                <labe>Email</labe>
                <input type="text" required></input>
            </div>
            <div>
                <labe>Senha</labe>
                <input type="password" required></input>
            </div>
            <button className="botaoLoginCadastro">Cadastrar</button>
        </form>
    </div>
    )
}

export default Login;