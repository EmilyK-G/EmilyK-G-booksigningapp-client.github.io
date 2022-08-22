import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './NavBtn.css';

function NavBtn() {
  const [nextPage, setNextPage] = useState('/');
  const [prevPage, setPrevPage] = useState('/');
  const [clicked, setClicked] = useState(0);

  const location = useLocation();
  const pathname = location.pathname;
  // const pageRef = useRef(pathname);

  // useEffect(() => {
  //   if(localStorage.getItem('pageName') !== null){
  //     pageRef.current = JSON.parse(localStorage.getItem('pageName'));
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('pageName', JSON.stringify(location.pathname))
  // }, [location.pathname])
  
  useEffect(() => {
    if(pathname === '/'){
      setNextPage('/users')
    }
    if(pathname === '/users'){
      setNextPage('/books')
      setPrevPage('/')
    }
    if(pathname === '/books'){
      setPrevPage('/users')
    }
    console.log(pathname)
  }, [pathname, clicked])

  return (
    <>  
        <Button className='prev_btn_style d-flex align-items-end' onClick={()=>setClicked(clicked - 1)}><Link className={(pathname === '/' ? ' btn_dissapear' : '')} to={prevPage}>{`<`}</Link></Button>
        <Button className='next_btn_style d-flex align-items-end' onClick={()=>setClicked(clicked + 1)}><Link to={nextPage} className={(pathname === '/books' ? ' btn_dissapear' : '')}>{`>`}</Link></Button>
        <Outlet />
    </>
  )
}

export default NavBtn