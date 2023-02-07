import React from "react";

const ProductPreview = ({ product }) => {
  return (
    <div>
      <div>
        <div className='font-larger'>{product.name}</div>
        <img src='/images/GinnyInMock.png' alt='mock up' />
      </div>
    </div>
  );
};

export default ProductPreview;