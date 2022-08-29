import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './Dashboard.css';

function Dashboard() {
  const{loggedUser, setLoggedIn} = useContext(UserContext);
  const navigate = useNavigate();

  function userLogout() {
    setLoggedIn(false);
    navigate('/')
  }

  return (
    
    <div className='d-flex flex-column' >
        <button 
          variant='outline'
          className='btn btn-outline-danger align-self-end logout_btn' 
          onClick={()=>{userLogout()}}>
          Log Out
        </button>
        <div className='d-flex flex-column profile_div_1 py-4'>
          <div className='profile_pic_div m-4 align-self-center' style={{backgroundImage: `url(${loggedUser.Picture})`}}></div>
          <h3 className='profile_name'>Hi {loggedUser.Name}!</h3>
        </div>
        <div className="d-flex flex-column profile_div_2 py-4">
          <p className='align-self-start mt-3 mb-0 div_2_text_1'>You still have</p>
          <div className='books_left_num align-self-end d-flex justify-content-center align-items-center'>4</div>
          <p className='align-self-end div_2_text_2'>books to sign</p>
        </div>
        <div className="d-flex flex-column profile_div_3 py-4">
          <p className="div_3_text">Signing as: {loggedUser.Signature}</p>
        </div>
      </div>
  )
}

export default Dashboard