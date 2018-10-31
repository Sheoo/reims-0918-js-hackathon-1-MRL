import React, { Component } from "react";
import house from "./Img/cuisine_N.jpg";
import croco from "./Img/hari-croco-300x300.png";
import "./HauntedHouses.css";
import Countdown from "./Countdown";

class HauntedHouses extends Component {
  constructor() {
    super();
    this.state = {
      croco: false,
      croco1: false,
      croco2: false,
      croco3: false,
      croco4: false
    };
  }

  handleClick1() {
    this.setState({ croco1: true });
  }

  handleClick() {
    this.setState({ croco: true });
  }

  handleClick2() {
    this.setState({ croco2: true });
  }

  handleClick3() {
    this.setState({ croco3: true });
  }
  handleClick4() {
    this.setState({ croco4: true });
  }

  render() {
    return (
      <div className="d-flex">
        <img className="house" src={house} alt="house" />
        <div className="countdown">
        <Countdown  crocos={Object.values(this.state)}/>
        </div>
        <img
          onClick={() => this.handleClick()}
          className={this.state.croco ? "crocovis" : "croco"}
          src={croco}
          alt="croco"
        />
        <img
          onClick={() => this.handleClick1()}
          className={this.state.croco1 ? "croco1vis" : "croco1"}
          src={croco}
          alt="croco"
        />
        <img
          onClick={() => this.handleClick2()}
          className={this.state.croco2 ? "croco2vis" : "croco2"}
          src={croco}
          alt="croco"
        />
        <img
          onClick={() => this.handleClick3()}
          className={this.state.croco3 ? "croco3vis" : "croco3"}
          src={croco}
          alt="croco"
        />
        <img
          onClick={() => this.handleClick4()}
          className={this.state.croco4 ? "croco4vis" : "croco4"}
          src={croco}
          alt="croco"
        />
      </div>
    );
  }
}

export default HauntedHouses;
