import React from "react";
import Slider from "infinite-react-carousel";
import "../css/slide.css";
import bannerimg1 from '../assets/img/bannerimg1.jpeg';
import bannerimg2 from '../assets/img/bannerimg2.jpeg';
import bannerimg3 from '../assets/img/bannerimg3.jpeg';




function Slide() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    className: "slide_box",
    dots: false,
    virtualList: true,
    duration: 20,
    arrows:false,
    
  };
  return (
    <div>
      
      <Slider {...settings}>
        <div className="row">
          <h1>Hello</h1>
          <img
          
            src={bannerimg1}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
         
        </div>
        <div>
          <img
            src ={bannerimg2}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div>
          <img
            src={bannerimg3}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
      </Slider>
    </div>


  );
}

export default Slide;








