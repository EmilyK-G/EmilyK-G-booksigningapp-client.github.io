import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './NavBtn.css'

function NavBtn() {
  const [page, setPage] = useState(1);
  const [dissapear, setDissapear] = useState(false);

  function handleBtnClick() {
    if (page === 3){
      setDissapear(true)
    }
    console.log(page)
  }
  return (
    <>
        <Button variant="info" className={'btn_style' + (dissapear ? ' btn_dissapear' : '') }onClick={()=>{setPage(page + 1); handleBtnClick()}}><Link to={page === 1 ? "/users" : "/books"}>{page === 1 ? "Users" : "Books"}</Link></Button>
        <Outlet />
    </>
  )
}

export default NavBtn