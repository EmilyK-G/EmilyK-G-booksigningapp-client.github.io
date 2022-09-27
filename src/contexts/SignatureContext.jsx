import { useState, createContext, useReducer } from 'react';

const SignatureContext = createContext();


const signaturesReducer = (mssgState, action) => {
    switch (action.type) {
        case 'SET_SIGNATURES':
            return {
                signatures: action.payload
            }
        case 'CREATE_SIGNATURE':
            return {
                signatures: [action.payload, ...mssgState.signatures]
            }
        case 'DELETE_SIGNATURE':
            return {
                signatures: mssgState.signatures.filter((s) => s._id !== action.payload._id)
            }
        default:
            return mssgState
    }
}


const SignatureContextProvider = ({children})=> {

    const [signing, setSigning] = useState({});
    const [mssgState, dispatch] = useReducer(signaturesReducer, {
        signatures: null
    });

    return (
        <SignatureContext.Provider value={{signing, setSigning, ...mssgState, dispatch}}>
            {children}
        </SignatureContext.Provider>
        )
}

export {SignatureContextProvider, SignatureContext, signaturesReducer};