import { useState } from 'react';
import { motion } from 'framer-motion';
import Signup from '../Signup/Signup';
import './Welcome.css';
import { useEffect } from 'react';
import Success from '../Success/Success';


function Welcome({pathname}) {
  const [showForm, setShowForm] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

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
          <div className='welcome_content d-inline-flex flex-column justify-content-center'>
            <h2>Welcome class of 2022!</h2>
            <hr className='separator'/>
            <button className="btn btn-small text-end" onClick={()=>{setShowForm(true)}}>{'Sign up>'}</button>
            <Signup showForm={showForm} closeForm={()=>setShowForm(false)} setModalInfo={setModalInfo}/>
            {modalInfo && <Success modalInfo={modalInfo}/>}
          </div>
    </motion.div>
    
  )
}

export default Welcome