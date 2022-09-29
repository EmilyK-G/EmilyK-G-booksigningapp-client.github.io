import { useEffect, useRef } from "react";
import PrevMessages from './PrevMessages/PrevMessages';
import { useSignatureContext } from "../../Hooks/SignatureContextHook";
import { useUserContext } from "../../Hooks/useUserContextHook";
import { motion } from 'framer-motion';
import MessageForm from './MessageForm/MessageForm';
import './Messages.css';

function Messages() {
  const {dispatch, signing} = useSignatureContext();
  const { user } = useUserContext()

  const thisPalRef = useRef([]);

  useEffect(()=>{

    const fetchSignatures = async()=>{
        const response = await fetch('/api/signatures/sent', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
    
        const json = await response.json();

        if (response.ok) {
            json.forEach((mes)=>{
                mes.recipient_id === signing._id && thisPalRef.current.push(mes)
            })
        }
        dispatch({type:'SET_SIGNATURES', payload: thisPalRef.current})
    }
        fetchSignatures()

  },[signing._id, user.token, dispatch])


  return (
    <motion.div 
      initial= {{opacity: 0, height:'10%',width:'85%', x:0}}
      animate= {{opacity: 1, height:'100%', width:'95%', x:0}}
      exit= {{opacity:0, height:'10%',width:'85%', x:0}}
      transition={{ duration: 0.2 }}>
      <div className="d-flex flex-column align-items-start p-1 pt-4">
          <MessageForm />
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