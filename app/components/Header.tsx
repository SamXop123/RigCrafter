"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Cpu, User, LogOut } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import AuthModal from "@/components/auth-modal"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { user, logout } = useAuth()

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

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Error logging out:", error)
    }
  }

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 z-10" onClick={closeMenu}>
            <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
            <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
              RigCrafter
            </span>
          </Link>
          
          <div className="md:hidden z-10">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="relative overflow-hidden transition-all duration-200 hover:bg-white/10"
            >
              <div className={`transition-all duration-300 ${isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}>
                <Menu className="h-5 w-5" />
              </div>
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"}`}>
                <X className="h-5 w-5" />
              </div>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
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

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Button asChild variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50">
                  <Link href="/dashboard">
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Link>
                </Button>
                <Button 
                  onClick={handleLogout}
                  variant="outline" 
                  className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => setShowAuthModal(true)}
                variant="outline" 
                className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50"
              >
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            )}
            
            <Button asChild variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50">
              <Link href="/#builder">
                Start Building
              </Link>
            </Button>
          </div>
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
            {user ? (
              <>
                <li className="pt-4 w-full max-w-xs">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    <Link href="/dashboard">
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </Button>
                </li>
                <li className="w-full max-w-xs">
                  <Button 
                    onClick={() => {
                      handleLogout()
                      closeMenu()
                    }}
                    variant="outline" 
                    className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all duration-200"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <li className="pt-4 w-full max-w-xs">
                <Button 
                  onClick={() => {
                    setShowAuthModal(true)
                    closeMenu()
                  }}
                  variant="outline" 
                  className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-200"
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </li>
            )}
            
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

      {/* Auth Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  )
}

