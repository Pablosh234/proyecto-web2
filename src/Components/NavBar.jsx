import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import './NavBar.css'
import { Link } from 'react-router';

export default function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-barca">
      <div className="navbar-logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png" 
          alt="Logo del FC Barcelona" 
        />
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-lista">
          <li><Link to="/inicio">El Club</Link></li>
          <li><Link to="/plantilla">El Equipo</Link></li>
          <li><Link to="/historia">Historia</Link></li>
          <li><Link to="/trofeos">Trofeos</Link></li>
        </ul>
      </div>
      <div className="navbar-hamburguesa" onClick={toggleMenu}>
        <div className="hamburguesa-linea"></div>
        <div className="hamburguesa-linea"></div>
        <div className="hamburguesa-linea"></div>
      </div>
    </nav>
  );
}

