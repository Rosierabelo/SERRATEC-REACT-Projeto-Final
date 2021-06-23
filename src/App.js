import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cadastro from './Login/Cadastro';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Produtos from './Produtos/Produtos';
import Produto from './Produtos/ProdutoDetalhe';
import Perfil from './Login/Perfil';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Produtos/>
        </Route>
        <Route exact path="/cadastro">
          <Cadastro/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/perfil">
          <Perfil/>
        </Route>
        <Route path="/produtos/:id">
          <Produto />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
