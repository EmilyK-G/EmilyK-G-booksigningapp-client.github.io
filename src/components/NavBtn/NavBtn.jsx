import { useUserContext } from '../../Hooks/useUserContextHook';
import Welcome from '../Welcome/Welcome';
import LoginModal from './LoginModal';
import MyButton from './MyButton';
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './NavBtn.css';


function NavBtn() {
  const { userSelected, user } = useUserContext();

  const location = useLocation();
  const pathname = location.pathname;

  const showPrev = pathname === '/users' || pathname === '/books';
  const showNext = pathname === '/' || pathname === '/dashboard';

  
  return (
      <>  
          {pathname === '/' && <Welcome />}
          <LoginModal userSelected={userSelected}/>
          <div className='d-flex justify-content-between my_btn_div'>
              <MyButton linkTo={!user ? '/' : 'dashboard'} sign={showPrev ? '<' : ''} className={'nav_link_style'}/>
              <MyButton linkTo={!user ? '/users' : '/books'} sign={showNext ? '>' : ''} className={'nav_link_style'}/>
          </div>
          <Outlet />
      </>
  )
}

export default NavBtn