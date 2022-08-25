import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import MyBookPage from './MyBookPage';
import './MyBook.css';

function MyBook() {
    const componentRef = useRef();
  return (
    <div className='d-flex flex-column myBook_container'>
        
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