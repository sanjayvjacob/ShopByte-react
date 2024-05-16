import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {addToCart, cartItems} = useContext(ShopContext)

  const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
      <img src={productImage} />
      <div className='description'>
        <p><b>{productName}</b></p>
        <p style={{fontSize:"20px"}}>£{price}</p>
      </div>
      <button className='addToCartBtn'onClick={()=> addToCart(id)}>
        Add to Basket {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
    </div>
  )
}

export default Product