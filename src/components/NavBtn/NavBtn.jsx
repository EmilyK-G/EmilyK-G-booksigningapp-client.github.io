import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { FcPrevious, FcNext } from 'react-icons/fc';
import './NavBtn.css';

function NavBtn() {
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    if(localStorage.getItem('pageNumber') !== null){
      setPageCount(JSON.parse(localStorage.getItem('pageNumber')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('pageNumber', JSON.stringify(pageCount))
  }, [pageCount])
    
  
  function handlePrevClick() {
    setPageCount(pageCount - 1);
    console.log(pageCount)
  }

  function handleNextClick() {
    setPageCount(pageCount + 1);
    console.log(pageCount)
  }

  
  return (
    <>  
        <Button className={'prev_btn_style' + (pageCount === 1 ? ' btn_dissapear' : '') } onClick={()=>{handlePrevClick()}}><Link to={pageCount === 2 ? '/' : pageCount === 3 ? '/users' : false}><FcPrevious /></Link></Button>
        <Button className={'next_btn_style' + (pageCount === 3 ? ' btn_dissapear' : '') } onClick={()=>{handleNextClick()}}><Link to={pageCount === 1 ? '/users' : pageCount === 2 ? '/books' : false}><FcNext /></Link></Button>
        <Outlet />
    </>
  )
}

export default NavBtn