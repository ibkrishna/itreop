// Modal.js
import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ showModal, closeModal }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Apply for Job</h2>
        <form>
          <label>Your name*</label>
          <input type="text" placeholder="Your name" />
          
          <label>Your email address*</label>
          <input type="email" placeholder="Your email" />
          
          <label>Phone*</label>
          <input type="tel" placeholder="Phone" />
          
          <label>Message</label>
          <textarea placeholder="Message"></textarea>
          
          <label>Please Upload Your CV / Resume</label>
          <input type="file" onChange={handleFileChange} />
          {file && <p>Selected file: {file.name}</p>}
          
          <label>How did you find out about us?</label>
          <input type="text" placeholder="Source" />
          
          <label>
            <input type="checkbox" /> I consent to receive from the Company email information about new job offers, our events, pieces of training, and other ongoing activities.
          </label>
          
          <p>If you cannot submit your details, please share your recently updated resume at corplyxtechnologies000@gmail.com</p>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;


