import React from 'react';
import './NuestrosServicios.css'; 
import { LoremIpsum } from 'lorem-ipsum';
import { useSpring, animated } from '@react-spring/web'; 
import imagenFondo from './img/1-pagina-principal-Navesoft-marca-registrada-Navemar.jpg';

const lorem = new LoremIpsum();

const Nservicios = () => {
  // Animaciones para el texto y el botón
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }, // Duración de 1 segundo
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 500, // Retardo de 500ms
  });

  return (
    <div
      className="header-container"
      style={{ backgroundImage: `url(${imagenFondo})` }}
    >
      {/* Animación del título */}
      <animated.h1 className="header-title" style={titleAnimation}>
        Nuestros Servicios de 
      </animated.h1>
      <animated.h1 className="header-title" style={titleAnimation}>
        Software as a Service
      </animated.h1>

      {/* Texto estático */}
      <p>{lorem.generateWords(30)}</p>

      {/* Animación del botón */}
      <animated.button className="mi-boton" style={buttonAnimation}>
        Haz Clic Aquí
      </animated.button>
    </div>
  );
};

export default Nservicios;
