import React from "react";
import { Equipment } from "../../types/equipment";
import { Badge, Descriptions, DescriptionsProps, Timeline } from "antd";
import {
  EnvironmentOutlined,
  SyncOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import StateIcon from "../shared/StateIcon";

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
  const {
    name,
    model,
    state,
    color,
    position,
    stateHistory = [],
    positionHistory = [],
    equipmentStates = [],
  } = equipment;

  const items: DescriptionsProps["items"] = [
    {
      label: "Modelo",
      span: "filled",
      children: model,
    },
    {
      label: "Estado",
      span: "filled",
      children: <Badge count={StateIcon({ state, color })} text={state} />,
    },
    {
      label: "Ganhos por hora",
      span: "filled",
      children: (() => {
        if (typeof equipment.hourlyEarnings === "number") {
          return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(equipment.hourlyEarnings);
        }
        const currentState = equipment.equipmentStates?.find(
          (s) => s.name === equipment.state,
        );

        const earningsForState = equipment.hourlyEarnings.find(
          (e) => e.equipmentStateId === currentState?.id,
        );
        return earningsForState
          ? new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(earningsForState.value)
          : "Valor não definido";
      })(),
    },
    {
      label: "Posição",
      span: "filled",
      children: `${position[0]}, ${position[1]}`,
    },
  ];
  const stateById = equipmentStates
    ? Object.fromEntries(equipmentStates.map((s) => [s.id, s]))
    : {};

  const combinedHistory = [
    ...(stateHistory?.map((s) => {
      const date = new Date(s.date);
      const state = stateById[s.equipmentStateId];
      return {
        type: "state" as const,
        date,
        dateStr: date.toISOString().split("T")[0],
        hourStr: date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        color: state?.color || "gray",
        text: `Estado: ${state?.name || "Desconhecido"}`,
        icon: <SyncOutlined />,
      };
    }) || []),
    ...(positionHistory?.map((p) => {
      const date = new Date(p.date);
      return {
        type: "position" as const,
        date,
        dateStr: date.toISOString().split("T")[0],
        hourStr: date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        color: "blue",
        text: `Movido para: ${p.lat}, ${p.lon}`,
        icon: <EnvironmentOutlined />,
      };
    }) || []),
  ];

  const groupedByDate: Record<string, typeof combinedHistory> = {};
  combinedHistory.forEach((item) => {
    if (!groupedByDate[item.dateStr]) {
      groupedByDate[item.dateStr] = [];
    }
    groupedByDate[item.dateStr].push(item);
  });

  const timelineItems = Object.entries(groupedByDate)
    .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
    .map(([date, events]) => ({
      color: "gray",
      dot: <ClockCircleOutlined />,
      children: (
        <div>
          <strong>{new Date(date).toLocaleDateString()}</strong>
          <ul style={{ paddingLeft: "1em", margin: 0 }}>
            {events
              .sort((a, b) => b.date.getTime() - a.date.getTime())
              .map((e, idx) => (
                <li key={idx} style={{ color: e.color }}>
                  {e.icon} {e.text}{" "}
                  <em style={{ color: "#999" }}>({e.hourStr})</em>
                </li>
              ))}
          </ul>
        </div>
      ),
    }));
  return (
    <div className="equipments-detailed">
      <h3>Equipamento {name}</h3>
      <div style={{ overflow: "auto" }}>
        <Descriptions bordered items={items} />
        <h3 style={{ padding: "1em 0" }}>Histórico</h3>
        <div style={{ padding: "0 1em" }}>
          <Timeline items={timelineItems} />
        </div>
      </div>
    </div>
  );
};

export default EquipDetail;
