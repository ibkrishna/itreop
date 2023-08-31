import React from 'react'
import { Modal } from 'react-bootstrap'
import './modal.css';

export default function CareerModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Application Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
{/* form code  start */}

<div>
      <form
        acceptCharset="UTF-8"
        action="mailto:corplyxtechnologies000@gmail.com"
        method="POST"
        encType="multipart/form-data"
        target="_blank"
        className="job-form"
      >
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            name="fullname"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter Your Name "
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputName">Education</label>
          <input
            type="text"
            name="fullname"
            className="form-control"
            id="exampleInputName"
            placeholder="Education"

            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputName"> Graduation Passing Year</label>
          <input
            type="text"
            name="fullname"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter Passing year"

            required
          />
        </div>

    
        {/* ... other form elements */}
        <div className="form-group mt-3">
          <label className="mr-4">Upload your CV:</label>
          <input type="file" name="file" />
        </div>
        <button type="submit" className="btn button-main" style={{margin: "0 auto", display: "block"}}>Submit</button>
      </form>
    </div>

{/* form code end  */}

      </Modal.Body>
    </Modal>
  )
}
