import { createContext, useState, useEffect, useReducer } from 'react';

export const UserContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      const userObj = {...action.payload.user, token: action.payload.token}
      return { user: userObj }
    case 'LOGOUT':
      return { user: null }
    case 'UPDATE':
      return { user: action.payload}
    default: 
      return state
  }
}

export const UserContextProvider = ({children}) => {
  const [userSelected, setUserSelected] = useState([]);
  
  const [usersArr, setUsersArr] = useState([]);
  const [loadingUserData, setLoadingUserData] = useState(false);

  const [state, dispatch] = useReducer(authReducer, {
    user: null
  });
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      dispatch({ type: 'LOGIN', payload: user})
    }
    console.log(user)
  },[])

  useEffect(()=>{
    const fetchUsers = async() => {
      
      setLoadingUserData(true);

      try {
        const response = await fetch('https://booksigning.onrender.com/api/user', {
          method: 'GET',
          mode: 'cors'
        })

        const json = await response.json()

        if (response.ok) {
            setUsersArr(json)
            setLoadingUserData(false);
            console.log('SUCCESS')
        }
        
        if(!response.ok) {
          setLoadingUserData(false);
        }
      } catch (error) {
        setLoadingUserData(false)
        console.log(error)
      }
      
      
    }

    fetchUsers()
    
  }, [])

  return (
    <UserContext.Provider value={{...state, dispatch, userSelected, setUserSelected, usersArr, setUsersArr, loadingUserData, setLoadingUserData}}>
       {children}
    </UserContext.Provider>
  )
}
