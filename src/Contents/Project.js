import React, { useState } from "react";
import "../style/Projects.css";
import "../style/Contents.css";

import html from "../img/html.svg";
import reacjs from "../img/react-js.svg";
import javascript from "../img/javascript-programming-language.svg";
import css from "../img/css.svg";
import bootstrap from "../img/bootstrap-4.svg";
import api from "../img/api-file.svg";

import Data from "../Data/Web";
const Project = () => {
  const [state, setstate] = useState(0);
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row titre">
            <div className="col-12">
              <h4>Welcome to my Projects</h4>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row titre">
            <div className="col-sm-4"></div>
            <div className="col-sm-2">
              <button
                type="button"
                className="btn btn-outline-info btn-block btn-flat "
                onClick={() => setstate(0)}
              >
                <i className="fab fa-internet-explorer icon-btn" />
                WEB
              </button>
            </div>
            <div className="col-sm-2">
              <button
                type="button"
                className="btn btn-outline-info btn-block btn-flat"
                onClick={() => setstate(1)}
              >
                <i className="fas fa-mobile-alt icon-btn" />
                Mobile
              </button>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid Projects">
          <div className="row projectsrow">
            <div className="col-2"></div>
            <div className="col-8 projectsText">
              <h4>{Data[state].title}</h4>
              <div>{Data[state].description}</div>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="container-fluid languagerow">
            <div className="row ">
              <div className="col-4">
                <img
                  src={Data[state].icon1}
                  className="img-fluid html"
                  alt="black sample"
                />
              </div>
              <div className="col-4">
                <img
                  src={Data[state].icon2}
                  className="img-fluid html"
                  alt="black sample"
                />
              </div>
              <div className="col-4 ">
                <div>
                  <img
                    src={Data[state].icon3}
                    className="img-fluid html"
                    alt="black sample"
                  />
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-4">
                <img
                  src={Data[state].icon4}
                  className="img-fluid html"
                  alt="black sample"
                />
              </div>
              <div className="col-4">
                <img
                  src={Data[state].icon5}
                  className="img-fluid html"
                  alt="black sample"
                />
              </div>
              <div className="col-4 ">
                <div>
                  <img
                    src={Data[state].icon6}
                    className="img-fluid html"
                    alt="black sample"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
