import React, { useState } from "react";
import styled from "styled-components";

// Contenedor principal
const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Logo o título
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

// Contenedor de enlaces
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background-color: #333;
    flex-direction: column;
    padding: 1rem;
    display: ${props => (props.open ? 'flex' : 'none')};
  }
`;

// Enlace individual
const NavLink = styled.li`
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd;
  }
`;

// Botón hamburguesa (solo visible en móvil)
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo>INCULMA</Logo>

      <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <NavLinks open={open}>
        <NavLink>Inicio</NavLink>
        <NavLink>Servicios</NavLink>
        <NavLink>Contacto</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default NavBar;
