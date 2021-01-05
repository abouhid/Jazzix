import React from 'react';
import searchdata from '../data/searchdata';

const SearchItems = () => {
  const list = searchdata.map(prod => (
    <li key={prod.id}>
      <img src={prod.img} alt="product" />
      <div>
        <h4 className="font-weight-bold fs2"><span>{prod.name}</span></h4>
        <h5 className="red fs2">{prod.state}</h5>
        <h5 className="fs2">
          <strong>From:</strong>
          {' '}
          {prod.from}
        </h5>

        <div className="d-flex justify-content-between align-items-center">
          <div className="dropdown size m-0">
            <button className="btn   p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-plus-square red fs3 font-weight-bold" />
            </button>
            <div className="dropdown-menu border">
              <span className="dropdown-item">Add to Wishlist</span>
              <span className="dropdown-item">Add to Cart</span>
            </div>
          </div>
          <h4 className="red font-weight-bold fs3 m-0">
            {' '}
            <span className="red">
              $
              {prod.price}
            </span>
          </h4>
        </div>
      </div>
    </li>
  ));

  return (
    <>
      {list}
    </>
  );
};

export default SearchItems;
