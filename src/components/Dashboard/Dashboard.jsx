import React, { useState, useRef, useEffect } from 'react';
import { useUserContext } from '../../Hooks/useUserContextHook';
import { useSignatureContext } from "../../Hooks/useSignatureContextHook";
import { useLogout } from '../../Hooks/useLogoutHook';
import UserSignature from './UserSignature';
import UpdateSignatureModal from './UpdateSignatureModal';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion } from 'framer-motion';
import { IconContext } from "react-icons";
import { IoIosLogOut } from 'react-icons/io';
import './Dashboard.css';

function Dashboard() {
  const {user, usersArr} = useUserContext();
  const {logout} = useLogout();
  const {signatures} = useSignatureContext();
  const [booksToSign, setBooksToSign] = useState(0);
  const [show, setShow] = useState(false)
  const parallaxRef = useRef();


  useEffect(()=>{
    const usrs = usersArr.length -1;
    if(signatures){
      const toSign = usrs - signatures.length;
      setBooksToSign(toSign)
    } else{
        setBooksToSign(usrs)
    }
    console.log(signatures)
  }, [usersArr.length, signatures])

  const handleLogoutClick = () => {
    logout()
  }
  return (
    <Parallax ref={parallaxRef} pages={3}>
      <motion.div 
        initial= {{opacity: 0, x:-100}}
        animate= {{opacity: 1, x: 0}}
        exit= {{opacity:0, x:-100}}
        transition={{ duration: 0.2 }}>
        <div className='d-flex flex-column' >
          <header className='profile_header d-flex justify-content-end'>
            <button 
              className='btn d-flex align-items-center' 
              onClick={handleLogoutClick}>
              <IconContext.Provider value={{ color: '#f8f9fa', className: "logout_icon" }}>
                <IoIosLogOut />
              </IconContext.Provider>
            </button>
          </header>
          <ParallaxLayer speed={0.2} style={{backgroundColor:'#f2fedcb1'}}/>
          <ParallaxLayer offset={1} speed={0.2} factor={1} style={{backgroundColor:'#006e5d'}}/>
          <ParallaxLayer offset={2} speed={0.2} style={{backgroundColor:'#f2fedcb1'}}/>
          <ParallaxLayer
              offset={0}
              speed={1}
              onClick={() => parallaxRef.current.scrollTo(1)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <div className='d-flex flex-column justify-content-center align-items-center profile_div_1 py-4'>
                <div className='profile_pic_div m-4' style={{backgroundImage: `url(${user.img})`}}></div>
                <h3 className='profile_name'>Hi {user.name}!</h3>
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
                <div className='books_left_num d-flex justify-content-center align-items-center'>{booksToSign >= 0 ? booksToSign : '0'}</div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={0.1}
              onClick={() => parallaxRef.current.scrollTo(2)}
              style={{
                display: 'flex',
                flexDirection:'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                fontSize: '2rem'
              }}>
                {booksToSign >= 1 ? <><p className='align-self-start div_2_text_1'>You still have</p>
                <p className='align-self-end div_2_text_2 '>book{booksToSign >= 1 ? 's':''} to sign</p></> 
                : <><p className='align-self-start div_2_text_3 m-3'>All Books</p>
                <p className='align-self-end div_2_text_4 m-3'>signed!</p></>}
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={1}
              style={{
                display: 'flex',
                flexDirection:'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <UserSignature currentSignature={user.signature} setShow={setShow}/>
            </ParallaxLayer>
            <UpdateSignatureModal show={show} setShow={setShow} user={user}/>
        </div>
      </motion.div>
    </Parallax>
  )
}

export default Dashboard