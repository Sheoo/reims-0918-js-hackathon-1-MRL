import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Button } from "reactstrap";
import House from "../Img/House.png";

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
      showingInfoWindow: true,
      selectedCandy: marker.candyIndex
    });
  render() {
    const style = {
      width: "100%",
      height: "90vh"
    };
    const handleClick = this.props.handleClick;
    return (
      <div>
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
            icon={{
              url: House,
              scaledSize: new this.props.google.maps.Size(40, 40)
            }}
            className="marker"
            name={"House1"}
            candyIndex={2}
            onClick={handleClick}
            position={{
              lat: 49.2570935,
              lng: 4.0202065
            }}
          />
          <Marker
            icon={{
              url: House,
              scaledSize: new this.props.google.maps.Size(40, 40)
            }}
            className="marker"
            name={"House2"}
            candyIndex={3}
            onClick={handleClick}
            position={{
              lat: 49.257202,
              lng: 4.0189
            }}
          />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCeDmh4OYEnE1NDKhAu1u66yDln-AQXEyM"
})(googleMaps);
