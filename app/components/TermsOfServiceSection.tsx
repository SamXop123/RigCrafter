"use client"

import { motion } from "framer-motion"
import { FileText, Scale, Shield, AlertTriangle, Users, Gavel, Globe, Clock } from "lucide-react"

export default function TermsOfServiceSection() {
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
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <FileText className="w-6 h-6" />,
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using RigCrafter, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          subtitle: "Service Description",
          text: "RigCrafter is a PC building configuration tool that helps users select compatible components, estimate performance, and create custom PC builds. The service is provided 'as is' without warranties of any kind."
        },
        {
          subtitle: "Eligibility",
          text: "You must be at least 13 years old to use RigCrafter. If you are under 18, you must have parental consent to use our service and agree to these terms."
        }
      ]
    },
    {
      id: "user-accounts",
      title: "User Accounts & Responsibilities",
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: "Account Creation",
          text: "You may create an account to save your builds and access additional features. You are responsible for maintaining the confidentiality of your account credentials."
        },
        {
          subtitle: "Accurate Information",
          text: "You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete."
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use of your account or any other breach of security."
        },
        {
          subtitle: "Prohibited Uses",
          text: "You may not use RigCrafter for any unlawful purpose, to violate any laws, to harass other users, or to distribute malicious content or spam."
        }
      ]
    },
    {
      id: "service-terms",
      title: "Service Terms & Limitations",
      icon: <Globe className="w-6 h-6" />,
      content: [
        {
          subtitle: "Service Availability",
          text: "We strive to maintain RigCrafter's availability but do not guarantee uninterrupted access. The service may be temporarily unavailable for maintenance, updates, or technical issues."
        },
        {
          subtitle: "Information Accuracy",
          text: "While we work to ensure component information is accurate and up-to-date, we cannot guarantee the accuracy of all data. Always verify specifications and compatibility with official sources."
        },
        {
          subtitle: "Pricing Information",
          text: "Component prices displayed are estimates based on available data and may not reflect current market prices. Always check with retailers for actual pricing."
        },
        {
          subtitle: "Service Modifications",
          text: "We reserve the right to modify, suspend, or discontinue any part of RigCrafter at any time without notice. We may also update these terms as needed."
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: "RigCrafter Content",
          text: "All content, features, and functionality of RigCrafter, including but not limited to text, graphics, logos, and software, are owned by RigCrafter and protected by copyright and other intellectual property laws."
        },
        {
          subtitle: "User Content",
          text: "You retain ownership of any PC builds, configurations, or other content you create using RigCrafter. By sharing builds publicly, you grant us a license to display and share that content."
        },
        {
          subtitle: "Third-Party Content",
          text: "Component specifications, images, and other third-party content remain the property of their respective owners. We use this information under fair use provisions for informational purposes."
        },
        {
          subtitle: "License to Use",
          text: "We grant you a limited, non-exclusive, non-transferable license to access and use RigCrafter for personal, non-commercial purposes in accordance with these terms."
        }
      ]
    },
    {
      id: "disclaimers",
      title: "Disclaimers & Limitations",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        {
          subtitle: "No Warranty",
          text: "RigCrafter is provided 'as is' without any warranties, express or implied. We do not warrant that the service will be uninterrupted, error-free, or completely secure."
        },
        {
          subtitle: "Compatibility Disclaimer",
          text: "While our compatibility checker aims to identify potential issues, we cannot guarantee that all suggested combinations will work perfectly together. Always verify compatibility independently."
        },
        {
          subtitle: "Performance Estimates",
          text: "Performance estimates are approximations based on available data and may not reflect actual real-world performance. Results may vary based on numerous factors."
        },
        {
          subtitle: "Limitation of Liability",
          text: "In no event shall RigCrafter be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, data, or use, arising from your use of the service."
        }
      ]
    },
    {
      id: "privacy-data",
      title: "Privacy & Data Protection",
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: "Privacy Policy",
          text: "Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use RigCrafter."
        },
        {
          subtitle: "Data Collection",
          text: "We collect information necessary to provide our service, including build configurations, usage data, and any information you voluntarily provide."
        },
        {
          subtitle: "Data Security",
          text: "We implement reasonable security measures to protect your data, but cannot guarantee absolute security of information transmitted over the internet."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your data as long as your account is active or as needed to provide our services. You may request deletion of your data at any time."
        }
      ]
    },
    {
      id: "termination",
      title: "Termination & Suspension",
      icon: <Clock className="w-6 h-6" />,
      content: [
        {
          subtitle: "Termination by You",
          text: "You may stop using RigCrafter at any time. If you have an account, you may delete it through your account settings or by contacting us."
        },
        {
          subtitle: "Termination by Us",
          text: "We may terminate or suspend your access to RigCrafter immediately, without prior notice, for violation of these terms or any other reason we deem necessary."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, your right to use RigCrafter will cease immediately. We may delete your account and all associated data, though we may retain some information as required by law."
        },
        {
          subtitle: "Survival",
          text: "Provisions regarding intellectual property, disclaimers, limitations of liability, and governing law will survive termination of these terms."
        }
      ]
    },
    {
      id: "legal-terms",
      title: "Legal & Governing Law",
      icon: <Gavel className="w-6 h-6" />,
      content: [
        {
          subtitle: "Governing Law",
          text: "These terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law provisions."
        },
        {
          subtitle: "Dispute Resolution",
          text: "Any disputes arising from these terms or your use of RigCrafter will be resolved through binding arbitration rather than in court, except for claims of intellectual property infringement."
        },
        {
          subtitle: "Severability",
          text: "If any provision of these terms is found to be unenforceable, the remainder of the terms will remain in full force and effect."
        },
        {
          subtitle: "Changes to Terms",
          text: "We reserve the right to update these terms at any time. We will notify users of material changes and continued use constitutes acceptance of updated terms."
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
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Please read these terms carefully before using RigCrafter. By using our service, you agree to these terms.
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
              <Scale className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Agreement Overview</h2>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            These Terms of Service ("Terms") govern your use of the RigCrafter website and service. 
            RigCrafter is a PC building configuration tool designed to help users create compatible PC builds, 
            check component compatibility, and estimate system performance. By using RigCrafter, you agree to be bound by these Terms.
          </p>
        </motion.div>

        {/* Terms Sections */}
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

        {/* Contact & Updates */}
        <motion.div
          className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/20 mr-4">
                  <FileText className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Questions About Terms</h3>
              </div>
              <p className="text-zinc-400 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-zinc-400">
                <p>• Email: legal@rigcrafter.com</p>
                <p>• Response time: Within 48 hours</p>
                <p>• We're here to help clarify any terms</p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/20 mr-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Updates to Terms</h3>
              </div>
              <p className="text-zinc-400 mb-4">
                We may update these terms from time to time. When we do:
              </p>
              <div className="space-y-2 text-zinc-400">
                <p>• We'll update the "Last updated" date</p>
                <p>• Material changes will be communicated via email</p>
                <p>• Continued use means acceptance of new terms</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
