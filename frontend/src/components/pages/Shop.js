import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductPreview from "../ProductPreview";

const GET_PRODUCTS_URL = 'http://localhost:3000/api/v1/products';
const SHIRT_PRODUCT_ID = 1;

const ProductListing = ({ shirts }) => (
  <div>
    {shirts.map(product => {
      return(<ProductPreview key={product.id} product={product} />);
    })}
  </div>
);

const BetaPage = () => (
  <div className='font-title'>
    <div>Our Spring Release, English Garden, is coming Tuesday March 7, 2023!</div>
    <img src='images/size-guide.png' alt='english-garden-promo' />
  </div>
);

const Shop = () => {
  let [products, setProducts] = useState([]);
  let [shirts, setShirts] = useState([]);
  // let [product_type, setProduc] = useState(SHIRT_PRODUCT_ID)

  useEffect(() => {
    axios.get(GET_PRODUCTS_URL).then((response) => {
      setProducts(response.data);
      setShirts(getShirts()); 
    }); 
  }, []);

  const getShirts = () => {
    let shirts = products.filter(product => {
      return product.product_type_id === SHIRT_PRODUCT_ID;
    });

    console.log(shirts);
    return shirts;
  };

  const isReleased = false;

  return (
    <div id='page-content' className='shop'>
      {isReleased ? <ProductListing shirts={[]}/> : <BetaPage />}
    </div>
  );
};

export default Shop;