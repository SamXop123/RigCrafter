"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Users, Briefcase, ArrowRight, Heart, Coffee, Gamepad2, Monitor } from "lucide-react"

const jobOpenings = [
  // {
  //   id: 1,
  //   title: "Senior Frontend Developer",
  //   department: "Engineering",
  //   location: "Remote / San Francisco",
  //   type: "Full-time",
  //   experience: "5+ years",
  //   description: "Build and optimize our React-based PC building interface. Work with cutting-edge web technologies to create intuitive user experiences.",
  //   requirements: [
  //     "Expert knowledge of React, TypeScript, and modern frontend tools",
  //     "Experience with performance optimization and accessibility",
  //     "Understanding of responsive design and cross-browser compatibility",
  //     "Passion for clean code and user experience"
  //   ]
  // },
  // {
  //   id: 2,
  //   title: "Backend Engineer",
  //   department: "Engineering",
  //   location: "Remote / New York",
  //   type: "Full-time", 
  //   experience: "3+ years",
  //   description: "Develop and maintain our component database and compatibility algorithms. Scale our infrastructure to serve millions of PC building enthusiasts.",
  //   requirements: [
  //     "Strong experience with Node.js, Python, or Go",
  //     "Database design and optimization (PostgreSQL preferred)",
  //     "API design and microservices architecture",
  //     "Experience with cloud platforms (AWS, GCP)"
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "Hardware Research Specialist",
  //   department: "Product",
  //   location: "Austin, TX",
  //   type: "Full-time",
  //   experience: "2+ years",
  //   description: "Research and catalog PC components, ensuring our database stays current with the latest hardware releases and specifications.",
  //   requirements: [
  //     "Deep knowledge of PC hardware and components",
  //     "Experience with hardware testing and benchmarking",
  //     "Strong attention to detail and data accuracy",
  //     "Ability to communicate technical concepts clearly"
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "Product Designer",
  //   department: "Design",
  //   location: "Remote",
  //   type: "Full-time",
  //   experience: "4+ years",
  //   description: "Shape the future of PC building tools through thoughtful design. Create intuitive interfaces that make complex technology accessible to everyone.",
  //   requirements: [
  //     "Strong portfolio demonstrating UX/UI design skills",
  //     "Experience with design systems and prototyping tools",
  //     "Understanding of accessibility and inclusive design",
  //     "Collaborative mindset and excellent communication skills"
  //   ]
  // }
]

const benefits = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness stipends"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and unlimited PTO policy"
  },
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: "Gaming Setup",
    description: "Annual hardware budget to build your dream gaming rig"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Equipment",
    description: "Top-tier laptops, monitors, and any tools you need to do your best work"
  }
]

const values = [
  {
    title: "Innovation First",
    description: "We're always pushing the boundaries of what's possible in PC building technology."
  },
  {
    title: "Community Driven",
    description: "Our community of builders and enthusiasts is at the heart of everything we do."
  },
  {
    title: "Quality Obsessed",
    description: "We believe in building products that are reliable, fast, and delightful to use."
  },
  {
    title: "Inclusive Culture",
    description: "We celebrate diverse perspectives and create an environment where everyone can thrive."
  }
]

export default function CareersSection() {
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
              Join Our Team
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Help us build the future of PC building. Join a team of passionate builders, 
            developers, and designers who are revolutionizing how people create their dream rigs.
          </p>
        </motion.div>

        {/* Company Values */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Job Openings */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Open Positions</h2>
          
          {jobOpenings.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {jobOpenings.map((job) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all group"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                          {job.department}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-zinc-400">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {job.experience}
                        </div>
                      </div>

                      <p className="text-zinc-300 mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                        <ul className="text-zinc-400 text-sm space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-purple-400 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <motion.button
                        className="w-full flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-black/50 backdrop-blur-lg rounded-xl p-12 border border-white/10 max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-6 rounded-lg border border-purple-500/20 w-fit mx-auto mb-6">
                  <Users className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">No Open Positions</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed text-lg">
                  We don't have any open positions at the moment, but we're always looking for talented individuals who share our passion for technology and innovation.
                </p>
                <p className="text-zinc-500 mb-8">
                  Check back soon or reach out to us directly if you'd like to be considered for future opportunities.
                </p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Benefits & Perks</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all text-center"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-4 rounded-lg border border-purple-500/20 w-fit mx-auto mb-4">
                  <div className="text-purple-400">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Don't See a Perfect Match?</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              We're always looking for talented individuals who share our passion for technology and innovation. 
              Send us your resume and let us know how you'd like to contribute to RigCrafter.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
