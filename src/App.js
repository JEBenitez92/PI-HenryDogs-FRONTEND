import {From, Datail, Login, Home, Favoritos, About} from "./views";
import { Routes,Route, useLocation } from 'react-router-dom';
import { useState } from "react";
import NavBar from "./componets/NavBar/NavBar";
import './App.css';

function App() {

  const location = useLocation();
  const [paginaActual, setPaginaActual] = useState(1);

  return (
    <div className="App">
     
      {location.pathname === "/" ? null : <NavBar paginaActual={paginaActual} setPaginaActual={setPaginaActual} />}
      
      <Routes>
        <Route path="/" element= { <Login /> } />
        <Route path="/home" element = {  <Home paginaActual={paginaActual} setPaginaActual={setPaginaActual}  /> } />
        <Route path="/create" element={ <From /> } />
        <Route path="/detail/:detailId" element= { <Datail /> } />
        <Route path="/favoritos" element= { <Favoritos /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
  
    </div>
  );
}

export default App;
