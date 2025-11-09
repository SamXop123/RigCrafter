'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, TrendingUp, Wrench, Package, Shield, Thermometer, Trophy, Eye, Gamepad2 } from "lucide-react"

export default function HighEndGamingRig() {
  const tags = ["High-End PC", "4K Gaming", "VR Ready", "Ultimate Build", "Premium Hardware"]

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

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-red-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full border border-red-500/30">
                Ultimate Performance
              </span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-500/30">
                $2000+ Build
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              High-End Gaming Rig: The Ultimate 4K & VR Beast
            </h1>

            <p className="text-xl text-zinc-300 max-w-2xl">
              Build the ultimate gaming machine capable of maxed-out 4K gaming, VR experiences, and future-proof performance
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
            25 min read
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="w-4 h-4" />
            Advanced Level
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/10 hover:border-red-500/50 transition-colors"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: Gamepad2, label: "Performance", value: "4K 144Hz", color: "red" },
            { icon: Eye, label: "VR Ready", value: "Ultra", color: "pink" },
            { icon: Zap, label: "Power Draw", value: "850W+", color: "orange" },
            { icon: Trophy, label: "Tier", value: "Flagship", color: "yellow" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-zinc-900 border border-white/10 rounded-lg p-4 hover:border-red-500/50 transition-all duration-300">
              <stat.icon className={`w-8 h-8 mb-2 text-${stat.color}-400`} />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Package className="w-5 h-5" />
            Quick Navigation
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { text: "Why Go High-End?", href: "#why" },
              { text: "Complete Parts List", href: "#parts" },
              { text: "Component Deep Dive", href: "#components" },
              { text: "Cooling & Thermals", href: "#cooling" },
              { text: "Assembly & Cable Management", href: "#assembly" },
              { text: "BIOS Tuning & Optimization", href: "#optimization" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-2 text-zinc-300 hover:text-red-400 transition-all duration-300 p-2 rounded hover:bg-white/5"
              >
                <CheckCircle className="w-4 h-4 text-red-500" />
                {item.text}
              </a>
            ))}
          </div>
        </div>

        <article className="space-y-8">

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Welcome to the pinnacle of PC gaming. This isn't just another gaming PC—this is a no-compromises, flagship-tier machine designed to dominate 4K gaming at maximum settings, handle demanding VR experiences without breaking a sweat, and remain relevant for years to come.
            </p>

            <p className="text-zinc-300">
              With a budget starting at $2000 and typically ranging to $3500+, you're entering territory where every component is carefully selected for maximum performance, premium build quality, and exceptional aesthetics. This guide will walk you through building a system that competes with pre-built machines costing $1000 more.
            </p>
          </div>

          <div id="why" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-red-400" />
              Why Build a High-End Gaming Rig?
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-red-600/10 to-pink-600/10 border border-red-500/30 rounded-xl p-6">
                <Monitor className="w-10 h-10 text-red-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">4K Ultra Gaming</h3>
                <p className="text-sm text-zinc-400">
                  Play the latest AAA titles at 4K resolution with ultra settings and maintain 60-144 FPS. Experience games as developers intended.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-600/10 to-orange-600/10 border border-pink-500/30 rounded-xl p-6">
                <Eye className="w-10 h-10 text-pink-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">VR Excellence</h3>
                <p className="text-sm text-zinc-400">
                  Drive demanding VR headsets like the Meta Quest 3, Valve Index, or Pimax Crystal at maximum settings without reprojection.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-600/10 to-yellow-600/10 border border-orange-500/30 rounded-xl p-6">
                <TrendingUp className="w-10 h-10 text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Future-Proof Investment</h3>
                <p className="text-sm text-zinc-400">
                  High-end components remain relevant longer. This build will handle games for 4-6 years before needing GPU upgrade.
                </p>
              </div>
            </div>

            <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Performance Expectations
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-300">
                <div>
                  <p className="font-semibold text-white mb-2">4K Gaming (3840×2160):</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Cyberpunk 2077: 80-100 FPS (Ultra + RT)</li>
                    <li>• Microsoft Flight Simulator: 60-75 FPS (Ultra)</li>
                    <li>• Call of Duty: 140-165 FPS (Max)</li>
                    <li>• Baldur's Gate 3: 90-120 FPS (Ultra)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">VR Gaming:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Half-Life: Alyx: Max settings, 120Hz</li>
                    <li>• Microsoft Flight Sim VR: High, 90Hz</li>
                    <li>• Beat Saber: Max, 144Hz+</li>
                    <li>• iRacing: Max, 120Hz</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="parts" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Package className="w-8 h-8 text-pink-400" />
              Complete High-End Parts List
            </h2>

            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">The $2500 Ultimate Build</h3>
                <span className="text-3xl font-bold text-red-400">$2,595</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                  <div>
                    <p className="font-semibold text-white">AMD Ryzen 7 7800X3D</p>
                    <p className="text-xs text-zinc-400">8C/16T, 5.0GHz Boost, 96MB Cache - Gaming King</p>
                  </div>
                  <span className="text-lg font-bold text-white">$370</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                  <div>
                    <p className="font-semibold text-white">NVIDIA GeForce RTX 4080 Super 16GB</p>
                    <p className="text-xs text-zinc-400">10,240 CUDA Cores, DLSS 3.5, Ray Tracing</p>
                  </div>
                  <span className="text-lg font-bold text-white">$999</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                  <div>
                    <p className="font-semibold text-white">ASUS ROG Strix X670E-E Gaming WiFi</p>
                    <p className="text-xs text-zinc-400">PCIe 5.0, DDR5-7200+, 2.5Gb LAN, WiFi 6E</p>
                  </div>
                  <span className="text-lg font-bold text-white">$380</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                  <div>
                    <p className="font-semibold text-white">G.Skill Trident Z5 RGB 32GB DDR5-6400</p>
                    <p className="text-xs text-zinc-400">2x16GB, CL32, AMD EXPO Certified</p>
                  </div>
                  <span className="text-lg font-bold text-white">$135</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                  <div>
                    <p className="font-semibold text-white">Samsung 990 Pro 2TB NVMe Gen4</p>
                    <p className="text-xs text-zinc-400">7,450 MB/s Read, DirectStorage Ready</p>
                  </div>
                  <span className="text-lg font-bold text-white">$150</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                  <div>
                    <p className="font-semibold text-white">Noctua NH-D15 chromax.black</p>
                    <p className="text-xs text-zinc-400">Dual 140mm, 1500 RPM, Ultra Quiet</p>
                  </div>
                  <span className="text-lg font-bold text-white">$120</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                  <div>
                    <p className="font-semibold text-white">Corsair RM1000e 1000W 80+ Gold</p>
                    <p className="text-xs text-zinc-400">Fully Modular, ATX 3.0, PCIe 5.0 Ready</p>
                  </div>
                  <span className="text-lg font-bold text-white">$180</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                  <div>
                    <p className="font-semibold text-white">Fractal Design Torrent Compact</p>
                    <p className="text-xs text-zinc-400">Black TG, 2×180mm Fans, E-ATX Support</p>
                  </div>
                  <span className="text-lg font-bold text-white">$185</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                  <div>
                    <p className="font-semibold text-white">Lian Li UNI Fan AL120 (3-Pack)</p>
                    <p className="text-xs text-zinc-400">ARGB, Daisy-Chain, PWM Control</p>
                  </div>
                  <span className="text-lg font-bold text-white">$76</span>
                </div>

                <div className="border-t border-white/20 pt-4 mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Total Build Cost</p>
                    <p className="text-xs text-zinc-500">Prices as of November 2025</p>
                  </div>
                  <span className="text-4xl font-bold text-red-400">$2,595</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-orange-500/30 rounded-xl p-5">
                <h4 className="text-lg font-semibold text-orange-300 mb-3">Premium Upgrade Path (+$900)</h4>
                <div className="space-y-2 text-sm text-zinc-300">
                  <div className="flex justify-between">
                    <span>RTX 4090 24GB (instead of 4080 S)</span>
                    <span className="text-orange-400">+$600</span>
                  </div>
                  <div className="flex justify-between">
                    <span>64GB DDR5-6400 (instead of 32GB)</span>
                    <span className="text-orange-400">+$140</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Arctic Liquid Freezer III 360 AIO</span>
                    <span className="text-orange-400">+$120</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samsung 990 Pro 4TB (instead of 2TB)</span>
                    <span className="text-orange-400">+$190</span>
                  </div>
                  <div className="border-t border-orange-500/30 pt-2 mt-2 flex justify-between font-bold">
                    <span>Upgraded Total:</span>
                    <span className="text-orange-400">$3,495</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-xl p-5">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Budget-Conscious Path (-$500)</h4>
                <div className="space-y-2 text-sm text-zinc-300">
                  <div className="flex justify-between">
                    <span>RTX 4070 Ti Super (instead of 4080 S)</span>
                    <span className="text-blue-400">-$200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B650E motherboard (instead of X670E)</span>
                    <span className="text-blue-400">-$180</span>
                  </div>
                  <div className="flex justify-between">
                    <span>850W PSU (instead of 1000W)</span>
                    <span className="text-blue-400">-$40</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lian Li Lancool 216 case</span>
                    <span className="text-blue-400">-$75</span>
                  </div>
                  <div className="border-t border-blue-500/30 pt-2 mt-2 flex justify-between font-bold">
                    <span>Adjusted Total:</span>
                    <span className="text-blue-400">$2,100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="components" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6">Component Deep Dive</h2>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-7 h-7 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">CPU: AMD Ryzen 7 7800X3D</h3>
                    <p className="text-zinc-300 mb-4">
                      The undisputed gaming champion. The 7800X3D's massive 96MB 3D V-Cache delivers unmatched gaming performance, often outperforming even Intel's flagship i9-14900K in gaming scenarios while using less power.
                    </p>

                    <div className="bg-black/40 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-red-400 mb-2">Why This CPU?</p>
                      <div className="space-y-2 text-sm text-zinc-300">
                        <p>• <strong>Gaming Performance:</strong> 10-30% faster than non-X3D CPUs in CPU-bound games</p>
                        <p>• <strong>Efficiency:</strong> 120W TDP vs 253W for Intel i9-14900K</p>
                        <p>• <strong>Cooler Compatibility:</strong> Runs cooler, works great with air cooling</p>
                        <p>• <strong>Future-Proof:</strong> AM5 socket supported through 2027+</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-red-600/10 border border-red-500/30 rounded p-3">
                        <p className="text-xs font-bold text-red-300 mb-1">Performance</p>
                        <p className="text-2xl font-bold text-white">38,000</p>
                        <p className="text-xs text-zinc-400">Cinebench R23 Multi</p>
                      </div>
                      <div className="bg-red-600/10 border border-red-500/30 rounded p-3">
                        <p className="text-xs font-bold text-red-300 mb-1">Gaming FPS (1080p)</p>
                        <p className="text-2xl font-bold text-white">240+</p>
                        <p className="text-xs text-zinc-400">CS2, Valorant, Fortnite</p>
                      </div>
                    </div>

                    <div className="bg-blue-600/10 border border-blue-500/30 rounded p-3 mt-4">
                      <p className="text-xs text-blue-300">
                        <strong>Alternative:</strong> Intel Core i7-14700K ($400) offers better productivity performance but runs hotter. Requires better cooling. Great for mixed gaming/streaming workloads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-7 h-7 text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">GPU: NVIDIA RTX 4080 Super 16GB</h3>
                    <p className="text-zinc-300 mb-4">
                      The sweet spot for 4K gaming. The 4080 Super delivers 90%+ of RTX 4090 performance for $600 less, making it the best value in the high-end segment. DLSS 3.5 with Frame Generation pushes performance even higher.
                    </p>

                    <div className="bg-black/40 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-pink-400 mb-2">Real-World 4K Performance:</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm text-zinc-300">
                        <div>
                          <p className="font-semibold text-white mb-1">Native (No DLSS)</p>
                          <ul className="space-y-1">
                            <li>• Cyberpunk 2077: 65 FPS (Ultra RT)</li>
                            <li>• Red Dead 2: 75 FPS (Ultra)</li>
                            <li>• Starfield: 80 FPS (Ultra)</li>
                            <li>• Hogwarts Legacy: 70 FPS (Ultra RT)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-white mb-1">With DLSS Quality</p>
                          <ul className="space-y-1">
                            <li>• Cyberpunk 2077: 95 FPS (Ultra RT)</li>
                            <li>• Alan Wake 2: 100 FPS (Ultra RT)</li>
                            <li>• Portal RTX: 80 FPS (Max RT)</li>
                            <li>• Spider-Man: 115 FPS (Max RT)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-pink-600/10 border border-pink-500/30 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-pink-300 mb-2">VR Performance:</p>
                      <p className="text-sm text-zinc-300">
                        Handles Meta Quest 3, Valve Index, and even demanding sims like DCS World at high settings. Powers 120Hz VR experiences smoothly with headroom for supersampling.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-black/40 rounded p-3">
                        <p className="text-xs text-zinc-400 mb-1">VRAM</p>
                        <p className="text-xl font-bold text-white">16GB</p>
                      </div>
                      <div className="bg-black/40 rounded p-3">
                        <p className="text-xs text-zinc-400 mb-1">TDP</p>
                        <p className="text-xl font-bold text-white">320W</p>
                      </div>
                      <div className="bg-black/40 rounded p-3">
                        <p className="text-xs text-zinc-400 mb-1">CUDA Cores</p>
                        <p className="text-xl font-bold text-white">10,240</p>
                      </div>
                    </div>

                    <div className="bg-orange-600/10 border border-orange-500/30 rounded p-3 mt-4">
                      <p className="text-xs text-orange-300">
                        <strong>Upgrade Path:</strong> RTX 4090 (+$600) for absolute maximum 4K performance and 8K gaming capability. Worth it if using 4K 240Hz monitor or extreme VR setups.
                      </p>
                    </div>

                    <div className="bg-blue-600/10 border border-blue-500/30 rounded p-3 mt-3">
                      <p className="text-xs text-blue-300">
                        <strong>AMD Alternative:</strong> RX 7900 XTX ($900) offers similar raster performance with 24GB VRAM but weaker ray tracing and no DLSS. Better for raw compute/productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Motherboard: ASUS ROG Strix X670E-E</h3>
                    <p className="text-zinc-300 mb-4">
                      Premium X670E board with every feature you need: PCIe 5.0 for future GPUs/SSDs, DDR5-7200+ support, robust 18+2 power delivery for stable overclocks, WiFi 6E, and stunning RGB integration.
                    </p>

                    <div className="bg-black/40 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-orange-400 mb-2">Key Features:</p>
                      <div className="space-y-2 text-sm text-zinc-300">
                        <p>• <strong>Power Delivery:</strong> 18+2 stage VRM with oversized heatsinks (perfect for 7800X3D + future CPUs)</p>
                        <p>• <strong>PCIe 5.0:</strong> x16 slot for future GPUs, x4 M.2 slot for Gen5 SSDs (14 GB/s)</p>
                        <p>• <strong>Connectivity:</strong> 2.5Gb LAN, WiFi 6E, USB 4.0, Thunderbolt 4 header</p>
                        <p>• <strong>Storage:</strong> 4× M.2 slots (2× Gen5, 2× Gen4), 6× SATA</p>
                        <p>• <strong>Audio:</strong> SupremeFX ALC4080 codec, ESS DAC</p>
                      </div>
                    </div>

                    <div className="bg-yellow-600/10 border border-yellow-500/30 rounded p-3">
                      <p className="text-xs text-yellow-300">
                        <strong>Budget Option:</strong> MSI B650 Tomahawk WiFi ($200) offers 90% of features for $180 less. Loses PCIe 5.0 and some USB ports but perfect for this build.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">RAM: 32GB DDR5-6400 CL32</h3>
                    <p className="text-zinc-300 mb-4">
                      DDR5-6400 is the sweet spot for Ryzen 7000 series. Faster than this shows diminishing returns. 32GB handles all gaming, streaming, and multitasking scenarios comfortably.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-black/40 rounded-lg p-4">
                        <p className="text-sm font-semibold text-green-400 mb-2">Why DDR5-6400?</p>
                        <p className="text-sm text-zinc-300">
                          AMD Infinity Fabric runs at 2133MHz (1:1 with DDR5-6400). Going higher often requires manual tuning and offers minimal gaming gains.
                        </p>
                      </div>
                      <div className="bg-black/40 rounded-lg p-4">
                        <p className="text-sm font-semibold text-green-400 mb-2">32GB vs 64GB?</p>
                        <p className="text-sm text-zinc-300">
                          32GB sufficient for gaming + streaming. Get 64GB only if doing heavy 3D rendering, video editing, or running multiple VMs.
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-600/10 border border-green-500/30 rounded p-3 mt-4">
                      <p className="text-xs text-green-300">
                        <strong>Pro Tip:</strong> Enable AMD EXPO in BIOS (equivalent to Intel XMP). Verify speed in Windows Task Manager → Performance → Memory. Should show 6400 MHz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HardDrive className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Storage: Samsung 990 Pro 2TB</h3>
                    <p className="text-zinc-300 mb-4">
                      Flagship Gen4 drive with blistering 7,450 MB/s reads. DirectStorage ready for future games. 2TB provides ample space for Windows + 20-30 large games (AAA titles are 80-150GB each).
                    </p>

                    <div className="bg-black/40 rounded-lg p-4 mb-4">
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-zinc-400 mb-1">Sequential Read</p>
                          <p className="text-xl font-bold text-white">7,450 MB/s</p>
                        </div>
                        <div>
                          <p className="text-zinc-400 mb-1">Sequential Write</p>
                          <p className="text-xl font-bold text-white">6,900 MB/s</p>
                        </div>
                        <div>
                          <p className="text-zinc-400 mb-1">Random IOPS</p>
                          <p className="text-xl font-bold text-white">1.4M</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cyan-600/10 border border-cyan-500/30 rounded p-3">
                      <p className="text-xs text-cyan-300">
                        <strong>Storage Expansion:</strong> Add second 2-4TB SSD for game library overflow or 4-8TB HDD ($120-180) for media/backups. Motherboard has 4 M.2 slots total.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="cooling" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Thermometer className="w-8 h-8 text-cyan-400" />
              Cooling & Thermal Management
            </h2>

            <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Why Premium Cooling Matters</h3>
              <p className="text-sm text-zinc-300">
                High-end components generate serious heat. The RTX 4080 Super alone outputs up to 320W of heat—equivalent to three incandescent bulbs. Proper cooling ensures sustained performance, quieter operation, and component longevity.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">CPU Cooler: Noctua NH-D15 chromax.black</h3>
                <p className="text-zinc-300 mb-4">
                  The NH-D15 is legendary for a reason: near-AIO performance with zero maintenance, ultimate reliability, and whisper-quiet operation. The 7800X3D runs cool (120W TDP), making this air cooler perfect.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-black/40 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">Thermal Performance</h4>
                    <div className="space-y-2 text-sm text-zinc-300">
                      <div className="flex justify-between">
                        <span>Idle Temperature:</span>
                        <span className="text-white font-semibold">32-38°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gaming Load:</span>
                        <span className="text-white font-semibold">60-68°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span>All-Core Load:</span>
                        <span className="text-white font-semibold">72-78°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Noise Level:</span>
                        <span className="text-white font-semibold">24 dB(A)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">Why Air Over AIO?</h4>
                    <ul className="space-y-1 text-sm text-zinc-300">
                      <li>• No pump failure risk (AIOs last 3-5 years)</li>
                      <li>• Zero maintenance required</li>
                      <li>• Quieter operation (no pump noise)</li>
                      <li>• Better value (NH-D15 = $120 vs $180+ AIO)</li>
                      <li>• 6-year warranty vs 2-3 for AIOs</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-600/10 border border-blue-500/30 rounded p-3">
                  <p className="text-xs text-blue-300">
                    <strong>AIO Alternative:</strong> Arctic Liquid Freezer III 360 ($130) or NZXT Kraken Elite 360 RGB ($280) if you prefer AIO aesthetics or have specific case requirements.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Case Cooling: Fractal Design Torrent Compact</h3>
                <p className="text-zinc-300 mb-4">
                  The Torrent redefines case airflow with massive 180mm front fans that move huge volumes of air quietly. This case keeps even high-end components cool while remaining surprisingly quiet.
                </p>

                <div className="bg-black/40 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-cyan-400 mb-3">Optimized Fan Configuration</h4>
                  <div className="space-y-3 text-sm text-zinc-300">
                    <div>
                      <p className="font-semibold text-white mb-1">Stock Setup (Excellent):</p>
                      <p>• 2× 180mm front intake (included)</p>
                      <p>• 1× 140mm rear exhaust (add Noctua NF-A14)</p>
                      <p>• Creates strong positive pressure, excellent temps</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Optimal Setup (Recommended):</p>
                      <p>• 2× 180mm front intake (stock)</p>
                      <p>• 3× 120mm top exhaust (Lian Li UNI Fan AL120)</p>
                      <p>• 1× 120mm rear exhaust (Lian Li UNI Fan AL120)</p>
                      <p>• Maximizes GPU heat extraction, adds premium RGB</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-cyan-600/10 border border-cyan-500/30 rounded p-3">
                    <p className="text-xs font-bold text-cyan-300 mb-1">Expected Temps (4080 Super)</p>
                    <p className="text-sm text-zinc-300">Gaming: 68-73°C</p>
                    <p className="text-sm text-zinc-300">Stress Test: 75-78°C</p>
                  </div>
                  <div className="bg-cyan-600/10 border border-cyan-500/30 rounded p-3">
                    <p className="text-xs font-bold text-cyan-300 mb-1">Noise Levels</p>
                    <p className="text-sm text-zinc-300">Idle: 28-32 dB(A)</p>
                    <p className="text-sm text-zinc-300">Gaming: 34-38 dB(A)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-500/30 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-yellow-300 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Thermal Best Practices
                </h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <p>• <strong>Fan Curves:</strong> Set custom curves in BIOS. Target 60% fan speed at 70°C, 100% at 85°C</p>
                  <p>• <strong>Dust Management:</strong> Clean mesh filters monthly. Use positive pressure (more intake than exhaust)</p>
                  <p>• <strong>Cable Management:</strong> Route cables behind motherboard tray to improve airflow</p>
                  <p>• <strong>Monitoring:</strong> Use HWiNFO64 to track temps. Junction temps under 100°C are safe for GPU</p>
                  <p>• <strong>Room Temperature:</strong> Every 1°C ambient increase = ~1°C component temp increase</p>
                </div>
              </div>
            </div>
          </div>

          <div id="assembly" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-orange-400" />
              Assembly & Cable Management
            </h2>

            <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 border border-orange-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-orange-300 mb-3">High-End Build Considerations</h3>
              <p className="text-sm text-zinc-300">
                Premium components require extra care. The RTX 4080 Super weighs 2.5+ lbs and needs GPU support bracket. Quality cable management isn't just aesthetic—it improves airflow by 5-8°C and makes troubleshooting easier.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Assembly Order (Follow Precisely)</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Install CPU & RAM Outside Case</h4>
                      <p className="text-sm text-zinc-300">
                        Place motherboard on box. Install 7800X3D (align triangle, zero force). Install RAM in slots A2/B2 (2nd and 4th slots). Snap firmly until clips lock.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Install M.2 SSD & CPU Cooler</h4>
                      <p className="text-sm text-zinc-300 mb-2">
                        Install 990 Pro in top M.2 slot (PCIe 5.0). Apply thermal paste (pea-sized dot). Install NH-D15—this takes 10-15 minutes, follow Noctua instructions carefully.
                      </p>
                      <div className="bg-red-600/10 border border-red-500/30 rounded p-2 text-xs text-red-300">
                        <strong>Critical:</strong> NH-D15 is HUGE (165mm tall). Install before motherboard goes in case. Check RAM clearance—offset front fan if needed.
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Prepare Case</h4>
                      <p className="text-sm text-zinc-300">
                        Install additional fans (Lian Li UNI Fan AL120 3-pack in top + rear). Connect fan controller. Install I/O shield. Install motherboard standoffs (may be pre-installed).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Install Motherboard + PSU</h4>
                      <p className="text-sm text-zinc-300">
                        Carefully lower motherboard into case (NH-D15 makes this tight). Screw in all 9 screws. Install PSU in bottom chamber, fan facing down.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Install GPU with Support</h4>
                      <p className="text-sm text-zinc-300 mb-2">
                        Remove 3 PCIe slot covers. Install RTX 4080 Super in top PCIe x16 slot. Lock retention clip. Screw bracket to case. Install GPU support bracket (Torrent includes one) or anti-sag bracket.
                      </p>
                      <div className="bg-yellow-600/10 border border-yellow-500/30 rounded p-2 text-xs text-yellow-300">
                        <strong>Important:</strong> 4080 Super sags without support due to weight. Support bracket prevents PCIe slot damage over time.
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      6
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Cable Management Phase</h4>
                      <p className="text-sm text-zinc-300 mb-3">
                        This separates premium builds from average ones. Take your time here—it's worth it.
                      </p>
                      <div className="bg-black/40 rounded p-3 space-y-2 text-xs text-zinc-300">
                        <p><strong>Power Cables (route behind motherboard tray):</strong></p>
                        <p>• 24-pin ATX (right side, bring through grommet near I/O)</p>
                        <p>• 8-pin CPU (top left, route behind motherboard)</p>
                        <p>• 3× 8-pin PCIe for GPU (bottom right, straight line to GPU)</p>
                        <p>• SATA power if needed</p>

                        <p className="pt-2"><strong>Front Panel & Fans:</strong></p>
                        <p>• USB 3.0 header, USB-C header, audio header</p>
                        <p>• Power/reset/LED connectors (check manual diagram)</p>
                        <p>• CPU_FAN, CHA_FAN headers for all fans</p>
                        <p>• RGB controller cables (Lian Li has single cable daisy-chain)</p>

                        <p className="pt-2"><strong>Pro Tips:</strong></p>
                        <p>• Use included velcro straps every 4-6 inches</p>
                        <p>• Leave 1-2 inches of slack for cable movement</p>
                        <p>• Group cables by destination (all GPU cables together)</p>
                        <p>• Tuck excess cable length in PSU basement or cable channels</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Premium Cable Management Tips</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded p-4">
                    <h4 className="font-semibold text-orange-400 mb-2">Upgrade: Custom Cables</h4>
                    <p className="text-sm text-zinc-300 mb-2">
                      CableMod or AsiaHorse custom cables ($80-150) transform aesthetics. Color-matched, perfect length, no cable combs needed.
                    </p>
                    <p className="text-xs text-zinc-400">
                      Wait until build is complete and working before investing in custom cables.
                    </p>
                  </div>
                  <div className="bg-black/40 rounded p-4">
                    <h4 className="font-semibold text-orange-400 mb-2">Testing Before Closing</h4>
                    <p className="text-sm text-zinc-300 mb-2">
                      Boot system with side panel off. Run stress tests for 30 minutes. Verify all fans spinning, temps good.
                    </p>
                    <p className="text-xs text-zinc-400">
                      Much easier to fix issues with panel off than after cable management is finalized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="optimization" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-400" />
              BIOS Tuning & System Optimization
            </h2>

            <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-300 mb-3">Extracting Maximum Performance</h3>
              <p className="text-sm text-zinc-300">
                Out of box, your system runs at stock settings. These optimizations unlock 10-20% additional performance through BIOS tuning, driver optimization, and system configuration—all without risky overclocking.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Essential BIOS Settings</h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-black/40 rounded-lg p-4 border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-green-400 mb-2">1. Enable AMD EXPO (RAM Overclock)</h4>
                    <p className="text-zinc-300 mb-2">
                      <strong>Location:</strong> AI Tweaker → Memory Settings → AMD EXPO
                    </p>
                    <p className="text-zinc-300 mb-2">Enable EXPO Profile 1. This activates DDR5-6400 speeds. Verify in Windows.</p>
                    <div className="bg-green-600/10 border border-green-500/30 rounded p-2 text-xs text-green-300 mt-2">
                      <strong>Performance Gain:</strong> 10-15% in CPU-bound scenarios, 5-8% average FPS increase
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-lg p-4 border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-blue-400 mb-2">2. Enable Resizable BAR (ReBAR)</h4>
                    <p className="text-zinc-300 mb-2">
                      <strong>Location:</strong> Advanced → PCI Subsystem Settings
                    </p>
                    <p className="text-zinc-300 mb-2">
                      Enable "Above 4G Decoding" and "Re-Size BAR Support". Allows CPU to access entire GPU VRAM.
                    </p>
                    <div className="bg-blue-600/10 border border-blue-500/30 rounded p-2 text-xs text-blue-300 mt-2">
                      <strong>Performance Gain:</strong> 5-12% in modern games (Cyberpunk, Forza, Spider-Man)
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-lg p-4 border-l-4 border-l-cyan-500">
                    <h4 className="font-semibold text-cyan-400 mb-2">3. Set PCIe Link Speed to Gen4</h4>
                    <p className="text-zinc-300 mb-2">
                      <strong>Location:</strong> Advanced → PCIe Configuration
                    </p>
                    <p className="text-zinc-300 mb-2">
                      Force PCIe Gen4 for GPU slot. Gen3 can cause bottleneck with 4080 Super in some scenarios.
                    </p>
                  </div>

                  <div className="bg-black/40 rounded-lg p-4 border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-orange-400 mb-2">4. Custom Fan Curves</h4>
                    <p className="text-zinc-300 mb-2">
                      <strong>Location:</strong> Q-Fan Configuration
                    </p>
                    <div className="bg-black/30 rounded p-3 mt-2 space-y-1 text-xs text-zinc-300">
                      <p><strong>CPU Fan (NH-D15):</strong></p>
                      <p>• 40°C: 30% | 60°C: 50% | 75°C: 75% | 85°C: 100%</p>
                      <p className="pt-2"><strong>Case Fans:</strong></p>
                      <p>• Always: 40% | 60°C: 60% | 70°C: 80% | 80°C: 100%</p>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">
                      These curves balance silence and cooling. Adjust based on preference.
                    </p>
                  </div>

                  <div className="bg-black/40 rounded-lg p-4 border-l-4 border-l-purple-500">
                    <h4 className="font-semibold text-purple-400 mb-2">5. Power Settings</h4>
                    <p className="text-zinc-300 mb-2">
                      <strong>Location:</strong> Advanced → CPU Configuration
                    </p>
                    <p className="text-zinc-300">
                      • Precision Boost Overdrive: Disabled (7800X3D doesn't need it)
                    </p>
                    <p className="text-zinc-300">
                      • Curve Optimizer: Leave disabled initially
                    </p>
                    <p className="text-zinc-300">
                      • C-States: Enabled (allows idle power saving)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Windows Optimization</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-black/40 rounded p-4">
                      <h4 className="font-semibold text-green-400 mb-2">Power Plan</h4>
                      <p className="text-sm text-zinc-300 mb-2">
                        Control Panel → Power Options → Create custom plan based on "High Performance"
                      </p>
                      <p className="text-xs text-zinc-400">
                        Set minimum processor state: 5%, maximum: 100%, disable USB suspend
                      </p>
                    </div>

                    <div className="bg-black/40 rounded p-4">
                      <h4 className="font-semibold text-green-400 mb-2">Game Mode</h4>
                      <p className="text-sm text-zinc-300 mb-2">
                        Settings → Gaming → Game Mode: ON
                      </p>
                      <p className="text-xs text-zinc-400">
                        Prioritizes game processes and disables Windows Update during gaming
                      </p>
                    </div>

                    <div className="bg-black/40 rounded p-4">
                      <h4 className="font-semibold text-green-400 mb-2">Hardware Accelerated GPU Scheduling</h4>
                      <p className="text-sm text-zinc-300 mb-2">
                        Settings → Display → Graphics → Change default graphics settings
                      </p>
                      <p className="text-xs text-zinc-400">
                        Enable "Hardware-accelerated GPU scheduling" and "Optimizations for windowed games"
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-black/40 rounded p-4">
                      <h4 className="font-semibold text-green-400 mb-2">Disable Startup Programs</h4>
                      <p className="text-sm text-zinc-300 mb-2">
                        Task Manager → Startup tab
                      </p>
                      <p className="text-xs text-zinc-400">
                        Disable everything except: GPU drivers, audio software, peripherals. Save 2-4GB RAM.
                      </p>
                    </div>

                    <div className="bg-black/40 rounded p-4">
                      <h4 className="font-semibold text-green-400 mb-2">NVIDIA Control Panel</h4>
                      <p className="text-sm text-zinc-300 mb-2">
                        Right-click desktop → NVIDIA Control Panel
                      </p>
                      <div className="text-xs text-zinc-400 space-y-1">
                        <p>• Power Management: Prefer Maximum Performance</p>
                        <p>• Low Latency Mode: Ultra</p>
                        <p>• Texture Filtering: High Performance</p>
                        <p>• G-SYNC: On (if compatible monitor)</p>
                      </div>
                    </div>

                    <div className="bg-black/40 rounded p-4">
                      <h4 className="font-semibold text-green-400 mb-2">Monitor Refresh Rate</h4>
                      <p className="text-sm text-zinc-300 mb-2">
                        Settings → Display → Advanced display
                      </p>
                      <p className="text-xs text-zinc-400">
                        Verify set to maximum (144Hz, 165Hz, etc). Windows defaults to 60Hz sometimes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">GPU Tuning (Optional)</h3>
                <div className="bg-black/40 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">MSI Afterburner Optimization</h4>
                  <p className="text-sm text-zinc-300 mb-3">
                    Mild overclock for RTX 4080 Super (5-8% performance gain, completely safe):
                  </p>
                  <div className="space-y-2 text-sm text-zinc-300">
                    <p>• <strong>Core Clock:</strong> +100 MHz</p>
                    <p>• <strong>Memory Clock:</strong> +1000 MHz (DDR = +2000 effective)</p>
                    <p>• <strong>Power Limit:</strong> 110% (352W)</p>
                    <p>• <strong>Fan Curve:</strong> Custom (60% at 70°C, 80% at 75°C)</p>
                  </div>
                  <div className="bg-yellow-600/10 border border-yellow-500/30 rounded p-3 mt-3 text-xs text-yellow-300">
                    <strong>Stability Test:</strong> Run 3DMark Time Spy or play demanding game for 1 hour. If crashes, reduce clocks by 25 MHz increments.
                  </div>
                </div>

                <div className="bg-blue-600/10 border border-blue-500/30 rounded p-4">
                  <h4 className="font-semibold text-blue-300 mb-2">Undervolting (Advanced)</h4>
                  <p className="text-sm text-zinc-300 mb-2">
                    Reduce power draw by 10-15% with same performance. Lower temps = quieter operation.
                  </p>
                  <p className="text-xs text-zinc-400">
                    Tutorial: Search "RTX 4080 undervolting guide" on YouTube. Requires 30-60 minutes testing.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Benchmarking & Validation</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded p-4">
                    <h4 className="font-semibold text-white mb-3">Run These Benchmarks</h4>
                    <div className="space-y-2 text-sm text-zinc-300">
                      <p>• <strong>3DMark Time Spy:</strong> Overall system score</p>
                      <p>• <strong>Cinebench R23:</strong> CPU multi-core (target: 18,000+)</p>
                      <p>• <strong>CrystalDiskMark:</strong> SSD speeds (7,400+ read)</p>
                      <p>• <strong>FurMark:</strong> 10-min GPU stress (max 78°C)</p>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded p-4">
                    <h4 className="font-semibold text-white mb-3">Expected Scores</h4>
                    <div className="space-y-2 text-sm text-zinc-300">
                      <p>• <strong>Time Spy:</strong> 26,000-28,000</p>
                      <p>• <strong>Time Spy Extreme:</strong> 13,500-14,500</p>
                      <p>• <strong>Port Royal (RT):</strong> 16,000-17,000</p>
                      <p>• <strong>CB R23 Multi:</strong> 18,000-19,000</p>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">
                      Scores 10%+ lower? Check temps, EXPO enabled, and GPU drivers updated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-red-400" />
              You've Built a High-End Gaming Beast!
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Congratulations on completing your high-end gaming rig! This machine represents the pinnacle of modern gaming technology—capable of maxed-out 4K gaming, immersive VR experiences, and years of future-proof performance. You've invested in quality components that will serve you well for 5+ years before needing any major upgrades.
            </p>
            <p className="text-zinc-300 mb-4">
              Take time to enjoy what you've built. Test your favorite games at maximum settings, dive into VR experiences you've dreamed about, and share your build with the community. You're now part of an elite group of enthusiasts who refuse to compromise on gaming excellence.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-red-300 mb-2">Share Your Build</h4>
                <p className="text-sm text-zinc-400">
                  Post on r/battlestations, r/pcmasterrace, and Discord communities. Others want to see your creation!
                </p>
              </div>
              <div className="bg-pink-600/10 border border-pink-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-pink-300 mb-2">Keep Learning</h4>
                <p className="text-sm text-zinc-400">
                  Explore advanced tuning, custom water cooling, or RGB synchronization for even more personalization.
                </p>
              </div>
              <div className="bg-orange-600/10 border border-orange-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-orange-300 mb-2">Help Others</h4>
                <p className="text-sm text-zinc-400">
                  Your expertise can guide new builders. Share your experience and knowledge with the community.
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-16 p-8 bg-gradient-to-br from-red-600/10 to-pink-600/10 backdrop-blur-lg rounded-xl border border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
              D
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">Darshan Solanki</h3>
              <p className="text-zinc-400">High-Performance Systems Specialist & Hardware Enthusiast</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Darshan specializes in high-end gaming and workstation builds, having assembled over 200 flagship-tier systems. His expertise in thermal optimization and component selection has helped enthusiasts build dream machines that exceed expectations while staying within budget.
          </p>
        </div>

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
      </div>
    </main>
  )
}
