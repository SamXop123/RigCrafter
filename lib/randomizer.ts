import type { Component, ComponentType } from "./types"
import { getComponents } from "./data"
import { getCompatibilityIssues } from "./compatibility"

export function randomizeCompatibleRig(): Record<ComponentType, Component | null> {
  const maxAttempts = 100
  let attempts = 0

  while (attempts < maxAttempts) {
    const randomBuild: Record<ComponentType, Component | null> = {
      cpu: null,
      gpu: null,
      ram: null,
      storage: null,
      motherboard: null,
      powerSupply: null,
      case: null,
      cooling: null,
    }

    // Step 1: Select a random CPU first (foundation component)
    const cpus = getComponents("cpu")
    randomBuild.cpu = cpus[Math.floor(Math.random() * cpus.length)]

    // Step 2: Select compatible motherboard based on CPU socket
    const motherboards = getComponents("motherboard").filter(mb => 
      mb.compatibility.socket === randomBuild.cpu?.compatibility.socket
    )
    if (motherboards.length === 0) {
      attempts++
      continue
    }
    randomBuild.motherboard = motherboards[Math.floor(Math.random() * motherboards.length)]

    // Step 3: Select compatible RAM based on motherboard memory type
    const rams = getComponents("ram").filter(ram => 
      ram.compatibility.memoryType === randomBuild.motherboard?.compatibility.memoryType
    )
    if (rams.length === 0) {
      attempts++
      continue
    }
    randomBuild.ram = rams[Math.floor(Math.random() * rams.length)]

    // Step 4: Select random GPU
    const gpus = getComponents("gpu")
    randomBuild.gpu = gpus[Math.floor(Math.random() * gpus.length)]

    // Step 5: Calculate power requirements and select PSU
    const cpuTdp = randomBuild.cpu?.compatibility.tdp || 0
    const gpuTdp = randomBuild.gpu?.compatibility.tdp || 0
    const requiredWattage = cpuTdp + gpuTdp + 150 // Add overhead

    const powerSupplies = getComponents("powerSupply").filter(psu => 
      (psu.compatibility.wattage || 0) >= requiredWattage
    )
    if (powerSupplies.length === 0) {
      attempts++
      continue
    }
    randomBuild.powerSupply = powerSupplies[Math.floor(Math.random() * powerSupplies.length)]

    // Step 6: Select compatible case based on motherboard form factor
    const cases = getComponents("case").filter(pcCase => {
      const mbFormFactor = randomBuild.motherboard?.compatibility.formFactor
      const caseFormFactor = pcCase.compatibility.formFactor

      // ATX cases can fit ATX, Micro-ATX, Mini-ITX
      if (caseFormFactor === "ATX") return true
      // Micro-ATX cases can fit Micro-ATX, Mini-ITX
      if (caseFormFactor === "Micro-ATX" && (mbFormFactor === "Micro-ATX" || mbFormFactor === "Mini-ITX")) return true
      // Mini-ITX cases can only fit Mini-ITX
      if (caseFormFactor === "Mini-ITX" && mbFormFactor === "Mini-ITX") return true

      return false
    })
    if (cases.length === 0) {
      attempts++
      continue
    }
    randomBuild.case = cases[Math.floor(Math.random() * cases.length)]

    // Step 7: Select compatible cooling based on CPU TDP
    const coolers = getComponents("cooling").filter(cooler => 
      (cooler.compatibility.tdp || 0) >= cpuTdp
    )
    if (coolers.length === 0) {
      attempts++
      continue
    }
    randomBuild.cooling = coolers[Math.floor(Math.random() * coolers.length)]

    // Step 8: Select random storage
    const storages = getComponents("storage")
    randomBuild.storage = storages[Math.floor(Math.random() * storages.length)]

    // Final compatibility check
    const issues = getCompatibilityIssues(randomBuild)
    if (issues.length === 0) {
      return randomBuild
    }

    attempts++
  }

  // Fallback: return empty build if no compatible combination found
  console.warn("Could not generate a compatible random build after", maxAttempts, "attempts")
  return {
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    motherboard: null,
    powerSupply: null,
    case: null,
    cooling: null,
  }
}

export function randomizeByBudget(maxBudget: number): Record<ComponentType, Component | null> {
  const maxAttempts = 100
  let attempts = 0
  let bestBuild: Record<ComponentType, Component | null> | null = null
  let bestPrice = Infinity

  while (attempts < maxAttempts) {
    const randomBuild: Record<ComponentType, Component | null> = {
      cpu: null,
      gpu: null,
      ram: null,
      storage: null,
      motherboard: null,
      powerSupply: null,
      case: null,
      cooling: null,
    }

    // Step 1: Select a random CPU
    const cpus = getComponents("cpu")
    randomBuild.cpu = cpus[Math.floor(Math.random() * cpus.length)]

    // Step 2: Select compatible motherboard based on CPU socket
    const motherboards = getComponents("motherboard").filter(mb => 
      mb.compatibility.socket === randomBuild.cpu?.compatibility.socket
    )
    if (motherboards.length === 0) {
      attempts++
      continue
    }
    randomBuild.motherboard = motherboards[Math.floor(Math.random() * motherboards.length)]

    // Step 3: Select compatible RAM based on motherboard memory type
    const rams = getComponents("ram").filter(ram => 
      ram.compatibility.memoryType === randomBuild.motherboard?.compatibility.memoryType
    )
    if (rams.length === 0) {
      attempts++
      continue
    }
    randomBuild.ram = rams[Math.floor(Math.random() * rams.length)]

    // Step 4: Select random GPU
    const gpus = getComponents("gpu")
    randomBuild.gpu = gpus[Math.floor(Math.random() * gpus.length)]

    // Step 5: Calculate power requirements and select PSU
    const cpuTdp = randomBuild.cpu?.compatibility.tdp || 0
    const gpuTdp = randomBuild.gpu?.compatibility.tdp || 0
    const requiredWattage = cpuTdp + gpuTdp + 150

    const powerSupplies = getComponents("powerSupply").filter(psu => 
      (psu.compatibility.wattage || 0) >= requiredWattage
    )
    if (powerSupplies.length === 0) {
      attempts++
      continue
    }
    randomBuild.powerSupply = powerSupplies[Math.floor(Math.random() * powerSupplies.length)]

    // Step 6: Select compatible case based on motherboard form factor
    const cases = getComponents("case").filter(pcCase => {
      const mbFormFactor = randomBuild.motherboard?.compatibility.formFactor
      const caseFormFactor = pcCase.compatibility.formFactor

      if (caseFormFactor === "ATX") return true
      if (caseFormFactor === "Micro-ATX" && (mbFormFactor === "Micro-ATX" || mbFormFactor === "Mini-ITX")) return true
      if (caseFormFactor === "Mini-ITX" && mbFormFactor === "Mini-ITX") return true

      return false
    })
    if (cases.length === 0) {
      attempts++
      continue
    }
    randomBuild.case = cases[Math.floor(Math.random() * cases.length)]

    // Step 7: Select compatible cooling based on CPU TDP
    const coolers = getComponents("cooling").filter(cooler => 
      (cooler.compatibility.tdp || 0) >= cpuTdp
    )
    if (coolers.length === 0) {
      attempts++
      continue
    }
    randomBuild.cooling = coolers[Math.floor(Math.random() * coolers.length)]

    // Step 8: Select random storage
    const storages = getComponents("storage")
    randomBuild.storage = storages[Math.floor(Math.random() * storages.length)]

    // Calculate total price
    const totalPrice = Object.values(randomBuild).reduce((sum, component) => 
      sum + (component?.price || 0), 0
    )

    // Check if within budget and compatible
    if (totalPrice <= maxBudget) {
      const issues = getCompatibilityIssues(randomBuild)
      if (issues.length === 0) {
        if (totalPrice < bestPrice) {
          bestBuild = randomBuild
          bestPrice = totalPrice
        }
      }
    }

    attempts++
  }

  // If we found a good build within budget, return it
  if (bestBuild && bestPrice <= maxBudget) {
    return bestBuild
  }

  // Fallback: try to generate any compatible build (ignore budget)
  console.warn(`Could not generate a build within budget of $${maxBudget} after ${maxAttempts} attempts`)
  return randomizeCompatibleRig()
}