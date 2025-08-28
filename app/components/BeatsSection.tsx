"use client"

import { motion } from "framer-motion"

export default function BeatsSection() {
  // Example features for RigCrafter
  const features = [
    {
      title: "Component Selector",
      description: "Choose from thousands of compatible PC parts."
    },
    {
      title: "Compatibility Checker",
      description: "Instantly check for compatibility issues between selected components."
    },
    {
      title: "Budget Optimizer",
      description: "Optimize your build to get the best performance for your budget."
    },
    {
      title: "Build Guides",
      description: "Access curated guides for building and upgrading gaming PCs."
    }
  ]

  return (
    <section id="features" className="py-20">
      <motion.h2
        className="text-5xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Build your dream gaming PC with our interactive component selector.
      </motion.h2>
      <p className="text-xl md:text-2xl mb-8 text-zinc-400 max-w-3xl mx-auto text-center">
        RigCrafter is a modern, interactive web application that helps users build custom gaming PCs by selecting compatible components, checking compatibility issues, and optimizing their budget. Built with Next.js 15, TypeScript, and Tailwind CSS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className="bg-zinc-900/50 rounded-xl p-8 backdrop-blur-lg border border-white/10 transition-colors hover:border-white/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-zinc-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}