import styled from 'styled-components';
import { Button } from '@mui/material';
import img1 from '../media/img/comedores/C28.jpeg'
import imgA from '../media/img/comedores/C17.jpeg'
import imgB from '../media/img/comedores/C11.jpeg'
import imgC from '../media/img/comedores/C12.jpeg'
import imgD from '../media/img/comedores/C13.jpeg'
import imgE from '../media/img/comedores/C14.jpeg'
import imgF from '../media/img/comedores/C15.jpeg'
import imgG from '../media/img/comedores/C18.jpeg'
import imgH from '../media/img/comedores/C19.jpeg'
import imgI from '../media/img/comedores/C23.jpeg'
import imgJ from '../media/img/comedores/C22.jpeg'
import imgK from '../media/img/comedores/C24.jpeg'
import imgL from '../media/img/comedores/C25.jpeg'
import imgM from '../media/img/comedores/C20.jpeg'
import imgN from '../media/img/comedores/C28.jpeg'
import imgO from '../media/img/comedores/C30.jpeg'
import imgP from '../media/img/comedores/C31.jpeg'
import imgQ from '../media/img/comedores/C38.jpeg'
import imgR from '../media/img/comedores/C40.jpeg'
import Footer from '../components/Footer';
import { useCart } from "../context/CartContext";
import PrintPdf from "../components/PrintPdf"

function Comedor() {
  const { addToCart } = useCart();

  const scrollToProductos = () => {
    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const productos = [
    { imgFront: imgA, imgBack: imgB, title: "Comedor Rústico Noble" },
    { imgFront: imgC, imgBack: imgD, title: "Comedor Transparencia Moderna" },
    { imgFront: imgE, imgBack: imgF, title: "Comedor Elegancia Brillante" },
    { imgFront: imgG, imgBack: imgH, title: "Comedor Línea Vintage" },
    { imgFront: imgI, imgBack: imgJ, title: "Comedor Encanto Colonial" },
    { imgFront: imgK, imgBack: imgL, title: "Comedor Minimal Warm" },
    { imgFront: imgM, imgBack: imgN, title: "Comedor Clásico Contempoi" },
    { imgFront: imgO, imgBack: imgP, title: "Comedor Luminiscencia" },
    { imgFront: imgQ, imgBack: imgR, title: "Comedor Estilo Campestre" },

  ];
  return (
    <PageContainer>
      <ContentOne>
        <Overlay>
          <TextContainer>
            <h1>Donde los momentos se comparten</h1>
            <p>
              Crea el espacio perfecto para tus reuniones familiares y cenas especiales. Nuestros comedores unen diseño y calidad para que cada comida sea una experiencia única.
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
        <PrintPdf pdfUrl="/docs/catalogocomedores.pdf"></PrintPdf>
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
export default Comedor;

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