import React from 'react'
import './CartItem.css'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux'
import {add,remove} from '../redux/Slices/CartSlice'
import toast from 'react-hot-toast'

const CartItem = ({ item, itemIndex }) => {
const dispatch=useDispatch()
const cart_item_title=item.title.lenght>30 ?`${item.title.slice(0,30)}...`:item.title;
const cart_item_description=item.description.length>100?`${item.description.slice(0,100)}...`:item.description;
const removeItem=()=>{
  dispatch(remove(item.id));
  toast.error("Item Removed")
}  


  return (
    <div className='main_cart_item_caontainer'>
      <div className='cart_item_wrapper'>
        <div className='cart_item_left_section'>
          <img src={item.image}  className='cart_item_image'/>
        </div>

        <div className='cart_item_right_section'>
          <p className='cart_item_title'>{cart_item_title}</p>
          <p className='cart_item_des'>{cart_item_description}</p>
          <div className='cart_item_price_container'>
            <p className='cart_item_price'>${item.price}</p>
            <div onClick={removeItem} className='cart_item_deleteIcon_container'>
            <MdDelete className='cart_item_deleteIcon'/>
          </div>
          </div>
          
        </div>


      </div>

    </div>
  )
}

export default CartItem
