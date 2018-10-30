import React, { Component } from "react";
import House from "../Img/House.png";
import HouseHover from "../Img/House-white.png";

import { greatPlaceStyle } from "./MarkerStyle";

export default class Marker extends Component {
  render() {
    return (
      <div>
        {this.props.$hover ? (
          <img
            className="marker"
            style={greatPlaceStyle}
            src={HouseHover}
            alt="HouseHover"
          />
        ) : (
          <img
            className="marker"
            style={greatPlaceStyle}
            src={House}
            alt="House"
          />
        )}
      </div>
    );
  }
}
