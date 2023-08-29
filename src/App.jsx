import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/nav/MenuBar";
import { About, Contact, Home, Services, Careers, SMMarketing, } from "./pages";
import { SDevelopment, GDevelopment, Wdevelopment, ADevelopment, } from "./pages";
import { BCDevelopment, SEOptimization, CSecurity, } from "./pages";
import Slider from "./components/Slider/Slider";
import { ImWhatsapp } from 'react-icons/Im';
import { FiPhoneCall } from 'react-icons/Fi';


function App() {
  return (
    <div className="">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/SDevelopment" element={<SDevelopment />} />
        <Route path="/GDevelopment" element={<GDevelopment />} />
        <Route path="/Wdevelopment" element={<Wdevelopment />} />
        <Route path="/ADevelopment" element={<ADevelopment />} />

        <Route path="/BCDevelopment" element={<BCDevelopment />} />
        <Route path="/SMMarketing" element={<SMMarketing />} />
        <Route path="/SEOptimization" element={<SEOptimization />} />
        < Route path="/CSecurity" element={<CSecurity />} />


        <Route path="/Slider" element={<Slider />} />

      </Routes>
      <div className="quick-contact">
        <a href="tel:+919650388201">
          <FiPhoneCall style={{color: "#ffff"}} />
        </a>
        <a href="https://wa.me/+919650388201" target="_blank" rel="noopener noreferrer">
          <ImWhatsapp style={{color: "#ffff"}}/>
        </a>
      </div>



    </div>
  );
}

export default App;
