// MapComponent.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mappin from "./mappin.png";
import "./map.css";

const Map = () => {
  const position = [50.0755, 14.4378]; // Coordinates for 23 Greenfield Avenue, Prague 120 00

  const customIcon = L.icon({
    iconUrl: mappin,
    iconSize: [38, 38], // Adjust size as needed
    iconAnchor: [19, 38], // Adjust anchor point as needed
    popupAnchor: [0, -38], // Adjust popup anchor point as needed
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "25px",
        zIndex: "0",
      }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>23 Greenfield Avenue, Prague 120 00</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
