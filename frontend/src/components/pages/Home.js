import React from 'react';
import AccountPreview from '../socialMedia/accountPreview';
import NewsletterSignUp from '../NewsletterSignUp';

const social_accounts = {
  'Ginny&Co': { 'url': 'https://www.instagram.com/p/CnXt3oxv6su/embed', type: 'owner' },
  'RebeccaAndGinny': { 'url': 'https://www.instagram.com/p/CnDOpTmvd7b/embed', type: 'owner' }
};

const Home = () => {
  return (
    <div>
      <div className='intro'>
        <img
          src='/images/ginnytoy.png'
          alt='logo' />
      </div>
      <div id='page-content' className='content'>
        <div>
          <h1>Featured Looks</h1>
            <div>
              <img src='/images/GinnyInMock.png' alt='mock up' />
              <h3>Classic Linen Tunic</h3>
            </div>
        </div>
        <div>
          <h1>Meet Our Ambassadors</h1>
        </div>
        <div id='home-subscribe' className='flex-center-horizontal'>
          <NewsletterSignUp />
          <div className='subscribe-desc extra-spacing'>
            Be in the know before collections are released by 
            signing up for our newsletter, which will be sent out once a month.
          </div>
        </div>
        <div>
          <h1>We're on Instagram!</h1>
          <div>
            <AccountPreview userURL={social_accounts['Ginny&Co']['url']}/>
            <AccountPreview userURL={social_accounts['RebeccaAndGinny']['url']}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;