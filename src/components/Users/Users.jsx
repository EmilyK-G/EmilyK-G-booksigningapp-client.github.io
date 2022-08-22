import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Modal from './LoginModal';
import './Users.css';

function Users() {
  const [showModal, setShowModal] = useState(false);

  function handleListItemClick() {
    setShowModal(true)
  }
  return (
    <div className="d-flex flex-column justify-content-center">
      <header className='users_header align-self-center'>
        <h1 className='users_title mb-0'>Who Are You?</h1>
      </header>
      <hr className="mb-4 users_separator"></hr>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <ul className='users_list d-flex' onClick={(e)=>handleListItemClick(e)}>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
        <li className='users_list_item' onClick={(e)=>handleListItemClick(e)}><FaUser/></li>
      </ul>
    </div>
  )
}

export default Users