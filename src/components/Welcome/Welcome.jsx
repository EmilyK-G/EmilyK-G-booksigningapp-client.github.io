import React from 'react';
import { motion } from 'framer-motion';
import Signup from '../Signup/Signup';
import './Welcome.css';

function Welcome() {

  return (
    <div className='welcome_content mt-4'>
      <h2>Welcome class of 2022!</h2>
      <Signup />
    </div>
  )
}

export default Welcome