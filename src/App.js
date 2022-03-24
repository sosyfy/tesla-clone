import React, { useState }  from 'react';
import{BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Header from './header/Header';
import HomePage from './homepage/HomePage'
import ModelX from './pages/ModelX';
import ModelS from './pages/ModelS';
import ModelY from './pages/ModelY';
import Model3 from './pages/Model3';
import SolarPanels from './pages/SolarPanels';
import SolarRoof from './pages/SolarRoof';
import Menu from "./menu/Menu";




function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/modelx" element={<ModelX />} />
        <Route path="/models" element={<ModelS />} />
        <Route path="/modely" element={<ModelY />} />
        <Route path="/model3" element={<Model3 />} />
        <Route path="/solarpanels" element={<SolarPanels />} />
        <Route path="/solarroof" element={<SolarRoof />} />
      </Routes>
    </Router>
  );
} 

export default App;
