import React from 'react';
import '../estilos/404.css';
import bauruzinho from '../assets/bauruzinho.jpg';

const Erro = () => {
  return (
    <div>
      <img
        src={bauruzinho}
        alt='Bauruzinho'
        style={{ width: '23%', height: 'auto', margin: '0 10px' }}
      />
      <p className='sem_texto'>Tente novamente e indique a página correta</p>
      <p className='sem_link'>Página não encontrada!</p>
    </div>
  );
};

export default Erro;
