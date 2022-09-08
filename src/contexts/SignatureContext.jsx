import { useEffect } from 'react';
import { useState, createContext } from 'react';

const SignatureContext = createContext();

const SignatureContextProvider = ({children})=> {
    const [signing, setSigning] = useState({});
    const [booksSigned, setBooksSigned] = useState([]);
    const [myBookPage, setMyBookPage] = useState([]);
    const [messagesArr, setMessagesArr] = useState([]);

    useEffect(()=>{
        const fetchSignatures = async() => {
            const response = await fetch('/api/signatures')
            const json = await response.json()

            if (response.ok) {
                setMessagesArr(json)
            }
            console.log(json)
        }

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
        <SignatureContext.Provider value={{signing, setSigning, booksSigned, setBooksSigned, messagesArr, mySignaturesCount, myBookPage, myMessages}}>
            {children}
        </SignatureContext.Provider>
        )
}

export {SignatureContextProvider, SignatureContext};