export type EquipmentStateName = "Operando" | "Parado" | "Manutenção";

export interface Equipment {
  id: string;
  name: string;
  state: EquipmentStateName;
  model: string;
  color: string;
  position: [number, number];
  hourlyEarnings: number | { equipmentStateId: string; value: number }[];
  statusHistory?: { date: string; state: EquipmentStateName }[];
  positionHistory?: { date: string; lat: number; lon: number }[];
}
