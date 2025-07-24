"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Cpu } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      setIsScrolled(currentScrollY > 0)
      
      // Auto-hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
    } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
          <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
            RigCrafter
          </span>
        </Link>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </Button>
        </div>
        <nav
          className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-black/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border-b border-white/5 md:border-none`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
            <li>
              <Link href="/" className="hover:text-purple-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-400 transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/#builder" className="hover:text-purple-400 transition-colors duration-300">
                Builder
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-400 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button asChild variant="outline" className="hidden md:block border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50">
          <Link href="/#builder">
            Start Building
          </Link>
        </Button>
      </div>
    </header>
  )
}

