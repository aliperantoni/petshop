import React from 'react';
import imagem1 from '../assets/estacaoFerroviaria.png';
import imagem2 from '../assets/vitoriaRegia.jpg';
import imagem3 from '../assets/intersecao.jpg';

function ImagemBauru() {
  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <img
        src={imagem1}
        alt='Bauru Imagem I'
        style={{ width: '20%', height: 'auto', margin: 'o 20px' }}
      />

      <img
        src={imagem2}
        alt='Bauru Imagem II'
        style={{ width: '20%', height: 'auto', margin: 'o 10px' }}
      />

      <img
        src={imagem3}
        alt='Bauru Imagem III'
        style={{ width: '20%', height: 'auto', margin: '0 10px' }}
      />
    </div>
  );
}

export default ImagemBauru;
