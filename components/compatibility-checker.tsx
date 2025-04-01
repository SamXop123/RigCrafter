"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CompatibilityCheckerProps {
  issues: string[]
}

export default function CompatibilityChecker({ issues }: CompatibilityCheckerProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  if (issues.length === 0) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
        <Alert className="bg-green-900/20 border-green-500 text-green-400">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>All components are compatible</AlertTitle>
          <AlertDescription>Your selected components work well together. You're good to go!</AlertDescription>
        </Alert>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
      <Alert className="bg-red-900/20 border-red-500 text-red-400">
        <div className="flex justify-between w-full">
          <div className="flex">
            <AlertCircle className="h-4 w-4 mr-2" />
            <div>
              <AlertTitle>Compatibility Issues Detected</AlertTitle>
              <Button
                variant="link"
                className="p-0 h-auto text-red-400 hover:text-red-300"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Hide details" : "Show details"}
                {isExpanded ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
              </Button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AlertDescription className="mt-2">
                <ul className="list-disc pl-5 space-y-1">
                  {issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </AlertDescription>
            </motion.div>
          )}
        </AnimatePresence>
      </Alert>
    </motion.div>
  )
}

