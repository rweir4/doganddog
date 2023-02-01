// import e from "express";
import React from "react";
import { useState } from 'react';

const NewsletterSignUp = () => {
  let [email, setEmail] = useState('Email');

  const handleSubmit = (e) => {
    // create store, create actions, and import this action
    // saveNewSubscription(email);
    e.preventDefault();
  }

  return (
    <form className='newsletter' onSubmit={e => handleSubmit(e)}>
      <label>SIGN UP FOR OUR NEWSLETTER</label>
      <div>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NewsletterSignUp;