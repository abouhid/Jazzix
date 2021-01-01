/* eslint-disable */
import React, { useContext } from 'react';
import { Context } from '../Context';

function CartItem({item}) {
  const {removeFromCart} = useContext(Context)

  return (
    <div className="cart-item">
    <i className="ri-delete-bin-line"></i>
    <p>{item.price}</p>
    </div>

  )
};
export default CartItem;
