// components/AnimatedButton.jsx
import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.a`
  display: inline-block;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border: 2px solid #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: #fff; /* Cambia el color del texto al pasar */
    border: 2px solid #f5d5bcff;
    background-color: #e68b46ff;
  }

  &:hover:before {
    left: 0; /* Efecto de "barrido" */
  }
`;

const AnimatedButton = ({ title, link }) => {
  return (
    <ButtonWrapper href={link}>
      {title}
    </ButtonWrapper>
  );
};

export default AnimatedButton;
