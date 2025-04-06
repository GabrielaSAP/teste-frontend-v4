import React, { useEffect, useRef } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { Equipment } from "../../../types/equipment";
import getEquipmentMapIcon from "../../../utils/map";
import MarkerPopup from "./MarkerPopup";
import L from "leaflet";

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

  const markerRef = useRef<L.Marker | null>(null);
  const map = useMap();

  useEffect(() => {
    if (isSelected && markerRef.current) {
      markerRef.current.openPopup();
      map.flyTo(equipment.position, map.getZoom());
    }
  }, [isSelected]);

  return (
    <Marker
      position={equipment.position}
      icon={icon}
      eventHandlers={{
        click: () => onSelect(equipment),
      }}
      ref={(ref) => {
        if (ref) {
          markerRef.current = ref;
        }
      }}
    >
      <Popup>
        <MarkerPopup equipment={equipment} />
      </Popup>
    </Marker>
  );
};

export default EquipmentMarker;
