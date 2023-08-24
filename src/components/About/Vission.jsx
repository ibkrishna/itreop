import React from 'react'
import './vission.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Vission() {
  return (
    <>
      <div>
        <div className='about_banner'>
          <h1>About</h1>
        </div>

        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img className="img-fluid" src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041859.jpg?size=626&ext=jpg&ga=GA1.2.1385689953.1689919364&semt=sph" alt="About Us" />
              </div>
            </Col>
            <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">

              <h1 className="mb-4">Our Vission & Mission</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor eirmod magna dolore erat amet</p>
              <p className="mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
                labore lorem sit. Sanctus clita duo justo et tempor.</p>


            </Col>
          </Row>
        </Container>








        <Container>
          <Row className="g-5 align-items-center">

            <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">

              <h1 className="mb-4">Our Vission & Mission</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor eirmod magna dolore erat amet</p>
              <p className="mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
                labore lorem sit. Sanctus clita duo justo et tempor.</p>


            </Col>


            <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img className="img-fluid" src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041859.jpg?size=626&ext=jpg&ga=GA1.2.1385689953.1689919364&semt=sph" alt="About Us" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>


















    </>
  );
};

export default Vission;