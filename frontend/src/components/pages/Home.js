import React from 'react';
// import logo from '/ginnytoy.png';

const Home = () => {
  return (
    <div>
      <div className='intro'>
        <img
          src='/images/ginnytoy.png'
          alt='logo' />
      </div>
      <div className='content'>
        <div className='ambassadors'>
          <h1>Meet Our Ambassadors</h1>
        </div>
        <div className='featured-looks'>
          <h1>Featured Looks</h1>
            <div>
              <img src='/images/GinnyInMock.png' alt='mock up' />
              <h3>Classic Linen Tunic</h3>
            </div>
        </div>
        <div className='email-list'>
          <h1>Sign up for our Newsletter</h1>
        </div>
        <div className='socials'>
          <h1>We're on Instagram!</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;