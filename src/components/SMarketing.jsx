import React from 'react'
import './smarketing.css';
import stratgy from'../assets/img/stratgy.png';
import planning from'../assets/img/planning.png';
import engagement from'../assets/img/engagement.png';
import ads from '../assets/img/ads.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
function SMarketing() {
    return (
        <>
            <div className='socialmedia_details'>

                <h1>Social Media Marketing </h1>
            </div>

            <div className="socialmediaheadline">
                <h2>Social Media Marketing</h2>
                <div className="socialmediacontent">
                    <h4> 
Social Media Marketing functions encompass creating, curating content, engaging users, analyzing data, and optimizing strategies. It's about building brand presence, fostering connections, and driving business goals through platforms like Facebook, Instagram, Twitter, and more.</h4>
                    {/* <h4> Using many open-source available tools, we can develop a website with simple static content, or build complex web applications, offer services, and run commerce businesses.</h4> */}

                </div>
            </div>

            <Container>
        <Row className="g-5 align-items-center">
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
            <div className="second-img">
              <img className="img-fluid slide-in-left" src="https://cdn.pixabay.com/photo/2017/12/09/09/08/seo-3007488_1280.jpg" alt="About Us" />
            </div>
          </Col>
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">

            <h1 className="mb-4">Benefits of Social Media Marketing </h1>
            <p className="mb-4">Embracing social media marketing offers a powerful way to connect and engage with your target audience. By leveraging platforms like Facebook, Instagram, Twitter, and LinkedIn, you can amplify your brand's reach and visibility. Sharing compelling content, including visuals, videos, and informative posts, cultivates a genuine connection with potential clients. Social media enhances brand recognition, fosters customer loyalty, and drives traffic to your website. </p>
            <p className="mb-4">The interactive nature of these platforms allows for real-time communication, enabling you to understand client preferences and needs. This personalized approach builds trust and establishes your brand as an authority, ultimately leading to increased conversions and sustainable business growth.
              .</p>


          </Col>
        </Row>
      </Container>







        <div className='startigy_socialmedia'>
            <h1>Our Working Process</h1>
        </div>

        <div className="container-xxl py-6" id="features">
      <Container>
        <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          {/* <h1 className="mb-3">Strategy</h1> */}
          <p className="mb-5">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo</p>
        </div>
        <Row className="g-4">
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="advanced-feature-item text-center rounded py-5 px-4">
              {/* <i className="fa fa-edit fa-3x text-primary mb-4"></i> */}
              <img  className='smarketing'src={stratgy} alt="" />
              <h5 className="mb-3">Strategy</h5>
              <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.</p>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="advanced-feature-item text-center rounded py-5 px-4">
              {/* <i className="fa fa-sync fa-3x text-primary mb-4"></i> */}
              <img  className='smarketing'src={planning} alt="" />
              <h5 className="mb-3">Planning and Publishing</h5>
              <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.</p>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="advanced-feature-item text-center rounded py-5 px-4">
              {/* <i className="fa fa-laptop fa-3x text-primary mb-4"></i> */}

              <img  className='smarketing'src={engagement} alt="" />
              <h5 className="mb-3">Listening and Engagement</h5>
              <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.</p>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
            <div className="advanced-feature-item text-center rounded py-5 px-4">
              {/* <i className="fa fa-draw-polygon fa-3x text-primary mb-4"></i> */}
              <img  className='smarketing'src={ads} alt="" />
              <h5 className="mb-3">Advertising</h5>
              <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

     <div className='socialmedia_contents'>

 <div className='socialmedia_mainheading'>OUR SOCIAL MEDIA MARKETING SERVICES</div>
      <div className='socilamedia_secondcontent'>
      SOCIAL MEDIA MARKETING IS THE MOST EFFECTIVE METHOD TO SYNDICATE CONTENT AND ENHANCE YOUR BUSINESS VISIBILITY.
      </div>
  {/* <div className="socialmediabottomcontent">
  As a leading social media marketing company in Faridabad, we provide custom social media marketing solutions for your specific business needs. We have a team of experts specialized in social media planning, influencer marketing, growth hacking, and content creation.
  </div> */}
     </div>
      <div className="container-xxl py-6">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="feature-item bg-light rounded text-center p-5">
              <i className="fa fa-4x fa-edit text-primary mb-4"></i>
              <h5 className="mb-3">FACEBOOK MARKETING</h5>
              <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="feature-item bg-light rounded text-center p-5">
              <i className="fa fa-4x fa-sync text-primary mb-4"></i>
              <h5 className="mb-3">INSTAGRAM MARKETING</h5>
              <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="feature-item bg-light rounded text-center p-5">
              <i className="fa fa-4x fa-draw-polygon text-primary mb-4"></i>
              <h5 className="mb-3">TWITTER MARKETING</h5>
              <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
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
              <i className="fa fa-4x fa-edit text-primary mb-4"></i>
              <h5 className="mb-3">LINKEDIN MARKETTING</h5>
              <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="feature-item bg-light rounded text-center p-5">
              <i className="fa fa-4x fa-sync text-primary mb-4"></i>
              <h5 className="mb-3">E-MAIL MARKETING</h5>
              <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="feature-item bg-light rounded text-center p-5">
              <i className="fa fa-4x fa-draw-polygon text-primary mb-4"></i>
              <h5 className="mb-3">YOUTUBE MARKETING</h5>
              
              <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
























        </>


    );
};

export default SMarketing;