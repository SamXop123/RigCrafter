import type { Component } from "./types";

export type BottleneckSeverity = "none" | "mild" | "moderate" | "severe";

export interface BottleneckResult {
    severity: BottleneckSeverity;
    bottleneckedBy: "cpu" | "gpu" | null;
    percentage: number; // 0-100 estimate of how much one side is constraining the other
    message: string;
    tip: string;
}

/**
 * Estimates bottleneck between a CPU and GPU pair.
 *
 * Strategy:
 *  - Use `price` as the best available single proxy for overall performance tier.
 *  - CPU price reflects multi-core and single-thread headroom.
 *  - GPU price reflects rendering power.
 *  - A large price imbalance signals that the cheaper part is likely a bottleneck.
 *
 * The ratio `cpuPrice / gpuPrice` indicates which component is
 * under-provisioned relative to the other.
 */
export function getBottleneckResult(
    cpu: Component | null,
    gpu: Component | null
): BottleneckResult | null {
    if (!cpu || !gpu) return null;

    const cpuPrice = cpu.price;
    const gpuPrice = gpu.price;

    // ratio < 1 means GPU is more expensive => CPU may bottleneck
    // ratio > 1 means CPU is more expensive => GPU may bottleneck
    const ratio = cpuPrice / gpuPrice;

    // Ideal balance is a ratio between 0.4 and 0.7 (GPU-heavy is normal for gaming)
    // CPU:GPU price ratio guide:
    //   0.6 – 1.0  → Balanced
    //   0.35 – 0.59 → Mild CPU bottleneck
    //   0.20 – 0.34 → Moderate CPU bottleneck
    //   < 0.20      → Severe CPU bottleneck
    //   1.01 – 1.5  → Mild GPU bottleneck (CPU overkill)
    //   1.51 – 2.5  → Moderate GPU bottleneck
    //   > 2.5       → Severe GPU bottleneck

    if (ratio >= 0.6 && ratio <= 1.0) {
        return {
            severity: "none",
            bottleneckedBy: null,
            percentage: 0,
            message: "Great balance! Your CPU and GPU are well-matched.",
            tip: "This build should deliver consistent performance across gaming and productivity tasks.",
        };
    }

    // CPU is the bottleneck (GPU is much more expensive)
    if (ratio < 0.6) {
        if (ratio >= 0.35) {
            const pct = Math.round((1 - ratio / 0.6) * 40);
            return {
                severity: "mild",
                bottleneckedBy: "cpu",
                percentage: pct,
                message: `Mild CPU bottleneck (~${pct}%). Your GPU may be slightly held back by the CPU in CPU-heavy games.`,
                tip: `Consider a faster CPU like the AMD Ryzen 7 7800X3D or Intel Core i7-13700K to better match your GPU.`,
            };
        }
        if (ratio >= 0.2) {
            const pct = Math.round((1 - ratio / 0.6) * 65);
            return {
                severity: "moderate",
                bottleneckedBy: "cpu",
                percentage: pct,
                message: `Moderate CPU bottleneck (~${pct}%). Your GPU is significantly more powerful than what your CPU can feed it.`,
                tip: `Upgrade to a high-end CPU like the Intel Core i9-13900K or AMD Ryzen 9 7950X to unlock your GPU's full potential.`,
            };
        }
        const pct = Math.round((1 - ratio / 0.6) * 90);
        return {
            severity: "severe",
            bottleneckedBy: "cpu",
            percentage: Math.min(pct, 90),
            message: `Severe CPU bottleneck (~${Math.min(pct, 90)}%). Your GPU will be severely limited by your CPU in most scenarios.`,
            tip: `Your GPU is far too powerful for this CPU. Either downgrade the GPU to save money, or invest in a top-tier CPU.`,
        };
    }

    // GPU is the bottleneck (CPU is much more expensive)
    if (ratio <= 1.5) {
        const pct = Math.round(((ratio - 1.0) / 0.5) * 25);
        return {
            severity: "mild",
            bottleneckedBy: "gpu",
            percentage: pct,
            message: `Mild GPU bottleneck (~${pct}%). Your CPU is slightly more capable than your GPU, which is common for future-proofing.`,
            tip: `This is often fine. If you plan to upgrade your GPU later, your CPU will be ready. Otherwise, a mid-tier GPU would save money.`,
        };
    }
    if (ratio <= 2.5) {
        const pct = Math.round(((ratio - 1.0) / 1.5) * 50);
        return {
            severity: "moderate",
            bottleneckedBy: "gpu",
            percentage: pct,
            message: `Moderate GPU bottleneck (~${pct}%). You're spending significantly more on your CPU than the GPU warrants.`,
            tip: `Consider upgrading to a more powerful GPU to match your CPU's capabilities and get more value from your build.`,
        };
    }
    const pct = Math.min(Math.round(((ratio - 1.0) / 3.0) * 80), 85);
    return {
        severity: "severe",
        bottleneckedBy: "gpu",
        percentage: pct,
        message: `Severe GPU bottleneck (~${pct}%). Your high-end CPU is massively underutilized with this GPU choice.`,
        tip: `Your CPU investment is being wasted. Upgrade to a high-tier GPU or choose a more affordable CPU to rebalance your build.`,
    };
}
