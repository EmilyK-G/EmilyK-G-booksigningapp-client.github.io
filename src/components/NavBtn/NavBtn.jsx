import React, { useContext } from 'react';
import { useUserContext } from '../../Hooks/UserContextHook';
import { NavigationContext } from '../../contexts/NavigationContext';
import Welcome from '../Welcome/Welcome';
import LoginModal from './LoginModal';
import MyButton from './MyButton';
import './NavBtn.css';

function NavBtn() {
  const { userSelected } = useUserContext();
  const {nextPage, prevPage, pathname} = useContext( NavigationContext );
  
  return (
    <div className='d-flex flex-column align-items-center'>  
        {pathname === '/' && <Welcome />}
        <LoginModal userSelected={userSelected}/>
        <div className='d-flex justify-content-between my_btn_div'>
            <MyButton linkTo={prevPage} sign={'<'}/>
            <MyButton linkTo={nextPage} sign={'>'}/>
        </div>
    </div>
  )
}

export default NavBtn