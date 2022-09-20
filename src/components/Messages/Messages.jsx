import React, { useState, useEffect, useRef } from 'react';
import { useSignatureContext } from "../../Hooks/SignatureContextHook";
import { useUserContext } from '../../Hooks/UserContextHook';
import PrevMessages from './PrevMessages/PrevMessages';
import { motion } from 'framer-motion';
import Alert from 'react-bootstrap/Alert';
import './Messages.css';

function Messages() {
  const {signing, dispatch, getMySignatures} = useSignatureContext();
  const {loggedUser, user} = useUserContext()

  const [myMessage, setMyMessage] = useState('');
  const [error, setError] = useState(null);
  const getSignaturesRef = useRef (getMySignatures);
  const [emptyFields, setEmptyFields] = useState([]);


  useEffect(()=>{
    getSignaturesRef.current(loggedUser.Id, 'FROM_ME')
    //getMessages is not updating
  }, [loggedUser.Id])


  const handleSubmitMessage = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }
    //add Message to Messages array (Database) HERE ex:
    const mssg = {
      message: myMessage,
      recipient: `${signing.Name} ${signing.LastName}`,
      recipient_id: signing.Id,
      sender: `${loggedUser.Name} ${loggedUser.LastName}`,
      sender_id: loggedUser.Id,
      sender_signature: loggedUser.Signature
    }

    const response = await fetch('/api/signatures', {
      method: 'POST',
      body: JSON.stringify(mssg),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    
    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setMyMessage('');
      setError(null);
      setEmptyFields([]);
      console.log('new message sent!', json);
      dispatch({type: 'CREATE_SIGNATURE', payload: json});
    }
  }

  return (
    <motion.div 
      initial= {{opacity: 0, height:'10%', x:0}}
      animate= {{opacity: 1, height:'100%', x:0}}
      exit= {{opacity:0, height:'10%', x:0}}
      transition={{ duration: 0.2 }}>
      <div className="d-flex flex-column align-items-start p-1 pt-4">
          <h1 className='align-self-center bk_owner_title'>{signing.Name}<small className="text-muted">'s Book</small></h1>
          <div className="input-group">
              <textarea value={myMessage} className={"form-control txtArea pt-4 ps-2 msg_txt_area " + (emptyFields.includes('message') ? ' message_error' : '')} autoFocus onChange={(e)=>setMyMessage(e.target.value)} placeholder={'Dear ' + signing.Name + ' ' + signing.LastName + '...'}></textarea>
          </div>
          <figcaption className='message_footer mx-3 mt-1'>From: {loggedUser.Signature}</figcaption>
          <button type='submit' className='btn btn-success align-self-end' onClick={(e)=>handleSubmitMessage(e)}>Send</button>
          {error && <Alert variant='danger' className='mt-3 align-self-center alert_message'>{error}</Alert>}
          <div className='prevMsg_container d-flex flex-column align-items-end p-3 mb-5'>
              <header className='my-5 align-self-center'>
                  <h2>Previous Messages</h2>
                  <hr />
              </header>
             <PrevMessages />
          </div>
      </div>
    </motion.div>
  )
}

export default Messages