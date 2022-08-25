import React, { useContext, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import MyBookPage from './MyBookPage';
import { UserContext } from '../../contexts/UserContext';
import './MyBook.css';

function MyBook() {
    const {loggedUser} = useContext(UserContext);
    const componentRef = useRef();
  return (
    <div className='d-flex flex-column mt-5 mb-3 myBook_container'>
        <h1 className='myBook_title'>{loggedUser.Name}<small className="text-muted">'s Book</small></h1>
        <MyBookPage ref={componentRef}/>
        
        <ReactToPrint
          trigger={() => {
            return <button type='submit' className='btn btn-secondary'>Print this out!</button>;
          }}
          content={() => componentRef.current}
        />
    </div>
  )
}

export default MyBook