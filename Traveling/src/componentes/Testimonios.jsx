import React, { useState } from 'react';
import './Estilos.css';

const testimonios = [
  {
    texto: "Visitar Machu Picchu fue una experiencia que superó todas mis expectativas. La majestuosidad de las ruinas y la historia que rodea este lugar es simplemente impresionante. Desde el momento en que llegué, me sentí transportado a otro tiempo y pude conectarme profundamente con la cultura Inca. Todo el viaje fue perfectamente organizado, desde el transporte hasta las guías locales que compartieron su vasto conocimiento. Definitivamente, uno de los mejores viajes de mi vida.",
    autor: "Mike Torres",
    img: "https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2024/04/guia-machu-picchu-sin-tour-sm-media.jpg",
  },
  {
    texto: "Mi visita a Yanahuara fue realmente especial. Las vistas desde el mirador, con los volcanes como telón de fondo, son espectaculares. Además, caminar por las calles empedradas y disfrutar de la tranquilidad del lugar fue una experiencia única. La iglesia de Yanahuara y su arquitectura colonial son impresionantes. Todo estuvo perfectamente organizado y el guía hizo que el recorrido fuera interesante y ameno. ¡Una parada obligatoria si visitas Arequipa!",
    autor: "Laura Fernández",
    img: "https://giardinotours.com/wp-content/uploads/2022/03/claustros.jpg",
  },
  {
    texto: "Visitar Catacaos fue una experiencia increíble para conocer la cultura y tradición del norte del Perú. Me encantó recorrer sus mercados artesanales, llenos de productos hechos a mano, desde sombreros hasta joyería de plata. La gastronomía local es deliciosa, especialmente los platos a base de cabrito y ceviche. Todo el recorrido estuvo muy bien organizado, y el guía nos brindó mucha información sobre la historia del lugar. Sin duda, un destino lleno de color y tradición que no te puedes perder.",
    autor: "Carla Gómez",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/85/f7/1a/plaza-de-armas-de-catacaos.jpg?w=1100&h=1100&s=1",
  },
];

function Testimonios() {
  const [currentTestimonio, setCurrentTestimonio] = useState(0);

  const nextTestimonio = () => {
    setCurrentTestimonio((prevIndex) => (prevIndex + 1) % testimonios.length);
  };

  const prevTestimonio = () => {
    setCurrentTestimonio((prevIndex) => (prevIndex - 1 + testimonios.length) % testimonios.length);
  };

  return (
    <div className="testimonios">
      <div className="testimonio">
        <p>Testimonio de</p>
        <h2>NUESTROS CLIENTES</h2>
        <img src={testimonios[currentTestimonio].img} alt={testimonios[currentTestimonio].autor} />
        <p>"{testimonios[currentTestimonio].texto}"</p>
        <h4>- {testimonios[currentTestimonio].autor}</h4>
      </div>
      <div className="arrows">
        <button onClick={prevTestimonio}>◀</button>
        <button onClick={nextTestimonio}>▶</button>
      </div>
    </div>
  );
}

export default Testimonios;
