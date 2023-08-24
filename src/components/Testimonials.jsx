import React, { useEffect, useState } from 'react';
import '../css/testimonial.css';


const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    // Define your quotes array, containing the quotes for each slide
    const quotes = [
      " is a social development environment...",
      "We say social, because  is a community...",
      "People use  for all sorts of things...",
    ];
  
    useEffect(() => {
      const animate = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 4500);
  
      return () => clearInterval(animate);
    }, [quotes.length]);

    return (
        <div id="container">
          <div id="holder">
            <div id="image">
              {/* Render the images dynamically based on the activeIndex */}
              <div className={`img jobs ${activeIndex === 0 ? 'active' : ''}`}></div>
              <div className={`img zuck ${activeIndex === 1 ? 'active' : ''}`}></div>
              <div className={`img musk ${activeIndex === 2 ? 'active' : ''}`}></div>
            </div>
    
            <div id="right"></div>
    
            <div id="text">
              <div id="centerText">
                {quotes.map((quote, index) => (
                  <p
                    key={index}
                    className={`quote ${activeIndex === index ? 'active' : ''}`}
                  >
                    {quote}
                  </p>
                ))}
              </div>
    
              <nav>
                <a
                  id="leftBtn"
                  className="prev"
                  onClick={() =>
                    setActiveIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length)
                  }
                >
                  <i className="fa fa-arrow-left"></i>
                </a>
                <a
                  id="rightBtn"
                  className="next"
                  onClick={() =>
                    setActiveIndex((prevIndex) => (prevIndex + 1) % quotes.length)
                  }
                >
                  <i className="fa fa-arrow-right"></i>
                </a>
              </nav>
            </div>
          </div>
    
          <div id="bg">
            {/* Render the slide backgrounds dynamically based on the activeIndex */}
            <div className={`slide jobs-bg ${activeIndex === 0 ? 'active' : ''}`}></div>
            <div className={`slide zuck-bg ${activeIndex === 1 ? 'active' : ''}`}></div>
            <div className={`slide musk-bg ${activeIndex === 2 ? 'active' : ''}`}></div>
          </div>
    
          <div id="nav-cirlces">
            {/* Render the navigation circles dynamically based on the activeIndex */}
            {quotes.map((_, index) => (
              <div
                key={index}
                className={`circle ${activeIndex === index ? 'active' : ''}`}
              ></div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Carousel;