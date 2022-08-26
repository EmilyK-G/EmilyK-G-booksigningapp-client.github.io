import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';
import { Outlet, Link } from "react-router-dom";
import Welcome from '../Welcome/Welcome';
import UserWelcome from '../UserWelcome/UserWelcome';
import LoginModal from './LoginModal';
import Button from 'react-bootstrap/Button';
import './NavBtn.css';

function NavBtn() {
  const {loggedIn, userSelected} = useContext(UserContext);
  const [nextPage, setNextPage] = useState('/');
  const [prevPage, setPrevPage] = useState('/');

  const location = useLocation();
  const pathname = location.pathname;
  
  useEffect(() => {
    if(pathname === '/'){
      loggedIn ? setNextPage('/dashboard') : setNextPage('/users')
    }
    if(pathname === '/users' || pathname === '/dashboard'){
      setNextPage('/books')
      setPrevPage('/')
    }
    if(pathname === '/books'){
      setPrevPage('/dashboard')
    }
    console.log(pathname)
  }, [pathname, loggedIn])

 


  return (
    <>  
        <div className='prev_btn_container_style d-flex align-items-end' >
          {pathname === '/' ? !loggedIn ? <Welcome /> : <UserWelcome /> : null}
          <LoginModal userSelected={userSelected}/>
          <Button 
            variant='default'
            className='nav_btn_style' >
              <Link  
                to={prevPage}
                className={ 'nav_link_style' + (pathname === '/' ? ' btn_dissapear' : '') + (pathname === '/dashboard' ? ' btn_dissapear' : '' )}>{`<`}</Link>
          </Button>
        </div>
        <div className='next_btn_container_style d-flex align-items-end' >
          <Button 
            variant='default'
            className='nav_btn_style' >
              <Link 
                to={nextPage} 
                className={'nav_link_style' + (pathname === '/books' ? ' btn_dissapear' : pathname === '/users' && !loggedIn ? ' btn_dissapear' : '')}>{`>`}</Link>
          </Button>
        </div>
    
        <Outlet />
    </>
  )
}

export default NavBtn