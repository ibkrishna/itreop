import React from 'react'
import './Home.css'
import logo from '../../assets/img/logoc.png'
import { Container, Row, Col, Button } from 'react-bootstrap';

function Homeservices() {

   const serviceItems = [
      { icon: logo, title: 'Software Development', text: 'We build custom websites and applications that are designed to create value for your business and your customers. Explore our innovative services that simplifies processes.' },
      { icon: logo, title: 'Web Development', text: 'We build custom websites and applications that are designed to create value for your business and your customers. Explore our innovative services that simplifies processes.' },
      { icon: logo, title: 'App Development', text: 'We build custom websites and applications that are designed to create value for your business and your customers. Explore our innovative services that simplifies processes.' },
      { icon: logo, title: 'Block Chain Development', text: 'We build custom websites and applications that are designed to create value for your business and your customers. Explore our innovative services that simplifies processes.' },
      { icon: logo, title: 'Digital Marketing', text: 'We build custom websites and applications that are designed to create value for your business and your customers. Explore our innovative services that simplifies processes.' },
      { icon: logo, title: 'Search Engine Optimization', text: 'We build custom websites and applications that are designed to create value for your business and your customers. Explore our innovative services that simplifies processes.' }
   ];

   return (
      <div className="container-xxl py-5">
         <Container>
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
               <p className="fs-5 fw-medium text-primary">Our Services</p>
               <h1 className="display-5 mb-5">IT Services that We Offer</h1>
            </div>
            <Row className="g-4">
               {serviceItems.map((item, index) => (
                  <Col lg={4} md={6} key={index} className="wow fadeInUp" data-wow-delay={`${index * 0.2 + 0.1}s`}>
                     <div className="service-item position-relative h-100">
                        <div className="service-text rounded p-5">
                           <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: '64px', height: '64px' }}>
                              <img className="img-fluid" src={item.icon} alt="Icon" />
                           </div>
                           <h5 className="mb-3">{item.title}</h5>
                           <p className="mb-0">{item.text}</p>
                        </div>
                        <div className="service-btn rounded-0 rounded-bottom">
                           <a className="text-primary fw-medium custom-link" href="">
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