'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Layers, Info, CheckCircle2,
  Settings, Box, HelpCircle
} from "lucide-react"

export default function RgbLightingSetupGuide() {
  const tags = ["PC Aesthetics", "RGB Lighting", "ARGB 5V", "SignalRGB", "Modding"]

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
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-indigo-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10 font-sans">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-500/30">
                Aesthetics & Lighting
              </span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                12 Min Read
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              RGB Lighting Setup and Control
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
              Create stunning RGB lighting profiles, understand 12V RGB vs 5V ARGB pinouts, daisy-chain multiple fan cables safely, and sync all your hardware components.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Layers className="w-5 h-5 text-pink-400" />
                <span>12V RGB vs. 5V ARGB Pinouts</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Settings className="w-5 h-5 text-purple-400" />
                <span>Controller and Splitter Layouts</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Monitor className="w-5 h-5 text-indigo-400" />
                <span>SignalRGB & OpenRGB Software Sync</span>
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
            July 18, 2026
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            12 min read
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            Aesthetic Masterclass
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/10 hover:border-pink-500/50 transition-colors"
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
              { text: "1. The Evolution of PC Lighting", href: "#intro" },
              { text: "2. 12V RGB vs. 5V ARGB: The Critical Distinction", href: "#rgb-vs-argb" },
              { text: "3. RGB Headers, Controllers, and Daisy-Chaining", href: "#hardware-setup" },
              { text: "4. Software Synchronization Options", href: "#software-sync" },
              { text: "5. Cable Management & Strip Layout Principles", href: "#cable-layout" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-2 text-zinc-300 hover:text-pink-400 transition-all duration-300 p-2 rounded hover:bg-white/5"
              >
                <CheckCircle className="w-4 h-4 text-pink-500" />
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <article className="space-y-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed font-light">
              RGB lighting has evolved from a niche modding hobby into a standard feature of modern PC assembly. However, setting up RGB correctly—and managing the web of software and cables that comes with it—is a common hurdle for new builders.
            </p>
            <p className="text-zinc-300 leading-relaxed font-light">
              This guide will clarify the electrical differences between RGB systems, help you wire your lighting setup cleanly and safely, and detail software tools to synchronize your entire system.
            </p>
          </div>

          {/* Section 1 */}
          <div id="intro" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-pink-400" />
              1. The Evolution of PC Lighting
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Early custom PCs relied on cold cathode tubes or single-color LED strips that glowed statically. Modern builds use Addressable RGB (ARGB) light emitting diodes, where a tiny microchip inside each individual LED allows it to display a unique color and brightness level independently of the others.
            </p>
          </div>

          {/* Section 2 */}
          <div id="rgb-vs-argb" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-red-500" />
              2. 12V RGB vs. 5V ARGB: The Critical Distinction
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              This is the single most important safety rule of PC lighting. There are two entirely incompatible standards:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <span className="font-bold text-yellow-400 block text-sm">Standard RGB (12V, 4-Pin)</span>
                  <p className="text-xs text-zinc-400">
                    <strong>Pinout:</strong> 12V, R (Red), G (Green), B (Blue).
                  </p>
                  <p className="text-xs text-zinc-400">
                    <strong>Mechanics:</strong> The entire strip of LEDs must display the exact same color simultaneously. No color waves or complex animations are possible.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="font-bold text-pink-400 block text-sm">Addressable RGB (5V, 3-Pin ARGB)</span>
                  <p className="text-xs text-zinc-400">
                    <strong>Pinout:</strong> 5V, Data, [Empty Pin], Ground.
                  </p>
                  <p className="text-xs text-zinc-400">
                    <strong>Mechanics:</strong> The data line transmits instructions to each LED chip, allowing fluid rainbow waves, ambient room syncing, and custom chasing patterns.
                  </p>
                </div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 p-4 rounded text-xs text-red-400 flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <div>
                  <strong>CRITICAL WARNING:</strong> Never force a 3-pin 5V ARGB connector onto a 4-pin 12V RGB header. Sending 12 volts of power down a 5V data rail will instantly burn out the LEDs, generating smoke and permanently ruining your fans or cooling block.
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="hardware-setup" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-purple-400" />
              3. RGB Headers, Controllers, and Daisy-Chaining
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Connecting 6 to 9 RGB fans can result in a messy tangle of cables. To avoid running out of motherboard headers, builders use splitters, daisy-chains, or dedicated hardware controllers.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <div className="space-y-2">
                <span className="font-semibold text-white">Understanding Power Limits</span>
                <p className="text-zinc-300 leading-relaxed">
                  A typical motherboard 5V ARGB header supports a maximum current draw of **3 Amps (3A)**. A single ARGB fan consumes around **0.3A to 0.6A** depending on the quantity of LEDs.
                </p>
                <div className="bg-black/40 p-4 rounded border border-white/5 text-xs text-zinc-400">
                  <strong>The Rule of Three:</strong> Do not daisy-chain more than three standard ARGB fans onto a single motherboard header using a splitter cable. Exceeding the amperage limit will cause the lighting to flicker, dim, or damage the motherboard's power controller.
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="font-semibold text-white">Hardware RGB Controllers</span>
                <p className="text-zinc-300 leading-relaxed">
                  For builds with 6+ fans, a dedicated controller (like the Razer Chroma ARGB Controller or Corsair Commander Core) is recommended. The controller mounts behind the motherboard tray, receives power directly from a SATA power connector (relieving motherboard header strain), and communicates with the system via an internal USB 2.0 header.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="software-sync" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Monitor className="w-7 h-7 text-indigo-400" />
              4. Software Synchronization Options
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Managing RGB setups across parts from different manufacturers (e.g. ASUS motherboard, Corsair RAM, Lian Li fans) is notoriously frustrating because each brand wants you to install their bloatware.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3 text-sm">
              <p className="text-zinc-300">
                • <strong>SignalRGB:</strong> The absolute best unified software suite. It recognizes hardware from hundreds of different brands, allowing you to sync all your lighting together with minimal CPU overhead.
              </p>
              <p className="text-zinc-300">
                • <strong>OpenRGB:</strong> A lightweight, open-source alternative that runs offline. It uses very few system resources and does not collect user data.
              </p>
              <p className="text-zinc-300">
                • <strong>Motherboard Bloatware:</strong> Programs like Armoury Crate or RGB Fusion often run multiple background services that slow down game performance. Try to avoid them, or use them only to configure basic settings and then close them.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div id="cable-layout" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Wrench className="w-7 h-7 text-pink-400" />
              5. Cable Management & Strip Layout Principles
            </h2>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <h3 className="font-semibold text-white">How to Hide the Spaghetti</h3>
              <p className="text-zinc-300 leading-relaxed">
                RGB fans have two cables: a 4-pin PWM power cable (for speed control) and a 3-pin ARGB cable (for lighting). A system with 9 fans will have **18 cables** just for the fans.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                <li>
                  <strong>Group and Bundle:</strong> Group the PWM power and ARGB cables of fans that sit close together (e.g., top triple-fan radiator) and zip-tie them immediately as they pass behind the tray.
                </li>
                <li>
                  <strong>Indirect Lighting:</strong> When installing LED strips, position them pointing towards the chassis walls rather than outwards. Direct sightlines to bare LED beads create distracting glare; indirect reflected lighting looks much softer and premium.
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🏆 Lighting Setup Finished!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4 font-light">
              A clean and safe RGB lighting configuration ties your entire PC build together. By honoring electrical amperage limits, verifying 5V/12V pin compatibility, and consolidating control under third-party tools like SignalRGB, you create a glowing setup without cluttering your system with bloatware.
            </p>
            <p className="text-zinc-300 mb-4">
              Use RigCrafter's build panel to add compatible RGB parts and customize your chassis theme!
            </p>
            <div className="bg-pink-600/15 border border-pink-500/30 rounded-lg p-4">
              <p className="text-sm text-pink-300">
                <strong>Next Step:</strong> Learn how to build high-end hardware configurations in the <Link href="/guides/14" className="font-semibold underline hover:text-pink-400">Workstation Build for Content Creation Guide</Link>!
              </p>
            </div>
          </div>
        </article>

        {/* Developer Bio */}
        <div className="mt-16 p-8 bg-gradient-to-br from-pink-600/10 to-purple-600/10 backdrop-blur-lg rounded-xl border border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              SAM
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">SamXop123</h3>
              <p className="text-zinc-400">Developer of RigCrafter</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Sam is the developer of RigCrafter and an RGB layout designer. He designed the builder's lighting integration system to support ARGB synchronizers, helping builders construct beautifully unified rigs.
          </p>
        </div>

        {/* Likes and saves */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-2 text-zinc-400 hover:text-pink-500 transition-colors">
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
            href="/guides/12" 
            className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: Ultra Budget PC Build ($400-600)
          </Link>
          <Link 
            href="/guides/14" 
            className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors"
          >
            Next: Workstation Build for Content Creation
            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
