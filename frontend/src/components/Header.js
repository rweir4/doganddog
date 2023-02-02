import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div id='navbar'>
      <a href='/'>
        <img className='title'
          src='/images/williwaw-logo.png' 
          alt='title logo'/>
        <img className='logo'
          src='images/ginny-logo.png'
          alt='logo' />
      </a>
      <NavBar />
    </div>
  );
};

export default Header;