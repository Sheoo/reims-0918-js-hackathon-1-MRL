import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Button } from "reactstrap";
import House from "../Img/House.png";
import HouseHover from "../Img/House-white.png";

export class googleMaps extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  render() {
    const style = {
      width: "100%",
      height: "90vh"
    };
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 49.2570935,
          lng: 4.0202065
        }}
        zoom={16}
      >
        <Marker
          icon={{ url: House }}
          className="marker"
          name={"House1"}
          onClick={this.onMarkerClick}
          position={{
            lat: 49.2570935,
            lng: 4.0202065
          }}
        />
        {this.state.activeMarker.name === "House1" && (
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <ul>
                <li>Dragibus</li>
                <li>Daim</li>
                <li>Arlequin</li>
              </ul>
            </div>
            <Button>Play !</Button>
          </InfoWindow>
        )}
        <Marker
          icon={{ url: House }}
          onMouseOver={{ url: HouseHover }}
          className="marker"
          name={"House2"}
          onClick={this.onMarkerClick}
          position={{
            lat: 49.2470935,
            lng: 4.0202065
          }}
        />
        {this.state.activeMarker.name === "House2" && (
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <ul>
                <li>Crocodile</li>
                <li>Dragibus</li>
                <li>Têtes Brûlées</li>
                <li>Carambar</li>
              </ul>
              <Button>Play !</Button>
            </div>
          </InfoWindow>
        )}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCeDmh4OYEnE1NDKhAu1u66yDln-AQXEyM"
})(googleMaps);
