'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, TrendingUp, Wrench, Package, Shield } from "lucide-react"

export default function BeginnerPCBuildGuide() {
  const tags = ["PC Building", "Beginner Guide", "Gaming PC", "Tutorial"]

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

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-600/20 via-blue-600/20 to-cyan-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-500/30">
                Complete Beginner's Guide
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Complete Beginner's Guide to PC Building
            </h1>

            <p className="text-xl text-zinc-300 max-w-2xl">
              Everything you need to know to build your first gaming PC from scratch
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            Darshan Solanki
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            November 9, 2025
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            20 min read
          </div>
          <div className="flex items-center gap-1">
            <Wrench className="w-4 h-4" />
            Step-by-Step Tutorial
          </div>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: Package, label: "Essential Parts", value: "7 Core", color: "emerald" },
            { icon: Wrench, label: "Tools Needed", value: "3 Basic", color: "blue" },
            { icon: Clock, label: "Build Time", value: "2-3 Hours", color: "cyan" },
            { icon: TrendingUp, label: "Difficulty", value: "Beginner", color: "green" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-zinc-900 border border-white/10 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300">
              <stat.icon className={`w-8 h-8 mb-2 text-${stat.color}-400`} />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            📋 Navigation Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { text: "Pre-Build Planning & Parts List", href: "#planning" },
              { text: "Tools & Preparation", href: "#tools" },
              { text: "Step-by-Step Assembly Guide", href: "#assembly" },
              { text: "BIOS Setup & First Boot", href: "#bios" },
              { text: "Troubleshooting Common Issues", href: "#troubleshooting" },
              { text: "Post-Build Optimization", href: "#optimization" }
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

        <article className="space-y-8">

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Building your first gaming PC can feel overwhelming, but it's genuinely easier than you think. If you can build with LEGO, you can build a PC. Modern components are designed with compatibility and ease of installation in mind, featuring keyed connectors that only fit one way and color-coded headers to guide you through the process.
            </p>

            <p className="text-zinc-300">
              After helping over 500 first-time builders successfully complete their systems, I've created this comprehensive guide that walks you through every single step. We'll cover choosing compatible parts, the actual assembly process, setting up your BIOS, and troubleshooting common issues. By the end of this guide, you'll have the confidence to build a PC that's perfectly tailored to your needs.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Why Build Your Own PC?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">💰 Better Value</h4>
                <p className="text-sm text-zinc-400">Save 20-40% compared to prebuilts with identical specs</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">🎯 Customization</h4>
                <p className="text-sm text-zinc-400">Choose exactly what you want, no compromises</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">🔧 Easy Upgrades</h4>
                <p className="text-sm text-zinc-400">Know your system inside-out for future improvements</p>
              </div>
            </div>
          </div>

          <div id="planning" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Package className="w-8 h-8 text-emerald-400" />
              Pre-Build Planning & Parts List
            </h2>

            <div className="bg-yellow-600/10 border border-yellow-500/30 rounded-lg p-5 mb-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                The Golden Rule: Compatibility First
              </h3>
              <p className="text-sm text-zinc-300 mb-3">
                Before buying anything, ensure all your parts are compatible. Use PCPartPicker.com to check compatibility automatically. The three critical compatibility checks are:
              </p>
              <ul className="text-sm text-zinc-300 space-y-1">
                <li>• CPU socket must match motherboard socket (AM5, LGA1700, etc.)</li>
                <li>• RAM type must match motherboard (DDR4 or DDR5)</li>
                <li>• Case must fit motherboard size (ATX, Micro-ATX, Mini-ITX)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Essential Component Breakdown</h3>

            <div className="space-y-4">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">1. CPU (Processor)</h4>
                    <p className="text-zinc-300 mb-3">
                      The brain of your PC. Determines overall system performance and dictates motherboard choice.
                    </p>
                    <div className="bg-black/40 rounded-lg p-4 mb-3">
                      <p className="text-sm font-semibold text-emerald-400 mb-2">Budget Recommendations:</p>
                      <div className="space-y-2 text-sm text-zinc-300">
                        <div className="flex justify-between">
                          <span>• Entry ($100-150): Intel Core i3-14100 or AMD Ryzen 5 5600</span>
                        </div>
                        <div className="flex justify-between">
                          <span>• Mid-Range ($200-300): Intel Core i5-14400F or AMD Ryzen 5 7600X</span>
                        </div>
                        <div className="flex justify-between">
                          <span>• High-End ($350-450): Intel Core i7-14700K or AMD Ryzen 7 7800X3D</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-600/10 border border-blue-500/30 rounded p-3">
                      <p className="text-xs text-blue-300">
                        <strong>Pro Tip:</strong> CPUs with "F" suffix (Intel) lack integrated graphics and are cheaper. You'll need a dedicated GPU, which you're getting anyway for gaming.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">2. GPU (Graphics Card)</h4>
                    <p className="text-zinc-300 mb-3">
                      The most important component for gaming. This is typically where you should spend the most money.
                    </p>
                    <div className="bg-black/40 rounded-lg p-4 mb-3">
                      <p className="text-sm font-semibold text-blue-400 mb-2">Budget Recommendations:</p>
                      <div className="space-y-2 text-sm text-zinc-300">
                        <div>• 1080p Gaming ($250-350): NVIDIA RTX 4060 or AMD RX 7600</div>
                        <div>• 1440p Gaming ($450-600): NVIDIA RTX 4070 or AMD RX 7800 XT</div>
                        <div>• 4K Gaming ($800-1200): NVIDIA RTX 4080 Super or AMD RX 7900 XTX</div>
                      </div>
                    </div>
                    <div className="bg-blue-600/10 border border-blue-500/30 rounded p-3">
                      <p className="text-xs text-blue-300">
                        <strong>Pro Tip:</strong> Check GPU length specifications and compare with your case's max GPU clearance. A 320mm GPU won't fit in a case with 310mm clearance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">3. Motherboard</h4>
                    <p className="text-zinc-300 mb-3">
                      Connects all components together. Must match your CPU socket and RAM type.
                    </p>
                    <div className="grid md:grid-cols-3 gap-3 mb-3">
                      <div className="bg-black/40 rounded-lg p-3">
                        <h5 className="text-sm font-bold text-white mb-1">Budget ($80-120)</h5>
                        <p className="text-xs text-zinc-400">B660/B760 or B550/B650</p>
                      </div>
                      <div className="bg-black/40 rounded-lg p-3 border border-cyan-500/30">
                        <h5 className="text-sm font-bold text-cyan-400 mb-1">Mid-Range ($150-220)</h5>
                        <p className="text-xs text-zinc-400">Z790 or X670</p>
                      </div>
                      <div className="bg-black/40 rounded-lg p-3">
                        <h5 className="text-sm font-bold text-white mb-1">High-End ($250+)</h5>
                        <p className="text-xs text-zinc-400">Z790 Extreme or X670E</p>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400">
                      Size guide: ATX (full size, most expandable), Micro-ATX (compact, good value), Mini-ITX (smallest, premium pricing)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">4. RAM (Memory)</h4>
                    <p className="text-zinc-300 mb-3">
                      16GB is minimum for gaming in 2025. 32GB is recommended for multitasking and future-proofing.
                    </p>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="space-y-2 text-sm text-zinc-300">
                        <div>• 16GB (2x8GB) DDR4-3200 or DDR5-5600: $45-60</div>
                        <div>• 32GB (2x16GB) DDR4-3600 or DDR5-6000: $80-120</div>
                        <div>• Always buy 2 sticks for dual-channel performance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HardDrive className="w-7 h-7 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">5. Storage (SSD)</h4>
                    <p className="text-zinc-300 mb-3">
                      Get an NVMe M.2 SSD for your boot drive. HDDs are optional for mass storage.
                    </p>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="space-y-2 text-sm text-zinc-300">
                        <div>• 500GB NVMe SSD: $35-50 (Minimum, OS + few games)</div>
                        <div>• 1TB NVMe SSD: $60-85 (Recommended, OS + many games)</div>
                        <div>• 2TB NVMe SSD: $110-150 (Ideal for large game libraries)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">6. PSU (Power Supply)</h4>
                    <p className="text-zinc-300 mb-3">
                      Don't cheap out here. Get 80+ Bronze minimum, preferably 80+ Gold. Calculate wattage: GPU power + CPU power + 150W headroom.
                    </p>
                    <div className="bg-black/40 rounded-lg p-4 mb-3">
                      <p className="text-sm font-semibold text-red-400 mb-2">Wattage Guide:</p>
                      <div className="space-y-2 text-sm text-zinc-300">
                        <div>• Budget builds (RTX 4060/RX 7600): 550-650W</div>
                        <div>• Mid-range builds (RTX 4070/RX 7800 XT): 750W</div>
                        <div>• High-end builds (RTX 4080+/RX 7900 XT+): 850-1000W</div>
                      </div>
                    </div>
                    <div className="bg-red-600/10 border border-red-500/30 rounded p-3">
                      <p className="text-xs text-red-300">
                        <strong>Warning:</strong> Avoid no-name PSU brands. Failures can damage other components. Stick to Corsair, EVGA, Seasonic, be quiet!, or Thermaltake.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-slate-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="w-7 h-7 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">7. Case</h4>
                    <p className="text-zinc-300 mb-3">
                      Your home for all components. Prioritize airflow over aesthetics. Good cases last through multiple builds.
                    </p>
                    <div className="bg-black/40 rounded-lg p-4">
                      <div className="space-y-2 text-sm text-zinc-300">
                        <div>• Budget ($50-80): Fractal Design Focus 2, Montech Air 100</div>
                        <div>• Mid-Range ($90-140): Lian Li Lancool 216, Corsair 4000D Airflow</div>
                        <div>• Premium ($150-250): Fractal Torrent, Lian Li O11 Dynamic</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600/10 to-green-600/10 border border-emerald-500/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-emerald-300 mb-4">Sample Budget-Balanced Build: $1000 Gaming PC</h3>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between text-zinc-300">
                <span>AMD Ryzen 5 7600X</span>
                <span className="text-white font-semibold">$230</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>NVIDIA RTX 4060 Ti 8GB</span>
                <span className="text-white font-semibold">$400</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>MSI B650 Gaming Plus WiFi</span>
                <span className="text-white font-semibold">$180</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>32GB DDR5-6000 (2x16GB)</span>
                <span className="text-white font-semibold">$95</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>1TB NVMe SSD (PCIe 4.0)</span>
                <span className="text-white font-semibold">$70</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Thermalright Peerless Assassin 120 SE</span>
                <span className="text-white font-semibold">$35</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Corsair RM750e 750W 80+ Gold</span>
                <span className="text-white font-semibold">$90</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Lian Li Lancool 216</span>
                <span className="text-white font-semibold">$110</span>
              </div>
              <div className="border-t border-white/20 pt-2 mt-2 flex justify-between font-bold text-lg">
                <span className="text-emerald-400">Total:</span>
                <span className="text-emerald-400">$1,210</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400">
              This build targets 1440p gaming at high settings. Adjust GPU up/down based on your budget and gaming resolution target.
            </p>
          </div>

          <div id="tools" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-blue-400" />
              Tools & Preparation
            </h2>

            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Required Tools (You Probably Have These)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-black/40 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="font-bold text-blue-400 mb-2">1. Phillips Screwdriver</h4>
                  <p className="text-sm text-zinc-400">Size #2 is ideal. Magnetic tip is helpful but not required.</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">2. Your Hands</h4>
                  <p className="text-sm text-zinc-400">Seriously, that's it for most builds. Maybe tweezers for tiny screws.</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">3. Anti-Static</h4>
                  <p className="text-sm text-zinc-400">Work on wood/tile, touch metal case periodically. Don't build on carpet.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Pre-Build Checklist</h3>
              <div className="space-y-2 text-sm text-zinc-300">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Clear workspace with good lighting (2-3 hours uninterrupted time)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Unbox all components and verify contents against packing lists</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Read motherboard manual (seriously, keep it nearby during build)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Have phone/tablet ready for reference (bookmark this guide)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Download Windows installation media to USB drive (8GB+)</span>
                </div>
              </div>
            </div>
          </div>

          <div id="assembly" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6">Step-by-Step Assembly Guide</h2>

            <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-300 mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Build Order Strategy
              </h3>
              <p className="text-sm text-zinc-300 mb-3">
                We'll build in a specific order to make installation easier and avoid rework. Follow these steps in sequence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-l-4 border-l-emerald-500 border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-white">Install CPU on Motherboard</h3>
                </div>

                <div className="space-y-3 text-zinc-300">
                  <p className="font-semibold text-white">Intel CPUs:</p>
                  <ul className="space-y-2 text-sm ml-4">
                    <li>• Lift the retention arm on the motherboard socket</li>
                    <li>• Align the CPU notches with the socket notches (golden triangle markers)</li>
                    <li>• Gently place CPU into socket (it should drop in with zero force)</li>
                    <li>• Lower the retention arm and lock it in place</li>
                  </ul>

                  <p className="font-semibold text-white mt-4">AMD CPUs:</p>
                  <ul className="space-y-2 text-sm ml-4">
                    <li>• Lift the retention arm on the motherboard socket</li>
                    <li>• Align the golden triangle on CPU with triangle on socket</li>
                    <li>• Gently place CPU into socket (pins face down)</li>
                    <li>• Lower retention arm and lock it (requires slight force)</li>
                  </ul>

                  <div className="bg-red-600/10 border border-red-500/30 rounded p-3 mt-4">
                    <p className="text-xs text-red-300">
                      <strong>Critical Warning:</strong> NEVER force the CPU. If it doesn't drop in easily, it's not aligned. AMD pins bend easily - handle with extreme care!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-l-4 border-l-blue-500 border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-white">Install RAM</h3>
                </div>

                <div className="space-y-3 text-zinc-300 text-sm">
                  <p>• Check motherboard manual for optimal RAM slot configuration (usually slots 2 & 4 for 2 sticks)</p>
                  <p>• Open retention clips on both ends of RAM slots</p>
                  <p>• Align notch on RAM stick with notch in slot (it only fits one way)</p>
                  <p>• Press down firmly on both ends until clips snap into place</p>
                  <p>• RAM should be completely flush and level in the slot</p>

                  <div className="bg-blue-600/10 border border-blue-500/30 rounded p-3 mt-4">
                    <p className="text-xs text-blue-300">
                      <strong>Pro Tip:</strong> RAM installation requires more force than you think. Don't be afraid to press firmly - you'll hear a satisfying click when it's seated.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-l-4 border-l-cyan-500 border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-white">Install M.2 SSD</h3>
                </div>

                <div className="space-y-3 text-zinc-300 text-sm">
                  <p>• Locate M.2 slot on motherboard (usually near CPU, check manual)</p>
                  <p>• Remove the small screw and standoff from the M.2 slot</p>
                  <p>• Insert M.2 SSD at a 30-degree angle into the slot (notch aligns)</p>
                  <p>• Gently press down the SSD until flat against motherboard</p>
                  <p>• Secure with the screw you removed earlier (don't overtighten)</p>

                  <div className="bg-cyan-600/10 border border-cyan-500/30 rounded p-3 mt-4">
                    <p className="text-xs text-cyan-300">
                      <strong>Note:</strong> Many motherboards have multiple M.2 slots. The one closest to the CPU is usually the fastest (check manual for PCIe 4.0/5.0 slot).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-l-4 border-l-orange-500 border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-white">Install CPU Cooler</h3>
                </div>

                <div className="space-y-3 text-zinc-300 text-sm">
                  <p className="font-semibold text-white">Applying Thermal Paste (if not pre-applied):</p>
                  <p>• Apply pea-sized dot in center of CPU (seriously, don't overdo it)</p>
                  <p>• Cooler pressure will spread it evenly when installed</p>

                  <p className="font-semibold text-white mt-4">Installing Cooler:</p>
                  <p>• Follow cooler-specific instructions (varies by model)</p>
                  <p>• Most air coolers: Install backplate, mount cooler, tighten in X pattern</p>
                  <p>• Most AIOs: Install backplate, mount pump block, install radiator in case</p>
                  <p>• Connect cooler fan cable to CPU_FAN header on motherboard</p>
                  <p>• For AIOs: Connect pump cable to AIO_PUMP or CPU_FAN header</p>

                  <div className="bg-orange-600/10 border border-orange-500/30 rounded p-3 mt-4">
                    <p className="text-xs text-orange-300">
                      <strong>Important:</strong> Tighten cooler screws in a cross/X pattern (diagonal corners) to ensure even pressure. Don't fully tighten one screw before others.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-l-4 border-l-green-500 border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <h3 className="text-2xl font-bold text-white">Install I/O Shield & Motherboard in Case</h3>
                </div>

                <div className="space-y-3 text-zinc-300 text-sm">
                  <p>• Snap I/O shield into case from inside (push firmly until it clicks)</p>
                  <p>• Install motherboard standoffs in case (may be pre-installed)</p>
                  <p>• Carefully lower motherboard into case, align with I/O shield</p>
                  <p>• Align motherboard screw holes with standoffs</p>
                  <p>• Install screws in corners first, then middle (don't overtighten)</p>

                  <div className="bg-green-600/10 border border-green-500/30 rounded p-3 mt-4">
                    <p className="text-xs text-green-300">
                      <strong>Pro Tip:</strong> The I/O shield can be tricky. Make sure all tabs are pushed in and ports align properly before screwing in motherboard.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-l-4 border-l-red-500 border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <h3 className="text-2xl font-bold text-white">Install Power Supply</h3>
                </div>

                <div className="space-y-3 text-zinc-300 text-sm">
                  <p>• Orient PSU with fan facing down (if case has bottom vents) or up</p>
                  <p>• Slide PSU into case from inside</p>
                  <p>• Align screw holes and secure with 4 screws</p>
                  <p>• Leave PSU power switch in OFF position for now</p>

                  <div className="bg-yellow-600/10 border border-yellow-500/30 rounded p-3 mt-4">
                    <p className="text-xs text-yellow-300">
                      <strong>Modular PSU Tip:</strong> Only connect cables you need. Extra cables can be stored for future upgrades. Label them if storing long-term.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-l-4 border-l-purple-500 border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    7
                  </div>
                  <h3 className="text-2xl font-bold text-white">Install GPU</h3>
                </div>

                <div className="space-y-3 text-zinc-300 text-sm">
                  <p>• Remove PCIe slot covers from case (usually top 2-3 slots)</p>
                  <p>• Push down the PCIe slot retention clip on motherboard</p>
                  <p>• Align GPU with top PCIe x16 slot (the one closest to CPU)</p>
                  <p>• Firmly press GPU into slot until it clicks and retention clip locks</p>
                  <p>• Secure GPU bracket to case with screws</p>
                  <p>• Connect PCIe power cables from PSU to GPU (may need 1-3 cables)</p>

                  <div className="bg-red-600/10 border border-red-500/30 rounded p-3 mt-4">
                    <p className="text-xs text-red-300">
                      <strong>Critical:</strong> GPU MUST be in top PCIe x16 slot for full performance. Using lower slots can reduce performance by 50%+ even if they look the same.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-l-4 border-l-pink-500 border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    8
                  </div>
                  <h3 className="text-2xl font-bold text-white">Connect All Cables</h3>
                </div>

                <div className="space-y-4 text-zinc-300 text-sm">
                  <div>
                    <p className="font-semibold text-white mb-2">Power Cables (from PSU to motherboard):</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 24-pin main power (largest connector, right side of motherboard)</li>
                      <li>• 8-pin (or 4+4 pin) CPU power (top-left corner near CPU)</li>
                      <li>• PCIe power to GPU (6+2 pin cables, may need multiple)</li>
                      <li>• SATA power if you have additional drives</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-2">Front Panel Cables (small connectors from case):</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Power button, reset button, power LED, HDD LED</li>
                      <li>• Check motherboard manual for exact pin layout (bottom-right usually)</li>
                      <li>• USB 3.0 header (large blue/black connector)</li>
                      <li>• USB 2.0 header (smaller connector)</li>
                      <li>• Audio header (HD AUDIO label)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-2">Fan Cables:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• CPU cooler to CPU_FAN header</li>
                      <li>• Case fans to CHA_FAN / SYS_FAN headers</li>
                      <li>• Use fan splitters if you run out of headers</li>
                    </ul>
                  </div>

                  <div className="bg-blue-600/10 border border-blue-500/30 rounded p-3 mt-4">
                    <p className="text-xs text-blue-300">
                      <strong>Cable Management Tip:</strong> Route cables behind motherboard tray when possible. Use velcro straps included with case. Good cable management improves airflow and aesthetics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="bios" className="scroll-mt-32 mt-12">
            <h2 className="text-3xl font-bold text-white mb-6">BIOS Setup & First Boot</h2>

            <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">The Moment of Truth</h3>
              <p className="text-zinc-300 text-sm">
                Before powering on, do a final visual check: all power cables connected, RAM fully seated, GPU locked in, CPU cooler mounted, PSU switch OFF.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">First Boot Process</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold min-w-6">1.</span>
                    <p>Plug in power cable to PSU and wall outlet</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold min-w-6">2.</span>
                    <p>Connect monitor to GPU (NOT motherboard), keyboard, and mouse</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold min-w-6">3.</span>
                    <p>Flip PSU power switch to ON (I position)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold min-w-6">4.</span>
                    <p>Press the power button on your case</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold min-w-6">5.</span>
                    <p>Immediately tap Delete or F2 key repeatedly to enter BIOS</p>
                  </div>
                </div>

                <div className="bg-green-600/10 border border-green-500/30 rounded p-4 mt-4">
                  <p className="text-sm text-green-300 mb-2">
                    <strong>Success Signs:</strong>
                  </p>
                  <ul className="text-xs text-zinc-300 space-y-1">
                    <li>• Fans spin up (CPU cooler, GPU, case fans)</li>
                    <li>• Motherboard lights up (RGB if equipped)</li>
                    <li>• Monitor displays motherboard logo or BIOS screen</li>
                    <li>• No continuous beeping (single beep is often normal)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Essential BIOS Settings</h3>
                <div className="space-y-4 text-sm text-zinc-300">
                  <div>
                    <h4 className="font-semibold text-white mb-2">1. Enable XMP/EXPO (RAM Overclock)</h4>
                    <p className="text-zinc-400 mb-1">Location: AI Tweaker / Overclocking menu</p>
                    <p>Your RAM runs at slow default speeds without this. Enable XMP (Intel) or EXPO (AMD) to get advertised speeds.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">2. Set Boot Order</h4>
                    <p className="text-zinc-400 mb-1">Location: Boot menu</p>
                    <p>Set your USB drive (with Windows installer) as first boot device. Change to SSD after Windows install.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">3. Enable Resizable BAR (if available)</h4>
                    <p className="text-zinc-400 mb-1">Location: Advanced / PCI settings</p>
                    <p>Provides 5-15% gaming performance boost on modern GPUs. Enable if your system supports it.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">4. Verify CPU Temperature</h4>
                    <p className="text-zinc-400 mb-1">Location: H/W Monitor / System Info</p>
                    <p>Should be 30-45°C at idle. If 60°C+ immediately at startup, reseat your CPU cooler.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">5. Save & Exit</h4>
                    <p>Press F10 to save changes and reboot into Windows installer.</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Windows Installation (Brief)</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <p>• Boot from USB drive with Windows installer</p>
                  <p>• Select "Custom: Install Windows only"</p>
                  <p>• Select your SSD and click Next (Windows handles formatting)</p>
                  <p>• Wait 10-20 minutes for installation</p>
                  <p>• Follow setup wizard (skip Microsoft account if desired)</p>
                  <p>• Install motherboard drivers from manufacturer website</p>
                  <p>• Install GPU drivers (GeForce Experience or AMD Software)</p>
                </div>
              </div>
            </div>
          </div>

          <div id="troubleshooting" className="scroll-mt-32 mt-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              Troubleshooting Common Issues
            </h2>

            <div className="space-y-4">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">PC Won't Turn On (No Fans, No Lights)</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <p><strong>Check:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• PSU power switch is ON</li>
                    <li>• Power cable firmly connected to PSU and wall</li>
                    <li>• 24-pin and 8-pin CPU power cables fully seated</li>
                    <li>• Power button cable connected to motherboard correctly</li>
                    <li>• Try shorting power pins with screwdriver to test button</li>
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Fans Spin But No Display</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <p><strong>Check:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Monitor cable connected to GPU (not motherboard)</li>
                    <li>• GPU fully seated and locked into PCIe slot</li>
                    <li>• GPU power cables connected (6/8-pin)</li>
                    <li>• RAM fully seated (try reseating, try one stick only)</li>
                    <li>• Monitor input set to correct source (HDMI/DP)</li>
                    <li>• Try different monitor cable or monitor</li>
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">High CPU Temperatures (60°C+ Idle)</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <p><strong>Check:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• CPU cooler fan is spinning</li>
                    <li>• CPU cooler mounting is tight (not loose)</li>
                    <li>• Thermal paste was applied (or pre-applied pad used)</li>
                    <li>• Plastic film removed from cooler base</li>
                    <li>• CPU cooler fan cable connected to CPU_FAN header</li>
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Computer Restarts During Gaming</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <p><strong>Check:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• PSU wattage sufficient for GPU/CPU combo</li>
                    <li>• All PCIe power cables connected to GPU</li>
                    <li>• Temperatures under load (use HWiNFO64)</li>
                    <li>• RAM running at correct speed (XMP may need adjustment)</li>
                    <li>• PSU cables fully seated on both ends</li>
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">RAM Not Running at Full Speed</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <p><strong>Solution:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Enter BIOS and enable XMP (Intel) or EXPO (AMD)</li>
                    <li>• Verify in Windows: Task Manager → Performance → Memory</li>
                    <li>• If system won't boot with XMP, RAM may need manual tuning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-5 mt-6">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Still Having Issues?</h3>
              <p className="text-sm text-zinc-300">
                Try breadboarding: Build outside the case with just CPU, one RAM stick, GPU, and PSU. This eliminates case shorting issues and makes testing easier. Check motherboard manual for diagnostic LED meanings.
              </p>
            </div>
          </div>

          <div id="optimization" className="scroll-mt-32 mt-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-400" />
              Post-Build Optimization
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Essential Software</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <p>• <strong>GPU Drivers:</strong> GeForce Experience or AMD Adrenalin</p>
                  <p>• <strong>Monitoring:</strong> HWiNFO64 or MSI Afterburner</p>
                  <p>• <strong>Benchmarking:</strong> 3DMark or Cinebench R23</p>
                  <p>• <strong>Stress Testing:</strong> Prime95 (CPU) + FurMark (GPU)</p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Performance Checks</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <p>• Run stress tests for 30 minutes each</p>
                  <p>• CPU should stay under 85°C under load</p>
                  <p>• GPU should stay under 80°C under load</p>
                  <p>• Verify RAM speed in Task Manager</p>
                  <p>• Check storage speeds with CrystalDiskMark</p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Windows Optimization</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <p>• Enable Game Mode in Windows Settings</p>
                  <p>• Disable startup programs you don't need</p>
                  <p>• Enable XMP/EXPO if not done in BIOS</p>
                  <p>• Update Windows and all drivers</p>
                  <p>• Consider disabling Windows Defender during gaming</p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Future Upgrades</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <p>• More storage (additional M.2 or SATA SSD)</p>
                  <p>• Better CPU cooler for overclocking</p>
                  <p>• More/faster RAM (up to 64GB)</p>
                  <p>• Better GPU when needed (easiest upgrade)</p>
                  <p>• Additional case fans for airflow</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🎉 Congratulations, You Built a PC!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              You've just accomplished something that many people think is incredibly difficult. The truth is, building a PC is a rewarding experience that gives you complete control over your computing experience. You now understand every component in your system and can troubleshoot issues or upgrade parts with confidence.
            </p>
            <p className="text-zinc-300 mb-4">
              Take pride in your build, share it with the community, and enjoy gaming on a machine you built with your own hands. Welcome to the PC building community!
            </p>
            <div className="bg-emerald-600/10 border border-emerald-500/30 rounded-lg p-4">
              <p className="text-sm text-emerald-300">
                <strong>Next Steps:</strong> Join communities like r/buildapc, overclock.net, or LinusTechTips forums to learn more, share your build, and help other beginners just like people helped you.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-16 p-8 bg-gradient-to-br from-emerald-600/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold">
              DS
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">Darshan Solanki</h3>
              <p className="text-zinc-400">PC Building Educator & Hardware Enthusiast</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Darshan has helped over 500 first-time builders successfully complete their dream PCs. Her passion for making technology accessible has made her a go-to resource for beginners looking to enter the world of PC building with confidence.
          </p>
        </div>

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
      </div>
    </main>
  )
}
