import { useSignatureContext } from "../../../Hooks/SignatureContextHook";
import { IconContext } from "react-icons";
import { formatRelative } from 'date-fns';
import { RiChatDeleteFill } from 'react-icons/ri';
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
                        <cite title="Sent date">{formatRelative (new Date(mes.updatedAt), new Date())}</cite>
                    </figcaption>
                    <IconContext.Provider value={{ color: '#ea1537', className: "delete_icon" }}>
                        <span className="text-end delete_msg_btn" onClick={() => handleDeleteMsg(mes._id)}><RiChatDeleteFill/></span>
                    </IconContext.Provider>
                </figure>
      })

    
    return getMessages.length >= 1 ? myMessages : <small className="text-muted">No messages sent</small>
}

export default PrevMessages