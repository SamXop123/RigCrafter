'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Layers, Info, CheckCircle2,
  Activity, Settings, Box
} from "lucide-react"

export default function MiniItxSffBuildGuide() {
  const tags = ["PC Building", "Small Form Factor", "Mini-ITX", "SFF Build", "Advanced Guide"]

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
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-blue-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                Specialized Blueprint
              </span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                Advanced Difficulty
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Mini-ITX Small Form Factor Builds
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl">
              Unlock the secrets of building high-performance gaming rigs in compact cases. Master SFF layouts, strict building sequences, cable routing, and thermal design constraints.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Box className="w-5 h-5 text-purple-400" />
                <span>Volume Under 20 Liters</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Layers className="w-5 h-5 text-indigo-400" />
                <span>SFX Power Architecture</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Activity className="w-5 h-5 text-blue-400" />
                <span>Thermal Airflow Optimization</span>
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
            June 25, 2026
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            16 min read
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4" />
            SFF Enthusiast Data
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Contents Table */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            📋 Table of Contents
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { text: "1. Why SFF? Footprint vs. Effort", href: "#why-sff" },
              { text: "2. Sandwich vs. Traditional Layouts", href: "#layouts" },
              { text: "3. Power Supplies: SFX vs. SFX-L vs. ATX", href: "#psu" },
              { text: "4. Thermal Challenges & Fan Profiles", href: "#thermals" },
              { text: "5. SFF Component Clearances Checklist", href: "#clearance" },
              { text: "6. The Golden Build Order (Step-by-Step)", href: "#buildorder" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-2 text-zinc-300 hover:text-purple-400 transition-all duration-300 p-2 rounded hover:bg-white/5"
              >
                <CheckCircle className="w-4 h-4 text-purple-500" />
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Main Sections */}
        <article className="space-y-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Small Form Factor (SFF) building is the ultimate test of patience and planning. Fitting high-end graphics cards, power supplies, and radiators into spaces smaller than a shoebox requires a firm understanding of tolerances.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              In this advanced guide, we'll dive deep into SFF chassis choices, component selection, clearances, and a step-by-step assembly sequence to prevent having to take your compact rig apart repeatedly.
            </p>
          </div>

          {/* Section 1 */}
          <div id="why-sff" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-purple-400" />
              1. Why SFF? Footprint vs. Effort
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Enthusiasts choose SFF builds for clean desk setups, portability, and space optimization. SFF builds are typically categorized by volume in liters:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl">
                <span className="text-lg font-bold text-green-400">15L to 20L</span>
                <p className="text-xs text-zinc-400 mt-2">
                  "Gateway SFF." Plenty of cooling support (e.g. Lian Li Q58, Cooler Master NR200). Best for beginners.
                </p>
              </div>
              <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl">
                <span className="text-lg font-bold text-blue-400">10L to 15L</span>
                <p className="text-xs text-zinc-400 mt-2">
                  "True SFF." Strict component selection. Liquid AIOs or low-profile coolers required (e.g. FormD T1, Lian Li A4-H2O).
                </p>
              </div>
              <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl">
                <span className="text-lg font-bold text-red-400">Sub-10L</span>
                <p className="text-xs text-zinc-400 mt-2">
                  "Extreme SFF." Custom length cables and strict low-profile air cooling are mandatory (e.g. Fractal Terra, Velka 3).
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="layouts" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-indigo-400" />
              2. Sandwich vs. Traditional Layouts
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              How components are oriented determines their thermal performance and physical installation. SFF cases generally fall into two categories:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-2">
                <h3 className="text-lg font-bold text-indigo-400">Sandwich Layout</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  The motherboard and GPU sit back-to-back, divided by a central spine. The GPU connects to the motherboard via a flexible **PCIe Riser Cable**.
                </p>
                <div className="text-xs text-zinc-400 bg-black/30 p-2.5 rounded border border-white/5">
                  <strong>Pros:</strong> Allows huge triple-slot GPUs to fit in tiny volumes (e.g. Lian Li A4-H2O, FormD T1). Motherboard and GPU pull fresh air directly from outside.
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-2">
                <h3 className="text-lg font-bold text-blue-400">Traditional / Classic Layout</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  The GPU plugs directly into the motherboard's PCIe slot, sitting horizontally at the bottom or vertically along the side.
                </p>
                <div className="text-xs text-zinc-400 bg-black/30 p-2.5 rounded border border-white/5">
                  <strong>Pros:</strong> Avoids riser cable failure/compatibility issues. Allows taller CPU tower coolers (e.g. NR200, Fractal Terra).
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="psu" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="w-7 h-7 text-purple-400" />
              3. Power Supplies: SFX vs. SFX-L vs. ATX
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Standard ATX power supplies are too large for SFF chassis. You will need a compact power supply unit:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3 text-sm">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="font-bold block text-white">SFX Standard (Universal SFF)</span>
                  <span className="text-xs text-zinc-400">Dim: 125mm x 63.5mm x 100mm. Fits in almost all SFF cases. Highly recommended.</span>
                </div>
                <span className="bg-green-500/20 text-green-300 text-xs px-2 py-0.5 rounded border border-green-500/30">Recommended</span>
              </div>
              <div className="flex justify-between items-start gap-4 pt-3 border-t border-white/5">
                <div>
                  <span className="font-bold block text-white">SFX-L (Longer SFX)</span>
                  <span className="text-xs text-zinc-400">Dim: 125mm x 63.5mm x 130mm. Features a larger fan for quieter operation, but leaves less room for cable management or radiator fitment.</span>
                </div>
                <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-0.5 rounded border border-yellow-500/30">Check Clearance</span>
              </div>
            </div>
            <div className="bg-purple-950/20 border border-purple-500/30 rounded-xl p-4">
              <p className="text-sm text-purple-300 flex items-start gap-2">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Custom Length Cables:</strong> Stock PSU cables are thick, stiff, and long (designed for mid-towers). In SFF, they block airflow and crowd space. Custom silicone or unsleeved cables tailored to your case make routing much easier.
                </span>
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div id="thermals" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Activity className="w-7 h-7 text-blue-400" />
              4. Thermal Challenges & Fan Profiles
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              With components packed close together, hot air pockets can form. SFF airflow management is critical:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
              <li>
                <strong>Negative Pressure Setup:</strong> Many sandwich cases benefit from setting top fans as exhaust to draw warm air out of the top, pulling fresh air in through the side mesh.
              </li>
              <li>
                <strong>Deshrouding & Direct Fan Cooling:</strong> In some traditional layouts, builders remove the shroud/fans of the GPU to mount 120mm exhaust fans directly underneath to optimize thermal cycles.
              </li>
              <li>
                <strong>Undervolting:</strong> A key optimization. Slightly reducing the voltage of your CPU and GPU reduces heat outputs and noise levels with minimal performance impact.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div id="clearance" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-yellow-500" />
              5. SFF Component Clearances Checklist
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Verify this physical compatibility checklist before ordering parts:
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-white/10">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white text-sm">CPU Cooler Height</span>
                  <p className="text-xs text-zinc-400 mt-1">
                    Many sandwich cases only support air coolers under 50mm-70mm in height (e.g. Noctua NH-L9a or Thermalright AXP90-X47).
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-white/10">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white text-sm">GPU Slot Width & Riser Standard</span>
                  <p className="text-xs text-zinc-400 mt-1">
                    GPU slot thickness matters. SFF cases list compatibility in slot dimensions (e.g. 2-slot, 2.75-slot, 3-slot). Ensure your PCIe riser cable matches the PCIe generation of your motherboard and GPU (Gen 4 riser for Gen 4 configurations) to avoid motherboard detection issues.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-white/10">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white text-sm">AIO Pump Height & Tube Clearance</span>
                  <p className="text-xs text-zinc-400 mt-1">
                    Some AIO coolers have tall pump blocks that hit the side panels of sandwich cases. Tube lengths and exit angles must also clear the power supply bracket.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="buildorder" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Wrench className="w-7 h-7 text-purple-400" />
              6. The Golden Build Order (Step-by-Step)
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              In a mid-tower, you can plug in cables at the end. In an SFF build, doing this is impossible because the GPU or PSU blocks the connectors. Follow this strict build order:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <div className="relative border-l-2 border-purple-500 pl-6 space-y-6 text-sm">
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-purple-500 border-2 border-black" />
                  <span className="font-semibold block text-white">Step 1: Motherboard Assembly</span>
                  <p className="text-xs text-zinc-400">Install the CPU, NVMe SSDs (especially rear-mounted ones), and RAM. Install the AIO mounting bracket or low-profile air cooler base.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-purple-500 border-2 border-black" />
                  <span className="font-semibold block text-white">Step 2: Case Cable Prep & Riser Installation</span>
                  <p className="text-xs text-zinc-400">Install the PCIe riser cable and route front-panel cables (USB, HD Audio, Power Switch) along the frame edges.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-purple-500 border-2 border-black" />
                  <span className="font-semibold block text-white">Step 3: PSU Cable pre-routing</span>
                  <p className="text-xs text-zinc-400">Connect the cables (24-pin, EPS, GPU power) to the SFX PSU *before* mounting it. Slide the PSU into the case, securing it to the bracket.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-purple-500 border-2 border-black" />
                  <span className="font-semibold block text-white">Step 4: Mount Motherboard & Connect Core Cables</span>
                  <p className="text-xs text-zinc-400">Slide the pre-assembled motherboard into the case. Plug in the EPS CPU power and 24-pin ATX power immediately—these are difficult to reach later.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-purple-500 border-2 border-black" />
                  <span className="font-semibold block text-white">Step 5: Liquid Cooler Mounting (If applicable)</span>
                  <p className="text-xs text-zinc-400">Secure the AIO pump block to the CPU, route the tubes, and mount the radiator to the top/front bracket. Use fan grills to prevent AIO tubing from touching fan blades.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-purple-500 border-2 border-black" />
                  <span className="font-semibold block text-white">Step 6: GPU Installation</span>
                  <p className="text-xs text-zinc-400">Plug the GPU into the riser cable (or direct PCIe slot), secure it to the chassis rear panel, and plug in the PCIe power cables.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 SFF Build Accomplished!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Building in a Mini-ITX chassis requires careful execution. If you double-check clearances and follow the strict step-by-step build sequence, your small form factor PC will operate coolly, quietly, and offer excellent portability.
            </p>
            <p className="text-zinc-300 mb-4">
              Head back to the builder to select your Mini-ITX motherboard, SFX power supply, and compact chassis to start mapping out your SFF build!
            </p>
            <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-4">
              <p className="text-sm text-purple-300">
                <strong>Next Step:</strong> Open the <Link href="/#builder" className="font-semibold underline hover:text-purple-400">Rig Builder</Link> to start planning your Mini-ITX build!
              </p>
            </div>
          </div>
        </article>

        {/* Developer Bio */}
        <div className="mt-16 p-8 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 backdrop-blur-lg rounded-xl border border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              SAM
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">SamXop123</h3>
              <p className="text-zinc-400">Developer of RigCrafter</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Sam is the developer of RigCrafter and an avid Small Form Factor enthusiast. He built RigCrafter's custom form factor filters to ensure builders can accurately design compatible Mini-ITX setups.
          </p>
        </div>

        {/* Likes and saves */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-2 text-zinc-400 hover:text-purple-500 transition-colors">
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
            href="/guides/6" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: Cable Management and First Boot
          </Link>
          <Link 
            href="/guides/8" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            Next: Water Cooling Setup Guide
            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
