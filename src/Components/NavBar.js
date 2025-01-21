import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export default function NavBar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* Navbar Brand */}
          <a className="navbar-brand fw-bold" href="#">
            {props.title}
          </a>
          {/* Toggler for Responsive Collapse */}
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
          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a  className="nav-link" href="#">
                  {props.aboutOrg}
                </a>
              </li>
            </ul>
            {/* Dark Mode Toggle */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
            {/* Search Form */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 rounded-pill"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn btn-outline-light rounded-pill" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
  aboutOrg: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  title: 'My Navbar',
  aboutOrg: 'About Us',
};
