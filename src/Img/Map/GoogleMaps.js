import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

class GoogleMaps extends Component {
  state = {
    center: {
      lat: 49.2570935,
      lng: 4.0202065
    },
    zoom: 17.54
  };

  render() {
    return (
      <div
        style={{
          height: "60vh",
          width: "100%"
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCeDmh4OYEnE1NDKhAu1u66yDln-AQXEyM" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Marker lat={49.2570935} lng={4.0202065} />
          <Marker lat={49.2572721} lng={4.0188815} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMaps;
