import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';
import { Outlet, Link } from "react-router-dom";
import Welcome from '../Welcome/Welcome';
import UserWelcome from '../UserWelcome/UserWelcome';
import Button from 'react-bootstrap/Button';
import './NavBtn.css';

function NavBtn() {
  const {loggedIn} = useContext(UserContext);
  const [nextPage, setNextPage] = useState('/');
  const [prevPage, setPrevPage] = useState('/');
  const [clicked, setClicked] = useState(0);

  const location = useLocation();
  const pathname = location.pathname;
  
  useEffect(() => {
    if(pathname === '/'){
      loggedIn ? setNextPage('/my-book') : setNextPage('/users')
    }
    if(pathname === '/users' || pathname === '/my-book'){
      setNextPage('/books')
      setPrevPage('/')
    }
    if(pathname === '/books'){
      setPrevPage('/my-book')
    }
    console.log(pathname)
  }, [pathname, clicked, loggedIn])

  return (
    <>  
        <div className='prev_btn_container_style d-flex align-items-end' >
          {pathname === '/' ? !loggedIn ? <Welcome /> : <UserWelcome /> : null}
          <Button 
            variant='default'
            className='nav_btn_style' 
            onClick={()=>setClicked(clicked - 1)}>
              <Link  
                to={prevPage}
                className={ 'nav_link_style' + (pathname === '/' ? ' btn_dissapear' : '')}>{`<`}</Link>
          </Button>
        </div>
        <div className='next_btn_container_style d-flex align-items-end' >
          <Button 
            variant='default'
            className='nav_btn_style' 
            onClick={()=>setClicked(clicked + 1)}>
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