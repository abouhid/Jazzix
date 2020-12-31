import React from 'react';
import PropTypes from 'prop-types';
import storedata from './data/storedata';

const Context = React.createContext();

function ContextProvider({ children }) {
  return (
    <Context.Provider value={{ storedata }}>
      {children}
    </Context.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, Context };
