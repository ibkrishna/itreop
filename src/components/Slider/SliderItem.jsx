import React from "react";
import './slideritem.css';
import { Button } from "react-bootstrap";
const SampleComponent1 = () => {
  return (
    <>
      <div className="slider-container slide-1">
        <div className="slider-content">
          <h1>Where Innovation Meets Code!</h1>
          <h6 className="slider-sub-heading">Web Development</h6>
          <p>
            Empowering businesses with seamless web solutions through cutting-edge design and meticulous coding. Transforming visions into user-centric realities for a dynamic online presence.
          </p>
          <Button variant="outline-light" style={{ maxWidth: "150px" }}>Know More</Button>
        </div>
      </div>
    </>
  );
};

const SampleComponent2 = () => {
  return (
    <>
      <div className="slider-container slide-2">
<div className="slider-content">
          <h1>Innovation and Code Unite for Digital Excellence!"</h1>
          <h6 className="slider-sub-heading">Digital Marketing</h6>
          <p>
          Empowering Businesses with Seamless Digital Transformation: Designing, Coding, and Realizing Dynamic Online Visions.
          </p>
          <Button variant="outline-light" style={{ maxWidth: "150px" }}>Know More</Button>
        </div>
      </div>
    </>
  );
};

const SampleComponent3 = () => {
  return (
    <>

      <div className="slider-container slide-3">
 <div className="slider-content">
          <h1>Innovation and Code Elevating SEO!</h1>
          <h6 className="slider-sub-heading">Search Engine Optimization</h6>
          <p>
          Elevating Online Presence: Crafting SEO Excellence through Innovative Design and Strategic Coding for Visible Results.
          </p>
          <Button variant="outline-light" style={{ maxWidth: "150px" }}>Know More</Button>
        </div>
      </div>





    </>
  );
};

export { SampleComponent1, SampleComponent2, SampleComponent3 };