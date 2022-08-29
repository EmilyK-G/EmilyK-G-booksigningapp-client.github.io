import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './Dashboard.css';

function Dashboard() {
  const{setLoggedIn} = useContext(UserContext);
  const navigate = useNavigate();

  function userLogout() {
    setLoggedIn(false);
    navigate('/')
  }

  return (
    
    <div className='d-flex' >
        <button 
          variant='outline'
          className='btn btn-outline-danger mr-0 align-self-start' 
          onClick={()=>{userLogout()}}>
          Log Out
        </button>
        <div></div>
      </div>
    
  )
}

export default Dashboard