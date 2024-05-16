import React from 'react'
import Products from '../../Products'
import Product from "./Product"
import "./Shop.css"

const Shop = () => {
  return (
    <div className='shop'>
      <div className='products'>
        {Products.map((product, index)=>{
          return <Product key={index} data={product}/>
        })}
      </div>
    </div>
  )
}

export default Shop