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
                    case 'FROM_ME':
                        if (mes.sender_id === myId){
                            mySignaturesArr.push(mes)
                        }
                        const thisPal = [];

                        mySignaturesArr.forEach(mes => {
                            if(mes.recipient_id === signing.Id){
                                thisPal.push(mes)
                            }
                        })
                        setGetMessages(thisPal)

                        break;

                    case 'TO_ME':
                        if (mes.recipient_id === myId){
                            mySignaturesArr.push(mes)
                        }
                        setGetMessages(mySignaturesArr)
                        
                        break;

                    case 'ALL_FROM_ME':
                        if (mes.sender_id === myId){
                            mySignaturesArr.push(mes)
                        }
                        setGetMessages(mySignaturesArr)
                        
                        break;

                    default: 
                        setGetMessages(mySignaturesArr)
                    }
            })
        }

        console.log(getMessages, mssgState.signatures);
        
        return myMessages();
    }
    
    return (
        <SignatureContext.Provider value={{signing, setSigning, getMySignatures, ...mssgState, dispatch, getMessages}}>
            {children}
        </SignatureContext.Provider>
        )
}

export {SignatureContextProvider, SignatureContext, signaturesReducer};