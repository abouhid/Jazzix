import React from 'react';
import SearchItems from './SearchItems';

function MainSearch() {
  return (
    <div className="bg-grey row m-0">
      <section className="col-sm-12 col-md-3 bg-white border">
        <div className="brands">
          <h3 className="filterTitle"> Brands</h3>
          <hr className="my-2" />
          <ul className="list-filters">
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                Alvarez
                (95)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                Blueridge
                (43)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                Breedlove
                (22)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                DAngelico
                (12)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                Friedman
                (75)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                Kremona
                (115)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                Mitchell
                (65)
              </span>

            </li>
          </ul>

          <h3 className="filterTitle">Price Range</h3>
          <hr className="my-2" />
          <ul className="list-filters">
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                $50 - $100
                (28)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                $100 - $200
                (69)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                $200 - $300
                (87)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                $300 - $500
                (175)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                $500 - $750
                (140)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                $750 - $1,000
                (96)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                $1,000 - $1,500
                (100)
              </span>

            </li>
          </ul>

          <h3 className="filterTitle">Performance Level</h3>
          <hr className="my-2" />
          <ul className="list-filters">
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                Beginner
                (195)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                Intermediate
                (63)
              </span>

            </li>
            <li>
              <input type="checkbox" name="scales" />

              <span>
                {' '}
                Professional
                (213)
              </span>

            </li>
          </ul>
        </div>
      </section>
      <section className="col-sm-12 col-md-9 ">
        <h2 className="p-2 fs2 mt-2 grey">
          <b>4</b>
          {' '}
          results for
          <b> Ukulule </b>
          Search at
          {' '}
          <b>Brazil</b>
          {' '}
          in the Category
          <b> Others</b>
        </h2>
        <hr className="bg-grey mt-0" />
        <ul className="products">

          <SearchItems />
        </ul>

      </section>
    </div>
  );
}

export default MainSearch;
