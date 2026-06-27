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
              { text: "1. Workspace Preparation & Tooling Checklist", href: "#prep-tools" },
              { text: "2. Electrostatic Discharge (ESD) Safety Guide", href: "#esd-safety" },
              { text: "3. Phase 1: Out-of-Case Motherboard Assembly", href: "#motherboard-prep" },
              { text: "4. Phase 2: CPU Cooler Base & Mounting Bracket", href: "#cooler-bracket" },
              { text: "5. Phase 3: Case Disassembly & Alignment Prep", href: "#case-prep" },
              { text: "6. Phase 4: Installing the Power Supply Unit (PSU)", href: "#psu-install" },
              { text: "7. Phase 5: Mounting Motherboard into the Chassis", href: "#motherboard-mount" },
              { text: "8. Phase 6: Thermal Paste Application & Cooler Mounting", href: "#cooler-mount" },
              { text: "9. Phase 7: Front Panel Headers & Fan Connections", href: "#cabling-headers" },
              { text: "10. Phase 8: Graphics Card (GPU) & Power Cabling", href: "#gpu-install" },
              { text: "11. Phase 9: Cable Management & Tidying Up", href: "#cable-management" },
              { text: "12. Phase 10: The First Boot (POST) & Troubleshooting", href: "#post-boot" }
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

        {/* Main Content */}
        <article className="space-y-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Assembling a computer with your own hands is one of the most rewarding milestones in personal computing. While a table full of retail boxes containing fragile processors and graphic cards can look intimidating, PC building is essentially modular. The industry uses unified standards, meaning parts are keyed to fit only in correct configurations. 
            </p>
            <p className="text-zinc-300 leading-relaxed">
              This comprehensive, 25-minute reading guide details the complete walkthrough of physical assembly. Follow along step-by-step from preparing your desk to firing up the power switch and booting into the BIOS POST screen.
            </p>
          </div>

          {/* Section 1 */}
          <div id="prep-tools" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Wrench className="w-7 h-7 text-emerald-400" />
              1. Workspace Preparation & Tooling Checklist
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              A messy builder workspace is a recipe for lost screws and scratched parts. Before opening a single retail box, prepare a dedicated, clean, flat surface. A large wooden table or kitchen table works best. Avoid metal tables (electrical conduction risks) and glass surfaces (which can shatter under pressure).
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white">The Essential Builder's Toolbox</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-300">
                <div className="bg-black/30 p-4 rounded-lg border border-white/5 space-y-2">
                  <span className="font-semibold text-emerald-400 block">Required Gear</span>
                  <p>• <strong>Phillips #2 Screwdriver:</strong> The universal tool for 95% of PC screws (case screws, fans, motherboards, PSUs).</p>
                  <p>• <strong>Phillips #1 Screwdriver:</strong> Used for tiny M.2 NVMe SSD locking screws.</p>
                  <p>• <strong>Magnetic Sorting Tray:</strong> Keeps motherboard, fan, and chassis screws separate.</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg border border-white/5 space-y-2">
                  <span className="font-semibold text-cyan-400 block">Helpful Extras</span>
                  <p>• <strong>Zip Ties & Velcro Straps:</strong> For tying down wires behind the motherboard tray.</p>
                  <p>• <strong>Flashlight or Headlamp:</strong> Critical for seeing into dark corners of the chassis.</p>
                  <p>• <strong>Isopropyl Alcohol (90%+) & Microfiber Cloth:</strong> For cleaning pre-applied paste off CPU surfaces if a cooler remount is necessary.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="esd-safety" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Shield className="w-7 h-7 text-teal-400" />
              2. Electrostatic Discharge (ESD) Safety Guide
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Electrostatic discharge (ESD) can fry sensitive micro-circuits. While modern computer parts are built with ESD protection diodes, taking basic precautions is a best practice.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-300">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="font-bold text-teal-400 block">Grounding Techniques</span>
                <p>Plug your PSU into the wall outlet but keep the power switch in the <strong>OFF (O)</strong> position. Touching the bare metal housing of the PSU discharges static from your body safely.</p>
              </div>
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="font-bold text-red-400 block">Static Hotspots to Avoid</span>
                <p>Avoid working on carpeted floors. Do not wear wool sweaters or synthetic socks. Keep pets away from your assembly area to prevent hair static charging.</p>
              </div>
            </div>
            <div className="bg-yellow-950/20 border border-yellow-500/30 rounded-xl p-4">
              <p className="text-sm text-yellow-300 flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Anti-Static Bags Warning:</strong> Never place your motherboard on top of the grey anti-static bags that wrap motherboards and GPUs. The outside of these bags is designed to be slightly conductive to redirect currents around the item, which can cause electrical shorts during pre-boot tests.
                </span>
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div id="motherboard-prep" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-blue-400" />
              3. Phase 1: Out-of-Case Motherboard Assembly
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              We install the CPU, system memory (RAM), and NVMe SSDs onto the motherboard *before* placing it into the case. This gives you clear access and allows you to work without reaching into tight case corners.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 space-y-6 text-sm">
              <div className="space-y-2">
                <span className="font-bold text-white text-base block">Step 1.1: CPU Socket Installation</span>
                <p className="text-zinc-300">
                  Lay the motherboard flat on top of its cardboard retail box. 
                </p>
                <ul className="list-disc pl-6 space-y-1 text-xs text-zinc-400">
                  <li><strong>Intel LGA (1700/1851):</strong> Press the metal tension lever down, slide it out from the hook, and lift it. Open the load plate. Handle the CPU only by its edges. Find the small triangle icon on the CPU and align it with the matching triangle printed on the motherboard socket. Lower the CPU directly down. Close the plate and slide the lever back under the hook. The black protective cap will snap off—save it in the box for warranty returns.</li>
                  <li><strong>AMD AM5 LGA:</strong> Follow the identical load plate leverage sequence. Be extremely careful not to touch the copper pins inside the AM5 socket.</li>
                  <li><strong>AMD AM4 PGA:</strong> Lift the socket lever 90 degrees. Align the gold triangle on the corner of the Ryzen CPU with the arrow on the socket. Slide the CPU pins into the holes, then lower the lever. No force is required.</li>
                </ul>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="font-bold text-white text-base block">Step 1.2: System Memory (RAM) Alignment</span>
                <p className="text-zinc-300">
                  If installing two sticks of RAM on a four-slot motherboard, always install them in slots **A2 and B2** (the second and fourth slots counting away from the CPU). This configuration is required for dual-channel speed and stability.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-xs text-zinc-400">
                  <li>Push down the locking clips on the memory slots (some motherboards have clips on both ends, others on only one side).</li>
                  <li>Align the notch on the bottom edge of the RAM module with the plastic key inside the memory slot.</li>
                  <li>Press straight down on both ends of the RAM stick with moderate force until you hear a clean click. The clips will snap shut automatically.</li>
                </ul>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="font-bold text-white text-base block">Step 1.3: M.2 NVMe SSD Mounting</span>
                <p className="text-zinc-300">
                  Modern motherboards feature M.2 slots covered by heavy metal heat sinks. 
                </p>
                <ul className="list-disc pl-6 space-y-1 text-xs text-zinc-400">
                  <li>Unscrew and remove the M.2 heatsink covering the primary slot (usually the one closest to the CPU socket).</li>
                  <li>Slide your M.2 NVMe SSD into the slot at a 30-degree angle. Press it down flat until it lines up with the mounting post.</li>
                  <li>Secure the SSD using the motherboard's tool-free plastic latch (Q-latch) or tighten the tiny M.2 screw.</li>
                  <li>Peel the protective plastic film off the thermal pad underneath the heatsink, then align the heatsink and screw it back on.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="cooler-bracket" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-cyan-400" />
              4. Phase 2: CPU Cooler Base & Mounting Bracket
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              CPU coolers require custom brackets. Depending on whether you are using a basic air cooler, a massive dual-tower heatsink, or a Liquid AIO, you must prepare the mounting hardware on the motherboard now.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <h3 className="font-bold text-white text-base">Preparing the Backplate</h3>
              <p className="text-zinc-300">
                Most coolers require a backplate placed behind the motherboard. Align the mounting screws with the four holes around the CPU socket.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-lg border border-white/5">
                  <span className="font-semibold text-emerald-400 block text-xs">For Intel Motherboards</span>
                  <p className="text-xs text-zinc-400 mt-2">
                    Intel motherboards require you to install a custom metal backplate. Thread the screws through, place the plastic spacer columns over the screws, and screw down the metal mounting rails.
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg border border-white/5">
                  <span className="font-semibold text-orange-400 block text-xs">For AMD Motherboards</span>
                  <p className="text-xs text-zinc-400 mt-2">
                    AMD motherboards come with a pre-installed metal backplate. Keep this backplate in place. Remove the two black plastic clips on the front side by unscrewing them, and install your cooler's spacer cylinders and mounting rails.
                  </p>
                </div>
              </div>
              <div className="bg-blue-950/20 border border-blue-500/30 rounded-xl p-4 text-xs text-blue-300">
                <strong>🔧 Builder Note:</strong> If you are installing a large dual-tower air cooler, install the mounting brackets now, but do not mount the heavy heatsink itself yet. It will block the motherboard screw holes and CPU power connectors.
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="case-prep" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Box className="w-7 h-7 text-teal-400" />
              5. Phase 3: Case Disassembly & Alignment Prep
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Working inside a closed case is frustrating. Stripping the case down to its frame before assembly is crucial.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <h3 className="font-bold text-white">Chassis Preparation Protocol</h3>
              <div className="grid gap-3">
                <div className="flex gap-3 bg-black/40 p-3 rounded-lg border-l-4 border-teal-500">
                  <div className="text-teal-400 font-bold">1</div>
                  <div>
                    <span className="font-semibold block text-white text-xs">Remove all outer panels</span>
                    Take off both the tempered glass and steel back panels. Store the tempered glass panel flat on a soft surface (like a bed). Never stand it upright on hard tiles or concrete, which can shatter the glass.
                  </div>
                </div>
                <div className="flex gap-3 bg-black/40 p-3 rounded-lg border-l-4 border-teal-500">
                  <div className="text-teal-400 font-bold">2</div>
                  <div>
                    <span className="font-semibold block text-white text-xs">Install motherboard standoffs</span>
                    Case manufacturers pre-install standoffs for standard ATX configurations. If using a Micro-ATX or Mini-ITX motherboard, shift or install the standoffs to align with your motherboard's holes.
                  </div>
                </div>
                <div className="flex gap-3 bg-black/40 p-3 rounded-lg border-l-4 border-teal-500">
                  <div className="text-teal-400 font-bold">3</div>
                  <div>
                    <span className="font-semibold block text-white text-xs">Rear I/O Shield check</span>
                    If your motherboard does not have a pre-attached back I/O plate, push the metal shield into the case's rear cutout until it snaps in. Make sure the ports match the orientation of the board, and watch out for metal tabs that can block USB ports.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="psu-install" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="w-7 h-7 text-yellow-400" />
              6. Phase 4: Installing the Power Supply Unit (PSU)
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Pre-cabling modular power supplies is far easier than trying to plug in cables after the power supply is screwed into the case basement shroud.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <h3 className="font-bold text-white text-base">PSU Mounting Steps</h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                <li>
                  <strong>Connect modular cables first:</strong> Connect the 24-pin ATX power cable, the 8-pin CPU EPS cable (often two are needed for high-end boards), and PCIe cables to the PSU. If using an Nvidia RTX 40 or 50 series GPU, plug in the native 12VHPWR cable.
                </li>
                <li>
                  <strong>Orient the fan correctly:</strong> Slide the PSU into the bottom basement. Point the PSU fan **downward** to draw fresh air from the bottom dust filter. If you plan to place the PC on thick carpets, orient the fan **upward** so it can pull air from inside the case instead.
                </li>
                <li>
                  <strong>Secure the housing:</strong> Tighten the four hex screws through the back of the case frame.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div id="motherboard-mount" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-emerald-400" />
              7. Phase 5: Mounting Motherboard into the Chassis
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Lowering the assembled motherboard is a delicate step. Hold the motherboard by the heatsinks or CPU cooler mounting rails (do not touch memory sticks or capacitors).
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <h3 className="font-bold text-white text-base">Aligning and Screwing</h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                <li>
                  Angle the motherboard into the chassis, sliding the rear ports through the I/O shield. Ensure the brass standoffs align with the mounting holes on the motherboard.
                </li>
                <li>
                  Secure the motherboard to the standoffs using screws in a **star pattern** (cross-tightening). Start with the middle screw to stabilize the board, then tighten the outer corners. 
                </li>
                <li>
                  <strong>Do not overtighten:</strong> Stop turning the screw as soon as it feels snug. Overtightening can crack the motherboard trace layers.
                </li>
              </ul>
              <div className="bg-teal-950/20 border border-teal-500/30 rounded-xl p-4 text-xs text-teal-300">
                <strong>💡 Quick Tip:</strong> Immediately route the 24-pin motherboard power cable and CPU power cables (at the top left) through the routing grommets and plug them into the board. These become very difficult to reach once a GPU and cooler are installed.
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div id="cooler-mount" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Cpu className="w-7 h-7 text-teal-400" />
              8. Phase 6: Thermal Paste Application & Cooler Mounting
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Thermal paste fills tiny microscopic gaps between the CPU surface and the cooler block, ensuring efficient heat transfer. Too little paste causes overheating; too much makes a mess.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-lg border border-white/5 space-y-2">
                  <span className="font-semibold text-emerald-400 block text-xs">Applying Paste</span>
                  <p className="text-xs text-zinc-400">
                    Apply a pea-sized dot directly in the center of the CPU, or draw an "X" pattern. For large Intel or AMD CPUs, a thin X-pattern ensures full coverage across the edges.
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg border border-white/5 space-y-2">
                  <span className="font-semibold text-cyan-400 block text-xs">Cooler Mounting</span>
                  <p className="text-xs text-zinc-400">
                    If your cooler base has a plastic protective film, peel it off now. Place the cooler block over the CPU. Tighten the screws in an **X-pattern** (1-2 turns each to balance pressure) until they are snug.
                  </p>
                </div>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                <li>
                  <strong>Connect Fan Power:</strong> Plug the cooler fan cable directly into the **CPU_FAN** header at the top of the motherboard. If using an AIO water cooler, plug the pump cable into the **AIO_PUMP** or CPU_OPT header, and set it to 100% speed in the BIOS.
                </li>
                <li>
                  <strong>Radiator Mounting (For AIOs):</strong> Secure the radiator to the top or front of the case. Ensure the fans are positioned to push or pull air through the radiator correctly.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div id="cabling-headers" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-cyan-400" />
              9. Phase 7: Front Panel Headers & Fan Connections
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Connecting front panel headers is the most tedious step of PC building. These tiny wires control your case power switch, reset button, and status LEDs.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <div className="space-y-2">
                <span className="font-bold text-white text-base block">1. The Front Panel Header Pinout (JFP1)</span>
                <p className="text-xs text-zinc-400">
                  Refer to your motherboard manual to identify the pinout layout. Wires for LEDs have positive (+) and negative (-) polarity:
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5 font-mono text-xs text-zinc-300">
                  Pin 1/3: Power LED (+ / -) | Pin 2/4: HDD LED (+ / -) <br />
                  Pin 5/7: Reset Switch | Pin 6/8: Power Switch
                </div>
                <p className="text-xs text-zinc-300 mt-2">
                  Switches (Power SW, Reset SW) do not have polarity. Wires can be plugged in facing either direction.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="font-bold text-white text-base block">2. High-Speed Interface Cables</span>
                <ul className="list-disc pl-6 space-y-2 text-xs text-zinc-300">
                  <li>
                    <strong>USB 3.0 Header:</strong> A large, thick blue connector. Align the key notch carefully and push it straight in. The pins inside are fragile and easily bent.
                  </li>
                  <li>
                    <strong>USB Type-C Header:</strong> A small, key-less connector that plugs in securely.
                  </li>
                  <li>
                    <strong>HD Audio Header:</strong> Plugs into the bottom-left corner of the motherboard. Look for the missing pin socket to align it.
                  </li>
                </ul>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="font-bold text-white text-base block">3. Fan Hubs and RGB Controllers</span>
                <p className="text-xs text-zinc-300">
                  Plug your case fan cables into **SYS_FAN** or **CHA_FAN** headers. If your case includes an integrated fan hub, connect the fans to the hub and run the master PWM cable to a single motherboard fan header.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div id="gpu-install" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="w-7 h-7 text-emerald-400" />
              10. Phase 8: Graphics Card (GPU) & Power Cabling
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Always install the graphics card last. A large GPU blocks access to motherboard slots, header ports, and drive bays.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <h3 className="font-bold text-white text-base">GPU Installation Walkthrough</h3>
              <div className="relative border-l-2 border-emerald-500 pl-6 space-y-4">
                <div>
                  <span className="font-semibold block text-white text-xs">Step 1: Remove PCIe bracket covers</span>
                  <p className="text-xs text-zinc-400">Identify which PCIe slot covers on the case back panel align with your primary PCIe slot. Remove 2 or 3 covers by unscrewing them.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white text-xs">Step 2: Open motherboard latch</span>
                  <p className="text-xs text-zinc-400">Push down the plastic latch on the motherboard's top PCIe x16 slot to unlock it.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white text-xs">Step 3: Insert the card</span>
                  <p className="text-xs text-zinc-400">Align the GPU gold contact strip with the PCIe slot. Lower the card down, pressing firmly until you hear the motherboard latch click lock.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white text-xs">Step 4: Secure brackets</span>
                  <p className="text-xs text-zinc-400">Screw the graphics card bracket directly to the case back panel chassis to prevent GPU sag.</p>
                </div>
              </div>

              <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-4 space-y-2 mt-4 text-xs text-red-300">
                <span className="font-bold block text-sm flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  CRITICAL: PCIe Power Cable Connection
                </span>
                <p className="leading-relaxed">
                  High-draw graphics cards require multiple PCIe 8-pin cables or a single 12VHPWR cable. 
                </p>
                <p className="leading-relaxed">
                  If using 8-pin adapters, use separate cables from the PSU instead of daisy-chaining one cable. 
                </p>
                <p className="leading-relaxed font-semibold">
                  If using a 12VHPWR / 12V-2x6 cable, push the plug completely into the GPU socket until it clicks. There must be no visible gap between the plug and the socket. Loose connectors can melt under high loads!
                </p>
              </div>
            </div>
          </div>

          {/* Section 11 */}
          <div id="cable-management" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-teal-400" />
              11. Phase 9: Cable Management & Tidying Up
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Proper cable management behind the motherboard tray keeps your build clean and ensures healthy airflow:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
              <li>
                <strong>Group cables:</strong> Bundle thick cables (24-pin and PCIe cables) together down the middle channel of the back panel.
              </li>
              <li>
                <strong>Use tie-down anchors:</strong> Secure bundles with zip ties or Velcro straps to the case frame anchor loops.
              </li>
              <li>
                <strong>Tuck extra wires:</strong> Tuck excess cable lengths into the empty space in the PSU shroud. Keep cables clear of the CPU cooler backplate cutout.
              </li>
            </ul>
          </div>

          {/* Section 12 */}
          <div id="post-boot" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Monitor className="w-7 h-7 text-emerald-400" />
              12. Phase 10: The First Boot (POST) & Troubleshooting
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              It is time for the moment of truth. Plug in the power cord, connect your monitor, keyboard, and mouse:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <h3 className="font-bold text-white text-base">Boot Checklist</h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                <li>
                  <strong>Connect to GPU:</strong> Plug your HDMI or DisplayPort monitor cable directly into the **GPU ports** (not the motherboard ports). Plugging into the motherboard is a common mistake and results in a blank screen.
                </li>
                <li>
                  <strong>Flip the PSU switch:</strong> Turn the PSU rear switch from "O" to "I".
                </li>
                <li>
                  <strong>Power on:</strong> Press the power button on your case.
                </li>
              </ul>

              <div className="bg-zinc-800/60 border border-white/5 rounded-xl p-5 space-y-3 mt-4">
                <h4 className="font-bold text-white">Understanding Debug LEDs</h4>
                <p className="text-xs text-zinc-400">
                  Most modern motherboards have four small LEDs (CPU, DRAM, VGA, BOOT) near the 24-pin connector to troubleshoot boot failures:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-xs text-zinc-300">
                  <div className="bg-black/30 p-3 rounded">
                    <span className="font-semibold text-red-400 block">🔴 CPU LED On</span>
                    <p className="text-[11px] text-zinc-400">Indicates processor issue. Check CPU EPS power cables, or check for bent motherboard pins.</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded">
                    <span className="font-semibold text-yellow-400 block">🟡 DRAM LED On</span>
                    <p className="text-[11px] text-zinc-400">Memory issue. Try reseating RAM sticks, or test with only one stick in the A2 slot.</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded">
                    <span className="font-semibold text-white block">⚪ VGA LED On</span>
                    <p className="text-[11px] text-zinc-400">Graphics card issue. Reseat the GPU in the slot, and double check PCIe power connectors.</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded">
                    <span className="font-semibold text-green-400 block">🟢 BOOT LED On</span>
                    <p className="text-[11px] text-zinc-400">System POSTed successfully but has no OS drive. You're ready to install Windows!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Congratulations Box */}
            <div className="bg-gradient-to-br from-emerald-600/10 to-teal-600/10 border border-emerald-500/30 rounded-xl p-8 mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">🎉 Congratulations, Your PC is Built!</h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                Building a PC is a highly rewarding experience. You now understand every component in your desktop and can troubleshoot, replace, or upgrade them with complete confidence.
              </p>
              <p className="text-zinc-300 mb-4">
                Join hardware communities, share your creation, and enjoy gaming on a computer you built yourself!
              </p>
              <div className="bg-emerald-600/15 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-sm text-emerald-300">
                  <strong>Next Step:</strong> Read the <Link href="/guides/6" className="font-semibold underline hover:text-emerald-400">Cable Management and First Boot Guide</Link> to tidy up your interior space and configure your Windows system environment!
                </p>
              </div>
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
