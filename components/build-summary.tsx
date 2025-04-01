"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Cpu,
  CpuIcon as Gpu,
  MemoryStickIcon as Memory,
  HardDrive,
  CircuitBoardIcon as Motherboard,
  Power,
  Box,
  Fan,
  X,
  Share2,
  Download,
  Clipboard,
} from "lucide-react"
import type { Component, ComponentType } from "@/lib/types"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface BuildSummaryProps {
  selectedComponents: Record<ComponentType, Component | null>
  totalPrice: number
  onRemoveComponent: (type: ComponentType, component: Component | null) => void
}

export default function BuildSummary({ selectedComponents, totalPrice, onRemoveComponent }: BuildSummaryProps) {
  const [isCopied, setIsCopied] = useState(false)
  const [buildName, setBuildName] = useState("My Gaming Rig")

  const componentIcons: Record<ComponentType, JSX.Element> = {
    cpu: <Cpu className="w-4 h-4" />,
    gpu: <Gpu className="w-4 h-4" />,
    ram: <Memory className="w-4 h-4" />,
    storage: <HardDrive className="w-4 h-4" />,
    motherboard: <Motherboard className="w-4 h-4" />,
    powerSupply: <Power className="w-4 h-4" />,
    case: <Box className="w-4 h-4" />,
    cooling: <Fan className="w-4 h-4" />,
  }

  const componentLabels: Record<ComponentType, string> = {
    cpu: "CPU",
    gpu: "GPU",
    ram: "RAM",
    storage: "Storage",
    motherboard: "Motherboard",
    powerSupply: "Power Supply",
    case: "Case",
    cooling: "Cooling",
  }

  const selectedComponentsCount = Object.values(selectedComponents).filter(Boolean).length

  const handleCopyBuild = () => {
    const buildText =
      `RigCrafter Build: ${buildName}\n\n` +
      Object.entries(selectedComponents)
        .filter(([_, component]) => component !== null)
        .map(
          ([type, component]) =>
            `${componentLabels[type as ComponentType]}: ${component?.name} - $${component?.price.toFixed(2)}`,
        )
        .join("\n") +
      `\n\nTotal: $${totalPrice.toFixed(2)}`

    navigator.clipboard.writeText(buildText)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleSaveBuild = () => {
    // In a real app, this would save to a database or local storage
    alert("Build saved successfully!")
  }

  
}

