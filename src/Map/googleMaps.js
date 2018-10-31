import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Button } from "reactstrap";

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

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
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
          lat: 49.1242534,
          lng: 4.5369589
        }}
        zoom={14}
        onClick={this.onMapClicked}
      >
        <Marker
          name={"House1"}
          onClick={this.onMarkerClick}
          position={{
            lat: 49.1242534,
            lng: 4.5369589
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
          name={"House2"}
          onClick={this.onMarkerClick}
          position={{
            lat: 49.1042534,
            lng: 4.5369589
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
