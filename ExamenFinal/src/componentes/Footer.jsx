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
      <div className='d-flex center gap-20'>
        <div className='titulo-footer'>
          <h2>MueblesFAST</h2>
        </div>
        <div className='fechahora'>
          <h4 className='fecha'>Fecha: {dateTime.toLocaleDateString()}</h4>
          <h4 className='hora'>Hora: {dateTime.toLocaleTimeString()}</h4>
        </div>
      </div>
    </>

  );
}

export default Footer;