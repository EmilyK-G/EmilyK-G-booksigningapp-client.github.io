import React, { useState } from 'react';
import { useLogin } from '../../Hooks/useLoginHook';
import { useUserContext } from '../../Hooks/UserContextHook'; 
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import './LoginModal.css';

const LoginModal = () => {

    const {userSelected, setUserSelected} = useUserContext();
    const {login, error, isLoading} = useLogin()

    const [isCorrect, setIsCorrect] = useState(false);
    const [isInvalid, setIsInvalid] = useState(true);
    

    const checkPIN = async(e) => {
        e.preventDefault();

        await login(userSelected.email, e.target.value)
        setUserSelected([])
    }

    return (
        <Modal
          show={userSelected.name}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Hi {userSelected.name}!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Please enter your PIN</h4>
            <input 
                className={"form-control form-control-lg " + (isCorrect ? "input_correct" : isInvalid ? "input_invalid" : "input_incorrect")} 
                type="number" 
                placeholder="****" 
                autoFocus
                onChange={(e)=>e.target.value.length === 4 ? checkPIN(e) : setIsInvalid(true)} />
            <Alert variant='danger' show={!isCorrect && !isInvalid} className='alert_text'>Wrong PIN!</Alert>
          </Modal.Body>
          <Modal.Footer>
            <button disabled={isLoading} className='btn btn-secondary' onClick={()=>setUserSelected({})}>Close</button>
          </Modal.Footer>
          {error && <Alert variant='danger'>{error}</Alert>}
        </Modal>
      );
}

export default LoginModal
