import React, { useState } from 'react';
import './Estilos.css';

const testimonios = [
  {
    texto: "Visitar Machu Picchu fue una experiencia que superó todas mis expectativas. La majestuosidad de las ruinas y la historia que rodea este lugar es simplemente impresionante. Desde el momento en que llegué, me sentí transportado a otro tiempo y pude conectarme profundamente con la cultura Inca. Todo el viaje fue perfectamente organizado, desde el transporte hasta las guías locales que compartieron su vasto conocimiento. Definitivamente, uno de los mejores viajes de mi vida.",
    autor: "Mike Brown",
    img: "https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2024/04/guia-machu-picchu-sin-tour-sm-media.jpg",
  },
  {
    texto: "La experiencia fue inolvidable, los recomiendo.",
    autor: "Sara Lee",
    img: "",
  },
  {
    texto: "Viaje seguro y muy bien organizado.",
    autor: "Carlos Gómez",
    img: "/assets/client3.jpg",
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
