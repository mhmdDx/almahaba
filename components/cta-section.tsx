"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

const CEOS = [
  {
    name: "Ashraf Loka",
    role: "ceoRole",
    image: "/ceos/loka.png"
  },
  {
    name: "Mina Ashraf Loka",
    role: "gmRole",
    image: "/ceos/mina.png"
  },
  {
    name: "Monir Wahba",
    role: "ceoRole",
    image: "/ceos/algamil.png"
  }
]

export function CtaSection() {
  const t = useTranslations('CTASection')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden" dir="ltr">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4a574] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col justify-center"
          >
            <motion.span variants={itemVariants} className="inline-block text-[#d4a574] font-medium tracking-wider text-sm mb-4 uppercase">
              {t('scheduleConsultation')}
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
              {t('description')}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#c49564] text-white px-8 py-6 text-lg rounded-none">
                {t('requestQuote')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                icon: Phone,
                titleKey: "callUs",
                value: "012 26088118",
                href: "tel:+201226088118",
              },
              {
                icon: MessageCircle,
                titleKey: "whatsapp",
                value: "Chat Now",
                href: "https://wa.me/201226088118",
              },
              {
                icon: Mail,
                titleKey: "emailUs",
                value: "Email Us",
                href: "mailto:almahabaeg@gmail.com",
              },
              {
                icon: MapPin,
                titleKey: "visitUs",
                valueKey: "visitLocation",
                href: "https://www.google.com/maps/dir/31.02384,29.7773348/31.1981,29.9192/@31.1117025,29.9912341,11z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
              },
            ].map((contact, index) => (
              <motion.a
                key={contact.titleKey}
                variants={itemVariants}
                href={contact.href}
                target={contact.titleKey === "visitUs" || contact.titleKey === "whatsapp" ? "_blank" : undefined}
                rel={contact.titleKey === "visitUs" || contact.titleKey === "whatsapp" ? "noopener noreferrer" : undefined}
                className="group flex flex-col justify-between p-6 bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#d4a574]/30 transition-all duration-300 rounded-xl"
              >
                <div className="mb-4">
                  <div className="w-10 h-10 bg-[#d4a574]/10 rounded-lg flex items-center justify-center group-hover:bg-[#d4a574] transition-colors duration-300">
                    <contact.icon className="w-5 h-5 text-[#d4a574] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">{t(contact.titleKey)}</div>
                  <div className="text-lg font-semibold text-white group-hover:text-[#d4a574] transition-colors">
                    {contact.valueKey ? t(contact.valueKey) : contact.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="mt-20 border-t border-white/10 pt-10">
        <div className="flex justify-center mb-8">
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{t('leadershipTitle')}</h3>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden mask-linear-gradient">
          <motion.div
            className="flex gap-8 whitespace-nowrap will-change-transform"
            animate={{
              x: "-50%",
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            initial={{ x: "0%" }}
          >
            {[...CEOS, ...CEOS, ...CEOS, ...CEOS, ...CEOS, ...CEOS, ...CEOS, ...CEOS].map((ceo, idx) => (
              <div
                key={`${ceo.name}-${idx}`}
                className="flex items-center gap-4 bg-white/[0.03] border border-white/5 p-4 rounded-xl min-w-[300px]"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src={ceo.image}
                    alt={ceo.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{ceo.name}</h4>
                  <p className="text-xs text-gray-500">{t(ceo.role)}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
