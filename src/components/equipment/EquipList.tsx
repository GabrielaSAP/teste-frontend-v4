import React from "react";
import { List, Badge, Avatar } from "antd";
import {
  TruckOutlined,
  ForkOutlined,
  ToolOutlined,
  CheckCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";
import { Equipment, EquipmentStateName } from "../../types/equipment";

type EquipListProps = {
  equipments: Equipment[];
};

const getModelIcon = (model: string) => {
  switch (model) {
    case "Garra traçadora":
      return <ForkOutlined style={{ color: "#000" }} />;
    case "Harvester":
      return <ToolOutlined style={{ color: "#000" }} />;
    case "Caminhão de carga":
      return <TruckOutlined style={{ color: "#000" }} />;
    default:
      return <Avatar icon="?" style={{ color: "#000" }} />;
  }
};

const getStateIcon = (state: EquipmentStateName, color: string) => {
  switch (state) {
    case "Operando":
      return <CheckCircleFilled style={{ color }} />;
    case "Parado":
      return <CloseCircleFilled style={{ color }} />;
    case "Manutenção":
      return <ExclamationCircleFilled style={{ color }} />;
    default:
      return null;
  }
};

const EquipList: React.FC<EquipListProps> = ({ equipments }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={equipments}
      renderItem={(item) => (
        <List.Item>
          <a className="list-item" href="/">
            <List.Item.Meta
              avatar={
                <Badge count={getStateIcon(item.state, item.color)}>
                  <Avatar
                    icon={getModelIcon(item.model)}
                    shape="circle"
                    size="large"
                    style={{ backgroundColor: "#f0f0f0" }}
                  />
                </Badge>
              }
              title={item.name}
              description={
                <span>
                  <b>Estado:</b> {item.state}
                  <br />
                  <b>Modelo:</b> {item.model}
                  <br />
                  <b>Posição atual:</b> {item.position[0]} {item.position[1]}
                </span>
              }
            />
          </a>
        </List.Item>
      )}
    />
  );
};

export default EquipList;
