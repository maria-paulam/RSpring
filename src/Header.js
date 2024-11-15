import React from 'react';
import './Header.css'; 
import logo from './img/2-Logo Navesoft-Marca resgitrada de Navemar.svg'



function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo-image" />
      <nav>
        <ul className="nav-links">
          
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
 
}
export default Header;
