import MyButton from "../../components/NavBtn/MyButton";
import { Outlet } from "react-router-dom";
import './loginPage.css'

function LoginPage() {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center loginPage'>
        <p>You are logged out</p>
        <p className="mb-4">{`Have a nice day:)`}</p>
        <MyButton linkTo={'/users'} sign={`Let's login`}/>
        <Outlet />
    </div>
  )
}

export default LoginPage