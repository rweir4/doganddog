import React from "react";
import NewsletterSignUp from "./NewsletterSignUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div id='footer'>
      <NewsletterSignUp />
      <div className='footer-right'>
        <a href='https://www.instagram.com/ginnyand.co/' alt='instagram' target='_blank'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <div className='font-larger'>hello.ginnyandco@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;