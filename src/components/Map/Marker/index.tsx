import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Equipment } from "../../../types/equipment";
import getEquipmentMapIcon from "../../../utils/map";
import MarkerPopup from "./MarkerPopup";

interface EquipmentMarkerProps {
  equipment: Equipment;
  isSelected: boolean;
  onSelect: (equipment: Equipment) => void;
}

const EquipmentMarker: React.FC<EquipmentMarkerProps> = ({
  equipment,
  isSelected,
  onSelect,
}) => {
  const icon = getEquipmentMapIcon({
    model: equipment.model,
    state: equipment.state,
    color: equipment.color,
    isSelected,
  });

  return (
    <Marker
      position={equipment.position}
      icon={icon}
      eventHandlers={{
        click: () => onSelect(equipment),
      }}
    >
      <Popup>
        <MarkerPopup equipment={equipment} />
      </Popup>
    </Marker>
  );
};

export default EquipmentMarker;
