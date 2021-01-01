import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { Context } from '../Context';
import CartItem from '../components/CartItem';

function Cart() {
  const [buttonText, setButtonText] = useState('Place Order');
  const { cartItems, emptyCart } = useContext(Context);
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
  const cartItemElements = cartItems.map(item => (

    <CartItem key={item.id} item={item} />
  ));

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