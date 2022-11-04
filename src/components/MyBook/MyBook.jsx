import { useRef, useEffect } from 'react';
import ReactToPrint from 'react-to-print';
import MyBookPage from './MyBookPage';
import MyButton from '../NavBtn/MyButton';
import { useUserContext } from '../../Hooks/useUserContextHook';
import { useSignatureContext } from '../../Hooks/useSignatureContextHook';
import { motion } from 'framer-motion';
import './MyBook.css';
import { MdDone } from 'react-icons/md';
import { IconContext } from "react-icons";

function MyBook() {
    const { user } = useUserContext();
    const {messages, myMesDispatch} = useSignatureContext();
    const componentRef = useRef();

    useEffect(()=>{
      const fetchSignatures = async() => {
          const response = await fetch('/api/signatures', {
              mode: 'cors',
              headers: {
                  'Authorization': `Bearer ${user.token}`
              }
          })
          const json = await response.json()

          if (response.ok) {
              myMesDispatch({type: 'SET_MESSAGES', payload: json})
              console.log(json)
          }
      }

      if(user) {
          fetchSignatures()
      }  
    },[user, myMesDispatch])
  
  return (
    <motion.div 
      initial= {{opacity: 0, height:'10%', x:0, width:'-webkit-fill-available'}}
      animate= {{opacity: 1, height:'100%', x:0, width:'-webkit-fill-available'}}
      exit= {{opacity:0, height:'10%', x:0, width:'-webkit-fill-available'}}
      transition={{ duration: 0.2 }}
      className='md_mybook_container'>
        <div className='d-flex flex-column mt-5 mb-3 myBook_container'>
          <div className='align-self-start check_btn_div'>
            <IconContext.Provider value={{ color: '#007185', className: 'check_svg_color' }}>
              <MyButton linkTo={'/books'} sign={<MdDone/>} className={'check_link_style'}/>
            </IconContext.Provider>
          </div>
          <h1 className='myBook_title mt-5'>My Book <small className="text-muted">-signatures</small></h1>
          <MyBookPage ref={componentRef} messages={messages ? messages.length > 0 ? messages : null : null}/>
          <ReactToPrint
            trigger={() => {
              return <button type='submit' className='btn btn-secondary m-4 align-self-center myBook_print_btn'>Print!</button>;
            }}
            content={() => componentRef.current}
          />
        </div>
    </motion.div>
  )
}

export default MyBook