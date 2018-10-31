import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Col, Row, Button } from "reactstrap";
import GoogleMaps from "./Map/googleMaps";
import CandiesList from "./CandiesList";
import HauntedHouses from "./HauntedHouses";


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
      buttonUnlocked: false,
      ready: false
    };
    this.displayCandyDex = this.displayCandyDex.bind(this);
    this.unlockButton = this.unlockButton.bind(this);
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

  unlockButton() {
    this.setState({
      buttonUnlocked: true
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
            <GoogleMaps handleClick={this.unlockButton} list={listCandies} />
          </Row>
          <Row className="position">
            <Col xs={{ size: 5, offset: 9 }}>
              <CandiesList
                list={this.displayCandyDex(this.state.candiesUnlocked)}
              />
            </Col>
          </Row>
          <Row>
            {this.state.buttonUnlocked && <div>
            <p
              className="font"
              style={{ fontSize: "35px", color: "white", padding: "30px" }}
            >
              Ready to play? Find four candies in the haunted room before it's
              too late{" "}
            </p>
            <Button
              className="font"
              style={{
                height: "75px",
                marginTop: "5px",
                fontSize: "35px",
                backgroundColor: "#040201"
              }}
              onClick={() => this.handleCountdown()}
            >
              Go !
            </Button>
            
            {this.state.ready && (
              <Fragment className="d-flex">
                <HauntedHouses />
              </Fragment>
            )}</div>}
            
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
