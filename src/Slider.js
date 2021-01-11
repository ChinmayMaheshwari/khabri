import React, { Component } from "react";

import logo from "./logo.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class DemoCarousel extends Component {
  render() {
    return (
      <div style={{ width: "60%", margin: "auto" }}>
        <Carousel>
          <div>
            <img src={logo} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
