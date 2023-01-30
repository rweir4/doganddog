import React from "react";
import Iframe from 'react-iframe'

const AccountPreview = ({ userURL }) => {
  return (
    <Iframe url={userURL} className='insta-preview' />
  );
};

export default AccountPreview;