import styled from "styled-components";

function CardImage({ image, title, onClick }) {
  return (
    <CardContainer image={image} onClick={onClick}>
      <Overlay>
        <Title>{title}</Title>
      </Overlay>
    </CardContainer>
  );
}

export default CardImage;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 12px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  color: white;
  font-size: 1.5rem;
  text-align: center;
`;
