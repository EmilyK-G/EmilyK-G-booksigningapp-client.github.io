import { useUserContext } from '../../Hooks/useUserContextHook';
import { motion } from 'framer-motion';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './Users.css';

function Users() {
  const { setUserSelected, usersArr, loadingUserData } = useUserContext();

  function handleListItemClick(user) {
    setUserSelected(user)
  }
  return (
    <motion.div 
      initial= {{opacity: 0, x:100}}
      animate= {{opacity: 1, x: 0}}
      exit= {{opacity:0, x:100}}
      transition={{ duration: 0.2 }}>
        {loadingUserData 
          ? <LoadingSpinner loadingPage={'users'}/>
          : <div className="d-flex flex-column justify-content-center md_users_container">
          <header className='users_header align-self-center'>
            <h1 className='users_title'>Who Are You?</h1>
          </header>
          <hr className="mb-4 users_separator"></hr>
          <ul className='users_list d-flex p-2'>
            {usersArr.length > 0 ? usersArr.map((user)=>{
              return <li key={user._id} 
                        className='users_list_item' 
                        style={{backgroundImage: `url(${user.img})`}} 
                        onClick={()=>handleListItemClick(user)}></li>   
            }) : <div>No users in this class</div>}
          </ul>
        </div>}
    </motion.div>
  )
}

export default Users