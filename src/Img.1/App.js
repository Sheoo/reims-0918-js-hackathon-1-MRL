import React, { Component } from "react";
import "./App.css";
import GoogleMap from "./Map/GoogleMaps";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMap />
      </div>
    );
  }
}

export default App;
