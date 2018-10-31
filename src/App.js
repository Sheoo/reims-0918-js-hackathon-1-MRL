import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Col, Row, Button } from "reactstrap";
import GoogleMaps from "./Map/googleMaps";
import CandiesList from "./CandiesList";
import HauntedHouses from "./HauntedHouses";
import Countdown from "./Countdown";

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
      candiesUnlocked: {},
      ready: false
    };
    this.displayCandyDex = this.displayCandyDex.bind(this);
    this.unlockCandy = this.unlockCandy.bind(this);
  }

  displayCandyDex(list) {
    let result = [];
    let temp = "";
    let found = {};
    for (let prop in list) {
      if (list[prop]) {
        found = this.state.allCandies.find(function(element) {
          return element.code === prop;
        });
        temp = `${found.product.product_name_fr}`;
        result = [...result, temp];
      } else {
        temp = `???`;
        result = [...result, temp];
      }
    }
    return result;
  }

  unlockCandy(id) {
    this.setState({
      candiesUnlocked: { ...this.state.candiesUnlocked, [id]: true }
    });
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

  handleCountdown() {
    this.setState({ ready: true });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container className="ml-0">
          <Row>
            <GoogleMaps />
          </Row>
          <Row className="position">
            <Col xs={{ size: 5, offset: 9 }}>
              <CandiesList
                list={this.displayCandyDex(this.state.candiesUnlocked)}
              />
            </Col>
          </Row>
          <Row>
            <Button onClick={() => this.handleCountdown()}>Prêt ?</Button>
            {this.state.ready && (
              <Fragment className="d-flex">
                <Countdown className="countdown" />
                <HauntedHouses />
              </Fragment>
            )}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
