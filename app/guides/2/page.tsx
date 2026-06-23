'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Shuffle, Save, Info, CheckCircle2,
  Layers, DollarSign, Activity
} from "lucide-react"

export default function RigCrafterTutorialGuide() {
  const tags = ["PC Building", "RigCrafter", "Guide", "Tutorial", "PC Planning"]

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
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                Official Tutorial
              </span>
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                Beginner Friendly
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              How to Use RigCrafter: Step-by-Step Tutorial
            </h1>

            <p className="text-xl text-zinc-300 max-w-2xl">
              Master RigCrafter's advanced planning features, compatibility tools, and performance analyzers to design the ultimate desktop configuration.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Wrench className="w-5 h-5 text-purple-400" />
                <span>Learn all builder features</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Avoid compatibility errors</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>Prevent hardware bottlenecks</span>
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
            8 min read
          </div>
          <div className="flex items-center gap-1">
            <Activity className="w-4 h-4" />
            Dynamic System Planning
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: Layers, label: "Interactive Tabs", value: "15+ Categories", color: "purple" },
            { icon: Shield, label: "Compatibility Check", value: "Automated", color: "green" },
            { icon: Activity, label: "Bottleneck Analysis", value: "Real-time", color: "yellow" },
            { icon: DollarSign, label: "Budget Presets", value: "$1K / $2K", color: "blue" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-zinc-900 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300">
              <stat.icon className={`w-8 h-8 mb-2 text-${stat.color}-400`} />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Navigation Table of Contents */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            📋 Navigation Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { text: "1. The Component Selector Canvas", href: "#selector" },
              { text: "2. The Smart Compatibility Engine", href: "#compatibility" },
              { text: "3. Bottleneck Analysis & Balance", href: "#bottleneck" },
              { text: "4. One-Click Randomizer & Budget Builders", href: "#randomizer" },
              { text: "5. Real-Time Price & Power Summary", href: "#summary" },
              { text: "6. Saving and Sharing Configurations", href: "#dashboard" }
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

        {/* Main Content */}
        <article className="space-y-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Planning your PC configuration is the most important step of your hardware journey. RigCrafter provides a feature-rich, real-time, interactive environment designed to eliminate the guesswork. From socket sizes to power supplies and performance bottleneck assessments, the tool processes your choices dynamically.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              In this comprehensive guide, we'll walk you through how to use RigCrafter's suite of features to ensure you build a perfectly balanced, 100% compatible system tailored exactly to your budget.
            </p>
          </div>

          {/* Section 1 */}
          <div id="selector" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-purple-400" />
              1. The Component Selector Canvas
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              The primary workspace of RigCrafter features an interactive category panel where you can browse and choose parts across core hardware and peripherals. 
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Core Components</h3>
                <p className="text-sm text-zinc-400 mb-4">The foundational components required to make the system boot and run.</p>
                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <strong>CPU:</strong> AMD Ryzen or Intel Core processors.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <strong>GPU:</strong> Nvidia RTX, AMD Radeon, or Intel Arc.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <strong>RAM:</strong> DDR4 and DDR5 memory modules.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <strong>Motherboard:</strong> Form factors from ATX to Mini-ITX.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <strong>Power Supply:</strong> High-efficiency PSUs with rated wattage.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <strong>Case & Cooling:</strong> Air coolers, Liquid AIOs, and enclosures.
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Peripherals & Add-ons</h3>
                <p className="text-sm text-zinc-400 mb-4">Complete your desktop environment with fully integrated gear and accessories.</p>
                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    <strong>Monitors:</strong> Displays with high refresh rates and resolutions.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    <strong>Keyboards & Mice:</strong> Precision inputs for gaming.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    <strong>Headsets:</strong> Immersive audio outputs.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    <strong>Expansion Cards:</strong> Network cards, sound cards.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    <strong>Accessories:</strong> Chassis fans, UPS, thermal paste.
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-purple-950/20 border border-purple-500/30 rounded-xl p-4 mt-2">
              <p className="text-sm text-purple-300">
                <strong>💡 Pro-Tip:</strong> Click on any component tab to load the selector panel below. You can search by name or sort by price to quickly zero in on specific parts.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div id="compatibility" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Shield className="w-7 h-7 text-green-400" />
              2. The Smart Compatibility Engine
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Selecting hardware can lead to physical fitment issues or socket mismatching. RigCrafter features an automated **Compatibility Engine** that evaluates your build dynamically with every addition.
            </p>
            
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white">How the Engine Analyzes Your Parts:</h3>
              <div className="grid gap-3 text-sm">
                <div className="flex gap-3 bg-black/40 p-3 rounded-lg border-l-4 border-emerald-500">
                  <div className="text-emerald-400 font-bold">1</div>
                  <div>
                    <span className="font-semibold block text-white">Socket Mismatch Verification</span>
                    Checks CPU and Motherboard socket types (e.g., matching Intel LGA1700 or AMD AM5 sockets). Mismatched sockets generate warning messages.
                  </div>
                </div>
                <div className="flex gap-3 bg-black/40 p-3 rounded-lg border-l-4 border-blue-500">
                  <div className="text-blue-400 font-bold">2</div>
                  <div>
                    <span className="font-semibold block text-white">Memory Type Integration</span>
                    Ensures RAM generation matches the motherboard slot layout (DDR4 vs DDR5). Mixing generations is physically impossible and will be flagged immediately.
                  </div>
                </div>
                <div className="flex gap-3 bg-black/40 p-3 rounded-lg border-l-4 border-cyan-500">
                  <div className="text-cyan-400 font-bold">3</div>
                  <div>
                    <span className="font-semibold block text-white">Form Factor Check</span>
                    Validates chassis size limitations. A compact Mini-ITX case will flag an error if you select a standard ATX or Micro-ATX motherboard.
                  </div>
                </div>
                <div className="flex gap-3 bg-black/40 p-3 rounded-lg border-l-4 border-yellow-500">
                  <div className="text-yellow-400 font-bold">4</div>
                  <div>
                    <span className="font-semibold block text-white">Power Wattage Limits</span>
                    Tallies CPU TDP + GPU TDP + 100W safety overhead. If this estimated total power exceeds the selected Power Supply's maximum wattage, a warning is shown.
                  </div>
                </div>
                <div className="flex gap-3 bg-black/40 p-3 rounded-lg border-l-4 border-purple-500">
                  <div className="text-purple-400 font-bold">5</div>
                  <div>
                    <span className="font-semibold block text-white">Cooling Capacity Validation</span>
                    Compares your CPU Cooler's rated thermal dissipation (TDP) with your selected processor's TDP. Inadequate coolers trigger an under-cooling warning.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="bottleneck" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Activity className="w-7 h-7 text-yellow-400" />
              3. Bottleneck Analysis & Balance
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              A computer with an expensive $1,500 graphics card combined with a $90 budget processor will perform poorly because the processor cannot keep up with the GPU. This is called a **hardware bottleneck**. 
            </p>
            <p className="text-zinc-300 leading-relaxed">
              RigCrafter includes a real-time **Bottleneck Indicator** that evaluates the balance of your CPU/GPU pair and rates the combination:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-green-500/30 rounded-xl p-5">
                <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-950/50 text-green-400 border border-green-500/30 mb-3">
                  Balanced Match
                </span>
                <h4 className="text-white font-bold mb-2">Perfect Balance (≤12% gap)</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Your components are properly matched. The CPU feeds frame requests smoothly, allowing the GPU to run at near 100% utilization during gaming.
                </p>
              </div>

              <div className="bg-zinc-900 border border-yellow-500/30 rounded-xl p-5">
                <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-yellow-950/50 text-yellow-400 border border-yellow-500/30 mb-3">
                  Mild Bottleneck
                </span>
                <h4 className="text-white font-bold mb-2">Mild Imbalance (13% - 25% gap)</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  A minor mismatch. One component slightly outperforms the other. In 1080p, the CPU might bottleneck a high-end GPU, but this disappears at higher resolutions like 1440p and 4K.
                </p>
              </div>

              <div className="bg-zinc-900 border border-orange-500/30 rounded-xl p-5">
                <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-950/50 text-orange-400 border border-orange-500/30 mb-3">
                  Moderate Bottleneck
                </span>
                <h4 className="text-white font-bold mb-2">Moderate Imbalance (26% - 45% gap)</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  A noticeable mismatch. For example, pairing a flagship graphics card with an entry-level CPU. Consider shifting your budget to balance them out.
                </p>
              </div>

              <div className="bg-zinc-900 border border-red-500/30 rounded-xl p-5">
                <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-950/50 text-red-400 border border-red-500/30 mb-3">
                  Severe Bottleneck
                </span>
                <h4 className="text-white font-bold mb-2">Severe Mismatch (&gt;45% gap)</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  An extreme imbalance. Your GPU is heavily underutilized (CPU bottlenecked), or you are spending excessive cash on a workstation CPU while using an entry-level GPU (GPU bottlenecked).
                </p>
              </div>
            </div>

            <div className="bg-yellow-950/20 border border-yellow-500/30 rounded-xl p-4">
              <p className="text-sm text-yellow-300">
                <strong>💡 Tip:</strong> Keep an eye on the visual balance bar. If it tilts heavily in one direction, read the generated recommendations to swap one component for a cheaper or more powerful option.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div id="randomizer" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Shuffle className="w-7 h-7 text-blue-400" />
              4. One-Click Randomizer & Budget Builders
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              If you aren't sure where to start, or want to experiment with different builds, RigCrafter features automated system-generating tools.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Shuffle className="w-4 h-4 text-purple-400" />
                  Randomize Build
                </h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Generates a fully customized, compatible system configuration using random parts from the database in one click.
                </p>
                <div className="text-xs text-zinc-500">
                  Ideal for testing the compatibility engine or seeing what combinations are possible.
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  Budget Presets ($1,000 / $2,000)
                </h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Generates pre-configured rigs targeting exact price brackets. RigCrafter automatically balances the component costs to maximize gaming performance.
                </p>
                <div className="text-xs text-zinc-500">
                  Ideal as a solid foundation that you can customize or tweak further.
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="summary" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <DollarSign className="w-7 h-7 text-green-400" />
              5. Real-Time Price & Power Summary
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              The builder dashboard displays a **Build Summary** sidebar. This section keeps you updated on crucial details as you make adjustments:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <table className="min-w-full divide-y divide-white/10 text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-2 font-semibold text-white">Sidebar Stat</th>
                    <th className="text-left py-2 font-semibold text-white">Description</th>
                    <th className="text-left py-2 font-semibold text-white">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr>
                    <td className="py-3 font-semibold">Total Price</td>
                    <td className="py-3">Dynamic sum of all chosen components.</td>
                    <td className="py-3 text-xs text-zinc-400">Ensures you stay within your budget constraints.</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Estimated TDP</td>
                    <td className="py-3">Calculated combined power draw of GPU + CPU.</td>
                    <td className="py-3 text-xs text-zinc-400">Determines your minimum required power supply capacity.</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Component Count</td>
                    <td className="py-3">Tracks how many slots in your builder are active.</td>
                    <td className="py-3 text-xs text-zinc-400">Helps you make sure you haven't forgotten crucial parts.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 6 */}
          <div id="dashboard" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Save className="w-7 h-7 text-blue-400" />
              6. Saving and Sharing Configurations
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Once you have crafted the perfect PC rig, you don't want to lose it. RigCrafter provides deep integration with personal user accounts:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>
                <strong>Cloud Save:</strong> Log in via the account portal to unlock the **Save Build** feature. Give your build a custom name (e.g., "Sarah's Mini-ITX gaming build") to store it securely in your user profile database.
              </li>
              <li>
                <strong>Configuration Recovery:</strong> Load up previous saved builds from your personal dashboard at any time to modify specs or check current market pricing.
              </li>
              <li>
                <strong>Sharing:</strong> Share your builds with friends or hardware forums to gather community feedback before purchasing components.
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Start Crafting Your Rig!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Building a PC configuration should be exciting, not stressful. With RigCrafter's compatibility alerts, bottleneck calculators, and easy randomizers, you are equipped with professional-grade building assistant tools.
            </p>
            <p className="text-zinc-300 mb-4">
              Head back to the builder, experiment with parts, and layout your dream gaming rig today!
            </p>
            <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-4">
              <p className="text-sm text-purple-300">
                <strong>Next Step:</strong> Open the <Link href="/#builder" className="font-semibold underline hover:text-purple-400">Rig Builder Page</Link> and select a CPU to start your build, or click "Randomize Build" to see a finished rig instantly.
              </p>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <div className="mt-16 p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-lg rounded-xl border border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              SAM
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">SamXop123</h3>
              <p className="text-zinc-400">Developer of RigCrafter</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Sam is the developer of RigCrafter and an avid hardware enthusiast. He built RigCrafter to simplify custom PC planning, helping builders worldwide easily design balanced, compatible rigs.
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
            href="/guides/1" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: Complete Beginner's Guide
          </Link>
          <Link 
            href="/guides/3" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            Next: Budget Gaming PC Build Guide
            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
