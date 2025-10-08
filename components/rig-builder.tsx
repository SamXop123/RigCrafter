"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ComponentSelector from "./component-selector"
import BuildSummary from "./build-summary"
import CompatibilityChecker from "./compatibility-checker"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useAuth } from "@/lib/auth-context"
import { db } from "@/lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { toast } from 'react-toastify'

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
  

  Save,
    ChevronLeft,
  ChevronRight,
} from "lucide-react"
import type { Component, ComponentType } from "@/lib/types"
import { getCompatibilityIssues } from "@/lib/compatibility"
import { getComponentSuggestions } from "@/lib/suggestions"
import { randomizeCompatibleRig, randomizeByBudget } from "@/lib/randomizer"

export default function RigBuilder() {
  const [selectedComponents, setSelectedComponents] = useState<
    Record<ComponentType, Component | null>
  >({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    motherboard: null,
    powerSupply: null,
    case: null,
    cooling: null,
    keyboard: null,
    mouse: null,
    headset: null,
    operatingSystem: null,
    networkCard: null,
    soundCard: null,
    fan: null,
    thermalPaste: null,
    ups: null,
    controller: null,
  });


  const [compatibilityIssues, setCompatibilityIssues] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<
    Record<ComponentType, Component[]>
  >({
    cpu: [],
    gpu: [],
    ram: [],
    storage: [],
    motherboard: [],
    powerSupply: [],
    case: [],
    cooling: [],
    keyboard: [],
    mouse: [],
    headset: [],
    operatingSystem: [],
    networkCard: [],
    soundCard: [],
    fan: [],
    thermalPaste: [],
    ups: [],
    controller: [],
  });


  const [activeTab, setActiveTab] = useState<ComponentType>("cpu")
  const [isRandomizing, setIsRandomizing] = useState(false)
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [buildName, setBuildName] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const { user } = useAuth()
    
  // For popup message
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  useEffect(() => {
    const issues = getCompatibilityIssues(selectedComponents);
    setCompatibilityIssues(issues);

    const newSuggestions = getComponentSuggestions(selectedComponents);
    setSuggestions(newSuggestions);
  }, [selectedComponents]);

  const handleComponentSelect = (
    type: ComponentType,
    component: Component | null
  ) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [type]: component,
    }));
  };

  const handleRandomizeRig = async () => {
    setIsRandomizing(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const randomBuild = randomizeCompatibleRig();
    setSelectedComponents(randomBuild);

    setIsRandomizing(false);
    toast.success("Build randomized successfully!");
  };

  const handleRandomizeByBudget = async (budget: number) => {
    setIsRandomizing(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const { build, message } = randomizeByBudget(budget);
    setSelectedComponents(build);

    if (message) {
      setPopupMessage(message);
      setTimeout(() => setPopupMessage(null), 3000);
    }

    setIsRandomizing(false);
    toast.success(`Build randomized for $${budget} budget!`);
  };

  const handleSaveBuild = async () => {
    if (!user) {
      toast.error("Please sign in to save your build")
      return
    }

    if (!buildName.trim()) {
      toast.error("Please enter a name for your build")
      return
    }

    // Check if Firebase is available
    if (!db) {
      toast.error("Firebase is not available. Cannot save build.")
      return
    }

    setIsSaving(true)
    try {
      await addDoc(collection(db, "builds"), {
        userId: user.uid,
        name: buildName.trim(),
        components: selectedComponents,
        totalPrice: calculateTotalPrice(),
        createdAt: serverTimestamp(),
      })
      
      setBuildName("")
      setShowSaveDialog(false)
      toast.success("Build saved successfully!")
    } catch (error) {
      console.error("Error saving build:", error)
      toast.error("Failed to save build. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

  const calculateTotalPrice = () => {
    return Object.values(selectedComponents).reduce((total, component) => {
      return total + (component?.price || 0);
    }, 0);
  };

  const componentTabs = [
    {
      type: "cpu" as ComponentType,
      icon: <Cpu className="w-5 h-5" />,
      label: "CPU",
    },
    {
      type: "gpu" as ComponentType,
      icon: <Gpu className="w-5 h-5" />,
      label: "GPU",
    },
    {
      type: "ram" as ComponentType,
      icon: <Memory className="w-5 h-5" />,
      label: "RAM",
    },
    {
      type: "storage" as ComponentType,
      icon: <HardDrive className="w-5 h-5" />,
      label: "Storage",
    },
    {
      type: "motherboard" as ComponentType,
      icon: <Motherboard className="w-5 h-5" />,
      label: "Motherboard",
    },
    {
      type: "powerSupply" as ComponentType,
      icon: <Power className="w-5 h-5" />,
      label: "Power Supply",
    },
    {
      type: "case" as ComponentType,
      icon: <Box className="w-5 h-5" />,
      label: "Case",
    },
    {
      type: "cooling" as ComponentType,
      icon: <Fan className="w-5 h-5" />,
      label: "Cooling",
    },
    {
      type: "keyboard" as ComponentType,
      icon: <Cpu className="w-5 h-5" />,
      label: "Keyboard",
    },
    {
      type: "mouse" as ComponentType,
      icon: <Cpu className="w-5 h-5" />,
      label: "Mouse",
    },
    {
      type: "headset" as ComponentType,
      icon: <Cpu className="w-5 h-5" />,
      label: "Headset",
    },
    {
      type: "operatingSystem" as ComponentType,
      icon: <Cpu className="w-5 h-5" />,
      label: "OS",
    },
    {
      type: "networkCard" as ComponentType,
      icon: <Cpu className="w-5 h-5" />,
      label: "Network Card",
    },
    {
      type: "soundCard" as ComponentType,
      icon: <Cpu className="w-5 h-5" />,
      label: "Sound Card",
    },
    {
      type: "fan" as ComponentType,
      icon: <Fan className="w-5 h-5" />,
      label: "Fan",
    },
    {
      type: "thermalPaste" as ComponentType,
      icon: <Cpu className="w-5 h-5" />,
      label: "Thermal Paste",
    },
    {
      type: "ups" as ComponentType,
      icon: <Cpu className="w-5 h-5" />,
      label: "UPS",
    },
    {
      type: "controller" as ComponentType,
      icon: <Cpu className="w-5 h-5" />,
      label: "Controller",
    },
  ];


  return (
    <section id="builder" className="relative z-10 py-16">

  <div className="absolute inset-0 -z-10 flex justify-center items-center">
    <div className="w-full max-w-7xl h-full rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-[70px] opacity-35 scale-[1.04]"></div>
  </div>
      {/* Popup Toast */}
      <AnimatePresence>
        {popupMessage && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 right-5 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-50"
          >
            {popupMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
            Build Your Gaming PC
          </h2>

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

            {user && (
              <Button
                onClick={() => setShowSaveDialog(true)}
                className="bg-green-600 hover:bg-green-700 text-white font-medium"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Build
              </Button>
            )}

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
            {/* Scroll Navigation Container */}
            <div className="mb-6 relative">
              <div className="flex items-center">
                {/* Left Scroll Button - Hidden on desktop (≥1024px) */}
                <Button
                  variant="ghost"
                  size="default"
                  className="lg:hidden bg-purple-600 hover:bg-purple-700 border-none text-white shadow-lg px-3 rounded-lg mr-2 h-10"
                  onClick={() => {
                    const container = document.getElementById('component-tabs');
                    if (container) {
                      container.scrollBy({ left: -200, behavior: 'smooth' });
                    }
                  }}
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </Button>

                {/* Original tabs container structure */}
                <div id="component-tabs" className="overflow-x-auto flex-1 component-tabs-scroll">
                  <div className="flex space-x-2 min-w-max">
                    {componentTabs.map((tab) => (
                      <Button
                        key={tab.type}
                        variant={activeTab === tab.type ? "default" : "outline"}
                        className={`flex items-center ${
                          activeTab === tab.type
                            ? "bg-purple-600 hover:bg-purple-700"
                            : "hover:bg-zinc-800"
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

                {/* Right Scroll Button - Hidden on desktop (≥1024px) */}
                <Button
                  variant="ghost"
                  size="default"
                  className="lg:hidden bg-purple-600 hover:bg-purple-700 border-none text-white shadow-lg px-3 rounded-lg ml-2 h-10"
                  onClick={() => {
                    const container = document.getElementById('component-tabs');
                    if (container) {
                      container.scrollBy({ left: 200, behavior: 'smooth' });
                    }
                  }}
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </Button>
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
                  onSelect={(component) =>
                    handleComponentSelect(activeTab, component)
                  }
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

      {/* Save Build Dialog */}
      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent className="bg-black/90 backdrop-blur-xl border border-white/10 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
              Save Your Build
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="buildName" className="text-sm font-medium text-gray-300">
                Build Name
              </Label>
              <Input
                id="buildName"
                value={buildName}
                onChange={(e) => setBuildName(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-purple-500"
                placeholder="Enter a name for your build"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSaveBuild()
                  }
                }}
              />
            </div>

            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-gray-300">Total Price:</span>
              <span className="text-lg font-bold text-purple-400">
                ${calculateTotalPrice().toLocaleString()}
              </span>
            </div>

            <div className="flex space-x-2">
              <Button
                onClick={handleSaveBuild}
                disabled={isSaving || !buildName.trim()}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium"
              >
                {isSaving ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Saving...
                  </div>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Build
                  </>
                )}
              </Button>
              <Button
                onClick={() => setShowSaveDialog(false)}
                variant="outline"
                className="border-white/10 text-white hover:bg-white/5"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
