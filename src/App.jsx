import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Muebles from "./pages/Muebles"
import Poltronas from "./pages/Poltronas"
import Salas from "./pages/Salas"
import Comedores from "./pages/Comedor"
import SofaCamas from "./pages/SofaCama"
import ResponsiveAppBar from "./components/NavBar"
import { createGlobalStyle } from 'styled-components';
import WhatsAppButton from "./components/WhatsAppButton";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
    
`;

function App() {

  return (
    <>
    <GlobalStyle />
      <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/muebles" element={<Muebles />}  />
        <Route path="/poltronas" element={<Poltronas />}  />
        <Route path="/salas" element={<Salas />}  />
        <Route path="/comedores" element={<Comedores />}  />
        <Route path="/sofa-camas" element={<SofaCamas />}  />
      </Routes>    
      <WhatsAppButton />  
      </BrowserRouter>
    </>
  )
}

export default App
