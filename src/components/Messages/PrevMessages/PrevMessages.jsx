import React from 'react';
import './PrevMessages.css';

function PrevMessages() {
  return (
    <div className='prevMsg_container p-3'>
        <header className='my-5'>
            <h2>Previous Messages</h2>
            <hr />
        </header>
        <figure className="text-end">
            <blockquote className="blockquote">
                <p className='prevMsg_text mt-3 text-end'>Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
            </blockquote>
            <figcaption className="blockquote-footer text-end">
                Sent <cite title="Source Title">Source Title</cite>
            </figcaption>
        </figure>
        <figure className="text-end">
            <blockquote className="blockquote">
                <p className='prevMsg_text mt-3 text-end'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </blockquote>
            <figcaption className="blockquote-footer text-end">
                Sent <cite title="Source Title">Source Title</cite>
            </figcaption>
        </figure>
        
    </div>
  )
}

export default PrevMessages