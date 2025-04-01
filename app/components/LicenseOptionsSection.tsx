"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Check, X, Crown, Zap, Star, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const licenseOptions = [
  {
    name: "Standard License",
    price: "$2.99",
    icon: <Star className="w-6 h-6" />,
    features: [
      "Used for Music Recording",
      "Distribute up to 5,000 copies",
      "75,000 Online Audio Streams",
      "1 Music Video",
      "For Profit Live Performances",
      "Radio Broadcasting rights (2 Stations)",
    ],
    bulkDeal: "BUY 1 TRACK, GET 1 FREE!",
  },
  {
    name: "Advanced License",
    price: "$4.99",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "Used for Music Recording",
      "Distribute up to 10,000 copies",
      "150,000 Online Audio Streams",
      "1 Music Video",
      "For Profit Live Performances",
      "Radio Broadcasting rights (UNLIMITED Stations)",
    ],
    popular: true,
  },
  {
    name: "Premium License",
    price: "$7.99",
    icon: <Crown className="w-6 h-6" />,
    features: [
      "Used for Music Recording",
      "Distribute up to 20,000 copies",
      "500,000 Online Audio Streams",
      "1 Music Video",
      "Non-profit Live Performances only",
    ],
    notIncluded: ["No Radio Broadcasting rights"],
  },
  {
    name: "Commercial License",
    price: "$8.99",
    icon: <Globe className="w-6 h-6" />,
    features: [
      "Used for Music Recording",
      "Distribute up to UNLIMITED copies",
      "UNLIMITED Online Audio Streams",
      "UNLIMITED Music Video",
      "For Profit Live Performances",
      "Radio Broadcasting rights (UNLIMITED Stations)",
    ],
  },
]

export default function LicenseOptionsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  
}

