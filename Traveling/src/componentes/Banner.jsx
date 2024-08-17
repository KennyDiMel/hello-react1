import React, { useState, useEffect } from 'react';
import './Estilos.css';

const imagenes = [
  'https://media.istockphoto.com/id/1387126996/es/foto/vista-a%C3%A9rea-de-la-ciudad-de-lima-per%C3%BA.jpg?s=612x612&w=0&k=20&c=8NcyhRdCBIw8sDymDUukRkBazjGENsnfTFfu4eXdqm4=',
  'https://img.freepik.com/fotos-premium/isla-uros-lago-titicaca-cerca-ciudad-puno-peru_78361-2909.jpg',
  'https://thumbs.dreamstime.com/b/vista-a%C3%A9rea-de-la-ciudad-oxapampa-en-per%C3%BA-los-andes-peruanos-154664206.jpg',
  'https://t3.ftcdn.net/jpg/04/53/93/68/360_F_453936876_drvJw37greccONxwLTIvdRlpyHuXQ7s3.jpg',
  'https://www.xtravelperu.com/blog/wp-content/uploads/2017/12/laguna-humantay-x-travel-peru.jpg',
  'https://cdn.pixabay.com/video/2022/09/27/132691-754563697_tiny.jpg',
  'https://c4.wallpaperflare.com/wallpaper/165/53/153/wave-huanchaco-huanchaco-pier-muelle-de-huanchaco-wallpaper-preview.jpg'
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
