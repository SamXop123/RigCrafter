import type { Component } from "./types";

export type BottleneckSeverity = "none" | "mild" | "moderate" | "severe";

export interface BottleneckResult {
    severity: BottleneckSeverity;
    bottleneckedBy: "cpu" | "gpu" | null;
    message: string;
    tip: string;
}

// Assigns a 0-100 gaming performance tier score
function getGpuScore(gpu: Component): number {
    const name = gpu.name.toLowerCase();

    // Extreme Tier
    if (name.includes("5090")) return 100;
    if (name.includes("4090")) return 88;
    if (name.includes("5080")) return 84;

    // High Tier
    if (name.includes("7900 xtx") || name.includes("7900xtx")) return 78;
    if (name.includes("4080")) return 74;
    if (name.includes("9070")) return 70;

    // Mid-High Tier
    if (name.includes("4070 ti") || name.includes("4070ti")) return 64;
    if (name.includes("7900 xt") || name.includes("7900xt")) return 62;
    if (name.includes("4070")) return 58;
    if (name.includes("7800 xt") || name.includes("7800xt")) return 55;

    // Mid Tier
    if (name.includes("4060 ti") || name.includes("4060ti")) return 46;
    if (name.includes("7700 xt") || name.includes("7700xt")) return 44;
    if (name.includes("4060")) return 38;
    if (name.includes("7600 xt") || name.includes("7600xt")) return 35;
    if (name.includes("7600")) return 32;

    // Budget Tier
    if (name.includes("3060 ti") || name.includes("3060ti")) return 34;
    if (name.includes("3060")) return 28;
    if (name.includes("6600 xt") || name.includes("6600xt")) return 26;
    if (name.includes("6600")) return 22;
    if (name.includes("a770")) return 28;

    // Fallback based on price (rough approximation for unknown GPUs)
    return Math.min(Math.max((gpu.price / 2500) * 100, 15), 90);
}

// Assigns a 0-100 gaming/general performance tier score
function getCpuScore(cpu: Component): number {
    const name = cpu.name.toLowerCase();

    // Ultimate Gaming
    if (name.includes("9800x3d")) return 100;
    if (name.includes("7800x3d")) return 98;
    if (name.includes("7950x3d")) return 97;

    // Enthusiast / Flagship
    if (name.includes("14900") || name.includes("285k")) return 95;
    if (name.includes("13900")) return 93;
    if (name.includes("7950x")) return 92;
    if (name.includes("threadripper")) return 90; // Massive core count, but gaming clocks are slightly lower
    if (name.includes("265k")) return 91;

    // High-End
    if (name.includes("14700")) return 89;
    if (name.includes("13700")) return 87;
    if (name.includes("7900x") || name.includes("7900")) return 86;
    if (name.includes("9700x")) return 85;

    // Mid-High
    if (name.includes("7700x")) return 83;
    if (name.includes("14600")) return 82;
    if (name.includes("13600")) return 80;

    // Mid-Range
    if (name.includes("7600x") || name.includes("7600")) return 75;
    if (name.includes("13400") || name.includes("14400")) return 68;
    if (name.includes("5800x3d")) return 78;

    // Budget
    if (name.includes("5600x") || name.includes("5600")) return 62;
    if (name.includes("12400")) return 60;

    // Fallback based on price
    return Math.min(Math.max((cpu.price / 800) * 100, 40), 95);
}

export function getBottleneckResult(
    cpu: Component | null,
    gpu: Component | null
): BottleneckResult | null {
    if (!cpu || !gpu) return null;

    const cpuScore = getCpuScore(cpu);
    const gpuScore = getGpuScore(gpu);

    let bottleneckedBy: "cpu" | "gpu" | null = null;
    let percentage = 0;

    // Calculate bottleneck relative to the higher performing component
    if (cpuScore > gpuScore) {
        bottleneckedBy = "gpu";
        percentage = Math.round(((cpuScore - gpuScore) / cpuScore) * 100);
    } else if (gpuScore > cpuScore) {
        bottleneckedBy = "cpu";
        percentage = Math.round(((gpuScore - cpuScore) / gpuScore) * 100);
    }

    // A gap under 12 points is practically a perfectly balanced system
    if (percentage <= 12) {
        return {
            severity: "none",
            bottleneckedBy: null,
            message: "Perfectly balanced! Your CPU and GPU are an excellent match for each other.",
            tip: "You will get optimal performance out of both components without one holding the other back.",
        };
    }

    if (bottleneckedBy === "cpu") {
        if (percentage <= 25) {
            return {
                severity: "mild",
                bottleneckedBy: "cpu",
                message: "Mild CPU bottleneck. Your GPU is slightly held back by the CPU at lower resolutions (1080p).",
                tip: "At 1440p or 4K, this bottleneck will largely disappear. It's still a very capable build.",
            };
        }
        if (percentage <= 45) {
            return {
                severity: "moderate",
                bottleneckedBy: "cpu",
                message: "Moderate CPU bottleneck. Your GPU is noticeably more powerful than your CPU.",
                tip: "Consider upgrading to a newer generation CPU, or playing games at 4K to shift the load back to the GPU.",
            };
        }
        return {
            severity: "severe",
            bottleneckedBy: "cpu",
            message: "Severe CPU bottleneck. Your CPU cannot feed frames fast enough to your high-end GPU.",
            tip: "Your GPU is heavily underutilized. Either upgrade your CPU significantly or save money with a mid-tier GPU.",
        };
    }

    // If GPU is the bottleneck
    if (percentage <= 25) {
        return {
            severity: "mild",
            bottleneckedBy: "gpu",
            message: "Mild GPU bottleneck. Your CPU is slightly overkill for this GPU, which is great for future upgrades.",
            tip: "This is a very common and safe configuration. Your CPU will easily handle your next GPU upgrade.",
        };
    }
    if (percentage <= 45) {
        return {
            severity: "moderate",
            bottleneckedBy: "gpu",
            message: "Moderate GPU bottleneck. You're spending a lot on a CPU that this GPU can't fully take advantage of in gaming.",
            tip: "Unless you use this PC for heavy workstation tasks (rendering, compiling), consider a cheaper CPU and a better GPU.",
        };
    }
    return {
        severity: "severe",
        bottleneckedBy: "gpu",
        message: "Severe GPU bottleneck. Your high-end CPU is massively overkill for this entry-level GPU.",
        tip: "You have an extreme imbalance. A cheaper CPU with a much faster GPU will yield significantly better gaming performance for the same price.",
    };
}
