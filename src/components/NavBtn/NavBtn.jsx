import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './NavBtn.css';

function NavBtn() {
  //Look up 'ReactJs pagination'
  const [pageCount, setPageCount] = useState(1);
  
  useEffect(()=>{
    console.log(pageCount)
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
        <Button variant="info" className={'prev_btn_style' + (pageCount === 1 ? ' btn_dissapear' : '') } onClick={()=>{handlePrevClick()}}><Link to={pageCount === 2 ? '/welcome' : pageCount === 3 ? '/users' : false}>Prev</Link></Button>
        <Button variant="info" className={'next_btn_style' + (pageCount === 3 ? ' btn_dissapear' : '') } onClick={()=>{handleNextClick()}}><Link to={pageCount === 1 ? '/users' : pageCount === 2 ? '/books' : false}>Next</Link></Button>
        <Outlet />
    </>
  )
}

export default NavBtn