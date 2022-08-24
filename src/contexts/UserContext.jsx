import { createContext, useState } from 'react';
import duckPic from '../images/duck.jpg';
import pandaPic from '../images/panda.png';
import erizoPic from '../images/erizo.jpg';


const UserContext = createContext();

const ContextProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const usersArr = [
    {
      Name:"Perry",
      PIN:"5678",
      Class_month:"July",
      Class_year:"2022",
      Picture: `${duckPic}`
    },
    {
      Name:"Peter",
      PIN:"1234",
      Class_month:"July",
      Class_year:"2022",
      Picture: `${pandaPic}`
    },
    {
      Name:"Herman",
      PIN:"4321",
      Class_month:"July",
      Class_year:"2022",
      Picture: `${erizoPic}`
    }
  ]
  return(
    <UserContext.Provider value={{usersArr, loggedIn, setLoggedIn}}>
      {children}
    </UserContext.Provider>
  )
}
 export {ContextProvider, UserContext};