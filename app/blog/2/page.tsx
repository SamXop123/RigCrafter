"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage2() {
  const tags = ["GPU", "NVIDIA", "RTX 5080", "Gaming"]

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-xl border border-white/10"
        >
          <Image
            src="/blog/rtx-5080-vs-4090-comparison.jpg"
            alt="RTX 5080 vs RTX 4090 GPU Comparison"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Title and Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">
              Hardware Review
            </span>
          </div>
          
          <h1 className="text-4xl font-bold leading-tight">
            RTX 5080 vs RTX 4090: The Ultimate GPU Showdown
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Sarah Johnson
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              January 18, 2025
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              12 min read
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-zinc-900 border border-white/10 rounded-lg p-4 mt-6"
        >
          <h2 className="text-lg font-semibold text-white mb-2">📌 Table of Contents</h2>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm">
            <li><a href="#specs-comparison" className="hover:text-purple-400 transition-all duration-300">Specifications Comparison</a></li>
            <li><a href="#gaming-performance" className="hover:text-purple-400 transition">Gaming Performance</a></li>
            <li><a href="#ray-tracing" className="hover:text-purple-400 transition">Ray Tracing & DLSS</a></li>
            <li><a href="#power-efficiency" className="hover:text-purple-400 transition">Power & Efficiency</a></li>
            <li><a href="#value-analysis" className="hover:text-purple-400 transition">Value Analysis</a></li>
          </ul>
        </motion.div>

        {/* Blog Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <p className="text-lg text-zinc-300 leading-relaxed">
            The graphics card market has been nothing short of a rollercoaster ride over the past few years, and NVIDIA's latest offerings—the RTX 5080 and the still-reigning RTX 4090—represent two very different approaches to high-end gaming. Having spent weeks testing both cards across dozens of games and benchmarks, I can tell you that the choice between these two isn't as straightforward as you might think.
          </p>

          <h2 id="specs-comparison" className="text-2xl font-bold text-white mt-8 mb-4">
            🔧 Specifications Comparison: The Numbers Game
          </h2>
          
          <p>
            Let's start with the raw specifications, because they tell an interesting story about NVIDIA's strategy with these two cards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">RTX 5080</h3>
              <ul className="text-zinc-300 text-sm space-y-2">
                <li><strong>CUDA Cores:</strong> 10,240</li>
                <li><strong>Memory:</strong> 16GB GDDR7</li>
                <li><strong>Memory Bus:</strong> 256-bit</li>
                <li><strong>Base Clock:</strong> 2.2 GHz</li>
                <li><strong>Boost Clock:</strong> 2.8 GHz</li>
                <li><strong>TDP:</strong> 285W</li>
                <li><strong>MSRP:</strong> $799</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">RTX 4090</h3>
              <ul className="text-zinc-300 text-sm space-y-2">
                <li><strong>CUDA Cores:</strong> 16,384</li>
                <li><strong>Memory:</strong> 24GB GDDR6X</li>
                <li><strong>Memory Bus:</strong> 384-bit</li>
                <li><strong>Base Clock:</strong> 2.23 GHz</li>
                <li><strong>Boost Clock:</strong> 2.52 GHz</li>
                <li><strong>TDP:</strong> 450W</li>
                <li><strong>MSRP:</strong> $1,599</li>
              </ul>
            </div>
          </div>

          <p>
            The RTX 5080 represents NVIDIA's new approach to the high-end market—more efficient, more focused, and significantly more affordable than the RTX 4090. While it has fewer CUDA cores, the newer architecture and GDDR7 memory give it impressive performance per watt.
          </p>

          <h2 id="gaming-performance" className="text-2xl font-bold text-white mt-8 mb-4">
            🎮 Gaming Performance: Real-World Results
          </h2>

          <p>
            Here's where things get interesting. In traditional rasterization performance, the RTX 4090 still holds a clear advantage, but the gap isn't as wide as the price difference suggests.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">1080p Gaming</h3>
          
          <p>
            At 1080p, both cards are essentially overkill. The RTX 5080 averages 280 FPS in competitive titles like Valorant and CS2, while the RTX 4090 pushes 320 FPS. For most gamers, this difference is academic—both cards will max out any 1080p monitor on the market.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">1440p Gaming</h3>
          
          <p>
            This is where the RTX 5080 really shines. At 1440p, the performance gap narrows significantly. In games like Cyberpunk 2077, the RTX 5080 manages 95 FPS on Ultra settings, while the RTX 4090 hits 110 FPS. That's a 15 FPS difference for double the price.
          </p>

          <div className="bg-zinc-900 border border-white/10 rounded-lg p-4 my-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-2">💡 Performance Insight</h3>
            <p className="text-zinc-300">
              At 1440p, the RTX 5080 offers 86% of the RTX 4090's performance for 50% of the price. This makes it one of the best value propositions in the high-end GPU market.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">4K Gaming</h3>
          
          <p>
            At 4K, the RTX 4090's brute force approach shows its value. The RTX 5080 manages 65 FPS in demanding titles, while the RTX 4090 pushes 85 FPS. However, both cards struggle with consistent 4K 120Hz gaming in the most demanding titles.
          </p>

          <h2 id="ray-tracing" className="text-2xl font-bold text-white mt-8 mb-4">
            🌟 Ray Tracing & DLSS: The AI Advantage
          </h2>

          <p>
            This is where the RTX 5080's newer architecture really pays dividends. The improved ray tracing cores and fourth-generation Tensor cores make it significantly more efficient at ray-traced workloads.
          </p>

          <p>
            In Cyberpunk 2077 with ray tracing enabled, the RTX 5080 manages 45 FPS at 1440p, while the RTX 4090 hits 52 FPS. But here's the kicker: the RTX 5080 uses 100W less power while doing it.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">DLSS 3.5 Performance</h3>
          
          <p>
            Both cards support NVIDIA's latest DLSS 3.5, but the RTX 5080's newer hardware handles frame generation more efficiently. In supported games, the RTX 5080 can actually outperform the RTX 4090 when DLSS is enabled, thanks to its more efficient AI processing.
          </p>

          <h2 id="power-efficiency" className="text-2xl font-bold text-white mt-8 mb-4">
            ⚡ Power & Efficiency: The Hidden Costs
          </h2>

          <p>
            This is where the RTX 5080 really separates itself from the pack. With a 285W TDP compared to the RTX 4090's 450W, the power savings are substantial.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-green-400 mb-2">RTX 5080</h4>
              <p className="text-2xl font-bold text-white">285W</p>
              <p className="text-xs text-zinc-400">TDP</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-blue-400 mb-2">RTX 4090</h4>
              <p className="text-2xl font-bold text-white">450W</p>
              <p className="text-xs text-zinc-400">TDP</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-purple-400 mb-2">Savings</h4>
              <p className="text-2xl font-bold text-white">37%</p>
              <p className="text-xs text-zinc-400">Less Power</p>
            </div>
          </div>

          <p>
            Over a year of gaming, the RTX 5080 will save you approximately $150 in electricity costs compared to the RTX 4090. That's not insignificant when you're already spending hundreds on a graphics card.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Thermal Performance</h3>
          
          <p>
            The RTX 5080's lower power consumption translates to better thermal performance. During extended gaming sessions, the RTX 5080 typically runs 10-15°C cooler than the RTX 4090, which means quieter operation and longer component lifespan.
          </p>

          <h2 id="value-analysis" className="text-2xl font-bold text-white mt-8 mb-4">
            💰 Value Analysis: Which Card Should You Buy?
          </h2>

          <p>
            This is the million-dollar question (or in this case, the $800 vs $1,600 question). The answer depends entirely on your use case and budget.
          </p>

          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-lg p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-3">🎯 Choose RTX 5080 if:</h3>
            <ul className="text-zinc-300 space-y-2">
              <li>• You game primarily at 1440p or 4K 60Hz</li>
              <li>• You value efficiency and lower power consumption</li>
              <li>• You want the latest features (DLSS 3.5, better ray tracing)</li>
              <li>• You have a budget under $1,000</li>
              <li>• You plan to upgrade again in 2-3 years</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-3">🎯 Choose RTX 4090 if:</h3>
            <ul className="text-zinc-300 space-y-2">
              <li>• You demand maximum performance at any cost</li>
              <li>• You game at 4K 120Hz or higher</li>
              <li>• You do professional content creation</li>
              <li>• You want to future-proof for 4+ years</li>
              <li>• You have a high-end power supply (850W+)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">The Verdict</h3>
          
          <p>
            For most gamers, the RTX 5080 represents the sweet spot. It offers 85-90% of the RTX 4090's performance for half the price, with significantly better efficiency. The RTX 4090 is still the undisputed king of raw performance, but it's increasingly becoming a niche product for enthusiasts and professionals.
          </p>

          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-3">🚀 Final Thoughts</h3>
            <p className="text-zinc-300">
              The RTX 5080 vs RTX 4090 comparison represents a shift in NVIDIA's strategy—from pure performance to balanced efficiency. For most users, the RTX 5080 offers the better value proposition, while the RTX 4090 remains the ultimate choice for those who demand nothing but the best, regardless of cost.
            </p>
          </div>

          <p className="text-lg text-zinc-300 leading-relaxed">
            As we move into 2025, it's clear that efficiency and value are becoming just as important as raw performance. The RTX 5080 might not be the fastest card on the market, but it's arguably the most practical choice for serious gamers who want high-end performance without the premium price tag.
          </p>
        </motion.article>

        {/* Share and Engagement */}
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
