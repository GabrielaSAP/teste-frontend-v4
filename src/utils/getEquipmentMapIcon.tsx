import { divIcon } from "leaflet";
import { renderToString } from "react-dom/server";
import { EquipmentStateName } from "../types/equipment";
import ModelIcon from "../components/shared/ModelIcon";

interface GetEquipmentMapIconProps {
  model: string;
  state: EquipmentStateName;
  color: string;
}

const getEquipmentMapIcon = ({ model, color }: GetEquipmentMapIconProps) => {
  return divIcon({
    className: "",
    html: `<div class="marker-wrapper" style="background-color: ${color}">${renderToString(<ModelIcon model={model} />)}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

export default getEquipmentMapIcon;
