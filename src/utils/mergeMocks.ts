import { mockEquipments } from "../data/mockEquipment";
import { mockEquipmentPositionHistory } from "../data/mockEquipmentPositionHistory";
import { mockEquipmentStateHistory } from "../data/mockEquipmentStateHistory";
import { mockEquipmentModels } from "./../data/mockEquipmentModel";
import { mockEquipmentState } from "./../data/mockEquipmentState";

export function getEquipmentsMerged() {
  return mockEquipments.map((eq) => {
    const model = mockEquipmentModels.find((m) => m.id === eq.equipmentModelId);
    const stateHist = mockEquipmentStateHistory.find(
      (s) => s.equipmentId === eq.id,
    );
    const lastStateId =
      stateHist?.states[stateHist.states.length - 1]?.equipmentStateId;
    const state = mockEquipmentState.find((s) => s.id === lastStateId);
    const posHist = mockEquipmentPositionHistory.find(
      (p) => p.equipmentId === eq.id,
    );
    const lastPosition = posHist?.positions[posHist.positions.length - 1];

    return {
      id: eq.id,
      name: eq.name,
      model: model?.name || "Modelo Desconhecido",
      state: state?.name || "Estado Desconhecido",
      color: state?.color || "#ccc",
      position: lastPosition ? [lastPosition.lat, lastPosition.lon] : [0, 0],
      hourlyEarnings: model?.hourlyEarnings || 0,
    };
  });
}
