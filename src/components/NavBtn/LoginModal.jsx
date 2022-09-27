import React, { useState, useEffect } from 'react';
import { useLogin } from '../../Hooks/useLoginHook';
import { useUserContext } from '../../Hooks/useUserContextHook'; 
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import './LoginModal.css';

const LoginModal = () => {

    const {userSelected, setUserSelected} = useUserContext();
    const {login, error, isLoading} = useLogin();

    const [isInvalid, setIsInvalid] = useState(true);
    

    useEffect(()=>{
      setIsInvalid(true);
    }, [userSelected])

    const checkPIN = async(e) => {
        e.preventDefault();
        setIsInvalid(false);

        await login(userSelected.email, e.target.value)
        setTimeout(()=>{
          setUserSelected([])
        }, 1000)
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
                className={"form-control form-control-lg " + (isInvalid ? "input_invalid" : !error ? "input_correct" : "input_incorrect")} 
                type="number" 
                placeholder="****" 
                autoFocus
                disabled={isLoading}
                onChange={(e)=>e.target.value.length === 4 ? checkPIN(e) : setIsInvalid(true)} />
            <Alert variant='danger' show={error} className='alert_text'>Wrong PIN!</Alert>
          </Modal.Body>
          <Modal.Footer>
            <button disabled={isLoading} className='btn btn-secondary' onClick={()=>setUserSelected([])}>Close</button>
          </Modal.Footer>
        </Modal>
      );
}

export default LoginModal
