import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cadastro from './Login/Cadastro';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home'
import Login from './Login/Login';
import Produtos from './Produtos/Produtos';
<<<<<<< HEAD
import Produto from './Produtos/ProdutoDetalhe';
=======
>>>>>>> 7b1e2afa22b143f01a69fd4dc6dd7232a22b4263
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
        <Route exact path="/produtos">
          <Produtos/>
        </Route>
        <Route path="/produtos/:id">
          <Produto />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
