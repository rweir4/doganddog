import React from "react";

const ContactForm = () => {
  return (
    <form className='font-larger space-before contact-me'>Contact Me
      <div className='space-before'>
        <label>Name
          <input placeholder='Name' />
        </label>
        <label>Email
          <input placeholder='Email' />
        </label>
      </div>
      <label>Message
        <textarea placeholder='Message' />
      </label>
      <button>Send Email</button>
    </form>
  );
};

export default ContactForm;