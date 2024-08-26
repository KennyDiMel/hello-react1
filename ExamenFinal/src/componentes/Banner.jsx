import { useEffect, useState } from 'react';


import img0 from '../assets/images/imagen1.jpg';
import img1 from '../assets/images/imagen2.jpg';
import img2 from '../assets/images/imagen3.jpg';



const turismo = [img0, img1, img2];


const Banner = () => {
  const [c, setC] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setC((prevC) => (prevC + 1) % turismo.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div id="center">
      <header className='container banner'>
        <img id="paisaje" src={turismo[c]} alt={`Paisaje ${c}`}  className=' border20'/>
      </header>
    </div>
  );
};

export default Banner;
