"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle2, Zap, Info } from "lucide-react";
import type { Component } from "@/lib/types";
import { getBottleneckResult, type BottleneckResult, type BottleneckSeverity } from "@/lib/bottleneck";

interface BottleneckIndicatorProps {
    cpu: Component | null;
    gpu: Component | null;
}

const severityConfig: Record<
    BottleneckSeverity,
    { color: string; bg: string; border: string; icon: React.ReactNode; label: string }
> = {
    none: {
        color: "text-green-400",
        bg: "bg-green-950/40",
        border: "border-green-500/40",
        icon: <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />,
        label: "Balanced",
    },
    mild: {
        color: "text-yellow-400",
        bg: "bg-yellow-950/40",
        border: "border-yellow-500/40",
        icon: <Info className="w-5 h-5 text-yellow-400 flex-shrink-0" />,
        label: "Mild Bottleneck",
    },
    moderate: {
        color: "text-orange-400",
        bg: "bg-orange-950/40",
        border: "border-orange-500/40",
        icon: <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0" />,
        label: "Moderate Bottleneck",
    },
    severe: {
        color: "text-red-400",
        bg: "bg-red-950/40",
        border: "border-red-500/40",
        icon: <Zap className="w-5 h-5 text-red-400 flex-shrink-0" />,
        label: "Severe Bottleneck",
    },
};

function BalanceBar({ result }: { result: BottleneckResult }) {
    // Width is determined purely by severity category, not a percentage number
    const widthMap = {
        none: { cpu: 50, gpu: 50 },
        mild: result.bottleneckedBy === "cpu" ? { cpu: 35, gpu: 65 } : { cpu: 65, gpu: 35 },
        moderate: result.bottleneckedBy === "cpu" ? { cpu: 25, gpu: 75 } : { cpu: 75, gpu: 25 },
        severe: result.bottleneckedBy === "cpu" ? { cpu: 15, gpu: 85 } : { cpu: 85, gpu: 15 },
    };
    const { cpu: cpuWidth, gpu: gpuWidth } = widthMap[result.severity];

    return (
        <div className="mt-3 mb-1">
            <div className="flex justify-between text-xs text-zinc-400 mb-1">
                <span className="font-medium">CPU</span>
                <span className="font-medium">GPU</span>
            </div>
            <div className="flex h-3 rounded-full overflow-hidden bg-zinc-800 gap-[2px]">
                <motion.div
                    className="bg-blue-500 rounded-l-full"
                    initial={{ width: "50%" }}
                    animate={{ width: `${cpuWidth}%` }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <motion.div
                    className="bg-purple-500 rounded-r-full"
                    initial={{ width: "50%" }}
                    animate={{ width: `${gpuWidth}%` }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
}

export default function BottleneckIndicator({ cpu, gpu }: BottleneckIndicatorProps) {
    const result = getBottleneckResult(cpu, gpu);

    return (
        <AnimatePresence mode="wait">
            {!cpu || !gpu ? (
                <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5 text-zinc-500 text-sm flex items-center gap-3"
                >
                    <Info className="w-4 h-4 flex-shrink-0 text-zinc-500" />
                    <span>Select both a <strong className="text-zinc-400">CPU</strong> and a <strong className="text-zinc-400">GPU</strong> to see the bottleneck analysis.</span>
                </motion.div>
            ) : result ? (
                <motion.div
                    key={`${cpu.id}-${gpu.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-6 p-4 rounded-xl border ${severityConfig[result.severity].bg} ${severityConfig[result.severity].border}`}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            {severityConfig[result.severity].icon}
                            <h3 className={`font-semibold text-sm ${severityConfig[result.severity].color}`}>
                                Bottleneck Analysis
                            </h3>
                        </div>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${severityConfig[result.severity].border} ${severityConfig[result.severity].color} ${severityConfig[result.severity].bg}`}>
                            {severityConfig[result.severity].label}
                        </span>
                    </div>

                    {/* Selected pair */}
                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-2 gap-2">
                        <div className="flex-1 bg-zinc-800/60 rounded-lg px-3 py-1.5 text-center truncate">
                            <span className="text-blue-400 font-semibold block text-[10px]">CPU</span>
                            <span className="text-white truncate">{cpu.name}</span>
                        </div>
                        <span className="text-zinc-600 text-base">⚡</span>
                        <div className="flex-1 bg-zinc-800/60 rounded-lg px-3 py-1.5 text-center truncate">
                            <span className="text-purple-400 font-semibold block text-[10px]">GPU</span>
                            <span className="text-white truncate">{gpu.name}</span>
                        </div>
                    </div>

                    {/* Balance bar */}
                    <BalanceBar result={result} />

                    {/* Message */}
                    <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                        {result.message}
                    </p>

                    {/* Tip */}
                    {result.severity !== "none" && (
                        <div className="mt-3 p-2.5 rounded-lg bg-black/30 border border-white/5">
                            <p className="text-[11px] text-zinc-400 leading-relaxed">
                                <span className="text-yellow-400 font-semibold">💡 Tip: </span>
                                {result.tip}
                            </p>
                        </div>
                    )}
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}
