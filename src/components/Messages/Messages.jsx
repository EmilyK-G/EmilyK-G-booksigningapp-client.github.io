import React from 'react';
import './Messages.css'
import PrevMessages from './PrevMessages/PrevMessages';

function Messages() {
  return (
    <div className="d-flex flex-column align-items-start">
        <div className="input-group">
            <textarea className="form-control txtArea" placeholder='Dear Phineas...'></textarea>
        </div>
        <figcaption className='message_footer mx-3 mt-1'>From: Perry P.</figcaption>
        <button type='submit' className='btn btn-success align-self-end'>Send</button>
        <PrevMessages/>
    </div>
    
  )
}

export default Messages