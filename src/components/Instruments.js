import React, { useContext } from 'react';
import { Context } from '../Context';
/* eslint-disable */

const Instruments = props => {
  const { allInstruments, addToCart } = useContext(Context);
  const instrumentType = props.id
 
  const list = allInstruments[props.id].instruments.map(product => (
    <li key={product.id}>
      <>
        <img
          src={product.img}
          alt="product"
        />
        <div>
          <h4 className="font-weight-bold fs2"><span>{product.name}</span></h4>
          <h5 className="red fs2">{product.state}</h5>
          <h5 className="fs2">
            <strong>From: </strong>
            {product.from}
          </h5>

          <div className="d-flex justify-content-between align-items-center">
            <div className="dropdown size m-0">
              <button
                onClick={()=>addToCart(product)}
                className="btn btn-light p-0"
                type="button"
                // data-toggle="dropdown"
                // aria-haspopup="true"
                // aria-expanded="false"
              >
                <i className="fas fa-plus red fs3 font-weight-bold" />
              </button>
              {/* <div className="dropdown-menu border">
                <span className="dropdown-item">Add to Wishlist</span>
                <span className="dropdown-item">Add to Cart</span>
                <span className="dropdown-item">More Details</span>
              </div> */}
            </div>
            <h4 className="red font-weight-bold fs3 m-0">
              <span className="red">
                $
                {product.price}
              </span>
            </h4>
          </div>
        </div>
      </>
    </li>

  ));
  return (
    [list]
  );
};
export default Instruments;
