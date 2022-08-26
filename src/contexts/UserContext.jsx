import { createContext, useState } from 'react';
import platypusPic from '../images/platypus.jpg';
import pandaPic from '../images/panda.png';
import erizoPic from '../images/erizo.jpg';
import chihuahuaPic from '../images/chihuahua.jpg';
import ÑuPic from '../images/Ñu.jpg';
import { useEffect } from 'react';


const UserContext = createContext();

const ContextProvider = ({children}) => {
  const [loggedUser, setLoggedUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [userSelected, setUserSelected] = useState({});

  useEffect(()=>{
    if(!loggedIn){
      setLoggedUser({})
    } else {
      setUserSelected({})
    }
  }, [loggedIn])
  
  const usersArr = [
    {
      Id:"1",
      Name:"Perry",
      LastName:"Ornitorrinco",
      PIN:"5678",
      Class_month:"July",
      Class_year:"2022",
      Picture: `${platypusPic}`
    },
    {
      Id:"2",
      Name:"Peter",
      LastName:"Panda",
      PIN:"1234",
      Class_month:"July",
      Class_year:"2022",
      Picture: `${pandaPic}`
    },
    {
      Id:"3",
      Name:"Herman",
      LastName:"Erizo",
      PIN:"4321",
      Class_month:"July",
      Class_year:"2022",
      Picture: `${erizoPic}`
    },
    {
      Id:"4",
      Name:"Pinky",
      LastName:"Chihuahua",
      PIN:"1999",
      Class_month:"July",
      Class_year:"2022",
      Picture: `${chihuahuaPic}`
    },
    {
      Id:"5",
      Name:"Newton",
      LastName:"Ñu",
      PIN:"1998",
      Class_month:"July",
      Class_year:"2022",
      Picture: `${ÑuPic}`
    }
  ]
  return(
    <UserContext.Provider value={{usersArr, loggedIn, setLoggedIn, loggedUser, setLoggedUser, userSelected, setUserSelected}}>
      {children}
    </UserContext.Provider>
  )
}
 export {ContextProvider, UserContext};