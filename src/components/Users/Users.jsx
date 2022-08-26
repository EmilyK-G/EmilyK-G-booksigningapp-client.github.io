import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './Users.css';

function Users() {
  const {usersArr, setUserSelected} = useContext(UserContext);

  function handleListItemClick(user) {
    setUserSelected(user)
  }
  return (
    <div className="d-flex flex-column justify-content-center">
      <header className='users_header align-self-center'>
        <h1 className='users_title mb-0'>Who Are You?</h1>
      </header>
      <hr className="mb-4 users_separator"></hr>
      <ul className='users_list d-flex'>
        {usersArr.map((user)=>{
          return <li key={user.Id} 
                     className='users_list_item' 
                     style={{backgroundImage: `url(${user.Picture})`}} 
                     onClick={()=>handleListItemClick(user)}></li>   
        })}
      </ul>
    </div>
  )
}

export default Users