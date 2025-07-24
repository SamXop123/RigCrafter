"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, HelpCircle, Cpu, Zap, Shield } from "lucide-react"

const faqData = [
  {
    category: "Getting Started",
    icon: <HelpCircle className="w-5 h-5" />,
    questions: [
      {
        question: "What is RigCrafter and how does it work?",
        answer: "RigCrafter is an intelligent PC building platform that helps you select compatible components for your dream gaming rig. Our system checks compatibility, suggests optimizations, and ensures your build will work perfectly together."
      },
      {
        question: "Do I need technical knowledge to use RigCrafter?",
        answer: "Not at all! RigCrafter is designed for both beginners and experts. Our intuitive interface guides you through each step, explains component functions, and provides recommendations based on your needs and budget."
      },
      {
        question: "Is RigCrafter free to use?",
        answer: "Yes, RigCrafter's core PC building tool is completely free. We make money through affiliate partnerships with retailers, so you get the best prices while supporting our platform."
      }
    ]
  },
  {
    category: "Component Selection",
    icon: <Cpu className="w-5 h-5" />,
    questions: [
      {
        question: "How does RigCrafter ensure component compatibility?",
        answer: "Our advanced compatibility engine checks socket types, power requirements, physical dimensions, and performance bottlenecks. We maintain an extensive database of components and their specifications to prevent incompatible combinations."
      },
      {
        question: "Can I import my existing PC build?",
        answer: "Yes! You can manually add your current components to see upgrade suggestions, compatibility with new parts, and performance improvements you could achieve."
      },
      {
        question: "What if a component I want isn't in your database?",
        answer: "We regularly update our database with new releases. If you can't find a specific component, you can suggest it through our feedback form, and we'll add it as soon as possible."
      },
      {
        question: "How accurate are the price estimates?",
        answer: "We pull real-time pricing from major retailers and update prices daily. However, prices can fluctuate, so we recommend checking with retailers before purchasing."
      }
    ]
  },
  {
    category: "Performance & Optimization",
    icon: <Zap className="w-5 h-5" />,
    questions: [
      {
        question: "How does RigCrafter calculate performance estimates?",
        answer: "We use benchmark data, manufacturer specifications, and real-world testing results to estimate performance in games and applications. Our algorithms consider CPU-GPU pairing, RAM speed, and storage type."
      },
      {
        question: "What's the difference between budget, mid-range, and high-end builds?",
        answer: "Budget builds ($500-800) focus on 1080p gaming at medium settings. Mid-range ($800-1500) targets 1440p high settings. High-end ($1500+) aims for 4K gaming or high-refresh 1440p with maximum settings."
      },
      {
        question: "Can RigCrafter suggest upgrades for my current PC?",
        answer: "Absolutely! Input your current specs, and we'll identify bottlenecks and suggest the most impactful upgrades for your budget and performance goals."
      }
    ]
  },
  {
    category: "Technical Support",
    icon: <Shield className="w-5 h-5" />,
    questions: [
      {
        question: "What if my build doesn't work after assembly?",
        answer: "While RigCrafter ensures compatibility, assembly issues can occur. We provide detailed troubleshooting guides and can connect you with our community of experienced builders for support."
      },
      {
        question: "Do you offer assembly services?",
        answer: "RigCrafter focuses on component selection and compatibility. However, we partner with local PC building services and can recommend trusted builders in your area."
      },
      {
        question: "How long do you keep my saved builds?",
        answer: "Saved builds are stored permanently in your account. You can access, modify, and share them anytime. We also provide version history so you can track changes over time."
      }
    ]
  }
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

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

  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Everything you need to know about building your perfect PC with RigCrafter
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {faqData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-3 rounded-lg border border-purple-500/20 mr-4">
                  <div className="text-purple-400">{category.icon}</div>
                </div>
                <h2 className="text-3xl font-bold text-white">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const isOpen = openItems[`${categoryIndex}-${questionIndex}`]
                  return (
                    <motion.div
                      key={questionIndex}
                      className="bg-black/50 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden"
                      whileHover={{ borderColor: "rgba(147, 51, 234, 0.3)" }}
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </h3>
                        <div className="text-purple-400 flex-shrink-0">
                          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-zinc-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-zinc-400 mb-6">
              Can't find the answer you're looking for? Our support team is here to help you build the perfect PC.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
