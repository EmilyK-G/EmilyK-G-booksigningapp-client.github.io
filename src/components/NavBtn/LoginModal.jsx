import {useState, useEffect} from 'react';
import { useLogin } from '../../Hooks/useLoginHook';
import { useUserContext } from '../../Hooks/useUserContextHook'; 
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import './LoginModal.css';


function LoginModal(props) {

    const {userSelected, setUserSelected} = useUserContext();
    const {login, error, isLoading} = useLogin();

    const [isInvalid, setIsInvalid] = useState(true);
    

    useEffect(()=>{
      setIsInvalid(true)
    }, [userSelected])

    const checkPIN = async(e) => {

      setIsInvalid(false);

      await login(userSelected.email, e.target.value);
    }

    return (
        <Modal
          show={userSelected.name}
          size="lg"
          centered
        >
          <Modal.Header>
            <Modal.Title className='modal_text'>
              Hi {userSelected.name}!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className='modal_text'>Please enter your PIN</h4>
            <input 
                className={"form-control form-control-lg input_invalid " + !error ? "input_correct" : "input_incorrect"} 
                type="text" 
                maxLength={4}
                placeholder="****" 
                autoFocus
                disabled={isLoading}
                onChange={(e)=>e.target.value.length === 4 && checkPIN(e)} />
            <Alert variant='danger' show={error && !isInvalid} className='alert_text'>Wrong PIN!</Alert>
          </Modal.Body>
          <Modal.Footer>
            <button disabled={isLoading} className='btn btn-secondary' onClick={()=>{setUserSelected([])}}>Close</button>
          </Modal.Footer>
        </Modal>
      );
}

export default LoginModal
