'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  ArrowLeft, Video, Wrench, CheckCircle, AlertCircle, 
  Zap, Settings, Cpu, HardDrive, Monitor, GitBranch, 
  Wifi, Download, Shield, Clock, Calendar, User
} from "lucide-react"

export default function CableManagementGuide() {
  const tags = ["PC Building", "Cable Management", "First Boot", "Tutorial", "PC Setup"]

  return (
    <main className="min-h-screen pt-16 pb-16 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
        </motion.div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
              Assembly Guide
            </span>
            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">
              Updated for 2025
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4">Cable Management and First Boot Guide</h1>
          <p className="text-zinc-300 mb-6">
            Master the art of cable management and ensure a smooth first boot for your new PC build.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-zinc-400 text-sm">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>SamXop123</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Last updated: November 13, 2025</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none pt-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Introduction</h2>
          <p className="text-zinc-300 leading-relaxed">
            Congratulations on assembling your PC! This guide will walk you through proper cable management techniques
            and the essential steps for a successful first boot. Proper cable management provides several key benefits:
          </p>
          
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span><span className="font-medium">Improved Airflow:</span> Properly routed cables reduce obstruction to airflow, potentially lowering temperatures by 3-7°C in some cases.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span><span className="font-medium">Easier Maintenance:</span> Well-organized cables make component upgrades and cleaning significantly simpler.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span><span className="font-medium">Reduced Dust Accumulation:</span> Better airflow means less dust buildup over time.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span><span className="font-medium">Professional Appearance:</span> A clean build looks professional and shows attention to detail.</span>
            </li>
          </ul>
          

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Cable Management Essentials</h2>
          
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-green-400" />
              Cable Routing Basics
            </h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Route cables behind the motherboard tray whenever possible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Use zip ties or Velcro straps to group cables together</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Keep power cables away from data cables to reduce interference</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Leave some slack for components that might need to be removed later</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-white">Cable Management Checklist</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h4 className="font-medium text-lg mb-3 text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Power Supply Cables
              </h4>
              <ul className="space-y-2 text-zinc-300">
                <li>24-pin ATX power cable</li>
                <li>8-pin EPS/CPU power cable</li>
                <li>PCIe power cables for GPU</li>
                <li>SATA power cables for drives</li>
                <li>Molex connections (if needed)</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h4 className="font-medium text-lg mb-3 text-white flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-blue-400" />
                Data Cables
              </h4>
              <ul className="space-y-2 text-zinc-300">
                <li>SATA data cables</li>
                <li>Front panel USB headers</li>
                <li>Audio headers</li>
                <li>Fan and RGB headers</li>
                <li>Front panel connectors</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">First Boot Process</h2>
          
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-400" />
              Pre-Boot Checklist
            </h3>
            <ol className="space-y-3 text-zinc-300 list-decimal list-inside">
              <li>Double-check all power connections</li>
              <li>Ensure RAM is properly seated</li>
              <li>Verify CPU cooler is properly installed</li>
              <li>Confirm storage devices are connected</li>
              <li>Check that the GPU is fully seated</li>
              <li>Verify all case fans are connected</li>
              <li>Ensure front panel connectors are correct</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-white">Troubleshooting Common Issues</h3>
          
          <div className="space-y-4 mb-8">
            <div className="bg-red-500/10 border-l-4 border-red-500 p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-medium text-red-100">No Power</h4>
                  <ul className="mt-1 text-sm text-red-100 space-y-1">
                    <li>• Verify the PSU switch is in the "I" (on) position</li>
                    <li>• Check that the power cable is fully seated in the PSU</li>
                    <li>• Ensure the front panel power button is properly connected to the motherboard</li>
                    <li>• Test the power outlet with another device</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-medium text-yellow-100">No Display</h4>
                  <ul className="mt-1 text-sm text-yellow-100 space-y-1">
                    <li>• Ensure the monitor is powered on and set to the correct input</li>
                    <li>• Verify the GPU is fully seated in the PCIe slot</li>
                    <li>• Check that all power connectors are properly attached to the GPU</li>
                    <li>• Try a different display cable and port (HDMI/DisplayPort)</li>
                    <li>• Test with integrated graphics if available (remove GPU first)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-medium text-blue-100">Boot Issues</h4>
                  <ul className="mt-1 text-sm text-blue-100 space-y-1">
                    <li>• Ensure the boot drive is properly connected and detected in BIOS</li>
                    <li>• Check the boot order in BIOS settings</li>
                    <li>• Verify the bootable USB is properly created (try recreating it)</li>
                    <li>• Reset BIOS to default settings if experiencing instability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">BIOS Setup</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            After successful POST, you'll need to configure your BIOS settings. Here are the key settings to check:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h4 className="font-medium text-lg mb-3 text-white">Essential BIOS Settings</h4>
              <ul className="space-y-2 text-zinc-300">
                <li>Enable XMP/DOCP for RAM</li>
                <li>Set boot priority</li>
                <li>Enable TPM (for Windows 11)</li>
                <li>Configure fan curves</li>
                <li>Enable Secure Boot</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h4 className="font-medium text-lg mb-3 text-white">Performance Settings</h4>
              <ul className="space-y-2 text-zinc-300">
                <li>Enable Resizable BAR (if supported)</li>
                <li>Configure CPU power limits</li>
                <li>Set PCIe generation</li>
                <li>Enable virtualization (if needed)</li>
                <li>Update BIOS if needed</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Operating System Installation</h2>
          
          <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 mb-8">
            <div className="flex">
              <div className="h-5 w-5 text-blue-400 flex-shrink-0">i</div>
              <div className="ml-3">
                <p className="text-sm text-blue-100">Have your Windows license key and a USB drive (16GB+) ready before starting the installation process.</p>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <ol className="space-y-4 text-zinc-300">
              <li>
                <span className="font-medium text-white">Create a bootable USB:</span> Use the official Windows Media Creation Tool or Rufus to create a bootable USB drive.
              </li>
              <li>
                <span className="font-medium text-white">Boot from USB:</span> Restart your PC and enter the boot menu (usually F12, F11, or DEL) to select your USB drive.
              </li>
              <li>
                <span className="font-medium text-white">Install Windows:</span> Follow the on-screen instructions, selecting your SSD/HDD as the installation location.
              </li>
              <li>
                <span className="font-medium text-white">Complete setup:</span> After installation, complete the Windows setup process and connect to your network.
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Post-Installation Setup</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h4 className="font-medium text-lg mb-3 text-white flex items-center gap-2">
                <Download className="w-5 h-5 text-green-400" />
                Essential Software
              </h4>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span><span className="font-medium">GPU Drivers:</span> Download directly from NVIDIA/AMD/Intel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span><span className="font-medium">Chipset Drivers:</span> Essential for motherboard functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span><span className="font-medium">Audio Drivers:</span> For proper sound output</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span><span className="font-medium">Network Drivers:</span> Wired and wireless connectivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span><span className="font-medium">Peripheral Software:</span> For keyboards, mice, and other devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span><span className="font-medium">System Monitoring:</span> HWMonitor, CPU-Z, or HWiNFO</span>
                </li>
              </ul>
              
              <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg">
                <p className="text-xs text-zinc-400">💡 <span className="font-medium">Tip:</span> Download drivers directly from manufacturer websites rather than using third-party tools to ensure you get the latest, most stable versions.</p>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h4 className="font-medium text-lg mb-3 text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                System Security
              </h4>
              <ul className="space-y-2 text-zinc-300">
                <li>Enable Windows Defender</li>
                <li>Set up Windows Hello</li>
                <li>Configure backup solutions</li>
                <li>Install system monitoring tools</li>
                <li>Set up a password manager</li>
              </ul>
            </div>
          </div>


          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Helpful Video Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-black">
                  <iframe 
                    className="w-full h-full" 
                    src="https://www.youtube.com/embed/AIP4fYNjnF4" 
                    title="A Beginners Guide to PC Cables & Wiring"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-white mb-2">PC Cables & Wiring Guide</h3>
                  <p className="text-sm text-zinc-400">Learn about all the different cables in your PC and where they go.</p>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-black">
                  <iframe 
                    className="w-full h-full" 
                    src="https://www.youtube.com/embed/IWYLdQDwYZM" 
                    title="10 Cable Management Tips & Tricks"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-white mb-2">10 Cable Management Tips</h3>
                  <p className="text-sm text-zinc-400">Professional techniques for perfect cable management.</p>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-black">
                  <iframe 
                    className="w-full h-full" 
                    src="https://www.youtube.com/embed/LVV_mihEh6g" 
                    title="What To Do AFTER Building a Gaming PC"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-white mb-2">Post-Build Setup Guide</h3>
                  <p className="text-sm text-zinc-400">Complete walkthrough of BIOS setup and software installation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
