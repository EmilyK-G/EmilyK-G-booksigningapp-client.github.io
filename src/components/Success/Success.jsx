import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Success.css'

function Success({modalInfo}) {
  const [show, setShow] = useState(true)
  
  return (
    <Modal
      show={show}
      size="lg"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          Sign up completed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-light'>{modalInfo}</p>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-secondary' onClick={()=>setShow(false)}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default Success