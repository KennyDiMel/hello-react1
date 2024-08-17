import React, { useState, useEffect } from 'react';
import './Estilos.css';

const images = [
  'url-de-imagen1.jpg',
  'url-de-imagen2.jpg',
  'url-de-imagen3.jpg'
];

function Banner () {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <img src={images[currentImageIndex]} alt="Banner" />
    </div>
  );
};

export default Banner;
