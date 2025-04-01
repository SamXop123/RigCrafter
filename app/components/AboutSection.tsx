"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Headphones, Music, Mic2, Award } from "lucide-react"

const achievements = [
  { icon: <Headphones className="w-6 h-6" />, label: "Years of Experience", value: "10+" },
  { icon: <Music className="w-6 h-6" />, label: "Tracks Produced", value: "500+" },
  { icon: <Mic2 className="w-6 h-6" />, label: "Artists Collaborated", value: "100+" },
  { icon: <Award className="w-6 h-6" />, label: "Awards Won", value: "15+" },
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
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center" style={{ y, opacity }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-3xl transform -rotate-6"></div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="drannel"
              width={600}
              height={600}
              className="rounded-3xl relative z-10"
            />
          </div>
          
          </div>
        </motion.div>
      </div>
    </section>
  )
}

