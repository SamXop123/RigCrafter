'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Layers, Info, CheckCircle2,
  Settings, Box, HelpCircle
} from "lucide-react"

export default function CableSleevingGuide() {
  const tags = ["PC Aesthetics", "Cable Sleeving", "Custom Cables", "PC Modding", "DIY Guide"]

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
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-pink-600/20 via-rose-600/20 to-purple-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10 font-sans">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-500/30">
                Advanced Guide
              </span>
              <span className="px-2 py-1 bg-rose-500/20 text-rose-300 text-xs rounded-full border border-rose-500/30">
                19 Min Read
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              Cable Sleeving and Custom Cables
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
              Ditch the stiff, ugly stock ribbon cables. Master the tools and techniques of DIY custom cable fabrication, heatshrinkless PET melting, and critical pinout verification.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Wrench className="w-5 h-5 text-pink-400" />
                <span>DIY Fabrication Checklist</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Layers className="w-5 h-5 text-rose-400" />
                <span>Heatshrinkless Melting Methods</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Shield className="w-5 h-5 text-purple-400" />
                <span>Pinout Safety Precautions</span>
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
            19 min read
          </div>
          <div className="flex items-center gap-1">
            <Cpu className="w-4 h-4" />
            Aesthetic Engineering
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
              { text: "1. Aesthetics & Cable Modding Introduction", href: "#intro" },
              { text: "2. Cable Extensions vs. Full Replacements", href: "#extensions-vs-full" },
              { text: "3. CRITICAL Warning: Proprietary PSU Pinouts", href: "#pinout-danger" },
              { text: "4. The Modder's Tools & Materials Kit", href: "#tools" },
              { text: "5. Paracord vs. PET Sleeving Materials", href: "#materials" },
              { text: "6. Assembly Methods: Heatshrink vs. Heatshrinkless", href: "#methods" },
              { text: "7. Step-by-Step DIY Custom Cable Guide", href: "#diy-steps" },
              { text: "8. Safety Verification & Voltage Testing", href: "#testing" }
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
              A high-end PC build isn't complete without custom cable management. Standard power supplies ship with stiff, black ribbon cables or ugly multi-colored wires inside plastic mesh sleeves. Custom cable sleeving allows you to coordinate colors, determine exact cable lengths, and shape wires into neat curves using cable combs.
            </p>
            <p className="text-zinc-300 leading-relaxed font-light">
              This guide walks you through the tools, materials, safety rules, and step-by-step techniques required to build and sleeve professional-grade custom cables from scratch.
            </p>
          </div>

          {/* Section 1 */}
          <div id="intro" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Box className="w-7 h-7 text-pink-400" />
              1. Aesthetics & Cable Modding Introduction
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Cable sleeving involves covering individual electrical wires with a braided sleeve (usually PET or paracord) to protect them and improve their appearance. Instead of bundling 24 wires into one bulky black tube, you sleeve each of the 24 wires individually. Held together by small plastic alignment clips (combs), they create a striking, neat visual arch inside the case.
            </p>
          </div>

          {/* Section 2 */}
          <div id="extensions-vs-full" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-rose-400" />
              2. Cable Extensions vs. Full Replacements
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Before ordering supplies, decide if you are making **extensions** or **full replacement cables**:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-300">
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-pink-400 block text-sm">Cable Extensions</span>
                <p className="text-xs text-zinc-400">
                  These plug into the ends of your existing power supply cables. 
                </p>
                <p className="text-xs text-zinc-400">
                  <strong>Pros:</strong> Cheap, easy to install, and universal (they work with any PSU).
                </p>
                <p className="text-xs text-zinc-400 font-semibold text-zinc-300">
                  <strong>Cons:</strong> They add length. You must hide the extra cable length and connectors inside the power supply shroud, which can be difficult in compact cases.
                </p>
              </div>

              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-purple-400 block text-sm">Full Replacement Cables</span>
                <p className="text-xs text-zinc-400">
                  These plug directly into the modular ports of your power supply, replacing the factory cables entirely.
                </p>
                <p className="text-xs text-zinc-400 font-semibold text-zinc-300">
                  <strong>Pros:</strong> Very clean installation. Wires can be cut to the exact lengths required for your case, leaving no clutter.
                </p>
                <p className="text-xs text-rose-400 font-semibold">
                  <strong>Cons:</strong> Difficult to make. They must match the exact proprietary pin layout of your specific PSU model, or they will damage your components.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="pinout-danger" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-red-500" />
              3. CRITICAL Warning: Proprietary PSU Pinouts
            </h2>
            <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-6 space-y-4">
              <span className="font-bold text-red-400 block text-base flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                DANGER: Mixing Modular Cables Can Destroy Your PC
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                The ports on your motherboard, graphics card, and SSD are standardized. An EPS 8-pin plug has a specific pattern of 12V and Ground pins defined by ATX standards.
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                However, <strong>the ports on the power supply side are NOT standardized.</strong> Power supply manufacturers design their own proprietary pinouts. For example, a Corsair modular cable may direct a 12V line into a Ground pin on an EVGA PSU. 
              </p>
              <p className="text-xs text-zinc-400 font-semibold">
                If you plug Corsair replacement cables into an EVGA, Seasonic, or BeQuiet PSU, you will direct incorrect voltages into your hardware, frying your motherboard, CPU, and graphics card instantly. Always map your specific PSU's pinout before fabricating cables.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div id="tools" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Wrench className="w-7 h-7 text-pink-400" />
              4. The Modder's Tools & Materials Kit
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              DIY cable fabrication requires specialized, precision tools. A budget crimping set will lead to loose connections and failed boots.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-xs text-zinc-300">
                <div className="bg-black/30 p-4 rounded-lg border border-white/5 space-y-2">
                  <span className="font-semibold text-pink-400 block text-sm">Essential Tools</span>
                  <p>• <strong>Crimping Tool:</strong> A ratcheting crimper designed for Mini-Fit Jr. terminals (e.g. MDPC-X CTG or SN-48B).</p>
                  <p>• <strong>Wire Stripper:</strong> A strip tool that cuts plastic casing cleanly without cutting the copper strands inside.</p>
                  <p>• <strong>ATX Pin Extraction Tool:</strong> A dual-prong fork that releases the metal tabs holding pins inside the connector housing.</p>
                  <p>• <strong>Butane Torch or Lighter:</strong> For melting the ends of PET sleeves in heatshrinkless installations.</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg border border-white/5 space-y-2">
                  <span className="font-semibold text-purple-400 block text-sm">Materials Kit</span>
                  <p>• <strong>16 AWG or 18 AWG Wire:</strong> High-strand copper wire. 16 AWG is thicker and holds shapes better, but is harder to bend.</p>
                  <p>• <strong>Crimp Terminals:</strong> Female pins that crimp onto wire ends and snap into connectors.</p>
                  <p>• <strong>Connector Housings:</strong> Male and female plastic plugs (24-pin ATX, 8-pin EPS, 8-pin PCIe).</p>
                  <p>• <strong>Acrylic Cable Combs:</strong> Plastic spacing brackets that keep wires aligned.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="materials" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-rose-400" />
              5. Paracord vs. PET Sleeving Materials
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Modders use two main types of sleeving. They handle and look very different:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-300">
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-rose-300 block text-sm">Paracord (Nylon Fabric)</span>
                <p className="text-xs text-zinc-400">
                  Made of braided nylon threads, similar to parachute cord.
                </p>
                <p className="text-xs text-zinc-400">
                  <strong>Pros:</strong> Soft fabric texture, matte colors, and very flexible (easy to route in tight spaces).
                </p>
                <p className="text-xs text-zinc-400">
                  <strong>Cons:</strong> Nylon does not melt cleanly, meaning it cannot be used with the heatshrinkless method. It also attracts dust and lint.
                </p>
              </div>

              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-purple-300 block text-sm">PET Sleeving (Plastic Braid)</span>
                <p className="text-xs text-zinc-400">
                  Made of polyethylene plastic strands (e.g. MDPC-X, Teleios).
                </p>
                <p className="text-xs text-zinc-400">
                  <strong>Pros:</strong> Holds curves well, colors are vibrant, and it melts cleanly, making it perfect for the heatshrinkless method.
                </p>
                <p className="text-xs text-zinc-400">
                  <strong>Cons:</strong> Stiff and abrasive. It requires stretching to look neat and is harder to bend around tight corners.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="methods" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-pink-400" />
              6. Assembly Methods: Heatshrink vs. Heatshrinkless
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              There are two methods for securing the sleeve to the wire terminal before plugging it into the connector:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-white block">The Heatshrink Method</span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  A small ring of colored or adhesive-lined heatshrink tubing is shrunk over the end of the sleeve to hold it in place.
                </p>
                <p className="text-xs text-zinc-400">
                  <strong>Pros:</strong> Easier for beginners; holds the sleeve securely.
                </p>
                <p className="text-xs text-zinc-400">
                  <strong>Cons:</strong> Leaves visible plastic bands at the ends of each wire, resulting in a less clean look.
                </p>
              </div>

              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-pink-400 block">The Heatshrinkless Method (Pro Standard)</span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  The PET sleeve is pulled tight, trimmed, and melted directly onto the base of the metal crimp terminal using a lighter. 
                </p>
                <p className="text-xs text-zinc-400">
                  <strong>Pros:</strong> Cleanest look. Wires enter the plastic connector housing with no visible heatshrink.
                </p>
                <p className="text-xs text-zinc-400">
                  <strong>Cons:</strong> Requires practice. If you melt the sleeve too much, it won't fit into the connector; if you melt it too little, it will slide off.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div id="diy-steps" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-rose-400" />
              7. Step-by-Step DIY Custom Cable Guide
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Follow this step-by-step process to fabricate a custom cable using the heatshrinkless method:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-6">
              <div className="space-y-2">
                <span className="font-bold text-white text-base block">Step 1: Map the Pinout Chart</span>
                <p className="text-zinc-300 leading-relaxed">
                  Never assume a cable connects pin 1 to pin 1. Draw a 1:1 map of the factory cable. Label each socket on the PSU side and trace which pin it connects to on the component side. Some PSU ports bridge two wires into a single pin (double wires). Map these carefully.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="font-bold text-white text-base block">Step 2: Cut and Strip Wire</span>
                <p className="text-zinc-300 leading-relaxed">
                  Cut your wire to the desired length. If the cable curves inside the case, cut the outer wires slightly longer than the inner wires to create a clean arch. Strip **3mm** of insulation off both ends.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="font-bold text-white text-base block">Step 3: Crimp the Terminals</span>
                <p className="text-zinc-300 leading-relaxed">
                  Insert a terminal into your crimp tool. Slide the stripped wire end in, and squeeze the tool until it clicks open. Inspect the crimp: the front wings must wrap tightly around the bare copper, and the rear wings must grip the wire insulation securely.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="font-bold text-white text-base block">Step 4: Sleeve and Melt (Heatshrinkless)</span>
                <p className="text-zinc-300 leading-relaxed">
                  Cut a length of PET sleeve to match the wire. Slide the sleeve over the wire, leaving the crimped terminal exposed. Pull the sleeve tight. 
                </p>
                <p className="text-xs text-zinc-400 mt-2">
                  Slide a temporary piece of heatshrink over the end, leaving 1mm of PET exposed near the terminal. Lightly heat the exposed PET with a lighter until it melts and fuses to the metal terminal base. Remove the temporary heatshrink.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="font-bold text-white text-base block">Step 5: Insert into Housing</span>
                <p className="text-zinc-300 leading-relaxed">
                  Slide the terminal into the connector housing. Ensure the locking tabs point in the correct direction. Push the wire in until you hear a click, indicating it has locked in place. Pull back lightly on the wire to verify it is secure.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div id="testing" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Shield className="w-7 h-7 text-purple-400" />
              8. Safety Verification & Voltage Testing
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Never plug a newly made custom cable directly into your motherboard or graphics card. If you made a mapping error, you will destroy your hardware. Always test the cables first:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <h4 className="font-bold text-white">How to Safely Test Custom Cables:</h4>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                <li>
                  <strong>Use a PSU Tester:</strong> Plug the custom 24-pin and CPU cables into a standalone PSU tester. Plug the PSU into the wall and turn it on. If any voltage line is incorrect, the tester will beep or fail to turn on.
                </li>
                <li>
                  <strong>Use a Multimeter:</strong> If you don't have a PSU tester, use a digital multimeter. Set the multimeter to DC Voltage measurement. Ground the black probe in a Ground pin, and insert the red probe into the positive pins to verify:
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono bg-black/40 p-3 rounded border border-white/5 mt-2 text-center">
                    <span className="text-yellow-400">Yellow Wires: +12V</span>
                    <span className="text-red-400">Red Wires: +5V</span>
                    <span className="text-orange-400">Orange Wires: +3.3V</span>
                  </div>
                </li>
                <li>
                  <strong>Visual check:</strong> Ensure all pins are seated fully and have not pushed out of the back of the connector housing.
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🎉 Cable Sleeving Mastered!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4 font-light">
              Custom cable sleeving is a meticulous, rewarding PC modding craft. By planning your pin layouts, crimping terminals precisely, stretching sleeves, and verifying voltages, you can turn messy wiring into a clean, custom design.
            </p>
            <p className="text-zinc-300 mb-4">
              Patience is key. Take your time, test every wire, and enjoy the clean aesthetics of your custom gaming PC!
            </p>
            <div className="bg-pink-600/15 border border-pink-500/30 rounded-lg p-4">
              <p className="text-sm text-pink-300">
                <strong>Next Step:</strong> Check out our <Link href="/guides/31" className="font-semibold underline hover:text-pink-400">Custom Loop Planning Guide</Link> to design a premium water-cooled loop layout!
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
            Sam is the developer of RigCrafter and an enthusiast PC modder. He created this guide to help builders fabricate safe, clean, custom replacement cables and avoid proprietary pinout mistakes.
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
            href="/guides/29" 
            className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: Dual Boot Setup: Windows and Linux
          </Link>
          <Link 
            href="/guides/31" 
            className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors"
          >
            Next: Custom Loop Planning
            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
