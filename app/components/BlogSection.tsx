"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowRight, Tag, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of PC Building: Trends to Watch in 2025",
    excerpt: "Explore upcoming technologies and trends that will shape the PC building landscape in the coming year, including DDR5 adoption, AI-powered components, and sustainable building practices.",
    image: "/blog/pc-future.webp",
    author: "Alex Chen",
    date: "2025-01-20",
    readTime: "8 min read",
    category: "Industry News",
    featured: true,
    tags: ["Trends", "Technology", "Future", "AI", "Sustainability"]
  },
  {
    id: 2,
    title: "RTX 5080 vs RTX 4090: The Ultimate GPU Showdown",
    excerpt: "A comprehensive comparison of NVIDIA's latest flagship graphics cards to help you decide which offers the best value for your gaming setup.",
    image: "/blog/rtx4090.avif",
    author: "Sarah Johnson",
    date: "2025-01-18",
    readTime: "12 min read",
    category: "Hardware Review",
    featured: false,
    tags: ["GPU", "NVIDIA", "RTX 5080", "Gaming"]
  },
  {
    id: 3,
    title: "Building Your First Gaming PC: 2025 Complete Guide",
    excerpt: "Learn from the most common first-time builder mistakes and how to avoid them in your build. Updated for 2025 with latest components and best practices.",
    image: "/blog/first-gaming-pc.webp",
    author: "Mike Rodriguez",
    date: "2025-01-15",
    readTime: "15 min read",
    category: "Tutorials",
    featured: false,
    tags: ["Beginner", "Gaming", "Tips", "Guide"]
  },
  {
    id: 4,
    title: "AMD Ryzen 8000 Series: Performance Deep Dive",
    excerpt: "An in-depth analysis of AMD's latest Ryzen processors and how they stack up against Intel's 14th gen offerings for gaming and productivity.",
    image: "/blog/amd-8000.png",
    author: "Emma Davis",
    date: "2025-01-12",
    readTime: "10 min read",
    category: "Hardware Review",
    featured: false,
    tags: ["CPU", "AMD", "Ryzen", "Performance"]
  },
  {
    id: 5,
    title: "The Rise of OLED Gaming Monitors: Worth the Upgrade?",
    excerpt: "Discover how OLED gaming monitors are changing the game for competitive and immersive gaming experiences, plus our top recommendations.",
    image: "/blog/oled.png",
    author: "David Kim",
    date: "2025-01-10",
    readTime: "9 min read",
    category: "Peripherals",
    featured: false,
    tags: ["Monitor", "OLED", "Gaming", "Display"]
  },
  {
    id: 6,
    title: "DDR5-7200 vs DDR5-6000: Does Speed Matter?",
    excerpt: "A comprehensive look at the latest high-speed memory and whether paying for faster RAM actually improves gaming and productivity performance.",
    image: "/blog/ddr5.avif",
    author: "Lisa Thompson",
    date: "2025-01-08",
    readTime: "11 min read",
    category: "Hardware Review",
    featured: true,
    tags: ["RAM", "DDR5", "Performance", "Gaming"]
  },
  {
    id: 7,
    title: "Custom Loop vs AIO: Which Cooling Solution is Right for You?",
    excerpt: "Break down the pros and cons of custom liquid cooling loops versus all-in-one coolers to help you make the best choice for your build.",
    image: "/blog/custom vs aio.webp",
    author: "James Wilson",
    date: "2025-01-05",
    readTime: "13 min read",
    category: "Cooling",
    featured: false,
    tags: ["Cooling", "AIO", "Custom Loop", "Performance"]
  },
  {
    id: 8,
    title: "PCIe 5.0 SSDs: The Future of Storage is Here",
    excerpt: "Explore the benefits of PCIe 5.0 NVMe SSDs and whether they're worth the premium for gaming, content creation, and everyday computing.",
    image: "/blog/pcie-5-nvme-ssd-review.png",
    author: "Maria Garcia",
    date: "2025-01-03",
    readTime: "7 min read",
    category: "Storage",
    featured: false,
    tags: ["SSD", "PCIe 5.0", "Storage", "Performance"]
  }
]

const categories = [
  "All Posts",
  "Industry News",
  "Hardware Review", 
  "Tutorials",
  "Peripherals",
  "Cooling",
  "Storage"
]

export default function BlogSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0]
  const regularPosts = blogPosts.filter(post => !post.featured || post.id !== featuredPost.id)

  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
              RigCrafter Blog
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Latest insights, reviews, and guides from the world of PC building
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className="px-4 py-2 bg-black/50 backdrop-blur-lg rounded-lg border border-white/10 hover:border-purple-500/30 transition-all text-zinc-300 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href={`/blog/${featuredPost.id}`}>
            <div className="bg-black/50 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-purple-400 font-medium">{featuredPost.category}</span>
                    <span className="mx-2 text-zinc-500">•</span>
                    <span className="text-sm text-zinc-400">{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-zinc-400">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                      <Calendar className="w-4 h-4 ml-4 mr-2" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    
                    <motion.button
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Regular Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Link href={`/blog/${post.id}`}>
                <div className="bg-black/50 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-zinc-800/50 text-zinc-400 text-xs rounded flex items-center"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-500">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <motion.button
                        className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm"
                        whileHover={{ x: 5 }}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Get the latest PC building news, reviews, and guides delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-purple-400 focus:outline-none"
              />
              <motion.button
                className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
