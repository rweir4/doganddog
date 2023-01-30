import React from "react";

const Shop = () => {
  let products = [1,2,3,4];
  let counter = 0;

  return (
    <div id='page-content' className='shop'>
      {products.map(product => {
        counter += 1;
        return(
            <div key={counter}>
              <h2>Product {counter}</h2>
              <img src='/images/GinnyInMock.png' alt='mock up' />
            </div>
          );
      })}
    </div>
  );
};

export default Shop;