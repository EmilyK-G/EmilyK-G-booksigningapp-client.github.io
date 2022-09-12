import React from 'react';
import './PrevMessages.css';

function PrevMessages({palMsgs}) {
    
    const myMessages = palMsgs.map(mes => {
        return <figure key={mes._id} className="text-end">
                    <blockquote className="blockquote">
                        <p className='prevMsg_text mt-3 text-end'>{mes.message}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer text-end">
                        Sent <cite title="Sent date">{mes.updatedAt}</cite>
                    </figcaption>
                </figure>
      })

    return myMessages
}

export default PrevMessages