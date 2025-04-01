"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, ExternalLink } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { useInView } from "react-intersection-observer"

interface Beat {
  id: string
  name: string
  price: string
  audio: string
  image: string
  beatstarsUrl: string
}

export default function BeatsSection() {
  const [beats, setBeats] = useState<Beat[]>([])
  const [loading, setLoading] = useState(true)
  const [playing, setPlaying] = useState<string | null>(null)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    fetchBeats()
  }, [])

  const fetchBeats = async () => {
    // Simulated API call
    setTimeout(() => {
      setBeats([
        {
          id: "1",
          name: "Urban Groove",
          price: "$49.99",
          audio: "/placeholder.mp3",
          image: "/placeholder.svg?height=200&width=200",
          beatstarsUrl: "https://www.beatstars.com/beat/urban-groove",
        },
        {
          id: "2",
          name: "Chill Vibes",
          price: "$39.99",
          audio: "/placeholder.mp3",
          image: "/placeholder.svg?height=200&width=200",
          beatstarsUrl: "https://www.beatstars.com/beat/chill-vibes",
        },
        {
          id: "3",
          name: "Trap Fusion",
          price: "$59.99",
          audio: "/placeholder.mp3",
          image: "/placeholder.svg?height=200&width=200",
          beatstarsUrl: "https://www.beatstars.com/beat/trap-fusion",
        },
      ])
      setLoading(false)
    }, 1500)
  }

  const togglePlay = (id: string) => {
    setPlaying((current) => (current === id ? null : id))
  }

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


