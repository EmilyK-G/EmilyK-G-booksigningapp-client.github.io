import MyButton from "../../components/NavBtn/MyButton";
import { Outlet } from "react-router-dom";
import './loginPage.css'

function LoginPage() {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center loginPage'>
        <p>You must be logged in</p>
        <MyButton linkTo={'/users'} sign={`Let's login`}/>
        <Outlet />
    </div>
  )
}

export default LoginPage