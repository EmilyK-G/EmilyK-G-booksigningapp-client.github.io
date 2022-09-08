import { useState, useEffect, createContext, useContext } from 'react';
import { SignatureContext } from './SignatureContext';
import { useLocation } from "react-router-dom";

const NavigationContext = createContext();

const NavigationContextProvider = ({children})=> {
    const { signing, setSigning } = useContext( SignatureContext );
    const [nextPage, setNextPage] = useState('/');
    const [prevPage, setPrevPage] = useState('/');
    const [hidePrevBtn, setHidePrevBtn] = useState(false);
    const [hideNextBtn, setHideNextBtn] = useState(false);
    
    const location = useLocation();
    const pathname = location.pathname;
    const onPalsBook = signing.Name;
    
    useEffect(() => {
        if(pathname === '/'){
            setHidePrevBtn(true);
            setHideNextBtn(false);
            setNextPage('/users')
        }
        if(pathname === '/users' || pathname === '/dashboard'){
            setHidePrevBtn(false);
            setHideNextBtn(true);
            setNextPage('/books');
            setPrevPage('/')
        }
        if(pathname === '/dashboard'){
            setHidePrevBtn(true);
            setHideNextBtn(false);
            setNextPage('/books')
        }
        if(pathname === '/books'){
            setTimeout(()=>{
            setSigning({}) //HERE
            }, 300)
            setHideNextBtn(true);
            setHidePrevBtn(false);
            setPrevPage('/dashboard');
        }
        if(pathname === '/my-book'){
            setPrevPage('/books');
        }
        if(onPalsBook) {
            setPrevPage('/books');
        }

    }, [pathname, setSigning, onPalsBook])

    return (
        <NavigationContext.Provider value={{hideNextBtn, hidePrevBtn, nextPage, prevPage, pathname}}>
            {children}
        </NavigationContext.Provider>
        )
}

export {NavigationContextProvider, NavigationContext};