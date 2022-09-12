import { useEffect, useState, createContext, useReducer } from 'react';

const SignatureContext = createContext();


const signaturesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SIGNATURES':
            return {
                signatures: action.payload
            }
        case 'CREATE_SIGNATURE':
            return {
                signatures: [action.payload, ...state.signatures]
            }
        default:
            return state
    }
}

const SignatureContextProvider = ({children})=> {
    const [signing, setSigning] = useState({});
    const [booksSigned, setBooksSigned] = useState([]);
    const [myBookPage, setMyBookPage] = useState([]);
    const [messagesArr, setMessagesArr] = useState([]);
    const [state, dispatch] = useReducer(signaturesReducer, {
        workouts: null
    });

    useEffect(()=>{
        const fetchSignatures = async() => {
            const response = await fetch('/api/signatures')
            const json = await response.json()

            if (response.ok) {
                setMessagesArr(json)
            }
            console.log(json)
        }
        console.log('this is one fetch')
        fetchSignatures()
    },[])

    function mySignaturesCount(myId){
        const mySignaturesArr = []
        messagesArr.forEach(mes=>{
            if (mes.sender_id === myId){
                mySignaturesArr.push(mes)
            }
        })
        setBooksSigned(mySignaturesArr)
        console.log(mySignaturesArr)
    }
    
    function myMessages(myId){
        const myMessagesArr = []
        messagesArr.forEach(mes=>{
            if (mes.recipient_id === myId){
                myMessagesArr.push(mes)
            }
        })
        setMyBookPage(myMessagesArr)
        console.log(myMessagesArr)
    }

    return (
        <SignatureContext.Provider value={{signing, setSigning, booksSigned, setBooksSigned, messagesArr, mySignaturesCount, myBookPage, myMessages, ...state, dispatch}}>
            {children}
        </SignatureContext.Provider>
        )
}

export {SignatureContextProvider, SignatureContext, signaturesReducer};