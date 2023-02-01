import React from "react";
import { useState } from 'react';
import axios from 'axios';

const POST_MAILER_URL = 'http://localhost:3000/api/v1/mailers';

const sendMessage = (name, email, message) => {
  return axios.post(POST_MAILER_URL, {
    name: name,
    email: email,
    message: message
  });
}

const ContactForm = () => {
  let [name, setName] = useState('');
  let [email, setemail] = useState('');
  let [message, setMessage] = useState('');

  return (
    <form className='font-giant space-before contact-us'>Contact Us
      <div className='space-before'>
        <label className='space-before'>Name</label>
        <input placeholder='Name' />
      </div>
      <div>
        <label className='space-before'>Email</label>
        <input placeholder='Email' />
      </div>
      <div>
        <label className='space-before flex'>Message</label>
        <textarea placeholder='Message' className='message'/>
      </div>
      <button 
        id='contact-btn' 
        className='submit-btn'
        onClick={(e) => {sendMessage(name, email, message)}}>
          Send Email
      </button>
    </form>
  );
};

export default ContactForm;