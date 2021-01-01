import React, { useState } from 'react';
import PropTypes from 'prop-types';
import storedata from './data/storedata';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [allInstruments] = useState(storedata);

  const addToCart = newItem => {
    setCartItems(prevItems => [...prevItems, newItem]);
  };
  const addToWishlist = newItem => {
    setWishlistItems(prevItems => [...prevItems, newItem]);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const removeFromCart = id => {
    setCartItems(prevItems => prevItems.filter((item, index) => index != id));
  };
  const removeFromWishlist = id => {
    setWishlistItems(prevItems => prevItems.filter((item, index) => index != id));
  };

  return (
    <Context.Provider value={{
      allInstruments,
      cartItems,
      addToCart,
      emptyCart,
      removeFromCart,
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
    }}
    >
      {children}
    </Context.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, Context };
