import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #292727ff;
  color: #fff;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;

  a{
    text-decoration: none;
    color: #f7c05cff;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Todos los derechos reservados — Desarrollado por
      <a href="https://www.frandlebaza.com" target="_blank" rel="noopener noreferrer"> frandlebaza.com</a>
    </FooterContainer>
  );
};

export default Footer;
