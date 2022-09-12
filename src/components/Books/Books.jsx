import React, { useContext, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';
import { useSignatureContext } from "../../Hooks/SignatureContextHook";
import { motion } from 'framer-motion';
import './Books.css';

function Books() {
  const {usersArr, loggedUser} = useContext(UserContext);
  const { setSigning, getMySignatures } = useSignatureContext();
  
  function handleBookClick (mate) {
    //The user they clicked becomes the 'signing' object from SignatureContext
    setSigning(mate);

    getMySignatures(loggedUser.Id, 'FROM_ME')
  }
  return (
    <motion.div 
      initial= {{opacity: 0, x:100}}
      animate= {{opacity: 1, x: 0}}
      exit= {{opacity:0, x:100}}
      transition={{ duration: 0.2 }}>
    <div className='d-flex flex-column justify-content-center'>
      <header className='book_header align-self-center'>
        <h1 className='books_title mb-0'>Books</h1>
      </header>
      <hr className="mb-4 books_separator"></hr>
      <ul className='book_list d-flex flex-wrap justify-content-between p-1'>
        {usersArr.map((book)=>{
          if(book.Id === loggedUser.Id){
            return <li key={loggedUser.Id} 
                    className='book_list_item d-flex align-items-center justify-content-between'
                    onClick={()=>{handleBookClick(book)}}>
                      <div 
                        className='span_img' 
                        style={{backgroundImage: `url(${book.Picture})`}}></div>
                      <Link to={'/my-book'}>My Book</Link>
                    </li>
          } else {
              return <li key={book.Id} 
              className='book_list_item d-flex align-items-center justify-content-between'>
                <div className='span_img' style={{backgroundImage: `url(${book.Picture})`}}></div>
                <Link to={`${book.Id}`} onClick={()=>handleBookClick(book)}>{book.Name}'s</Link></li>  
          }
        })}
      </ul>
      <Outlet />
    </div>
    </motion.div>
  )
}

export default Books