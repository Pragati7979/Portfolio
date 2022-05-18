import React from "react";
import ReactDOM from "react-dom";
import './Modal.css'
const Modal = (props) => {
    const closeModal= props.showModalHandler

    const url ="https://drive.google.com/file/d/1ut_UgkCrOWL7b_jaKnRELk8DwbFPHGeP/view?usp=sharing"
    
        

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={closeModal}>
            <div
                onClick={(e) => { e.stopPropagation() }}
                className="modal-container">
                <div className="upper-section">
                    <h1>Want me to work in your organisation?</h1>
                    <p className="close" onClick={closeModal}>&#10060;</p>
                </div>
                <div className="middle-section">
                    <p>Currently working in <u>TCS</u> as a <u>System Engineer</u> and having 1 year of experience.</p>
                    <p>Aspirant of new technologies and so would definitely suggest you to check out my skills & projects!</p>
                </div>
                <div className="lower-section">
                <button className="modal-btn btn-red" onClick={closeModal}>close</button>
                    <a href={url} target="_blank" rel="noreferrer" className="modal-btn btn-green">Download my resume</a>  
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal