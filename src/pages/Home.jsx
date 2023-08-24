import React from "react";
import Slide from "../components/Slide";
import Homeservices from "../components/Home/Homeservices";
import BriefAbout from "../components/Home/BreifAbout";
import Footer from "../components/Footer";
import Choose from "../components/Home/Choose";
import Pwork from "../components/Pwork";
import Worksp from "../components/Home/Worksp";
import { Row } from "react-bootstrap";



export const Home = () => {
  return (
    <>
      <Row fluid style={{ overflow: "hidden" }}>
        <Slide />
        <BriefAbout />
        <Homeservices />
        <Choose />
        <Worksp />
        <Pwork />
        {/* <Testimonials /> */}
        <Footer />

      </Row>
    </>




  );
};
