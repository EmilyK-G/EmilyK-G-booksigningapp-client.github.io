import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { SignatureContext } from '../../contexts/SignatureContext';
import PrevMessages from './PrevMessages/PrevMessages';
import './Messages.css';

function Messages() {
  const {booksSigned, signing, messagesArr} = useContext(SignatureContext);
  const {loggedUser} = useContext(UserContext);
  const [message, setMessage] = useState('');
  const[palMsgs, setPalMsgs] = useState([]);

  useEffect(()=>{
    const thisPal = [];
    booksSigned.forEach(mes => {
        if(mes.recipient_id === signing.Id){
            thisPal.push(mes)
        }
    })
    setPalMsgs(thisPal)
  }, [booksSigned, signing])


  function handleSubmitMessage(){

    //add Message to Messages Database HERE

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
        <div className='prevMsg_container p-3'>
            <header className='my-5'>
                <h2>Previous Messages</h2>
                <hr />
            </header>
            {
              palMsgs.length >= 1 ? palMsgs.map(mes => {
                return <PrevMessages mes={mes}/>
              }) : <h4>No previous messages</h4>
            }
            
        </div>
        
    </div>
    
  )
}

export default Messages