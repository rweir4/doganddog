import React from "react";
import NewsletterSignUp from "./NewsletterSignUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div id='footer'>
      <NewsletterSignUp />
      <a href='https://www.instagram.com/ginnyand.co/' alt='instagram' target='_blank'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default Footer;