'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Package, Shield} from "lucide-react"

export default function BudgetGamingPCGuide() {
  const tags = ["PC Building", "Budget Gaming", "Gaming PC", "Tutorial", "Entry Level"]

  return (
    <main className="min-h-screen pt-16 pb-16 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
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

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                Budget Build Guide
              </span>
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">
                Updated for 2025
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ultimate Budget Gaming PC Build Guide ($600-800)
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl">
              Build a powerful 1080p gaming rig that delivers exceptional performance without breaking the bank. This guide covers everything from part selection to final assembly.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>100+ FPS in esports titles</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>Efficient 65W CPU</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>Future-proof components</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>SamXop123</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Last updated: November 13, 2025</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>10 min read</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full border border-zinc-700">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
          <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <Heart className="w-5 h-5" />
            <span>Save for later</span>
          </button>
          <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
          <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <Bookmark className="w-5 h-5" />
            <span>Bookmark</span>
          </button>
        </div>

        <div className="prose prose-invert max-w-none pt-8">

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Introduction</h2>
          <p className="text-zinc-300 leading-relaxed">
            Building a gaming PC on a budget doesn't mean you have to compromise on performance. In this guide, we'll walk you through building a capable gaming rig for under $800 that can handle modern games at 1080p resolution with solid frame rates. This build balances price and performance, giving you the best value for your money.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Build Overview</h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Build Specifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Cpu className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">AMD Ryzen 5 5600</p>
                  <p className="text-sm text-zinc-400">6 cores, 12 threads - The perfect balance of price and performance for 1080p gaming</p>
                </div>
              </li>
              <li className="flex items-start">
                <Monitor className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">NVIDIA RTX 3060 / AMD RX 6600</p>
                  <p className="text-sm text-zinc-400">Excellent 1080p performance with ray tracing capabilities</p>
                </div>
              </li>
              <li className="flex items-start">
                <HardDrive className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">1TB NVMe SSD</p>
                  <p className="text-sm text-zinc-400">Fast storage for your OS, games, and applications</p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">650W 80+ Bronze PSU</p>
                  <p className="text-sm text-zinc-400">Reliable power with room for future upgrades</p>
                </div>
              </li>
              <li className="flex items-start">
                <Package className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Mid-Tower Case</p>
                  <p className="text-sm text-zinc-400">Good airflow and cable management options</p>
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Performance Expectations</h2>
          <p className="text-zinc-300 leading-relaxed">
            This build is designed to deliver excellent 1080p gaming performance. Here's what you can expect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300 my-4">
            <li>100+ FPS in esports titles like Valorant, CS2, and Rainbow Six Siege</li>
            <li>60+ FPS in AAA games at high settings</li>
            <li>Great performance for streaming and content creation</li>
            <li>Efficient power consumption and low heat output</li>
          </ul>

          <h2 className="text-3xl font-bold mt-16 mb-8 text-white border-b border-zinc-800 pb-4">Detailed Build Process</h2>
          
          <div className="space-y-8">
            {/* Workspace Setup */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-800/50 p-4 border-b border-zinc-800">
                <h3 className="text-xl font-semibold text-blue-400">1. Workspace Preparation</h3>
              </div>
              <div className="p-6">
                <p className="text-zinc-300 mb-4">A proper workspace is crucial for a smooth building experience. Here's what you'll need:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-zinc-200 mb-3">Essential Tools:</h4>
                    <ul className="space-y-2 text-zinc-300">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Phillips #2 screwdriver (magnetic tip preferred)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Anti-static wrist strap (highly recommended)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Needle-nose pliers (for standoffs and small screws)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Zip ties and velcro straps for cable management</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700">
                    <h4 className="font-medium text-zinc-200 mb-3">Workspace Setup:</h4>
                    <ul className="space-y-2 text-zinc-300">
                      <li>✓ Clean, flat surface with good lighting</li>
                      <li>✓ Anti-static mat (optional but recommended)</li>
                      <li>✓ Small containers for different screw types</li>
                      <li>✓ Flashlight or headlamp</li>
                      <li>✓ Thermal paste (if not pre-applied)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-blue-500/10 border-l-4 border-blue-500 p-4">
                  <div className="flex">
                    <div className="h-5 w-5 text-blue-400 flex-shrink-0">i</div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-100">Work in a static-free environment. If you don't have an anti-static wrist strap, frequently touch the metal part of your case to discharge any static electricity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CPU Installation */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-800/50 p-4 border-b border-zinc-800">
                <h3 className="text-xl font-semibold text-blue-400">2. CPU Installation</h3>
              </div>
              <div className="p-6">
                <p className="text-zinc-300 mb-6">The Ryzen 5 5600 is the heart of this build. Follow these steps carefully to install it properly:</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-medium text-zinc-200 mb-3">Step-by-Step:</h4>
                    <ol className="list-decimal pl-5 space-y-3 text-zinc-300">
                      <li>Locate the CPU socket on your motherboard (AM4 socket)</li>
                      <li>Lift the retention arm to the open position</li>
                      <li>Align the gold triangle on the CPU with the triangle on the socket</li>
                      <li>Gently place the CPU into the socket (no force needed)</li>
                      <li>Lower the retention arm back into place</li>
                    </ol>
                  </div>
                  <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700">
                    <h4 className="font-medium text-zinc-200 mb-3">Key Points:</h4>
                    <ul className="space-y-2 text-zinc-300">
                      <li>✓ Never touch the CPU pins</li>
                      <li>✓ The CPU only fits one way - don't force it</li>
                      <li>✓ If using an aftermarket cooler, clean old thermal paste with isopropyl alcohol</li>
                      <li>✓ The stock cooler has pre-applied thermal paste</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 my-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-sm text-yellow-300 font-medium">Important Safety Note</p>
                      <p className="text-sm text-yellow-100 mt-1">Never apply power to your system without the CPU cooler properly installed. Modern CPUs can overheat in seconds without proper cooling.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-zinc-200 mb-3">Thermal Paste Application (if needed):</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                      <div className="w-4 h-4 mx-auto mb-2 bg-blue-400 rounded-full"></div>
                      <p className="text-sm">Pea-sized Dot</p>
                      <p className="text-xs text-zinc-400">Most common method</p>
                    </div>
                    <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                      <div className="w-4 h-4 mx-auto mb-2 bg-blue-400 rounded-full"></div>
                      <p className="text-sm">X Pattern</p>
                      <p className="text-xs text-zinc-400">For larger CPUs</p>
                    </div>
                    <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                      <div className="w-4 h-4 mx-auto mb-2 bg-blue-400 rounded-full"></div>
                      <p className="text-sm">Line</p>
                      <p className="text-xs text-zinc-400">For modern Intel CPUs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RAM Installation */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-800/50 p-4 border-b border-zinc-800">
                <h3 className="text-xl font-semibold text-blue-400">3. RAM Installation</h3>
              </div>
              <div className="p-6">
                <p className="text-zinc-300 mb-6">Installing RAM is straightforward but crucial for dual-channel performance:</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-medium text-zinc-200 mb-3">Installation Steps:</h4>
                    <ol className="list-decimal pl-5 space-y-3 text-zinc-300">
                      <li>Open the RAM slot clips on both ends</li>
                      <li>Align the notch in the RAM stick with the slot</li>
                      <li>Press down firmly on both ends until the clips snap into place</li>
                      <li>For dual-channel, use slots 2 and 4 (A2/B2) as per your motherboard manual</li>
                    </ol>
                  </div>
                  <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700">
                    <h4 className="font-medium text-zinc-200 mb-3">RAM Configuration:</h4>
                    <ul className="space-y-2 text-zinc-300">
                      <li>✓ 16GB (2x8GB) DDR4-3200MHz recommended</li>
                      <li>✓ Enable XMP/DOCP in BIOS for full speed</li>
                      <li>✓ Ensure the RAM is fully seated (you'll hear a click)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-500/10 border-l-4 border-purple-500 p-4">
                  <div className="flex">
                    <div className="h-5 w-5 text-purple-400 flex-shrink-0">i</div>
                    <div className="ml-3">
                      <p className="text-sm text-purple-100">For optimal performance, install RAM in the correct slots as specified in your motherboard manual. Most motherboards use the 2nd and 4th slots (A2/B2) for dual-channel configuration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            {/* M.2 SSD Installation */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-800/50 p-4 border-b border-zinc-800">
                <h3 className="text-xl font-semibold text-blue-400">4. M.2 SSD Installation</h3>
              </div>
              <div className="p-6">
                <p className="text-zinc-300 mb-6">M.2 SSDs provide the fastest storage solution for your operating system and games:</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-medium text-zinc-200 mb-3">Installation Steps:</h4>
                    <ol className="list-decimal pl-5 space-y-3 text-zinc-300">
                      <li>Locate the M.2 slot on your motherboard (usually above the first PCIe slot)</li>
                      <li>Remove the M.2 screw (if present) from the standoff</li>
                      <li>Insert the M.2 SSD at a 30-degree angle</li>
                      <li>Gently press down and secure with the screw</li>
                      <li>Some motherboards include a heatsink - install it if available</li>
                    </ol>
                  </div>
                  <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700">
                    <h4 className="font-medium text-zinc-200 mb-3">SSD Recommendations:</h4>
                    <ul className="space-y-2 text-zinc-300">
                      <li>✓ 1TB NVMe PCIe 3.0 or 4.0</li>
                      <li>✓ Look for DRAM cache for better performance</li>
                      <li>✓ Popular choices: WD Blue SN570, Crucial P5 Plus, Samsung 970 Evo Plus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Motherboard Installation */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-800/50 p-4 border-b border-zinc-800">
                <h3 className="text-xl font-semibold text-blue-400">5. Motherboard Installation</h3>
              </div>
              <div className="p-6">
                <p className="text-zinc-300 mb-6">Time to install the motherboard into the case:</p>
        </div>
    </main>
  )
}
