"use client"

import { motion } from "framer-motion"
import { Leaf, Recycle, Award, TreePine } from "lucide-react"
import { Button } from "./ui/button"

export function SustainabilityBanner() {
  return (
    <section id="sustainability" className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Committed to Sustainability</h2>
            <p className="text-xl text-green-50 mb-8 leading-relaxed">
              At Al Mahaba, environmental responsibility is at the core of our manufacturing process. We are dedicated
              to creating products that minimize environmental impact while maximizing performance.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-green-700 hover:bg-green-50 border-0">
              View Our Sustainability Report
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Leaf, title: "Eco-Friendly Materials", value: "95%" },
              { icon: Recycle, title: "Recyclable Content", value: "80%" },
              { icon: Award, title: "Green Certifications", value: "15+" },
              { icon: TreePine, title: "Carbon Neutral", value: "2024" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">{item.value}</div>
                <div className="text-sm text-green-50">{item.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
