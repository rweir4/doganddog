import React from "react";

const ContactForm = () => {
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
      <button id='contact-btn' className='submit-btn'>Send Email</button>
    </form>
  );
};

export default ContactForm;