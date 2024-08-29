import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import SobreNosotros from './pages/SobreNosotros';
import Contactenos from './pages/Contactenos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contactenos" element={<Contactenos />} />
        <Route path="/" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;