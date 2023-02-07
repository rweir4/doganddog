import React from "react";
import axios from 'axios';
import { useState } from 'react';

const POST_SUBSCRIPTION_URL = 'http://localhost:3000/api/v1/subscriptions';

const saveNewSubscription = (email) => {
  return axios.post(POST_SUBSCRIPTION_URL, {
    email: email
  });
}

const NewsletterSignUp = ( {footer} ) => {
  let [email, setEmail] = useState('');
  let [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    saveNewSubscription(email).then(() => {
      setSaved(true);
    });
    e.preventDefault();

    setEmail('');
  }

  const pawFile = footer ? 'images/paw-light.png' : 'images/paw.png';

  return (
    <form className='newsletter' onSubmit={e => handleSubmit(e)}>
      <label>SIGN UP FOR OUR NEWSLETTER</label>
      <div>
        <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
        <button className='submit-btn' onClick={e => handleSubmit(e)}>Sign Up</button>
      </div>
      {saved && <div className='complete'>
          <img className='paw' src={pawFile} alt='paw-wave' />Thanks for subscribing!<img src={pawFile} alt='paw-wave' />
        </div>}
    </form>
  );
};

export default NewsletterSignUp;