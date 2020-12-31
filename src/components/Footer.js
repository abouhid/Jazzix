import React from 'react';

function Header() {
  return (
    <>
      <hr />
      <footer>
        <div className="d-flex justify-content-around row m-0">
          <div className="left-footer text-center col-md-4 ">
            <span className="grey font-weight-bold">
              <i className="fa fa-guitar red" />
              JAZZIX
            </span>

            <p className="grey px-1 fs2 ml-3 text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In praesentium
              culpa
              dignissimos cupiditate doloremque quia assumenda! Aliquam dolor ratione quisquam.
            </p>
          </div>
          <div className="right-footer">
            <div className="footerGrid">

              <span className="fs3 red">Categories</span>
              <span className="fs3 red">More Ways to Shop</span>
              <span className="fs3 red">Why Shop With Us</span>

              <hr className="bg-red m-0" />
              <hr className="bg-red m-0" />
              <hr className="bg-red m-0" />

              <ul className="font-weight-bold grey">
                <li><span className="fs2 grey">Drumkits</span></li>
                <li><span className="fs2 grey">Guitars</span></li>
                <li><span className="fs2 grey">Basses</span></li>
                <li><span className="fs2 grey">Pianos</span></li>
                <li><span className="fs2 grey">Ukulele</span></li>
                <li><span className="fs2 grey">Trumpets</span></li>
              </ul>

              <ul className="font-weight-bold grey">
                <li><span className="fs2 grey">Hot Deals</span></li>
                <li><span className="fs2 grey">Open Box</span></li>
                <li><span className="fs2 grey">Restock</span></li>
                <li><span className="fs2 grey">By Brand</span></li>
                <li><span className="fs2 grey">New Arrivals</span></li>
                <li><span className="fs2 grey" /></li>
              </ul>

              <ul className="font-weight-bold grey">
                <li><span className="fs2 grey">Free Ground Shipping</span></li>
                <li><span className="fs2 grey">45-Day Return Policy</span></li>
                <li><span className="fs2 grey">Largest Selection</span></li>
                <li><span className="fs2 grey">Private Reserve</span></li>
                <li><span className="fs2 grey" /></li>
                <li><span className="fs2 grey" /></li>
              </ul>
            </div>

          </div>
        </div>
        <hr className="bg-grey" />

        <div className="grey text-center">
          <h5 className="fs2">
            {' '}
            © 2020 Jazzix.com. All Rights Reserved. Designed by Mohammed Awad. Adapted by Alexandre
            Bouhid.
          </h5>
        </div>
      </footer>
    </>
  );
}

export default Header;

/* eslint-disable */

{ /* <footer>
<div class="d-flex justify-content-around row m-0">
  <div class="left-footer text-center col-md-4 ">
    <span class="grey font-weight-bold"><i class="fa fa-guitar red"></i>JAZZIX</span>

    <p class="grey px-1 fs2 ml-3 text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In praesentium
      culpa
      dignissimos cupiditate doloremque quia assumenda! Aliquam dolor ratione quisquam.</p>
  </div>
  <div class="right-footer">
    <div class="footerGrid">

      <span class="fs3 red">Categories</span>
      <span class="fs3 red">More Ways to Shop</span>
      <span class="fs3 red">Why Shop With Us</span>

      <hr class="bg-red m-0">
      <hr class="bg-red m-0">
      <hr class="bg-red m-0">

      <ul class="font-weight-bold grey">
        <li><span class="fs2 grey">Drumkits</span></li>
        <li><span class="fs2 grey">Guitars</span></li>
        <li><span class="fs2 grey">Basses</span></li>
        <li><span class="fs2 grey">Pianos</span></li>
        <li><span class="fs2 grey">Ukulele</span></li>
        <li><span class="fs2 grey">Trumpets</span></li>
      </ul>

      <ul class="font-weight-bold grey">
        <li><span class="fs2 grey">Hot Deals</span></li>
        <li><span class="fs2 grey">Open Box</span></li>
        <li><span class="fs2 grey">Restock</span></li>
        <li><span class="fs2 grey">By Brand</span></li>
        <li><span class="fs2 grey">New Arrivals</span></li>
        <li><span class="fs2 grey"></span></li>
      </ul>

      <ul class="font-weight-bold grey">
        <li><span class="fs2 grey">Free Ground Shipping</span></li>
        <li><span class="fs2 grey">45-Day Return Policy</span></li>
        <li><span class="fs2 grey">Largest Selection</span></li>
        <li><a class="fs2 grey">Private Reserve</span></li>
        <li><a class="fs2 grey"></span></li>
        <li><a class="fs2 grey"></span></li>
      </ul>
    </div>

  </div>
</div>
<hr class="bg-grey">

<div class="grey text-center">
  <h5 class="fs2"> © 2020 Jazzix.com. All Rights Reserved. Designed by Mohammed Awad. Adapted by Alexandre Bouhid.
  </h5>
  <a <i class="fab fa-facebook-square text-secondary h3"></i></span>
  <a <i class="fab fa-twitter text-secondary h4 ml-2"></i></span>
  <a <i class="fab fa-instagram text-secondary h4 ml-2"></i></span>
  <a <i class="fab fa-tumblr text-secondary h4 ml-2"></i></span>
  <a <i class="fab fa-spotify text-secondary h4 ml-2"></i></span>

</div>
</footer> */ }
