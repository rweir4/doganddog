import React from "react";

const GET_PRODUCTS_URL = 'http://localhost:3000/api/v1/products';

const FeaturedLooks = () => {
  return (
    <div className='featured-looks flex-evenly space-before space-after'>
      <div>
        <img
          className='contain-img'
          src='/images/ginny-indigo-shirt.png' 
          alt='ginny-indigo-shirt' />
        <div className='font-large space-before'>Classic Linen Tunic</div>
        <div className='font-medium'>Indigo</div>
      </div>
      <div>
        <img 
          className='shift-img-down'
          src='/images/ginny-lavender-bandana.png'
          alt='ginny-lavender-bandana' />
        <div className='font-large space-before'>Vine Bandana</div>
        <div className='font-medium'>Lavender</div>
      </div>
    </div>
  );
};

export default FeaturedLooks;