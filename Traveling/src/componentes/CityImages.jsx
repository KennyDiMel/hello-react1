import React from 'react';
import './Estilos.css';

import machuPicchu from '../imagenes/MACHUPICCHU.jpg';
import yanahuara from '../imagenes/YANAHUARA.jpg';
import catacaos from '../imagenes/CATACAOS.jpg';

const CityImages = () => {
  return (
    <div className="city-images">
      <div className="city-image large">
        <img src={machuPicchu} alt="Cusco - MachuPicchu" />
        <div className="nombre-ciudad">Cusco - Machu Picchu</div>
      </div>
      <div className="small-images">
        <div className="city-image small">
          <img src={yanahuara} alt="Arequipa - Yanahuara" />
          <div className="nombre-ciudad">Arequipa - Yanahuara</div>
        </div>
        <div className="city-image small">
          <img src={catacaos} alt="Piura - Catacaos" />
          <div className="nombre-ciudad">Piura - Catacaos</div>
        </div>
      </div>
    </div>
  );
};

export default CityImages;
