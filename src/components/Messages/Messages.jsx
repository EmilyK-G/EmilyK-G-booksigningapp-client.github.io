import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { SignatureContext } from '../../contexts/SignatureContext';
import PrevMessages from './PrevMessages/PrevMessages';
import './Messages.css';

function Messages() {
  const {signing, messagesArr} = useContext(SignatureContext);
  const {loggedUser} = useContext(UserContext);
  const [message, setMessage] = useState('');

  function handleSubmitMessage(){
    messagesArr.push( {
      sender:`${loggedUser.Name} ${loggedUser.LastName}`,
      signature:`${loggedUser.Signature}`,
      recipient:`${signing.Name}`,
      message:`${message}`,
      sent_date:`Sep 30th, 2022`
    });
    setMessage('');
    console.log(messagesArr)
  }

  return (
    <div className="d-flex flex-column align-items-start pt-4">
        <h1 className='align-self-center bk_owner_title'>{signing.Name}<small className="text-muted">'s Book</small></h1>
        <div className="input-group">
            <textarea value={message} className="form-control txtArea pt-4 ps-2 msg_txt_area" onChange={(e)=>setMessage(e.target.value)} placeholder={'Dear ' + signing.Name + ' ' + signing.LastName + '...'}></textarea>
        </div>
        <figcaption className='message_footer mx-3 mt-1'>From: {loggedUser.Signature}</figcaption>
        <button type='submit' className='btn btn-success align-self-end' onClick={()=>handleSubmitMessage()}>Send</button>
        <PrevMessages/>
    </div>
    
  )
}

export default Messages