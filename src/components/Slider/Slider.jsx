import React, { useState, useEffect } from "react";
import "./Slider.css"; // You can style the slider in this CSS file

const Slider = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="auto-change-slider">
      <button className="prev-button" onClick={prevSlide}>
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </button>
      {components.map((Component, index) => (
        <div
          key={index}
          className={`slider-item flip-in-ver-right ${
            index === currentIndex ? "active" : ""  
          }`}
        >
          {<Component />}
        </div>
      ))}
      <button className="next-button" onClick={nextSlide}>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Slider;