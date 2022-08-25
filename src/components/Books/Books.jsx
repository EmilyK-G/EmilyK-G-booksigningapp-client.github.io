import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './Books.css'

function Books() {
  const {usersArr, loggedUser} = useContext(UserContext);

  function handleBookClick () {
    
  }
  return (
    <div className='d-flex flex-column justify-content-center'>
      <header className='book_header align-self-center'>
        <h1 className='books_title mb-0'>Books</h1>
      </header>
      <hr className="mb-4 books_separator"></hr>
      <ul className='book_list d-flex flex-wrap justify-content-between'>
        {usersArr.map((book)=>{
          if(book.Id === loggedUser.Id){
            return <li key={loggedUser.Id} 
                    className='book_list_item d-flex align-items-center justify-content-between'
                    onClick={()=>{handleBookClick(book)}}>
                      <div 
                        className='span_img' 
                        style={{backgroundImage: `url(${book.Picture})`}}></div>My Book</li>
          } else {
              return <li key={book.Id} 
              className='book_list_item d-flex align-items-center justify-content-between'><div className='span_img' style={{backgroundImage: `url(${book.Picture})`}}></div>{book.Name}'s</li>  
          }
        })}
      </ul>
    </div>
    
  )
}

export default Books