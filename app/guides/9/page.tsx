'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Layers, Info, CheckCircle2,
  Activity, Settings, Box
} from "lucide-react"

export default function OverclockingBeginnersGuide() {
  const tags = ["PC Building", "Overclocking", "Performance", "BIOS Settings", "System Tuning"]

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-4xl mx-auto space-y-8">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
        </motion.div>

        {/* Hero Card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-orange-600/20 via-red-600/20 to-yellow-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                Performance Optimization
              </span>
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">
                Medium Difficulty
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Overclocking for Beginners
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl">
              Safely unlock the hidden performance of your CPU, GPU, and RAM. Learn BIOS profiles (XMP/EXPO), AMD Curve Optimizers, Intel Core Ratios, and GPU clock configurations.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <TrendingUp className="w-5 h-5 text-orange-400" />
                <span>Increase Game Framerates</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Wrench className="w-5 h-5 text-yellow-400" />
                <span>Simple BIOS Profile Setup</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Safe Voltages & Thermal Caps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            SamXop123
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            June 26, 2026
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            13 min read
          </div>
          <div className="flex items-center gap-1">
            <Activity className="w-4 h-4" />
            Hardware Optimization
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/10 hover:border-orange-500/50 transition-colors"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Table of Contents */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            📋 Table of Contents
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { text: "1. What is Overclocking? Trade-offs & Risks", href: "#what-is-oc" },
              { text: "2. The Checklist: Cooling & Monitoring Tools", href: "#prep-tools" },
              { text: "3. RAM Overclocking: Enabling XMP and EXPO", href: "#ram-oc" },
              { text: "4. CPU Overclocking: AMD PBO & Intel Ratios", href: "#cpu-oc" },
              { text: "5. GPU Tuning: MSI Afterburner Walkthrough", href: "#gpu-oc" },
              { text: "6. Stability Testing & CMOS Recovery", href: "#troubleshooting" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-2 text-zinc-300 hover:text-orange-400 transition-all duration-300 p-2 rounded hover:bg-white/5"
              >
                <CheckCircle className="w-4 h-4 text-orange-500" />
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <article className="space-y-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Overclocking is the practice of adjusting clock frequencies, multipliers, and operating voltages to force computer components to run faster than their factory-advertised settings. While it once required deep technical knowledge and carried a high risk of destroying hardware, modern tuning tools make it accessible and safe for beginners.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              In this step-by-step tutorial, we'll teach you how to unlock free performance from your CPU, GPU, and RAM while maintaining stability and safe temperatures.
            </p>
          </div>

          {/* Section 1 */}
          <div id="what-is-oc" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-orange-400" />
              1. What is Overclocking? Trade-offs & Risks
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Before adjusting sliders, it is vital to weigh the gains against the operational trade-offs:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-green-500/30 rounded-xl p-5 space-y-2">
                <h3 className="text-lg font-bold text-green-400">The Benefits</h3>
                <ul className="text-xs text-zinc-400 space-y-1">
                  <li>• <strong>Higher Framerates:</strong> Gains of 5% to 15% in CPU and GPU bound games.</li>
                  <li>• <strong>Faster Rendering:</strong> Shorter export times in video editing and 3D modeling tasks.</li>
                  <li>• <strong>Value Optimization:</strong> Maximizes the performance-per-dollar of your build.</li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-red-500/30 rounded-xl p-5 space-y-2">
                <h3 className="text-lg font-bold text-red-400">The Trade-offs</h3>
                <ul className="text-xs text-zinc-400 space-y-1">
                  <li>• <strong>Higher Heat output:</strong> Overclocked parts draw more power, increasing temps.</li>
                  <li>• <strong>Increased Power Consumption:</strong> Can push power supplies closer to their limits.</li>
                  <li>• <strong>System Instability:</strong> Aggressive settings can lead to program crashes or Blue Screens (BSODs).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="prep-tools" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-yellow-400" />
              2. The Checklist: Cooling & Monitoring Tools
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Never attempt overclocking on a stock, low-profile box cooler. You need decent cooling (dual-tower air cooler or 240mm+ liquid AIO) and diagnostic tools installed:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3 text-sm">
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <strong>HWInfo64 (Monitoring):</strong> The gold standard for hardware diagnostics. Open it in "Sensors-only" mode to track CPU package power (watts), Core Voltages (Vcore), and individual core temperatures. Keep maximum CPU temps under **90°C**.
                  </div>
                </li>
                <li className="flex items-start gap-2 pt-3 border-t border-white/5">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <strong>Cinebench R23 / 2024 (CPU Stress Testing):</strong> Renders a complex 3D scene. Running a 10-minute loop stresses all CPU cores to check stability and provides a baseline performance score.
                  </div>
                </li>
                <li className="flex items-start gap-2 pt-3 border-t border-white/5">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <strong>MSI Afterburner (GPU Tuning):</strong> The universal utility for graphics card adjustments. Allows setting custom power limits, fan curves, core clocks, and memory clocks.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div id="ram-oc" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-indigo-400" />
              3. RAM Overclocking: Enabling XMP and EXPO
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              By default, motherboard BIOSes run RAM at standard slow JEDEC speeds (e.g. DDR5 at 4800MHz) to guarantee compatibility. To run RAM at its rated speed, you must enable its profile in the BIOS:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 space-y-4 text-sm">
              <div className="flex gap-3 bg-black/40 p-3 rounded border-l-4 border-indigo-500">
                <div className="text-indigo-400 font-bold">Intel Systems (XMP)</div>
                <div>
                  Restart your PC and repeatedly press the <strong>Delete</strong> or <strong>F2</strong> key on boot to enter the BIOS. Locate the "XMP Profile" setting on the main dashboard and toggle it to **Enabled** (or Profile 1). Save and exit.
                </div>
              </div>
              <div className="flex gap-3 bg-black/40 p-3 rounded border-l-4 border-orange-500">
                <div className="text-orange-400 font-bold">AMD Systems (EXPO)</div>
                <div>
                  Enter the BIOS during startup. Look for <strong>AMD EXPO</strong> (Extended Profiles for Overclocking) or **D.O.C.P.** on older motherboards. Select Profile 1. Save settings and boot into Windows.
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="cpu-oc" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Cpu className="w-7 h-7 text-orange-400" />
              4. CPU Overclocking: AMD PBO & Intel Ratios
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Modern CPUs boost automatically based on cooling headroom. Manual static multiplier tuning is largely obsolete; instead, use dynamic optimization features:
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-zinc-900 border border-orange-500/20 p-5 rounded-xl space-y-2">
                <h4 className="font-bold text-orange-400">AMD Ryzen: Precision Boost Overdrive (PBO)</h4>
                <p className="text-xs text-zinc-400">
                  AMD handles overclocking dynamically via motherboards' BIOS:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-300">
                  <li>Enable **PBO** in BIOS.</li>
                  <li>Open **Curve Optimizer**.</li>
                  <li>Set to **Negative Offset** (starts at -10 or -15, up to -30). This undervolts the cores, lowering heat and letting the CPU boost higher.</li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-blue-500/20 p-5 rounded-xl space-y-2">
                <h4 className="font-bold text-blue-400">Intel Core: Ratio Multipliers</h4>
                <p className="text-xs text-zinc-400">
                  Requires an Intel "K" series CPU and "Z" series motherboard:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-300">
                  <li>In BIOS, set CPU Core Ratio to **Sync All Cores**.</li>
                  <li>Adjust the multiplier (e.g., 53x for 5.3GHz).</li>
                  <li>Set Vcore CPU Voltage manually (start at 1.25V-1.30V). Do not exceed **1.35V** for daily use.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="gpu-oc" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="w-7 h-7 text-yellow-400" />
              5. GPU Tuning: MSI Afterburner Walkthrough
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              GPU overclocking can be done directly inside Windows using MSI Afterburner. It is very safe because graphics cards have hardcoded safety limits:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <div className="relative border-l-2 border-yellow-500 pl-6 space-y-6 text-sm">
                <div>
                  <span className="font-semibold block text-white">Step 1: Max out Power and Temp Limits</span>
                  <p className="text-xs text-zinc-400">Drag the Power Limit (%) and Temp Limit (°C) sliders to their maximum settings. This permits the card to draw extra power and run warmer before throttling.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white">Step 2: Core Clock Offset Tuning</span>
                  <p className="text-xs text-zinc-400">Increase the Core Clock offset by **+25MHz** increments. Hit apply and run a game benchmark (like 3DMark or FurMark) for 5 minutes. If it doesn't crash or show graphical glitches (artifacts), repeat until it crashes, then back off by 25MHz.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white">Step 3: Memory Clock Offset Tuning</span>
                  <p className="text-xs text-zinc-400">Increase the Memory Clock offset by **+100MHz** increments. Run benchmarks and watch for crashes, visual flickering, or checkerboard artifacts. Once unstable, drop the frequency back by 100MHz.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="troubleshooting" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-red-500" />
              6. Stability Testing & CMOS Recovery
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Overclocking is trial and error. If a setting is too aggressive, your PC will crash. Don't panic:
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-white/10 text-sm">
                <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white">1. Verify Stability</span>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    A test must run continuously. Run Cinebench for 30 minutes to verify CPU stability, and looping game benchmarks for GPU stability. Any crash means you must lower frequencies or increase cooling.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-white/10 text-sm">
                <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white">2. PC Fails to Boot (Clear CMOS)</span>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    If an aggressive RAM or CPU setting prevents the PC from showing a screen (POSTing), you need to reset the BIOS manually. Power down, locate the two pins labeled **JBAT1** or **CLRTC** on your motherboard, and touch them with a screwdriver tip for 10 seconds. Alternatively, remove the round CR2032 coin battery from the motherboard for 5 minutes before replacing it. This resets all BIOS settings to stock.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🏆 Systems Tuned Successfully!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Overclocking unlocks free performance and tailors your system to yield maximum power. By adjusting BIOS profiles, testing stability incrementally, and monitoring thermal levels, you ensure your hardware runs at its absolute peak.
            </p>
            <p className="text-zinc-300 mb-4">
              Head back to the builder to select your overclocking-capable Z-series motherboards, unlocked K-series CPUs, or high-speed RAM configs!
            </p>
            <div className="bg-orange-600/10 border border-orange-500/30 rounded-lg p-4">
              <p className="text-sm text-orange-300">
                <strong>Next Step:</strong> Open the <Link href="/#builder" className="font-semibold underline hover:text-orange-400">Rig Builder</Link> to start planning your high-performance hardware configuration!
              </p>
            </div>
          </div>
        </article>

        {/* Developer Bio */}
        <div className="mt-16 p-8 bg-gradient-to-br from-orange-600/10 to-red-600/10 backdrop-blur-lg rounded-xl border border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              SAM
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">SamXop123</h3>
              <p className="text-zinc-400">Developer of RigCrafter</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Sam is the developer of RigCrafter and an experienced hardware overclocker. He designed the builder to assist builders in selecting compatible hardware for high-performance tuning.
          </p>
        </div>

        {/* Likes and saves */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors">
              <Bookmark className="w-4 h-4" />
              <span className="text-sm">Save</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-400">Share:</span>
            <button className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Previous and Next Navigation Footer */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-zinc-800">
          <Link 
            href="/guides/8" 
            className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: Water Cooling Setup Guide
          </Link>
          <Link 
            href="/guides/10" 
            className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
          >
            Next: Your First PC Build: Walkthrough
            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
