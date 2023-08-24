import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
import MenuBar from "./components/nav/MenuBar";


import { About, Contact, Home, Services, Careers, SMMarketing, } from "./pages";
import { SDevelopment, GDevelopment, Wdevelopment, ADevelopment, } from "./pages";
import { BCDevelopment, SEOptimization, CSecurity, } from "./pages";

// import { SMMpricing, WPpricing, SEOpricing, PPCpricing, } from "./pages";


function App() {
  return (
    <div className="App">
      <MenuBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/nav" element={<Navbar/>}/>     */}
        {/* <Route path="/packages" element={<Packages />} /> */}
        {/* <Route path ="/product" element={<Product/>}/>   */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/SDevelopment" element={<SDevelopment />} />
        <Route path="/GDevelopment" element={<GDevelopment />} />
        <Route path="/Wdevelopment" element={<Wdevelopment />} />
        <Route path="/ADevelopment" element={<ADevelopment />} />

        <Route path="/BCDevelopment" element={<BCDevelopment />} />
        <Route path="/SMMarketing" element={<SMMarketing />} />
        <Route path="/SEOptimization" element={<SEOptimization />} />
        < Route path="/CSecurity" element={<CSecurity/>} />



        {/* < Route path="/WPpricing" element={<WPpricing />} />

        < Route path="/SMMpricing" element={<SMMpricing />} />
        < Route path="/SEOpricing" element={<SEOpricing />} />

        < Route path="/PPCpricing" element={<PPCpricing />} /> */}

      </Routes>
    </div>
  );
}

export default App;
