import '../App.css';
import { Link } from 'react-router-dom';
import MainSearch from '../components/MainSearch';

function SearchPage() {
  return (
    <>
      <section className=" p5 text-light bg-red header">

        <ul className="d-flex m-1">
          <li className="dropdown size">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All Departments
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
          <Link to="/search">
            <li className="size"><span className="btn btn-light ml-2">Search</span></li>
          </Link>

        </ul>

      </section>
      <MainSearch />
    </>
  );
}

export default SearchPage;
