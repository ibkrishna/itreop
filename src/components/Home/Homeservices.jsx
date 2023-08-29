import React from 'react'
import './Home.css'
import logo from '../../assets/img/logoc.png'
import webDev from '../../assets/img/webDesign.png'
import ux from '../../assets/img/ux.png'
import app from '../../assets/img/app.png'
import web from '../../assets/img/web.png'
import social from '../../assets/img/social.png'
import seo from '../../assets/img/seo.png'

import { Container, Row, Col, Button } from 'react-bootstrap';

function Homeservices() {

   const serviceItems = [
      { icon: ux, 
         title: 'Software Development', 
         text: 'We specialize in creating bespoke software, strategically designed to enhance business value and customer satisfaction. Explore our pioneering services that optimize processes for your benefit.',
          urlPath : "/SDevelopment" },
      { icon: webDev, title: 'Web Development', text: 'We specialize in creating bespoke websites, strategically designed to enhance business value and customer satisfaction. Explore our pioneering services that optimize processes for your benefit.',urlPath : "/Wdevelopment"  },
      { icon: app, title: 'App Development', text: ' We create innovative mobile solutions, specializing in user-centered app development. Our diverse expertise delivers tailored solutions, fostering business growth in the digital landscape.',urlPath : "/ADevelopment"  },
      { icon: web, title: 'Block Chain Development', text: ' We are a blockchain development company, specializing in creating secure networks with enhanced data traceability and transaction transparency for our clients.',urlPath : "/SDevelopment"  },
      { icon: social, title: 'Digital Marketing', text: 'We are a digital marketing firm, employing strategic tactics to elevate brand presence. Our expertise spans  social media, driving growth for businesses.',urlPath : "/BCDevelopment"  },
      { icon: seo, title: 'Search Engine Optimization', text: ' We elevate online visibility with targeted strategies. Through optimization, we improve website ranking and drive organic traffic as an SEO agency.',urlPath : "/SEOptimization"  }
   ];

   return (
      <div className="container-xxl py-5">
         <Container>
            <div className="text-center mx-auto wow fadeInUp fade-in" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
               <p className="fs-5 fw-medium text-primary">Our Services</p>
               <h1 className="display-5 mb-5">IT Services that We Offer</h1>
            </div>
            <Row className="g-4">
               {serviceItems.map((item, index) => (
                  <Col lg={4} md={6} key={index} className="wow fadeInUp" data-wow-delay={`${index * 0.2 + 0.1}s`}>
                     <div className="service-item position-relative h-100">
                        <div className="service-text rounded p-5">
                           <div className="btn-square bg-light rounded-circle mx-auto mb-4 shadow-lg" style={{ width: '64px', height: '64px' }}>
                              <img className="img-fluid" src={item.icon} alt="Icon" />
                           </div>
                           <h5 className="mb-3">{item.title}</h5>
                           <p className="mb-0">{item.text}</p>
                        </div>
                        <div className="service-btn rounded-0 rounded-bottom">
                           <a className="text-primary fw-medium custom-link" href={item.urlPath}>
                              Read More<i class="bi bi-chevron-double-right ms-2"></i>
                           </a>
                        </div>
                     </div>
                  </Col>
               ))}
            </Row>
         </Container>
      </div>
   )
}

export default Homeservices;