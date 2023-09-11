import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Choose.css';
import productive from '../../assets/img/productive.png';
import Effective  from '../../assets/img/Effective.png';
import support  from '../../assets/img/support.png';
import analysis from '../../assets/img/analysis.png';

function Choose() {
  const serviceItems = [
    { icon:<img alt='' src={productive} className='icon-img'/>, title: 'Predictive Analysis', text: 'Predictive analysis leverages data to anticipate future outcomes, enabling informed decisions and proactive strategies.' },
    { icon: <img alt='' src={Effective} className='icon-img'/>, title: 'Effective Strategies', text: 'Effective strategies are well-structured plans that yield optimal results by aligning actions with desired goals.' },
    { icon: <img alt='' src={analysis} className='icon-img'/>, title: 'Enhanced Online Presence', text: 'Enhanced online presence amplifies visibility, attracting and engaging a wider audience, fostering brand recognition and growth.' },
    { icon: <img alt='' src={support} className='icon-img'/>, title: 'Complete Support', text: 'Complete support provides comprehensive assistance, ensuring all needs are met and challenges addressed for successful outcomes.' }
];
  return (
<div className="container-fluid bg-light mt-5 py-5">
            <Container>
                <Row className="g-5 align-items-center" style={{width: "auto"}}>
                    <Col lg={5} className="wow fadeIn" data-wow-delay="0.1s">
                        <p variant="outline-primary" style={{width: "fit-content"}} size="sm" className="border rounded-pill text-primary px-3 mb-3">Why Us</p>
                        <h1 className="mb-4">Why Choose Us </h1>
                        <p className="mb-4">Choose us for unparalleled services. With years of expertise, we guarantee innovative solutions, reliability, and exceptional results.
                            </p>
                        <Button variant="primary" className="button-main rounded-pill px-4">Read More</Button>
                    </Col>
                    <Col lg={7}>
                        <Row className="g-4">
                            {serviceItems.map((item, index) => (
                                <Col md={6}  key={index} className="wow fadeIn" data-wow-delay={`${index * 0.2 + 0.1}s`}>
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