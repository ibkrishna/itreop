import React from 'react'
import './worksp.css';
import workimage from "../../assets/img/workimage.svg";
import install from '../../assets/img/discussion.png';
import concept from '../../assets/img/concept.png';
import testing from '../../assets/img/testing.png';
import execute from '../../assets/img/execute.png';
function Worksp() {
  return (

    <div style={{margin: "2rem 0"}}>
      <div className='work_p_contents'>
        <h4>HOW WE WORKS</h4>
        <h1>Your Business Succeed</h1>
      </div>
      <div className='worksp_images'>
        <img src={workimage} alt="" />
      </div>



      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 feature-row">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="feature-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                  <img className="img-fluid" src={install} alt="Icon" />
                </div>
                <h5 className="mb-3"> 01.Discussion</h5>
                <p className="mb-0">Fostering innovative discussions to forge strategic solutions and drive your software projects to success</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="feature-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                  <img className="img-fluid" src={concept} alt="Icon" />
                </div>
                <h5 className="mb-3">02. Concepts & Initatives</h5>
                <p className="mb-0">Envisioning breakthrough concepts and driving strategic initiatives to transform your software aspirations into reality</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="feature-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                  <img className="img-fluid" src={testing} alt="Icon" />
                </div>
                <h5 className="mb-3">03. Testing & Trying</h5>
                <p className="mb-0">Ensuring reliability through meticulous testing, empowering you to confidently embrace new software solutions.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="feature-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                  <img className="img-fluid" src={execute} alt="Icon" />
                </div>
                <h5 className="mb-3">04. Execute & install</h5>
                <p className="mb-0">Seamlessly executing and installing software, delivering operational excellence for your business's digital transformation journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
};

export default Worksp;