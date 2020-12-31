import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos] = useState(['helloWorld']);

  //   const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';
  //   useEffect(() => {
  //     fetch(url)
  //       .then(res => res.json())
  //       .then(data => setAllPhotos(data));
  //   }, []);
  //   setAllPhotos(['hello world']);
  return (
    <Context.Provider value={{ allPhotos }}>
      {children}
    </Context.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, Context };
