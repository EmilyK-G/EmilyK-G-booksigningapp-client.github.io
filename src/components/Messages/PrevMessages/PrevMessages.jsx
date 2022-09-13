import { useSignatureContext } from "../../../Hooks/SignatureContextHook";
import './PrevMessages.css';

function PrevMessages() {

    const {getMessages, dispatch} = useSignatureContext();
    
    const handleDeleteMsg = async(msgId) => {
        const response = await fetch('/api/signatures/' + msgId, {
            method:'DELETE'
        })

        const json = await response.json();

        if (response.ok) {
            dispatch({type: 'DLETE_SIGNATURE', payload: json})
        }
    }

    const myMessages = getMessages.map(mes => {
        return <figure key={mes._id} className="text-end">
                    <blockquote className="blockquote">
                        <p className='prevMsg_text mt-3 text-end'>{mes.message}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer text-end">
                        Sent <cite title="Sent date">{mes.updatedAt}</cite>
                    </figcaption>
                    <span className="text-end delete_msg_btn" onClick={() => handleDeleteMsg(mes._id)}>Delete</span>
                </figure>
      })

    
    return getMessages.length >= 1 ? myMessages : <small className="text-muted">No messages sent</small>
}

export default PrevMessages