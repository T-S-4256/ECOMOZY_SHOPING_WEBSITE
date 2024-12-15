import React, { useEffect, useState } from 'react'
import './Cart.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem'

const Cart = () => {
  const cart = useSelector((state) => state.cart ||[]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])
  return (
    <div className='main_cart_container'>
      {
        cart.length > 0 ?
          (<div className='cart_wrapper'>


            <div className='cart_left_Section'>
              {
                cart.map((item, index) => (<CartItem key={item.id} item={item} itemIndex={index} />))
              }
            </div>

            <div className='cart_right_section'>

              <div className='right_upper_section'>
                <div className='cart_text_1'>YOUR CART</div>
                <div className='cart_text_2'>SUMMARY</div>
                <p className='cart_text_3'><span>Total Items : {cart.length}</span></p>
              </div>


              <div className='right_lower_Section'>
                <button className='cart_button'>Check Out Now</button>
                <p className='cart_total_amount'>Total Amount : {totalAmount}</p>

              </div>

            </div>



          </div>) :
          (
            <div className='cart_empty_conatiner'>
              <p className='cart_empty_heading'>Your Cart Is Empty</p>
              <Link to="/">
                <button className='cart_empty_button'>Shop Now</button>
              </Link>
            </div>
          )
      }
    </div >
  )
}

export default Cart
