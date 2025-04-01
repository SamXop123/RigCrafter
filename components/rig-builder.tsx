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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Build Your Gaming PC</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 overflow-x-auto">
              <div className="flex space-x-2 min-w-max">
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
                    {selectedComponents[tab.type] && <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>}
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
    </section>
  )
}

