import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import MyBookPage from './MyBookPage';
import { useUserContext } from '../../Hooks/UserContextHook';
import { useSignatureContext } from '../../Hooks/SignatureContextHook';
import { motion } from 'framer-motion';
import './MyBook.css';
import { useEffect } from 'react';

function MyBook() {
    const { user } = useUserContext();
    const {signatures, dispatch} = useSignatureContext();
    const componentRef = useRef();

    useEffect(()=>{
      const fetchSignatures = async() => {
          const response = await fetch('/api/signatures', {
              headers: {
                  'Authorization': `Bearer ${user.token}`
              }
          })
          const json = await response.json()

          if (response.ok) {
              dispatch({type: 'SET_SIGNATURES', payload: json})
              console.log(json)
          }
      }

      if(user) {
          fetchSignatures()
      }  
    },[user, dispatch])
  
  return (
    <motion.div 
      initial= {{opacity: 0, height:'10%', x:0}}
      animate= {{opacity: 1, height:'100%', x:0}}
      exit= {{opacity:0, height:'10%', x:0}}
      transition={{ duration: 0.2 }}>
        <div className='d-flex flex-column mt-5 mb-3 myBook_container'>
            <h1 className='myBook_title'>My Book <small className="text-muted">-signatures</small></h1>
            <MyBookPage ref={componentRef} signatures={signatures}/>
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