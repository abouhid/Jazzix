import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/"> Main</Link>
      <Link to="/details"> Details</Link>
    </header>
  );
}

export default Header;
