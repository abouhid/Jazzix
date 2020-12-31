import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="w-100 d-flex justify-content-between">
      <ul className="d-flex justify-content-between m-0 w-100 align-items-center nav-left">
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
        <Link to="/details">
          <li><div><i className="fa fa-home "> COLLECTIONS</i></div></li>
        </Link>
        <Link to="/details">
          <li><div><i className="fa fa-shopping-cart"> PURCHASE LIST</i></div></li>
        </Link>
        <li className="bg-red rounded size"><button className="btn text-light fs3" type="submit">POST AN AD</button></li>

      </ul>
      <ul className="justify-content-between m-0 align-items-center nav-right">
        <li><i className="fas fa-envelope" /></li>
        <li className="ml-4">
          {' '}
          Alex Bouhid
          <i className="fas fa-user ml-1" />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
