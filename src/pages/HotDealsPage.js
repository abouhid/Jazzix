import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Context } from '../Context';
import hotdealsdata from '../data/hotdealsdata';

function HotDealsPage() {
  const { addToCart, addToWishlist } = useContext(Context);
  const { productId } = useParams();
  const instObj = hotdealsdata.find(inst => inst.id == productId);
  return (
    <div className="info-item">
      <div className="d-flex">

        <img
          src={instObj.img}
          alt="img"
        />

        <div className="flex-column w-100 ">
          <h3 className="mb-3 info fs3">
            {instObj.name}
            {' '}
          </h3>
          <LoremIpsum p={1} avgSentencesPerParagraph={4} />

          <h5 className="red fs2">
            {instObj.state}
          </h5>
          <h5 className="fs2">
            {' '}
            <strong> From: </strong>
            {' '}
            {instObj.from}
            {' '}
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
            $
            {instObj.price}
          </p>
          <hr />
        </div>
      </div>

    </div>
  );
}

export default HotDealsPage;
