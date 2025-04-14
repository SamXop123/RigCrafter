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


