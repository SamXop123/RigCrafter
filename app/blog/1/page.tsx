"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage1() {
  const tags = ["Trends", "Technology", "Future", "AI", "Sustainability"]

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
            src="/blog/pc-building-trends-2025.jpg"
            alt="Future of PC Building Trends 2025"
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
            <span className="px-3 py-1 bg-purple-600 text-white text-xs rounded-full font-medium">
              Featured
            </span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">
              Industry News
            </span>
          </div>
          
          <h1 className="text-4xl font-bold leading-tight">
            The Future of PC Building: Trends to Watch in 2025
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Alex Chen
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              January 20, 2025
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              8 min read
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
            <li><a href="#ai-integration" className="hover:text-purple-400 transition-all duration-300">AI-Powered Component Selection</a></li>
            <li><a href="#sustainability" className="hover:text-purple-400 transition">Sustainable Building Practices</a></li>
            <li><a href="#modular-design" className="hover:text-purple-400 transition">Modular Design Revolution</a></li>
            <li><a href="#cloud-gaming" className="hover:text-purple-400 transition">Cloud Gaming Integration</a></li>
            <li><a href="#quantum-computing" className="hover:text-purple-400 transition">Quantum Computing Impact</a></li>
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
            As we step into 2025, the landscape of PC building is undergoing a transformation that's both exciting and, frankly, a bit overwhelming. Having spent the last decade immersed in this world, I've seen trends come and go, but what's happening now feels fundamentally different. We're not just talking about incremental improvements anymore—we're witnessing a paradigm shift in how we think about personal computing.
          </p>

          <h2 id="ai-integration" className="text-2xl font-bold text-white mt-8 mb-4">
            🤖 AI-Powered Component Selection: The Game Changer
          </h2>
          
          <p>
            Remember when choosing PC parts meant hours of research, forum diving, and hoping you didn't make a compatibility mistake? Those days are numbered. AI-powered component selection tools are becoming so sophisticated that they're not just suggesting parts—they're predicting your needs before you even realize you have them.
          </p>

          <p>
            Companies like NVIDIA and AMD are integrating AI directly into their driver suites, automatically optimizing performance based on your specific hardware combination. But here's what's really fascinating: these AI systems are learning from millions of builds worldwide, creating a collective intelligence that's making PC building more accessible than ever.
          </p>

          <div className="bg-zinc-900 border border-white/10 rounded-lg p-4 my-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-2">💡 Pro Tip</h3>
            <p className="text-zinc-300">
              AI recommendation engines are now considering factors like your local power costs, ambient temperature, and even your gaming preferences to suggest the most efficient component combinations.
            </p>
          </div>

          <h2 id="sustainability" className="text-2xl font-bold text-white mt-8 mb-4">
            🌱 Sustainable Building Practices: Beyond Just Performance
          </h2>

          <p>
            The conversation around PC building is shifting from "How fast can I make it?" to "How can I make it responsibly?" Manufacturers are responding with innovative solutions that would have seemed impossible just a few years ago.
          </p>

          <p>
            We're seeing biodegradable packaging, modular components designed for easy recycling, and power supplies that automatically adjust their efficiency based on load. But perhaps most exciting is the rise of refurbished and upcycled components that perform just as well as new parts but with a fraction of the environmental impact.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">The Circular Economy in PC Building</h3>
          
          <p>
            Companies are now offering trade-in programs for old components, refurbishing them, and selling them at a discount. This isn't just good for the environment—it's making high-end components accessible to budget-conscious builders. I recently helped a friend build a system using 70% refurbished parts, and the performance difference was negligible while the cost savings were substantial.
          </p>

          <h2 id="modular-design" className="text-2xl font-bold text-white mt-8 mb-4">
            🔧 Modular Design Revolution: The Future is Modular
          </h2>

          <p>
            The concept of modular PC building is evolving beyond just swappable components. We're moving toward truly modular systems where entire subsystems can be upgraded independently. Imagine being able to upgrade your graphics processing without touching your CPU, or swapping out your storage system without opening the case.
          </p>

          <p>
            Companies like Framework are leading this charge with their modular laptop designs, but the desktop world isn't far behind. We're seeing motherboard designs that allow for hot-swappable components, and cases that can be reconfigured for different form factors without tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">Advantages</h4>
              <ul className="text-zinc-300 text-sm space-y-1">
                <li>• Reduced e-waste</li>
                <li>• Lower upgrade costs</li>
                <li>• Easier maintenance</li>
                <li>• Future-proof design</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">Challenges</h4>
              <ul className="text-zinc-300 text-sm space-y-1">
                <li>• Higher initial cost</li>
                <li>• Limited component options</li>
                <li>• Proprietary standards</li>
                <li>• Compatibility concerns</li>
              </ul>
            </div>
          </div>

          <h2 id="cloud-gaming" className="text-2xl font-bold text-white mt-8 mb-4">
            ☁️ Cloud Gaming Integration: The Hybrid Approach
          </h2>

          <p>
            Cloud gaming isn't replacing local hardware—it's complementing it. Smart builders are now creating hybrid systems that can leverage both local processing power and cloud resources. This means you can build a mid-range system that performs like a high-end rig when needed.
          </p>

          <p>
            Services like NVIDIA GeForce NOW and Xbox Cloud Gaming are becoming so seamless that they're changing how we think about hardware requirements. Why buy a $1,500 graphics card when you can stream the same performance for $20 a month? The answer, of course, is that you can do both—use local hardware for competitive gaming and cloud resources for single-player experiences.
          </p>

          <h2 id="quantum-computing" className="text-2xl font-bold text-white mt-8 mb-4">
            ⚛️ Quantum Computing Impact: Preparing for the Future
          </h2>

          <p>
            While quantum computing might seem like science fiction, it's already influencing how we think about PC architecture. Companies are developing quantum-ready components that can interface with quantum systems when they become more accessible.
          </p>

          <p>
            The most immediate impact is in cryptography and security. Quantum-resistant algorithms are being developed, and hardware manufacturers are creating components that can handle both classical and quantum computing tasks. This might sound far-fetched, but remember—the smartphone in your pocket has more computing power than the systems that sent humans to the moon.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">What This Means for Builders</h3>

          <p>
            The PC building landscape of 2025 is about choice and flexibility. You can still build a traditional high-performance system, but now you have options that didn't exist before. You can build a sustainable system that's good for the planet, a modular system that grows with your needs, or a hybrid system that leverages the best of both local and cloud computing.
          </p>

          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-3">🚀 Looking Ahead</h3>
            <p className="text-zinc-300">
              The future of PC building isn't about following trends—it's about understanding your needs and choosing the right tools for the job. Whether you're building for gaming, content creation, or just everyday computing, the options available in 2025 are more diverse and exciting than ever before.
            </p>
          </div>

          <p className="text-lg text-zinc-300 leading-relaxed">
            As we move forward, the most successful builders will be those who can adapt to these changes while staying true to the core principle that has always driven this hobby: building something that's uniquely yours. The tools and technologies may change, but the satisfaction of creating your perfect system remains constant.
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
