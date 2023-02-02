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
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');
  let [emailSent, setEmailSent]  = useState(false);

  const handleSubmit = (e) => {
    sendMessage(name, email, message).then(() => {
      setEmailSent(true);
      setName('');
      setEmail('')
      setMessage('');
    });
    
    e.preventDefault();
  }

  return (
    <form className='font-giant space-before contact-us'>Contact Us
      <div>
        <label className='space-before'>Name</label>
        <input placeholder='Name' value={name} onChange={(e) => {setName(e.target.value)}}/>
      </div>
      <div>
        <label className='space-before'>Email</label>
        <input placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
      </div>
      <div>
        <label className='space-before flex'>Message</label>
        <textarea placeholder='Message' value={message} className='message' onChange={(e) => {setMessage(e.target.value)}}/>
      </div>
      <button 
        id='contact-btn' 
        className='submit-btn'
        onClick={(e) => {handleSubmit(e)}}>
          Send Email
      </button>
      {emailSent && <div className='complete'>
          <img src='images/paw.png' alt='paw-wave' />Your message was sent!<img src='images/paw.png' alt='paw-wave' />
        </div>}
    </form>
  );
};

export default ContactForm;