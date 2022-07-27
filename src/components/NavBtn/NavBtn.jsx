import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { FcPrevious, FcNext } from 'react-icons/fc';
import './NavBtn.css';

function NavBtn() {
  const [pageCount, setPageCount] = useState(1);

  const location = useLocation();

  const pageRef = useRef(location.pathname);

  useEffect(() => {
    if(localStorage.getItem('pageName') !== null){
      pageRef.current = JSON.parse(localStorage.getItem('pageName'));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('pageName', JSON.stringify(location.pathname))
  }, [location.pathname])
    
  useEffect(()=>{
    if(pageRef.current === '/'){
      setPageCount(1)
    }
    if(pageRef.current === '/users'){
      setPageCount(2)
    }
    if(pageRef.current === '/books'){
      setPageCount(3)
    }
    console.log(pageRef)
  }, [pageRef])

  function handlePrevClick() {
    setPageCount(pageCount - 1);
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