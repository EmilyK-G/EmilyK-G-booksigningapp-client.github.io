import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { SignatureContext } from '../../contexts/SignatureContext';
import PrevMessages from './PrevMessages/PrevMessages';
import { motion } from 'framer-motion';
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

    //add Message to Messages array (Database) HERE ex:
    messagesArr.push({
      message_id: `${Math.floor(Math.random() * 100) + 1}`, //use default _id value instead
      message: message,
      recipient: `${signing.Name} ${signing.LastName}`,
      recipient_id: signing.Id,
      sender: `${loggedUser.Name} ${loggedUser.LastName}`,
      sender_id: loggedUser.Id,
      sent_date: "Sep 30th, 2022",
      signature: loggedUser.Signature
    })

    setMessage('');
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
              <textarea value={message} className="form-control txtArea pt-4 ps-2 msg_txt_area" autoFocus onChange={(e)=>setMessage(e.target.value)} placeholder={'Dear ' + signing.Name + ' ' + signing.LastName + '...'}></textarea>
          </div>
          <figcaption className='message_footer mx-3 mt-1'>From: {loggedUser.Signature}</figcaption>
          <button type='submit' className='btn btn-success align-self-end' onClick={()=>handleSubmitMessage()}>Send</button>
          <div className='prevMsg_container d-flex  flex-column align-items-center p-3'>
              <header className='my-5'>
                  <h2>Previous Messages</h2>
                  <hr />
              </header>
              {
                palMsgs.length >= 1 ? palMsgs.map(mes => {
                  return <PrevMessages mes={mes} key={mes.message_id}/>
                }) : <small className="text-muted">No messages sent</small>
              }
          </div>
      </div>
    </motion.div>
  )
}

export default Messages