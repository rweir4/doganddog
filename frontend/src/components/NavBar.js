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
      {Object.keys(tabs).map(title => {
        return (<NavLink
          key={title}
          className='navbar-item'
          to={tabs[title]}
          exact='true'
        >
          {title}
        </NavLink>);
      })}
    </div>
  );
};

export default NavBar;