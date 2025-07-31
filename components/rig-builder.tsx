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
  Shuffle,
  Zap,
} from "lucide-react"
import type { Component, ComponentType } from "@/lib/types"
import { getCompatibilityIssues } from "@/lib/compatibility"
import { getComponentSuggestions } from "@/lib/suggestions"
import { randomizeCompatibleRig, randomizeByBudget } from "@/lib/randomizer"

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
  const [isRandomizing, setIsRandomizing] = useState(false)

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

  const handleRandomizeRig = async () => {
    setIsRandomizing(true)

    // Add a small delay for visual feedback
    await new Promise((resolve) => setTimeout(resolve, 500))

    const randomBuild = randomizeCompatibleRig()
    setSelectedComponents(randomBuild)

    setIsRandomizing(false)
  }

  const handleRandomizeByBudget = async (budget: number) => {
    setIsRandomizing(true)

    await new Promise((resolve) => setTimeout(resolve, 500))

    const randomBuild = randomizeByBudget(budget)
    setSelectedComponents(randomBuild)

    setIsRandomizing(false)
  }

  const calculateTotalPrice = () => {
    return Object.values(selectedComponents).reduce((total, component) => {
      return total + (component?.price || 0)
    }, 0)
  }

  const componentTabs = [
    { type: "cpu" as ComponentType, icon: <Cpu className="w-5 h-5" />, label: "CPU" },
    { type: "gpu" as ComponentType, icon: <Gpu className="w-5 h-5" />, label: "GPU" },
    { type: "ram" as ComponentType, icon: <Memory className="w-5 h-5" />, label: "RAM" },
    { type: "storage" as ComponentType, icon: <HardDrive className="w-5 h-5" />, label: "Storage" },
    { type: "motherboard" as ComponentType, icon: <Motherboard className="w-5 h-5" />, label: "Motherboard" },
    { type: "powerSupply" as ComponentType, icon: <Power className="w-5 h-5" />, label: "Power Supply" },
    { type: "case" as ComponentType, icon: <Box className="w-5 h-5" />, label: "Case" },
    { type: "cooling" as ComponentType, icon: <Fan className="w-5 h-5" />, label: "Cooling" },
  ]

  return (
    <section id="builder" className="py-16 relative">
   <>
  <style jsx>{`
    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `}</style>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="relative rounded-2xl p-6 md:p-8 overflow-visible"
    style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: `
  -20px -20px 100px rgba(128, 0, 128, 0.4),       /* Purple */
  30px -10px 100px rgba(255, 182, 193, 0.2),      /* Light Pink */
  0 0 300px rgba(255, 255, 255, 0.15)            /* White glow */
`

    }}
  >
    <div
      className="absolute inset-0 -z-10 rounded-2xl opacity-30"
      style={{
        background: `linear-gradient(135deg, #800080, #000000)`,

        backgroundSize: '400% 400%',
        animation: 'gradientShift 10s ease infinite'
      }}
    />

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Build Your Gaming PC</h2>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={handleRandomizeRig}
              disabled={isRandomizing}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium"
            >
              {isRandomizing ? (
                <Zap className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Shuffle className="w-4 h-4 mr-2" />
              )}
              {isRandomizing ? "Randomizing..." : "Randomize Build"}
            </Button>

            <div className="flex gap-1">
              <Button
                onClick={() => handleRandomizeByBudget(1000)}
                disabled={isRandomizing}
                variant="outline"
                size="sm"
                className="hover:bg-zinc-800"
              >
                Budget $1K
              </Button>
              <Button
                onClick={() => handleRandomizeByBudget(2000)}
                disabled={isRandomizing}
                variant="outline"
                size="sm"
                className="hover:bg-zinc-800"
              >
                Mid $2K
              </Button>
              <Button
                onClick={() => handleRandomizeByBudget(3000)}
                disabled={isRandomizing}
                variant="outline"
                size="sm"
                className="hover:bg-zinc-800"
              >
                High-End $3K
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            
  
            <div
  className="mb-6 overflow-x-auto scrollbar-hide"
  style={{
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE 10+
  }}
>
              <div className="flex space-x-2 w-max">
    {componentTabs.map((tab) => (
      <Button
        key={tab.type}
        variant={activeTab === tab.type ? "default" : "outline"}
        className={`flex items-center ${
          activeTab === tab.type ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-zinc-800"
        }`}
        onClick={() => setActiveTab(tab.type)}
      >
        {tab.icon}
        <span className="ml-2">{tab.label}</span>
        {selectedComponents[tab.type] && (
          <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
        )}
      </Button>
    ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <ComponentSelector
                  type={activeTab}
                  selectedComponent={selectedComponents[activeTab]}
                  onSelect={(component) => handleComponentSelect(activeTab, component)}
                  suggestions={suggestions[activeTab]}
                />
              </motion.div>
            </AnimatePresence>

            <CompatibilityChecker issues={compatibilityIssues} />
          </div>

          <div>
            <BuildSummary
              selectedComponents={selectedComponents}
              totalPrice={calculateTotalPrice()}
              onRemoveComponent={handleComponentSelect}
            />
          </div>
        </div>
      </motion.div>
      </>
    </section>
  )
}

