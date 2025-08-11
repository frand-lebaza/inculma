import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo1 from '../media/img/logo/logoBlanco.png';
import logo2 from '../media/img/logo/logo3.png'; // Logo alternativo
import CarritoDrawer from "./CarritoDrawer";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null); // Referencia al contenedor del nav

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar clics fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Solo agregar el listener si el menú está abierto
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup del listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <Nav ref={navRef} scrolled={scrolled}>
       <Hamburger onClick={() => setOpen(!open)} scrolled={scrolled}>
          <span />
          <span />
          <span />
        </Hamburger>
      <Logo to="/">
        <img src={scrolled ? logo2 : logo1} alt="Logo" />
      </Logo>
      <div className="car-shop">       

        <NavLinks open={open} scrolled={scrolled}>

          <NavLink scrolled={scrolled} to="/muebles">Muebles</NavLink>
          <NavLink scrolled={scrolled} to="/poltronas">Poltronas</NavLink>
          {/* <NavLink scrolled={scrolled} to="/sillas">Sillas</NavLink> */}
          <NavLink scrolled={scrolled} to="/comedores">Comedores</NavLink>
          <NavLink scrolled={scrolled} to="/sofa-camas">Sofa Camas</NavLink>
          <NavLink scrolled={scrolled} to="/muebles">Nosotros</NavLink>
          <NavLink scrolled={scrolled} to="/muebles">Contacto</NavLink>
        </NavLinks>

        <CarritoDrawer />
      </div>
    </Nav>
  );
}

export default NavBar;

// Contenedor principal
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 97%;
  background-color: ${({ scrolled }) => (scrolled ? "white" : "#2422224d")};
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  z-index: 1000;
  height: 40px;
  border-bottom:  ${({ scrolled }) => (scrolled ? "1px solid #2422224d" : "")};
  transition: all 0.3s ease;

  .car-shop{
    display: flex;
  justify-content: end;
  align-items: center; 
  }
`;

// Logo
const Logo = styled(Link)`
  img {
    width: 180px;
    transition: all 0.3s ease;
  }
`;

// Contenedor de enlaces
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 3px;
  font-size: 16px;

  @media (max-width: 768px) {
    position: absolute;
    top: 49px;
    left: 0;
    right: 0;
    background-color: ${({ scrolled }) => (scrolled ? "#f0f0f0" : "#333")};
    flex-direction: column;
    padding: 1rem;
    display: ${props => (props.open ? 'flex' : 'none')};
  }
`;

// Enlace individual
const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
  display: flex;
  justify-content: center;
  align-items: center; 
  padding: 10px;

  &:hover {
    color: ${({ scrolled }) => (scrolled ? "#555" : "#ddd")};
  }    
`;

// Botón hamburguesa
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: ${({ scrolled }) => (scrolled ? "black" : "white")};
    margin-bottom: 4px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;