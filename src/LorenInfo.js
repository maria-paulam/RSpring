import React, { useState, useEffect } from 'react';
import './LoremInfo.css'; 
import { LoremIpsum } from 'lorem-ipsum';
import { useSpring, animated } from '@react-spring/web'; 
import imagenF from './img/16-Fondo seccion de contacto.png';

const lorem = new LoremIpsum();

const LoremInfo = () => {
  // Estado para manejar el scroll
  const [isVisible, setIsVisible] = useState(false);

  // Detectar posición del scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll >= 100); // Se agranda si el scroll pasa los 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animación para escala y desenfoque
  const containerAnimation = useSpring({
    transform: isVisible ? 'scale(1)' : 'scale(0.5)', // Escala al 50% cuando no es visible
    filter: isVisible ? 'blur(0px)' : 'blur(10px)', // Desenfoque al inicio
    config: { tension: 200, friction: 20 }, // Suavidad
  });

  return (
    <animated.div
      className="container"
      style={{
        ...containerAnimation,
        backgroundImage: `url(${imagenF})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
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
    </animated.div>
  );
};

export default LoremInfo;
