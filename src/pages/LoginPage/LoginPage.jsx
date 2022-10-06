import { Outlet } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import './loginPage.css'
import { useState } from "react";

function LoginPage() {
  const [showModal, setShowModal] = useState(true)
  return (
    <Modal show={showModal} fullscreen='lg-down'>
        <Modal.Body>
          <div className='d-flex flex-column align-items-center justify-content-center loginPage'>
            <p>You are logged out</p>
            <p className="mb-4">{`Have a nice day:)`}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShowModal(false)}>
            <Link  
              to={'/'}
              className='btn btn-secondary'>okay</Link></button>
        </Modal.Footer>
        <Outlet />
      </Modal>
  )
}

export default LoginPage