import styled from 'styled-components';
import { Button } from '@mui/material';
import img1 from '../media/img/poltronas/s14.jpeg'
import imgA from '../media/img/poltronas/S1.jpeg'
import imgB from '../media/img/poltronas/S2.jpeg'
import imgC from '../media/img/poltronas/s7.jpeg'
import imgD from '../media/img/poltronas/s9.jpeg'
import imgE from '../media/img/poltronas/p1.jpeg'
import imgF from '../media/img/poltronas/p2.jpeg'
import imgG from '../media/img/poltronas/p3.jpeg'
import imgH from '../media/img/poltronas/p4.jpeg'
import imgI from '../media/img/poltronas/S13.jpeg'
import imgJ from '../media/img/poltronas/s12.jpeg'
import imgK from '../media/img/poltronas/s9.jpeg'
import imgL from '../media/img/poltronas/s10.jpeg'
import imgM from '../media/img/poltronas/s7.jpeg'
import imgN from '../media/img/poltronas/s17.jpeg'
import imgO from '../media/img/poltronas/s18.jpeg'
import imgP from '../media/img/poltronas/s19.jpeg'
import imgQ from '../media/img/poltronas/s26.jpeg'
import imgR from '../media/img/poltronas/s23.jpeg'
import Footer from '../components/Footer';
import { useCart } from "../context/CartContext";
import Car from "../components/BotonWhatsApp"

function Poltronas() {
   const { addToCart } = useCart();

    const scrollToProductos = () => {
  document.getElementById("productos")?.scrollIntoView({
    behavior: "smooth",
  });
};

  const productos = [
    { imgFront: imgA, imgBack: imgB, title: "Poltrona Milano Luxe"  },
    { imgFront: imgC, imgBack: imgD, title: "Silla Escandinava Bergen"  },
    { imgFront: imgE, imgBack: imgF, title: "Poltrona Reclinable Amalfi"  },
    { imgFront: imgG, imgBack: imgH, title: "Silla Vintage Praga"  },
    { imgFront: imgI, imgBack: imgJ, title: "Poltrona Moderna Capri"  },
    { imgFront: imgK, imgBack: imgL, title: "Silla Nórdica Estocolmo"  },
    { imgFront: imgM, imgBack: imgN, title: "Poltrona Acolchada Savona"  },
    { imgFront: imgO, imgBack: imgP, title: "Silla Industrial Boston"  },
    { imgFront: imgQ, imgBack: imgR, title: "Poltrona Chesterfield París"  },

  ];
    return (
       <PageContainer>
            <ContentOne>
        <Overlay>
          <TextContainer>
            <h1>El rincón perfecto para tu descanso</h1>
            <p>
             Relájate con nuestras poltronas diseñadas para ofrecerte el máximo confort. Desde modelos clásicos hasta modernos, cada una es una invitación a disfrutar de tu tiempo libre con estilo.
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
    <Footer/>
        </PageContainer>
    );
}
export default Poltronas;


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