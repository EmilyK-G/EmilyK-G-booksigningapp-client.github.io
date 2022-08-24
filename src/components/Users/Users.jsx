import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { FaUser } from 'react-icons/fa';
import LoginModal from './LoginModal';
import './Users.css';

function Users() {
  const {usersArr} = useContext(UserContext);
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
      <LoginModal showModal={showModal} setShowModal={setShowModal}/>
      <ul className='users_list d-flex' onClick={(e)=>handleListItemClick(e)}>
        {usersArr.map((user)=>{
          return <li className='users_list_item' style={{backgroundImage: `url(${user.Picture})`}} onClick={(e)=>handleListItemClick(e)}></li>   
        })}

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