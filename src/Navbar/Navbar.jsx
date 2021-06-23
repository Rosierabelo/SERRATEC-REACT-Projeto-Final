import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () =>{
    return(
        <div>
            <link href="/website/css/uicons-bold"
            rel="stylesheet"></link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#contact">Carrinho</a></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cadastro">Cadastre-se</Link></li>
                <i class="fi-rr-shopping-cart"></i>
            </ul>
        </div>
    )
}
export default Navbar;