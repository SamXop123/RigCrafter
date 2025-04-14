import type { Component, ComponentType } from "./types"

export function getCompatibilityIssues(selectedComponents: Record<ComponentType, Component | null>): string[] {
  const issues: string[] = []

  const { cpu, motherboard, ram, gpu, powerSupply, case: pcCase, cooling } = selectedComponents

  // Check CPU and motherboard socket compatibility
  if (cpu && motherboard) {
    if (cpu.compatibility.socket !== motherboard.compatibility.socket) {
      issues.push(
        `CPU socket (${cpu.compatibility.socket}) is not compatible with motherboard socket (${motherboard.compatibility.socket}).`,
      )
    }
  }

  // Check RAM and motherboard compatibility
  if (ram && motherboard) {
    if (ram.compatibility.memoryType !== motherboard.compatibility.memoryType) {
      issues.push(
        `RAM type (${ram.compatibility.memoryType}) is not compatible with motherboard (${motherboard.compatibility.memoryType}).`,
      )
    }
  }

  // Check case and motherboard form factor compatibility
  if (pcCase && motherboard) {
    // Mini-ITX cases can only fit Mini-ITX motherboards
    if (pcCase.compatibility.formFactor === "Mini-ITX" && motherboard.compatibility.formFactor !== "Mini-ITX") {
      issues.push(
        `Motherboard form factor (${motherboard.compatibility.formFactor}) is too large for the case (${pcCase.compatibility.formFactor}).`,
      )
    }

    // Micro-ATX cases can fit Micro-ATX and Mini-ITX motherboards
    if (
      pcCase.compatibility.formFactor === "Micro-ATX" &&
      motherboard.compatibility.formFactor !== "Micro-ATX" &&
      motherboard.compatibility.formFactor !== "Mini-ITX"
    ) {
      issues.push(
        `Motherboard form factor (${motherboard.compatibility.formFactor}) is too large for the case (${pcCase.compatibility.formFactor}).`,
      )
    }
  }

  // Check power supply wattage is sufficient
  if (powerSupply) {
    let totalPowerDraw = 0

    if (cpu) totalPowerDraw += cpu.compatibility.tdp || 0
    if (gpu) totalPowerDraw += gpu.compatibility.tdp || 0

    // Add some overhead for other components
    totalPowerDraw += 100

    if (totalPowerDraw > powerSupply.compatibility.wattage) {
      issues.push(
        `Power supply wattage (${powerSupply.compatibility.wattage}W) may not be sufficient for your components (estimated ${totalPowerDraw}W).`,
      )
    }
  }

  // Check CPU cooler TDP compatibility
  if (cpu && cooling) {
    if (cooling.compatibility.tdp < (cpu.compatibility.tdp || 0)) {
      issues.push(
        `CPU cooler TDP rating (${cooling.compatibility.tdp}W) is lower than CPU TDP (${cpu.compatibility.tdp}W).`,
      )
    }
  }

  return issues
}

