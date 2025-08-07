import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ResponsiveAppBar from "./components/NavBar"
import { createGlobalStyle } from 'styled-components';

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
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
