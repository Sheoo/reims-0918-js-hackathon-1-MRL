import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import ImageMapper from "react-image-mapper";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Footer />
      </div>
    );
  }
}

export default App;
