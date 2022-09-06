import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import './LoginModal.css';

function LoginModal() {
    const {setLoggedIn, loggedIn, setLoggedUser, userSelected, setUserSelected} = useContext(UserContext);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isInvalid, setIsInvalid] = useState(true);
    const navigate = useNavigate();

    function checkPIN(e) {
        setIsInvalid(false);
        if(e.target.value === userSelected.PIN){
            setLoggedUser(userSelected);
            setIsCorrect(true);
            setLoggedIn(true);
            navigate('/books')
        } else {
            setIsCorrect(false)
        }
        console.log(isCorrect)
    }

    return (
        <Modal
          show={!loggedIn && userSelected.Name}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Hi {userSelected.Name}!
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
            <button className='btn btn-secondary' onClick={()=>setUserSelected({})}>Close</button>
          </Modal.Footer>
        </Modal>
      );
}

export default LoginModal
