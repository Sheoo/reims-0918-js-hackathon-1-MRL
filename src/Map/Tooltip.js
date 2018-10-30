import React, { Component } from "react";

import { greatPlaceStyle, greatPlaceStyleHover } from "./TooltipStyle";

export default class MyGreatPlaceWithControllableHover extends Component {
  static propTypes = {
    // use hover from controllable

    housesContains: [
      {
        b1: "Daim",
        b2: "Dragibus",
        b3: "Arlequin"
      },
      { b1: "Daim", b2: "Dragibus", b3: "Arlequin" },
      { b1: "Daim", b2: "Dragibus", b3: "Arlequin" }
    ]
  };

  render() {
    return (
      <div className="hint hint--html hint--info hint--top">
        {
          <div style={{ width: 80 }} className="hint__content">
            Сlick me
          </div>
        }
      </div>
    );
  }
}
