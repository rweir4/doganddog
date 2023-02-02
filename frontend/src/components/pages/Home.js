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
          alt='banner image' />
      </div>
      <div id='page-content' className='content'>
        <div>
          <h1>Featured Looks</h1>
            <div>
              <img src='/images/GinnyInMock.png' alt='mock up' />
              <h3>Classic Linen Tunic</h3>
            </div>
        </div>
        <div className='ambassadors'>
          <h1>Meet Our Ambassadors</h1>
          <div>
            We're launching an ambassador program! As an ambassador, you will 
            receive 20% off all your orders. In return, we ask that you post twice 
            a month, tagging one of our products and our brand.
            If you're interested, please read our guidelines for application:
            Follow us on instagram <a href='https://www.instagram.com/ginnyand.co/' alt='ginny and co instagram'>@ginny&.co</a>
            And repost this post [post link] in your story, tagging us, and tag two friends in 
            the comments of the post.
          </div>
        </div>
        <div id='home-subscribe' className='flex-center-horizontal'>
          <NewsletterSignUp footer={false}/>
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