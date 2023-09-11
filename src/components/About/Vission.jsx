import React from 'react'
import './vission.css';
import mission from "../../assets/img/mission.jpg";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Vission() {
  return (
    <>
      <div>
        <div className='software_details'>
          <h1>About</h1>
        </div>

        <Container>
          <Row className="g-5_align-items-center" style={{ overflowX: "hidden", maxWidth: "100%", paddingLeft:"20px ",width:"100%"}}>
            <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
              <div className="second-img">
                <img className="img-fluid slide-in-left" src="https://t3.ftcdn.net/jpg/01/37/90/78/360_F_137907818_LNzsqtQT7OAZ98BuA3T4TKiEbEOY543G.jpg" alt="About Us" />
              </div>
            </Col>
            <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">

              <h1 className="mb-4">Our Vision</h1>
              <p className="mb-4">At our core, we envision transforming businesses through advanced services. We strive to revolutionize the digital landscape by providing cutting-edge solutions that redefine standards. Our commitment is to empower clients with innovative strategies, fostering growth, efficiency, and relevance. We aim to be the driving force behind their success, leveraging expertise to create sustainable impact.</p>
              <p className="mb-4">By continuously adapting to the ever-evolving digital realm, we aspire to be the forefront of change, enabling businesses to thrive in an interconnected world. Our vision is to be the catalyst that propels businesses towards their full potential, shaping a dynamic and prosperous future.
                .</p>


            </Col>
          </Row>
        </Container>

        <Container style={{margin: "3rem auto"}}>
          <Row className="g-5-align-items-center" style={{ overflowX: "hidden", maxWidth: "100%", paddingLeft:"20px ",width:"100%"}} >

            <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">

              <h1 className="mb-4">Our Mission</h1>
              <p className="mb-4">Our mission is to be the cornerstone of digital transformation for businesses. Through strategic innovation, we aim to provide tailored solutions that drive efficiency, engagement, and market prominence. We commit to fostering partnerships built on trust and collaboration, ensuring client objectives are not just met but exceeded. By embracing emerging technologies and industry best practices, we strive to consistently deliver measurable value</p>
               
              <p className="mb-4">  Our mission is to empower businesses to navigate the digital landscape with confidence, equipping them with the tools and strategies needed to thrive in an ever-changing environment. We're dedicated to being the catalyst for our clients' sustained success and growth. </p>


            </Col>


            <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
              <div className="second-img">
                <img className="img-fluid slide-in-right" src={mission} alt="About Us" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>


















    </>
  );
};

export default Vission;