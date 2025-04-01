"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Disc3, Music2, AudioWaveformIcon as Waveform } from "lucide-react"

const FloatingParticle = ({ delay }: { delay: number }) => {
  const y = useMotionValue(0)
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 })

  useEffect(() => {
    const moveParticle = () => {
      y.set(Math.random() * -100)
      setTimeout(moveParticle, Math.random() * 5000 + 3000)
    }
    setTimeout(moveParticle, delay)
  }, [y, delay])

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        x: `${Math.random() * 100}%`,
        y: ySpring,
        opacity: 0.5,
      }}
    />
  )
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [isHovered, setIsHovered] = useState(false)

  const stats = [
    { icon: <Play className="w-6 h-6" />, label: "Beats Sold", value: "500+" },
    { icon: <Disc3 className="w-6 h-6" />, label: "Unique Tracks", value: "1000+" },
    { icon: <Music2 className="w-6 h-6" />, label: "Happy Artists", value: "200+" },
    { icon: <Waveform className="w-6 h-6" />, label: "Genres", value: "10+" },
  ]

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black"></div>
        {[...Array(50)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 100} />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                Elevate Your Sound
              </span>
              <motion.span
                className="absolute -inset-1 bg-white rounded-full blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-zinc-400 max-w-3xl mx-auto">
              Crafting unique beats that help artists stand out. From trap to lo-fi, find your perfect sound and take
              your music to the next level.
            </p>
            <div className="relative inline-block">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200 text-lg px-8 py-6 rounded-full transition-colors relative overflow-hidden group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  asChild
                >
                  <a href="https://drqnnel.beatstars.com" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10">Visit BeatStars</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white"
                      initial={{ x: "100%" }}
                      animate={{ x: isHovered ? "0%" : "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2 relative z-10"
                    >
                      →
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-zinc-900/50 rounded-xl p-6 backdrop-blur-lg border border-white/10 transition-colors hover:border-white/20"
                >
                  <div className="mb-2 text-white/70 flex justify-center">{stat.icon}</div>
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
      </motion.div>
    </section>
  )
}

