'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark, 
  Cpu, HardDrive, Zap, Monitor, AlertTriangle, CheckCircle, 
  TrendingUp, Wrench, Package, Shield, Layers, Info, CheckCircle2,
  Settings, Box, HelpCircle
} from "lucide-react"

export default function DetailedDualBootSetupGuide() {
  const tags = ["PC Building", "Software Setup", "Linux", "Dual Boot", "Operating Systems"]

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-white font-sans">
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

          <div className="relative z-10 font-sans">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-500/30">
                Beginner Friendly
              </span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                21 Min Read
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dual Boot Setup: Windows and Linux
            </h1>

            <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
              Want the best of both worlds? Run Windows for gaming and Linux for coding on the exact same computer. This guide breaks down the partitioning, bootloader setup, and time sync fixes in plain English.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Monitor className="w-5 h-5 text-indigo-400" />
                <span>Multi-OS Made Easy</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Wrench className="w-5 h-5 text-purple-400" />
                <span>Step-by-Step Disk Shrinking</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <Shield className="w-5 h-5 text-pink-400" />
                <span>Zero-Data-Loss Safety Precautions</span>
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
            <CheckCircle className="w-4 h-4" />
            100% Tested & Verified
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
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            {[
              { text: "1. What is Dual Booting? (Analogies & Jargon-Free)", href: "#why-dualboot" },
              { text: "2. The Pre-Install Checklist: BitLocker & Fast Startup", href: "#checklist" },
              { text: "3. Step 1: Resizing Windows Disk Space", href: "#disk-shrink" },
              { text: "4. Step 2: Flash Your Linux Installation USB", href: "#flash-prep" },
              { text: "5. Step 3: BIOS Configuration Made Simple", href: "#bios-config" },
              { text: "6. Step 4: Installing Linux alongside Windows", href: "#install-grub" },
              { text: "7. Step 5: Fixing Post-Install Quirks (Clock Mismatch)", href: "#clock-fix" }
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

        {/* Main Content */}
        <article className="space-y-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed">
              If you are new to PC building and software setup, configuring a dual boot system might feel intimidating. You are dealing with terms like "partitions," "bootloaders," and "filesystems." 
            </p>
            <p className="text-zinc-300 leading-relaxed font-light">
              Don't worry. This guide is written with simple, jargon-free explanations and step-by-step walkthroughs to help you install Windows and Linux together safely without losing any files or games.
            </p>
          </div>

          {/* Section 1 */}
          <div id="why-dualboot" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-indigo-400" />
              1. What is Dual Booting? (Analogies & Jargon-Free)
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Think of your computer's storage drive (SSD) as a large building. 
              Installing Windows is like leasing the entire building to one tenant. Windows moves in, puts furniture everywhere, and assumes it owns the place.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              <strong>Dual Booting</strong> is like building a divider wall right down the middle of the building to create two separate apartments. One apartment runs Windows, and the other apartment runs Linux. 
              When you turn on your PC, a menu pops up asking which door you want to enter.
            </p>

            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 space-y-4">
              <h3 className="font-bold text-white text-base">Should you Dual Boot or use a Virtual Machine (VM)?</h3>
              <div className="grid md:grid-cols-2 gap-4 text-xs text-zinc-300">
                <div className="bg-black/30 p-4 rounded-lg border border-white/5 space-y-2">
                  <span className="font-semibold text-emerald-400 block text-sm">Dual Booting (Native)</span>
                  <p>• <strong>Performance:</strong> 100% full hardware speed. Your graphics card, CPU, and RAM work directly with the operating system.</p>
                  <p>• <strong>Ideal For:</strong> PC gaming, machine learning development, video editing, and complex compilation.</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg border border-white/5 space-y-2">
                  <span className="font-semibold text-cyan-400 block text-sm">Virtual Machines (VirtualBox / WSL2)</span>
                  <p>• <strong>Convenience:</strong> Run Linux inside a window directly on your Windows desktop. No need to reboot.</p>
                  <p>• <strong>Ideal For:</strong> Learning basic Linux commands, light coding, and running lightweight server test environments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="checklist" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Shield className="w-7 h-7 text-pink-400" />
              2. The Pre-Install Checklist: BitLocker & Fast Startup
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Before touching any storage sliders, we must configure Windows security settings. Failing to do this can lock you out of your system or corrupt file writes.
            </p>

            <div className="space-y-4">
              {/* BitLocker Card */}
              <div className="bg-zinc-900 border border-pink-500/20 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-400" />
                  <span className="font-bold text-white text-base">Check / Suspend BitLocker Encryption</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  BitLocker is a security feature that encrypts your drive. When you install a second operating system, your motherboard's security chip detects a change and locks the drive, demanding a 48-digit Recovery Key.
                </p>
                <div className="bg-black/40 p-4 rounded text-xs space-y-2 text-zinc-300">
                  <p><strong>How to check:</strong> In Windows, type "Manage BitLocker" in the Search bar and open it. If it says "BitLocker on", click <strong>Suspend Protection</strong>.</p>
                  <p><strong>Safety Note:</strong> Keep your Microsoft Account login details handy. You can find your recovery key online at <a href="https://account.microsoft.com/devices/recoverykey" target="_blank" rel="noreferrer" className="text-indigo-400 underline hover:text-indigo-300">account.microsoft.com/devices/recoverykey</a>.</p>
                </div>
              </div>

              {/* Fast Startup Card */}
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-indigo-400" />
                  <span className="font-bold text-white text-base">Disable Windows Fast Startup</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  When you shutdown with "Fast Startup" enabled, Windows doesn't actually turn off. It hibernates, saving system state to the SSD and locking the drive. If Linux tries to read or write to a locked drive, it can lead to data loss.
                </p>
                <div className="bg-black/40 p-4 rounded text-xs text-zinc-300 space-y-1">
                  <p>1. Open the <strong>Control Panel</strong> and search for <strong>Power Options</strong>.</p>
                  <p>2. Click <strong>"Choose what the power buttons do"</strong> on the left pane.</p>
                  <p>3. Click <strong>"Change settings that are currently unavailable"</strong> at the top.</p>
                  <p>4. Uncheck <strong>"Turn on fast startup (recommended)"</strong> and save changes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="disk-shrink" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <HardDrive className="w-7 h-7 text-purple-400" />
              3. Step 1: Resizing Windows Disk Space
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Now we will create the second apartment on your drive. We shrink the Windows C: drive to make unallocated, free space.
            </p>

            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <h3 className="font-bold text-white text-base">Disk Management Guide</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div className="space-y-1">
                    <span className="font-semibold text-white block">Open Disk Management</span>
                    <p className="text-xs text-zinc-400">Right-click the Windows Start menu button and click <strong>Disk Management</strong>.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div className="space-y-1">
                    <span className="font-semibold text-white block">Shrink C: Drive</span>
                    <p className="text-xs text-zinc-400">Look at the visual graph at the bottom. Right-click your primary drive partition (labeled `C:`) and click <strong>Shrink Volume...</strong>.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div className="space-y-1 flex-1">
                    <span className="font-semibold text-white block">Calculate and Execute Size</span>
                    <p className="text-xs text-zinc-400 mb-2">Windows asks for the amount of space to shrink in Megabytes (MB). Remember: <strong>1 GB = 1024 MB</strong>.</p>
                    <div className="grid grid-cols-2 gap-3 text-xs bg-black/40 p-3 rounded border border-white/5">
                      <div>
                        <span className="text-zinc-500 block">For a 50GB Partition:</span>
                        <code className="text-purple-400 font-mono">51200</code>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">For a 100GB Partition:</span>
                        <code className="text-purple-400 font-mono">102400</code>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">Input the number, click <strong>Shrink</strong>, and wait. You will see a new block labeled <strong>Unallocated Space</strong> with a black header. Do not create a new volume out of it; leave it empty for now.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="flash-prep" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Package className="w-7 h-7 text-indigo-400" />
              4. Step 2: Flash Your Linux Installation USB
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              We need a physical drive to boot from to install Linux. A standard USB flash drive (8GB or larger) will act as our installer media.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-300">
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-white block text-sm">What you need:</span>
                <p className="text-xs text-zinc-400">• A USB flash drive (8GB+). Note: flashing will erase everything on the USB, so back up its contents first!</p>
                <p className="text-xs text-zinc-400">• A Linux installation image (.ISO file). We recommend <strong>Ubuntu Desktop LTS</strong> for new users.</p>
                <p className="text-xs text-zinc-400">• A flash tool like <strong>Rufus</strong> (free to download at rufus.ie).</p>
              </div>
              <div className="bg-zinc-900 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="font-bold text-white block text-sm">Flashing with Rufus:</span>
                <p className="text-xs text-zinc-400">1. Plug in your USB and open Rufus.</p>
                <p className="text-xs text-zinc-400">2. Click <strong>Select</strong> and locate the downloaded Ubuntu ISO file.</p>
                <p className="text-xs text-zinc-400">3. Set the Partition Scheme to <strong>GPT</strong> and Target System to <strong>UEFI</strong> (this is important for modern systems).</p>
                <p className="text-xs text-zinc-400">4. Click <strong>Start</strong> and confirm when prompted.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="bios-config" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-blue-400" />
              5. Step 3: BIOS Configuration Made Simple
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              The BIOS (Basic Input/Output System) is the dashboard that starts before Windows. We must configure it to allow booting from our USB drive.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <div className="grid gap-3">
                <div className="flex gap-3 bg-black/40 p-4 rounded-lg border-l-4 border-blue-500">
                  <div>
                    <span className="font-semibold block text-white text-xs">1. Enter BIOS</span>
                    <p className="text-xs text-zinc-400 mt-1">Restart your PC. As soon as the screen goes black, start repeatedly tapping the <strong>Delete</strong> or <strong>F2</strong> key on your keyboard until the BIOS screen opens.</p>
                  </div>
                </div>
                <div className="flex gap-3 bg-black/40 p-4 rounded-lg border-l-4 border-blue-500">
                  <div>
                    <span className="font-semibold block text-white text-xs">2. Disable Secure Boot (Temporary or Permanent)</span>
                    <p className="text-xs text-zinc-400 mt-1">Navigate to the Boot or Security tab. Find <strong>Secure Boot</strong> and set it to <strong>Disabled</strong>. While Ubuntu supports Secure Boot, disabling it prevents signature issues with third-party graphic drivers (like Nvidia GPU drivers).</p>
                  </div>
                </div>
                <div className="flex gap-3 bg-black/40 p-4 rounded-lg border-l-4 border-blue-500">
                  <div>
                    <span className="font-semibold block text-white text-xs">3. Adjust Boot Option Priorities</span>
                    <p className="text-xs text-zinc-400 mt-1">Find the Boot Order or Boot Option #1 list. Select your USB drive (it might be prefixed with "UEFI: [USB Drive Name]") as the first boot option. Save changes and exit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="install-grub" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-purple-400" />
              6. Step 4: Installing Linux alongside Windows
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              Your computer will restart and boot into the USB installer. You will see a dark boot menu. Select <strong>"Try or Install Ubuntu"</strong>.
            </p>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <p className="text-zinc-300">
                Click <strong>"Install Ubuntu"</strong> on the setup wizard. Choose your language, keyboard layout, and connect to Wi-Fi. 
              </p>
              <div className="space-y-4">
                <span className="font-bold text-white text-base block">Selecting the Installation Type:</span>
                
                <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-lg space-y-2">
                  <span className="font-bold text-emerald-400 block text-xs">Option 1: "Install Ubuntu alongside Windows Boot Manager" (Recommended)</span>
                  <p className="text-xs text-zinc-300">
                    This is the safest, automated route. The installer finds the unallocated empty space we shrunk in Step 1, formats it, and installs Linux inside it without touching your Windows partition. Select this and click <strong>Install Now</strong>.
                  </p>
                </div>

                <div className="bg-purple-950/20 border border-purple-500/30 p-4 rounded-lg space-y-2">
                  <span className="font-bold text-purple-400 block text-xs">Option 2: "Something Else" (Advanced Manual Partitioning)</span>
                  <p className="text-xs text-zinc-300">
                    Use this if you want to partition manually. Locate the **unallocated space** from the drive list.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-xs text-zinc-400">
                    <li>Double-click the unallocated space. Create a partition with mount point: <strong>`/`</strong> (this is Root, where all Linux files are stored). Choose filesystem type: <strong>ext4</strong>.</li>
                    <li>Ensure the <strong>"Device for boot loader installation"</strong> dropdown points to your primary drive containing the EFI partition (e.g., `/dev/nvme0n1` or `/dev/sda`). Do not format this EFI partition, as formatting it will delete Windows boot files.</li>
                  </ul>
                </div>
              </div>
              <p className="text-zinc-300 pt-2 leading-relaxed">
                Choose your timezone, create your username, and set a password. Click **Continue** to start the installation. Once finished, click **Restart Now** and unplug the USB drive when prompted.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div id="clock-fix" className="scroll-mt-32 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="w-7 h-7 text-indigo-400" />
              7. Step 5: Fixing Post-Install Quirks (Clock Mismatch)
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light">
              When you restart your computer, you will see a black screen with text choices. This is the **GRUB Bootloader**. Select Ubuntu or Windows Boot Manager to load either system. 
            </p>
            
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-sm space-y-4">
              <h3 className="font-bold text-white">Fixing the Windows/Linux Time Bug</h3>
              <p className="text-zinc-300 leading-relaxed">
                After dual-booting, you will notice that booting back into Windows makes your clock show the wrong time (usually offset by several hours).
              </p>
              <div className="bg-black/40 p-4 rounded border border-white/5 space-y-2 text-xs">
                <span className="font-semibold text-white block">Why this happens:</span>
                <p className="text-zinc-400 leading-relaxed">
                  Windows reads the time from your motherboard hardware clock directly as your local time. Linux reads the motherboard clock as Coordinated Universal Time (UTC) and shifts the time zone in software. When booting back and forth, they keep overwriting the motherboard hardware clock.
                </p>
                <span className="font-semibold text-white block pt-2">The Permanent Fix (Run in Linux):</span>
                <p className="text-zinc-400">
                  Boot into Linux. Open the terminal application (keyboard shortcut: <strong>Ctrl + Alt + T</strong>). Copy and paste this single command and press Enter:
                </p>
                <div className="bg-black p-3 rounded font-mono text-xs text-green-400 border border-white/10 select-all">
                  timedatectl set-local-rtc 1 --adjust-system-clock
                </div>
                <p className="text-zinc-400 pt-1">
                  This tells Linux to store local time in the motherboard clock, aligning it with Windows.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">🎉 Welcome to the Multi-OS World!</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4 font-light">
              Setting up a dual boot configuration is a huge achievement. You now have a fast gaming environment alongside a robust coding and development platform on a single computer.
            </p>
            <p className="text-zinc-300 mb-4">
              Explore your Linux environment, customize your desktops, and enjoy your new operating systems!
            </p>
            <div className="bg-indigo-600/15 border border-indigo-500/30 rounded-lg p-4">
              <p className="text-sm text-indigo-300">
                <strong>Next Step:</strong> Check out the <Link href="/guides/30" className="font-semibold underline hover:text-indigo-400">Cable Sleeving and Custom Cables Guide</Link> to take your PC's physical aesthetics to the next level!
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
