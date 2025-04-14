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


