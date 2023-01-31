import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = {
  'Home': '/',
  'Shop': '/shop',
  'Meet our Ambassadors': '/ambassadors',
  'Shipping & Returns': '/shippingandreturns',
  'About' : '/about'
}

const NavBar = () => {
  return (
    <div id='navbar'>
      <a href='/'>
        <img className='title'
          src='/images/williwaw-logo.png' 
          alt='title logo'/>
      </a>  
      <div id='menu'>
        {Object.keys(tabs).map(title => {
          return (<NavLink
            key={title}
            className='menu_links'
            to={tabs[title]}
            exact='true'
            >
            {title}
          </NavLink>);
        })}
      </div>
    </div>
  );
};

export default NavBar;