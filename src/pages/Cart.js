import React, { useState, useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Modal from 'react-modal';
import { Context } from '../Context';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { path } = useRouteMatch();
  const isWishlist = path === '/wishlist';
  const [buttonText, setButtonText] = useState('Place Order');
  const { cartItems, emptyCart, wishlistItems } = useContext(Context);
  const totalCost = cartItems.map(prod => prod.price).reduce((a, b) => a + b, 0);
  const totalCostDisplay = totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      color: '#d35266',
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement('#root');

  function placeOrder() {
    setButtonText('Ordering...');
    setTimeout(() => {
      emptyCart();
      setButtonText('Place Order');
      openModal();
    }, 1000);
  }
  const cartItemElements = cartItems.map((item, index) => (
    <CartItem key={index.toString()} item={item} isWishlist={isWishlist} id={index.toString()} />
  ));

  const wishlistElements = wishlistItems.map((item, index) => (
    <CartItem key={index.toString()} item={item} isWishlist={isWishlist} id={index.toString()} />
  ));

  const ifCartElement = cartItems.length > 0
    ? (
      <div className="order-button text-center">
        <p className="total-cost fs3 red">
          Total:
          {totalCostDisplay}
        </p>
        <hr />

        <button type="button" className="order" onClick={placeOrder}>{buttonText}</button>
      </div>
    )
    : <p>You have no items in your cart.</p>;

  return (
    <main className="cart-page p-3">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <span aria-hidden="true" onClick={closeModal}>x</span>
        <h2>Thanks for Buying with Jazzix!</h2>

      </Modal>
      <h1>
        {' '}
        {isWishlist ? <i className="fas fa-heart">YOUR WISHLIST</i> : <i className="fa fa-shopping-cart"> YOUR CART</i>}

      </h1>
      <ul>
        {isWishlist ? wishlistElements : cartItemElements}

      </ul>
      {
              isWishlist ? '' : ifCartElement

            }
    </main>
  );
};

export default Cart;
