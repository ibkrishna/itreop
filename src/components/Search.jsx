import React from 'react'
import './search.css';
import proventrack from '../assets/img/proventrack.png';
import expert from '../assets/img/expert.png';
import customization from '../assets/img/customization.png'
import results from '../assets/img/results.png';
import quality from '../assets/img/quality.png';
import link from '../assets/img/link.png';
import reporting from '../assets/img/reporting.png'
import { Container, Row, Col, Button } from 'react-bootstrap';



function Search() {
    return (
        <>
            <div className='software_details'>

                <h1>Search Engine Optimization </h1>
            </div>
            <Container>
        <Row className="g-5 align-items-center">
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
            <div className="second-img">
              <img className="img-fluid slide-in-left" src="https://cdn.pixabay.com/photo/2017/12/09/09/08/seo-3007488_1280.jpg" alt="About Us" />
            </div>
          </Col>
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">

            <h1 className="mb-4">Benefits of Search Engine Optimization</h1>
            <p className="mb-4">Unlock unparalleled online visibility and drive exponential growth with our Search Engine Optimization (SEO) expertise. Elevate your brand's digital presence, outshining competitors in search rankings and drawing organic traffic. Watch your website transform into a lead magnet, boosting conversions and revenue. Our strategic SEO techniques optimize not only for search engines but also for user experience, ensuring seamless navigation and valuable content.  </p>
            <p className="mb-4">Elevate customer satisfaction with user-friendly interfaces and personalized experiences. From cost savings to expanded capabilities, our Software Development empowers your vision. Join us in shaping the future of your business through technology that drives results.
              .</p>


          </Col>
        </Row>
      </Container>

      <div className="whychooseus">
                 <h1>Why Choose Us </h1>
            </div>


            <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 feature-row">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="feature-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                  <img className="img-fluid" src={proventrack} alt="Icon" />
                </div>
                <h5 className="mb-3">Proven Track Record</h5>
                <p className="mb-0">Fostering innovative discussions to forge strategic solutions and drive your software projects to success</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="feature-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                  <img className="img-fluid" src={expert} alt="Icon" />
                </div>
                <h5 className="mb-3">Dedicated Experts</h5>
                <p className="mb-0">Envisioning breakthrough concepts and driving strategic initiatives to transform your software aspirations into reality</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="feature-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                  <img className="img-fluid" src={customization} alt="Icon" />
                </div>
                <h5 className="mb-3">Customized Solutions</h5>
                <p className="mb-0">Ensuring reliability through meticulous testing, empowering you to confidently embrace new software solutions.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="feature-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                  <img className="img-fluid" src={results} alt="Icon" />
                </div>
                <h5 className="mb-3">Measurable Results</h5>
                <p className="mb-0">Seamlessly executing and installing software, delivering operational excellence for your business's digital transformation journey</p>
              </div>
            </div>

           
           



          </div>
        </div>
      </div>



            <div className='startigy_socialmedia'>
                <h1>Our Search Engine Optimization Approach</h1>
            </div>
{/* new card  start*/}

<div className="container-xxl py-6">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="feature-item bg-light rounded text-center p-5">
              <i className="fa fa-4x fa-edit text-primary mb-4"></i>
              <h5 className="mb-3">Keyword Research</h5>
              <p className="m-0">Discover key terms, optimize content, enhance visibility, attract traffic, and achieve lasting success in SEO.</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="feature-item bg-light rounded text-center p-5">
              <i className="fa fa-4x fa-sync text-primary mb-4"></i>
              <h5 className="mb-3">On-page Optimization</h5>
              <p className="m-0"> Refine content, meta tags, headings. Elevate user experience and search ranking through strategic optimization.</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="feature-item bg-light rounded text-center p-5">
              <i className="fa fa-4x fa-draw-polygon text-primary mb-4"></i>
              <h5 className="mb-3">Technical SEO</h5>
              <p className="m-0"> Enhance website structure, speed, and accessibility. Ensure search engines effectively crawl and index content</p>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="container-xxl py-6">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="feature-item bg-light rounded text-center p-5">
              {/* <i className="fa fa-4x fa-edit text-primary mb-4"></i> */}
              <img className="img-fluid" src={quality} alt="Icon" />
              <h5 className="mb-3">Quality Content Creation</h5>
              <p className="m-0"> Craft valuable, relevant content to engage users, earn backlinks, and secure higher search rankings effectively.</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="feature-item bg-light rounded text-center p-5">
              {/* <i className="fa fa-4x fa-sync text-primary mb-4"></i> */}
              <img className="img-fluid" src={link} alt="Icon" />
              <h5 className="mb-3">Link Building</h5>
              <p className="m-0"> Cultivate authoritative connections to enhance credibility, boost rankings, and drive organic traffic</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="feature-item bg-light rounded text-center p-5">
              {/* <i className="fa fa-4x fa-draw-polygon text-primary mb-4"></i> */}
              <img className="img-fluid" src={reporting} alt="Icon" />
              <h5 className="mb-3">Analytics and Reporting</h5>
              
              <p className="m-0"> Monitor metrics, track progress, and refine strategies for continuous optimization and growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        </>


    );
};

export default Search;