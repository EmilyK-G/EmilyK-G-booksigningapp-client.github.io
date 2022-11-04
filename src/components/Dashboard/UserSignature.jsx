import React from 'react';
import { GrEdit } from 'react-icons/gr';
import { useUserContext } from '../../Hooks/useUserContextHook';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './UserSignature.css';


function UserSignature(props) {

  const {loadingUserData} = useUserContext();

    function handleEditClick(e) {
        e.preventDefault();
        props.setShow(true)
    }

  return (
    loadingUserData 
    ? <LoadingSpinner loadingPage={'signature'}/> 
    : <>
        <p className="div_3_text_1 d-flex align-content-start mx-4">Signing as: </p>
        <div className="div_3_signature_container mx-4 mb-0 d-flex align-items-end justify-content-end">
            <div className="div_3_text_signature d-flex justify-content-end">{props.currentSignature}</div>
            <button onClick={(e)=>handleEditClick(e)} className='btn btn_edit_signature'><GrEdit/></button>
        </div>
    </>
  )
}

export default UserSignature