import { useSignup } from '../../Hooks/useSignupHook';
import Modal from 'react-bootstrap/Modal';
import './Success.css'

const Success = ({showModal, closeModal}) => {
  const {success} = useSignup()

  return (
    <Modal
      show={showModal}
      size="lg"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          Sign up completed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{success}</p>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-secondary' onClick={closeModal}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default Success