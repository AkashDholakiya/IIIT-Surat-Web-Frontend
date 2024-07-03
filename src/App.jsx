import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Eleven  from './Pages/11';
import Footer from './components/footer';
import './index.css'
import Navbarr from './components/Navbarr';
import Home from './Pages/Home';
import AboutTnp from './components/AboutTnp';
import AboutTnp_Tnp_Officer from './components/AboutTnp_Tnp_Officer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
   
        <div className={`${darkMode && 'dark'}`}>
      <Router>
        <Navbarr setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/vision' element={<Eleven />} />
            <Route path='/about-tnp' element={<AboutTnp/>} />
            <Route path='/tnp-officer' element={<AboutTnp_Tnp_Officer/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
