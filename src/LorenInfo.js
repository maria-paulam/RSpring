import React from 'react';
import './LoremInfo.css'; 
import { LoremIpsum } from 'lorem-ipsum';
import imagenF from './img/16-Fondo seccion de contacto.png';  // Importación por defecto

const lorem = new LoremIpsum();

const LoremInfo = () => {
  return (
    <div 
      className="container"
      style={{ 
        backgroundImage: `url(${imagenF})`, // Establece la imagen de fondo
        backgroundSize: 'cover',  // Asegura que la imagen cubra todo el área
        backgroundPosition: 'center',  // Centra la imagen
        backgroundRepeat: 'no-repeat',  // Evita que la imagen se repita
        height: '100vh'  // La altura será de toda la ventana
      }}
    >
      <div className="content">
        <h2>{lorem.generateWords(30)}</h2>
      </div>
      <div className="actions">
        <button className="button">Más información</button>
        <button className="button">Contacto</button>
      </div>
      <div className="stats">
        <div className="stat">
          <div className="stat-value">+100</div>
          <div className="stat-label">Lorem ipsum</div>
        </div>
        <div className="stat">
          <div className="stat-value">+100</div>
          <div className="stat-label">Lorem ipsum</div>
        </div>
        <div className="stat">
          <div className="stat-value">+100</div>
          <div className="stat-label">Lorem ipsum</div>
        </div>
      </div>
    </div>
  );
};

export default LoremInfo;
