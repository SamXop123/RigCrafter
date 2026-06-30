'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Layers, Info, CheckCircle2,
  Settings, Box
} from "lucide-react"

export default function DualBootSetupGuide() {
  const tags = ["PC Building", "Software Setup", "Linux", "Dual Boot", "Operating Systems"]

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
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

        {/* Hero Card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-500/30">
                Software Blueprint
              </span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                Advanced Difficulty
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dual Boot Setup: Windows and Linux
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl">
              Set up a dual boot system with Windows and your favorite Linux distribution. Master partition resizing, UEFI boot configurations, GRUB customization, and hardware clock synchronization.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Monitor className="w-5 h-5 text-indigo-400" />
                <span>Multi-OS Management</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Wrench className="w-5 h-5 text-purple-400" />
                <span>Custom Partition Resizing</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Shield className="w-5 h-5 text-pink-400" />
                <span>Secure Boot & BitLocker Handling</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            SamXop123
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            July 1, 2026
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            21 min read
          </div>
          <div className="flex items-center gap-1">
            <Settings className="w-4 h-4" />
            OS Administration
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/10 hover:border-indigo-500/50 transition-colors"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Table of Contents */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            📋 Table of Contents
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { text: "1. Why Dual Boot? Trade-offs & Alternatives", href: "#why-dualboot" },
              { text: "2. Crucial Pre-Build Precautions (BitLocker)", href: "#precautions" },
              { text: "3. Step 1: Resizing Windows Disk Partitions", href: "#disk-shrink" },
              { text: "4. Step 2: Preparing UEFI Flash Installation Media", href: "#flash-prep" },
              { text: "5. Step 3: UEFI BIOS Setup (Secure Boot)", href: "#bios-config" },
              { text: "6. Step 4: The Linux Installation & GRUB Setup", href: "#install-grub" },
              { text: "7. Step 5: Fixing Windows & Linux UTC Time Mismatch", href: "#clock-fix" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-2 text-zinc-300 hover:text-indigo-400 transition-all duration-300 p-2 rounded hover:bg-white/5"
              >
                <CheckCircle className="w-4 h-4 text-indigo-500" />
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <article className="space-y-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Dual booting allows you to run two separate operating systems (such as Windows 11 and Linux Ubuntu) on the same computer, selecting which one to boot into on startup. Unlike virtual machines, dual booting gives both operating systems direct, native access to your hardware, which is critical for PC gaming, video rendering, and machine learning workloads.
            </p>
            <p className="text-zinc-300 leading-relaxed font-light">
              This guide provides a detailed walkthrough to configure a dual boot system safely, preventing partition loss, bootloader overrides, or hardware synchronization issues.
            </p>
          </div>

          {/* Section 1 */}
          <div id="why-dualboot" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Monitor className="w-7 h-7 text-indigo-400" />
              1. Why Dual Boot? Trade-offs & Alternatives
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Dual booting is ideal when you need the specialized gaming environment of Windows alongside the developer-friendly ecosystem of Linux. However, it requires sharing resources:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-300">
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-indigo-400 block text-sm">Native Dual Booting</span>
                <ul className="space-y-1 text-xs text-zinc-400">
                  <li>• **Direct Hardware Access:** Unlocked GPU power and memory.</li>
                  <li>• **Isolated Environments:** System issues in one OS do not affect the other.</li>
                  <li>• **Complexity:** Requires partitioning and manual boot management.</li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-purple-400 block text-sm">Virtual Alternatives (WSL2 / VM)</span>
                <ul className="space-y-1 text-xs text-zinc-400">
                  <li>• **Easy Integration:** Run Linux shells directly inside Windows.</li>
                  <li>• **No Partitioning:** Safe from disk errors.</li>
                  <li>• **Reduced Speed:** Emulated GPU and virtualized RAM overhead.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="precautions" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Shield className="w-7 h-7 text-pink-400" />
              2. Crucial Pre-Build Precautions (BitLocker)
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Modifying storage drives can trigger security filters or cause boot errors. Take these precautions before configuring your system:
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-pink-500/30">
                <AlertTriangle className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white text-sm">Suspend BitLocker Encryption</span>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    If Windows Device Encryption or BitLocker is enabled on your C: drive, the bootloader changes will flag a security breach on startup, locking you out until you enter a recovery key. Type "BitLocker" in Windows Search, open settings, and click **Suspend Protection** before starting.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-white/10">
                <Info className="w-6 h-6 text-zinc-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white text-sm">Disable Fast Startup</span>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Windows Fast Startup does not fully shut down your PC; it hibernates the kernel to boot faster. This leaves the storage drive in a "locked" state, preventing Linux from mounting or reading your Windows partition. Disable it in: Control Panel → Power Options → Choose what the power buttons do.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="disk-shrink" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Wrench className="w-7 h-7 text-purple-400" />
              3. Step 1: Resizing Windows Disk Partitions
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              We must carve out a chunk of storage space from our Windows partition. This creates **Unallocated Space** where the Linux OS can be installed.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <div className="relative border-l-2 border-purple-500 pl-6 space-y-4">
                <div>
                  <span className="font-semibold block text-white">Step 1: Open Disk Management</span>
                  <p className="text-xs text-zinc-400">Right-click the Windows Start Button and select **Disk Management** (or type `diskmgmt.msc` in Run).</p>
                </div>
                <div>
                  <span className="font-semibold block text-white">Step 2: Shrink the C: Volume</span>
                  <p className="text-xs text-zinc-400">Right-click your main Windows partition (usually `OS (C:)`) and select **Shrink Volume**.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white">Step 3: Define Allocation Size</span>
                  <p className="text-xs text-zinc-400">Input the amount of space to shrink in MB. We recommend allocating at least **50,000 MB** (approx. 50GB) for Linux. Click **Shrink**. You will now see a black bar labeled **Unallocated** at the end of your drive chart. Leave it unallocated.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="flash-prep" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Package className="w-7 h-7 text-indigo-400" />
              4. Step 2: Preparing UEFI Flash Installation Media
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Next, prepare a bootable USB flash drive loaded with your chosen Linux distribution (e.g., Ubuntu Desktop):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm font-light font-sans">
              <li>
                <strong>Download ISO:</strong> Grab the latest LTS ISO file directly from the official Linux distribution homepage (e.g., ubuntu.com).
              </li>
              <li>
                <strong>Flash utility:</strong> Download **Rufus** (rufus.ie) or BalenaEtcher.
              </li>
              <li>
                <strong>Configure Rufus:</strong> Plug in an empty 8GB+ USB flash drive. Open Rufus, select your USB drive, select the Linux ISO, and set the Partition Scheme to **GPT** and Target System to **UEFI (non CSM)**. Click **Start** to flash the drive.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div id="bios-config" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-blue-400" />
              5. Step 3: UEFI BIOS Setup (Secure Boot)
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              To boot from the USB drive and install Linux alongside Windows, configure your BIOS/UEFI settings:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 space-y-3 text-sm">
              <p className="text-zinc-300">
                • <strong>Enter BIOS:</strong> Restart your PC and repeatedly tap **Delete** or **F2** to enter your motherboard's UEFI BIOS setup.
              </p>
              <p className="text-zinc-300">
                • <strong>Disable Secure Boot:</strong> Navigate to the Security or Boot tab. Set **Secure Boot** to **Disabled**. This prevents bootloader validation checks from blocking third-party drivers (like Nvidia graphic card drivers) in Linux.
              </p>
              <p className="text-zinc-300">
                • <strong>Set Boot Order:</strong> Position your flashed UEFI USB drive as Boot Option #1. Save settings and exit BIOS.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div id="install-grub" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-purple-400" />
              6. Step 4: The Linux Installation & GRUB Setup
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              When your PC boots from the USB drive, select "Try or Install Ubuntu". Double-click "Install Ubuntu" on the desktop:
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <h3 className="font-bold text-white">Configuring Installation Type</h3>
              <p className="text-zinc-300">
                The most critical phase of the installation is choosing the partition target:
              </p>
              <div className="bg-black/40 p-4 rounded border-l-4 border-emerald-500">
                <span className="font-bold text-emerald-400 block mb-1">Option A: Install Alongside Windows (Recommended)</span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  The installer automatically detects the Windows Boot Manager and the unallocated space we created. It installs Linux safely into the unallocated space, leaving your Windows files untouched.
                </p>
              </div>
              <div className="bg-black/40 p-4 rounded border-l-4 border-purple-500">
                <span className="font-bold text-purple-400 block mb-1">Option B: Manual Partitioning ("Something Else")</span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Allows custom partitioning (creating separate root `/`, `/home`, and `swap` partition sectors). Ensure the **Bootloader Installation Device** dropdown is set to point to your existing EFI System Partition (do NOT format it, just select it so GRUB adds its boot node).
                </p>
              </div>
              <p className="text-zinc-300 pt-2">
                Complete the configuration (username, timezone, password) and click **Install**. Once finished, remove the USB drive and restart. Your PC will boot into the **GNU GRUB Menu**, allowing you to choose between Linux and the Windows Boot Manager.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div id="clock-fix" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-indigo-400" />
              7. Step 5: Fixing Windows & Linux UTC Time Mismatch
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              After setting up a dual boot, you will notice that switching back to Windows causes your system clock to be off by several hours.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-3">
              <h4 className="font-bold text-white">Why this happens:</h4>
              <p className="text-zinc-300 leading-relaxed">
                Windows stores local time in the motherboard's hardware clock, whereas Linux stores Coordinated Universal Time (UTC) and applies your timezone offset in software. 
              </p>
              <h4 className="font-bold text-white pt-2">The Fix (Run in Linux Terminal):</h4>
              <p className="text-zinc-300">
                Open a terminal in your Linux system (Ctrl + Alt + T) and run the following command to force Linux to write local time to the hardware clock, matching Windows:
              </p>
              <div className="bg-black/40 p-3 rounded border border-white/5 font-mono text-xs text-green-400">
                timedatectl set-local-rtc 1 --adjust-system-clock
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🎉 Dual Boot Architecture Established!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              A dual boot system gives you the flexibility to use both operating systems at native hardware speeds. By configuring partitions carefully, managing boot managers, and syncing hardware clocks, you enjoy the best of both Windows and Linux on the same gaming rig.
            </p>
            <p className="text-zinc-300 mb-4">
              Happy building, coding, and gaming on your multi-OS machine!
            </p>
            <div className="bg-indigo-600/10 border border-indigo-500/30 rounded-lg p-4">
              <p className="text-sm text-indigo-300">
                <strong>Next Step:</strong> Read the <Link href="/guides/30" className="font-semibold underline hover:text-indigo-400">Cable Sleeving and Custom Cables Guide</Link> to customize your desktop's aesthetics!
              </p>
            </div>
          </div>
        </article>

        {/* Developer Bio */}
        <div className="mt-16 p-8 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 backdrop-blur-lg rounded-xl border border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              SAM
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">SamXop123</h3>
              <p className="text-zinc-400">Developer of RigCrafter</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Sam is the developer of RigCrafter and a software systems administrator. He designed RigCrafter's guides to simplify advanced software setups like dual-booting and virtualizations.
          </p>
        </div>

        {/* Likes and saves */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-2 text-zinc-400 hover:text-indigo-500 transition-colors">
              <Bookmark className="w-4 h-4" />
              <span className="text-sm">Save</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-400">Share:</span>
            <button className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Previous and Next Navigation Footer */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-zinc-800">
          <Link 
            href="/guides/28" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: When Things Go Wrong: PC Won't Boot
          </Link>
          <Link 
            href="/guides/30" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Next: Cable Sleeving and Custom Cables
            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
