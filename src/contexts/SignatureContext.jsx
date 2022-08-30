import { useState, createContext } from 'react';

const SignatureContext = createContext();

const SignatureContextProvider = ({children})=> {
    const [signing, setSigning] = useState({});
    const [booksSigned, setBooksSigned] = useState(0);

    return (
        <SignatureContext.Provider value={{signing, setSigning, booksSigned, setBooksSigned}}>
            {children}
        </SignatureContext.Provider>
        )
}

export {SignatureContextProvider, SignatureContext};