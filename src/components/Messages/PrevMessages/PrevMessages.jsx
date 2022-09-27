import { useSignatureContext } from "../../../Hooks/SignatureContextHook";
import { useUserContext } from "../../../Hooks/UserContextHook";
import { IconContext } from "react-icons";
import { formatRelative } from 'date-fns';
import { RiChatDeleteFill } from 'react-icons/ri';
import './PrevMessages.css';
import { useEffect } from "react";
import { useState } from "react";

function PrevMessages() {

    const {dispatch, signing} = useSignatureContext();
    const {user} = useUserContext();

    const [thisPal, setThisPal] = useState([])

    useEffect(()=>{
        const fetchSignatures = async()=>{
            const response = await fetch('/api/signatures/sent', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
        
        const json = await response.json();

        if (response.ok) {
            json.forEach((mes)=>{
                mes.recipient_id === signing._id && setThisPal(t => [...t, mes])
                console.log(mes)
            })
            console.log(json)
        }
    }
        fetchSignatures()
    },[signing._id, user.token])


    const handleDeleteMsg = async(msgId) => {
        if (!user) {
            return
        }

        const response = await fetch('/api/signatures/' + msgId, {
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json();

        if (response.ok) {
            dispatch({type: 'DELETE_SIGNATURE', payload: json})
        }
    }


    return ( thisPal.length !== 0 ? thisPal.map(mes => {
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
      }) : <small className="text-muted">No messages sent</small>
    )

}

export default PrevMessages