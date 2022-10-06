import { useState } from 'react';
import { motion } from 'framer-motion';
import Signup from '../Signup/Signup';
import './Welcome.css';


function Welcome() {
  const [showForm, setShowForm] = useState(false);
  return (
    <motion.div 
        initial= {{opacity: 0, x:-100}}
        animate= {{opacity: 1, x: 0}}
        exit= {{opacity:0, x:-100}}
        transition={{ duration: 0.2 }}>
          <div className='welcome_content d-flex flex-column justify-content-center'>
            <h2>Welcome class of 2022!</h2>
            <button className="btn btn-small mt-3" onClick={()=>{setShowForm(true)}}>{'Sign up>'}</button>
            <Signup showForm={showForm} setShowForm={setShowForm}/>
          </div>
    </motion.div>
    
  )
}

export default Welcome