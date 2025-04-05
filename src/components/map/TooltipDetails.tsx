import React from "react";
import { Marker, Popup } from "react-leaflet";
import {
  CheckCircleOutlined,
  EditOutlined,
  EllipsisOutlined,
  PauseCircleOutlined,
  SettingOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { Flex, Switch, Card, Avatar } from "antd";

export enum StateName {
  OPERATING = "operando",
  PAUSED = "parado",
  MAINTENANCE = "manutenção",
}

interface EquipmentPopupProps {
  name: string;
  stateName: StateName;
  position: [latitude: number, longitude: number];
}

const App: React.FC<EquipmentPopupProps> = ({ name, stateName, position }) => {
  return (
    <Flex gap="middle" align="start" vertical>
      <Card size="small" style={{ minWidth: 300 }}>
        <Card.Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          }
          title={name}
          description={
            <>
              <p>
                <b>Status:</b> {stateName}
              </p>
              <p>
                <b>Posição:</b> {position[0]}, {position[1]}
              </p>
              <p>
                <b>Última atualização:</b> Data xx/yy - hh:mm
              </p>
            </>
          }
        />
      </Card>
    </Flex>
  );
};

const EquipmentPopup: React.FC<EquipmentPopupProps> = ({
  name,
  stateName,
  position,
}) => {
  return (
    <div className="popup-container">
      <h3 className="popup-title">{name}</h3>
      <div className="popup-grid">
        <div className="popup-row">
          <strong>Status:</strong>
          {stateName === StateName.OPERATING ? (
            <span className="popup-state-ok">
              <CheckCircleOutlined className="icon-active" />
              {stateName}
            </span>
          ) : stateName === StateName.PAUSED ? (
            <span className="popup-state-paused">
              <PauseCircleOutlined className="icon-paused" />
              {stateName}
            </span>
          ) : (
            <span className="popup-state-error">
              <ToolOutlined className="icon-maintenance" />
              {stateName}
            </span>
          )}
        </div>
        <div className="popup-row">
          <strong>Posição:</strong> {position}
        </div>
      </div>
      <button className="popup-button">+ Detalhes</button>
    </div>
  );
};

const CustomMarker: React.FC<EquipmentPopupProps> = ({
  name,
  stateName,
  position,
}) => {
  return (
    <Marker position={position}>
      <Popup>
        <App name={name} stateName={stateName} position={position} />
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
