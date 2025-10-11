export type ComponentType =
  | "cpu"
  | "gpu"
  | "ram"
  | "storage"
  | "motherboard"
  | "powerSupply"
  | "case"
  | "cooling"
  | "monitor"
  | "keyboard"
  | "mouse"
  | "headset"
  | "operatingSystem"
  | "networkCard"
  | "soundCard"
  | "fan"
  | "thermalPaste"
  | "ups"
  | "controller";
export interface Component {
  id: string;
  type: ComponentType;
  imageUrl: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  description: string;
  specs: Record<string, string>;
  tags: string[];
  compatibility: {
    socket?: string;
    chipset?: string[];
    formFactor?: string;
    tdp?: number;
    wattage?: number;
    memoryType?: string;
    pciSlots?: number;
    storageInterface?: string[];
  };
}
