import React, { useState } from 'react'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { add, remove } from '../redux/Slices/CartSlice'



const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart || [])
  const dispatch = useDispatch();

  const postDescription = post.description.length > 50 ? `${post.description.slice(0, 50)}...` : post.description;
  const postTitle = post.title.length > 20 ? `${post.title.slice(0, 20)}...` : post.title
  const addItem = () => {
    dispatch(add(post))
    toast.success("Item Added")
  }

  const removeItem = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed")
  }
  return (
    <div className='product_main_container'>
      <div className='product_title_container'>
        <p>{postTitle}</p>
      </div>

      <div className='product_description_container'>
        <p>
          {
            postDescription
          }
        </p>
      </div>

      <div className='product_image_container'>
        <img className='product_image' src={post.image} />
      </div>

      <div className='product_footer'>
        <p className='product_price'>${post.price}</p>
        {
          cart.some((p) => p.id === post.id) ?
            (<button onClick={removeItem} className='product_Rbutton_container'>Remove Item</button>) :
            (<button onClick={addItem} className='product_Abutton_container'>Add Item</button>)
        }
      </div>


    </div>
  )
}

export default Product
