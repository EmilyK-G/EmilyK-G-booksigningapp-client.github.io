import { useUserContext } from '../../Hooks/UserContextHook';
import { motion } from 'framer-motion';
import './Users.css';

function Users() {
  const { setUserSelected, usersArr } = useUserContext();

  function handleListItemClick(user) {
    console.log(usersArr, user)
    setUserSelected(user)
  }
  return (
    <motion.div 
      initial= {{opacity: 0, x:100}}
      animate= {{opacity: 1, x: 0}}
      exit= {{opacity:0, x:100}}
      transition={{ duration: 0.2 }}>
        <div className="d-flex flex-column justify-content-center">
          <header className='users_header align-self-center'>
            <h1 className='users_title'>Who Are You?</h1>
          </header>
          <hr className="mb-4 users_separator"></hr>
          <ul className='users_list d-flex p-2'>
            {usersArr.map((user)=>{
              return <li key={user._id} 
                        className='users_list_item' 
                        style={{backgroundImage: `url(${user.img})`}} 
                        onClick={()=>handleListItemClick(user)}></li>   
            })}
          </ul>
        </div>
    </motion.div>
  )
}

export default Users