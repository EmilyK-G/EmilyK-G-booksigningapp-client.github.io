import React from 'react';
import { motion } from 'framer-motion';
import Signup from '../Signup/Signup';
import './Welcome.css';

function Welcome() {

  return (
    <>
    <motion.div 
        initial= {{opacity: 0, x:-100}}
        animate= {{opacity: 1, x: 0}}
        exit= {{opacity:0, x:-100}}
        transition={{ duration: 0.2 }}>
      <div className='welcome_content'>
        <h2>Welcome class of 2022!</h2>
        <Signup />
      </div> 
    </motion.div>
    </>
  )
}

export default Welcome