import React, { useState } from 'react';
import Products from '../../Products';
import Product from './Product';
import Filter from "../../components/Filter/Filter";
import './Shop.css';

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 1650]);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <div className='shop'>
      <Filter priceRange={priceRange} handleChange={handleChange} />
      <div className='products'>
        {Products.map((product, index) => {
          return <Product key={index} data={product} />
        })}
      </div>
    </div>
  );
}

export default Shop;
