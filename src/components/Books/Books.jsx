import { Outlet, Link } from "react-router-dom";
import { useUserContext } from '../../Hooks/useUserContextHook';
import { useSignatureContext } from "../../Hooks/useSignatureContextHook";
import { motion } from 'framer-motion';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './Books.css';
import { useEffect } from "react";

function Books() {
  const { usersArr, user, loadingUserData, setUserSelected } = useUserContext();
  const { setSigning } = useSignatureContext();

  useEffect(()=>{
    setUserSelected([])
  }, [setUserSelected])
  
  function handleBookClick (mate) {
    setSigning(mate) //The user they clicked becomes the 'signing' object from SignatureContext
  }
  return (
    loadingUserData 
    ? <LoadingSpinner loadingPage={'books'}/> 
    : <motion.div 
      initial= {{opacity: 0, x:100}}
      animate= {{opacity: 1, x: 0}}
      exit= {{opacity:0, x:100}}
      transition={{ duration: 0.2 }}>
    <div className='d-flex flex-column justify-content-center md_books_container'>
      <header className='book_header align-self-center'>
        <h1 className='books_title mb-0'>Books</h1>
      </header>
      <hr className="mb-4 books_separator"></hr>
      <ul className='book_list d-flex flex-wrap justify-content-evenly p-1'>
        {usersArr.map((book)=>{
          if(book._id === user._id){
            return <li key={user._id} 
                    className='book_list_item d-flex align-items-center justify-content-between'
                    onClick={()=>{handleBookClick(book)}}>
                      <div 
                        className='span_img' 
                        style={{backgroundImage: `url(${book.img})`}}></div>
                      <div><Link to={'/my-book'}>My Book</Link></div>
                    </li>
          } else {
              return <li key={book._id} 
              className='book_list_item d-flex align-items-center justify-content-between'>
                <div className='span_img' style={{backgroundImage: `url(${book.img})`}}></div>
                <div><Link to={`${book._id}`} onClick={()=>handleBookClick(book)}>{book.name}'s</Link></div></li>  
          }
        })}
      </ul>
      <Outlet />
    </div>
    </motion.div>
  )
}

export default Books