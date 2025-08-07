import React from 'react';
import styled from 'styled-components';

// Sección de altura completa
const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  scroll-snap-align: start;
`;

// Estilo para el contenedor general
const PageContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

function Home() {
  return (
    <PageContainer>
      <Section style={{ backgroundColor: '#f2f2f2' }}>
        Sección 1
      </Section>
      <Section style={{ backgroundColor: '#e0e0e0' }}>
        Sección 2
      </Section>
      <Section style={{ backgroundColor: '#ccc' }}>
        Sección 3
      </Section>
    </PageContainer>
  );
}

export default Home;


