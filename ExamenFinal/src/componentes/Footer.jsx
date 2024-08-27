import { useState, useEffect } from 'react';


const Footer = () => {

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
      const interval = setInterval(() => {
          setDateTime(new Date());
      }, 1000);

      return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='d-flex center mg2 gap-20 bg-orange'>
          <h2>MueblesFAST</h2>
          <h4>Fecha: {dateTime.toLocaleDateString()}</h4>
          <h4>Hora: {dateTime.toLocaleTimeString()}</h4>
      </div>
    </>

  );
}

export default Footer;