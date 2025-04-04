export type EquipmentModel = {
  id: string;
  name: string;
  hourlyEarnings: {
    equipmentStateId: string;
    value: number;
  }[];
};

export const mockEquipmentModels: EquipmentModel[] = [
  {
    id: "a3540227-2f0e-4362-9517-92f41dabbfdf",
    name: "Caminhão de carga",
    hourlyEarnings: [
      {
        equipmentStateId: "0808344c-454b-4c36-89e8-d7687e692d57",
        value: 100,
      },
      {
        equipmentStateId: "baff9783-84e8-4e01-874b-6fd743b875ad",
        value: -5,
      },
      {
        equipmentStateId: "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f",
        value: -20,
      },
    ],
  },
  {
    id: "a4b0c114-acd8-4151-9449-7d12ab9bf40f",
    name: "Harvester",
    hourlyEarnings: [
      {
        equipmentStateId: "0808344c-454b-4c36-89e8-d7687e692d57",
        value: 200,
      },
      {
        equipmentStateId: "baff9783-84e8-4e01-874b-6fd743b875ad",
        value: -10,
      },
      {
        equipmentStateId: "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f",
        value: -50,
      },
    ],
  },
  {
    id: "9c3d009e-0d42-4a6e-9036-193e9bca3199",
    name: "Garra traçadora",
    hourlyEarnings: [
      {
        equipmentStateId: "0808344c-454b-4c36-89e8-d7687e692d57",
        value: 70,
      },
      {
        equipmentStateId: "baff9783-84e8-4e01-874b-6fd743b875ad",
        value: 0,
      },
      {
        equipmentStateId: "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f",
        value: -10,
      },
    ],
  },
];
