import React from 'react';
import AccountPreview from '../socialMedia/accountPreview';
import NewsletterSignUp from '../NewsletterSignUp';
import Ambassadors from '../socialMedia/ambassadors';

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
          alt='banner image' />
      </div>
      <div id='page-content' className='content'>
        <div>
          <div className='font-giant space-before space-after'>Featured Looks</div>
            <div>
              <img src='/images/GinnyInMock.png' alt='mock up' />
              <div className='font-large'>Classic Linen Tunic</div>
            </div>
        </div>
        <div id='home-subscribe' className='flex-center-horizontal'>
          <NewsletterSignUp footer={false}/>
          <div className='subscribe-desc extra-spacing'>
            Be in the know before collections are released by 
            signing up for our newsletter, which will be sent out once a month.
          </div>
        </div>
        <div className='center font-larger ambassadors space-before space-after'>
          <Ambassadors />
        </div>
        <div>
          <div className='font-giant space-before space-after'>We're on Instagram!</div>
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