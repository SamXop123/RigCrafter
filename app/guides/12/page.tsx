'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Layers, Info, CheckCircle2,
  Settings, Box, HelpCircle
} from "lucide-react"

export default function UltraBudgetPcBuildGuide() {
  const tags = ["PC Building", "Budget Builds", "Value PC", "1080p Gaming", "DIY Guide"]

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-white font-sans">
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
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-amber-600/20 via-yellow-600/20 to-orange-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10 font-sans">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full border border-amber-500/30">
                Budget Build
              </span>
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">
                11 Min Read
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Ultra Budget PC Build ($400-600)
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
              Build a functional gaming PC on an extremely tight budget. Maximize your price-to-performance ratio, cut the right corners, and configure a solid 1080p machine.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span>Price-to-Performance Optimization</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Cpu className="w-5 h-5 text-yellow-400" />
                <span>APU vs. Discrete GPU Architecture</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Zap className="w-5 h-5 text-orange-400" />
                <span>Smart Cost-Cutting Strategies</span>
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
            July 16, 2026
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            11 min read
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            Value Champion
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/10 hover:border-amber-500/50 transition-colors"
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
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            {[
              { text: "1. The Value Mindset: Game Plan", href: "#why-budget" },
              { text: "2. APU vs. Discrete GPU: Which is Right?", href: "#apu-vs-discrete" },
              { text: "3. Component Selection List ($500-$600)", href: "#part-list" },
              { text: "4. Cost-Cutting Rules: Where NOT to Cheap Out", href: "#cost-cutting" },
              { text: "5. Second-Hand Market Optimization Guide", href: "#second-hand" },
              { text: "6. Performance Benchmarks at 1080p", href: "#benchmarks" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-2 text-zinc-300 hover:text-amber-400 transition-all duration-300 p-2 rounded hover:bg-white/5"
              >
                <CheckCircle className="w-4 h-4 text-amber-500" />
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <article className="space-y-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed font-light">
              Building a PC on a $400 to $600 budget is one of the most rewarding challenges in hardware. Unlike high-end builds where you throw money at problems, a budget build forces you to research and optimize every single dollar. Your goal is simple: achieve a reliable, smooth 1080p gaming experience (60+ FPS in modern titles).
            </p>
            <p className="text-zinc-300 leading-relaxed font-light">
              This guide details the budget blueprint, compares integrated vs. discrete graphics architectures, presents a verified component list, and details smart cost-cutting rules to build a value champion.
            </p>
          </div>

          {/* Section 1 */}
          <div id="why-budget" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-amber-400" />
              1. The Value Mindset: Game Plan
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              When building on a budget, you must make tactical trade-offs. You won't be playing games at 4K with ray tracing enabled. Instead, you are aiming for high-framerate 1080p gaming in competitive titles (Valorant, Fortnite, Apex Legends) and solid 60 FPS in AAA titles at Medium settings.
            </p>
          </div>

          {/* Section 2 */}
          <div id="apu-vs-discrete" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Cpu className="w-7 h-7 text-yellow-400" />
              2. APU vs. Discrete GPU: Which is Right?
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Your overall budget dictates whether you should buy an **APU** (CPU with powerful built-in graphics) or a **Discrete GPU** (separate graphics card):
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-300">
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-amber-400 block text-sm">APU Builds (Under $400)</span>
                <p className="text-xs text-zinc-400">
                  Uses chips like the AMD Ryzen 5 5600G or Ryzen 5 8600G.
                </p>
                <p className="text-xs text-zinc-400">
                  <strong>Pros:</strong> Extremely cheap. No graphics card needed. Perfect entry level for esports, and you can add a dedicated GPU later when you save up.
                </p>
                <p className="text-xs text-zinc-400 font-semibold text-zinc-300">
                  <strong>Cons:</strong> Limited to 1080p Low/Medium settings in modern heavy titles. Shares system RAM as VRAM.
                </p>
              </div>

              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-orange-400 block text-sm">Discrete GPU Builds ($500-$600)</span>
                <p className="text-xs text-zinc-400">
                  Combines a budget CPU (e.g. Ryzen 5500) with a dedicated graphics card (e.g. Radeon RX 6600).
                </p>
                <p className="text-xs text-zinc-400 font-semibold text-zinc-300">
                  <strong>Pros:</strong> Massive performance leap. Play any modern game at 1080p High settings with ease.
                </p>
                <p className="text-xs text-rose-400">
                  <strong>Cons:</strong> Harder to squeeze under $500 without buying used components.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="part-list" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Package className="w-7 h-7 text-orange-400" />
              3. Component Selection List ($500-$600)
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Here is the standard component layout that maximizes performance per dollar in the modern budget segment:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-xs text-zinc-400">
                <div className="space-y-2">
                  <p><strong className="text-white">CPU:</strong> AMD Ryzen 5 5500 ($85) — 6 Cores, 12 Threads. Includes a decent stock air cooler in the box, saving you $30.</p>
                  <p><strong className="text-white">Motherboard:</strong> Gigabyte A520M S2H ($70) — Solid power delivery for 65W processors without the PCIe 4.0 price markup.</p>
                  <p><strong className="text-white">GPU:</strong> PowerColor Fighter Radeon RX 6600 8GB ($195) — The undisputed king of budget gaming, beating Nvidia's RTX 3050 by a wide margin.</p>
                </div>
                <div className="space-y-2">
                  <p><strong className="text-white">RAM:</strong> Silicon Power 16GB (2x8GB) DDR4-3200 CL16 ($35) — 16GB is required for modern games; dual channel ensures your CPU isn't choked.</p>
                  <p><strong className="text-white">Storage:</strong> Teamgroup MP33 1TB NVMe M.2 SSD ($55) — Decent read/write speeds, leaving slow HDDs in the past.</p>
                  <p><strong className="text-white">PSU:</strong> Thermaltake Smart BM3 550W 80+ Bronze ($50) — A reliable semi-modular unit with decent safety protections.</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-base font-bold text-white">
                <span>Total Estimated Cost:</span>
                <span className="text-amber-400">$490.00</span>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="cost-cutting" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="w-7 h-7 text-amber-400" />
              4. Cost-Cutting Rules: Where NOT to Cheap Out
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Cutting costs is essential, but cutting the *wrong* costs will lead to a system crash or fire hazard.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-xs text-zinc-300">
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-emerald-400 block">Where to Cut Costs Safely</span>
                <p>• <strong>CPU Cooler:</strong> Use the free stock cooler. It keeps non-X CPUs within safe operating temperatures.</p>
                <p>• <strong>Motherboard:</strong> Buy a basic A520 or H610 board. You lose overclocking support, but the gaming performance remains identical.</p>
                <p>• <strong>Case:</strong> Buy a simple case that includes fans. Aesthetics don't add FPS.</p>
              </div>
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-red-400 block">Where NOT to Cut Costs</span>
                <p>• <strong>The PSU:</strong> Never buy a generic, no-name $20 power supply. A cheap PSU lacks over-voltage protection and can explode, taking your motherboard and GPU down with it.</p>
                <p>• <strong>Single Channel RAM:</strong> Never buy a single 16GB stick. Running in single channel cuts CPU gaming performance by up to 20% compared to dual-channel (2x8GB) setups.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="second-hand" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-orange-400" />
              5. Second-Hand Market Optimization Guide
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              If your budget is strictly under $400, buying key components on the used market (eBay, Facebook Marketplace, local forums) is a great way to maximize value.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3 text-sm">
              <p className="text-zinc-300">
                • <strong>The Best Used Targets:</strong> Graphics cards age well. A used **GeForce GTX 1660 Super ($80)** or **Radeon RX 5700 XT ($110)** offers incredible performance that matches or beats modern $150 budget cards.
              </p>
              <p className="text-zinc-300">
                • <strong>What to Buy New:</strong> Never buy used SSDs (they have limited write cycles) or used PSUs (the internal capacitors degrade over time, posing risks to other parts).
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div id="benchmarks" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Monitor className="w-7 h-7 text-amber-400" />
              6. Performance Benchmarks at 1080p
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Expected performance for the $500 discrete GPU build (Ryzen 5500 + RX 6600):
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <table className="min-w-full divide-y divide-white/10 text-sm">
                <thead>
                  <tr>
                    <th className="py-2 font-semibold text-white">Game Title</th>
                    <th className="py-2 font-semibold text-white">Settings Preset</th>
                    <th className="py-2 font-semibold text-white">Average FPS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr>
                    <td className="py-3">Valorant / CS2</td>
                    <td className="py-3">1080p High</td>
                    <td className="py-3 text-emerald-400 font-semibold">180+ FPS</td>
                  </tr>
                  <tr>
                    <td className="py-3">Fortnite</td>
                    <td className="py-3">1080p Performance Mode</td>
                    <td className="py-3 text-emerald-400 font-semibold">140+ FPS</td>
                  </tr>
                  <tr>
                    <td className="py-3">Cyberpunk 2077</td>
                    <td className="py-3">1080p Medium (FSR Quality)</td>
                    <td className="py-3 text-yellow-400 font-semibold">65 FPS</td>
                  </tr>
                  <tr>
                    <td className="py-3">Hogwarts Legacy</td>
                    <td className="py-3">1080p High (FSR off)</td>
                    <td className="py-3 text-yellow-400 font-semibold">60 FPS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🏆 Value PC Plan Established!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4 font-light">
              Building a budget PC teaches you how computer hardware operates and how to balance settings. By opting for smart platforms, prioritizing dual-channel memory, and focusing on reliable power delivery, you construct a stable system that performs well for years.
            </p>
            <p className="text-zinc-300 mb-4">
              Use RigCrafter's builder tab to filter budget components and complete your value desktop!
            </p>
            <div className="bg-amber-600/15 border border-amber-500/30 rounded-lg p-4">
              <p className="text-sm text-amber-300">
                <strong>Next Step:</strong> Read the <Link href="/guides/13" className="font-semibold underline hover:text-amber-400">RGB Lighting Setup and Control Guide</Link> to add vibrant, custom lighting to your budget build!
              </p>
            </div>
          </div>
        </article>

        {/* Developer Bio */}
        <div className="mt-16 p-8 bg-gradient-to-br from-amber-600/10 to-orange-600/10 backdrop-blur-lg rounded-xl border border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              SAM
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">SamXop123</h3>
              <p className="text-zinc-400">Developer of RigCrafter</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Sam is the developer of RigCrafter and a budget hardware analyst. He designed the builder's automatic parts filter to help builders find the best deals and squeeze maximum gaming frames out of tight budgets.
          </p>
        </div>

        {/* Likes and saves */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-2 text-zinc-400 hover:text-amber-500 transition-colors">
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
            href="/guides/11" 
            className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: Choosing the Right Power Supply
          </Link>
          <Link 
            href="/guides/13" 
            className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
          >
            Next: RGB Lighting Setup & Control
            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
