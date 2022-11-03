import { motion } from 'framer-motion';
import './LoadingSpinner.css';

const LoadingSpinner = ({loadingPage}) => {
  return (
    <motion.div 
      initial= {{opacity: 0, y:-100, x:0}}
      animate= {{opacity: 1, y:0, width:'95%', x:0}}
      exit= {{opacity:0, y:100,width:'85%', x:0}}
      transition={{ duration: 0.5 }}
      className='center'>
        <div className="waves_container">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <p>Loading {loadingPage}...</p>
    </motion.div>
  )
}

export default LoadingSpinner