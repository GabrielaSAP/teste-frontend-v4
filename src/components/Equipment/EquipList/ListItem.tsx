import React from "react";
import { Badge, Avatar, List } from "antd";
import { Equipment } from "../../../types/equipment";
import { getModelIcon, getStateIcon } from "./Icons";

type EquipmentItemProps = {
  equipment: Equipment;
  onSelect: (equipment: Equipment) => void;
  selected: boolean;
};

const EquipmentItem: React.FC<EquipmentItemProps> = ({
  equipment,
  onSelect,
  selected,
}) => {
  const { name, model, state, color, position } = equipment;

  return (
    <List.Item
      style={{ cursor: "pointer" }}
      onClick={() => onSelect(equipment)}
      className={selected ? "equipment-item selected" : "equipment-item"}
    >
      <List.Item.Meta
        avatar={
          <Badge count={getStateIcon(state, color)}>
            <Avatar
              icon={getModelIcon(model)}
              shape="circle"
              size="large"
              style={{ backgroundColor: "#f0f0f0" }}
            />
          </Badge>
        }
        title={name}
        description={
          <span>
            <b>Estado:</b> {state}
            <br />
            <b>Modelo:</b> {model}
            <br />
            <b>Posição atual:</b> {position[0]} {position[1]}
          </span>
        }
      />
    </List.Item>
  );
};

export default EquipmentItem;
