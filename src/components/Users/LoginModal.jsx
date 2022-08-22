import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LoginModal(props) {
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
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>props.setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default LoginModal