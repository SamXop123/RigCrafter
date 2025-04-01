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

  
}

