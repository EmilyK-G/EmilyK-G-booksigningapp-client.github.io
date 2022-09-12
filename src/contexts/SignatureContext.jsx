import { useEffect, useState, createContext, useReducer } from 'react';

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
        default:
            return mssgState
    }
}


const SignatureContextProvider = ({children})=> {
    //Testing state
    const [getMessages, setGetMessages] = useState([]);

    const [signing, setSigning] = useState({});
    const [mssgState, dispatch] = useReducer(signaturesReducer, {
        signatures: null
    });

    useEffect(()=>{
        const fetchSignatures = async() => {
            const response = await fetch('/api/signatures')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_SIGNATURES', payload: json})
            }
        }
        console.log('this is one signatures fetch')
        fetchSignatures()
    },[])


    const getMySignatures = (myId, type) => {
        
        const myMessages = () => {
            const mySignaturesArr = []
            mssgState.signatures.forEach(mes=>{
                switch(type) {
                    case 'TO_ME':
                        if (mes.recipient_id === myId){
                            mySignaturesArr.push(mes)
                        }
                        break;

                    case 'FROM_ME':
                        if (mes.sender_id === myId){
                            mySignaturesArr.push(mes)
                        } 
                        break;

                    default: 
                        console.log('Default')
                    }
                
            })
            setGetMessages(mySignaturesArr)
        }
        return myMessages();
        }
    
    return (
        <SignatureContext.Provider value={{signing, setSigning, getMySignatures, ...mssgState, dispatch, getMessages}}>
            {children}
        </SignatureContext.Provider>
        )
}

export {SignatureContextProvider, SignatureContext, signaturesReducer};