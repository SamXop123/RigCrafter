"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ComponentSelector from "./component-selector"
import BuildSummary from "./build-summary"
import CompatibilityChecker from "./compatibility-checker"
import { Button } from "@/components/ui/button"
import {
  Cpu,
  CpuIcon as Gpu,
  MemoryStickIcon as Memory,
  HardDrive,
  CircuitBoardIcon as Motherboard,
  Power,
  Box,
  Fan,
} from "lucide-react"
import type { Component, ComponentType } from "@/lib/types"
import { getCompatibilityIssues } from "@/lib/compatibility"
import { getComponentSuggestions } from "@/lib/suggestions"

export default function RigBuilder() {
  const [selectedComponents, setSelectedComponents] = useState<Record<ComponentType, Component | null>>({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    motherboard: null,
    powerSupply: null,
    case: null,
    cooling: null,
  })

  const [compatibilityIssues, setCompatibilityIssues] = useState<string[]>([])
  const [suggestions, setSuggestions] = useState<Record<ComponentType, Component[]>>({
    cpu: [],
    gpu: [],
    ram: [],
    storage: [],
    motherboard: [],
    powerSupply: [],
    case: [],
    cooling: [],
  })

  const [activeTab, setActiveTab] = useState<ComponentType>("cpu")

  useEffect(() => {
    // Check compatibility whenever selected components change
    const issues = getCompatibilityIssues(selectedComponents)
    setCompatibilityIssues(issues)

    // Update suggestions based on current selections
    const newSuggestions = getComponentSuggestions(selectedComponents)
    setSuggestions(newSuggestions)
  }, [selectedComponents])

  const handleComponentSelect = (type: ComponentType, component: Component | null) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [type]: component,
    }))
  }

  const calculateTotalPrice = () => {
    return Object.values(selectedComponents).reduce((total, component) => {
      return total + (component?.price || 0)
    }, 0)
  }

  
}

