import React from "react";

const ShippingAndReturns = () => {
  return (
    <div id='page-content' className='shipping-returns font-large'>
      <h1>Shipping Policy</h1>
        <ul>
          <li>
            We ship with USPS, and follow Etsy guidelines.
          </li>
          <li>
            Domestic shipping is included in the price, and should take around one week.
          </li>
          <li>
            International shipping will be an extra _____ amount, and will take two weeks.
          </li>
        </ul>
      <div>
        <h1>Return Policy</h1>
        <ul>
          <li>
            Returns are accepted within two weeks of purchase for a full refund.
          </li>
          <li>
            Package must be postmarked within 14 days of delivery.
          </li>
          <li>
            All items must be brand new, unwashed, and hair-free, and must be free of wear and tear.
          </li>
          <li>
            We do not accept exchanges, in order to ensure that items are in stock.
          </li>
          <li>
            We do not provide return labels. The customer must pay for their own return label.
          </li>
        </ul>
        <div>
          **Exceptions:
          We cannot be responsible for lost or stolen packages for orders less than $25.
        </div>
      </div>
    </div>
  );
};

export default ShippingAndReturns;