import React from "react";
import Map from "../components/Map";
import { Avatar, List } from "antd";

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

const EquipList: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <a href="https://ant.design" className="list-item">
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={item.title}
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

const HomePage: React.FC = () => {
  return (
    <main className="main-container">
      {/* <h1>Mapa de equipamentos hihi</h1> */}
      <div className="equipments-container">
        <div className="side-bar">
          <div className="equipments-listed">
            <h1>Mapa de Equipamentos</h1>
            <span>
              Clique em um equipamento para ver mais informações sobre ele.
            </span>
            <div className="equipments-list">
              <EquipList />
            </div>
          </div>
          <div className="equipments-detailed">
            <h3>
              Equipamento <b>blábláblá</b>
            </h3>
            <p>
              Aqui estão os equipamentos disponíveis. Clique em um equipamento
              para ver mais detalhes.
            </p>
          </div>
        </div>
        <Map />
      </div>
    </main>
  );
};

export default HomePage;
