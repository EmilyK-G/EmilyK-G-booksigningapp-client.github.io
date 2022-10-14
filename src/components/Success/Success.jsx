// import { useSignup } from '../../Hooks/useSignupHook';
import Modal from 'react-bootstrap/Modal';
import './Success.css'

const Success = ({showModal, setShowSuccessModal, success}) => {
  // const {success} = useSignup()

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
        <p className='text-light'>{success}</p>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-secondary' onClick={()=>setShowSuccessModal(false)}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default Success