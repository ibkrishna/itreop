import React, { useState } from 'react';
import  './job.css';
import Modal from './modal';

function jobs() {

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };





  return (
    <>
      <div className='jobs_container'>

        <div className='main_container_img'>
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


                <button onClick={openModal}  >Apply Now </button>
              </div>


            </div>
            <Modal showModal={isModalVisible} closeModal={closeModal} />


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
                <div className='requirement_btn'><button>Golang</button></div>
                <div className='requirement_btn'><button>Bitcoin</button></div>
                <div className='requirement_btn'>   <button>Cyber Security</button></div>

              </div>
            </div>


            <div className='job_requirements'>
              <div className='apply_requirements'>

                <button onClick={openModal}  >Apply Now </button>
              </div>


            </div>
            <Modal showModal={isModalVisible} closeModal={closeModal} />
          </div>
        </div>
      </div>
      {/* Third job post  */}

      <div className='jobs_container'>
        <div className='main_container_contents '>
          <div className='main_container'>

            <div className='job_requirements'>
              <div className='job_requirements_maincontents'>
                <h1>JavaScript Developer</h1>
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

                <button onClick={openModal} >Apply Now </button>
                <Modal showModal={isModalVisible} closeModal={closeModal}></Modal>
              </div>

            </div>
          </div>

        </div>
      </div>


    </>
  );
};

export default jobs;