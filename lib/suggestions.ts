import type { Component, ComponentType } from "./types"
import { getComponents } from "./data"

export function getComponentSuggestions(
  selectedComponents: Record<ComponentType, Component | null>,
): Record<ComponentType, Component[]> {
  const suggestions: Record<ComponentType, Component[]> = {
    cpu: [],
    gpu: [],
    ram: [],
    storage: [],
    motherboard: [],
    powerSupply: [],
    case: [],
    cooling: [],
  }

  // CPU suggestions based on selected motherboard
  if (selectedComponents.motherboard && !selectedComponents.cpu) {
    const motherboard = selectedComponents.motherboard
    const cpus = getComponents("cpu")
    suggestions.cpu = cpus.filter((cpu) => cpu.compatibility.socket === motherboard.compatibility.socket).slice(0, 3)
  }

  // Motherboard suggestions based on selected CPU
  if (selectedComponents.cpu && !selectedComponents.motherboard) {
    const cpu = selectedComponents.cpu
    const motherboards = getComponents("motherboard")
    suggestions.motherboard = motherboards
      .filter((mb) => mb.compatibility.socket === cpu.compatibility.socket)
      .slice(0, 3)
  }

  // RAM suggestions based on selected motherboard
  if (selectedComponents.motherboard && !selectedComponents.ram) {
    const motherboard = selectedComponents.motherboard
    const rams = getComponents("ram")
    suggestions.ram = rams
      .filter((ram) => ram.compatibility.memoryType === motherboard.compatibility.memoryType)
      .slice(0, 3)
  }

  // Power supply suggestions based on selected GPU and CPU
  if ((selectedComponents.gpu || selectedComponents.cpu) && !selectedComponents.powerSupply) {
    const powerSupplies = getComponents("powerSupply")
    let requiredWattage = 300 // Base wattage

    if (selectedComponents.cpu) {
      requiredWattage += selectedComponents.cpu.compatibility.tdp || 0
    }

    if (selectedComponents.gpu) {
      requiredWattage += selectedComponents.gpu.compatibility.tdp || 0
    }

    // Add 20% overhead
    requiredWattage = Math.ceil(requiredWattage * 1.2)

    suggestions.powerSupply = powerSupplies
      .filter((psu) => psu.compatibility.wattage >= requiredWattage)
      .sort((a, b) => a.compatibility.wattage - b.compatibility.wattage)
      .slice(0, 3)
  }

  // Case suggestions based on selected motherboard
  if (selectedComponents.motherboard && !selectedComponents.case) {
    const motherboard = selectedComponents.motherboard
    const cases = getComponents("case")

    // Filter cases that can fit the motherboard
    if (motherboard.compatibility.formFactor === "ATX") {
      // ATX motherboards need ATX cases
      suggestions.case = cases.filter((c) => c.compatibility.formFactor === "ATX").slice(0, 3)
    } else if (motherboard.compatibility.formFactor === "Micro-ATX") {
      // Micro-ATX motherboards can fit in ATX or Micro-ATX cases
      suggestions.case = cases
        .filter((c) => c.compatibility.formFactor === "ATX" || c.compatibility.formFactor === "Micro-ATX")
        .slice(0, 3)
    } else if (motherboard.compatibility.formFactor === "Mini-ITX") {
      // Mini-ITX motherboards can fit in any case
      suggestions.case = cases.slice(0, 3)
    }
  }

  // Cooling suggestions based on selected CPU
  if (selectedComponents.cpu && !selectedComponents.cooling) {
    const cpu = selectedComponents.cpu
    const coolers = getComponents("cooling")

    suggestions.cooling = coolers
      .filter((cooler) => cooler.compatibility.tdp >= (cpu.compatibility.tdp || 0))
      .slice(0, 3)
  }

  // GPU suggestions based on selected power supply
  if (selectedComponents.powerSupply && !selectedComponents.gpu) {
    const powerSupply = selectedComponents.powerSupply
    const gpus = getComponents("gpu")

    // Reserve 200W for other components
    const availableWattage = powerSupply.compatibility.wattage - 200

    suggestions.gpu = gpus
      .filter((gpu) => (gpu.compatibility.tdp || 0) <= availableWattage)
      .sort((a, b) => b.compatibility.tdp - a.compatibility.tdp)
      .slice(0, 3)
  }

  // Storage suggestions based on selected motherboard
  if (selectedComponents.motherboard && !selectedComponents.storage) {
    const motherboard = selectedComponents.motherboard
    const storages = getComponents("storage")

    if (motherboard.compatibility.storageInterface?.includes("PCIe 4.0")) {
      // Suggest PCIe 4.0 NVMe SSDs for modern motherboards
      suggestions.storage = storages
        .filter((storage) => storage.compatibility.storageInterface?.includes("PCIe 4.0"))
        .slice(0, 3)
    } else {
      // Suggest SATA SSDs for older motherboards
      suggestions.storage = storages
        .filter((storage) => storage.compatibility.storageInterface?.includes("SATA"))
        .slice(0, 3)
    }
  }

  return suggestions
}

