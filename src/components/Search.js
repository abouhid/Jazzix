import React from 'react';

function Search() {
  return (
    <>
      <section className="text-center p5 text-light bg-red header">
        <h1 className="mt-5"> JAZZIX </h1>
        <h4 className="fs3">Buying your instruments the way it should be done</h4>

        <ul className="d-flex justify-content-center mt-4">
          <li className="dropdown size">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
            </button>
            <div className="dropdown-menu">
              <span className="dropdown-item">Guitar / Bass</span>
              <span className="dropdown-item">Drums</span>
              <span className="dropdown-item">Piano / Keyboards</span>
              <span className="dropdown-item">Others</span>

            </div>
          </li>
          <li className="dropdown size ml-1">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Location
            </button>
            <div className="dropdown-menu">
              <span className="dropdown-item">Brazil</span>
              <span className="dropdown-item">UK</span>
              <span className="dropdown-item">Poland</span>
              <span className="dropdown-item">Others</span>

            </div>
          </li>
          <li className="form-inline size">
            <input className="form-control ml-2 " type="search" placeholder="Start rocking!" aria-label="Search" />

          </li>
          <li className="size"><span className="btn btn-light ml-2">Search</span></li>
        </ul>

      </section>
    </>
  );
}

export default Search;
