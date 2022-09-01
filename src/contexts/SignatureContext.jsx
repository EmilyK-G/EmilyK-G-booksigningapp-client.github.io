import { useState, createContext } from 'react';

const SignatureContext = createContext();

const SignatureContextProvider = ({children})=> {
    const [signing, setSigning] = useState({});
    const [booksSigned, setBooksSigned] = useState([]);
    const [myBookPage, setMyBookPage] = useState([]);

    const messagesArr = [
        {
            message_id: "1",
            message: "Hope to see you soon!",
            recipient: "Perry",
            recipient_id: "1",
            sender: "Peter Panda",
            sender_id: "2",
            sent_date: "Sep 30th, 2022",
            signature: "Peter el panda"
        },
        {
            message_id: "2",
            message: "Nice to be with you in class!!",
            recipient: "Herman",
            recipient_id: "3",
            sender: "Peter Panda",
            sender_id: "2",
            sent_date: "Sep 30th, 2022",
            signature: "Peter el panda"
        },
        {
            message_id: "3",
            message: "Have a safe trip home!",
            recipient: "Newton",
            recipient_id: "5",
            sender: "Peter Panda",
            sender_id: "2",
            sent_date: "Sep 30th, 2022",
            signature: "Peter el panda"
        },
        {
            message_id: "4",
            message: "Take care of Issa for me!",
            recipient: "Pinky",
            recipient_id: "4",
            sender: "Peter Panda",
            sender_id: "2",
            sent_date: "Sep 30th, 2022",
            signature: "Peter el panda"
        },
        {
            message_id: "5",
            message: "You rock Peter! See you at Doofs!",
            recipient: "Peter",
            recipient_id: "2",
            sender: "Perry Ornitorrinco",
            sender_id: "1",
            sent_date: "Sep 30th, 2022",
            signature: "Perry el ornitorrinco"
        },
        {
            message_id: "6",
            message: "See you at the slider dude!",
            recipient: "Herman",
            recipient_id: "3",
            sender: "Perry Ornitorrinco",
            sender_id: "1",
            sent_date: "Sep 30th, 2022",
            signature: "Perry el ornitorrinco"
        },
        {
            message_id: "7",
            message: "Nice to have you here neighbor!",
            recipient: "Pinky",
            recipient_id: "4",
            sender: "Perry Ornitorrinco",
            sender_id: "1",
            sent_date: "Sep 30th, 2022",
            signature: "Perry el ornitorrinco"
        },
        {
            message_id: "8",
            message: "See you on vacations Newton!",
            recipient: "Newton",
            recipient_id: "5",
            sender: "Perry Ornitorrinco",
            sender_id: "1",
            sent_date: "Sep 30th, 2022",
            signature: "Perry el ornitorrinco"
        },
        {
            message_id: "9",
            message: "See you at the slider pal!",
            recipient: "Perry",
            recipient_id: "1",
            sender: "Herman Erizo",
            sender_id: "3",
            sent_date: "Sep 30th, 2022",
            signature: "Herman el erizo"
        },
        {
            message_id: "10",
            message: "Good punch bro!",
            recipient: "Peter",
            recipient_id: "2",
            sender: "Herman Erizo",
            sender_id: "3",
            sent_date: "Sep 30th, 2022",
            signature: "Herman el erizo"
        },
        {
            message_id: "11",
            message: "You'll bring the tacos next time!",
            recipient: "Pinky",
            recipient_id: "4",
            sender: "Herman Erizo",
            sender_id: "3",
            sent_date: "Sep 30th, 2022",
            signature: "Herman el erizo"
        },
        {
            message_id: "12",
            message: "I'll work out every day to be like you!",
            recipient: "Newton",
            recipient_id: "5",
            sender: "Herman Erizo",
            sender_id: "3",
            sent_date: "Sep 30th, 2022",
            signature: "Herman el erizo"
        },
        {
            message_id: "13",
            message: "See you later pal! Say hi to Phineas from Issa:)",
            recipient: "Perry",
            recipient_id: "1",
            sender: "Pinky Chihuahua",
            sender_id: "4",
            sent_date: "Sep 30th, 2022",
            signature: "Pinky el chihuahua"
        }, 
        {
            message_id: "14",
            message: "Bye Peter! see you next round...",
            recipient: "Peter",
            recipient_id: "2",
            sender: "Pinky Chihuahua",
            sender_id: "4",
            sent_date: "Sep 30th, 2022",
            signature: "Pinky el chihuahua"
        },
        {
            message_id: "15",
            message: "Take care, Herman! (even though not necessary to even be so conscious about it)",
            recipient: "Herman",
            recipient_id: "3",
            sender: "Pinky Chihuahua",
            sender_id: "4",
            sent_date: "Sep 30th, 2022",
            signature: "Pinky el chihuahua"
        },
        {
            message_id: "16",
            message: "I'll bring tacos next time bro!",
            recipient: "Newton",
            recipient_id: "5",
            sender: "Pinky Chihuahua",
            sender_id: "4",
            sent_date: "Sep 30th, 2022",
            signature: "Pinky el chihuahua"
        },
        {
            message_id: "17",
            message: "Dear Perry el Ornitorrinco, it has been a pleasure to meet you. I'll see you next time.\nSincerely, ",
            recipient: "Perry",
            recipient_id: "1",
            sender: "Newton Ñu",
            sender_id: "5",
            sent_date: "Sep 30th, 2022",
            signature: "Newton el ñu"
        },
        {
            message: "Dear Herman, \nIt was a great pleasure to meet you. Your spikes are what some may call 'the bomb'. I hope to see you again soon.\nSincerely,",
            message_id: "18",
            recipient: "Herman Erizo",
            recipient_id: "3",
            sender: "Newton Ñu",
            sender_id: "5",
            sent_date: "Sep 30th, 2022",
            signature: "Newton el ñu"
        }
    ];

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