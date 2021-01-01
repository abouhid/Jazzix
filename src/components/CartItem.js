import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';
import '../index.css';

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line" />
      <img src={item.img} alt="img" width="100px" />
      {' '}
      <i className="ri-delete-bin" aria-hidden="true" onClick={() => removeFromCart(item.id)} />
      <div>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
    </div>

  );
}
CartItem.propTypes = {
  item: PropTypes.node.isRequired,
};
export default CartItem;
