import React,{useContext} from 'react'
import Products from "../../Products"
import {ShopContext} from "../../context/shop-context"
import CartItem from './cart-item'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Shopping Basket</h1>
      </div>
      <div className='cartItems'>
        {Products.map((product)=>{
          if(cartItems[product.id] !== 0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      {totalAmount > 0 ?
      <div className='checkout'>
        <p>Subtotal: £{totalAmount}</p>
        <button onClick={()=> navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      :<h1>Your ShopByte Cart is empty</h1>}
    </div>
  )
}

export default Cart