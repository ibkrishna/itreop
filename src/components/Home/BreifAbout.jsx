import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Home.css"
function BriefAbout() {
  return (
    <div className="container-fluid py-5">
            <Container>
                <Row className="g-5 align-items-center">
                    <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img">
                            <img className="img-fluid" src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041859.jpg?size=626&ext=jpg&ga=GA1.2.1385689953.1689919364&semt=sph" alt="About Us" />
                        </div>
                    </Col>
                    <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div>
                        <h1 className="mb-4">We Make Your Business Smarter with Corplyx Technologies</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                            amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                            clita duo justo et tempor eirmod magna dolore erat amet</p>
                        <p className="mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
                            labore lorem sit. Sanctus clita duo justo et tempor.</p>
                        <Row className="g-3">
                            <Col sm={6}>
                            <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Award Winning</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Professional Staff</h6>
                            </Col>
                            <Col sm={6}>
                            <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>24/7 Support</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Fair Prices</h6>
                            
                            </Col>
                        </Row>
                        <div className="d-flex align-items-center mt-4">
                            <Button className="btn-primary rounded-pill px-4 me-3">Read More</Button>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


  )
}

export default BriefAbout;
