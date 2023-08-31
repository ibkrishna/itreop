import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './project.css'
import bannerimg1 from '../assets/img/bannerimg1.jpeg';
import alias1 from '../assets/img/alias1.png';
function Project() {
    return (
        <div className="container-fluid project py-5 my-5">
            <Container>
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "600px" }}>
                    <h5 className="text-primary">Our Project</h5>
                    <h1>Our Recently Completed Projects</h1>
                </div>
                <Row className="g-5">
                    <Col md={6} lg={4} className="wow fadeIn" data-wow-delay=".3s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src='https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?w=1060&t=st=1693385617~exp=1693386217~hmac=a1acbc41e8070519da6ff84546884f84f45adc837df745c8ca2879e015b5e97a' className="img-fluid w-100 rounded" alt="" />
                                <div className="project-content">
                                    <a href="https://cornerviewsolutions.com/" className="text-center">
                                        <h4 className="text-secondary">Cornerviewsolutions</h4>
                                        <p className="m-0 text-white">IT Project</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="wow fadeIn" data-wow-delay=".5s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src="https://img.freepik.com/free-photo/html-system-website-concept_23-2150376732.jpg?w=1060&t=st=1693386124~exp=1693386724~hmac=69a9c7bab097d175b1c4decc0b1ad9915980670b8602884b7eb50322ca400ebc" className="img-fluid w-100 rounded" alt="" />

                                {/* <img src= {bannerimg1} className="img-fluid w-100 rounded" alt="" /> */}
                                <div className="project-content">
                                    <a href="https://aliastechsolutions.com/" className="text-center">
                                        <h4 className="text-secondary">Aliastechsolutions</h4>
                                        <p className="m-0 text-white">IT Project</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="wow fadeIn" data-wow-delay=".7s">
                        <div className="project-item">
                            <div className="project-img">
                                 {/* <img src= {alias1} className="img-fluid w-100 rounded" alt="" /> */}
                                <img src="https://img.freepik.com/free-photo/medium-shot-man-working-laptop_23-2150323506.jpg?w=996&t=st=1693386065~exp=1693386665~hmac=19395290e1e166dffd6b7d0008a1058f0a9040eb25d4221119a60fbcd52f2915" className="img-fluid w-100 rounded" alt="" />
                                <div className="project-content">
                                    <a href="https://wellyweb.co.in/" className="text-center">
                                        <h4 className="text-secondary">wellyweb</h4>
                                        <p className="m-0 text-white">IT Project </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* Repeat similar structure for the other projects */}
                </Row>
            </Container>
        </div>
    );
}

export default Project;
