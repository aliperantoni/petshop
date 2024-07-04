import React from 'react';
import imagem1 from '../assets/arraia1.jpg';
import imagem2 from '../assets/arraia2.jpg';
import imagem3 from '../assets/arraia3.jpg';
import imagem4 from '../assets/arraia4.jpg';
import imagem5 from '../assets/arraia5.jpg';

function imagensArraia() {
  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <img
        src={imagem1}
        alt='Arraiá Imagem I'
        style={{ width: '20%', height: 'auto', margin: 'o 20px' }}
      />

      <img
        src={imagem2}
        alt='Arraiá Imagem II'
        style={{ width: '20%', height: 'auto', margin: 'o 20px' }}
      />

      <img
        src={imagem3}
        alt='Arraiá Imagem III'
        style={{ width: '20%', height: 'auto', margin: 'o 20px' }}
      />

      <img
        src={imagem4}
        alt='Arraiá Imagem IV'
        style={{ width: '20%', height: 'auto', margin: 'o 20px' }}
      />

      <img
        src={imagem5}
        alt='Arraiá Imagem V'
        style={{ width: '20%', height: 'auto', margin: 'o 20px' }}
      />
    </div>
  );
}

export default imagensArraia;
