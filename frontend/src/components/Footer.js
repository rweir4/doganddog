import React from "react";
import NewsletterSignUp from "./NewsletterSignUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div id='footer'>
      <NewsletterSignUp />
      <FontAwesomeIcon className='white-icon' icon="fa-brands fa-instagram" />
    </div>
  );
};

export default Footer;