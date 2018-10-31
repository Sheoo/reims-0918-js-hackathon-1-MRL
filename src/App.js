import React, { Component } from "react";
import "./App.css";
import { Container, Col, Row } from "reactstrap";
import GoogleMaps from "./Map/googleMaps";

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
      <div>
        <Container className="ml-0">
          <Row>
            <GoogleMaps />
          </Row>
          <Row className="position">
            {this.state.candys.map(candy => (
              <Col xs={3} key={candy.code}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={candy.product.image_small_url}
                    alt={candy.product.product_name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{candy.product.product_name}</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
