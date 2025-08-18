"use client"

import { JSX, useEffect, useState } from "react"
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
import { useAuth } from "@/lib/auth-context"
import AuthModal from "@/components/auth-modal"

interface BuildSummaryProps {
  selectedComponents: Record<ComponentType, Component | null>
  totalPrice: number
  onRemoveComponent: (type: ComponentType, component: Component | null) => void
}

export default function BuildSummary({ selectedComponents, totalPrice, onRemoveComponent }: BuildSummaryProps) {
  const [isCopied, setIsCopied] = useState(false)
  const [buildName, setBuildName] = useState("My Gaming Rig")
  const [buildMode, setBuildMode] = useState<"custom" | "saved">("custom")
  const [savedBuilds, setSavedBuilds] = useState<any[]>([])
  const [selectedSavedBuild, setSelectedSavedBuild] = useState("")
  const [showAuthModal, setShowAuthModal] = useState(false)
  const { user } = useAuth()

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

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedBuilds") || "[]")
    setSavedBuilds(saved)
  }, [])
  
  const selectedComponentsCount = Object.values(selectedComponents).filter(Boolean).length

  const handleCopyBuild = () => {
    const buildToCopy = {
      buildName,
      selectedComponents: Object.fromEntries(
        Object.entries(selectedComponents).filter(([_, v]) => v !== null)
      ),
      totalPrice,
      timestamp: new Date().toISOString(),
    };

    const buildText = JSON.stringify(buildToCopy, null, 2);

    navigator.clipboard.writeText(buildText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleCompleteBuild = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    // Handle authenticated user's build completion
    console.log("Build completed for authenticated user:", user);
  };


  const handleSaveBuild = () => {
    const savedBuilds = JSON.parse(localStorage.getItem("savedBuilds") || "[]");

    const newBuild = {
      buildName,
      selectedComponents: Object.fromEntries(
        Object.entries(selectedComponents).filter(([_, v]) => v !== null)
      ),
      totalPrice,
      timestamp: new Date().toISOString(),
    };

    if (savedBuilds.some((b: any) => b.buildName === buildName)) {
      alert("A build with this name already exists!");
      return;
    }

    savedBuilds.push(newBuild);
    localStorage.setItem("savedBuilds", JSON.stringify(savedBuilds));
    setSavedBuilds(savedBuilds)
    alert("Build saved successfully!");
  };

  const handleSelectSavedBuild = (name: string) => {
    const selected = savedBuilds.find((b) => b.buildName === name)
    if (!selected) return

    setBuildName(selected.buildName)
    setSelectedSavedBuild(name)

    Object.keys(selectedComponents).forEach((type) =>
      onRemoveComponent(type as ComponentType, null)
    )

    Object.entries(selected.selectedComponents).forEach(([type, comp]) => {
      onRemoveComponent(type as ComponentType, comp as Component)
    })
  }

  return (
    <>
    <Card className="bg-zinc-900/50 border-zinc-800 sticky top-4">
      <CardHeader className="pb-3">
        <CardTitle className="flex justify-between items-center pb-4">
          <span>Build Summary</span>
          <Badge variant="outline" className="bg-purple-900/30 text-purple-300 border-purple-500">
            {selectedComponentsCount}/8 Parts
          </Badge>
        </CardTitle>

        <div className="mt-4 flex gap-x-4 text-sm text-white">
          <label className="flex items-center">
            <input
              type="radio"
              value="custom"
              checked={buildMode === "custom"}
              onChange={() => setBuildMode("custom")}
              className="mr-1"
            />
            Custom
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="saved"
              checked={buildMode === "saved"}
              onChange={() => setBuildMode("saved")}
              className="mr-1"
            />
            Load Saved
          </label>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4 mb-6">
          {buildMode === "custom" ? (
            <Input
              value={buildName}
              onChange={(e) => setBuildName(e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white"
              placeholder="Name your build"
            />
          ) : (
            <select
              value={selectedSavedBuild}
              onChange={(e) => handleSelectSavedBuild(e.target.value)}
              className="bg-zinc-800 text-white border border-zinc-700 p-2 rounded w-full"
            >
              <option value="">-- Select Saved Build --</option>
              {savedBuilds.map((b) => (
                <option key={b.buildName} value={b.buildName}>
                  {b.buildName}
                </option>
              ))}
            </select>
          )}

          <div className="h-[300px] overflow-y-auto pr-2 space-y-2">
            <AnimatePresence>
              {Object.entries(selectedComponents).map(([type, component]) => {
                if (!component) return null

                return (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                      <div className="flex items-center">
                        <div className="mr-3 text-purple-400">{componentIcons[type as ComponentType]}</div>
                        <div>
                          <div className="font-medium line-clamp-1">{component.name}</div>
                          <div className="text-sm text-zinc-400">${component.price.toFixed(2)}</div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-700"
                        onClick={() => onRemoveComponent(type as ComponentType, null)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>

            {selectedComponentsCount === 0 && (
              <div className="text-center py-10 text-zinc-500">
                <p>No components selected yet.</p>
                <p className="text-sm">Start by selecting parts from the tabs above.</p>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-zinc-400">Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700" 
            disabled={selectedComponentsCount === 0}
            onClick={handleCompleteBuild}
          >
            Complete Build
          </Button>

          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
              onClick={handleSaveBuild}
              disabled={selectedComponentsCount === 0 || buildMode === "saved"}
            >
              <Download className="h-4 w-4 mr-1" />
              Save
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                  disabled={selectedComponentsCount === 0}
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-zinc-900 border-zinc-700">
                <DialogHeader>
                  <DialogTitle>Share Your Build</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-zinc-400 mb-4">Copy this link to share your build with others:</p>
                  <div className="flex items-center space-x-2">
                    <Input
                      readOnly
                      value={`https://rigcrafter.com/build/${Math.random().toString(36).substring(2, 8)}`}
                      className="bg-zinc-800 border-zinc-700"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                      onClick={handleCopyBuild}
                    >
                      <Clipboard className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              variant="outline"
              className={`bg-zinc-800 border-zinc-700 hover:bg-zinc-700 ${isCopied ? "text-green-500" : ""}`}
              onClick={handleCopyBuild}
              disabled={selectedComponentsCount === 0}
            >
              {isCopied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>

    <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
  </>
  )
}

