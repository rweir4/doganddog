import React from "react";
import axios from 'axios';
import { useState } from 'react';

const POST_SUBSCRIPTION_URL = 'http://localhost:3000/api/v1/subscriptions';

const saveNewSubscription = (email) => {
  return axios.post(POST_SUBSCRIPTION_URL, {
    email: email
  }).then(response => {
    return response.data;
  });
}

const NewsletterSignUp = () => {
  let [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    saveNewSubscription(email);
    e.preventDefault();
  }

  return (
    <form className='newsletter' onSubmit={e => handleSubmit(e)}>
      <label>SIGN UP FOR OUR NEWSLETTER</label>
      <div>
        <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
        <button onClick={e => handleSubmit(e)}>Submit</button>
      </div>
    </form>
  );
};

export default NewsletterSignUp;