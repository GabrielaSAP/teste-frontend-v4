import React from "react";
import Map from "../components/map/Map";
import {
  Avatar,
  List,
  Descriptions,
  DescriptionsProps,
  Badge,
  Timeline,
} from "antd";
import {
  CheckCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";
import EquipList from "../components/equipment/EquipList";
import { getEquipmentsMerged } from "../utils/mergeMocks";

const items: DescriptionsProps["items"] = [
  {
    label: "Modelo",
    span: "filled", // span = 1
    children: "Garra Traçadora",
  },
  {
    label: "Estado",
    span: "filled", // span = 2
    children: <Badge status="success" text="operando" />,
  },
  {
    label: "Ganhos por hora",
    span: "filled", // span = 3
    children: "R$ 70,00",
  },
];

const data = [
  {
    title: "Equipamento CA-0001",
    state: "operating",
    position: [-19.151801, -46.00775],
    model: "Garra Traçadora",
  },
  {
    title: "Equipamento CA-0002",
    state: "paused",
    position: [-19.151801, -46.00775],
    model: "Harvester",
  },
  {
    title: "Equipamento CA-0003",
    state: "maintenance",
    position: [-19.151801, -46.00775],
    model: "Caminhão de Carga",
  },
  {
    title: "Equipamento CA-0004",
    state: "operating",
    position: [-19.151801, -46.00775],
    model: "Escavadeira",
  },
];

const EquipDetail: React.FC = () => <Descriptions bordered items={items} />;

const HomePage: React.FC = () => {
  const equipments = getEquipmentsMerged();
  return (
    <main className="main-container">
      {/* <h1>Mapa de equipamentos hihi</h1> */}
      <div className="equipments-container">
        <div className="side-bar">
          <div style={{ padding: "1em 0", borderBottom: "1px solid #e8e8e8" }}>
            <h2>Mapa de Equipamentos</h2>
            <span>
              Clique em um equipamento para ver mais informações sobre ele.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "1em",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <div className="equipments-listed">
              <div className="equipments-list">
                <EquipList equipments={equipments} />
              </div>
            </div>
            <div className="equipments-detailed">
              <h3>Equipamento CA-0001</h3>
              <div style={{ overflow: "auto" }}>
                <EquipDetail />
                <h3 style={{ padding: "1em 0" }}>Histórico</h3>
                <div style={{ padding: "0 1em" }}>
                  <Timeline
                    items={[
                      {
                        children: "Create a services site 2015-09-01",
                      },
                      {
                        children: "Solve initial network problems 2015-09-01",
                      },
                      {
                        dot: (
                          <CheckCircleFilled className="timeline-clock-icon" />
                        ),
                        color: "red",
                        children: "Technical testing 2015-09-01",
                      },
                      {
                        children: "Network problems being solved 2015-09-01",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </main>
  );
};

export default HomePage;
