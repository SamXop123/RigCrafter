import type { Component, ComponentType } from "./types";
import { getComponents } from "./data";
import { getCompatibilityIssues } from "./compatibility";

const emptyBuild: Record<ComponentType, Component | null> = {
  cpu: null,
  gpu: null,
  ram: null,
  storage: null,
  motherboard: null,
  powerSupply: null,
  case: null,
  cooling: null,
};

// ---- Random compatible build without budget ----
export function randomizeCompatibleRig(): Record<ComponentType, Component | null> {
  const maxAttempts = 100;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const randomBuild: Record<ComponentType, Component | null> = generateRandomCompatibleBuild();

    const issues = getCompatibilityIssues(randomBuild);
    if (issues.length === 0) {
      return randomBuild;
    }
    attempts++;
  }

  console.warn("Could not generate a compatible random build after", maxAttempts, "attempts");
  return emptyBuild;
}

// ---- Main budget-based randomizer ----
export function randomizeByBudget(maxBudgetInput: number): { build: Record<ComponentType, Component | null>; message: string } {
  const maxAttempts = 100;
  let attempts = 0;

  // ---- Budget ranges ----
  let minBudget = 0;
  let maxBudget = maxBudgetInput;

  if (maxBudgetInput === 1000) {
    minBudget = 0;
    maxBudget = 1500;
  } else if (maxBudgetInput === 2000) {
    minBudget = 1750;
    maxBudget = 2499;
  } else if (maxBudgetInput === 3000) {
    minBudget = 2500;
    maxBudget = 3500; // strict lower bound
  }

  const validBuilds: { build: Record<ComponentType, Component | null>; price: number }[] = [];

  while (attempts < maxAttempts) {
    const randomBuild = generateRandomCompatibleBuild();
    const totalPrice = calculateBuildPrice(randomBuild);

    if (totalPrice >= minBudget && totalPrice <= maxBudget) {
      const issues = getCompatibilityIssues(randomBuild);
      if (issues.length === 0) {
        validBuilds.push({ build: randomBuild, price: totalPrice });
      }
    }
    attempts++;
  }

  // ---- If we found builds in range ----
  if (validBuilds.length > 0) {
    const bestBuild = validBuilds.sort((a, b) => a.price - b.price)[0];
    return { build: bestBuild.build, message: "" };
  }

  // ---- Strict behavior for 3K ----
  if (maxBudgetInput === 3000) {
    return {
      build: emptyBuild,
      message: `No builds found in the $${minBudget}–$${maxBudget} range.`,
    };
  }

  // ---- Fallback for 1K and 2K (get cheapest valid) ----
  const cheapest = getCheapestCompatibleBuild();
  return {
    build: cheapest.build,
    message: `No builds found in the range. Showing closest option: $${cheapest.price}`,
  };
}

// ---- Core: Generate one fully compatible build ----
function generateRandomCompatibleBuild(): Record<ComponentType, Component | null> {
  const build: Record<ComponentType, Component | null> = { ...emptyBuild };

  // Step 1: CPU
  const cpus = getComponents("cpu");
  build.cpu = getRandom(cpus);

  // Step 2: Motherboard (match socket)
  const motherboards = getComponents("motherboard").filter(mb => mb.compatibility.socket === build.cpu?.compatibility.socket);
  if (!motherboards.length) return emptyBuild;
  build.motherboard = getRandom(motherboards);

  // Step 3: RAM (match memory type)
  const rams = getComponents("ram").filter(ram => ram.compatibility.memoryType === build.motherboard?.compatibility.memoryType);
  if (!rams.length) return emptyBuild;
  build.ram = getRandom(rams);

  // Step 4: GPU
  const gpus = getComponents("gpu");
  build.gpu = getRandom(gpus);

  // Step 5: PSU (satisfy wattage)
  const cpuTdp = build.cpu?.compatibility.tdp || 0;
  const gpuTdp = build.gpu?.compatibility.tdp || 0;
  const requiredWattage = cpuTdp + gpuTdp + 150;

  const psus = getComponents("powerSupply").filter(psu => (psu.compatibility.wattage || 0) >= requiredWattage);
  if (!psus.length) return emptyBuild;
  build.powerSupply = getRandom(psus);

  // Step 6: Case (match form factor)
  const cases = getComponents("case").filter(c => isCaseCompatible(c, build.motherboard?.compatibility.formFactor));
  if (!cases.length) return emptyBuild;
  build.case = getRandom(cases);

  // Step 7: Cooling (satisfy CPU TDP)
  const coolers = getComponents("cooling").filter(cooler => (cooler.compatibility.tdp || 0) >= cpuTdp);
  if (!coolers.length) return emptyBuild;
  build.cooling = getRandom(coolers);

  // Step 8: Storage (any)
  const storages = getComponents("storage");
  build.storage = getRandom(storages);

  return build;
}

// ---- Calculate total price ----
function calculateBuildPrice(build: Record<ComponentType, Component | null>): number {
  return Object.values(build).reduce((total, comp) => total + (comp?.price || 0), 0);
}

// ---- Find cheapest compatible build regardless of budget ----
function getCheapestCompatibleBuild(): { build: Record<ComponentType, Component | null>; price: number } {
  let bestBuild: Record<ComponentType, Component | null> = emptyBuild;
  let bestPrice = Infinity;

  for (let i = 0; i < 100; i++) {
    const build = generateRandomCompatibleBuild();
    const price = calculateBuildPrice(build);
    const issues = getCompatibilityIssues(build);

    if (issues.length === 0 && price < bestPrice) {
      bestBuild = build;
      bestPrice = price;
    }
  }

  return { build: bestBuild, price: bestPrice };
}

// ---- Helpers ----
function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function isCaseCompatible(pcCase: Component, mbFormFactor?: string): boolean {
  const caseFormFactor = pcCase.compatibility.formFactor;

  if (!mbFormFactor) return false;
  if (caseFormFactor === "ATX") return true;
  if (caseFormFactor === "Micro-ATX" && (mbFormFactor === "Micro-ATX" || mbFormFactor === "Mini-ITX")) return true;
  if (caseFormFactor === "Mini-ITX" && mbFormFactor === "Mini-ITX") return true;

  return false;
}
