import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search() {
  const [categories, setCategories] = useState('Categories');
  const [location, setLocation] = useState('Location');

  return (
    <>
      <section className="text-center p5 text-light bg-red header">
        <h1> JAZZIX </h1>
        <h4 className="fs3">Buying your instruments the way it should be done</h4>

        <ul className="d-flex justify-content-center mt-4">
          <DropdownButton onClick={e => setCategories(e.target.textContent)} id="dropdown-basic-button" title={categories}>
            <Dropdown.Item> Guitar </Dropdown.Item>
            <Dropdown.Item as="button"><div>Drums</div></Dropdown.Item>
            <Dropdown.Item as="button"><div>Piano / Keyboards</div></Dropdown.Item>
            <Dropdown.Item as="button"><div>Others</div></Dropdown.Item>

          </DropdownButton>

          <DropdownButton onClick={e => setLocation(e.target.textContent)} id="dropdown-basic-button" title={location}>
            <Dropdown.Item> Brazil </Dropdown.Item>
            <Dropdown.Item as="button"><div>Poland</div></Dropdown.Item>
            <Dropdown.Item as="button"><div>UK</div></Dropdown.Item>
            <Dropdown.Item as="button"><div>Others</div></Dropdown.Item>

          </DropdownButton>
          <li className="form-inline size">
            <input className="form-control ml-2 " type="search" placeholder="Start rocking!" aria-label="Search" />

          </li>
          <Link to="/search">
            <li className="size"><span className="btn bg-grey ml-2">Search</span></li>
          </Link>
        </ul>

      </section>
    </>
  );
}

export default Search;
