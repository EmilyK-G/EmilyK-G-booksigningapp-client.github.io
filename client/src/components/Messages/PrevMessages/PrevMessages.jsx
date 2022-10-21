import { useSignatureContext } from "../../../Hooks/useSignatureContextHook";
import { useUserContext } from "../../../Hooks/useUserContextHook";
import { IconContext } from "react-icons";
import { formatRelative } from 'date-fns';
import { RiChatDeleteFill } from 'react-icons/ri';
import Overlay from 'react-bootstrap/Overlay';
import './PrevMessages.css';
import { useState, useRef } from "react";
import Tooltip from 'react-bootstrap/Tooltip';


function PrevMessages({mes}) {

    const {dispatch} = useSignatureContext();
    const {user} = useUserContext();

    const [show, setShow] = useState(false);
    const target = useRef(null);  

    const handleDeleteMes = async() => {
        if (!user) {
            return
        }

        const response = await fetch('/api/signatures/sent/' + mes._id, {
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_SIGNATURE', payload: json})
            setShow(false)
        }
    }


    return  <figure className="text-end">
                <blockquote className="blockquote">
                    <p className='prevMsg_text mt-3 text-end'>{mes.message}</p>
                </blockquote>
                <figcaption className="blockquote-footer text-end">
                    <cite title="Sent date">{formatRelative (new Date(mes.updatedAt), new Date())}</cite>
                </figcaption>
                <IconContext.Provider value={{ color: '#ea1537', className: "delete_icon" }}>
                    <span ref={target} className="text-end delete_msg_btn" onClick={()=>setShow(!show)}><RiChatDeleteFill/></span>
                </IconContext.Provider>
                <Overlay target={target.current} show={show} placement="left" className='my_tooltip'>
                <Tooltip style={{transform:'translate3d(0px, 85px, 0px)'}}>
                    <p>{`Do you want to delete this message? (You cannot undo this later)`}</p>
                    <button type="button" className='btn-small btn btn-danger' onClick={()=>handleDeleteMes()}>YES, delete</button>
                    <button type="button" className='btn-small btn btn-secondary' onClick={()=>setShow(false)}>NO, wait</button>
                </Tooltip>
                </Overlay>
            </figure>
    

}

export default PrevMessages