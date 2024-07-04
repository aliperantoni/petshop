import React from 'react';
import './App.css';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pacotes from './paginas/Pacotes';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';
import Admin from './paginas/admin/Admin';
import FormCategoria from './paginas/admin/components/FormCategoria';
import CatAdmin from './paginas/admin/CatAdmin';
import FormSubCategoria from './paginas/admin/components/FormSubCategoria';
import NavAdmin from './paginas/admin/components/NavAdmin';
import PostAdmin from './paginas/admin/PostAdmin';
import ListaPostAdmin from './paginas/admin/components/ListPostAdmin';
import FormPost from './paginas/admin/components/FormPost';

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route path='/pacotes'>
          <Pacotes />
        </Route>
        <Route path='/categoria/:id'>
          <Categoria />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route path='/admin/'>
          <NavAdmin />
          <Switch>
            <Route exact path='/admin'>
              <Admin />
            </Route>
            <Route exact path='/admin/NovaCategoria'>
              <FormCategoria />
            </Route>
            <Route exact path='/admin/categoria/:id'>
              <FormCategoria />
            </Route>
            <Route exact path='/admin/posts/NovoPost'>
              <FormPost />
            </Route>
            <Route exact path='/admin/posts/:id'>
              <FormPost />
            </Route>
            <Route exact path='/admin/posts/'>
              <PostAdmin />
            </Route>
            <Route exact path='/admin/categoria/sub/:id'>
              <CatAdmin />
            </Route>
            <Route exact path='/admin/categoria/sub/form/:id'>
              <FormSubCategoria />
            </Route>
            <Route path='*'>
              <Pagina404 />
            </Route>
          </Switch>
        </Route>
        <Route path='*'>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
