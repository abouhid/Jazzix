import React from 'react';

function Search() {
  return (
    <>
      <section>
        <h4 className="mt4 grey font-weight-bold">Hot Deals</h4>
        <hr className="bg-grey" />
        <div className="carousel slide" data-ride="carousel">

          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
              <div className="carousel-item active ">
                <div className="d-flex m-0">
                  <div className="col-3 p-0">
                    <span className="img1 hotdeals" />
                  </div>
                  <div className="col-9 f-right ">
                    <h4 className="font-weight-bold fs3">Gibson Traditional Les Paul Premium Plus Wine Red</h4>
                    <h5 className="red fs2">New</h5>
                    <h6 className="fs2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.
                      Delectus, labore!
                    </h6>
                    <h5 className="fs2">
                      <strong>From:</strong>
                      {' '}
                      Juiz de Fora, Brazil
                    </h5>
                    <div className="d-flex adsBut fs3">
                      <button type="button">$450</button>
                      <button type="button" className="border-left border-light">
                        <i className="fas fa-shopping-cart" />
                        {' '}
                        Purchase
                        details
                      </button>
                    </div>

                  </div>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="d-flex m-0">
                  <div className="col-3 p-0">
                    <span className="img2 hotdeals" />
                  </div>
                  <div className="col-9 f-right">
                    <h4 className="font-weight-bold fs3">
                      Digital Piano vidaXL with 88-key Pedals Black Melamine Panel - Black
                      France
                    </h4>
                    <h5 className="red fs2">Used</h5>
                    <h6 className="fs2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.
                      Delectus, labore!
                    </h6>
                    <h5 className="fs2">
                      <strong>From:</strong>
                      {' '}
                      Wroclaw, Poland
                    </h5>
                    <div className="d-flex adsBut fs3">
                      <button type="button">$450</button>
                      <button type="button" className="border-left border-light">
                        <i className="fas fa-shopping-cart" />
                        {' '}
                        Purchase
                        details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="d-flex m-0">
                  <div className="col-3 p-0">
                    <span className="img3 hotdeals" />
                  </div>
                  <div className="col-9 f-right">
                    <h4 className="font-weight-bold fs3">Mitchell MU75BK Concert Ukulele</h4>
                    <h5 className="red fs2">New</h5>
                    <h6 className="fs2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.
                      Delectus, labore!
                    </h6>
                    <h5 className="fs2">
                      <strong>From:</strong>
                      {' '}
                      London, UK
                    </h5>
                    <div className="d-flex adsBut fs3">
                      <button type="button">$129.99</button>
                      <button type="button" className="border-left border-light">
                        <i className="fas fa-shopping-cart" />
                        {' '}
                        Purchase
                        details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev red" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next red" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

      </section>
    </>
  );
}

export default Search;

/* eslint-disable */
{/* <section>
      <h4 className="mt4 grey font-weight-bold">Hot Deals</h4>
      <hr className="bg-grey">
      <div className="carousel slide" data-ride="carousel">

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

          <div class="carousel-inner">
            <div class="carousel-item active ">
              <div class="d-flex m-0">
              <div class="col-3 p-0">
                <span class="img1 hotdeals"></span>
              </div>
              <div class="col-9 f-right ">
                <h4 class="font-weight-bold fs3">Gibson Traditional Les Paul Premium Plus Wine Red</h4>
                <h5 class="red fs2">New</h5>
                <h6 class="fs2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.
                  Delectus, labore!
                </h6>
                <h5 class="fs2"><strong>From:</strong> Juiz de Fora, Brazil</h5>
                <div class="d-flex adsBut fs3">
                  <button type="button">$450</button>
                  <button type="button" class="border-left border-light"><i class="fas fa-shopping-cart"></i> Purchase
                    details</button>
                </div>

              </div>
            </div>
          </div>

            <div class="carousel-item ">
              <div class="d-flex m-0">
              <div class="col-3 p-0">
                <span class="img2 hotdeals"></span>
              </div>
              <div class="col-9 f-right">
                <h4 class="font-weight-bold fs3">Digital Piano vidaXL with 88-key Pedals Black Melamine Panel - Black
                  France</h4>
                <h5 class="red fs2">Used</h5>
                <h6 class="fs2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.
                  Delectus, labore!
                </h6>
                <h5 class="fs2"><strong>From:</strong> Wroclaw, Poland</h5>
                <div class="d-flex adsBut fs3">
                  <button type="button">$450</button>
                  <button type="button" class="border-left border-light"><i class="fas fa-shopping-cart"></i> Purchase
                    details</button>
                </div>
              </div>
              </div>
            </div>

            <div class="carousel-item ">
              <div class="d-flex m-0">
              <div class="col-3 p-0">
                <span class="img3 hotdeals"></span>
              </div>
              <div class="col-9 f-right">
                <h4 class="font-weight-bold fs3">Mitchell MU75BK Concert Ukulele</h4>
                <h5 class="red fs2">New</h5>
                <h6 class="fs2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.
                  Delectus, labore!
                </h6>
                <h5 class="fs2"><strong>From:</strong> London, UK</h5>
                <div class="d-flex adsBut fs3">
                  <button type="button">$129.99</button>
                  <button type="button" class="border-left border-light"><i class="fas fa-shopping-cart"></i> Purchase
                    details</button>
                </div>
              </div>
            </div>
            </div> 
          </div>
          <a class="carousel-control-prev red" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next red" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

    </section> */}