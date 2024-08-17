import React from 'react';
import  './Estilos.css';

function Menu () {
  return (
    <div className='Logo'>
      <img src="https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg" alt="Traveling logo" className='logo'/>
    <nav className="menu">
      <ul>
        <li>Quiénes somos</li>
        <li>Destinos</li>
        <li>Servicios</li>
        <li>Ofertas</li>
      </ul>
    </nav>
    </div>
  );
};

export default Menu;
