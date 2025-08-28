"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useAuth } from "@/lib/auth-context"
import { db } from "@/lib/firebase"
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore"
import { 
  Cpu, 
  CpuIcon as Gpu, 
  MemoryStickIcon as Memory, 
  HardDrive, 
  CircuitBoardIcon as Motherboard, 
  Power, 
  Box, 
  Fan, 
  Trash2, 
  Eye,
  User,
  LogOut
} from "lucide-react"
import type { Component, ComponentType } from "@/lib/types"
import { toast } from 'react-toastify'

interface SavedBuild {
  id: string
  name: string
  components: Record<ComponentType, Component | null>
  totalPrice: number
  createdAt: Date
}

export default function UserDashboard() {
  const { user, logout } = useAuth()
  const [savedBuilds, setSavedBuilds] = useState<SavedBuild[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedBuild, setSelectedBuild] = useState<SavedBuild | null>(null)
  const [showBuildDetails, setShowBuildDetails] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (user) {
      loadSavedBuilds()
    }
  }, [user])

  const loadSavedBuilds = async () => {
    if (!user) return

    // Check if Firebase is available
    if (!db) {
      console.warn("Firebase is not available. Running in demo mode.");
      setLoading(false);
      return;
    }

    try {
      const buildsRef = collection(db, "builds")
      const q = query(buildsRef, where("userId", "==", user.uid))
      const querySnapshot = await getDocs(q)
      
      const builds: SavedBuild[] = []
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        builds.push({
          id: doc.id,
          name: data.name,
          components: data.components,
          totalPrice: data.totalPrice,
          createdAt: data.createdAt.toDate(),
        })
      })
      
      setSavedBuilds(builds)
    } catch (error) {
      console.error("Error loading builds:", error)
    } finally {
      setLoading(false)
    }
  }

  const deleteBuild = async (buildId: string) => {
    if (!db) {
      console.warn("Firebase is not available. Cannot delete build.");
      return;
    }
    
    try {
      await deleteDoc(doc(db, "builds", buildId))
      setSavedBuilds(prev => prev.filter(build => build.id !== buildId))
    } catch (error) {
      console.error("Error deleting build:", error)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      toast.success('Successfully logged out!')
      router.push("/")
    } catch (error) {
      console.error("Error logging out:", error)
      toast.error(`Logout failed: ${error.message}`)
    }
  }

  const componentIcons = {
    cpu: <Cpu className="w-4 h-4" />,
    gpu: <Gpu className="w-4 h-4" />,
    ram: <Memory className="w-4 h-4" />,
    storage: <HardDrive className="w-4 h-4" />,
    motherboard: <Motherboard className="w-4 h-4" />,
    powerSupply: <Power className="w-4 h-4" />,
    case: <Box className="w-4 h-4" />,
    cooling: <Fan className="w-4 h-4" />,
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <User className="h-8 w-8 text-purple-500" />
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
                My Dashboard
              </h1>
              <p className="text-gray-400">{user?.email}</p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-red-500/30 text-red-400 hover:bg-red-500/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Back Button */}
        <div className="mb-6">
         <Button
  onClick={() => router.push("/")}
  variant="outline"
 className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50"
>
  ← Back to Home
</Button>

 

        </div>

        {/* Saved Builds */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Saved Builds ({savedBuilds.length})</h2>
          
          {savedBuilds.length === 0 ? (
            <Card className="bg-black/50 backdrop-blur-sm border border-white/10">
              <CardContent className="p-8 text-center">
                <Cpu className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-300 mb-2">No saved builds yet</h3>
                <p className="text-gray-500">Create your first PC build and save it to see it here!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedBuilds.map((build) => (
                <motion.div
                  key={build.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-black/50 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">{build.name}</CardTitle>
                      <p className="text-sm text-gray-400">
                        Created {build.createdAt.toLocaleDateString()}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Total Price:</span>
                          <span className="text-lg font-bold text-purple-400">
                            ${build.totalPrice.toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm text-gray-400">Components:</p>
                          <div className="grid grid-cols-2 gap-2">
                            {Object.entries(build.components).map(([type, component]) => (
                              component && (
                                <div key={type} className="flex items-center space-x-2 text-xs">
                                  {componentIcons[type as ComponentType]}
                                  <span className="truncate">{component.name}</span>
                                </div>
                              )
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-2 pt-2">
                          <Button
                            onClick={() => {
                              setSelectedBuild(build)
                              setShowBuildDetails(true)
                            }}
                            size="sm"
                            className="flex-1 bg-purple-600 hover:bg-purple-700"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button
                            onClick={() => deleteBuild(build.id)}
                            size="sm"
                            variant="outline"
                            className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Build Details Modal */}
      <Dialog open={showBuildDetails} onOpenChange={setShowBuildDetails}>
        <DialogContent className="bg-black/90 backdrop-blur-xl border border-white/10 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
              {selectedBuild?.name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedBuild && (
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-lg font-semibold">Total Price:</span>
                <span className="text-2xl font-bold text-purple-400">
                  ${selectedBuild.totalPrice.toLocaleString()}
                </span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Components:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedBuild.components).map(([type, component]) => (
                    component && (
                      <div key={type} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                        {componentIcons[type as ComponentType]}
                        <div className="flex-1">
                          <p className="font-medium">{component.name}</p>
                          <p className="text-sm text-gray-400">${component.price.toLocaleString()}</p>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
              
              <div className="text-sm text-gray-400">
                Created on {selectedBuild.createdAt.toLocaleDateString()} at {selectedBuild.createdAt.toLocaleTimeString()}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
