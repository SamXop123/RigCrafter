'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Layers, Info, CheckCircle2,
  Activity, Settings, Box
} from "lucide-react"

export default function ComponentCompatibilityGuide() {
  const tags = ["PC Building", "Hardware Compatibility", "Technical Guide", "Builder Tips"]

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
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                Technical Blueprint
              </span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                Medium Difficulty
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Understanding PC Component Compatibility
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl">
              Avoid costly mistakes by understanding socket standards, memory profiles, PCIe lane constraints, cooling configurations, and power delivery architecture.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Cpu className="w-5 h-5 text-blue-400" />
                <span>Socket Matching Standards</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Layers className="w-5 h-5 text-indigo-400" />
                <span>DDR4 vs DDR5 RAM Rules</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Zap className="w-5 h-5 text-purple-400" />
                <span>ATX 3.0 PSU Requirements</span>
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
            June 24, 2026
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            10 min read
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4" />
            Verified Technical Data
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/10 hover:border-blue-500/50 transition-colors"
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
              { text: "1. CPU and Motherboard Socket Standards", href: "#sockets" },
              { text: "2. System Memory (RAM) Synchronization", href: "#ram" },
              { text: "3. Power Supplies (PSUs) & PCIe Gen 5 Power", href: "#power" },
              { text: "4. Physical Clearances: GPU & Cooling", href: "#clearance" },
              { text: "5. PCIe Lanes & NVMe M.2 Form Factors", href: "#pcie" },
              { text: "6. Case and Motherboard Form Factors", href: "#formfactor" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition-all duration-300 p-2 rounded hover:bg-white/5"
              >
                <CheckCircle className="w-4 h-4 text-blue-500" />
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Main Sections */}
        <article className="space-y-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              When building a PC, selecting parts solely by speed and brand is a common trap. The components must be physically, electrically, and architecturally compatible to interoperate correctly. A single mismatch—like an AM5 processor on an LGA1700 motherboard, or a DDR5 RAM module in a DDR4 slot—will halt your build before you even plug it in.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              This technical guide breaks down the core pillars of computer hardware compatibility to help you design a seamless configuration using the RigCrafter compatibility guidelines.
            </p>
          </div>

          {/* Section 1 */}
          <div id="sockets" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Cpu className="w-7 h-7 text-blue-400" />
              1. CPU and Motherboard Socket Standards
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              The central processor (CPU) must mount directly into the motherboard's socket. Sockets have unique pins, dimensions, and locking mechanisms.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5">
                <h3 className="text-lg font-bold text-blue-400 mb-2">Intel Platform Standards</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>
                    <strong>LGA1700:</strong> Supports Intel Core 12th, 13th, and 14th Generations. Compatible chipsets: H610, B760, H770, Z790.
                  </li>
                  <li>
                    <strong>LGA1851:</strong> Supports the latest Intel Core Ultra 200S (Arrow Lake) series. Compatible chipsets: Z890, B860. LGA1700 CPUs physically will not fit here.
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5">
                <h3 className="text-lg font-bold text-orange-400 mb-2">AMD Platform Standards</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>
                    <strong>Socket AM4:</strong> Legacy flagship platform. Supports Ryzen 3000, 5000, and 5000XT processors. Compatible chipsets: B450, B550, X570.
                  </li>
                  <li>
                    <strong>Socket AM5:</strong> Current generation standard. Supports Ryzen 7000, 8000, and 9000 series (including X3D variants). Compatible chipsets: B650, X670E, B650E, X870E, X870.
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-950/20 border border-blue-500/30 rounded-xl p-4">
              <p className="text-sm text-blue-300 flex items-start gap-2">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>LGA vs PGA:</strong> Intel platforms use Land Grid Array (LGA) where pins are located inside the motherboard socket. AMD AM4 used Pin Grid Array (PGA) where pins were on the CPU, but AMD AM5 has transitioned to LGA. Handle LGA motherboard sockets with extreme care—bent pins are difficult to repair.
                </span>
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div id="ram" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-indigo-400" />
              2. System Memory (RAM) Synchronization
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Random Access Memory generations (DDR4 and DDR5) are physically keyed differently. The notches on the RAM modules are positioned at different offsets, meaning a DDR4 module will not slide into a DDR5 slot.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 space-y-3">
              <h3 className="text-lg font-semibold text-white">Generation Rules:</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-300">
                <li>
                  <strong>AMD AM5:</strong> Strictly DDR5. No AM5 motherboards support DDR4.
                </li>
                <li>
                  <strong>Intel LGA1851:</strong> Strictly DDR5.
                </li>
                <li>
                  <strong>Intel LGA1700:</strong> Supports either DDR4 or DDR5. However, individual motherboards are wired for either DDR4 or DDR5, never both. Make sure to double check the specific motherboard specification sheet.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div id="power" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="w-7 h-7 text-purple-400" />
              3. Power Supplies (PSUs) & PCIe Gen 5 Power
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Your Power Supply Unit (PSU) must deliver adequate wattage and have the proper cables to plug into your components safely.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3">
                <h4 className="font-bold text-white">Wattage Calculation Overhead</h4>
                <p className="text-xs text-zinc-400">
                  RigCrafter calculates compatibility by combining CPU TDP + GPU TDP + 100W overhead.
                </p>
                <div className="p-3 bg-black/40 rounded border border-white/5 text-xs text-zinc-300">
                  <strong>Example:</strong> RTX 4080 (320W) + Ryzen 7800X3D (120W) = 440W. Add 100W overhead = 540W minimum. A 750W or 850W PSU is recommended for optimal efficiency and headroom.
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3">
                <h4 className="font-bold text-white">ATX 3.0 / PCIe 5.0 Power Connector</h4>
                <p className="text-xs text-zinc-400">
                  Modern high-performance graphics cards (Nvidia RTX 40 and 50 series) utilize a 12+4 pin connector (12VHPWR or 12V-2x6).
                </p>
                <p className="text-xs text-zinc-300">
                  Selecting an **ATX 3.0 certified PSU** allows you to use a native 12VHPWR cable, eliminating the need for bulky, multiple 8-pin adapters and preventing cable strain.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="clearance" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Box className="w-7 h-7 text-green-400" />
              4. Physical Clearances: GPU & Cooling
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Physical compatibility is just as vital as electrical. Always check three key dimensional clearances before purchasing:
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-white/10">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white text-sm">GPU Max Length Clearance</span>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Flagship graphics cards are massive (many triple-fan models exceed 330mm in length). Ensure your selected computer case's specifications detail a maximum GPU length clearance that is greater than your chosen card.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-white/10">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white text-sm">RAM Height vs CPU Air Cooler Clearance</span>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Large dual-tower air coolers (like the Noctua NH-D15) extend over the RAM slots. If you choose RAM modules with tall RGB heatsinks, the cooler fans will not clear them, requiring you to offset the fan upwards (which might hit the side panel of the case).
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-white/10">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white text-sm">Liquid AIO Radiator Mount Locations</span>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    A 360mm radiator requires three 120mm mounts. Ensure your case supports 360mm mounting on either the top or front panel. Also check that motherboard heatspreaders don't block radiator/fan thickness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="pcie" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <HardDrive className="w-7 h-7 text-indigo-400" />
              5. PCIe Lanes & NVMe M.2 Form Factors
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              PCI Express (PCIe) lanes provide direct high-speed lanes to the CPU. PCIe version generations (Gen 3, Gen 4, Gen 5) are backward and forward compatible, but operate at the speed of the slowest linked component.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3 text-sm">
              <p className="text-zinc-300 leading-relaxed">
                <strong>NVMe M.2 Form Factors:</strong> M.2 SSDs come in various physical lengths, with **2280** (22mm wide by 80mm long) being the universal standard. Ensure the motherboard slot supports your SSD's length.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                <strong>M.2 Bus Standards:</strong> M.2 slots can support either **NVMe (PCIe)** or **SATA** protocols. If you plug a SATA M.2 SSD into an NVMe-only slot, it will not be detected.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div id="formfactor" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-blue-400" />
              6. Case and Motherboard Form Factors
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Motherboards and chassis utilize standardized dimensions to ensure mounting screw holes align:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <table className="min-w-full divide-y divide-white/10 text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-2 font-semibold text-white">Form Factor</th>
                    <th className="text-left py-2 font-semibold text-white">Dimensions</th>
                    <th className="text-left py-2 font-semibold text-white">Case Compatibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr>
                    <td className="py-3 font-semibold">ATX</td>
                    <td className="py-3">12 x 9.6 inches (Standard)</td>
                    <td className="py-3 text-xs text-zinc-400">Fits in Mid-Tower and Full-Tower cases.</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Micro-ATX (M-ATX)</td>
                    <td className="py-3">9.6 x 9.6 inches (Medium)</td>
                    <td className="py-3 text-xs text-zinc-400">Fits in M-ATX cases, and standard ATX cases.</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Mini-ITX (MITX)</td>
                    <td className="py-3">6.7 x 6.7 inches (Small)</td>
                    <td className="py-3 text-xs text-zinc-400">Fits in Mini-ITX cases, M-ATX cases, and ATX cases.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🎉 System Design Ready!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Understanding component compatibility guarantees a stress-free assembly experience. By validating socket matches, memory speeds, power ratings, and physical spacing, you prevent hardware failures and rebuilds.
            </p>
            <p className="text-zinc-300 mb-4">
              Use RigCrafter's automated checkers to cross-examine your selections, and ensure you build a durable system.
            </p>
            <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-4">
              <p className="text-sm text-blue-300">
                <strong>Next Step:</strong> Open the <Link href="/#builder" className="font-semibold underline hover:text-blue-400">Rig Builder</Link> to start mapping out your motherboard, CPU, and RAM configurations!
              </p>
            </div>
          </div>
        </article>

        {/* Developer Bio */}
        <div className="mt-16 p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 backdrop-blur-lg rounded-xl border border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              SAM
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">SamXop123</h3>
              <p className="text-zinc-400">Developer of RigCrafter</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Sam is the creator of RigCrafter and a hardware enthusiast. He designed the builder's smart compatibility validation engine to help users bypass configuration pitfalls.
          </p>
        </div>

        {/* Social Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-2 text-zinc-400 hover:text-blue-500 transition-colors">
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
            href="/guides/4" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: High-End Gaming Rig
          </Link>
          <Link 
            href="/guides/6" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Next: Cable Management and First Boot
            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
