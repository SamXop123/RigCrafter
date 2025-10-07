"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Cpu, CpuIcon as Gpu, HardDrive, Layers } from "lucide-react"

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  // Extract number from value string (e.g., "50+" -> 50)
  const targetNumber = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(easeOut * targetNumber))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, targetNumber, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function HeroSection() {
  return (
    // <section className="py-20 relative overflow-hidden">
    // ...existing code...
<section 
        className={`
            py-20 
            relative 
            overflow-hidden 
            
            // 1. Dark Gradient Background (Radial)
            bg-[radial-gradient(ellipse_at_top,_var(--tw-color-zinc-900)_0%,_var(--tw-color-black)_80%)]
            
            // 2. Geometric Wireframe Details (Pseudo-element + SVG)
            before:content-['']
            before:absolute
            before:inset-0
            
            // Faint grid pattern
            before:bg-[url('data:image/svg+xml;utf8,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="%23FFFFFF" stroke-opacity="0.02" stroke-width="0.5"><path d="M0 20L20 0ZM0 0L20 20Z" /></g></svg>')]
            before:bg-repeat
            before:z-0
        `} 
    >
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
                className="bg-zinc-900/50 rounded-xl p-6 backdrop-blur-lg border border-white/10 transition-colors hover:border-purple-500/20"
              >
                <div className="mb-2 text-purple-400 flex justify-center">{stat.icon}</div>
                <motion.div
                  className="text-3xl font-bold mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter value={stat.value} />
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

// UPDATED Code Snippet:
