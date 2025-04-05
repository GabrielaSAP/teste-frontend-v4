import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import EquipmentMarker from "./EquipmentMarker";
import { Equipment } from "../../types/equipment";
import "leaflet/dist/leaflet.css";

type MapProps = {
  equipments: Equipment[];
};

const Map: React.FC<MapProps> = ({ equipments }) => {
  return (
    <MapContainer
      center={[-19, -46]}
      zoom={11}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {equipments.map((equipment) => (
        <EquipmentMarker
          key={equipment.id}
          name={equipment.name}
          model={equipment.model}
          state={equipment.state}
          color={equipment.color}
          position={equipment.position}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
