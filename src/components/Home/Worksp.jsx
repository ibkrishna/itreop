import React from 'react'
import './worksp.css';
import workimage from "../../assets/img/workimage.svg";



function Worksp() {
  return (
    <div className='workp_contents '>
      <div className='work_p_contents'>
        <h4>HOW WE WORKS</h4>
        <br />
        <h3>How It Helps</h3>
        <br />
        <h1>Your Business Succeed</h1>


      </div>
      <div className='worksp_images'>
        <img src={workimage} alt="" />
      </div>

      <div className='works_blogs'>


        <div className='process_text'>
          01. Discussion
          <div className='process_text_contents'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, omnis!</div>

        </div>
        <div className='process_text'>02. Concepts & Initatives
          <div className='process_text_contents'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, omnis!</div>
        </div>



        <div className='process_text'>03. Testing & Trying
          <div className='process_text_contents'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, omnis!</div>
        </div>
        <div className='process_text'>04. Execute & install
          <div className='process_text_contents'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, omnis!</div>
        </div>

      </div>

    </div>
  )
}

export default Worksp;