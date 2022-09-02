import React, { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { SignatureContext } from '../../contexts/SignatureContext';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { IoIosLogOut } from 'react-icons/io';
import { GrEdit } from 'react-icons/gr';
import './Dashboard.css';
import { useEffect } from 'react';

function Dashboard() {
  const{loggedUser, setLoggedIn, usersArr} = useContext(UserContext);
  const{booksSigned} = useContext(SignatureContext);
  const [booksToSign, setBooksToSign] = useState(0);
  const navigate = useNavigate();
  const parallaxRef = useRef()

  useEffect(()=>{
    const usrs = usersArr.length -1;
    if(booksSigned.length >= 1){
      const toSign = usrs - booksSigned.length;
      setBooksToSign(toSign)
    } else{
        setBooksToSign(usrs)
    }
    console.log(booksSigned.length)
  }, [usersArr.length, booksSigned])

  function userLogout() {
    setLoggedIn(false);
    navigate('/')
  }

  return (
    <Parallax pages={3}>
    <div className='d-flex flex-column' >
      <header className='profile_header d-flex justify-content-end'>
        <button 
          className='btn d-flex align-items-center logout_btn' 
          onClick={()=>{userLogout()}}>
          <IoIosLogOut />
        </button>
      </header>
      <ParallaxLayer speed={0.5} style={{backgroundColor:'#d0cccb'}}/>
      <ParallaxLayer offset={1} speed={0.5} factor={1.2} style={{backgroundColor:'#225691'}}/>
      <ParallaxLayer offset={2} speed={0.5} style={{backgroundColor:'#d0cccb'}}/>
      <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallaxRef.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className='d-flex flex-column justify-content-center align-items-center profile_div_1 py-4'>
            <div className='profile_pic_div m-4' style={{backgroundImage: `url(${loggedUser.Picture})`}}></div>
            <h3 className='profile_name'>Hi {loggedUser.Name}!</h3>
          </div>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1} 
          speed={0.4} 
          style={{ 
            opacity: 0.9,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end'
          }}>
            <div className='books_left_num d-flex justify-content-center align-items-center'>{booksToSign}</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallaxRef.current.scrollTo(2)}
          style={{
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem'
          }}>
            <p className='align-self-start div_2_text_1'>You still have</p>
            <p className='align-self-end div_2_text_2 '>book{booksToSign >= 1 ? 's':''} to sign</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallaxRef.current.scrollTo(0)}>
            <p className="div_3_text_1 d-flex align-content-start mx-4">Signing as: </p>
            <div className="div_3_signature_container mx-4 mb-0 d-flex align-items-end justify-content-end">
              <div className="div_3_text_signature d-flex justify-content-end">{loggedUser.Signature}</div>
              <div className='btn_edit_signature'><GrEdit/></div>
            </div>
        </ParallaxLayer>
    </div>
    </Parallax>
  )
}

export default Dashboard