import React from 'react';
import './estilos/estilos.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SobreBauru from './paginas/SobreBauru';
import NegociosBauru from './paginas/NegociosBauru';
import ImagemBauru from './paginas/ImagemBauru';
import Navegacao from './paginas/Navegacao';
import Erro from './paginas/Erro';

function App() {
  return (
    <Router>
      <div className='Fundo'>
      <Navegacao />
      <h2>BAURU, CIDADE SEM LIMITES</h2>
      <Switch>    

          <Route exact path='/'>
            <SobreBauru />
          </Route>

          <Route path='/NegociosBauru'>
            <NegociosBauru />
          </Route>

          <Route path='/ImagemBauru'>
            <ImagemBauru />
          </Route>

          <Route path='*'>
            <Erro />
          </Route>

          </Switch>

          <footer className='Footer'>
            <p>
              Para mais informações sobre Bauru, visite o{' '}
              <a href='http://www.bauru.sp.gov.br'>
                site oficial da prefeitura.
              </a>
            </p>
          </footer>
        </div>
      
    </Router>
  );
}

export default App;
