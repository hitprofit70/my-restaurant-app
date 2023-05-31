import React from "react";

const TopNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Meek's Restaurant
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Drinks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Foods</a>
              </li>
              {/* <li className="nav-item dropdown active">
                <a
                  className="nav-link dropdown-toggle active"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
