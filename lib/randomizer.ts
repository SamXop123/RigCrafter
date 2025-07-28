import type { Component, ComponentType } from "./types";
import { getComponents } from "./data";
import { getCompatibilityIssues } from "./compatibility";

let fallbackIndex = 0; // remembers which fallback build was shown last

// Generate one compatible random build (no budget filtering)
export function randomizeCompatibleRig(): Record<ComponentType, Component | null> {
  const maxAttempts = 100;
  let attempts = 0;

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
    };

    // 1. CPU
    const cpus = getComponents("cpu");
    randomBuild.cpu = cpus[Math.floor(Math.random() * cpus.length)];

    // 2. Motherboard (match socket)
    const motherboards = getComponents("motherboard").filter(
      (mb) => mb.compatibility.socket === randomBuild.cpu?.compatibility.socket
    );
    if (!motherboards.length) {
      attempts++;
      continue;
    }
    randomBuild.motherboard =
      motherboards[Math.floor(Math.random() * motherboards.length)];

    // 3. RAM (match memory type)
    const rams = getComponents("ram").filter(
      (ram) => ram.compatibility.memoryType === randomBuild.motherboard?.compatibility.memoryType
    );
    if (!rams.length) {
      attempts++;
      continue;
    }
    randomBuild.ram = rams[Math.floor(Math.random() * rams.length)];

    // 4. GPU
    const gpus = getComponents("gpu");
    randomBuild.gpu = gpus[Math.floor(Math.random() * gpus.length)];

    // 5. Power Supply (match wattage)
    const cpuTdp = randomBuild.cpu?.compatibility.tdp || 0;
    const gpuTdp = randomBuild.gpu?.compatibility.tdp || 0;
    const requiredWattage = cpuTdp + gpuTdp + 150;
    const powerSupplies = getComponents("powerSupply").filter(
      (psu) => (psu.compatibility.wattage || 0) >= requiredWattage
    );
    if (!powerSupplies.length) {
      attempts++;
      continue;
    }
    randomBuild.powerSupply =
      powerSupplies[Math.floor(Math.random() * powerSupplies.length)];

    // 6. Case (match form factor)
    const cases = getComponents("case").filter((pcCase) => {
      const mbFormFactor = randomBuild.motherboard?.compatibility.formFactor;
      const caseFormFactor = pcCase.compatibility.formFactor;

      if (caseFormFactor === "ATX") return true;
      if (caseFormFactor === "Micro-ATX" && (mbFormFactor === "Micro-ATX" || mbFormFactor === "Mini-ITX")) return true;
      if (caseFormFactor === "Mini-ITX" && mbFormFactor === "Mini-ITX") return true;
      return false;
    });
    if (!cases.length) {
      attempts++;
      continue;
    }
    randomBuild.case = cases[Math.floor(Math.random() * cases.length)];

    // 7. Cooling (match TDP)
    const coolers = getComponents("cooling").filter(
      (cooler) => (cooler.compatibility.tdp || 0) >= cpuTdp
    );
    if (!coolers.length) {
      attempts++;
      continue;
    }
    randomBuild.cooling = coolers[Math.floor(Math.random() * coolers.length)];

    // 8. Storage
    const storages = getComponents("storage");
    randomBuild.storage = storages[Math.floor(Math.random() * storages.length)];

    // Final compatibility check
    const issues = getCompatibilityIssues(randomBuild);
    if (issues.length === 0) return randomBuild;

    attempts++;
  }

  console.warn("Could not generate a compatible random build after", maxAttempts, "attempts");
  return {
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    motherboard: null,
    powerSupply: null,
    case: null,
    cooling: null,
  };
}

// Budget-aware build randomizer
export function randomizeByBudget(maxBudget: number): {
  build: Record<ComponentType, Component | null>;
  message?: string;
} {
  const builds: { build: Record<ComponentType, Component | null>; total: number }[] = [];
  const maxAttempts = 200;

  // Generate a pool of valid builds
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const build = randomizeCompatibleRig();
    const total = Object.values(build).reduce((sum, comp) => sum + (comp?.price || 0), 0);
    const issues = getCompatibilityIssues(build);

    if (issues.length === 0) {
      builds.push({ build, total });
    }
  }

  // Sort builds by price
  builds.sort((a, b) => a.total - b.total);

  // Filter builds within budget
  const validBuilds = builds.filter((b) => b.total <= maxBudget);

  // Case 1: There are builds within budget → return random one
  if (validBuilds.length > 0) {
    const selected = validBuilds[Math.floor(Math.random() * validBuilds.length)];
    return { build: selected.build };
  }

  // Case 2: No build within budget → show cheapest available sequentially
  if (!builds.length) {
    return { build: randomizeCompatibleRig(), message: "No builds available at all." };
  }

  const selected = builds[fallbackIndex % builds.length];
  fallbackIndex++;

  return {
    build: selected.build,
    message: `Sorry, the closest rig to this budget is $${selected.total.toFixed(2)}`,
  };
}
