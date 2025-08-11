import styled from 'styled-components';
import { Button } from '@mui/material';
import img1 from '../media/img/muebles/62.jpeg'
import imgA from '../media/img/sofacamas/s1.jpeg'
import imgB from '../media/img/sofacamas/s2.jpeg'
import imgC from '../media/img/sofacamas/s3.jpeg'
import imgD from '../media/img/sofacamas/s4.jpeg'
import imgE from '../media/img/sofacamas/s5.jpeg'
import imgF from '../media/img/sofacamas/s6.jpeg'
import imgG from '../media/img/sofacamas/s7.jpeg'
import imgH from '../media/img/sofacamas/s8.jpeg'
import imgI from '../media/img/sofacamas/s9.jpeg'
import imgJ from '../media/img/sofacamas/s10.jpeg'
import imgK from '../media/img/sofacamas/s11.jpeg'
import imgL from '../media/img/sofacamas/s12.jpeg'
import imgM from '../media/img/sofacamas/s13.jpeg'
import imgN from '../media/img/sofacamas/s14.jpeg'
import imgO from '../media/img/sofacamas/s15.jpeg'
import imgP from '../media/img/sofacamas/s16.jpeg'
import imgQ from '../media/img/sofacamas/s17.jpeg'
import imgR from '../media/img/sofacamas/s18.jpeg'
import Footer from '../components/Footer';
import { useCart } from "../context/CartContext";
import Car from "../components/BotonWhatsApp"

function SofaCama() {
  
    const { addToCart } = useCart();

    const scrollToProductos = () => {
  document.getElementById("productos")?.scrollIntoView({
    behavior: "smooth",
  });
};

  const productos = [
    { imgFront: imgA, imgBack: imgB, title: "Sofá Cama Verona Comfort"  },
    { imgFront: imgC, imgBack: imgD, title: "Sofá Cama Oslo Premium"  },
    { imgFront: imgE, imgBack: imgF, title: "Sofá Cama Turín Multifuncional"  },
    { imgFront: imgG, imgBack: imgH, title: "Sofá Cama Madrid Relax"  },
    { imgFront: imgI, imgBack: imgJ, title: "Sofá Cama Estocolmo Plus"  },
    { imgFront: imgK, imgBack: imgL, title: "Sofá Cama Firenze Deluxe"  },
    { imgFront: imgM, imgBack: imgN, title: "Sofá Cama Berlín Práctico"  },
    { imgFront: imgO, imgBack: imgP, title: "Sofá Cama Lisboa Versátila"  },
    { imgFront: imgQ, imgBack: imgR, title: "Sofá Cama Roma Elegance"  },

  ];
    return (
        <PageContainer>
            <ContentOne>
        <Overlay>
          <TextContainer>
            <h1>Versatilidad sin perder el estilo</h1>
            <p>
             Descubre la solución perfecta para espacios reducidos o visitas inesperadas. Nuestros sofá camas ofrecen comodidad para sentarse y descansar, sin comprometer la estética de tu hogar.
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
export default SofaCama;

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