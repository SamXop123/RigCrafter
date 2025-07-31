"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X ,Cpu} from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      setIsScrolled(currentScrollY > 0)
      
      // Auto-hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMenuOpen(false) // Close menu when header hides
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
     <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
    ${
      isScrolled
        ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-md"
        : "bg-black/10 backdrop-blur-lg"
    } 
    ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
>
  <div className="container mx-auto px-6 py-6 flex justify-between items-center">
    <Link
      href="/"
      className="flex items-center space-x-2 z-10"
      onClick={closeMenu}
    >
      <Cpu className="h-7 w-7 sm:h-9 sm:w-9 text-purple-500" />
      <span className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
        RigCrafter
      </span>
    </Link>

    {/* Mobile Menu Button */}
    <div className="md:hidden z-10">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative overflow-hidden transition-all duration-200 hover:bg-white/10"
      >
        <div
          className={`transition-all duration-300 ${
            isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
          }`}
        >
          <Menu className="h-6 w-6" />
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isMenuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
          }`}
        >
          <X className="h-6 w-6" />
        </div>
      </Button>
    </div>

    {/* Desktop Navigation */}
    <nav className="hidden md:block">
      <ul className="flex space-x-10 text-2xl">
        <li>
          <Link
            href="/"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#builder"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Builder
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>

    <Button
      asChild
      variant="outline"
      className="hidden md:block border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 text-lg px-6 py-2"
    >
      <Link href="/#builder">FAQs</Link>
    </Button>
  </div>
</header>


      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "bg-black/60 backdrop-blur-sm opacity-100 pointer-events-auto" 
            : "bg-transparent opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Navigation Menu */}
      <nav
        ref={menuRef}
        className={`fixed top-0 left-0 w-full z-40 md:hidden transition-all duration-300 ease-in-out transform ${
          isMenuOpen 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full opacity-0"
        }`}
        style={{ paddingTop: isScrolled ? "65px" : "65px" }}
      >
        <div className="bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <ul className="flex flex-col items-center space-y-1 p-6">
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <Link 
                href="/" 
                className="block py-3 px-4 rounded-lg hover:text-purple-400 hover:bg-white/5 transition-all duration-200 text-center"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <Link 
                href="/about" 
                className="block py-3 px-4 rounded-lg hover:text-purple-400 hover:bg-white/5 transition-all duration-200 text-center"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <Link 
                href="/#builder" 
                className="block py-3 px-4 rounded-lg hover:text-purple-400 hover:bg-white/5 transition-all duration-200 text-center"
                onClick={closeMenu}
              >
                Builder
              </Link>
            </li>
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <Link 
                href="/contact" 
                className="block py-3 px-4 rounded-lg hover:text-purple-400 hover:bg-white/5 transition-all duration-200 text-center"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="pt-4 w-full max-w-xs">
              <Button 
                asChild 
                variant="outline" 
                className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-200"
                onClick={closeMenu}
              >
                <Link href="/#builder">
                  Start Building
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

