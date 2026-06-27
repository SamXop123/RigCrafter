'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Layers, Info, CheckCircle2,
  Settings, Box
} from "lucide-react"

export default function CompletePcBuildWalkthrough() {
  const tags = ["PC Building", "Beginner Guide", "Walkthrough", "Step-by-Step", "Gaming PC"]

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
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-cyan-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-500/30">
                Complete Walkthrough
              </span>
              <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full border border-teal-500/30">
                Easy Difficulty
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Your First PC Build: A Complete Walkthrough
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl">
              Follow along step-by-step as we construct a complete, high-performance gaming PC from scratch. Learn motherboard prep, PSU cabling, component mounting, and how to verify your first boot.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Wrench className="w-5 h-5 text-emerald-400" />
                <span>Hands-on Assembly Checklist</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Package className="w-5 h-5 text-teal-400" />
                <span>Step-by-Step Part Unboxing</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span>Safe Static Discharge Guide</span>
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
            June 27, 2026
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            25 min read
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            Beginner Friendly
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/10 hover:border-emerald-500/50 transition-colors"
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
              { text: "1. Workspace Prep & Anti-Static Precautions", href: "#prep" },
              { text: "2. Out-of-Case Motherboard Assembly", href: "#motherboard-prep" },
              { text: "3. Preparing the Case & Chassis Fans", href: "#case-prep" },
              { text: "4. Installing the Power Supply Unit (PSU)", href: "#psu-install" },
              { text: "5. Mounting Motherboard & CPU Cooler", href: "#mounting" },
              { text: "6. Installing GPU, Cabling, & First Boot", href: "#gpu-cabling" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-all duration-300 p-2 rounded hover:bg-white/5"
              >
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <article className="space-y-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Nothing matches the satisfaction of building a gaming computer with your own hands. Though sliding fragile silicon parts together might seem daunting, PC building is modular and straightforward. Modern parts only plug in one way, and keyed interfaces make errors easy to avoid.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              In this comprehensive, beginner-friendly walkthrough, we will lead you from a table full of boxes to a running desktop configuration.
            </p>
          </div>

          {/* Section 1 */}
          <div id="prep" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Box className="w-7 h-7 text-emerald-400" />
              1. Workspace Prep & Anti-Static Precautions
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Find a clean workspace before unboxing. A large wooden desk or dining table is ideal. Avoid working on carpeted floors to prevent electrostatic discharge (ESD).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-2 text-sm">
                <h3 className="text-lg font-bold text-emerald-400">Tools You Need</h3>
                <ul className="space-y-1 text-xs text-zinc-400">
                  <li>• **Phillips #2 Screwdriver:** The only mandatory tool.</li>
                  <li>• **Magnetic Tray:** Essential for holding tiny case and M.2 screws.</li>
                  <li>• **Zip Ties / Velcro Straps:** For final cable management.</li>
                  <li>• **Scissors / Flush Cutters:** To trim zip ties.</li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-2 text-sm">
                <h3 className="text-lg font-bold text-teal-400">Static Precautions</h3>
                <ul className="space-y-1 text-xs text-zinc-300">
                  <li>• <strong>Tap Grounded Metal:</strong> Touch the metal chassis of a plugged-in (but powered off) PSU occasionally to discharge static.</li>
                  <li>• <strong>Avoid Bags:</strong> Never place components on the outside of anti-static bags, which can conduct current across their surface.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="motherboard-prep" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-teal-400" />
              2. Out-of-Case Motherboard Assembly
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              We assemble the CPU, RAM, and SSD on the motherboard box before placing the board into the case. Cardboard makes a perfect non-conductive testbench.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <div className="relative border-l-2 border-emerald-500 pl-6 space-y-6 text-sm">
                <div>
                  <span className="font-semibold block text-white">Step 1: Install the CPU</span>
                  <p className="text-xs text-zinc-400">Raise the socket tension arm. Align the tiny gold triangle on the corner of the CPU with the triangle marker on the socket corner. Place the CPU gently in the slot (do not push!). Lower the socket lever—the black plastic cover will pop off automatically.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white">Step 2: Install RAM modules</span>
                  <p className="text-xs text-zinc-400">If using two sticks, use slots **A2 and B2** (the 2nd and 4th slots counting away from the CPU). Push the latches back, align the notch on the memory stick with the socket notch, and press straight down until you hear a solid click.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white">Step 3: Install M.2 SSD</span>
                  <p className="text-xs text-zinc-400">Remove the motherboard M.2 heatshield. Slide the M.2 SSD card into the slot at a 30-degree angle. Push it flat and secure it with either the motherboard latch or the tiny M.2 screw. Peel the protective film off the heatshield thermal pad and screw it back on.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="case-prep" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-cyan-400" />
              3. Preparing the Case & Chassis Fans
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Prepare the chassis environment before mounting the motherboard:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
              <li>
                <strong>Remove Panels:</strong> Take off both tempered glass and side steel panels to prevent breaking them.
              </li>
              <li>
                <strong>Standsoff Check:</strong> Motherboard sizes (ATX vs. M-ATX) require standoffs in different locations. Confirm brass standoffs are screwed in to match your motherboard holes.
              </li>
              <li>
                <strong>I/O Shield:</strong> If your motherboard lacks a pre-installed I/O shield, snap the metal shield into the case's rear cutout *before* mounting the board.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div id="psu-install" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="w-7 h-7 text-yellow-400" />
              4. Installing the Power Supply Unit (PSU)
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Installing the power supply and pre-routing cables makes motherboard wiring simple.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3 text-sm">
              <p className="text-zinc-300">
                <strong>1. Plugin Modular Cables First:</strong> Plug in your **24-pin ATX power**, **8-pin EPS CPU power**, and **PCIe graphics power cables** directly to your PSU housing before mounting it.
              </p>
              <p className="text-zinc-300">
                <strong>2. Fan Orientation:</strong> Slide the PSU into the bottom case shroud. In most cases, point the PSU fan **downwards** so it draws cool air from beneath the case, keeping it isolated from internal case heat. Secure with four screws in the rear.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div id="mounting" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Package className="w-7 h-7 text-teal-400" />
              5. Mounting Motherboard & CPU Cooler
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Now we secure the motherboard to the standoffs and install the cooler:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-teal-400 block">Motherboard Mounting</span>
                <p className="text-xs text-zinc-400">
                  Carefully lower the motherboard into the chassis, matching the ports on the back panel with the rear I/O cutout. Secure with screws in a **star pattern** to distribute pressure evenly.
                </p>
              </div>

              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-cyan-400 block">CPU Cooler Installation</span>
                <p className="text-xs text-zinc-400">
                  Apply a pea-sized dot of thermal paste to the CPU center. Mount the cooler heatsink (or AIO liquid pump block) directly over the socket, screwing it down in an **X-pattern**. Connect the fan wire to `CPU_FAN` header on motherboard.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="gpu-cabling" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Wrench className="w-7 h-7 text-emerald-400" />
              6. Installing GPU, Cabling, & First Boot
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              The final phase includes connecting cables, mounting the graphics card, and executing the first boot sequence:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <div className="relative border-l-2 border-emerald-500 pl-6 space-y-6 text-sm">
                <div>
                  <span className="font-semibold block text-white">Step 1: Connect Motherboard Power & Case Wires</span>
                  <p className="text-xs text-zinc-400">Plug in the large 24-pin ATX cable, CPU EPS cables, and front-panel switch connectors (Power SW, Reset SW, HDD LED, and Power LED). Connect the front-panel USB 3.0 and HD Audio cables.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white">Step 2: Mount the GPU</span>
                  <p className="text-xs text-zinc-400">Remove the rear expansion slot covers. Open the PCIe latch on the motherboard. Align the GPU card connector and press down firmly until the latch clicks lock. Secure the card rear bracket with case screws. Plug in the PCIe power cables (make sure 12VHPWR cables are pushed completely in).</p>
                </div>
                <div>
                  <span className="font-semibold block text-white">Step 3: Execute the First Boot</span>
                  <p className="text-xs text-zinc-400">Connect the HDMI or DisplayPort monitor cable directly to the **GPU ports** (not the motherboard ports!). Toggle the PSU power switch to "I". Press the case power switch. Verify that fans spin up and the BIOS POST screen appears on your monitor.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🎉 Congratulations, Your PC is Built!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Building a PC is a highly rewarding experience. You now understand every component in your desktop and can troubleshoot, replace, or upgrade them with complete confidence.
            </p>
            <p className="text-zinc-300 mb-4">
              Join hardware communities, share your creation, and enjoy gaming on a computer you built yourself!
            </p>
            <div className="bg-emerald-600/10 border border-emerald-500/30 rounded-lg p-4">
              <p className="text-sm text-emerald-300">
                <strong>Next Step:</strong> Read the <Link href="/guides/6" className="font-semibold underline hover:text-emerald-400">Cable Management and First Boot Guide</Link> to tidy up your interior space and configure your Windows system environment!
              </p>
            </div>
          </div>
        </article>

        {/* Developer Bio */}
        <div className="mt-16 p-8 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 backdrop-blur-lg rounded-xl border border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              SAM
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">SamXop123</h3>
              <p className="text-zinc-400">Developer of RigCrafter</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Sam is the creator of RigCrafter and a hardware tuning enthusiast. He built RigCrafter to help beginners demystify desktop assembly and configure compatible gaming systems with ease.
          </p>
        </div>

        {/* Likes and saves */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-2 text-zinc-400 hover:text-emerald-500 transition-colors">
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
            href="/guides/9" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: Overclocking for Beginners
          </Link>
          <Link 
            href="/guides/11" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Next: Choosing the Right Power Supply
            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
