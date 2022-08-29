import { useState, createContext } from 'react';

const SignatureContext = createContext();

const SignatureContextProvider = ({children})=> {
    const [signing, setSigning] = useState({});

    return (
        <SignatureContext.Provider value={{signing, setSigning}}>
            {children}
        </SignatureContext.Provider>
        )
}

export {SignatureContextProvider, SignatureContext};