"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Cpu, Zap, Users, Target, Award, Shield } from "lucide-react"

const achievements = [
  { icon: <Cpu className="w-6 h-6" />, label: "PC Builds Completed", value: "5000+" },
  { icon: <Users className="w-6 h-6" />, label: "Happy Customers", value: "2500+" },
  { icon: <Zap className="w-6 h-6" />, label: "Components Tested", value: "10000+" },
  { icon: <Award className="w-6 h-6" />, label: "Years of Experience", value: "8+" },
]

export default function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} id="about" className="min-h-screen py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
              About RigCrafter
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Building the future of custom PC assembly, one component at a time
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-16 items-center mb-20" style={{ y, opacity }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-3xl transform -rotate-6 border border-purple-500/20"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/0 rounded-3xl transform rotate-3"></div>
            <Image
              src="/rigcraft.png"
              alt="RigCrafter PC Building"
              width={700}
              height={800}
              className="rounded-3xl relative z-10 shadow-2xl w-full h-auto"
            />
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-lg rounded-lg p-3 border border-white/10">
              <Cpu className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Mission</h3>
            <p className="text-lg mb-6 text-zinc-300 leading-relaxed">
              RigCrafter is more than just a PC builder tool – we're your trusted partner in creating the ultimate gaming experience. 
              With cutting-edge technology and expert knowledge, we empower enthusiasts to build systems that don't just meet expectations, but exceed them.
            </p>
            <p className="text-lg mb-8 text-zinc-300 leading-relaxed">
              From budget-friendly builds to high-end gaming monsters, our platform ensures compatibility, 
              performance optimization, and the perfect balance between price and power. Every component recommendation 
              is backed by extensive testing and real-world performance data.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="bg-black/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-3 rounded-lg border border-purple-500/20 mr-3 group-hover:border-purple-400/40 transition-colors">
                      <div className="text-purple-400">{achievement.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-white">{achievement.value}</div>
                  </div>
                  <div className="text-sm text-zinc-400 font-medium">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission Values Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-4 rounded-lg border border-purple-500/20 w-fit mb-6 group-hover:border-purple-400/40 transition-colors">
              <Target className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Precision</h4>
            <p className="text-zinc-400 leading-relaxed">
              Every component recommendation is carefully curated based on performance benchmarks, compatibility testing, and real-world usage scenarios.
            </p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-4 rounded-lg border border-purple-500/20 w-fit mb-6 group-hover:border-purple-400/40 transition-colors">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Reliability</h4>
            <p className="text-zinc-400 leading-relaxed">
              We stand behind every build recommendation with comprehensive warranties, extensive testing data, and ongoing support for your PC journey.
            </p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-4 rounded-lg border border-purple-500/20 w-fit mb-6 group-hover:border-purple-400/40 transition-colors">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Innovation</h4>
            <p className="text-zinc-400 leading-relaxed">
              Stay ahead of the curve with access to the latest components, emerging technologies, and cutting-edge performance optimizations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

