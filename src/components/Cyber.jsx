import React from 'react'
import './software.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
function Cyber() {
    return (
        <>
            <div className='software_details'>

                <h1>Cyber Security </h1>
            </div>
          

            <div className="workingstyle">

                <div className="workingcomponents">Boost Conversion Rates</div>
                <div className="workingcomponents">Attract Potential Clients</div>
                <div className="workingcomponents">Increase Brand Exposure</div>
                <div className="workingcomponents">Listen Consumers Voice</div>
                <div className="workingcomponents">Develop Trust & Loyalty</div>
                <div className="workingcomponents">Improve Customer Engagement</div>
            </div>

            <Container>
        <Row className="g-5 align-items-center" style={{ overflowX: "hidden", maxWidth: "100%", paddingLeft:"20px ",width:"100%"}}>
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
            <div className="second-img">
              <img className="img-fluid slide-in-left" src="https://innovationatwork.ieee.org/wp-content/uploads/2017/09/bigstock-Futuristic-integrated-circuit-56086169.jpg" alt="About Us" />
            </div>
          </Col>
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">

            <h1 className="mb-4">Benefits of Cyber Security</h1>
            <p className="mb-4">At our core, we envision transforming businesses through advanced services. We strive to revolutionize the digital landscape by providing cutting-edge solutions that redefine standards. Our commitment is to empower clients with innovative strategies, fostering growth, efficiency, and relevance. We aim to be the driving force behind their success, leveraging expertise to create sustainable impact.</p>
            <p className="mb-4">By continuously adapting to the ever-evolving digital realm, we aspire to be the forefront of change, enabling businesses to thrive in an interconnected world. Our vision is to be the catalyst that propels businesses towards their full potential, shaping a dynamic and prosperous future.
              .</p>


          </Col>
        </Row>
      </Container>

      <Container style={{ margin: "3rem auto" }}>
        <Row className="g-5-align-items-center" style={{ overflowX: "hidden", maxWidth: "100%", paddingLeft:"20px ",width:"100%"}}>

          <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">

            <h1 className="mb-4">Data Security </h1>
            <p className="mb-4">Experience the fortress of Data Security – your trust in a digital world. Safeguard your sensitive information with robust measures that ensure confidentiality and compliance. Our Data Security solutions offer end-to-end protection, defending against cyber threats and unauthorized access. Rest assured that your data is encrypted, stored, and transmitted securely. We prioritize your privacy, offering peace of mind for both you and your clients</p>

            <p className="mb-4">  With regular updates and proactive monitoring, we stay one step ahead of potential risks. Build confidence – let our Data Security solutions be your shield, fostering trust, fortifying relationships, and ensuring the integrity of your business." </p>


          </Col>


          <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
            <div className="second-img">
              <img className="img-fluid slide-in-right" src=" https://www.everbridge.com/wp-content/uploads/2021/05/it-cyber-security.jpg" alt="About Us" />
            </div>
          </Col>
        </Row>
      </Container>


      <Container>
        <Row className="g-5 align-items-center" style={{ overflowX: "hidden", maxWidth: "100%", paddingLeft:"20px ",width:"100%"}}>
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
            <div className="second-img">
              <img className="img-fluid slide-in-left" src="https://study.com/cimages/course-image/computer-science-202-network-and-system-security_1030285_large.jpeg" alt="About Us" />
            </div>
          </Col>
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">

            <h1 className="mb-4">  Network Security </h1>
            <p className="mb-4">Unlock unparalleled confidence in your digital landscape through our Network Security expertise. Safeguard your crucial operations and sensitive data from modern cyber threats with our comprehensive solutions. We deploy advanced firewall systems, intrusion detection, and robust access controls to ensure your network's integrity. Our vigilant monitoring guarantees real-time threat detection and response, minimizing downtime and potential breaches.</p>
            <p className="mb-4">With compliance at the core, our services align with industry standards, earning your clients' trust. Elevate your brand reputation by showcasing a fortified network infrastructure that shields against vulnerabilities. Partner with us to embrace unwavering Network Security and foster enduring client relationships."</p>


          </Col>
        </Row>
      </Container>

      <Container style={{ margin: "3rem auto" }}>
        <Row className="g-5-align-items-center" style={{ overflowX: "hidden", maxWidth: "100%", paddingLeft:"20px ",width:"100%"}}>

          <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">

            <h1 className="mb-4">Mobile Security</h1>
            <p className="mb-4">Elevate your mobile experience with our Mobile Security prowess. Trust in every tap as we shield your devices from evolving threats, ensuring uninterrupted connectivity and peace of mind. Our solutions encompass robust encryption, secure app authentication, and real-time threat detection, safeguarding your data and transactions. From personal users to businesses, our Mobile Security services cater to every need</p>

            <p className="mb-4"> We prioritize user privacy and regulatory compliance, demonstrating our commitment to a secure digital environment. Forge lasting partnerships by showcasing your dedication to mobile protection, enhancing your clients' confidence in every interaction. Choose us to empower your mobile journey with unyielding security. </p>


          </Col>


          <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
            <div className="second-img">
              <img className="img-fluid slide-in-right" src="https://spiderindia.com/spiderblog/wp-content/uploads/2020/11/Mobile_App_Security_Threats_Best_Practices_Introduction.jpg" alt="About Us" />
            </div>
          </Col>
        </Row>
      </Container>

            
           

        </>




    );
};
export default Cyber;