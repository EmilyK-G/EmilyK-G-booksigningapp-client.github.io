import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';
import { SignatureContext } from '../../contexts/SignatureContext';
import { Outlet, Link } from "react-router-dom";
import Welcome from '../Welcome/Welcome';
import LoginModal from './LoginModal';
import Button from 'react-bootstrap/Button';
import './NavBtn.css';

function NavBtn() {
  const { userSelected } = useContext( UserContext );
  const { signing, setSigning } = useContext( SignatureContext );
  const [nextPage, setNextPage] = useState('/');
  const [prevPage, setPrevPage] = useState('/');
  const [hidePrevBtn, setHidePrevBtn] = useState(false);
  const [hideNextBtn, setHideNextBtn] = useState(false);
 
  const location = useLocation();
  const pathname = location.pathname;
  const matesBook = signing.Name;
  
  useEffect(() => {
    if (matesBook){
      setHideNextBtn(true);
      setHidePrevBtn(false);
      setPrevPage('/books')
    } else {
      if(pathname === '/'){
        setHidePrevBtn(true);
        setHideNextBtn(false);
        setNextPage('/users')
      }
      if(pathname === '/users' || pathname === '/dashboard'){
        setHidePrevBtn(false);
        setHideNextBtn(true);
        setNextPage('/books');
        setPrevPage('/')
      }
      if(pathname === '/dashboard'){
        setHidePrevBtn(true);
        setHideNextBtn(false);
        setNextPage('/books')
      }
      if(pathname === '/books'){
        setHideNextBtn(true);
        setHidePrevBtn(false);
        setPrevPage('/dashboard');
      }
    }
    console.log(pathname)
  }, [pathname, matesBook])

 


  return (
    <>  
        <div className='prev_btn_container_style d-flex align-items-end' >
          {pathname === '/' && <Welcome />}
          <LoginModal userSelected={userSelected}/>
          <Button 
            variant='default'
            className='nav_btn_style' >
              <Link  
                to={prevPage}
                className={ 'nav_link_style' + (hidePrevBtn ? ' btn_dissapear' : '')}
                onClick={()=>{setTimeout(()=>{
                  setSigning(false)
                }, 1000)}}>{`<`}</Link>
          </Button>
        </div>
        <div className='next_btn_container_style d-flex align-items-end' >
          <Button 
            variant='default'
            className='nav_btn_style' >
              <Link 
                to={nextPage} 
                className={'nav_link_style' + (hideNextBtn ? ' btn_dissapear' : '')}>{`>`}</Link>
          </Button>
        </div>
        <Outlet />
    </>
  )
}

export default NavBtn