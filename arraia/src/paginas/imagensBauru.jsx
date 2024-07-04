import React from 'react';
import imagem1 from '../assets/bauru1.jpg';
import imagem2 from '../assets/bauru2.jpg';
import imagem3 from '../assets/bauru3.jpg';

function imagensBauru() {
  return (
    <div>
      <h1>Imagens de Bauru</h1>
      <img
        src={imagem1}
        alt='Bauru Imagem I'
        style={{ width: '20%', height: 'auto', margin: 'o 20px' }}
      />

      <img
        src={imagem2}
        alt='Bauru Imagem II'
        style={{ width: '20%', height: 'auto', margin: 'o 20px' }}
      />

      <img
        src={imagem3}
        alt='Bauru Imagem III'
        style={{ width: '20%', height: 'auto', margin: 'o 20px' }}
      />
    </div>
  );
}

export default imagensBauru;
