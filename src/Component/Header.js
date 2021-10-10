/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../style/Header.css";
import { Switch, Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <i class="fa-2x far fa-moon"></i>{" "}
        </li>
        <li className="nav-item">
          <h5>Hamza</h5>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/" role="button">
            <h6>About</h6>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Projects" role="button">
            <h6>My Projects</h6>
          </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#" role="button">
            <h6>Certificates</h6>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" role="button">
            <h6>Contact</h6>
          </a>
        </li>
      </ul>
    </nav>
  );
  {
    /* /.navbar */
  }
};

export default Header;
