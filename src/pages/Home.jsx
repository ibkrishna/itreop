import React from "react";
import Slide from "../components/Slide";
import Homeservices from "../components/Home/Homeservices";
import BriefAbout from "../components/Home/BreifAbout";
import Footer from "../components/Footer";
import Choose from "../components/Home/Choose";
// import Pwork from "../components/Pwork";
import Worksp from "../components/Home/Worksp";
import { Row } from "react-bootstrap";
import Project from "../components/project";


import Slider from "../components/Slider/Slider";
import {
  SampleComponent1,
  SampleComponent2,
  SampleComponent3
} from "../components/Slider/SliderItem";

// import {ImWhatsapp} from 'react-icons/Im';

export const Home = () => {
  const components = [SampleComponent1, SampleComponent2, SampleComponent3];

  return (
    <>
      
      <Slider components={components}/>
        <BriefAbout />
        <Homeservices />
        <Choose />
        <Worksp />
        <Project/>
        <Footer />
    </>




  );
};
