import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { NavigationContext } from '../../contexts/NavigationContext';
import { Outlet, Link } from "react-router-dom";
import Welcome from '../Welcome/Welcome';
import LoginModal from './LoginModal';
import Button from 'react-bootstrap/Button';
import './NavBtn.css';

function NavBtn() {
  const { userSelected } = useContext( UserContext );
  const {hideNextBtn, hidePrevBtn, nextPage, prevPage, pathname} = useContext( NavigationContext );

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
                className={ 
                  'nav_link_style' + (hidePrevBtn ? ' btn_dissapear' : '')
                }
                onClick={
                  console.log('on ', pathname, 'going to ', prevPage)
                }>{`<`}</Link>
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