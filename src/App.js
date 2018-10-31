import React, { Component } from "react";
import "./App.css";
import { Container, Col, Row } from "reactstrap";
import GoogleMaps from "./Map/googleMaps";
import CandiesList from "./CandiesList";

const listCandies = [
  "3103220025338",
  "3116740017332",
  "7622210303646",
  "7622210152619",
  "3103220009130",
  "5000159386821",
  "3501271113033"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCandies: [],
      candiesUnlocked: {}
    };
    this.displayCandyDex = this.displayCandyDex.bind(this);
    this.unlockCandy = this.unlockCandy.bind(this);
  }

  displayCandyDex (list) {
    let result = [];
    let temp = "";
    let found = {};
    for (let prop in list) {
      if (list[prop]) {
        found = this.state.allCandies.find(function(element) {
          return element.code === prop
        });
        temp = `${found.product.product_name_fr}`;
        result = [...result, temp];
      }
      else {
        temp = `???`;
        result = [...result, temp];
      };
    };
    return result;
  }
  
  unlockCandy(id) {
    this.setState({ candiesUnlocked: {...this.state.candiesUnlocked, [id]: true } });
  }

  componentDidMount() {
    listCandies.map(candy =>
      fetch(`https://fr.openfoodfacts.org/api/v0/produit/${candy}.json`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            allCandies: [...this.state.allCandies, data],
            candiesUnlocked: {
              ...this.state.candiesUnlocked,
              [candy]: false
            }
          });
        })
    );
  }

  render() {
    return (
      <div className="App">
        <GoogleMap />
        <button onClick={() => this.unlockCandy("5000159386821")}>test</button>
        <CandiesList list={this.displayCandyDex(this.state.candiesUnlocked)}/>

      </div>
    );
  }
}

export default App;
