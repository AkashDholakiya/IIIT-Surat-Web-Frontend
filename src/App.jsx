import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Eleven from "./Pages/11";
import Nine from "./Pages/9";
import Footer from "./components/footer";
import "./index.css";
import Navbarr from "./components/Navbarr";
import Home from "./Pages/Home";
import AboutTnp from "./components/tnp/AboutTnp";
import AboutTnpOfficer from "./components/tnp/AboutTnpTnpOfficer";
import AboutTnpPlacementTeam from "./components/tnp/AboutTnp_Placement_team";
import Clubs from "./Pages/23-25";
// Department imports
import Six from "./Pages/3_7";
import SixECE from './Pages/3-7ece';
import SixAH from './Pages/3-7AS_H';
import Adj from './Pages/3_7adjunct';

import HostelLife from "./Pages/29-32";
// import Admission from "./Pages/Admission";
import Rnc from "./Pages/17_23";
import Alumni from "./components/Alumni";
import Page from "./Pages/page";
// import Feasta from './Pages/26_28';
import OurAchievers from "./components/tnp/OurAchievers";
import AboutTnpStats from "./components/tnp/AboutTnpStats";
import PlacementGuidelines from "./components/tnp/PlacementGuidelines";
import AllTnp from "./components/tnp/AllTnp";
import Eight from "./Pages/8";
import Career from "./Pages/CareerPage";
import NotFound from "./components/NotFound";

import About from "./Pages/Discover/about";
import Senate from "./Pages/Discover/senate";
import Admin from "./Pages/Discover/admin";
import BWC from "./Pages/Discover/building_work_committee";
import MOU from "./Pages/Discover/mou";
import Finance from "./Pages/Discover/finance";
import Discover from "./Pages/Discover/discover_iiit_surat";
import Vision from "./Pages/Discover/vision";
import Director from "./Pages/Discover/director";
import BOG from "./Pages/Discover/board_of_governance";


import Admission from "./Pages/Admission/admission";
import Josaa from "./Pages/Admission/josaa";
import Business from "./Pages/Admission/business_rules";
import Report from "./Pages/Admission/physical_reporting";
import Seat from "./Pages/Admission/seat_matrix";
import Fee from "./Pages/Admission/fee_structure";


import Academics from "./Pages/Academics/academics";
import Btech from "./Pages/Academics/btech";
import Phdfee from "./Pages/Academics/phd_fee";
import Holiday from "./Pages/Academics/holiday";
import Calender from "./Pages/Academics/calender";
import Phdrules from "./Pages/Academics/phd_academic_rules";
import WebsiteTeam from "./components/WebsiteTeam";

function App() {
  return (
    <div>
      <Router>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />}>
            <Route index element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="vision-mission" element={<Vision />} />
            <Route path="director" element={<Director />} />
            <Route path="Board-of-governance" element={<BOG />} />
            <Route path="senate-members" element={<Senate />} />
            <Route path="finance" element={<Finance />} />
            <Route path="building-work-committee" element={<BWC />} />
            <Route path="mou" element={<MOU />} />
            <Route path="admin" element={<Admin />} />
            <Route path='websiteteam' element={<WebsiteTeam />} />
          </Route>

          <Route path="/admission" element={<Admission />}>
            <Route index element={<Fee />} />
            <Route path="josaa" element={<Josaa />} />
            <Route path="fee-structure" element={<Fee />} />
            <Route path="physical-reporting" element={<Report />} />
            <Route path="business-rules" element={<Business />} />
            <Route path="seat-matrix" element={<Seat />} />
          </Route>

          <Route path="/academics" element={<Academics />}>
            <Route index element={<Academics />} />
            <Route path="academic-calendar" element={<Calender />} />
            <Route path="holiday-list" element={<Holiday />} />
            <Route path="btech-academic-rules" element={<Btech />} />
            <Route path="phd-academic-rules" element={<Phdrules />} />
            <Route path="phd-fee-structure" element={<Phdfee />} />
          </Route>

          <Route path="/et" element={<Eight />} />
          <Route path="/career" element={<Career />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/alumni" element={<Alumni />} />
          {/*  <Route path="/feasta" element={<Feasta />} /> It is not important as already covered in Student Clubs Pages */}
          <Route path="/tnp" element={<AllTnp />}>
            <Route index element={<AboutTnp />} />
            <Route path="about-tnp" element={<AboutTnp />} />
            <Route path="tnp-officer" element={<AboutTnpOfficer />} />
            <Route path="placement-team" element={<AboutTnpPlacementTeam />} />
            <Route path="placement-statistics" element={<AboutTnpStats />} />
            <Route path="our-achievers" element={<OurAchievers />} />
            <Route
              path="placement-guidelines"
              element={<PlacementGuidelines />}
            />
          </Route>
          
          <Route path='/csedepartment' element={<Six />} />
          <Route path='/ecedepartment' element={< SixECE/>} />
          <Route path='/adjunct-professor' element={< Adj/>} />
          <Route path='/applied-science-and-humanities' element={< SixAH/>} />


          <Route path="/rnc" element={<Rnc />} />
          <Route path="/hostel" element={<HostelLife />} />
          {/* <Route path="/admission" element={<Admission />} /> */}
          <Route path="/page" element={<Page />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
