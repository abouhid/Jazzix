import React, { useContext } from 'react';
import { Context } from '../Context';

// import storedata from '../data/storedata'
function InstrumentCont() {
  const { allPhotos } = useContext(Context);
  return (
    <>
      <div className="d-flex align-items-baseline m-0">
        <h4 className="mt4 dark font-weight-bold fs3 title">
          <i className="fas fa-drum" />
          {' '}
          Drum kits
        </h4>
        <p className="mt4 ml-4 grey font-weight-bold m-0 fs2">
          (
          {allPhotos}
          , cymbals, racks and much more)
        </p>
      </div>
      <hr className="bg-grey mt-0" />
      <ul className="products">
        <li>
          <img
            src="https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2019/05/10/source-img/20190510143637_37273.jpg_100x100.jpg"
            alt="product"
          />
          <div>
            <h4 className="font-weight-bold fs2"><span>SLADE 14 inch Snare Drum with Stick Strap Wrench - Red Wine 4</span></h4>
            <h5 className="red fs2">New</h5>
            <h5 className="fs2">
              <strong>From:</strong>
              {' '}
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
                {' '}
                <span className="red">$57.93</span>
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
              {' '}
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
                {' '}
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
              {' '}
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
                {' '}
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
              {' '}
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
                {' '}
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

/* eslint-disable */
{/*<div class="d-flex align-items-baseline m-0">
        <h4 class="mt4 dark font-weight-bold fs3 title"><i class="fas fa-drum"></i> Drum kits</h4>
        <p class="mt4 ml-4 grey font-weight-bold m-0 fs2">(Drums, cymbals, racks and much more)</p>
      </div>
      <hr class="bg-grey mt-0">
      <ul class="products">
        <li>
          <img
            src="https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2019/05/10/source-img/20190510143637_37273.jpg_100x100.jpg"
            alt="product"/>
          <div>
            <h4 class="font-weight-bold fs2"><span>SLADE 14 inch Snare Drum with Stick Strap Wrench - Red Wine 4</span></h4>
            <h5 class="red fs2">New</h5>
            <h5 class="fs2"><strong>From:</strong> Juiz de Fora, Brazil</h5>

            <div class="d-flex justify-content-between align-items-center">
              <div class="dropdown size m-0">
                <button class="btn btn-light p-0" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-plus-square red fs3 font-weight-bold"></i>
                </button>
                <div class="dropdown-menu border">
                  <span class="dropdown-item" >Add to Wishlist</span>
                  <span class="dropdown-item" >Send a Message</span>
                  <span class="dropdown-item" >More Details</span>
                </div>
              </div>
              <h4 class="red font-weight-bold fs3 m-0"> <span class="red" >$57.93</span></h4>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://media.musiciansfriend.com/is/image/MMGS7/Effects-Cymbal-Stack/K36911000000000-00-220x220.jpg"
            alt="product">
          <div>
            <h4 class="font-weight-bold fs2"><span>Agazarian Effects Cymbal Stack</span></h4>
            <h5 class="red fs2">Used</h5>
            <h5 class="fs2"><strong>From:</strong> Além Paraíba, Brazil</h5>

            <div class="d-flex justify-content-between align-items-center">
              <div class="dropdown size m-0">
                <button class="btn btn-light p-0" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-plus-square red fs3 font-weight-bold"></i>
                </button>
                <div class="dropdown-menu border">
                  <span class="dropdown-item" >Add to Wishlist</span>
                  <span class="dropdown-item" >Send a Message</span>
                  <span class="dropdown-item" >More Details</span>
                </div>
              </div>
              <h4 class="red font-weight-bold fs3 m-0"> <span class="red" >$37.99</span></h4>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://media.musiciansfriend.com/is/image/MMGS7/5-Piece-Complete-Drum-Set-Black/J56102000002000-00-220x220.jpg"
            alt="product">
          <div>
            <h4 class="font-weight-bold fs2"><span>Rogue 5-Piece Complete Drum Set</span></h4>
            <h5 class="red fs2">New</h5>
            <h5 class="fs2"><strong>From:</strong> Rio de Janeiro, Brazil</h5>

            <div class="d-flex justify-content-between align-items-center">
              <div class="dropdown size m-0">
                <button class="btn btn-light p-0" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-plus-square red fs3 font-weight-bold"></i>
                </button>
                <div class="dropdown-menu border">
                  <span class="dropdown-item" >Add to Wishlist</span>
                  <span class="dropdown-item" >Send a Message</span>
                  <span class="dropdown-item" >More Details</span>
                </div>
              </div>

              <h4 class="red font-weight-bold fs3 m-0"> <span class="red" >$349.99</span></h4>
            </div>
          </div>
        </li>
        <li>
          <img
            src="https://media.musiciansfriend.com/is/image/MMGS7/SD350-Electronic-Drum-Kit-with-Mesh-Pads/J52903000000000-00-220x220.jpg"
            alt="product">
          <div>
            <h4 class="font-weight-bold fs2"><span>Simmons SD350 Electronic Drum Kit with Mesh Pads</span></h4>
            <h5 class="red fs2">New</h5>
            <h5 class="fs2"><strong>From:</strong> Juiz de Fora, Brazil</h5>

            <div class="d-flex justify-content-between align-items-center">
              <div class="dropdown size m-0">
                <button class="btn btn-light p-0" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-plus-square red fs3 font-weight-bold"></i>
                </button>
                <div class="dropdown-menu border">
                  <span class="dropdown-item" >Add to Wishlist</span>
                  <span class="dropdown-item" >Send a Message</span>
                  <span class="dropdown-item" >More Details</span>
                </div>
              </div>
              <h4 class="red font-weight-bold fs3 m-0"> <span class="red" >$319.99</span></h4>
            </div>
          </div>
        </li>
      </ul>
*/}