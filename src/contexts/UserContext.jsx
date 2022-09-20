import { createContext, useState, useEffect, useReducer } from 'react';
import platypusPic from '../images/platypus.jpg';
import pandaPic from '../images/panda.png';
import erizoPic from '../images/erizo.jpg';
import chihuahuaPic from '../images/chihuahua.jpg';
import ÑuPic from '../images/Ñu.jpg';


const UserContext = createContext();

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

const UserContextProvider = ({children}) => {
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
    <UserContext.Provider value={{...userState, dispatch}}>
       {children}
    </UserContext.Provider>
  )








  // const [loggedUser, setLoggedUser] = useState({});
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [userSelected, setUserSelected] = useState({});

  // useEffect(()=>{
  //   if(!loggedIn){
  //     setLoggedUser({})
  //   } else {
  //     setUserSelected({})
  //   }
  // }, [loggedIn])
  
  // const usersArr = [
  //   {
  //     Id:"1",
  //     Name:"Perry",
  //     LastName:"Ornitorrinco",
  //     PIN:"5678",
  //     Class_month:"July",
  //     Class_year:"2022",
  //     Picture: `${platypusPic}`,
  //     Signature: "Perry el ornitorrinco"
  //   },
  //   {
  //     Id:"2",
  //     Name:"Peter",
  //     LastName:"Panda",
  //     PIN:"1234",
  //     Class_month:"July",
  //     Class_year:"2022",
  //     Picture: `${pandaPic}`,
  //     Signature: "Peter el panda"
  //   },
  //   {
  //     Id:"3",
  //     Name:"Herman",
  //     LastName:"Erizo",
  //     PIN:"4321",
  //     Class_month:"July",
  //     Class_year:"2022",
  //     Picture: `${erizoPic}`,
  //     Signature: "Herman el erizo"
  //   },
  //   {
  //     Id:"4",
  //     Name:"Pinky",
  //     LastName:"Chihuahua",
  //     PIN:"1999",
  //     Class_month:"July",
  //     Class_year:"2022",
  //     Picture: `${chihuahuaPic}`,
  //     Signature: "Pinky el chihuahua"
  //   },
  //   {
  //     Id:"5",
  //     Name:"Newton",
  //     LastName:"Ñu",
  //     PIN:"1998",
  //     Class_month:"July",
  //     Class_year:"2022",
  //     Picture: `${ÑuPic}`,
  //     Signature: "Newton el ñu"
  //   }
  // ]
  // return(
  //   <UserContext.Provider value={{usersArr, loggedIn, setLoggedIn, loggedUser, setLoggedUser, userSelected, setUserSelected}}>
  //     {children}
  //   </UserContext.Provider>
  // )
}
 export {UserContextProvider, UserContext, authReducer};