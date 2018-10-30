import React, { Component } from "react";
import "./App.css";
import "";

const listCandys = [
  3103220025338,
  3116740017332,
  7622210303646,
  7622210152619,
  3103220009130,
  5000159386821,
  3501271113033
];

class App extends Component {
  state = {
    candys: []
  };

  componentDidMount() {
    this.getCandys();
  }

  getCandys() {
    for (let i = 0; i < listCandys.length; i++) {
      fetch(`https://fr.openfoodfacts.org/api/v0/produit/${listCandys[i]}.json`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            candys: [...this.state.candys, data]
          });
        });
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.candys.map(candy => (
          <div key={candy.code}>
            <p>{candy.product.product_name}</p>
            <img
              src={candy.product.image_small_url}
              alt={candy.product.product_name}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
