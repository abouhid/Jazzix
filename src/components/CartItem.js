/* eslint-disable */
import React, { useContext } from 'react';
import { Context } from '../Context';
import '../index.css';

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line" />
          <img src={item.img} width="100px" />
        {' '}
        <i className="ri-delete-bin" onClick={() => removeFromCart(item.id)} />
        <div>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </div>
    </div>

  );
}
export default CartItem;
