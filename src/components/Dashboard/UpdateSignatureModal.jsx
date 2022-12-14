import { useState } from 'react';
import { useUserContext } from "../../Hooks/useUserContextHook";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FcCheckmark } from 'react-icons/fc';


function UpdateSignatureModal(props) {
    
    const {user, dispatch, setLoadingUserData} = useUserContext();

    const [newSignature, setNewSignature] = useState('');

    const handleNewSignature = async()=>{

        //UPDATE/PUSH db logic here
        if (!user) {
            return
        }

        setLoadingUserData(true);

        const response = await fetch('https://booksigning.onrender.com/api/user/update/' + user._id, {
            method:'PATCH',
            mode: 'cors',
            body: JSON.stringify({signature: newSignature}),
            headers: {'Content-Type': 'application/json'}
        })
        
        const json = await response.json();

        if (response.ok) {
            dispatch({type: 'UPDATE', payload: {...user, signature: newSignature}});
            localStorage.setItem('user', JSON.stringify({user:{...json, signature: newSignature}, token:user.token}));
            setLoadingUserData(false);
            props.setShow(false)
        }

        if (!response.ok) {
            setLoadingUserData(false)
        }

        setNewSignature('')
    }

  return (
    <Modal show={props.show} onHide={() => props.setShow(false)}>
        <Modal.Header closeButton>
        <Modal.Title>What would you like to sign as?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder={props.user.signature}
                    value={newSignature}
                    onChange={(e)=>setNewSignature(e.target.value)}
                />
                <Button variant="outline-success" onClick={()=>{handleNewSignature()}}>
                    <FcCheckmark />
                </Button>
            </InputGroup>
        </Modal.Body>
    </Modal>
  )
}

export default UpdateSignatureModal