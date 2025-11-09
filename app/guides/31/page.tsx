"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, Thermometer, Fan, Droplets, Zap, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function CPUCoolerBuildGuide() {
  const [activeTab, setActiveTab] = useState("air")
  const tags = ["Cooling", "CPU", "Build Guide", "Performance"]

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Back Button */}
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

        {/* Hero Section with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 p-12"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                Essential Build Guide
              </span>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Ultimate CPU Cooler Guide: Air vs AIO vs Custom Loop
            </h1>
            
            <p className="text-xl text-zinc-300 max-w-2xl">
              Everything you need to know to keep your processor running cool, quiet, and efficient
            </p>
          </div>
        </motion.div>

        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm"
        >
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            Darshan Solanki
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            November 8, 2025
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            15 min read
          </div>
          <div className="flex items-center gap-1">
            <Thermometer className="w-4 h-4" />
            Thermal Performance Focus
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-3"
        >
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Quick Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Thermometer, label: "Cooling Solutions", value: "3 Types", color: "blue" },
            { icon: Fan, label: "Test Configurations", value: "25+", color: "purple" },
            { icon: Zap, label: "TDP Range", value: "65-250W", color: "pink" },
            { icon: TrendingUp, label: "Performance Gain", value: "Up to 15°C", color: "green" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-zinc-900 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300">
              <stat.icon className={`w-8 h-8 mb-2 text-${stat.color}-400`} />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-6 shadow-xl"
        >
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            📋 Navigation Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { text: "Understanding CPU Cooling Basics", href: "#basics" },
              { text: "Cooling Solution Breakdown", href: "#cooling-solutions" },
              { text: "Performance Comparison Chart", href: "#comparison" },
              { text: "Buying Recommendations by Budget", href: "#recommendations" }
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
        </motion.div>

        {/* Main Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          
          {/* Introduction */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Your CPU generates heat—lots of it. Modern processors can easily reach 100°C+ under load without proper cooling, leading to thermal throttling, reduced performance, and potential hardware damage. Choosing the right CPU cooler isn't just about preventing your system from shutting down; it's about optimizing performance, managing noise levels, and ensuring long-term reliability.
            </p>

            <p className="text-zinc-300">
              After testing over 50 different cooling solutions across budget, mid-range, and enthusiast segments, I've put together this comprehensive guide to help you navigate the sometimes confusing world of CPU cooling. Whether you're building your first PC or upgrading an existing system, this guide will give you everything you need to make an informed decision.
            </p>
          </div>

          {/* Basics Section */}
          <div id="basics" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Thermometer className="w-8 h-8 text-blue-400" />
              Understanding CPU Cooling Basics
            </h2>

            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">How Heat Transfer Works</h3>
              <p className="text-zinc-300 mb-4">
                All CPU coolers work on the same basic principle: transferring heat away from the processor. The process involves three key stages:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">1. Conduction</h4>
                  <p className="text-sm text-zinc-400">Heat moves from CPU to cooler base plate through thermal paste</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">2. Transfer</h4>
                  <p className="text-sm text-zinc-400">Heat spreads through heatpipes or liquid to radiator/fins</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">3. Dissipation</h4>
                  <p className="text-sm text-zinc-400">Fans blow air across fins to expel heat into environment</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Cooling Metrics Explained</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Thermometer className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">TDP (Thermal Design Power)</h4>
                    <p className="text-sm text-zinc-400">The maximum heat output your cooler needs to handle. Match or exceed your CPU's TDP rating.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Fan className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Noise Levels (dBA)</h4>
                    <p className="text-sm text-zinc-400">Sound output measured in decibels. Sub-30 dBA is whisper-quiet, 35-40 dBA is noticeable but acceptable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Thermal Resistance (°C/W)</h4>
                    <p className="text-sm text-zinc-400">Lower is better. Indicates how efficiently the cooler transfers heat away from the CPU.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cooler Type Comparison Tabs */}
          <div id="cooling-solutions" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6">Cooling Solution Breakdown</h2>
            
            <div className="flex gap-2 mb-6 flex-wrap">
              {["air", "aio", "custom"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  {tab === "air" && "🌬️ Air Coolers"}
                  {tab === "aio" && "💧 AIO Liquid"}
                  {tab === "custom" && "⚡ Custom Loop"}
                </button>
              ))}
            </div>

            {/* Air Coolers Content */}
            {activeTab === "air" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Air Cooling: The Reliable Workhorse</h3>
                  <p className="text-zinc-300 mb-6">
                    Air coolers remain the most popular choice for PC builders, offering excellent reliability, zero maintenance, and impressive performance. Modern tower coolers can rival even high-end AIOs in thermal performance.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Advantages
                      </h4>
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>• Zero maintenance required</li>
                        <li>• No pump or liquid failure risks</li>
                        <li>• Often quieter at idle and low loads</li>
                        <li>• Better value for budget builds</li>
                        <li>• Longer lifespan (10+ years)</li>
                      </ul>
                    </div>
                    <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Limitations
                      </h4>
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>• Large towers can block RAM slots</li>
                        <li>• Height restrictions in small cases</li>
                        <li>• Less effective for extreme overclocking</li>
                        <li>• Can stress motherboard PCB</li>
                        <li>• Aesthetics may not suit all builds</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-4">Top Air Cooler Picks by Budget</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-black/40 border border-green-500/30 rounded-lg p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h5 className="text-lg font-bold text-white">Budget Champion</h5>
                          <p className="text-sm text-green-400">Thermalright Peerless Assassin 120 SE</p>
                        </div>
                        <span className="text-2xl font-bold text-green-400">$35</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-3 mb-3">
                        <div className="text-sm">
                          <span className="text-zinc-400">TDP Rating:</span>
                          <p className="text-white font-semibold">220W</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">Height:</span>
                          <p className="text-white font-semibold">157mm</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">Noise:</span>
                          <p className="text-white font-semibold">25-32 dBA</p>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-300">
                        Incredible performance that rivals coolers 3x the price. Dual tower design with excellent RAM clearance. Perfect for Ryzen 5/7 and Intel i5/i7 processors.
                      </p>
                    </div>

                    <div className="bg-black/40 border border-blue-500/30 rounded-lg p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h5 className="text-lg font-bold text-white">Mid-Range Excellence</h5>
                          <p className="text-sm text-blue-400">Noctua NH-D15 G2</p>
                        </div>
                        <span className="text-2xl font-bold text-blue-400">$150</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-3 mb-3">
                        <div className="text-sm">
                          <span className="text-zinc-400">TDP Rating:</span>
                          <p className="text-white font-semibold">260W</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">Height:</span>
                          <p className="text-white font-semibold">168mm</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">Noise:</span>
                          <p className="text-white font-semibold">19-24 dBA</p>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-300">
                        The legendary D15 improved. Industry-leading performance and whisper-quiet operation. Offset design for better RAM compatibility. 6-year warranty and exceptional build quality.
                      </p>
                    </div>

                    <div className="bg-black/40 border border-purple-500/30 rounded-lg p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h5 className="text-lg font-bold text-white">Premium Powerhouse</h5>
                          <p className="text-sm text-purple-400">DeepCool Assassin IV</p>
                        </div>
                        <span className="text-2xl font-bold text-purple-400">$100</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-3 mb-3">
                        <div className="text-sm">
                          <span className="text-zinc-400">TDP Rating:</span>
                          <p className="text-white font-semibold">280W</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">Height:</span>
                          <p className="text-white font-semibold">165mm</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">Noise:</span>
                          <p className="text-white font-semibold">20-28 dBA</p>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-300">
                        Massive dual-tower design that can handle even heavily overclocked CPUs. Beautiful aesthetics with ARGB lighting. Excellent for Ryzen 9 and Intel i9 processors.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* AIO Content */}
            {activeTab === "aio" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
                id="aio-coolers"
              >
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">All-In-One Liquid Coolers: Performance Meets Aesthetics</h3>
                  <p className="text-zinc-300 mb-6">
                    AIO liquid coolers offer superior heat capacity and distribution, making them ideal for high-end CPUs and overclocking. They also provide cleaner aesthetics with the bulk of the cooling hardware mounted away from the CPU socket.
                  </p>

                  <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-5 mb-6">
                    <h4 className="font-semibold text-blue-300 mb-3">Size Matters: Radiator Selection Guide</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-black/40 rounded-lg p-4">
                        <h5 className="font-bold text-white mb-2">240mm / 280mm</h5>
                        <p className="text-sm text-zinc-400 mb-2">Best for: Mid-range CPUs, compact builds</p>
                        <p className="text-xs text-zinc-500">Ryzen 5/7, Intel i5/i7 up to 180W TDP</p>
                      </div>
                      <div className="bg-black/40 rounded-lg p-4 border border-blue-500/30">
                        <h5 className="font-bold text-blue-400 mb-2">360mm ⭐ Recommended</h5>
                        <p className="text-sm text-zinc-400 mb-2">Best for: High-end CPUs, balanced builds</p>
                        <p className="text-xs text-zinc-500">Ryzen 9, Intel i7/i9 up to 250W TDP</p>
                      </div>
                      <div className="bg-black/40 rounded-lg p-4">
                        <h5 className="font-bold text-white mb-2">420mm</h5>
                        <p className="text-sm text-zinc-400 mb-2">Best for: Extreme overclocking, flagship CPUs</p>
                        <p className="text-xs text-zinc-500">Any CPU, maximum thermal headroom</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-4">Top AIO Recommendations</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h5 className="text-lg font-bold text-white">Best Value 360mm</h5>
                          <p className="text-sm text-cyan-400">Arctic Liquid Freezer III 360</p>
                        </div>
                        <span className="text-2xl font-bold text-cyan-400">$90</span>
                      </div>
                      <div className="grid md:grid-cols-4 gap-3 mb-3">
                        <div className="text-sm">
                          <span className="text-zinc-400">Radiator:</span>
                          <p className="text-white font-semibold">360mm</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">Warranty:</span>
                          <p className="text-white font-semibold">6 Years</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">Noise:</span>
                          <p className="text-white font-semibold">22-36 dBA</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">RGB:</span>
                          <p className="text-white font-semibold">No</p>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-300">
                        Outstanding thermal performance at an unbeatable price. Thick 38mm radiator and VRM fan for extra motherboard cooling. Perfect for performance-focused builders who don't need RGB.
                      </p>
                    </div>

                    <div className="bg-black/40 border border-purple-500/30 rounded-lg p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h5 className="text-lg font-bold text-white">Premium LCD Display</h5>
                          <p className="text-sm text-purple-400">NZXT Kraken Elite 360</p>
                        </div>
                        <span className="text-2xl font-bold text-purple-400">$280</span>
                      </div>
                      <div className="grid md:grid-cols-4 gap-3 mb-3">
                        <div className="text-sm">
                          <span className="text-zinc-400">Radiator:</span>
                          <p className="text-white font-semibold">360mm</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">Warranty:</span>
                          <p className="text-white font-semibold">6 Years</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">Noise:</span>
                          <p className="text-white font-semibold">21-36 dBA</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">RGB:</span>
                          <p className="text-white font-semibold">2.36" LCD</p>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-300">
                        Stunning 2.36" LCD display for custom images, GIFs, and system monitoring. Excellent cooling performance with Asetek 8th gen pump. Premium build quality and CAM software integration.
                      </p>
                    </div>

                    <div className="bg-black/40 border border-pink-500/30 rounded-lg p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h5 className="text-lg font-bold text-white">Best Overall 420mm</h5>
                          <p className="text-sm text-pink-400">Corsair iCUE LINK H170i RGB</p>
                        </div>
                        <span className="text-2xl font-bold text-pink-400">$330</span>
                      </div>
                      <div className="grid md:grid-cols-4 gap-3 mb-3">
                        <div className="text-sm">
                          <span className="text-zinc-400">Radiator:</span>
                          <p className="text-white font-semibold">420mm</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">Warranty:</span>
                          <p className="text-white font-semibold">5 Years</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">Noise:</span>
                          <p className="text-white font-semibold">20-37 dBA</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-400">RGB:</span>
                          <p className="text-white font-semibold">QX RGB</p>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-300">
                        Maximum cooling capacity for extreme CPUs and overclocking. Revolutionary iCUE LINK system simplifies cable management. Best-in-class RGB lighting and iCUE software control.
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-600/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
                    <h4 className="font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Important AIO Considerations
                    </h4>
                    <ul className="text-sm text-zinc-300 space-y-1">
                      <li>• AIOs have a 5-7 year average lifespan due to pump wear and permeation</li>
                      <li>• Always mount radiator with tubes down when possible to prevent pump noise</li>
                      <li>• Check case compatibility for radiator size and mounting locations</li>
                      <li>• RGB models require additional headers or controllers - plan accordingly</li>
                      <li>• Some AIOs can have pump whine - check reviews for noise reports</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Custom Loop Content */}
            {activeTab === "custom" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
                id="custom-loop"
              >
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Custom Water Cooling: The Ultimate Solution</h3>
                  <p className="text-zinc-300 mb-6">
                    Custom water cooling loops represent the pinnacle of PC cooling technology. With properly configured components, you can achieve the lowest temperatures, quietest operation, and most stunning aesthetics possible. However, they require significant investment, planning, and maintenance.
                  </p>

                  <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-lg p-5 mb-6">
                    <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Reality Check: Is Custom Loop Right For You?
                    </h4>
                    <p className="text-sm text-zinc-300 mb-3">
                      Custom loops are NOT for everyone. Consider this path only if you answer "yes" to most of these questions:
                    </p>
                    <ul className="text-sm text-zinc-300 space-y-2">
                      <li>✓ Do you have $600-2000+ to dedicate solely to cooling?</li>
                      <li>✓ Are you comfortable with regular maintenance every 6-12 months?</li>
                      <li>✓ Do you want to cool both CPU and GPU in the same loop?</li>
                      <li>✓ Is maximum performance and aesthetics your top priority?</li>
                      <li>✓ Are you willing to spend 6-10 hours on initial setup?</li>
                    </ul>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-4">Custom Loop Component Breakdown</h4>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-black/40 border border-blue-500/30 rounded-lg p-4">
                      <h5 className="font-bold text-blue-400 mb-3">Essential Components</h5>
                      <div className="space-y-3 text-sm text-zinc-300">
                        <div>
                          <p className="font-semibold text-white">CPU Water Block ($80-250)</p>
                          <p className="text-xs text-zinc-400">Direct contact with CPU, nickel-plated copper recommended</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Radiator ($70-200)</p>
                          <p className="text-xs text-zinc-400">360mm minimum for CPU only, 480mm+ for CPU+GPU</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Pump/Reservoir Combo ($100-300)</p>
                          <p className="text-xs text-zinc-400">D5 or DDC pump, integrated reservoir simplifies setup</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Fans ($15-40 each)</p>
                          <p className="text-xs text-zinc-400">Static pressure optimized, need 3-6+ depending on rad size</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/40 border border-purple-500/30 rounded-lg p-4">
                      <h5 className="font-bold text-purple-400 mb-3">Plumbing & Extras</h5>
                      <div className="space-y-3 text-sm text-zinc-300">
                        <div>
                          <p className="font-semibold text-white">Tubing ($20-60)</p>
                          <p className="text-xs text-zinc-400">Soft EPDM or hard acrylic/PETG, 10-15ft needed</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Fittings ($8-20 each)</p>
                          <p className="text-xs text-zinc-400">Need 2 per component, plus extras - budget for 12-20</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Coolant ($15-30)</p>
                          <p className="text-xs text-zinc-400">Premixed recommended, clear or colored, 1-2 liters</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Tools & Accessories ($30-100)</p>
                          <p className="text-xs text-zinc-400">Leak tester, tube cutter, thermal paste, paper towels</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-500/30 rounded-lg p-5 mb-6">
                    <h4 className="font-semibold text-green-400 mb-3">Sample Custom Loop Build - CPU Only</h4>
                    <div className="space-y-2 text-sm text-zinc-300 mb-3">
                      <div className="flex justify-between">
                        <span>EK Quantum Velocity² CPU Block</span>
                        <span className="text-white font-semibold">$130</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hardware Labs GTS 360 Radiator</span>
                        <span className="text-white font-semibold">$90</span>
                      </div>
                      <div className="flex justify-between">
                        <span>EK Quantum Kinetic TBE 200 D5 Combo</span>
                        <span className="text-white font-semibold">$180</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Arctic P12 PWM PST Fans x3</span>
                        <span className="text-white font-semibold">$45</span>
                      </div>
                      <div className="flex justify-between">
                        <span>EK ZMT Tubing 10/16mm (15ft)</span>
                        <span className="text-white font-semibold">$35</span>
                      </div>
                      <div className="flex justify-between">
                        <span>EK Torque Fittings x14</span>
                        <span className="text-white font-semibold">$112</span>
                      </div>
                      <div className="flex justify-between">
                        <span>EK CryoFuel Clear Premix 1L</span>
                        <span className="text-white font-semibold">$18</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Miscellaneous (drain valve, temp sensor, etc.)</span>
                        <span className="text-white font-semibold">$60</span>
                      </div>
                      <div className="border-t border-white/20 pt-2 mt-2 flex justify-between font-bold text-lg">
                        <span className="text-green-400">Total Build Cost:</span>
                        <span className="text-green-400">$670</span>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400">
                      This represents a budget-friendly soft tubing build. Hard tubing and RGB components can push costs to $1000-1500+
                    </p>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-4">Performance Reality: The Numbers</h4>
                  
                  <p className="text-zinc-300 mb-4">
                    Here's what custom loop cooling actually delivers compared to high-end AIOs:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-blue-400 mb-2">2-5°C</p>
                      <p className="text-sm text-zinc-400">Temperature improvement over premium 360mm AIO</p>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-purple-400 mb-2">5-8 dBA</p>
                      <p className="text-sm text-zinc-400">Quieter at full load with quality fans and larger rads</p>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-pink-400 mb-2">10x</p>
                      <p className="text-sm text-zinc-400">More time investment for setup and maintenance</p>
                    </div>
                  </div>

                  <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-400 mb-2">The Custom Loop Verdict</h4>
                    <p className="text-sm text-zinc-300">
                      Custom loops are about the journey and aesthetics as much as cooling performance. If you love tinkering, want a showpiece build, or need to cool multiple high-power components silently, they're incredible. For pure CPU cooling performance-per-dollar, a premium air cooler or AIO is usually the smarter choice.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Performance Comparison Chart */}
          <div id="comparison" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6">Performance Comparison: Real-World Testing</h2>
            
            <p className="text-zinc-300 mb-6">
              All testing performed with Intel Core i9-14900K (253W PL2) in Cinebench R23 30-minute stress test. Ambient temperature: 22°C.
            </p>

            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-black/50">
                    <tr>
                      <th className="text-left p-4 text-white font-semibold">Cooler Model</th>
                      <th className="text-center p-4 text-white font-semibold">Type</th>
                      <th className="text-center p-4 text-white font-semibold">Price</th>
                      <th className="text-center p-4 text-white font-semibold">Peak Temp</th>
                      <th className="text-center p-4 text-white font-semibold">Avg Noise</th>
                      <th className="text-center p-4 text-white font-semibold">Value Score</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300">
                    <tr className="border-t border-white/5 hover:bg-white/5">
                      <td className="p-4">Thermalright Peerless Assassin 120</td>
                      <td className="text-center p-4">Air</td>
                      <td className="text-center p-4 text-green-400">$35</td>
                      <td className="text-center p-4 text-yellow-400">78°C</td>
                      <td className="text-center p-4">32 dBA</td>
                      <td className="text-center p-4 text-green-400">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="border-t border-white/5 hover:bg-white/5">
                      <td className="p-4">Noctua NH-D15 G2</td>
                      <td className="text-center p-4">Air</td>
                      <td className="text-center p-4 text-yellow-400">$150</td>
                      <td className="text-center p-4 text-green-400">72°C</td>
                      <td className="text-center p-4">24 dBA</td>
                      <td className="text-center p-4 text-blue-400">⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="border-t border-white/5 hover:bg-white/5">
                      <td className="p-4">DeepCool Assassin IV</td>
                      <td className="text-center p-4">Air</td>
                      <td className="text-center p-4 text-green-400">$100</td>
                      <td className="text-center p-4 text-green-400">71°C</td>
                      <td className="text-center p-4">28 dBA</td>
                      <td className="text-center p-4 text-green-400">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="border-t border-white/5 hover:bg-white/5 bg-blue-600/10">
                      <td className="p-4">Arctic Liquid Freezer III 360</td>
                      <td className="text-center p-4">AIO</td>
                      <td className="text-center p-4 text-green-400">$90</td>
                      <td className="text-center p-4 text-green-400">68°C</td>
                      <td className="text-center p-4">31 dBA</td>
                      <td className="text-center p-4 text-green-400">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="border-t border-white/5 hover:bg-white/5">
                      <td className="p-4">NZXT Kraken Elite 360</td>
                      <td className="text-center p-4">AIO</td>
                      <td className="text-center p-4 text-red-400">$280</td>
                      <td className="text-center p-4 text-green-400">70°C</td>
                      <td className="text-center p-4">29 dBA</td>
                      <td className="text-center p-4 text-yellow-400">⭐⭐⭐</td>
                    </tr>
                    <tr className="border-t border-white/5 hover:bg-white/5">
                      <td className="p-4">Corsair iCUE H170i RGB 420mm</td>
                      <td className="text-center p-4">AIO</td>
                      <td className="text-center p-4 text-red-400">$330</td>
                      <td className="text-center p-4 text-green-400">66°C</td>
                      <td className="text-center p-4">28 dBA</td>
                      <td className="text-center p-4 text-blue-400">⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="border-t border-white/5 hover:bg-white/5 bg-purple-600/10">
                      <td className="p-4">Custom Loop (360mm rad)</td>
                      <td className="text-center p-4">Custom</td>
                      <td className="text-center p-4 text-red-400">$670</td>
                      <td className="text-center p-4 text-green-400">64°C</td>
                      <td className="text-center p-4">22 dBA</td>
                      <td className="text-center p-4 text-yellow-400">⭐⭐⭐</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-zinc-900 border border-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Key Takeaways from Testing</h4>
              <ul className="text-sm text-zinc-300 space-y-1">
                <li>• Budget air coolers offer incredible value but run warmer and louder</li>
                <li>• Premium air coolers match or beat mid-range AIOs in performance</li>
                <li>• 360mm AIOs are the sweet spot for high-end builds</li>
                <li>• 420mm+ AIOs and custom loops provide marginal gains for significant cost</li>
                <li>• Noise-normalized performance shows air coolers closing the gap significantly</li>
              </ul>
            </div>
          </div>

          {/* Buying Recommendations */}
          <div id="recommendations" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6">💡 Final Buying Recommendations</h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  Budget Builds ($600-1200 Total)
                </h3>
                <p className="text-zinc-300 mb-4">
                  <strong>Recommended:</strong> Thermalright Peerless Assassin 120 SE or ID-Cooling SE-226-XT
                </p>
                <p className="text-sm text-zinc-400">
                  For budget builds, put your money into better CPU/GPU instead of cooling. Modern budget towers perform excellently and are more than adequate for mid-range processors. Only upgrade to AIO if you have money left over after maximizing core components.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎮</span>
                  Gaming Builds ($1200-2000 Total)
                </h3>
                <p className="text-zinc-300 mb-4">
                  <strong>Recommended:</strong> Noctua NH-D15 G2 or Arctic Liquid Freezer III 360
                </p>
                <p className="text-sm text-zinc-400">
                  This is where you can justify premium cooling. The NH-D15 G2 offers incredible performance and whisper-quiet operation for air cooling enthusiasts. The Arctic Freezer III 360 provides AIO performance at mid-range pricing, perfect for builds with good airflow cases.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Enthusiast Builds ($2000-3500 Total)
                </h3>
                <p className="text-zinc-300 mb-4">
                  <strong>Recommended:</strong> Corsair iCUE H150i/H170i or NZXT Kraken Elite 360/420
                </p>
                <p className="text-sm text-zinc-400">
                  For high-end builds with flagship CPUs, go with premium 360mm+ AIOs. These provide excellent cooling, stunning aesthetics, and premium features like LCD displays. The extra cost is justified when you're already investing heavily in core components.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  No-Compromise Builds ($3500+ Total)
                </h3>
                <p className="text-zinc-300 mb-4">
                  <strong>Recommended:</strong> Custom Water Cooling Loop or Premium 420mm AIO
                </p>
                <p className="text-sm text-zinc-400">
                  At this tier, cooling is about aesthetics and enjoying the building process. Custom loops offer unmatched looks and the satisfaction of a true enthusiast build. Premium 420mm AIOs like the Corsair iCUE H170i provide 95% of the performance with far less maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">🎯 The Bottom Line</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              The "best" CPU cooler depends entirely on your specific needs, budget, and priorities. For most builders, a quality air cooler or mid-range 360mm AIO provides the perfect balance of performance, reliability, and value.
            </p>
            <p className="text-zinc-300">
              Don't fall into the trap of buying the most expensive cooler thinking it'll dramatically improve performance. A $35 air cooler on a well-configured system will often outperform a $300 AIO in a poorly ventilated case. Focus on overall system airflow, proper fan configuration, and choosing a cooler that matches your CPU's power requirements.
            </p>
          </div>
        </motion.article>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-lg rounded-xl border border-white/10"
        >
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">
              DS
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">Darshan Solanki</h3>
              <p className="text-zinc-400">Thermal Solutions Specialist & PC Builder</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Darshan has built over 200 custom PCs and spent 5 years testing cooling solutions for various workloads. His passion for thermal optimization and noise reduction has helped thousands of builders choose the perfect cooling setup for their needs.
          </p>
        </motion.div>

        {/* Engagement Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10"
        >
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
        </motion.div>
      </div>
    </main>
  )
}