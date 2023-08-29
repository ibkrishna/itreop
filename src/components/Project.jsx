import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './project.css'
import bannerimg1 from '../assets/img/bannerimg1.jpeg';
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
                                <img src='https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' className="img-fluid w-100 rounded" alt="" />
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Web design</h4>
                                        <p className="m-0 text-white">Web Analysis</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="wow fadeIn" data-wow-delay=".5s">
                        <div className="project-item">
                            <div className="project-img">
                                {/* <img src="https://cdn.pixabay.com/photo/2023/08/18/11/35/frog-8198313_640.jpg" className="img-fluid w-100 rounded" alt="" /> */}

                                <img src= {bannerimg1} className="img-fluid w-100 rounded" alt="" />
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Cyber Security</h4>
                                        <p className="m-0 text-white">Cyber Security Core</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="wow fadeIn" data-wow-delay=".7s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src="https://cdn.pixabay.com/photo/2023/08/15/11/47/mushroom-8191823_640.jpg" className="img-fluid w-100 rounded" alt="" />
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Mobile Info</h4>
                                        <p className="m-0 text-white">Upcoming Phone</p>
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
