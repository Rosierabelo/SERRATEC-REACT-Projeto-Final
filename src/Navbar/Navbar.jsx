import './Navbar.css'
import { Link } from 'react-router-dom';
import carrinho from './img1.png'
import perfil from './profile-user.png'
import { useHistory } from "react-router-dom";


const Navbar = ({token, aoLogout}) =>{
    const history = useHistory();
    
    const logout = () => {
        history.push('/login')
        aoLogout()
      }

      const Itens = () => {
        if (token) {
            return(
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/cadastro">Cadastre-se</Link></li>
                            <li><Link to="/cadastroproduto">Cadastar Produto</Link></li>
                            <li><Link onClick={logout}>Logout</Link></li>
                        </ul>
                        <ul>
                            <a href="./Carrinho"><img className="carrinho" src={carrinho}></img></a>
                            <a href="./Perfil"><img className="carrinho" src={perfil}></img></a>
                        </ul>
                    </nav>
        
                </div>
            )
        }

        return <div>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/cadastro">Cadastre-se</Link></li>
                </ul>
            </nav>
        </div>
      }

      return (
         Itens()
      ) 
}
export default Navbar;