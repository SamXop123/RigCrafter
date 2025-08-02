"use client"

import { motion } from "framer-motion"
import { Book, Code, Users, Zap, Github, ExternalLink, ArrowRight, FileText, Terminal, Puzzle, AlertTriangle, UploadCloud, AlertCircle } from "lucide-react"

const docSections = [
   {
    title: "Getting Started",
    icon: <Book className="w-6 h-6" />,
    description: "Quick start guide and basic concepts",
    items: [
      { name: "Installation & Setup", href: "#installation" },
      { name: "Your First Build", href: "#first-build" },
      { name: "Understanding Components", href: "#components" },
      { name: "Basic Navigation", href: "#navigation" }
    ]
  },
  {
  title: "Run Locally",
  icon: <Terminal className="w-6 h-6" />,
  description: "Steps to clone, install, and run the project on your machine",
  items: [
    { name: "Clone the Repository", href: "#clone-repo" },
    { name: "Install Dependencies", href: "#install-dependencies" },
    { name: "Run Development Server", href: "#run-dev" },
    { name: "Open in Browser", href: "#open-browser" }
  ]
},
  {
  title: "Firebase Integration",
  icon: <Zap className="w-6 h-6" />,
  description: "How to set up Firebase for authentication and Firestore",
  items: [
    { name: "Firebase Project Setup", href: "#firebase-setup" },
    { name: "Enable Authentication", href: "#firebase-auth" },
    { name: "Enable Firestore", href: "#firebase-firestore" },
    { name: ".env.local Configuration", href: "#firebase-env" },
    { name: "Data Structure", href: "#firebase-data" },
    { name: "Manual Testing", href: "#manual-testing" }
  ]
},
{
  title: "Common Errors & Fixes",
  icon: <AlertCircle className="w-6 h-6" />,  

  description: "Resolve frequent issues faced during setup and usage",
  items: [
    { name: "npm install --legacy-peer-deps", href: "#legacy-peer-deps" },
    { name: "Firebase Permission Denied Error", href: "#firebase-permission" },
    { name: "Module Not Found Error", href: "#module-not-found" },
    { name: "React Version Conflict with Dependencies", href: "#react-version-conflict" },
    { name: "ESLint Plugin Import Errors", href: "#eslint-errors" }
    ]
},


  {
    title: "Contributing",
    icon: <Users className="w-6 h-6" />,
    description: "Help us improve RigCrafter",
    items: [
      { name: "Fork the Repository", href: "#fork-repo" },
      { name: "Development Setup", href: "#dev-setup" },
      { name: "Making Changes", href: "#making-changes" },
      { name: "Pull Request Process", href: "#pr-process" },
      { name: "Code Style Guide", href: "#style-guide" },
      { name: "Component Data Updates", href: "#component-data" },
      { name: "Testing Guidelines", href: "#testing" },
      { name: "Documentation Updates", href: "#docs-updates" }
    ]
  },
  
  {
    title: "Project Structure",
    icon: <Code className="w-6 h-6" />,
    description: "Understanding the codebase",
    items: [
      { name: "Frontend Architecture", href: "#frontend" },
      { name: "Component System", href: "#component-system" },
      { name: "Data Management", href: "#data-management" },
      { name: "Build System", href: "#build-system" }
    ]
  },

{
  title: "Deployment Guide",
  icon: <UploadCloud className="w-6 h-6" />,  

  description: "Steps to deploy RigCrafter to production",
  items: [
    { name: "Build the Project", href: "#build-project" },
    { name: "Set Environment Variables", href: "#env-setup" },
    { name: "Choose a Hosting Platform", href: "#choose-host" },
    { name: "Deploy to Vercel", href: "#vercel-deploy" },
    { name: "Deploy to Netlify", href: "#netlify-deploy" },
    { name: "Post Deployment Checks", href: "#post-deploy" }
  ]
}

]

const quickLinks = [
  {
    title: "GitHub Repository",
    description: "View source code and contribute",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/SamXop123/RigCrafter",
    external: true
  },
  {
    title: "Contribution Guide",
    description: "Step-by-step guide to contributing",
    icon: <FileText className="w-5 h-5" />,
    href: "#contribution-guide"
  },
  {
    title: "Issue Tracker",
    description: "Report bugs and request features",
    icon: <Terminal className="w-5 h-5" />,
    href: "https://github.com/SamXop123/RigCrafter/issues",
    external: true
  },
  {
    title: "Component Database",
    description: "Understand the component data structure",
    icon: <Puzzle className="w-5 h-5" />,
    href: "#component-database"
  }
]

export default function DocumentationSection() {
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
    <section className="min-h-screen py-32 relative overflow-auto">
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
              Documentation
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Everything you need to use, contribute to, and extend RigCrafter
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {quickLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className="bg-black/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-3 rounded-lg border border-purple-500/20 mr-3">
                  <div className="text-purple-400">{link.icon}</div>
                </div>
                {link.external && <ExternalLink className="w-4 h-4 text-zinc-400 ml-auto" />}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {link.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {link.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Documentation Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {docSections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-3 rounded-lg border border-purple-500/20 mr-4">
                  <div className="text-purple-400">{section.icon}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  <p className="text-zinc-400 text-sm">{section.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.a
                    key={itemIndex}
                    href={item.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-zinc-300 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contributing CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Contribute?</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              RigCrafter is open source and community-driven. Whether you're fixing bugs, 
              adding features, or improving documentation, your contributions make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/SamXop123/RigCrafter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </motion.a>
              <motion.a
                href="https://github.com/SamXop123/RigCrafter/blob/main/CONTRIBUTE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Full Contributing Guide
                <ExternalLink className="w-4 h-4 ml-2" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}