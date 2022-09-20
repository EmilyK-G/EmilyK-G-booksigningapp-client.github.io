import { createContext, useState, useEffect, useReducer } from 'react';

export const UserContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default: 
      return state
  }
}

export const UserContextProvider = ({children}) => {
  const [userSelected, setUserSelected] = useState([]);
  
  const [usersArr, setUsersArr] = useState([]);

  const [userState, dispatch] = useReducer(authReducer, {
    user: null
  })

  

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      dispatch({ type: 'LOGIN', payload: user})
    }
  },[])

  console.log('UserContext state: ', userState)

  return (
    <UserContext.Provider value={{...userState, dispatch, userSelected, setUserSelected, usersArr, setUsersArr}}>
       {children}
    </UserContext.Provider>
  )
}