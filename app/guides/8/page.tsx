'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Layers, Info, CheckCircle2,
  Activity, Settings, Box
} from "lucide-react"

export default function WaterCoolingSetupGuide() {
  const tags = ["PC Building", "Water Cooling", "Liquid Cooling", "AIO Installation", "Custom Loop"]

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
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-indigo-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                Liquid Engineering
              </span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                Advanced Difficulty
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Water Cooling Setup Guide
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl">
              Learn how to plan, build, and maintain liquid cooling systems. Master All-in-One (AIO) installation rules, loop planning, tube bending, and leak-testing procedures.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span>Maximum Thermal Dissipation</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Wrench className="w-5 h-5 text-blue-400" />
                <span>Hard Tubing Techniques</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Shield className="w-5 h-5 text-indigo-400" />
                <span>Pressure Leak-Testing</span>
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
            20 min read
          </div>
          <div className="flex items-center gap-1">
            <Settings className="w-4 h-4" />
            Liquid Engineering
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/10 hover:border-cyan-500/50 transition-colors"
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
              { text: "1. AIO (Closed Loop) vs. Custom Loop", href: "#aio-vs-custom" },
              { text: "2. AIO Radiator Positioning Guidelines", href: "#aio-positions" },
              { text: "3. Custom Loops Anatomy (Pump, Block, Res)", href: "#anatomy" },
              { text: "4. Tubing Selection: Soft vs. Hard Tubing", href: "#tubing" },
              { text: "5. Planning & Bending Hard Tubing", href: "#bending" },
              { text: "6. Pressure Testing & Leak Verification", href: "#leaktest" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-2 text-zinc-300 hover:text-cyan-400 transition-all duration-300 p-2 rounded hover:bg-white/5"
              >
                <CheckCircle className="w-4 h-4 text-cyan-500" />
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <article className="space-y-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Water cooling is the pinnacle of desktop thermal management. By using liquid to carry heat away from components to large radiators, systems run significantly cooler and quieter than traditional air-cooled builds.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              This guide provides a comprehensive breakdown of liquid cooling, covering All-in-One (AIO) installs, custom open loop plumbing, hard-tube bending, and safety leak-testing.
            </p>
          </div>

          {/* Section 1 */}
          <div id="aio-vs-custom" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-cyan-400" />
              1. AIO (Closed Loop) vs. Custom Loop
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Choose the liquid cooling platform that matches your budget, experience level, and aesthetic preferences:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-2">
                <h3 className="text-lg font-bold text-cyan-400">All-in-One (AIO) Coolers</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Pre-assembled, sealed systems containing a CPU water block, pump, tubes, and radiator.
                </p>
                <ul className="text-xs text-zinc-400 space-y-1">
                  <li>• No maintenance required (sealed from factory)</li>
                  <li>• Easy installation (takes 15-20 minutes)</li>
                  <li>• Budget friendly ($60 - $250 range)</li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-2">
                <h3 className="text-lg font-bold text-blue-400">Custom Open Loops</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Builder-assembled loops combining separate pumps, reservoirs, water blocks, fittings, and tubes.
                </p>
                <ul className="text-xs text-zinc-400 space-y-1">
                  <li>• Extreme cooling performance (cools CPU and GPU)</li>
                  <li>• Highly customizable aesthetics (colored fluid, bent tubing)</li>
                  <li>• High maintenance (requires draining & flushing every 12 months)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="aio-positions" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-blue-400" />
              2. AIO Radiator Positioning Guidelines
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Incorrect AIO mounting causes air bubbles to trap in the pump, leading to annoying gurgling noises and accelerated pump wear. Follow these placement rules:
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-green-500/30">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white text-sm">Top Mount Exhaust (Ideal Location)</span>
                  <p className="text-xs text-zinc-400 mt-1">
                    The radiator sits at the top of the case. Air naturally traps at the top of the radiator, keeping the pump block at the bottom 100% saturated.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-yellow-500/30">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white text-sm">Front Mount (Tubes at Bottom - Acceptable)</span>
                  <p className="text-xs text-zinc-400 mt-1">
                    If mounting in the front, orient the radiator so tubes exit at the bottom. The pump block remains lower than the radiator top tank, preventing bubbles from circulating back.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-red-500/30">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white text-sm">Bottom Mount (Never Do This)</span>
                  <p className="text-xs text-zinc-400 mt-1">
                    Never mount the radiator at the bottom of the case. The pump block becomes the highest point in the loop, trapping all air bubbles inside the pump, resulting in loud noises and pump failure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="anatomy" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Box className="w-7 h-7 text-indigo-400" />
              3. Custom Loops Anatomy (Pump, Block, Res)
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Building a custom loop requires selecting five essential building blocks:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
              <li>
                <strong>Water Blocks:</strong> Metal plates (usually nickel-plated copper) with micro-fins that mount directly onto the CPU and GPU to transfer heat to the fluid.
              </li>
              <li>
                <strong>Pumps:</strong> The heart of the loop. Standard choices are **D5** (large, high flow rate, running cool and quiet) or **DDC** (compact, higher pressure head, ideal for SFF layouts but runs warmer).
              </li>
              <li>
                <strong>Reservoir:</strong> A tank that holds extra coolant, makes filling the loop easy, and lets trapped air escape. Often integrated directly with the pump (Pump-Res Combo).
              </li>
              <li>
                <strong>Radiators:</strong> Transfer heat from the water to the air. Sizes include 120mm, 240mm, 360mm, and 480mm configurations.
              </li>
              <li>
                <strong>Fittings:</strong> Join components together. Compression fittings are mandatory to prevent tubes from sliding off under pressure.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div id="tubing" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-purple-400" />
              4. Tubing Selection: Soft vs. Hard Tubing
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Your tubing selection affects the building difficulty, look, and durability:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-2 text-sm">
                <h4 className="font-bold text-white">Soft Tubing (Beginner Friendly)</h4>
                <p className="text-xs text-zinc-400">
                  Flexible tubes made of EPDM/Norprene or PVC. Extremely easy to route around tight corners.
                </p>
                <div className="text-xs text-zinc-300 bg-black/30 p-2 rounded">
                  <strong>Best choice:</strong> Matte-black EPDM tubing. It does not degrade, leach plasticizers, or cloud up over time.
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-2 text-sm">
                <h4 className="font-bold text-white">Hard Tubing (Premium Aesthetics)</h4>
                <p className="text-xs text-zinc-400">
                  Rigid tubes made of PETG, Acrylic, or Metal. Requires manual heating and bending.
                </p>
                <div className="text-xs text-zinc-300 bg-black/30 p-2 rounded">
                  <strong>PETG vs. Acrylic:</strong> PETG is easier to cut and bend but deforms at high water temps (&gt;55°C). Acrylic is harder to bend and brittle but handles heat safely.
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="bending" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Wrench className="w-7 h-7 text-blue-400" />
              5. Planning & Bending Hard Tubing
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              If you choose hard tubing, bending requires patient execution:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <div className="relative border-l-2 border-cyan-500 pl-6 space-y-6 text-sm">
                <div>
                  <span className="font-semibold block text-white">Step 1: Insert Silicone Cord</span>
                  <p className="text-xs text-zinc-400">Lubricate and slide a silicone bending insert into the tube. This prevents the tube from collapsing or wrinkling during the bend.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white">Step 2: Heat Evenly</span>
                  <p className="text-xs text-zinc-400">Hold the tube 4-6 inches above a heat gun set to medium-high. Rotate the tube constantly back and forth until the plastic becomes soft and pliable.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white">Step 3: Mold the Bend</span>
                  <p className="text-xs text-zinc-400">Slowly bend the tube over a mandrel or mold. Hold it firmly in position for 30-45 seconds until the plastic cools and hardens.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white">Step 4: Cut and Debur</span>
                  <p className="text-xs text-zinc-400">Use a tube cutter to cut to length. Use a reamer/deburring tool to smooth both the inner and outer edges of the cut to prevent cutting internal fitting O-rings.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="leaktest" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Shield className="w-7 h-7 text-indigo-400" />
              6. Pressure Testing & Leak Verification
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Water leaks can destroy expensive electronics. Never boot a system immediately after filling. Follow this safety protocol:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3">
              <div className="flex gap-3 bg-black/40 p-3 rounded border-l-4 border-cyan-500 text-xs">
                <div className="font-bold text-cyan-400">1</div>
                <div>
                  <strong>Air Pressure Pre-Test (Recommended):</strong> Use a hand-pump pressure tester (like the EK Leak Tester) to pump air into the dry loop. If the pressure gauge holds stable for 15 minutes, your loop is 100% leak-proof.
                </div>
              </div>
              <div className="flex gap-3 bg-black/40 p-3 rounded border-l-4 border-indigo-500 text-xs">
                <div className="font-bold text-indigo-400">2</div>
                <div>
                  <strong>Bridged PSU Test:</strong> If filling, use a 24-pin ATX bridging plug. This allows your power supply to run the pump block *only*, keeping motherboards, GPUs, and CPUs completely unpowered in case a leak occurs.
                </div>
              </div>
              <div className="flex gap-3 bg-black/40 p-3 rounded border-l-4 border-purple-500 text-xs">
                <div className="font-bold text-purple-400">3</div>
                <div>
                  <strong>Paper Towel Method:</strong> Lay paper towels under every fitting. Run the pump for 12-24 hours. Check for dampness or stains on the towels before powering on components.
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🌊 Liquid Cooling Blueprint Finished!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Planning liquid cooling adds visual appeal and unlocks peak hardware potential. By routing radiators correctly, choosing the right tubes, and pressure testing carefully, you ensure your water-cooled system runs safely.
            </p>
            <p className="text-zinc-300 mb-4">
              Head back to the builder to configure your CPU cooling blocks, radiator sizes, and cooling setups!
            </p>
            <div className="bg-cyan-600/10 border border-cyan-500/30 rounded-lg p-4">
              <p className="text-sm text-cyan-300">
                <strong>Next Step:</strong> Open the <Link href="/#builder" className="font-semibold underline hover:text-cyan-400">Rig Builder</Link> to start planning your custom liquid loop!
              </p>
            </div>
          </div>
        </article>

        {/* Developer Bio */}
        <div className="mt-16 p-8 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              SAM
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">SamXop123</h3>
              <p className="text-zinc-400">Developer of RigCrafter</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Sam is the developer of RigCrafter and an experienced hardware tuner. He integrated advanced cooling component specifications in RigCrafter to help custom liquid cooling planners correctly design complex systems.
          </p>
        </div>

        {/* Likes and saves */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-2 text-zinc-400 hover:text-cyan-500 transition-colors">
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
            href="/guides/7" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: Mini-ITX Small Form Factor Builds
          </Link>
          <Link 
            href="/guides/9" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Next: Overclocking for Beginners
            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
