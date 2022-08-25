import React, { useRef } from 'react';
import MyBookPage from './MyBookPage';

function MyBook() {
    const componentRef = useRef();
  return (
    <div className='d-flex flex-wrap myBook_container'>
        <ReactToPrint
          trigger={() => {
            return <button type='submit' className='btn btn-secondary'>Print this out!</button>;
          }}
          content={() => componentRef}
        />
        <MyBookPage ref={el => (componentRef = el)} />
    </div>
  )
}

export default MyBook