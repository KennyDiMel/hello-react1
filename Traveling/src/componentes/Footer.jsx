import React from 'react';
import './Estilos.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Traveling. Todos los derechos reservados.</p>
      <div className="iconos">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" alt="YouTube" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
