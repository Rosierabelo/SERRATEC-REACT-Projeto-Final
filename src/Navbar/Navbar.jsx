import './Navbar.css'
import { Link } from 'react-router-dom';
import carrinho from './img1.png'
import perfil from './profile-user.png'


const Navbar = () =>{
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/cadastro">Cadastre-se</Link></li>
                    <li><Link to="/cadastroproduto">Cadastar Produto</Link></li>
                </ul>
                <ul>
                    <li><img className="carrinho" src={carrinho}></img></li>
                    <a href="./Perfil"><img className="carrinho" src={perfil}></img></a>
                </ul>
            </nav>

        </div>
    )
}
export default Navbar;