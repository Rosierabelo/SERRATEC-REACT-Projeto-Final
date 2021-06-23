import './Login.css'
const Cadastro = () =>{
    return (
        <div>
        <h1>Tela de Cadastro</h1>
        <form>
            <div>
                <labe>Nome</labe>
                <input type="text" required></input>
            </div>
            <div>
                <labe>CPF</labe>
                <input type="number" required></input>
            </div>
            <div>
                <labe>Telefone</labe>
                <input type="number" required></input>
            </div>
            <div>
                <labe>Data de Nascimento</labe>
                <input type="date" required></input>
            </div>
            <div>
                <labe>Email</labe>
                <input type="text" required></input>
            </div>
            <div>
                <labe>Username</labe>
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

export default Cadastro;