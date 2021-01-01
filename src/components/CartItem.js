import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';
import '../index.css';

function CartItem({ item, isWishlist, id }) {
  const {
    removeFromCart, removeFromWishlist, addToCart, addToWishlist,
  } = useContext(Context);

  const [hovered, setHovered] = useState(false);
  const iconClassName = hovered ? 'far fa-trash-alt align-self-center pr-3 red pointer'
    : 'fas fa-trash-alt align-self-center pr-3 red pointer';
  return (
    <li className="cart-item">
      <i
        className={iconClassName}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-hidden="true"
        onClick={() => (isWishlist ? removeFromWishlist(id)
          : removeFromCart(id))}
      />

      <img src={item.img} alt="img" style={{ width: '100px', height: '130px', margin: '10px 15px 10px 0' }} />
      <div className="flex-column w-100">
        <h4>{item.name}</h4>
        <h5 className="red fs2">{item.state}</h5>
        <h5 className="fs2">
          <strong>From: </strong>
          {item.from}
        </h5>

        <div className="dropdown size m-0">
          <button
            className="btn   p-0"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-plus red fs3 font-weight-bold" />
          </button>
          <div className="dropdown-menu border">
            <span aria-hidden="true" onClick={() => addToWishlist(item)} className="dropdown-item">Add to Wishlist</span>
            <span aria-hidden="true" onClick={() => addToCart(item)} className="dropdown-item">Add to Cart</span>
          </div>
        </div>
        <p className="item-price fs3 red">{item.price}</p>

        <hr />
      </div>
    </li>

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
  isWishlist: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default CartItem;
