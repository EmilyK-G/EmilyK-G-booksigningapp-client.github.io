import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { FaUser } from 'react-icons/fa';
import LoginModal from './LoginModal';
import './Users.css';

function Users() {
  const {usersArr} = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPIN, setUserPIN] = useState('');

  function handleListItemClick(name, PIN) {
    setUserName(name);
    setUserPIN(PIN)
    setShowModal(true)
  }
  return (
    <div className="d-flex flex-column justify-content-center">
      <header className='users_header align-self-center'>
        <h1 className='users_title mb-0'>Who Are You?</h1>
      </header>
      <hr className="mb-4 users_separator"></hr>
      <LoginModal showModal={showModal} setShowModal={setShowModal} userName={userName} userPIN={userPIN}/>
      <ul className='users_list d-flex'>
        {usersArr.map((user)=>{
          return <li key={user.Id} 
                     className='users_list_item' 
                     style={{backgroundImage: `url(${user.Picture})`}} 
                     onClick={()=>handleListItemClick(user.Name, user.PIN)}></li>   
        })}
      </ul>
    </div>
  )
}

export default Users