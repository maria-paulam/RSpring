import React from 'react';
import './Tarjetas.css';

import IMG1 from './img/16-Fondo seccion de contacto.png';
import Fondo from './img/5-Fondo seccion 2- nuestros servicios.jpg';

const Tarjetas = () => {
  return (
    <div className="background-container" style={{ backgroundImage: `url(${Fondo})` }}>


      <div className="container2">

      <h1 className='tituloNS'>Nuestros Servicios</h1>

        <div className="service-box">
          <div className="service-icon">
            <img src={IMG1} alt="Software as a Service" />
          </div>
          <h3 className="service-title">Software as a Service</h3>
          <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        
      </div>
    </div>
  );
};

export default Tarjetas;