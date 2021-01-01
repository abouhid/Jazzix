import React, { useState } from 'react';
import PropTypes from 'prop-types';
import storedata from './data/storedata';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [allInstruments] = useState(storedata);

  const addToCart = newItem => {
    setCartItems(prevItems => [...prevItems, newItem]);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const removeFromCart = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  // console.log(cartItems);

  return (
    <Context.Provider value={{
      cartItems, addToCart, emptyCart, allInstruments, removeFromCart,
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
