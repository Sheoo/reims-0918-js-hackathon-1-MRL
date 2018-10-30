import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

class GoogleMaps extends Component {
  state = {
    center: {
      lat: 49.2570935,
      lng: 4.0202065
    },
    zoom: 17.54,
    hauntedHouses: [
      { id: "1", lat: 49.2570935, lng: 4.0202065 },
      { id: "2", lat: 49.2572721, lng: 4.0188815 },
      { id: "3", lat: 49.2582804, lng: 4.0175458 }
    ]
  };

  render() {
    const places = this.state.hauntedHouses.map(place => {
      const { id, ...coords } = place;
      return <Marker key={id} {...coords} />;
    });
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
          {places}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMaps;
