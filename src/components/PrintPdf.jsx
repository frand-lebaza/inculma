import React from 'react';
import styled from 'styled-components';



function PDFDownloadButton({ pdfUrl }) {

    // Método 3: Abrir en nueva pestaña (alternativo)
    const openPDFInNewTab = () => {
        window.open(pdfUrl, '_blank');
    };


    return (
        <ButtonContainer>
            <DownloadButton onClick={openPDFInNewTab} outline>
                Ver Catálogo
            </DownloadButton>
        </ButtonContainer>
    );
};

export default PDFDownloadButton;

// Styled Components
const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const DownloadButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid;
  
  ${({ outline }) => {
        if (outline) {
            return `
        background-color: transparent;
        color: #e68b46ff;
        border-color: #c07032ff;
        
        &:hover {
          background-color: #e68b46ff;
          color: white;
        }
      `;
        }
    }}

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;