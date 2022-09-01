import React, { useContext, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import MyBookPage from './MyBookPage';
import { UserContext } from '../../contexts/UserContext';
import { SignatureContext } from '../../contexts/SignatureContext';
import './MyBook.css';
import { useEffect } from 'react';

function MyBook() {
    const {loggedUser} = useContext(UserContext);
    const {myBookPage, myMessages} = useContext(SignatureContext);
    const componentRef = useRef();

    useEffect(()=>{
      myMessages(loggedUser.Id)
    },[loggedUser.Id])

  return (
    <div className='d-flex flex-column mt-5 mb-3 myBook_container'>
        <h1 className='myBook_title'>My Book <small className="text-muted">-signatures</small></h1>
        <MyBookPage ref={componentRef} myBookPage={myBookPage}/>
        <ReactToPrint
          trigger={() => {
            return <button type='submit' className='btn btn-secondary m-4 align-self-center myBook_print_btn'>Print!</button>;
          }}
          content={() => componentRef.current}
        />
    </div>
  )
}

export default MyBook