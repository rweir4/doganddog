import React from 'react';

import AccountPreview from '../socialMedia/accountPreview';
import Ambassadors from '../socialMedia/ambassadors';
import FeaturedLooks from '../FeaturedLooks';
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
          src='/images/ginny-darcy-moment.png'
          alt='banner image' />
      </div>
      <div id='page-content' className='home-content'>
        <div>
          <div className='font-title space-after'>Featured Looks</div>
          <FeaturedLooks />
        </div>
        <div>
          <div className='font-title space-after'>Newsletter</div>
          <div id='home-subscribe' className='flex-center-horizontal margin-before'>
            <NewsletterSignUp footer={false}/>
            <div className='subscribe-desc extra-spacing'>
              Be in the know before collections are released by 
              signing up for our newsletter, which will be sent out once a month.
            </div>
          </div>
        </div>
        <div className='center font-larger ambassadors'>
          <div className='font-title space-after'>Ambassadors</div>
          <Ambassadors />
        </div>
        <div>
          <div className='font-title space-after'>We're on Instagram!</div>
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