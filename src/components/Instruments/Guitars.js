import React, { useContext } from 'react';
import { Context } from '../../Context';

const Guitars = props => {
  const { storedata } = useContext(Context);
  const list = storedata[props.id].instruments.map(product => (
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
            <strong>Froom:</strong>
            {product.from}
          </h5>

          <div className="d-flex justify-content-between align-items-center">
            <div className="dropdown size m-0">
              <button
                className="btn btn-light p-0"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-plus-square red fs3 font-weight-bold" />
              </button>
              <div className="dropdown-menu border">
                <span className="dropdown-item">Add to Wishlist</span>
                <span className="dropdown-item">Send a Message</span>
                <span className="dropdown-item">More Details</span>
              </div>
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
export default Guitars;
