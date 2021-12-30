/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../style/Header.css";
import { Switch, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const Header = () => {
  const showSettings = (event) => {};
  const [state, setState] = useState(false);

  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  useEffect(() => (window.onresize = updateSize), []);
  const closeMenu = () => {
    setState(false);
  };
  const openMenu = () => {
    setState(true);
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item"></li>
        <li className="nav-item"></li>
      </ul>
      {/* Right navbar links */}
      {size.x > 600 ? (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" role="button">
              <h6>About</h6>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Projects" role="button">
              <h6>Projects</h6>
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
      ) : (
        <ul className="navbar-nav ml-auto">
          <li classname="nav-item">
            <Menu right width={"40%"} isOpen={state} onStateChange={openMenu}>
              <li className="nav-item">
                <Link className="nav-link" to="/" role="button">
                  <h6>About</h6>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Projects" role="button">
                  <h6>Projects</h6>
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
            </Menu>
          </li>
        </ul>
      )}
    </nav>
  );
  {
    /* /.navbar */
  }
};

export default Header;
