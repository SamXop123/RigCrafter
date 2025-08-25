import type { Component, ComponentType } from "./types";
import { getComponents } from "./data";

// --- Constants for better maintainability ---
const SUGGESTION_COUNT = 3;
const BASE_WATTAGE = 300;
const PSU_RESERVE_WATTAGE = 200;

// --- Helper Functions for each suggestion type ---

function suggestCpus(motherboard: Component): Component[] {
  const cpus = getComponents("cpu");
  const mbSocket = motherboard.compatibility.socket;
  if (!mbSocket) return [];
  
  return cpus
    .filter((cpu) => cpu.compatibility.socket === mbSocket)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, SUGGESTION_COUNT);
}

function suggestMotherboards(cpu: Component): Component[] {
  const motherboards = getComponents("motherboard");
  const cpuSocket = cpu.compatibility.socket;
  if (!cpuSocket) return [];

  return motherboards
    .filter((mb) => mb.compatibility.socket === cpuSocket)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, SUGGESTION_COUNT);
}

function suggestRam(motherboard: Component): Component[] {
  const rams = getComponents("ram");
  const mbMemoryType = motherboard.compatibility.memoryType;
  if (!mbMemoryType) return [];

  return rams
    .filter((ram) => ram.compatibility.memoryType === mbMemoryType)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, SUGGESTION_COUNT);
}

function suggestPowerSupplies(cpu: Component | null, gpu: Component | null): Component[] {
  const powerSupplies = getComponents("powerSupply");
  let requiredWattage = BASE_WATTAGE;

  if (cpu && typeof cpu.compatibility.tdp === "number") {
    requiredWattage += cpu.compatibility.tdp;
  }
  if (gpu && typeof gpu.compatibility.tdp === "number") {
    requiredWattage += gpu.compatibility.tdp;
  }

  requiredWattage = Math.ceil(requiredWattage * 1.2); // Add 20% overhead

  return powerSupplies
    .filter((psu) => typeof psu.compatibility.wattage === "number" && psu.compatibility.wattage >= requiredWattage)
    .sort((a, b) => (a.compatibility.wattage ?? 0) - (b.compatibility.wattage ?? 0))
    .slice(0, SUGGESTION_COUNT);
}

function suggestCases(motherboard: Component): Component[] {
    const cases = getComponents("case");
    const mbFormFactor = motherboard.compatibility.formFactor;

    if (mbFormFactor === "ATX") {
      return cases.filter((c) => c.compatibility.formFactor === "ATX").sort((a, b) => b.rating - a.rating).slice(0, SUGGESTION_COUNT);
    }
    if (mbFormFactor === "Micro-ATX") {
      return cases
        .filter((c) => c.compatibility.formFactor === "ATX" || c.compatibility.formFactor === "Micro-ATX")
        .sort((a, b) => b.rating - a.rating)
        .slice(0, SUGGESTION_COUNT);
    }
    if (mbFormFactor === "Mini-ITX") {
        return cases
            .sort((a, b) => {
                const order: { [key: string]: number } = {
                    "Mini-ITX": 1,
                    "Micro-ATX": 2,
                    "ATX": 3
                };
                const formFactorA = a.compatibility.formFactor;
                const formFactorB = b.compatibility.formFactor;

                if (!formFactorA || !formFactorB) {
                    return 0; 
                }

                const orderA = order[formFactorA] ?? 99;
                const orderB = order[formFactorB] ?? 99;

                return orderA - orderB;
            })
            .slice(0, SUGGESTION_COUNT);
    }
    return [];
}

function suggestCooling(cpu: Component): Component[] {
  const coolers = getComponents("cooling");
  const cpuTdp = cpu.compatibility.tdp;

  if (typeof cpuTdp !== "number") return [];

  return coolers
    .filter((cooler) => typeof cooler.compatibility.tdp === "number" && cooler.compatibility.tdp >= cpuTdp)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, SUGGESTION_COUNT);
}

function suggestGpus(powerSupply: Component): Component[] {
  const gpus = getComponents("gpu");
  const psuWattage = powerSupply.compatibility.wattage;

  if (typeof psuWattage !== "number") return [];

  const availableWattage = psuWattage - PSU_RESERVE_WATTAGE;

  return gpus
    .filter((gpu) => typeof gpu.compatibility.tdp === "number" && gpu.compatibility.tdp <= availableWattage)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, SUGGESTION_COUNT);
}

function suggestStorage(motherboard: Component): Component[] {
    const storages = getComponents("storage");
    const hasPcie4 = motherboard.compatibility.storageInterface?.includes("PCIe 4.0");

    return storages
        .filter((storage) => {
            const hasInterface = (s_interface: string) => storage.compatibility.storageInterface?.includes(s_interface);
            return hasPcie4 ? hasInterface("PCIe 4.0") : hasInterface("SATA");
        })
        .sort((a, b) => b.rating - a.rating)
        .slice(0, SUGGESTION_COUNT);
}


// --- Main Function ---

export function getComponentSuggestions(
  selectedComponents: Record<ComponentType, Component | null>,
): Record<ComponentType, Component[]> {
  const { cpu, motherboard, ram, gpu, powerSupply, case: pcCase, cooling, storage } = selectedComponents;

  return {
    cpu: motherboard && !cpu ? suggestCpus(motherboard) : [],
    motherboard: cpu && !motherboard ? suggestMotherboards(cpu) : [],
    ram: motherboard && !ram ? suggestRam(motherboard) : [],
    powerSupply: (cpu || gpu) && !powerSupply ? suggestPowerSupplies(cpu, gpu) : [],
    case: motherboard && !pcCase ? suggestCases(motherboard) : [],
    cooling: cpu && !cooling ? suggestCooling(cpu) : [],
    gpu: powerSupply && !gpu ? suggestGpus(powerSupply) : [],
    storage: motherboard && !storage ? suggestStorage(motherboard) : [],
  };
}