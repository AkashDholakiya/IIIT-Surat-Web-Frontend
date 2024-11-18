import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Eleven from './Pages/11';
import Nine from './Pages/9';
import Footer from './components/footer';
import './index.css'
import Navbarr from './components/Navbarr';
import Home from './Pages/Home';
import AboutTnp from './components/AboutTnp';
import AboutTnpOfficer from './components/AboutTnp_Tnp_Officer';
import AboutTnpPlacementTeam from './components/AboutTnp_Placement_team';
import Clubs from "./Pages/23-25"
import Six from "./Pages/3_7"
import HostelLife from "./Pages/29-32"
import Rnc from "./Pages/17_23"
import Alumni from './components/Alumni';
import Page from './Pages/page';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={`${darkMode && 'dark'}`}>

      <Router>
        <Navbarr setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/vision' element={<Eleven />} />
          <Route path='/about-tnp' element={<AboutTnp />} />
          <Route path='/director' element={<Nine />} />
          <Route path='/tnp-officer' element={<AboutTnpOfficer />} />
          <Route path='/tnppt' element={<AboutTnpPlacementTeam />} />
          <Route path='/clubs' element={<Clubs />} />
          <Route path='/department' element={<Six />} />
          <Route path='/rnc' element={<Rnc />} />
          <Route path='/hostel' element={<HostelLife />} />
          <Route path='/alumni' element={<Alumni/>}/>
          <Route path='/page' element={<Page/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
