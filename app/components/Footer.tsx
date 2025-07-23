"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Mail, Cpu, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/SamXop123/RigCrafter",
      icon: Github,
      color: "hover:text-white"
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "Discord",
      href: "#",
      icon: MessageCircle,
      color: "hover:text-purple-400"
    },
    {
      name: "Email",
      href: "mailto:support@rigcrafter.com",
      icon: Mail,
      color: "hover:text-green-400"
    }
  ]

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "PC Builder", href: "#builder" },
        { name: "Components", href: "#components" },
        { name: "Compatibility", href: "#compatibility" },
        { name: "Pricing", href: "#pricing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Build Guides", href: "#guides" },
        { name: "Support", href: "#support" },
        { name: "FAQ", href: "#faq" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ]

  return (
    <footer className="relative bg-gradient-to-t from-black via-zinc-900/50 to-transparent border-t border-white/5 z-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand section */}
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
                <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
                <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
                  RigCrafter
                </span>
              </div>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 max-w-sm mx-auto sm:mx-0">
                Build your dream gaming PC with our interactive component selector. 
                Choose compatible parts, optimize your budget, and craft the perfect rig.
              </p>
              
              {/* Social links */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-zinc-500 ${social.color} transition-all duration-300 p-2 sm:p-3 rounded-full bg-zinc-900/30 backdrop-blur-sm border border-white/5 hover:border-white/10`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="min-w-0 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm sm:text-base flex items-center justify-center lg:justify-start group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-zinc-500">
            <p className="flex items-center">
              &copy; {currentYear} RigCrafter. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <Link href="#privacy" className="hover:text-white transition-colors duration-300 whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-white transition-colors duration-300 whitespace-nowrap">
                Terms of Service
              </Link>
              <Link href="#cookies" className="hover:text-white transition-colors duration-300 whitespace-nowrap">
                Cookies
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-xs sm:text-sm text-zinc-500">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 fill-current" />
            </motion.div>
            <span>for gamers</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </footer>
  )
}

