import { useState, createContext, useReducer } from 'react';

const SignatureContext = createContext();


const signaturesReducer = (mesState, action) => {
    switch (action.type) {
        case 'SET_SIGNATURES':
            return {
                signatures: action.payload
            }
        case 'CREATE_SIGNATURE':
            return {
                signatures: [action.payload, ...mesState.signatures]
            }
        case 'DELETE_SIGNATURE':
            return {
                signatures: mesState.signatures.filter((s) => s._id !== action.payload._id)
            }
        default:
            return (mesState)
    }
}


const myMessagesReducer = (myMesState, action)=>{
    switch (action.type) {
        case 'SET_MESSAGES':
            return {
                messages: action.payload
            }
        case 'DELETE_MESSAGES':
            return {
                messages: myMesState.messages.filter((s) => s._id !== action.payload._id)
            }
        default:
            return myMesState
    }
}


const SignatureContextProvider = ({children})=> {

    const [signing, setSigning] = useState({});
    const [mesState, dispatch] = useReducer(signaturesReducer, {
        signatures: null
    });
    const [myMesState, myMesDispatch] = useReducer(myMessagesReducer, {
        messages: null
    });

    return (
        <SignatureContext.Provider value={{signing, setSigning, ...mesState, dispatch, ...myMesState, myMesDispatch}}>
            {children}
        </SignatureContext.Provider>
        )
}

export {SignatureContextProvider, SignatureContext, signaturesReducer};