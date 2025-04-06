import React from "react";
import { Equipment } from "../../types/equipment";
import { Badge, Descriptions, DescriptionsProps, Timeline } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

interface EquipDetailProps {
  equipment: Equipment | null;
}

const EquipDetail: React.FC<EquipDetailProps> = ({ equipment }) => {
  if (!equipment) {
    return (
      <div style={{ padding: "1em" }}>
        <h3>Nenhum equipamento selecionado</h3>
        <p>Selecione um equipamento na lista ou no mapa para ver detalhes.</p>
      </div>
    );
  }

  const { name, model, state, color, position } = equipment;

  const items: DescriptionsProps["items"] = [
    {
      label: "Modelo",
      span: "filled",
      children: model,
    },
    {
      label: "Estado",
      span: "filled",
      children: (
        <Badge
          status={
            state === "Operando"
              ? "success"
              : state === "Parado"
                ? "error"
                : "warning"
          }
          text={state}
        />
      ),
    },
    {
      label: "Ganhos por hora",
      span: "filled",
      children: "R$ 70,00",
    },
    {
      label: "Posição",
      span: "filled",
      children: `${position[0]}, ${position[1]}`,
    },
  ];

  return (
    <div className="equipments-detailed">
      <h3>{name}</h3>
      <div style={{ overflow: "auto" }}>
        <Descriptions bordered items={items} />
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
                dot: <CheckCircleFilled className="timeline-clock-icon" />,
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
  );
};

export default EquipDetail;
