import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Eleven  from './Pages/11';
import Nine from './Pages/9';
import Footer from './components/footer';
import './index.css'
import Navbarr from './components/Navbarr';
import Home from './Pages/Home';
import AboutTnp from './components/AboutTnp';
import AboutTnp_Tnp_Officer from './components/AboutTnp_Tnp_Officer';
import AboutTnp_Placement_team from './components/AboutTnp_Placement_team';
import Departments from './components/Departments';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
   
        <div className={`${darkMode && 'dark'}`}>
          
      <Router>
        <Navbarr setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/department' element={<Departments />} />
            <Route path='/vision' element={<Eleven />} />
            <Route path='/about-tnp' element={<AboutTnp/>} />
            <Route path='/director' element={<Nine/>} />
            <Route path='/tnp-officer' element={<AboutTnp_Tnp_Officer/>} />
            <Route path='/tnppt' element={<AboutTnp_Placement_team/> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
