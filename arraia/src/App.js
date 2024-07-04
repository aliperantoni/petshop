import React from 'react';
import './estilos/estilos.css';
import { BrowserRouter as Router } from 'react-router-dom';

import ArraiaAereo from './paginas/arraiaAereo';
import ImagensArraia from './paginas/imagensArraia';
import MarcosPontes from './paginas/marcosPontes';
import ImagensMarcos from './paginas/imagensMarcosPontes';
import SobreBauru from './paginas/sobreBauru';
import ImagensBauru from './paginas/imagensBauru';

function App() {
  return (
    <Router>
      <div className='fundo'>
        <h2>Projeto com Rotas (páginas separadas)</h2>
      </div>
      <ArraiaAereo />
      <ImagensArraia />
      <MarcosPontes />
      <ImagensMarcos />
      <SobreBauru />
      <ImagensBauru />
      <footer className='footer'>
        <p>Bauru sem Limites – fazendo história</p>
      </footer>
    </Router>
  );
}

export default App;
