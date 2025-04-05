export type EquipmentStateName = "Operando" | "Parado" | "Manutenção";

export interface Equipment {
  id: string;
  name: string;
  model: string;
  state: EquipmentStateName;
  position: [number, number];
  color: string;
  hourlyEarnings: number;
  statusHistory: { date: string; state: EquipmentStateName }[];
  positionHistory: { date: string; position: [number, number] }[];
}
