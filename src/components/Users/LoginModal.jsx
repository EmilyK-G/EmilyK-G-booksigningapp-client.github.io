import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './LoginModal.css';

function LoginModal(props) {
    function checkPIN(e) {
        console.log('There are ' + e.target.value.length + ' characters in ' + e.target.value + '.');
        props.setShowModal(false)
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
            <input className="form-control form-control-lg" type="number" placeholder="****" onChange={(e)=>e.target.value.length === 4 ? checkPIN(e) : null}/>
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-secondary' onClick={()=>props.setShowModal(false)}>Close</button>
          </Modal.Footer>
        </Modal>
      );
}

export default LoginModal