import React, { useState } from 'react';
import  './job.css';
import CareerModal from './CareerModal';

function jobs() {

const [showModal, setShowModal] = useState(false)


  return (
    <>
    <CareerModal show={showModal} onHide={()=> setShowModal(false)} />
      <div className='jobs_container'>

        <div className='software_details'>
          <h1>Carrers</h1>

        </div>

        <div className='main_container_contents '>
          <div className='main_container'>

            <div className='job_requirements'>
              <div className='job_requirements_maincontents'>
                <h1>Block Chain Developer</h1>
                <h5> Full Time </h5>
              </div>
            </div>

            <div className='job_requirements'>
              <div className='job_requirement_contents'>
                <h5>Job Descriptions</h5>
                <h4>Number of vacancy -2</h4>
                <h6>Location - Noida </h6>

              </div>
            </div>

            <div className='job_requirements'>
              <div className='requirement_btn_contents '>
                <div className='requirement_btn'><button>HTML</button>   </div>
                <div className='requirement_btn'><button>JavaScript</button></div>
                <div className='requirement_btn'><button>CSS</button></div>
                <div className='requirement_btn'><button>Golang</button></div>
                <div className='requirement_btn'><button>Bitcoin</button></div>
                <div className='requirement_btn'>   <button>Cyber Security</button></div>

              </div>

            </div>


            <div className='job_requirements'>
              <div className='apply_requirements'>


                <button onClick={()=> setShowModal(true)} className='btn button-main' >Apply Now </button>
              </div>


            </div>
      


          </div>
        </div>
      </div>


      {/* Second job post */}
      <div className='jobs_container'>
        <div className='main_container_contents '>
          <div className='main_container'>

            <div className='job_requirements'>
              <div className='job_requirements_maincontents'>
                <h1>Frontend  Developer</h1>
                <h5> Full Time </h5>
              </div>
            </div>

            <div className='job_requirements'>
              <div className='job_requirement_contents'>
                <h5>Job Descriptions</h5>
                <h4>Number of vacancy -2</h4>
                <h6>Location - Noida </h6>

              </div>
            </div>

            <div className='job_requirements'>
              <div className='requirement_btn_contents '>
                <div className='requirement_btn'><button>HTML</button>   </div>
                <div className='requirement_btn'><button>JavaScript</button></div>
                <div className='requirement_btn'><button>CSS</button></div>
                <div className='requirement_btn'><button>Typescript</button></div>
                <div className='requirement_btn'><button>Tailwind CSS</button></div>
                <div className='requirement_btn'>   <button>React.js</button></div>

              </div>
            </div>


            <div className='job_requirements'>
              <div className='apply_requirements'>

                <button onClick={()=> setShowModal(true)} className='btn button-main' >Apply Now </button>
              </div>


            </div>
    
          </div>
        </div>
      </div>
      {/* Third job post  */}

      <div className='jobs_container'>
        <div className='main_container_contents '>
          <div className='main_container'>

            <div className='job_requirements'>
              <div className='job_requirements_maincontents'>
                <h1>Backend  Developer</h1>
                <h5> Full Time </h5>
              </div>
            </div>

            <div className='job_requirements'>
              <div className='job_requirement_contents'>
                <h5>Job Descriptions</h5>
                <h4>Number of vacancy -2</h4>
                <h6>Location - Noida </h6>

              </div>
            </div>

            <div className='job_requirements'>
              <div className='requirement_btn_contents '>
                <div className='requirement_btn'><button>HTML</button>   </div>
                <div className='requirement_btn'><button>JavaScript</button></div>
                <div className='requirement_btn'><button>CSS</button></div>
                <div className='requirement_btn'><button>Node.js</button></div>
                <div className='requirement_btn'><button>Express.js</button></div>
                <div className='requirement_btn'>   <button>Authentication</button></div>

              </div>
            </div>


            <div className='job_requirements'>
              <div className='apply_requirements'>

                <button className='btn button-main' >Apply Now </button>

              </div>

            </div>
          </div>

        </div>
      </div>


    </>
  );
};

export default jobs;