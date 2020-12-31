import React, { useContext } from 'react';
import { Context } from '../../Context';

const Drums = () => {
  const { storedata } = useContext(Context);
  const list = storedata.map(instrumentType => (
    <li key={instrumentType.id}>
      <img
        src={instrumentType.instruments.img}
        alt="product"
      />
      <div>
        <h4 className="font-weight-bold fs2"><span>{instrumentType.instruments.name}</span></h4>
        <h5 className="red fs2">{instrumentType.instruments.state}</h5>
        <h5 className="fs2">
          <strong>Froom:</strong>
          {instrumentType.instruments.from}
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
              {instrumentType.instruments.price}
            </span>
          </h4>
        </div>
      </div>
    </li>
  ));
  return (
    [list]
  );
};
export default Drums;
