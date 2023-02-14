import React from "react";
import NewsletterSignUp from "./NewsletterSignUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id='footer'>
      <NewsletterSignUp footer={true}/>
      <div className='footer-right'>
        <div>
          <a href='https://www.instagram.com/ginnyand.co/' alt='instagram' target='_blank'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://www.facebook.com/profile.php?id=100089776345066' alt='facebook' target='_blank'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div className='font-larger'>hello.ginnyandco@gmail.com</div>
      </div>
    </footer>
  );
};

export default Footer;