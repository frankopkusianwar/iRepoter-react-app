/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      iRepoter
    </a>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            {' '}
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            {' '}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            {' '}
          </a>
        </li>
      </ul>
      <span className="navbar-text">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link nav-contents" to="/" exact>
            signin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup" exact>
            signup
              </NavLink>
            </li>
          </ul>
        </div>
      </span>
    </div>
  </nav>
);

export default Header;
