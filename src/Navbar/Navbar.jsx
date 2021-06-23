import './Navbar.css'
import { Link } from 'react-router-dom';
import carrinho from './img1.png'


const Navbar = () =>{
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#contact">Carrinho</a></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/cadastro">Cadastre-se</Link></li>
                </ul>
                <ul>
                    <li><img className="carrinho" src={carrinho}></img></li>
                </ul>
            </nav>

        </div>
    )
}
export default Navbar;