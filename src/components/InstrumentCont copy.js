import React, { useContext } from 'react';
import { Context } from '../Context';

function InstrumentCont() {
  const { storedata } = useContext(Context);
  return (
    <>
      <div className="d-flex align-items-baseline m-0">
        <h4 className="mt4 dark font-weight-bold fs3 title">
          <i className="fas fa-drum" />
          {storedata[0].name}
        </h4>
        <p className="mt4 ml-4 grey font-weight-bold m-0 fs2">
          {storedata[0].description}
        </p>
      </div>
      <hr className="bg-grey mt-0" />
      <ul className="products">
        <li>
          <img
            src={storedata[0].instrument.img}
            alt="product"
          />
          <div>
            <h4 className="font-weight-bold fs2"><span>{storedata[0].instrument.name}</span></h4>
            <h5 className="red fs2">{storedata[0].instrument.state}</h5>
            <h5 className="fs2">
              <strong>From:</strong>
              {storedata[0].instrument.from}
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
                  {storedata[0].instrument.price}
                </span>
              </h4>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://media.musiciansfriend.com/is/image/MMGS7/Effects-Cymbal-Stack/K36911000000000-00-220x220.jpg"
            alt="product"
          />
          <div>
            <h4 className="font-weight-bold fs2"><span>Agazarian Effects Cymbal Stack</span></h4>
            <h5 className="red fs2">Used</h5>
            <h5 className="fs2">
              <strong>From:</strong>
              Além Paraíba, Brazil
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
                <span className="red">$37.99</span>
              </h4>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://media.musiciansfriend.com/is/image/MMGS7/5-Piece-Complete-Drum-Set-Black/J56102000002000-00-220x220.jpg"
            alt="product"
          />
          <div>
            <h4 className="font-weight-bold fs2"><span>Rogue 5-Piece Complete Drum Set</span></h4>
            <h5 className="red fs2">New</h5>
            <h5 className="fs2">
              <strong>From:</strong>
              Rio de Janeiro, Brazil
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
                <span className="red">$349.99</span>
              </h4>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://media.musiciansfriend.com/is/image/MMGS7/SD350-Electronic-Drum-Kit-with-Mesh-Pads/J52903000000000-00-220x220.jpg"
            alt="product"
          />
          <div>
            <h4 className="font-weight-bold fs2"><span>Simmons SD350 Electronic Drum Kit with Mesh Pads</span></h4>
            <h5 className="red fs2">New</h5>
            <h5 className="fs2">
              <strong>From:</strong>
              Juiz de Fora, Brazil
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
                <span className="red">$319.99</span>
              </h4>
            </div>
          </div>
        </li>
      </ul>

    </>
  );
}

export default InstrumentCont;
