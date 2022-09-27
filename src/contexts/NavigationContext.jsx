import { useState, useEffect, createContext } from 'react';
import { useUserContext } from '../Hooks/useUserContextHook';
import { useLocation } from "react-router-dom";

const NavigationContext = createContext();

const NavigationContextProvider = ({children})=> {
    const { user } = useUserContext();
    const [nextPage, setNextPage] = useState('/users');
    const [prevPage, setPrevPage] = useState('/');
    const [exitBtn, setExitBtn] = useState(false)

    const location = useLocation();
    const pathname = location.pathname;
    
    useEffect(()=>{
        const setPages = async()=>{
            switch(pathname){
                case '/':
                    setNextPage('/users')
                    break;

                case '/users':
                    setPrevPage('/')
                    break;

                case '/dashboard':
                    setNextPage('/books')
                    break;

                case '/books':
                    setPrevPage('/dashboard')
                    break;
                
                default:
                    setExitBtn(true)
            }
        }
        setPages()
    },[pathname])
    return (
        <NavigationContext.Provider value={{nextPage, prevPage, pathname}}>
            {children}
        </NavigationContext.Provider>
        )
}

export {NavigationContextProvider, NavigationContext};