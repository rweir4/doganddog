// import e from "express";
import React from "react";
import { useState } from 'react';

const NewsletterSignUp = () => {
  let [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    // create store, create actions, and import this action
    // saveNewSubscription(email);
    e.preventDefault();
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>Sign up for our newsletter
        <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewsletterSignUp;