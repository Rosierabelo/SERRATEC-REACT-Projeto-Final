import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cadastro from './Login/Cadastro';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Produtos from './Produtos/Produtos';
import Produto from './Produtos/ProdutoDetalhe';
import CadastroProduto from './Produtos/CadastroProduto';
import Perfil from './Login/Perfil';
import Carrinho from './Carrinho/Carrinho';
import { useEffect, useState } from 'react';
import Categoria from './Produtos/Categoria';

function App() {


  const [token, setToken] = useState('')
  const onLogin = (token) => {
    setToken(token)
  }

  const logout = () => {
    setToken('')
  }  

  useEffect(() =>{
    const tokeAntigo = localStorage.getItem('token')
    if (tokeAntigo) {
      setToken(tokeAntigo)
    }
  }, [])


  const [carrinho, setCarrinho] = useState([])
  const adicionaProduto = (item) =>{
    console.log(item)
    setCarrinho([
      ...carrinho,
      item
    ])
  }

  const aoExcluir = (indice) =>{
    carrinho.splice(indice, 1)
    setCarrinho([...carrinho])
  }

  return (
    <BrowserRouter>
    <Navbar token={token} aoLogout={logout}/>
      <Switch>
        <Route exact path="/">
          <Produtos/>
        </Route>
        <Route exact path="/cadastro">
          <Cadastro/>
        </Route>
        <Route exact path="/login">
          <Login onLogin={onLogin}/>
        </Route>
        <Route exact path="/perfil">
          <Perfil/>
        </Route>
        <Route path="/produtos/:nome">
          <Produto aoAdicionar={adicionaProduto} />
        </Route>
        <Route path="/cadastroproduto">
          <CadastroProduto />
        </Route>
        <Route path="/categoria">
          <Categoria />
        </Route>
        <Route path="/carrinho">
          <Carrinho produtos={carrinho} aoExcluir={aoExcluir} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
