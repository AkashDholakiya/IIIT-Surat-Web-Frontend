import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Eleven from './Pages/11';
import Nine from './Pages/9';
import Footer from './components/footer';
import './index.css';
import Navbarr from './components/Navbarr';
import Home from './Pages/Home';
import AboutTnp from './components/tnp/AboutTnp';
import AboutTnpOfficer from './components/tnp/AboutTnpTnpOfficer';
import AboutTnpPlacementTeam from './components/tnp/AboutTnp_Placement_team';
import Clubs from './Pages/23-25';
import Six from './Pages/3_7';
import HostelLife from './Pages/29-32';
import Admission from "./Pages/Admission"
import Rnc from './Pages/17_23';
import Alumni from './components/Alumni';
import Page from './Pages/page';
import Feasta from './Pages/26_28';
import OurAchievers from './components/tnp/OurAchievers';
import AboutTnpStats from './components/tnp/AboutTnpStats';
import PlacementGuidelines from './components/tnp/PlacementGuidelines';
import AllTnp from './components/tnp/AllTnp';
import Eight from './Pages/8';
import CareerPage from './components/CareerPage';

function App() {

  return (
    <div>
      <Router>
        <Navbarr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/vision' element={<Eleven />} />
          <Route path='/et' element={<Eight />} />
          <Route path="/director" element={<Nine />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/department" element={<Six />} />
          <Route path="/rnc" element={<Rnc />} />
          <Route path="/hostel" element={<HostelLife />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/page" element={<Page />} />
          <Route path="/feasta" element={<Feasta />} />
          <Route path="/tnp" element={<AllTnp />}>
            <Route index element={<AboutTnp />} />
            <Route path="about-tnp" element={<AboutTnp />} />
            <Route path="tnp-officer" element={<AboutTnpOfficer />} />
            <Route path="placement-team" element={<AboutTnpPlacementTeam />} />
            <Route path="placement-statistics" element={<AboutTnpStats />} />
            <Route path="our-achievers" element={<OurAchievers />} />
            <Route path="placement-guidelines" element={<PlacementGuidelines />} />
          </Route>
          <Route path='/clubs' element={<Clubs />} />
          <Route path='/csedepartment' element={<Six />} />
          <Route path='/rnc' element={<Rnc />} />
          <Route path='/hostel' element={<HostelLife />} />
          <Route path='/admission' element={<Admission />} />
          <Route path='/alumni' element={<Alumni/>}/>
          <Route path='/page' element={<Page/>}/>
          <Route path='/feasta' element={<Feasta/>}/>
          <Route path='/career' element={<CareerPage/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
