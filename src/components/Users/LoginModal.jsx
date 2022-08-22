import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import './LoginModal.css';

function LoginModal(props) {
    const [isCorrect, setIsCorrect] = useState(false);
    const [isInvalid, setIsInvalid] = useState(true);
    const myPIN = "5678";
    function checkPIN(e) {
        setIsInvalid(false);
        if(e.target.value === myPIN){
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
        console.log(isCorrect)
    }
    return (
        <Modal
          show={props.showModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Hi Perry!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Please enter your PIN</h4>
            <input 
                className={"form-control form-control-lg " + (isCorrect ? "input_correct" : isInvalid ? "input_invalid" : "input_incorrect")} 
                type="number" 
                placeholder="****" 
                onChange={(e)=>e.target.value.length === 4 ? checkPIN(e) : setIsInvalid(true)} />
            <Alert variant='danger' show={!isCorrect && !isInvalid} className='alert_text'>Wrong PIN!</Alert>
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-secondary' onClick={()=>props.setShowModal(false)}>Close</button>
          </Modal.Footer>
        </Modal>
      );
}

export default LoginModal