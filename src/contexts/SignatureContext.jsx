import { useState, createContext } from 'react';

const SignatureContext = createContext();

const SignatureContextProvider = ({children})=> {
    const [signing, setSigning] = useState({});
    const [booksSigned, setBooksSigned] = useState([]);

    const messagesArr = [
        {
            message: "Hope to see you soon!",
            recipient: "Perry",
            recipient_id: "1",
            sender: "Peter Panda",
            sender_id: "2",
            sent_date: "Sep 30th, 2022",
            signature: "Peter el panda"
        },
        {
            message: "Nice to be with you in class!!",
            recipient: "Herman",
            recipient_id: "3",
            sender: "Peter Panda",
            sender_id: "2",
            sent_date: "Sep 30th, 2022",
            signature: "Peter el panda"
        },
        {
            message: "Have a safe trip home!",
            recipient: "Newton",
            recipient_id: "5",
            sender: "Peter Panda",
            sender_id: "2",
            sent_date: "Sep 30th, 2022",
            signature: "Peter el panda"
        },
        {
            message: "Take care of Issa for me!",
            recipient: "Pinky",
            recipient_id: "4",
            sender: "Peter Panda",
            sender_id: "2",
            sent_date: "Sep 30th, 2022",
            signature: "Peter el panda"
        },
        {
            message: "You rock Peter! See you at Doofs!",
            recipient: "Peter",
            recipient_id: "2",
            sender: "Perry Ornitorrinco",
            sender_id: "1",
            sent_date: "Sep 30th, 2022",
            signature: "Perry el ornitorrinco"
        },
        {
            message: "See you at the slider dude!",
            recipient: "Herman",
            recipient_id: "3",
            sender: "Perry Ornitorrinco",
            sender_id: "1",
            sent_date: "Sep 30th, 2022",
            signature: "Perry el ornitorrinco"
        },
        {
            message: "Nice to have you here neighbor!",
            recipient: "Pinky",
            recipient_id: "4",
            sender: "Perry Ornitorrinco",
            sender_id: "1",
            sent_date: "Sep 30th, 2022",
            signature: "Perry el ornitorrinco"
        },
        {
            message: "See you on vacations Newton!",
            recipient: "Newton",
            recipient_id: "5",
            sender: "Perry Ornitorrinco",
            sender_id: "1",
            sent_date: "Sep 30th, 2022",
            signature: "Perry el ornitorrinco"
        },
        {
            message: "See you at the slider pal!",
            recipient: "Perry",
            recipient_id: "1",
            sender: "Herman Erizo",
            sender_id: "3",
            sent_date: "Sep 30th, 2022",
            signature: "Herman el erizo"
        },
        {
            message: "Good punch bro!",
            recipient: "Peter",
            recipient_id: "2",
            sender: "Herman Erizo",
            sender_id: "3",
            sent_date: "Sep 30th, 2022",
            signature: "Herman el erizo"
        },
        {
            message: "You'll bring the tacos next time!",
            recipient: "Pinky",
            recipient_id: "4",
            sender: "Herman Erizo",
            sender_id: "3",
            sent_date: "Sep 30th, 2022",
            signature: "Herman el erizo"
        },
        {
            message: "I'll work out every day to be like you!",
            recipient: "Newton",
            recipient_id: "5",
            sender: "Herman Erizo",
            sender_id: "3",
            sent_date: "Sep 30th, 2022",
            signature: "Herman el erizo"
        },
        {
            message: "See you later pal! Say hi to Phineas from Issa:)",
            recipient: "Perry",
            recipient_id: "1",
            sender: "Pinky Chihuahua",
            sender_id: "4",
            sent_date: "Sep 30th, 2022",
            signature: "Pinky el chihuahua"
        }, 
        {
            message: "Bye Peter! see you next round...",
            recipient: "Peter",
            recipient_id: "2",
            sender: "Pinky Chihuahua",
            sender_id: "4",
            sent_date: "Sep 30th, 2022",
            signature: "Pinky el chihuahua"
        },
        {
            message: "Take care, Herman! (even though not necessary to even be so conscious about it)",
            recipient: "Herman",
            recipient_id: "3",
            sender: "Pinky Chihuahua",
            sender_id: "4",
            sent_date: "Sep 30th, 2022",
            signature: "Pinky el chihuahua"
        },
        {
            message: "I'll bring tacos next time bro!",
            recipient: "Newton",
            recipient_id: "5",
            sender: "Pinky Chihuahua",
            sender_id: "4",
            sent_date: "Sep 30th, 2022",
            signature: "Pinky el chihuahua"
        },
        {
            message: "Dear Perry el Ornitorrinco, it has been a pleasure to meet you. I'll see you next time.\nSincerely, ",
            recipient: "Perry",
            recipient_id: "1",
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

    }

    return (
        <SignatureContext.Provider value={{signing, setSigning, booksSigned, setBooksSigned, messagesArr, mySignaturesCount}}>
            {children}
        </SignatureContext.Provider>
        )
}

export {SignatureContextProvider, SignatureContext};