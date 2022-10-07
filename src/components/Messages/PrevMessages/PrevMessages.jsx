import { useSignatureContext } from "../../../Hooks/useSignatureContextHook";
import { useUserContext } from "../../../Hooks/useUserContextHook";
import { IconContext } from "react-icons";
import { formatRelative } from 'date-fns';
import { RiChatDeleteFill } from 'react-icons/ri';
import './PrevMessages.css';


function PrevMessages({mes}) {

    const {dispatch} = useSignatureContext();
    const {user} = useUserContext();

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
                    <span className="text-end delete_msg_btn" onClick={handleDeleteMes}><RiChatDeleteFill/></span>
                </IconContext.Provider>
            </figure>
    

}

export default PrevMessages