import React from "react";

const ShippingPolicy = [
  'We ship with USPS, and follow Etsy guidelines.',
  'Domestic shipping is included in the price, but International will be extra, depending on your region.',
  'We aim to get your order to you in 5-10 days.'
]

const ReturnPolicy = [
  'Returns are accepted within two weeks of purchase for a full refund.',
  'Package must be postmarked within 14 days of delivery.',
  'All items must be brand new, unwashed, and hair-free, and must be free of wear and tear.',
  'We do not accept exchanges, in order to ensure that items are in stock.',
  'We do not provide return labels. The customer must pay for their own return label.',
]

const ShippingAndReturns = () => {
  let shipping_count = 0
  let return_count = 0
  
  return (
    <div id='page-content' className='shipping-returns font-larger'>
      <div className='font-title space-after'>Shipping Policy</div>
      {ShippingPolicy.map(policy => {
        shipping_count += 1;
        return (<li key={shipping_count}>{policy}</li>);
      })}
      <div className='font-title space-before space-after'>Return Policy</div>
      {ReturnPolicy.map(policy => {
        return_count += 1;
        return (<li key={return_count}>{policy}</li>);
      })}
      <div className='space-before'>
        **Shipping Insurance is automatically applied to orders over $25.
      </div>
    </div>
  );
};

export default ShippingAndReturns;