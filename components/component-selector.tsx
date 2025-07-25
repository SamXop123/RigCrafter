"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Component {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

const components: Component[] = [
  {
    id: 1,
    name: "Ryzen 9 7950X",
    description: "16-Core, 32-Thread Unlocked Desktop Processor",
    price: 699,
    image: "/images/ryzen9.png",
    tags: ["AM5", "16-Core", "Unlocked"],
  },
  {
    id: 2,
    name: "Intel Core i9-13900K",
    description: "24-Core (8P+16E), Unlocked Desktop Processor",
    price: 589,
    image: "/images/i9.png",
    tags: ["LGA1700", "24-Core", "Unlocked"],
  },
  {
    id: 3,
    name: "NVIDIA RTX 4090",
    description: "24GB GDDR6X, DLSS 3, Ray Tracing",
    price: 1599,
    image: "/images/rtx4090.png",
    tags: ["24GB", "DLSS 3", "Ray Tracing"],
  },
];

const ComponentCard = ({
  component,
  isSelected,
  onClick,
}: {
  component: Component;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        onClick={onClick}
        className={`cursor-pointer transition-transform rounded-2xl border-2 p-4 relative overflow-hidden
          ${
            isSelected
              ? "border-transparent bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 shadow-lg"
              : "border-zinc-800 hover:border-purple-500"
          }`}
      >
        <div className="relative w-full h-40 mb-4 bg-zinc-900 rounded-lg flex items-center justify-center">
          <img
            src={component.image}
            alt={component.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <h3 className="text-lg font-bold text-white">{component.name}</h3>
        <p className="text-sm text-zinc-400">{component.description}</p>
        <p className="text-md font-semibold text-purple-400 mt-2">
          ${component.price}
        </p>
        <div className="flex gap-1 mt-2 flex-wrap">
          {component.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs text-zinc-300"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

const ComponentSelector = () => {
  const [selectedComponentId, setSelectedComponentId] = useState<number | null>(
    null
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Select Your Component</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {components.map((component) => (
          <ComponentCard
            key={component.id}
            component={component}
            isSelected={component.id === selectedComponentId}
            onClick={() =>
              setSelectedComponentId(
                component.id === selectedComponentId ? null : component.id
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentSelector;



