import { useSignatureContext } from "../../../Hooks/SignatureContextHook";
import './PrevMessages.css';

function PrevMessages() {

    const {getMessages} = useSignatureContext();
    
    const myMessages = getMessages.map(mes => {
        return <figure key={mes._id} className="text-end">
                    <blockquote className="blockquote">
                        <p className='prevMsg_text mt-3 text-end'>{mes.message}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer text-end">
                        Sent <cite title="Sent date">{mes.updatedAt}</cite>
                    </figcaption>
                </figure>
      })

    
    return getMessages.length >= 1 ? myMessages : <small className="text-muted">No messages sent</small>
}

export default PrevMessages