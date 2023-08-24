import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Choose.css';

function Choose() {
  const serviceItems = [
    { icon: <i class="fa fa-robot fa-2x"></i>, title: 'Complete Support', text: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.' },
    { icon: <i class="fa fa-power-off fa-2x"></i>, title: 'Complete Support', text: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.' },
    { icon: <i class="fa fa-graduation-cap fa-2x"></i>, title: 'Complete Support', text: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.' },
    { icon: <i class="fa fa-brain fa-2x"></i>, title: 'Predictive Analysis', text: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.' }
];
  return (
<div className="container-fluid bg-light mt-5 py-5">
            <Container>
                <Row className="g-5 align-items-center">
                    <Col lg={5} className="wow fadeIn" data-wow-delay="0.1s">
                        <Button variant="outline-primary" size="sm" className="border rounded-pill text-primary px-3 mb-3">Why Us</Button>
                        <h1 className="mb-4"> Reason of choose the Corplyx Technologies</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                            amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                            clita duo justo et tempor eirmod magna dolore erat amet</p>
                        <Button variant="primary" className="rounded-pill px-4">Read More</Button>
                    </Col>
                    <Col lg={7}>
                        <Row className="g-4">
                            {serviceItems.map((item, index) => (
                                <Col md={6} key={index} className="wow fadeIn" data-wow-delay={`${index * 0.2 + 0.1}s`}>
                                    <div className="whyus-item d-flex flex-column justify-content-center text-center rounded">
                                        <div className="whyus-icon btn-square">
                                            {item.icon}
                                        </div>
                                        <h5 className="mb-3">{item.title}</h5>
                                        <p>{item.text}</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}
export default Choose;