import styled from 'styled-components';
import { Button } from '@mui/material';
import img1 from '../media/img/muebles/6.jpeg'

function Salas() {
    return (
        <PageContainer>
            <ContentOne>
        <Overlay>
          <TextContainer>
            <h1>Comodidad en cada asiento</h1>
            <p>
             Sillas pensadas para acompañarte en tus mejores momentos, ya sea en el comedor, la oficina o cualquier espacio de tu hogar. Con diseños versátiles y resistentes, siempre tendrás el asiento ideal.
            </p>
            <Button variant='contained' size='large' color='' sx={{
              backgroundColor: "#e68b46ff", 
              "&:hover": {
                backgroundColor: "#c07032ff", 
              },
            }} 
               >Conoce nuestros productos</Button>
          </TextContainer>
        </Overlay>

      </ContentOne>
        </PageContainer>
    );
}
export default Salas;

const ContentOne = styled.div`
  position: relative;
  background-image: url(${img1});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;

`;

// Capa oscura encima de la imagen
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.6) 0%,
  rgba(0, 0, 0, 0.1) 100%
);

  display: flex;
  align-items: center;
  justify-content: center;
`;

// Contenedor para el texto
const TextContainer = styled.div`
  width: 60%;
  color: white;
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;
// Estilo para el contenedor general
const PageContainer = styled.div`
  scroll-snap-type: y mandatory;  
  height: 100vh;
`;