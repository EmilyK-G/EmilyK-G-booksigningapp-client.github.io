import { useUserContext } from '../../Hooks/useUserContextHook';
import Welcome from '../Welcome/Welcome';
import LoginModal from './LoginModal';
import MyButton from './MyButton';
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './NavBtn.css';
import { useLogin } from '../../Hooks/useLoginHook';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useEffect, useState } from 'react';


function NavBtn() {
  const { userSelected, user } = useUserContext();
  const {isLoading} = useLogin();
  const [closeModal, setCloseModal] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  const showPrev = pathname === '/users' || pathname === '/books';
  const showNext = pathname === '/' || pathname === '/dashboard';

  useEffect(()=>{
    setTimeout(() => {
        setCloseModal(false);
    }, 1000);

    user && setTimeout(() => {
                setCloseModal(true)
            }, 1000);
  }, [closeModal])
  
  return (
      <>  
          <Welcome pathname={pathname}/>
          {isLoading 
            ? <LoadingSpinner loadingPage={'your info...'} closeModal={closeModal} setCloseModal={setCloseModal}/>
            : <>
                <LoginModal userSelected={userSelected}/>
                <div className='d-flex justify-content-between my_btn_div'>
                    <MyButton linkTo={!user ? '/' : 'dashboard'} sign={showPrev ? '<' : ''} className={'nav_link_style'}/>
                    <MyButton linkTo={!user ? '/users' : '/books'} sign={showNext ? '>' : ''} className={'nav_link_style'}/>
                </div>
             </>}
          <Outlet />
      </>
  )
}

export default NavBtn