import React from "react";
import "../style/Contents.css";
import image1 from "../img/Version control-cuate.svg";
const About = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row titre">
            <div className="col-12">
              <h4>Welcome to my story</h4>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid About">
          <div className="row">
            <div className="col-4">
              <img
                src={image1}
                className="img-fluid image1"
                alt="black sample"
              />
            </div>
            <div className="col-2"></div>
            <div className="col-6 aboutText">
              <h6>hamza</h6>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                eligendi sequi veniam harum aperiam id corrupti unde ipsa
                delectus quo totam possimus accusamus neque, odio quasi?
                Obcaecati eaque voluptatem sit.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
