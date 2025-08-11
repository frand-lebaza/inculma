import styled from 'styled-components';
import { Button } from '@mui/material';
import img1 from '../media/img/salas/salap.jpeg'
import imgA from '../media/img/salas/sala1.jpeg'
import imgB from '../media/img/salas/sala2.jpeg'
import imgC from '../media/img/salas/sala3.jpeg'
import imgD from '../media/img/salas/sala4.jpeg'
import imgE from '../media/img/salas/sala5.jpeg'
import imgF from '../media/img/salas/sala6.jpeg'
import imgG from '../media/img/salas/sala7.jpeg'
import imgH from '../media/img/salas/sala8.jpeg'
import imgI from '../media/img/salas/sala9.jpeg'
import imgJ from '../media/img/salas/sala10.jpeg'
import imgK from '../media/img/salas/sala11.jpeg'
import imgL from '../media/img/salas/sala12.jpeg'
import imgM from '../media/img/salas/sala13.jpeg'
import imgN from '../media/img/salas/sala14.jpeg'
import imgO from '../media/img/salas/sala15.jpeg'
import imgP from '../media/img/salas/sala16.jpeg'
import imgQ from '../media/img/salas/sala17.jpeg'
import imgR from '../media/img/salas/sala18.jpeg'
import Footer from '../components/Footer';
import { useCart } from "../context/CartContext";
import PrintPdf from "../components/PrintPdf"

function Salas() {
  const { addToCart } = useCart();

  const scrollToProductos = () => {
    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const productos = [
    { imgFront: imgA, imgBack: imgB, title: "Sala Elegance" },
    { imgFront: imgC, imgBack: imgD, title: "Sala Moderno Chic" },
    { imgFront: imgE, imgBack: imgF, title: "Sala Aurora" },
    { imgFront: imgG, imgBack: imgH, title: "Sala Nova" },
    { imgFront: imgI, imgBack: imgJ, title: "Sala Infinity" },
    { imgFront: imgK, imgBack: imgL, title: " Sala Harmony" },
    { imgFront: imgM, imgBack: imgN, title: "Sala Urban Style " },
    { imgFront: imgO, imgBack: imgP, title: " Sala Contempo" },
    { imgFront: imgQ, imgBack: imgR, title: "Sala Classic Luxe" },

  ];
  return (
    <PageContainer>
      <ContentOne>
        <Overlay>
          <TextContainer>
            <h1>Salas que inspiran confort y estilo</h1>
            <p>
              Descubre nuestra exclusiva colección de salas diseñadas para transformar tu espacio en un refugio de elegancia y comodidad. Cada sala combina materiales de alta calidad con diseños modernos y funcionales.
            </p>
            <Button variant='contained' size='large' color='' sx={{
              backgroundColor: "#e68b46ff",
              "&:hover": {
                backgroundColor: "#c07032ff",
              },
            }}
              onClick={scrollToProductos} >Conoce nuestros productos</Button>
          </TextContainer>
        </Overlay>

      </ContentOne>
      <ContentStyle>
        <Title>
          Explora nuestros productos, estamos listos para atenderte
        </Title>
        <PrintPdf pdfUrl="/docs/mueblesysalas.pdf"></PrintPdf>
      </ContentStyle>
      <GridContainer id="productos">
        {productos.map((p, index) => (
          <Card key={index}>
            <Image img={p.imgFront} className="front" />
            <Image img={p.imgBack} className="back" />
            <span className="product-title">{p.title}</span>
            <Button variant="outlined" className="add-to-cart" sx={{
              backgroundColor: "#646464ff",
              "&:hover": {
                backgroundColor: "#8b7462ff",
              },
            }}
              onClick={() => addToCart(p)} >
              Añadir al carrito
            </Button>
          </Card>

        ))}
      </GridContainer>
      <Footer />
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

      @media (max-width: 768px) {
    height: 70vh;
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


// Contenedor de la cuadrícula
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// Tarjeta con imágenes superpuestas
const Card = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  cursor: pointer;

  .front, .back {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 75%;
    object-fit: cover;
    transition: opacity 0.4s ease-in-out;
  }

  .front {
    opacity: 1;
    z-index: 1;
  }

  .back {
    opacity: 0;
    z-index: 2;
  }

  &:hover {
    .front {
      opacity: 0;
    }
    .back {
      opacity: 1;
    }
  }

  .product-title {
    position: absolute;
    bottom: 60px; /* Espaciado desde el botón */
    left: 50%;
    transform: translateX(-50%);            
    z-index: 3;
    font-size: 18px;
    width: 100%;
    text-align: center;
  }

  .add-to-cart {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    color: white;
    width: 80%;
  }

    @media (max-width: 768px) {
  .front, .back {

    width: 90%;
    height: 70%;
  }
  }
`;



// Imagen en background
const Image = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
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

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #4b3f2f;
`;