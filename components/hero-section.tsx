"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cpu, CpuIcon as Gpu, HardDrive, Layers } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">RigCrafter</span>
            <motion.span
              className="absolute -inset-1 bg-purple-500 rounded-full blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zinc-400 max-w-3xl mx-auto">
            Build your dream gaming PC with our interactive component selector. Choose compatible parts, optimize your
            budget, and craft the perfect rig.
          </p>
          <div className="relative inline-block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-zinc-200 text-lg px-8 py-6 rounded-full transition-colors relative overflow-hidden group"
                asChild
              >
                <a href="#builder">
                  <span className="relative z-10">Start Building</span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-white"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="ml-2 relative z-10">
                    →
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: <Cpu className="w-6 h-6" />, label: "CPUs", value: "50+" },
            { icon: <Gpu className="w-6 h-6" />, label: "GPUs", value: "40+" },
            { icon: <HardDrive className="w-6 h-6" />, label: "Storage Options", value: "30+" },
            { icon: <Layers className="w-6 h-6" />, label: "Configurations", value: "1000+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/40 rounded-2xl p-6 backdrop-blur-md border border-transparent hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 bg-gradient-to-br from-purple-600/10 to-pink-500/10"

              >
                <div className="mb-2 text-purple-400 flex justify-center">{stat.icon}</div>
                <motion.div
                  className="text-3xl font-bold mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

