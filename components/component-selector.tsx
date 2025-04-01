"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Star, Search, Info, Check } from "lucide-react"
import type { Component, ComponentType } from "@/lib/types"
import { getComponents } from "@/lib/data"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ComponentSelectorProps {
  type: ComponentType
  selectedComponent: Component | null
  onSelect: (component: Component | null) => void
  suggestions: Component[]
}

export default function ComponentSelector({ type, selectedComponent, onSelect, suggestions }: ComponentSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceFilter, setPriceFilter] = useState<[number, number]>([0, 2000])
  const [sortBy, setSortBy] = useState<"price" | "rating" | "name">("rating")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const components = getComponents(type)

  const filteredComponents = components
    .filter((component) => {
      const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPrice = component.price >= priceFilter[0] && component.price <= priceFilter[1]
      return matchesSearch && matchesPrice
    })
    .sort((a, b) => {
      if (sortBy === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price
      } else if (sortBy === "rating") {
        return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating
      } else {
        return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      }
    })

  const isSuggested = (component: Component) => {
    return suggestions.some((suggestion) => suggestion.id === component.id)
  }

  const getTypeLabel = (type: ComponentType) => {
    const labels: Record<ComponentType, string> = {
      cpu: "CPU",
      gpu: "GPU",
      ram: "RAM",
      storage: "Storage",
      motherboard: "Motherboard",
      powerSupply: "Power Supply",
      case: "Case",
      cooling: "Cooling",
    }
    return labels[type]
  }

  
}

interface ComponentCardProps {
  component: Component
  isSelected: boolean
  onSelect: (component: Component | null) => void
  isSuggested: boolean
}

function ComponentCard({ component, isSelected, onSelect, isSuggested }: ComponentCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      <Card
        className={`overflow-hidden transition-colors ${
          isSelected ? "bg-purple-900/30 border-purple-500" : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
        }`}
      >
        <CardContent className="p-0">
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg line-clamp-1">{component.name}</h3>
              <div className="flex items-center">
                <span className="text-yellow-400 flex items-center mr-2">
                  <Star className="w-4 h-4 fill-yellow-400 mr-1" />
                  {component.rating.toFixed(1)}
                </span>
                {isSuggested && <Badge className="bg-purple-600 hover:bg-purple-700">Recommended</Badge>}
              </div>
            </div>

            <div className="flex justify-between items-center mb-3">
              <span className="text-2xl font-bold">${component.price.toFixed(2)}</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="max-w-xs">
                      <p className="font-semibold mb-1">{component.name}</p>
                      <p className="text-sm text-zinc-400">{component.description}</p>
                      <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                        {Object.entries(component.specs).map(([key, value]) => (
                          <div key={key}>
                            <span className="text-zinc-500">{key}: </span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {component.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-zinc-800 text-zinc-300">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button
              className={`w-full ${
                isSelected ? "bg-purple-700 hover:bg-purple-800" : "bg-purple-600 hover:bg-purple-700"
              }`}
              onClick={() => onSelect(isSelected ? null : component)}
            >
              {isSelected ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> Selected
                </>
              ) : (
                "Select"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

