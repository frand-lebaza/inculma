import styled from 'styled-components';
import img1 from '../media/img/muebles/1.jpeg'
import logo from '../media/img/logo/logo3.png'
import sofaCama from '../media/img/muebles/62.jpeg'
import mueble from '../media/img/muebles/sala3.jpeg'
import comedor from '../media/img/comedores/comedor1.jpeg'
import poltrona from '../media/img/poltronas/S26.jpeg'
import silla from '../media/img/muebles/sala2.jpeg'
import { Button } from '@mui/material';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from '../components/Footer';
import AnimatedButton from '../components/AnimatedButton';

function Home() {
  const scrollToProductos = () => {
    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <PageContainer>
      <ContentOne>
        <Overlay>
          <TextContainer>
            <h1>Bienvenido a nuestra tienda</h1>
            <p>
              Descubre nuestra colección de salas, comedores, muebles y sillas con el mejor estilo y calidad.
            </p>
            <Button variant='contained' size='large' color='' sx={{
              backgroundColor: "#e68b46ff",
              "&:hover": {
                backgroundColor: "#c07032ff",
              },
            }}
              onClick={scrollToProductos}>Conoce nuestros productos</Button>
          </TextContainer>
        </Overlay>

      </ContentOne>
      <ContentStyle>
        <Title>
          DESCUBRE LOS MEJORES PRODUCTOS PARA CADA ESPACIO DE TU HOGAR
        </Title>
      </ContentStyle>
      <ContentTwo id="productos">
        {/* Fila 1: ocupa las 3 columnas */}
        <CollageItem
          style={{
            gridColumn: "1 / span 2",
            gridRow: "1 /span 2",
            backgroundImage: `url(${mueble})`
          }}
        >
          <OverlayImg>

            <AnimatedButton title="muebles" link="/muebles" />
          </OverlayImg>
        </CollageItem>

        {/* Fila 2: un div que ocupa 2 columnas */}
        <CollageItem
          style={{
            gridColumn: "3 / span 1",
            gridRow: "1 / span 2",
            backgroundImage: `url(${poltrona})`
          }}
        >
          <OverlayImg>

            <AnimatedButton title="poltronas" link="/poltronas" />
          </OverlayImg>
        </CollageItem>

        {/* Fila 3: tres divs independientes */}
        <CollageItem style={{ backgroundImage: `url(${silla})` }} >
          <OverlayImg>

            <AnimatedButton title="salas" link="/salas" />
          </OverlayImg>
        </CollageItem>
        <CollageItem style={{ backgroundImage: `url(${comedor})` }} >
          <OverlayImg>

            <AnimatedButton title="comedores" link="comedores" />
          </OverlayImg>
        </CollageItem>
        <CollageItem style={{ backgroundImage: `url(${sofaCama})` }} >
          <OverlayImg>

            <AnimatedButton title="sofa-cama" link="/sofa-camas" />
          </OverlayImg>
        </CollageItem>
      </ContentTwo>

      <ContentThree id='nosotros'>
        <ContentStyle>
          <Title>Sobre Nosotros </Title>
          <Logo src={logo} alt="Logo empresa" />
          <Description>
            En Muebles InCulma creamos espacios acogedores y con estilo.
            Nuestro compromiso es ofrecer muebles de alta calidad, con diseños
            únicos que combinan comodidad y elegancia. <br></br>
            Realizamos todo tipo de muebles para tu hogar u oficina. También refaccionamos tus muebles usados. Somos fabricantes y diseñadores con más de 25 años de experiencia
          </Description>
        </ContentStyle>
        <ContentStyle>
          <Title>Horario de atención </Title>

          <Description>
            Lunes a Viernes: 09:30 a.m - 7:30 p.m  <br></br>
            Fines de Semana y Festivos: 10:00 a.m - 03:30 p.m  <br></br>
            Atención en jornada continua<br></br>
          </Description>
          <Description>
            Puedes encontrarnos en nuestras redes sociales y seguir de cerca las mejores ofertas y nuevos productos.
          </Description>
          <Socials>
            <a href="https://www.facebook.com/share/1GnTDPxLAK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/mueblesinculma?igsh=a2x5ZWx0NDkxaGRl&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@muebles.inculma?_t=ZS-8ylWbVKnvs2&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </Socials>
        </ContentStyle>
      </ContentThree>
      <ContentFour id='contacto'>
        <Title>Visita nuestras instalaciones </Title>

        <Description>
          Estamos ubicados en Bogotá D.C Localidad Fontibón. <br></br>
          Carrera 102 # 17a 11 Local 2 <br></br>
          <b>+57 3223989842 - 3138579718 - 3228102395</b>

        </Description>
        <MapContainer>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7953.065173505887!2d-74.142352!3d4.677076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c8de7df6315%3A0x3ea1aee9d7067d2b!2sCra.%20102%20%2321-07%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1754843925734!5m2!1ses!2sco" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </MapContainer>
      </ContentFour>
      <Footer />
    </PageContainer>
  );
}

export default Home;

// sección 1

const ContentOne = styled.div`
  position: relative;
  background-image: url(${img1});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;

    @media (max-width: 768px) {
    height: 60vh;
  }

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

const OverlayImg = styled.div`
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

    &:hover {
      background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, 0) 100%
);
  }
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

// Sección 2

const ContentTwo = styled.div`
  position: relative;
  background-color: #FAF8F5;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
  grid-template-rows: repeat(3, 1fr); /* 3 filas iguales */
  gap: 10px; /* espacio entre bloques */
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Solo una columna */
    
    /* Los hijos no deben tener grid-column/grid-row fijos */
    & > div {
      grid-column: auto !important;
      grid-row: auto !important;
      height: 200px; /* Altura adaptable */
    }
  }
`;

const CollageItem = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  
`;

// sección 3

const ContentThree = styled.div`
  background-color: #faf8f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  text-align: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    margin-top: 120px;
  }
`;

const Logo = styled.img`
  width: 250px;
  margin-bottom: 1rem;

    @media (max-width: 768px) {
    width: 150px;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #4b3f2f;
`;

const Description = styled.p`
  font-size: 1rem;
  max-width: 600px;
  color: #5f5f5f;
  margin-bottom: 2rem;
  line-height: 1.5;  
  text-align: justify;
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: #322f4bff;
    font-size: 2rem;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #8c7b6d;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const ContentStyle = styled.div`
  background-color: #faf8f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

// sección 4
const ContentFour = styled.div`
  background-color: #e4951e56;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  text-align: center;
`;

// Estilo para el contenedor general
const PageContainer = styled.div`
  scroll-snap-type: y mandatory;  
  height: 100vh;
`;