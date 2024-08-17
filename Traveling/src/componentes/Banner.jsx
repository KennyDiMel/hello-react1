import React, { useState, useEffect } from 'react';
import './Estilos.css';
import costaverde from './imagenes/COSTAVERDE.jpg'
const imagenes = [
  'COSTA VERDE.jpg',
  'LAGO TITICACA.jpg',
  'OXAPAMPA.jpg',
  'LINEAS DE NAZCA.jpg',
  'LAGUNA HUAMANTAY.jpg' 
];

function Banner () {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <img src={imagenes[currentImageIndex]} alt="Banner" />
    </div>
  );
};

export default Banner;
