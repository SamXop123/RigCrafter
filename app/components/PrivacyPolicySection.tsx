"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Database, Users, Mail, Calendar, MapPin } from "lucide-react"

export default function PrivacyPolicySection() {
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

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database className="w-6 h-6" />,
      content: [
        {
          subtitle: "Personal Information",
          text: "When you use RigCrafter, we may collect personal information such as your name, email address, and any information you provide when contacting us or creating an account."
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect information about how you interact with RigCrafter, including your PC build configurations, component preferences, and usage patterns to improve our service."
        },
        {
          subtitle: "Device Information",
          text: "We may collect information about the device you use to access RigCrafter, including browser type, operating system, and IP address for security and optimization purposes."
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: <Eye className="w-6 h-6" />,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve RigCrafter's PC building tools and compatibility checking features."
        },
        {
          subtitle: "Personalization",
          text: "Your data helps us personalize your experience by remembering your preferences and suggesting compatible components based on your build history."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to respond to your inquiries, send important updates about our service, and provide customer support."
        },
        {
          subtitle: "Analytics & Improvement",
          text: "We analyze usage patterns to understand how RigCrafter is used and to identify areas for improvement and new features."
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: "No Sale of Personal Data",
          text: "We do not sell, trade, or otherwise transfer your personal information to third parties for commercial purposes."
        },
        {
          subtitle: "Service Providers",
          text: "We may share information with trusted service providers who assist us in operating RigCrafter, conducting our business, or serving our users, provided they agree to keep this information confidential."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law or to protect our rights, property, or safety, or that of our users or others."
        },
        {
          subtitle: "Public Build Sharing",
          text: "If you choose to make your PC builds public, that information will be visible to other RigCrafter users. You can control the privacy settings of your builds at any time."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <Lock className="w-6 h-6" />,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Encryption",
          text: "All data transmission between your device and our servers is encrypted using industry-standard SSL/TLS protocols."
        },
        {
          subtitle: "Access Controls",
          text: "We limit access to your personal information to employees and contractors who need it to provide our services and who are bound by confidentiality obligations."
        },
        {
          subtitle: "Regular Updates",
          text: "We regularly review and update our security practices to ensure they meet current industry standards and best practices."
        }
      ]
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: "Access & Correction",
          text: "You have the right to access, update, or correct your personal information at any time through your account settings or by contacting us."
        },
        {
          subtitle: "Data Portability",
          text: "You can export your build data and personal information in a machine-readable format upon request."
        },
        {
          subtitle: "Deletion",
          text: "You may request deletion of your personal information, subject to certain exceptions where we may need to retain information for legal or business purposes."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of non-essential communications and data collection practices through your account settings or by contacting us."
        }
      ]
    },
    {
      id: "cookies-tracking",
      title: "Cookies & Tracking",
      icon: <Database className="w-6 h-6" />,
      content: [
        {
          subtitle: "Essential Cookies",
          text: "We use essential cookies that are necessary for RigCrafter to function properly, including authentication and security cookies."
        },
        {
          subtitle: "Analytics Cookies",
          text: "We may use analytics cookies to understand how users interact with RigCrafter and improve our service. You can disable these in your browser settings."
        },
        {
          subtitle: "Preference Cookies",
          text: "We use cookies to remember your preferences, such as your preferred component brands or build templates."
        },
        {
          subtitle: "Third-Party Services",
          text: "We may use third-party analytics services that place their own cookies. These services have their own privacy policies governing their use of information."
        }
      ]
    }
  ]

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
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Commitment to Privacy</h2>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            At RigCrafter, we are committed to protecting your privacy and ensuring transparency about how we handle your data. 
            This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data. 
            By using RigCrafter, you agree to the collection and use of information in accordance with this policy.
          </p>
        </motion.div>

        {/* Privacy Policy Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-3 rounded-lg border border-purple-500/20 mr-4">
                  <div className="text-purple-400">{section.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white">{section.title}</h3>
              </div>

              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l border-purple-500/20 pl-6">
                    <h4 className="text-lg font-semibold text-white mb-2">{item.subtitle}</h4>
                    <p className="text-zinc-400 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/20 mr-4">
              <Mail className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Contact Us</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Privacy Questions</h4>
              <p className="text-zinc-400 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-zinc-400">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-purple-400" />
                  <span>privacy@rigcrafter.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                  <span>Response within 48 hours</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Policy Updates</h4>
              <p className="text-zinc-400 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="space-y-1 text-zinc-400 text-sm">
                <li>• Posting the new policy on this page</li>
                <li>• Updating the "Last updated" date</li>
                <li>• Sending email notifications for significant changes</li>
                <li>• Displaying in-app notifications</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
