import React, { useState, useEffect } from 'react';
import './NuestrosServicios.css'; 
import { LoremIpsum } from 'lorem-ipsum';
import { useSpring, animated } from '@react-spring/web'; 
import imagenFondo from './img/1-pagina-principal-Navesoft-marca-registrada-Navemar.jpg';

const lorem = new LoremIpsum();

const Nservicios = () => {
  // Estado para manejar la visibilidad
  const [isVisible, setIsVisible] = useState(true);

  // Detectar el scroll y actualizar la visibilidad
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < 100); // Mostrar si el scroll es menor a 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animaciones dinámicas basadas en el estado de visibilidad
  const visibilityAnimation = useSpring({
    opacity: isVisible ? 1 : 0, // Cambia la opacidad
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)', // Mueve hacia arriba al ocultar
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div
      className="header-container"
      style={{
        ...visibilityAnimation,
        backgroundImage: `url(${imagenFondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <h1 className="header-title">Nuestros Servicios de</h1>
      <h1 className="header-title">Software as a Service</h1>

      
      <p>{lorem.generateWords(30)}</p>

     
      <button className="mi-boton">Haz Clic Aquí</button>
    </animated.div>
  );
};

export default Nservicios;
