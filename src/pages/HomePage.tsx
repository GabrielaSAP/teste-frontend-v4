import React, { useState } from "react";
import Map from "../components/map/Map";
import EquipDetail from "../components/Equipment/EquipDetail";
import EquipList from "../components/Equipment/Equiplist/EquipList";
import { getEquipmentsMerged } from "../utils/mergeMocks";
import { Equipment } from "../types/equipment";

const HomePage: React.FC = () => {
  const equipments = getEquipmentsMerged();
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(
    null,
  );

  return (
    <main className="main-container">
      <h1>Mapa de equipamentos</h1>
      <div className="equipments-container">
        <div className="side-bar">
          {/* <div style={{ padding: "1em 0", borderBottom: "1px solid #e8e8e8" }}>
            <h2 style={{ marginBottom: "0px" }}>Mapa de Equipamentos</h2>
          </div> */}
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
                <EquipList
                  equipments={equipments}
                  onSelect={setSelectedEquipment}
                  selectedEquipment={selectedEquipment}
                />
              </div>
            </div>
            <EquipDetail equipment={selectedEquipment} />
          </div>
        </div>
        <Map
          equipments={equipments}
          onSelect={setSelectedEquipment}
          selectedEquipment={selectedEquipment}
        />
      </div>
    </main>
  );
};

export default HomePage;
