import React from 'react';
import { useEffect } from 'react';
import './PrevMessages.css';

function PrevMessages(props) {
    useEffect(()=>{
        console.log(props.mes)
    }, [props.mes])
  return (
        <figure key={props.mes.message_id} className="text-end">
            <blockquote className="blockquote">
                <p className='prevMsg_text mt-3 text-end'>{props.mes.message}</p>
            </blockquote>
            <figcaption className="blockquote-footer text-end">
                Sent <cite title="Sent date">{props.mes.sent_date}</cite>
            </figcaption>
        </figure>
    )
}

export default PrevMessages