import React from 'react';
import { motion } from 'framer-motion';
import './Welcome.css';

function Welcome() {
  return (
    <>
    <motion.div 
        initial= {{opacity: 0, x:-100}}
        animate= {{opacity: 1, x: 0}}
        exit= {{opacity:0, x:-100}}
        transition={{ duration: 0.2 }}>
      <h2 className='welcome_content'>Welcome class of 2022!</h2>  
    </motion.div>
    </>
  )
}

export default Welcome