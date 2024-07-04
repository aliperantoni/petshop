import React from 'react';
import imagem1 from '../assets/marcos1.jpg';
import imagem2 from '../assets/marcos2.jpg';
import imagem3 from '../assets/marcos3.jpg';

function imagensMarcosPontes() {
  return (
    <div>
      <h1>Imagens do Marcos Pontes</h1>
      <img
        src={imagem1}
        alt='Marcos Pontes Imagem I'
        style={{ width: '20%', height: 'auto', margin: 'o 20px' }}
      />

      <img
        src={imagem2}
        alt='Marcos Pontes Imagem II'
        style={{ width: '20%', height: 'auto', margin: 'o 20px' }}
      />

      <img
        src={imagem3}
        alt='Maracos Pontes Imagem III'
        style={{ width: '20%', height: 'auto', margin: 'o 20px' }}
      />
    </div>
  );
}

export default imagensMarcosPontes;
