import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function Header() {
  const { cartItems, wishlistItems } = useContext(Context);

  return (
    <nav className="w-100 d-flex justify-content-between">
      <ul className="d-flex m-0 w-100 align-items-center nav-left">
        <li>
          <Link to="/">
            <div className="fs3 text-light">
              <i className="fa fa-guitar red" />
              JAZZIX
            </div>
          </Link>
        </li>

        <Link to="/">
          <li><div><i className="fa fa-home red"> HOME</i></div></li>
        </Link>
        <Link to="/wishlist">
          <li className="wishlist">
            <div>
              <i className="fa fa-shopping-cart">
                {' '}
                WISHLIST
                {' '}
                [
                {wishlistItems.length}
                ]
              </i>
            </div>
          </li>
        </Link>
        <Link to="/cart">
          <li>
            <div>
              <i className="fa fa-shopping-cart">
                {' '}
                YOUR CART
                {' '}
                [
                {cartItems.length}
                ]
              </i>
            </div>
          </li>
        </Link>

      </ul>
    </nav>
  );
}

export default Header;
