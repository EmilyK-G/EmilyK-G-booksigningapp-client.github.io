import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { SignatureContext } from '../../contexts/SignatureContext';
import { IoIosLogOut } from 'react-icons/io';
import { GrEdit } from 'react-icons/gr';
import './Dashboard.css';
import { useEffect } from 'react';

function Dashboard() {
  const{loggedUser, setLoggedIn, usersArr} = useContext(UserContext);
  const{booksSigned, setBooksSigned} = useContext(SignatureContext);
  const [booksToSign, setBooksToSign] = useState(4);
  const navigate = useNavigate();

  useEffect(()=>{
    const usrs = usersArr.length -1;
    if(booksSigned >= 1){
      const toSign = usrs - booksSigned;
      setBooksToSign(toSign)
    } else{
        setBooksToSign(usrs)
    }
  }, [usersArr.length, booksSigned])

  function userLogout() {
    setLoggedIn(false);
    navigate('/')
  }

  return (
    
    <div className='d-flex flex-column dshbrd_container' >
        <button 
          className='btn align-self-end d-flex align-items-center logout_btn' 
          onClick={()=>{userLogout()}}>
          <IoIosLogOut />
        </button>
        <div className='d-flex flex-column justify-content-center align-items-center profile_div_1 py-4'>
          <div className='profile_pic_div m-4' style={{backgroundImage: `url(${loggedUser.Picture})`}}></div>
          <h3 className='profile_name'>Hi {loggedUser.Name}!</h3>
        </div>
        <div className="d-flex flex-column justify-content-center profile_div_2 py-4">
          <p className='align-self-start div_2_text_1'>You still have</p>
          <div className='books_left_num align-self-end d-flex justify-content-center align-items-center'>{booksToSign}</div>
          <p className='align-self-end div_2_text_2 '>book{booksToSign >= 1 ? 's':''} to sign</p>
        </div>
        <div className="d-flex flex-column justify-content-center profile_div_3 pb-2">
          <p className="div_3_text_1 d-flex align-content-start mx-4">Signing as: </p>
          <div className="div_3_signature_container mx-4 mb-0 d-flex align-items-end justify-content-end">
            <div className="div_3_text_signature d-flex justify-content-end">{loggedUser.Signature}</div>
            <div className='btn_edit_signature'><GrEdit/></div>
          </div>
        </div>
      </div>
  )
}

export default Dashboard