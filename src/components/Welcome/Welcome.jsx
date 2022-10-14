import { useState } from 'react';
import { motion } from 'framer-motion';
import Signup from '../Signup/Signup';
import './Welcome.css';
import { useEffect } from 'react';
import Success from '../Success/Success';
import { useSignup } from '../../Hooks/useSignupHook';


function Welcome({pathname}) {
  const [showForm, setShowForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const {success} = useSignup()

  useEffect(()=>{
    if(pathname === '/'){
      setTimeout(()=>{
        setShowWelcome(true)
      }, 300)
    } else {
      setShowWelcome(false)
    }
  },[pathname])
  return (
    <motion.div
        animate= {{opacity: 1, width:'100%', x:0}}
        className={'welcome_div_container' + (showWelcome ? '' : ' invisible')}>
          <div className='welcome_content d-flex flex-column justify-content-center'>
            <h2>Welcome class of 2022!</h2>
            <button className="btn btn-small mt-3" onClick={()=>{setShowForm(true)}}>{'Sign up>'}</button>
            <Signup showForm={showForm} closeForm={()=>setShowForm(false)} openSuccessModal={()=>setShowSuccessModal(true)}/>
            <Success showModal={showSuccessModal} success={success} setShowSuccessModal={setShowSuccessModal}/>
          </div>
    </motion.div>
    
  )
}

export default Welcome