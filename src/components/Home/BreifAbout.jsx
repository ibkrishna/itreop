import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Home.css"
function BriefAbout() {
  return (
    <div className="container-fluid py-5" style={{background: "#f7f7f7"}}>
            <Container>
                <Row className="g-5 align-items-center">
                    <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img">
                            <img className="img-fluid scale-in-center" src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?w=1380&t=st=1693073295~exp=1693073895~hmac=83d8e11057acbbc2a1350cf966d437124524474021daac4e3aa3102a48d1b219" alt="About Us" />
                        </div>
                    </Col>
                    <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div>
                        <h1 className="mb-4 fade-in"> Corplyx Technologies Private Limited </h1>
                        <p className="mb-4">Corplyx Technologies is an India-based company specializing in web, app, and software development, as well as social media marketing and search engine optimization company. Our dedication to supporting small and medium-sized enterprises has driven us to evolve into a comprehensive strategic development and marketing firm, crafting internet solutions for businesses of all sizes. </p>
                        {/* <p className="mb-4">
                        Corplyx Technologies is an India-based company specializing in web, app, and software development, as well as social media marketing and search engine optimization. Our dedication to supporting small and medium-sized enterprises has driven us to evolve into a comprehensive strategic development and marketing firm, crafting internet solutions for businesses of all sizes.
                            .</p> */}
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
                            <Button className="button-main rounded-pill px-4 me-3">Read More</Button>
                            <a className="btn  btn-outline-primary btn-square me-3" href="https://www.facebook.com/profile.php?id=100095230572986 "><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href="https://twitter.com/CorplyxTech"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href="https://www.instagram.com/corplyxtechnologies/"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


  )
}

export default BriefAbout;
