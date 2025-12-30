"use client"

import { motion } from "framer-motion"
import { FileText, Download, BookOpen, Video } from "lucide-react"
import { Button } from "./ui/button"

const resources = [
  {
    icon: FileText,
    title: "Product Catalogs",
    description: "Browse our complete range of HPL products and specifications",
    action: "Download PDF",
  },
  {
    icon: Download,
    title: "Technical Data Sheets",
    description: "Access detailed technical specifications and performance data",
    action: "View TDS",
  },
  {
    icon: BookOpen,
    title: "Installation Guides",
    description: "Step-by-step instructions for proper installation and care",
    action: "Read Guide",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Watch professional installation and maintenance tutorials",
    action: "Watch Now",
  },
]

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resources & Support</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to specify, install, and maintain Al Mahaba HPL products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#d4a574]/10 rounded-lg flex items-center justify-center mb-4">
                <resource.icon className="w-6 h-6 text-[#d4a574]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
              <Button variant="ghost" className="text-[#d4a574] hover:text-[#c49564] p-0 text-sm">
                {resource.action} →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
