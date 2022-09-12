import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { SignatureContext } from '../../contexts/SignatureContext';
import PrevMessages from './PrevMessages/PrevMessages';
import { motion } from 'framer-motion';
import Alert from 'react-bootstrap/Alert';
import './Messages.css';

function Messages() {
  const {booksSigned, signing, messagesArr} = useContext(SignatureContext);
  const {loggedUser} = useContext(UserContext);
  const [myMessage, setMyMessage] = useState('');
  const[palMsgs, setPalMsgs] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    const thisPal = [];
    booksSigned.forEach(mes => {
        if(mes.recipient_id === signing.Id){
            thisPal.push(mes)
        }
    })
    setPalMsgs(thisPal)
  }, [booksSigned, signing])


  const handleSubmitMessage = async (e) => {
    e.preventDefault()
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
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if(!response.ok){
      setError(json.error)
    }
    if (response.ok) {
      setMyMessage('');
      setError(null);
      console.log('new message sent!')
    }
    console.log(messagesArr)
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
              <textarea value={myMessage} className="form-control txtArea pt-4 ps-2 msg_txt_area" autoFocus onChange={(e)=>setMyMessage(e.target.value)} placeholder={'Dear ' + signing.Name + ' ' + signing.LastName + '...'}></textarea>
          </div>
          <figcaption className='message_footer mx-3 mt-1'>From: {loggedUser.Signature}</figcaption>
          <button type='submit' className='btn btn-success align-self-end' onClick={(e)=>handleSubmitMessage(e)}>Send</button>
          {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
          <div className='prevMsg_container d-flex flex-column align-items-center p-3'>
              <header className='my-5'>
                  <h2>Previous Messages</h2>
                  <hr />
              </header>
              {
                palMsgs.length >= 1 ? palMsgs.map(mes => {
                  return <PrevMessages mes={mes} key={mes._id}/>
                }) : <small className="text-muted">No messages sent</small>
              }
          </div>
      </div>
    </motion.div>
  )
}

export default Messages