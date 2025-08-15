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
import { toast } from "sonner";
// Import Dialog components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


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
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

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
        return sortOrder === "desc" ? a.rating - b.rating : b.rating - a.rating
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

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
          <Input
            type="text"
            placeholder={`Search ${getTypeLabel(type)}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-zinc-900 border-zinc-700"
          />
        </div>
        <div className="flex gap-2">
          <select
            className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2 text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "price" | "rating" | "name")}
          >
            <option value="rating">Sort by Rating</option>
            <option value="price">Sort by Price</option>
            <option value="name">Sort by Name</option>
          </select>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="bg-zinc-900 border-zinc-700"
          >
            {sortBy === "rating"
              ? (sortOrder === "asc" ? "↓" : "↑")
              : (sortOrder === "asc" ? "↑" : "↓")}
          </Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => {
                  const validComponents = filteredComponents.filter(
                    (c) => !c.tags.includes("unsupported") && c.rating > 2
                  );

                  if (validComponents.length === 0) return;
                  const randomIndex = Math.floor(Math.random() * validComponents.length);
                  const randomComponent = validComponents[randomIndex];
                  onSelect(randomComponent);
                  toast.success(`🎉 You got: ${randomComponent.name}`);
                }}
                disabled={filteredComponents.length === 0}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
              >
                🎲 Surprise Me!
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Feeling Lucky?</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </div>
      </div>

      {suggestions.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-purple-400">Recommended for your build</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestions.slice(0, 2).map((component) => (
              <ComponentCard
                key={component.id}
                component={component}
                isSelected={selectedComponent?.id === component.id}
                onSelect={onSelect}
                isSuggested={true}
              />
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredComponents.map((component) => (
          <ComponentCard
            key={component.id}
            component={component}
            isSelected={selectedComponent?.id === component.id}
            onSelect={onSelect}
            isSuggested={isSuggested(component)}
          />
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center py-10 text-zinc-400">
          <p>No components found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}

interface ComponentCardProps {
  component: Component
  isSelected: boolean
  onSelect: (component: Component | null) => void
  isSuggested: boolean
}

function ComponentCard({ component, isSelected, onSelect, isSuggested }: ComponentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`overflow-hidden transition-colors ${
          isSelected
            ? "bg-purple-900/30 border-purple-500"
            : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Info className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-zinc-700 text-white sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-purple-400 text-xl">{component.name}</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col gap-4">
                    {component.imageUrl && (
                        <div className="flex justify-center my-4">
                           {/* THIS IS THE CORRECTED LINE */}
                           <img src={component.imageUrl} alt={component.name} className="rounded-lg h-48 w-48 object-contain" />
                        </div>
                    )}
                    <p className="text-sm text-zinc-400">{component.description}</p>
                    <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      {Object.entries(component.specs).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-zinc-500 font-medium">{key}</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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