/* eslint-disable */
import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import CartItem from '../components/CartItem';

function Cart() {
  const [buttonText, setButtonText] = useState('Place Order');
  const { cartItems, emptyCart } = useContext(Context);
  const totalCost = cartItems.map(prod => prod.price).reduce((a, b) => a + b, 0);
  const totalCostDisplay = totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  function placeOrder() {
    setButtonText('Ordering...');
    setTimeout(() => {
      emptyCart();
      setButtonText('Place Order');
      alert('Thanks for buying with Jazzix!');
    }, 1000);
  }
  const cartItemElements = cartItems.map(item => (

    <CartItem key={item.id} item={item} />
  ));

  return (
    <main className="cart-page p-3">
      <h1>
        {' '}
        <i className="fa fa-shopping-cart"> YOUR CART</i>
      </h1>
      {cartItemElements}
      {
      cartItems.length > 0
        ? (
          <div className="order-button">
            <p className="total-cost">
              Total:
              {totalCostDisplay}
            </p>
            <button type="button" onClick={placeOrder}>{buttonText}</button>
          </div>
        )
        : <p>You have no items in your cart.</p>
            }
    </main>
  );
}

export default Cart;
