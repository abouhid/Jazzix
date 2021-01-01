import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from 'react';
import MainSearch from '../components/MainSearch';

function SearchPage() {
  const [categories, setCategories] = useState('Categories');
  const [location, setLocation] = useState('Location');

  return (
    <>
      <section className=" p5 text-light bg-red header">

        <ul className="d-flex m-1">
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
      <MainSearch />
    </>
  );
}

export default SearchPage;
