import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../Context';

function InfoPage() {
  const { allInstruments, addToCart, addToWishlist } = useContext(Context);

  const { productId, productType } = useParams();
  const typeObj = allInstruments.find(product => product.id == productType);
  const instObj = typeObj.instruments.find(inst => inst.id == productId);
  console.log(instObj);
  return (
    <>
      <li className="cart-item">

        <img
          src={instObj.img}
          alt="img"
          style={{ width: '100px', height: '130px', margin: '10px 15px 10px 0px' }}
        />

        <div className="flex-column w-100">
          <h4>
            {instObj.name}

          </h4>

          <h5 className="red fs2">
            {instObj.state}
          </h5>
          <h5 className="fs2">

            <strong>
              From:
            </strong>
            {instObj.from}
          </h5>
          <div className="dropdown size m-0">

            <button className="btn   p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-plus red fs3 font-weight-bold" />
            </button>
            <div className="dropdown-menu border">
              <span aria-hidden="true" onClick={() => addToWishlist(instObj)} className="dropdown-item">Add to Wishlist</span>
              <span aria-hidden="true" onClick={() => addToCart(instObj)} className="dropdown-item">Add to Cart</span>
            </div>
          </div>
          <p className="item-price fs3 red">
            {instObj.price}
          </p>
          <hr />
        </div>
      </li>
    </>
  );
}

export default InfoPage;
