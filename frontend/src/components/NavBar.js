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
    <div>
      <div id='menu'>
        {Object.keys(tabs).map(title => {
          return (<NavLink
            key={title}
            className='menu-links'
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