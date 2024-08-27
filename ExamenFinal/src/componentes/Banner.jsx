import { useEffect, useState } from 'react';


import img1 from '../imagenes/img01.jpg';
import img2 from '../imagenes/img02.jpg';
import img3 from '../imagenes/img03.jpg';



const muebleria = [img1, img2, img3];


const Banner = () => {
  const [c, setC] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setC((prevC) => (prevC + 1) % muebleria.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div id="center">
      <header className='container header'>
        <img id="imagenes" src={muebleria[c]} alt={`Muebles ${c}`}  className=' border20'/>
      </header>
    </div>
  );
};

export default Banner;
