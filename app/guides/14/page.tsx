'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Layers, Info, CheckCircle2,
  Settings, Box, HelpCircle
} from "lucide-react"

export default function WorkstationBuildGuide() {
  const tags = ["Workstation", "Content Creation", "Video Editing", "3D Rendering", "ECC RAM"]

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
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-cyan-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10 font-sans">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-500/30">
                Workstation Build
              </span>
              <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full border border-teal-500/30">
                22 Min Read
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Workstation Build for Content Creation
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
              Design a computational workhorse optimized for multi-threaded rendering, high-bandwidth storage arrays, video editing codec decoding, and stable ECC memory configurations.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <span>Threadripper & Intel Xeon Architectures</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <HardDrive className="w-5 h-5 text-teal-400" />
                <span>Multi-Drive NVMe Scratch Configurations</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span>ECC Memory and Stability Verification</span>
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
            July 21, 2026
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            22 min read
          </div>
          <div className="flex items-center gap-1">
            <Wrench className="w-4 h-4" />
            Systems Engineering
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
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            {[
              { text: "1. Workstation vs. Gaming: The Core Differences", href: "#workstation-vs-gaming" },
              { text: "2. Workload Analysis: Bottlenecks by Program", href: "#workload-analysis" },
              { text: "3. Processor Architectures: Consumer vs. HEDT", href: "#processors" },
              { text: "4. Memory Systems: Bus Widths, ECC, and Capacities", href: "#memory" },
              { text: "5. Graphics Selection: VRAM Buffers and Driver Stabilities", href: "#gpu-selection" },
              { text: "6. The Multi-Drive NVMe Architecture Layout", href: "#storage-layout" },
              { text: "7. Thermal Management and Acoustic Controls", href: "#thermals" },
              { text: "8. Validation Checklist: Burn-In and Stress Testing", href: "#validation" }
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
        <article className="space-y-12 text-zinc-300 leading-relaxed font-light">
          
          {/* Section 1 */}
          <div id="workstation-vs-gaming" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Cpu className="w-7 h-7 text-emerald-400" />
              1. Workstation vs. Gaming: The Core Differences
            </h2>
            <p>
              Many PC builders make the mistake of assuming a high-end gaming PC will naturally function as an outstanding professional workstation. While a gaming machine prioritizes low latency, single-threaded boost frequencies, and graphics fill-rates, a professional workstation has completely different priorities:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6 text-sm">
              <div className="bg-zinc-950 p-5 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-white text-base block">Gaming PC Focus</span>
                <ul className="space-y-1 list-disc pl-4 text-zinc-400">
                  <li>High single-core CPU clock speed to minimize game loop latencies.</li>
                  <li>Fast, low-latency dual-channel RAM (often 32GB maximum).</li>
                  <li>High GPU rasterization speeds and real-time ray tracing acceleration.</li>
                  <li>Basic cooling designed for shifting, dynamic rendering loads.</li>
                </ul>
              </div>
              <div className="bg-zinc-950 p-5 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-emerald-400 text-base block">Workstation Focus</span>
                <ul className="space-y-1 list-disc pl-4 text-zinc-400">
                  <li>Sustained multi-threaded compute density across all cores.</li>
                  <li>High memory bandwidth (quad or octa-channel) and Error-Correcting Code (ECC) support.</li>
                  <li>Large VRAM graphics buffers for loading massive datasets and scene geometries.</li>
                  <li>Robust, server-grade storage controllers and dedicated scratch disks.</li>
                  <li>Heavy thermal capabilities designed for 100% compute loads over several days.</li>
                </ul>
              </div>
            </div>
            <p>
              When a gaming PC crashes, you lose your game match. When a workstation crashes during a 16-hour render job at 3:00 AM, you lose hours of creative work and delay delivery schedules. Workstation design is built on the foundations of stability and reliability under sustained, maximum stress.
            </p>
          </div>

          {/* Section 2 */}
          <div id="workload-analysis" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-teal-400" />
              2. Workload Analysis: Bottlenecks by Program
            </h2>
            <p>
              Before purchasing hardware, you must analyze the primary applications you run. Different creative suites interact with computer components in completely unique ways:
            </p>
            
            <div className="space-y-6">
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10 space-y-3">
                <h3 className="text-xl font-semibold text-white">A. Video Editing (Adobe Premiere Pro vs. DaVinci Resolve)</h3>
                <p className="text-sm">
                  <strong>Adobe Premiere Pro:</strong> Historically relies on a mix of single-core frequency and specialized hardware encoders. Premiere Pro makes heavy use of **Intel QuickSync** (integrated graphics inside Intel consumer CPUs) to hardware-decode H.264/HEVC footage smoothly on the timeline. If you configure an Intel "F-Series" CPU without integrated graphics, your timeline scrubbing performance will drop significantly, even with an RTX 4090 installed.
                </p>
                <p className="text-sm">
                  <strong>DaVinci Resolve:</strong> Designed from the ground up for massive GPU acceleration. Resolve scales linearly with multiple graphics cards. If you configure a system with dual RTX 4090 GPUs, Resolve will utilize both cards to accelerate timeline scrubbing, color grading nodes, and final rendering, whereas Premiere Pro will see minimal gains from a second graphics card.
                </p>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10 space-y-3">
                <h3 className="text-xl font-semibold text-white">B. 3D Modeling & Animation (Blender, Autodesk Maya, Cinema 4D)</h3>
                <p className="text-sm">
                  <strong>Viewport Performance:</strong> Working inside your 3D viewport (sculpting, rigging, moving meshes) is a single-threaded CPU task. A higher single-core frequency yields a more responsive, lag-free viewport workspace.
                </p>
                <p className="text-sm">
                  <strong>Rendering:</strong> Generating the final frame or animation sequence is a highly parallelized task. Modern rendering engines (like Blender Cycles or V-Ray) are optimized to run on GPUs using Nvidia's **OptiX** API. OptiX leverages dedicated RT cores inside Nvidia graphics cards to calculate path tracing algorithms up to 400% faster than standard CPU rendering.
                </p>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10 space-y-3">
                <h3 className="text-xl font-semibold text-white">C. Visual Effects & Code Compiling (After Effects, Houdini, Unreal Engine)</h3>
                <p className="text-sm">
                  <strong>Adobe After Effects:</strong> A notorious memory hog. It utilizes a feature called Multi-Frame Rendering (MFR), which scales with high CPU core counts. However, it requires a massive amount of system RAM (often 4GB to 6GB of RAM per CPU core) to cache preview frames. 128GB of RAM is standard for professional After Effects workspaces.
                </p>
                <p className="text-sm">
                  <strong>Unreal Engine & Houdini:</strong> Compiling shaders, building lighting data, and calculating Houdini fluid simulations are highly parallelized compute tasks. These workloads scale linearly with core counts, making High-End Desktop (HEDT) platforms with 32 to 96 cores the ideal choice.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="processors" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Cpu className="w-7 h-7 text-emerald-400" />
              3. Processor Architectures: Consumer vs. HEDT
            </h2>
            <p>
              One of the first structural decisions is selecting between consumer-grade desktop sockets and High-End Desktop (HEDT) sockets:
            </p>
            
            <div className="space-y-4">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm">
                <h3 className="font-bold text-white mb-2">Platform Selection Matrix</h3>
                <table className="min-w-full divide-y divide-white/10 text-left">
                  <thead>
                    <tr>
                      <th className="py-2 text-white font-semibold">Metrics</th>
                      <th className="py-2 text-white font-semibold">Consumer (AM5 / LGA1851)</th>
                      <th className="py-2 text-white font-semibold">HEDT (Threadripper / Xeon W)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-zinc-400">
                    <tr>
                      <td className="py-3 text-white">Core Count Limits</td>
                      <td className="py-3">Up to 16 Cores / 32 Threads</td>
                      <td className="py-3">Up to 96 Cores / 192 Threads</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-white">PCIe Gen 5 Lanes</td>
                      <td className="py-3">20 to 28 Lanes (1 GPU + 1 SSD)</td>
                      <td className="py-3">Up to 128 Lanes (4 GPUs + RAID Arrays)</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-white">Memory Channels</td>
                      <td className="py-3">Dual-Channel (128-bit bus width)</td>
                      <td className="py-3">Quad/Octa-Channel (256/512-bit bus width)</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-white">ECC RAM Support</td>
                      <td className="py-3">Unbuffered ECC only (Unvalidated)</td>
                      <td className="py-3">Registered ECC (Fully validated & buffered)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-black/30 border border-white/5 p-5 rounded-lg text-sm">
                <span className="font-semibold text-emerald-400 block mb-1">AMD Threadripper Advantage:</span>
                If your creative business relies on massive storage arrays and multiple graphics cards, you require the expansion capabilities of HEDT platforms. A consumer platform simply runs out of PCIe lanes if you install more than one GPU and one PCIe Gen 5 SSD, forcing additional cards to run at reduced bus speeds.
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="memory" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-teal-400" />
              4. Memory Systems: Bus Widths, ECC, and Capacities
            </h2>
            <p>
              In a workstation, RAM capacity and stability take precedence over peak clock frequency.
            </p>
            <div className="space-y-4 text-sm">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="font-semibold text-white block text-base">Why ECC (Error-Correcting Code) is Mandatory</span>
                <p className="text-zinc-400">
                  Standard consumer memory can suffer from "single-bit flips" caused by background cosmic rays, magnetic fields, or electrical fluctuations. A single-bit flip changes a 0 to a 1 in your system memory. In gaming, this might cause a desktop crash. In video rendering or simulation rendering, a bit flip will corrupt your project output or crash the system hours into a rendering run.
                </p>
                <p className="text-zinc-400">
                  ECC memory contains an extra memory chip on the module that continuously calculates parity checksums to detect and correct single-bit errors in real-time, ensuring continuous system operation.
                </p>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="font-semibold text-white block text-base">Memory Configuration Strategy</span>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li><strong>Dual vs Quad Channel:</strong> Quad-channel configurations double the memory bus width, allowing the CPU to load massive 3D textures and asset caches into the processor cores significantly faster.</li>
                  <li><strong>Speed vs. Stability:</strong> Do not use highly overclocked gaming RAM profiles (like DDR5-7200) on a workstation. Stick to standard JEDEC profile rates (like DDR5-4800 or DDR5-5600) running at their native voltages (1.1V). Workstation stability requires running memory at stock values.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="gpu-selection" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Monitor className="w-7 h-7 text-cyan-400" />
              5. Graphics Selection: VRAM Buffers and Driver Stabilities
            </h2>
            <p>
              For creator workloads, the total capacity of your graphics memory (VRAM) is the single most important metric. If your 3D scene, asset textures, or high-res video files exceed your graphics card's VRAM pool, the rendering engine will crash or fall back to slow system RAM, reducing rendering speeds by up to 90%.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <span className="font-semibold text-white block mb-2">VRAM Buffer Limits</span>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• <strong>8GB VRAM:</strong> Entry level. Suitable for basic 1080p video editing and low-complexity 3D modeling.</li>
                    <li>• <strong>16GB VRAM:</strong> Mid range. Suitable for 4K video editing (ProRes/H.264) and medium-scale 3D scenes in Blender.</li>
                    <li>• <strong>24GB+ VRAM:</strong> High end. Mandatory for complex 3D scenes, high-res texture baking, Unreal Engine 5 production, and large-scale AI model training.</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-white block mb-2">Driver Optimizations</span>
                  <p className="text-zinc-400 leading-relaxed">
                    Always skip standard Game Ready drivers and configure **Nvidia Studio Drivers**. Studio drivers are certified and tested for stability across major creative suites (Adobe Creative Cloud, Blender, DaVinci Resolve, Cinema 4D, Autodesk suites). They prioritize memory allocation stability and background process stability over game optimization patches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="storage-layout" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <HardDrive className="w-7 h-7 text-emerald-400" />
              6. The Multi-Drive NVMe Architecture Layout
            </h2>
            <p>
              Never build a professional workstation with only a single storage drive. Operating systems and programs continuously read and write tiny system files in the background, creating drive latency. If your video editor is reading raw video files from the same drive that the OS is utilizing, you will experience timeline stutters.
            </p>
            <p>
              Configure the **Triple-Drive Standard** for maximum throughput:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-xs text-zinc-300">
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-emerald-400 block text-sm">Drive 1: OS & Programs</span>
                <p className="text-[11px] text-zinc-400">
                  A high-durability PCIe Gen 4.0 SSD (500GB to 1TB). Dedicated solely to operating systems, utilities, and application installs.
                </p>
              </div>
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-teal-400 block text-sm">Drive 2: Scratch & Cache</span>
                <p className="text-[11px] text-zinc-400">
                  A fast PCIe Gen 4.0 or Gen 5.0 SSD (1TB to 2TB) with high write endurance. Dedicated solely to Premiere Pro media cache, After Effects disk cache, and temporary render storage.
                </p>
              </div>
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-cyan-400 block text-sm">Drive 3: Active Media & Projects</span>
                <p className="text-[11px] text-zinc-400">
                  A high-capacity PCIe Gen 4.0 NVMe SSD (2TB to 4TB). Stores your raw footage, 3D asset libraries, and active project directories.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div id="thermals" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Shield className="w-7 h-7 text-teal-400" />
              7. Thermal Management and Acoustic Controls
            </h2>
            <p>
              Unlike gaming PCs which experience bursts of heat, workstations run at sustained peak thermal loads. When compiling code or rendering, the CPU and GPU will pull maximum current for hours.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3 text-sm">
              <p>
                • <strong>Cooling Selection:</strong> Opt for high-surface radiators (360mm or 420mm AIO systems) or premium dual-tower air coolers (like the Noctua NH-D15 G2). Avoid small single-fan radiators or compact air coolers that will quickly saturate and throttle.
              </p>
              <p>
                • <strong>Acoustics:</strong> Video editors and audio engineers require quiet environments to review audio tracks. Avoid high-RPM server fans. Configure premium fluid-dynamic bearing (FDB) fans and set up custom, quiet fan curves in the BIOS that slowly ramp up under load.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div id="validation" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Wrench className="w-7 h-7 text-cyan-400" />
              8. Validation Checklist: Burn-In and Stress Testing
            </h2>
            <p>
              Once your workstation is assembled, do not put it into production immediately. You must run a thorough burn-in sequence to validate component stability under load:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                <li>
                  <strong>MemTest86 Verification:</strong> Run a complete 4-pass MemTest86 sequence from a USB drive before installing your OS. This tests every memory address block for errors. Even a single memory error indicates bad memory modules or unstable BIOS voltages.
                </li>
                <li>
                  <strong>Prime95 CPU Stressing:</strong> Run Prime95 (Small FFTs configuration) for 4 to 6 hours while monitoring CPU package temperatures. The system must remain stable under maximum TDP load without thermal throttling or blue-screening.
                </li>
                <li>
                  <strong>FurMark GPU Testing:</strong> Run FurMark or 3DMark loops for 2 hours to verify that the graphics card voltage regulators and cooling assemblies operate safely under sustained heavy draw.
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🏆 Workstation Design Complete!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4 font-light">
              Designing a professional workstation is an exercise in resource balancing. By matching CPU platforms to application architectures, implementing redundant memory, routing multiple NVMe channels, and verifying hardware through strict burn-in testing, you create a fast, stable, and highly productive workspace.
            </p>
            <p className="text-zinc-300 mb-4">
              Use RigCrafter's workstation category to choose certified components and build your productive desktop rig!
            </p>
            <div className="bg-emerald-600/15 border border-emerald-500/30 rounded-lg p-4">
              <p className="text-sm text-emerald-300">
                <strong>Next Step:</strong> You have completed the workstation design process! Go back to the <Link href="/guides" className="font-semibold underline hover:text-emerald-400">Guides List</Link> to browse other advanced building procedures.
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
            Sam is the creator of RigCrafter and a workstation hardware systems engineer. He developed the platform's multi-GPU and memory channel detection libraries to assist professionals in designing reliable compute stations.
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
            href="/guides/13" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: RGB Lighting Setup and Control
          </Link>
          <Link 
            href="/guides" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Next: Back to Guides List
            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
