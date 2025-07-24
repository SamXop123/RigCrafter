"use client"

import { motion } from "framer-motion"
import { Clock, Users, Star, ArrowRight, BookOpen, Video, FileText, Wrench, User } from "lucide-react"
import Image from "next/image"

const guides = [
  {
    id: 1,
    title: "Complete Beginner's Guide to PC Building",
    description: "Everything you need to know to build your first gaming PC from scratch.",
    image: "/beginner-pc-build-guide.jpg",
    category: "Beginner",
    readTime: "15 min read",
    difficulty: "Easy",
    rating: 4.9,
    views: "125k",
    type: "Article",
    icon: <BookOpen className="w-4 h-4" />,
    author: "Alex Chen",
    lastUpdated: "2024-01-15"
  },
  {
    id: 2,
    title: "How to Use RigCrafter: Step-by-Step Tutorial",
    description: "Master RigCrafter's features to build the perfect PC configuration.",
    image: "/rigcrafter-tutorial.jpg",
    category: "Tutorial",
    readTime: "8 min read",
    difficulty: "Easy",
    rating: 4.8,
    views: "89k",
    type: "Video",
    icon: <Video className="w-4 h-4" />,
    author: "Sarah Johnson",
    lastUpdated: "2024-01-20"
  },
  {
    id: 3,
    title: "Budget Gaming PC Build Guide ($600-800)",
    description: "Build a capable gaming PC without breaking the bank.",
    image: "/budget-gaming-pc-guide.jpg",
    category: "Budget Builds",
    readTime: "12 min read",
    difficulty: "Medium",
    rating: 4.7,
    views: "200k",
    type: "Article",
    icon: <FileText className="w-4 h-4" />,
    author: "Mike Rodriguez",
    lastUpdated: "2024-01-10"
  },
  {
    id: 4,
    title: "High-End Gaming Rig ($2000+)",
    description: "Create the ultimate gaming machine for 4K and VR gaming.",
    image: "/high-end-gaming-rig.jpg",
    category: "High-End Builds",
    readTime: "18 min read",
    difficulty: "Advanced",
    rating: 4.9,
    views: "156k",
    type: "Article",
    icon: <BookOpen className="w-4 h-4" />,
    author: "Emma Davis",
    lastUpdated: "2024-01-08"
  },
  {
    id: 5,
    title: "Understanding PC Component Compatibility",
    description: "Learn how different components work together and avoid compatibility issues.",
    image: "/pc-component-compatibility.jpg",
    category: "Technical",
    readTime: "10 min read",
    difficulty: "Medium",
    rating: 4.6,
    views: "78k",
    type: "Article",
    icon: <Wrench className="w-4 h-4" />,
    author: "David Kim",
    lastUpdated: "2024-01-05"
  },
  {
    id: 6,
    title: "Cable Management and First Boot",
    description: "Final assembly steps, cable management tips, and what to do after building.",
    image: "/cable-management-guide.jpg",
    category: "Assembly",
    readTime: "14 min read",
    difficulty: "Medium",
    rating: 4.8,
    views: "92k",
    type: "Video",
    icon: <Video className="w-4 h-4" />,
    author: "Lisa Thompson",
    lastUpdated: "2024-01-03"
  },
  {
    id: 7,
    title: "Mini-ITX Small Form Factor Builds",
    description: "Build powerful gaming PCs in compact cases with special considerations.",
    image: "/mini-itx-build-guide.jpg",
    category: "Specialized",
    readTime: "16 min read",
    difficulty: "Advanced",
    rating: 4.7,
    views: "67k",
    type: "Article",
    icon: <BookOpen className="w-4 h-4" />,
    author: "James Wilson",
    lastUpdated: "2024-01-12"
  },
  {
    id: 8,
    title: "Water Cooling Setup Guide",
    description: "Learn how to install AIO and custom water cooling for optimal temperatures.",
    image: "/water-cooling-setup.jpg",
    category: "Cooling",
    readTime: "20 min read",
    difficulty: "Advanced",
    rating: 4.8,
    views: "89k",
    type: "Video",
    icon: <Video className="w-4 h-4" />,
    author: "Maria Garcia",
    lastUpdated: "2024-01-07"
  },
  {
    id: 9,
    title: "Overclocking for Beginners",
    description: "Safely overclock your CPU and GPU for better performance.",
    image: "/placeholder.jpg",
    category: "Performance",
    readTime: "13 min read",
    difficulty: "Medium",
    rating: 4.5,
    views: "134k",
    type: "Article",
    icon: <Wrench className="w-4 h-4" />,
    author: "Robert Chen",
    lastUpdated: "2024-01-14"
  }
]

const categories = [
  { name: "All Guides", count: guides.length },
  { name: "Beginner", count: guides.filter(g => g.category === "Beginner").length },
  { name: "Tutorial", count: guides.filter(g => g.category === "Tutorial").length },
  { name: "Budget Builds", count: guides.filter(g => g.category === "Budget Builds").length },
  { name: "High-End Builds", count: guides.filter(g => g.category === "High-End Builds").length },
  { name: "Technical", count: guides.filter(g => g.category === "Technical").length },
  { name: "Assembly", count: guides.filter(g => g.category === "Assembly").length },
  { name: "Specialized", count: guides.filter(g => g.category === "Specialized").length },
  { name: "Cooling", count: guides.filter(g => g.category === "Cooling").length },
  { name: "Performance", count: guides.filter(g => g.category === "Performance").length }
]

export default function BuildGuidesSection() {
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-400 bg-green-400/10 border-green-400/20"
      case "Medium": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
      case "Advanced": return "text-red-400 bg-red-400/10 border-red-400/20"
      default: return "text-zinc-400 bg-zinc-400/10 border-zinc-400/20"
    }
  }

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
              Build Guides & Tutorials
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Step-by-step guides to help you master PC building with RigCrafter
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
              key={category.name}
              className="px-4 py-2 bg-black/50 backdrop-blur-lg rounded-lg border border-white/10 hover:border-purple-500/30 transition-all text-zinc-300 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Guides Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {guides.map((guide) => (
            <motion.div
              key={guide.id}
              variants={itemVariants}
              className="bg-black/50 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white flex items-center">
                    {guide.icon}
                    <span className="ml-1">{guide.type}</span>
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-400 font-medium">{guide.category}</span>
                  <div className="flex items-center text-xs text-zinc-400">
                    <Star className="w-3 h-3 text-yellow-400 mr-1" />
                    {guide.rating}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {guide.readTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {guide.views} views
                  </div>
                </div>

                <div className="text-xs text-zinc-500 mb-4 border-t border-white/5 pt-3">
                  <div className="flex items-center justify-between">
                    <span>By {guide.author}</span>
                    <span>Updated {new Date(guide.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>

                <motion.button
                  className="w-full flex items-center justify-center px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read Guide
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Building?</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Use RigCrafter's interactive PC builder to put your knowledge into practice. 
              Our compatibility checker ensures your components work perfectly together.
            </p>
            <motion.a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
