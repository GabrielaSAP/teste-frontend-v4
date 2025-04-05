import { MapContainer, TileLayer } from "react-leaflet";
import CustomMarker, { StateName } from "./TooltipDetails";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[-19, -46]}
      zoom={5}
      style={{ height: "100%", width: "60%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CustomMarker
        position={[-19.151801, -46.00775]}
        name="Equipamento CA-0001"
        stateName={StateName.OPERATING}
      />
    </MapContainer>
  );
};

export default Map;
