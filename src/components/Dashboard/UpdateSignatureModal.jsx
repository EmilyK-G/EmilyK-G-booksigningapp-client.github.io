import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FcCheckmark } from 'react-icons/fc';
import { useState } from 'react';

function UpdateSignatureModal(props) {
    
    const [newSignature, setNewSignature] = useState('');

    function handleNewSignature(){

        //UPDATE/PUSH db logic here

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
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-success" id="button-addon2" onClick={()=>{handleNewSignature()}}>
                    <FcCheckmark />
                </Button>
            </InputGroup>
        </Modal.Body>
    </Modal>
  )
}

export default UpdateSignatureModal