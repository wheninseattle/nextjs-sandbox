import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { useState } from "react";

const map = () => {
  const [state, setState] = useState({
    userLocationAvailable: false,
    userLocation: [],
  });

  let defaultLocation = [40.695403, -73.932328];

  const getUserLocation = () => {
    if (navigator.geolocation) {
      const position = navigator.geolocation.getCurrentPosition(setUserLocation);
      console.table(position)
    } else {
      console.log("User location not available");
    }
  };

  const setUserLocation = (position) => {
    setState({
      ...state,
      userLocationAvailable: true,
      userLocation: [position.coords.latitude, position.coords.longitude],
    });
  };

  return (
    <MapContainer center={location} scrollWheelZoom={false} zoom={17}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default map;
