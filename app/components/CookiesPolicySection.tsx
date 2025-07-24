"use client"

import { motion } from "framer-motion"
import { Cookie, Settings, BarChart3, Shield, Eye, Trash2, Info, ToggleLeft } from "lucide-react"

export default function CookiesPolicySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: <Shield className="w-6 h-6" />,
      description: "Required for basic website functionality",
      purpose: "These cookies are necessary for RigCrafter to function properly and cannot be disabled.",
      examples: [
        "Authentication and login state",
        "Security and anti-fraud protection",
        "Shopping cart and build configurations",
        "Website functionality and navigation"
      ],
      retention: "Session or until logout",
      canDisable: false,
      color: "green"
    },
    {
      title: "Analytics Cookies",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Help us understand how users interact with RigCrafter",
      purpose: "We use analytics cookies to improve our service and user experience.",
      examples: [
        "Page views and user interactions",
        "Build completion rates",
        "Feature usage statistics",
        "Performance monitoring"
      ],
      retention: "Up to 24 months",
      canDisable: true,
      color: "blue"
    },
    {
      title: "Preference Cookies",
      icon: <Settings className="w-6 h-6" />,
      description: "Remember your settings and preferences",
      purpose: "These cookies enhance your experience by remembering your choices.",
      examples: [
        "Theme preferences (dark/light mode)",
        "Language and region settings",
        "Component brand preferences",
        "Build template preferences"
      ],
      retention: "Up to 12 months",
      canDisable: true,
      color: "purple"
    },
    {
      title: "Marketing Cookies",
      icon: <Eye className="w-6 h-6" />,
      description: "Used for advertising and marketing purposes",
      purpose: "Help us show you relevant content and measure marketing effectiveness.",
      examples: [
        "Social media integration",
        "Advertising campaign tracking",
        "Content personalization",
        "Cross-site tracking prevention"
      ],
      retention: "Up to 12 months",
      canDisable: true,
      color: "orange"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return {
          bg: "bg-green-500/20",
          border: "border-green-500/20",
          text: "text-green-400"
        }
      case "blue":
        return {
          bg: "bg-blue-500/20",
          border: "border-blue-500/20",
          text: "text-blue-400"
        }
      case "purple":
        return {
          bg: "bg-purple-500/20",
          border: "border-purple-500/20",
          text: "text-purple-400"
        }
      case "orange":
        return {
          bg: "bg-orange-500/20",
          border: "border-orange-500/20",
          text: "text-orange-400"
        }
      default:
        return {
          bg: "bg-purple-500/20",
          border: "border-purple-500/20",
          text: "text-purple-400"
        }
    }
  }

  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
              Cookies Policy
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Learn how RigCrafter uses cookies and similar technologies to improve your experience.
          </p>
          <div className="mt-6 text-sm text-zinc-500">
            <p>Last updated: January 24, 2024</p>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-4">
            <div className="bg-purple-500/20 p-3 rounded-lg border border-purple-500/20 mr-4">
              <Cookie className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
          </div>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              Cookies are small text files that are stored on your device when you visit RigCrafter. 
              They help us provide you with a better experience by remembering your preferences, 
              keeping you logged in, and helping us understand how our service is used.
            </p>
            <p>
              This Cookies Policy explains what cookies we use, why we use them, and how you can 
              control them. By continuing to use RigCrafter, you consent to our use of cookies 
              as described in this policy.
            </p>
          </div>
        </motion.div>

        {/* Cookie Types */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-12"
        >
          {cookieTypes.map((cookieType, index) => {
            const colors = getColorClasses(cookieType.color)
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`${colors.bg} p-3 rounded-lg border ${colors.border} mr-4`}>
                      <div className={colors.text}>{cookieType.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{cookieType.title}</h3>
                      <p className="text-zinc-400">{cookieType.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {cookieType.canDisable ? (
                      <div className="flex items-center text-zinc-400">
                        <ToggleLeft className="w-5 h-5 mr-2" />
                        <span className="text-sm">Optional</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-green-400">
                        <Shield className="w-5 h-5 mr-2" />
                        <span className="text-sm">Required</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Purpose</h4>
                    <p className="text-zinc-400 leading-relaxed mb-4">{cookieType.purpose}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">Retention</h4>
                    <p className="text-zinc-400">{cookieType.retention}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Examples</h4>
                    <ul className="space-y-2">
                      {cookieType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-zinc-400 text-sm flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Cookie Management */}
        <motion.div
          className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/20 mr-4">
              <Settings className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Managing Your Cookie Preferences</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Cookie Settings</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                  <span className="text-zinc-300">Essential Cookies</span>
                  <div className="flex items-center text-green-400">
                    <Shield className="w-4 h-4 mr-1" />
                    <span className="text-sm">Always On</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                  <span className="text-zinc-300">Analytics Cookies</span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <ToggleLeft className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                  <span className="text-zinc-300">Preference Cookies</span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <ToggleLeft className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                  <span className="text-zinc-300">Marketing Cookies</span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <ToggleLeft className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Browser Controls</h4>
              <div className="space-y-4 text-zinc-400 text-sm">
                <p>
                  You can also manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    View and delete existing cookies
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Block cookies from specific websites
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Block third-party cookies entirely
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Delete all cookies when closing the browser
                  </li>
                </ul>
                <p className="text-xs text-zinc-500 mt-4">
                  Note: Disabling certain cookies may limit your ability to use some RigCrafter features.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Third-Party Cookies */}
        <motion.div
          className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-orange-500/20 p-3 rounded-lg border border-orange-500/20 mr-4">
              <Info className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Third-Party Services</h3>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6">
            RigCrafter may use third-party services that set their own cookies. These services have their own privacy policies:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-zinc-900/50 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                <p className="text-zinc-400 text-sm">Used for website analytics and performance monitoring.</p>
                <a href="https://policies.google.com/privacy" className="text-purple-400 text-sm hover:underline">
                  View Privacy Policy →
                </a>
              </div>
              
              <div className="p-4 bg-zinc-900/50 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Social Media</h4>
                <p className="text-zinc-400 text-sm">For social sharing features and embedded content.</p>
                <p className="text-purple-400 text-sm">Various privacy policies apply</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-zinc-900/50 rounded-lg">
                <h4 className="font-semibold text-white mb-2">CDN Services</h4>
                <p className="text-zinc-400 text-sm">For faster content delivery and website performance.</p>
                <p className="text-purple-400 text-sm">Functional cookies only</p>
              </div>
              
              <div className="p-4 bg-zinc-900/50 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Security Services</h4>
                <p className="text-zinc-400 text-sm">For protection against spam and malicious activity.</p>
                <p className="text-purple-400 text-sm">Essential for site security</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/20 mr-4">
              <Cookie className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Questions About Cookies?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-zinc-400 mb-4">
                If you have questions about our use of cookies or this Cookies Policy, please contact us:
              </p>
              <div className="space-y-2 text-zinc-400">
                <p>• Email: privacy@rigcrafter.com</p>
                <p>• Subject: Cookie Policy Inquiry</p>
                <p>• We'll respond within 48 hours</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-zinc-900/50 rounded-lg hover:bg-zinc-800/50 transition-colors text-zinc-300 flex items-center">
                  <Settings className="w-4 h-4 mr-3 text-purple-400" />
                  Manage Cookie Preferences
                </button>
                <button className="w-full text-left p-3 bg-zinc-900/50 rounded-lg hover:bg-zinc-800/50 transition-colors text-zinc-300 flex items-center">
                  <Trash2 className="w-4 h-4 mr-3 text-red-400" />
                  Clear All Cookies
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
