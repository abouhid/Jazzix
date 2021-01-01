import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';
import '../index.css';

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const [hovered, setHovered] = useState(false);
  const iconClassName = hovered ? 'far fa-trash-alt align-self-center pr-3 red pointer'
    : 'fas fa-trash-alt align-self-center pr-3 red pointer';

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <img src={item.img} alt="img" width="100px" />
      {' '}
      <i className="ri-delete-bin" aria-hidden="true" onClick={() => removeFromCart(item.id)} />
      <div className="flex-column w-100">
        <h4>{item.name}</h4>
        <h5 className="red fs2">{item.state}</h5>
        <h5 className="fs2">
          <strong>From: </strong>
          {item.from}
        </h5>
        <p className="item-price fs3 red">{item.price}</p>
        <hr />
      </div>
    </div>

  );
}
CartItem.propTypes = {
  item: PropTypes.shape({
    from: PropTypes.string,
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    state: PropTypes.string,
  }).isRequired,
};
export default CartItem;

// PropTypes.shape({
//   color: PropTypes.string,
//   fontSize: PropTypes.number
// })
