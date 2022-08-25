import { createContext, useState } from 'react';
import duckPic from '../images/duck.jpg';
import pandaPic from '../images/panda.png';
import erizoPic from '../images/erizo.jpg';


const UserContext = createContext();

const ContextProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const usersArr = [
    {
      Id:"1",
      Name:"Perry",
      PIN:"5678",
      Class_month:"July",
      Class_year:"2022",
      Picture: `${duckPic}`
    },
    {
      Id:"2",
      Name:"Peter",
      PIN:"1234",
      Class_month:"July",
      Class_year:"2022",
      Picture: `${pandaPic}`
    },
    {
      Id:"3",
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