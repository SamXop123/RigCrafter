'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Layers, Info, CheckCircle2,
  Settings, Box
} from "lucide-react"

export default function ChoosingPowerSupplyGuide() {
  const tags = ["PC Building", "Power Supply", "PSU Selection", "ATX 3.0", "PC Components"]

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
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-blue-600/20 to-purple-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-500/30">
                Component Blueprint
              </span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                Easy Difficulty
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Choosing the Right Power Supply
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl">
              Don't compromise on the heart of your system. Master PSU form factors, efficiency curves, safety protections, wattage cushions, and the new ATX 3.0/3.1 standards.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Zap className="w-5 h-5 text-indigo-400" />
                <span>Wattage Calculations & Spikes</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Layers className="w-5 h-5 text-blue-400" />
                <span>ATX 3.0 & 12VHPWR Standards</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Shield className="w-5 h-5 text-purple-400" />
                <span>80 PLUS vs. Cybenetics</span>
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
            July 1, 2026
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            9 min read
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4" />
            Power Engineering
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/10 hover:border-indigo-500/50 transition-colors"
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
              { text: "1. The Unsung Hero: Why PSU Matters", href: "#why-psu" },
              { text: "2. Form Factors: ATX vs. SFX vs. SFX-L", href: "#form-factors" },
              { text: "3. Cabling Modularity: Fully, Semi, Non-Modular", href: "#modularity" },
              { text: "4. Calculating Wattage & Transient Spikes", href: "#wattage" },
              { text: "5. Efficiency Standards: 80 Plus & Cybenetics", href: "#efficiency" },
              { text: "6. The New Era: ATX 3.0 & 12VHPWR Connectors", href: "#atx3" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-2 text-zinc-300 hover:text-indigo-400 transition-all duration-300 p-2 rounded hover:bg-white/5"
              >
                <CheckCircle className="w-4 h-4 text-indigo-500" />
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <article className="space-y-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              The Power Supply Unit (PSU) is often overlooked in favor of flashy components like CPUs or graphics cards. However, the power supply is the foundation of your entire build. It converts high-voltage alternating current (AC) from your wall into the clean, low-voltage direct current (DC) required by your hardware.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Choosing an inadequate or low-quality power supply can cause random crashes, system instability, or even permanent hardware damage. This guide will walk you through everything you need to select the perfect power supply.
            </p>
          </div>

          {/* Section 1 */}
          <div id="why-psu" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Shield className="w-7 h-7 text-indigo-400" />
              1. The Unsung Hero: Why PSU Matters
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              A power supply does more than feed electricity. It regulates power flow and protects components against grid instabilities. A high-quality PSU features protection circuits that safeguard your PC:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-xs text-zinc-300">
              <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl space-y-1">
                <span className="font-bold text-indigo-400 block">Critical Protections</span>
                <p>• <strong>OCP (Over Current Protection):</strong> Shuts down if current exceeds safe limits.</p>
                <p>• <strong>OVP / UVP (Over/Under Voltage):</strong> Monitors voltage thresholds.</p>
                <p>• <strong>SCP (Short Circuit Protection):</strong> Shuts down instantly if a short is detected.</p>
              </div>
              <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl space-y-1">
                <span className="font-bold text-purple-400 block">Tuning Protections</span>
                <p>• <strong>OTP (Over Temperature Protection):</strong> Prevents internal overheating.</p>
                <p>• <strong>OPP (Over Power Protection):</strong> Prevents drawing more power than the PSU is rated for.</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="form-factors" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Box className="w-7 h-7 text-blue-400" />
              2. Form Factors: ATX vs. SFX vs. SFX-L
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Make sure your power supply fits your chassis. Choose a form factor based on your case volume:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
              <li>
                <strong>ATX (Standard):</strong> The universal standard for mid-towers and full-towers. Uses 120mm or 140mm cooling fans.
              </li>
              <li>
                <strong>SFX (Compact):</strong> Designed for sub-20L Small Form Factor (SFF) Mini-ITX cases. Requires SFX mounting plates.
              </li>
              <li>
                <strong>SFX-L (Slightly Longer SFX):</strong> A slightly longer SFX unit. It fits a larger, quieter 120mm fan but offers less room for cable routing.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div id="modularity" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-purple-400" />
              3. Cabling Modularity: Fully, Semi, Non-Modular
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Cabling modularity determines how easily you can route wires behind the motherboard tray:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-xs text-zinc-300 text-center">
              <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl space-y-2">
                <span className="font-bold text-white block text-sm">Non-Modular</span>
                <p className="text-[11px] text-zinc-400">
                  Every cable is permanently soldered inside the housing. Harder to manage; unused wires must be stuffed into the case basement.
                </p>
              </div>
              <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl space-y-2">
                <span className="font-bold text-blue-400 block text-sm">Semi-Modular</span>
                <p className="text-[11px] text-zinc-400">
                  Essential cables (24-pin and CPU power) are permanent, while peripheral, SATA, and GPU PCIe power cables are removable.
                </p>
              </div>
              <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl space-y-2">
                <span className="font-bold text-green-400 block text-sm">Fully Modular</span>
                <p className="text-[11px] text-zinc-400">
                  Every cable can be unplugged. Makes custom cable routing, sleeves, and system cleaning incredibly easy.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="wattage" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="w-7 h-7 text-indigo-400" />
              4. Calculating Wattage & Transient Spikes
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Your PSU must cover the peak power consumption of your system. 
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3 text-sm">
              <p className="text-zinc-300 leading-relaxed">
                <strong>The Calculation Rule:</strong> Add the TDP of your CPU and GPU, then add **100W to 150W** for other components (motherboard, fans, SSDs, RAM).
              </p>
              <div className="bg-black/40 p-3 rounded border border-white/5 text-xs text-zinc-400">
                <strong>Example:</strong> Ryzen 7800X3D (120W) + RTX 4070 Ti Super (285W) = 405W. Add 150W overhead = 555W. A **750W** or **850W** PSU is recommended for headroom and efficiency.
              </div>
              <p className="text-zinc-300 leading-relaxed">
                <strong>Transient Spikes:</strong> High-performance graphics cards (especially RTX 30 and 40 series) can exhibit massive millisecond power spikes up to double their rated power. A quality PSU with a safety cushion prevents these spikes from triggering Over Current Protection (OCP) shutdowns.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div id="efficiency" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-blue-400" />
              5. Efficiency Standards: 80 Plus & Cybenetics
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Higher efficiency means less electricity wasted as heat, resulting in lower power bills and quieter operation.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <table className="min-w-full divide-y divide-white/10 text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-2 font-semibold text-white">Efficiency Standard</th>
                    <th className="text-left py-2 font-semibold text-white">80 PLUS Badge</th>
                    <th className="text-left py-2 font-semibold text-white">Cybenetics Badge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr>
                    <td className="py-3 font-semibold">Entry Level</td>
                    <td className="py-3">80 Plus Bronze (≥85% at 50% load)</td>
                    <td className="py-3">Cybenetics Bronze (82% to 85%)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Mid Range</td>
                    <td className="py-3 text-yellow-400 font-medium">80 Plus Gold (≥90% at 50% load)</td>
                    <td className="py-3 text-yellow-400 font-medium">Cybenetics Gold (87% to 89%)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Premium</td>
                    <td className="py-3 text-cyan-400 font-medium">80 Plus Platinum (≥92% at 50% load)</td>
                    <td className="py-3 text-cyan-400 font-medium">Cybenetics Platinum (89% to 91%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 6 */}
          <div id="atx3" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-purple-400" />
              6. The New Era: ATX 3.0 & 12VHPWR Connectors
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Modern power supplies comply with the **ATX 3.0** (or ATX 3.1) standard to support PCIe Gen 5 configurations natively.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3 text-sm">
              <p className="text-zinc-300">
                • <strong>The 12VHPWR Cable:</strong> ATX 3.0 PSUs include a native 12+4 pin connector (12VHPWR or 12V-2x6) that delivers up to 600W to modern GPUs over a single cable, replacing old multiple 8-pin adapter cables.
              </p>
              <p className="text-zinc-300">
                • <strong>Power Excursion Tolerance:</strong> ATX 3.0 units can absorb transient power spikes up to **200%** of their rated power for short intervals without shutting down the system.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🏆 Power Supply Plan Finalized!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Investing in a reliable, highly rated power supply keeps your hardware safe and runs your gaming PC stably. By calculating power overhead, selecting gold-certified modular units, and verifying standard compatibility, you set up a secure foundation for years of gaming.
            </p>
            <p className="text-zinc-300 mb-4">
              Use RigCrafter's power supply tab to filter modular configurations and complete your desktop design!
            </p>
            <div className="bg-indigo-600/15 border border-indigo-500/30 rounded-lg p-4">
              <p className="text-sm text-indigo-300">
                <strong>Next Step:</strong> Read the <Link href="/guides/12" className="font-semibold underline hover:text-indigo-400">Ultra Budget PC Build ($400-600) Guide</Link> to learn how to build on a tight budget!
              </p>
            </div>
          </div>
        </article>

        {/* Developer Bio */}
        <div className="mt-16 p-8 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 backdrop-blur-lg rounded-xl border border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              SAM
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">SamXop123</h3>
              <p className="text-zinc-400">Developer of RigCrafter</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Sam is the developer of RigCrafter and a PC system architect. He designed the builder's automatic wattage calculator to help builders pick the correct power supply and avoid transient shutdown issues.
          </p>
        </div>

        {/* Likes and saves */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-2 text-zinc-400 hover:text-indigo-500 transition-colors">
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
            href="/guides/10" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: Your First PC Build: Walkthrough
          </Link>
          <Link 
            href="/guides/12" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Next: Ultra Budget PC Build
            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
