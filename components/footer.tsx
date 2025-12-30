"use client"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"

import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("Footer")
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Products: [
      { name: t("links.HPL Sheets"), href: "/hpl" },
      { name: t("links.Compact Laminate"), href: "/compacts" },
      { name: t("links.Postforming"), href: "/postforming" },
      { name: t("links.Fiber Glass"), href: "#" },
    ],
    Company: [
      { name: t("links.About Us"), href: "/#about" },
      { name: t("links.Projects"), href: "#" },
      { name: t("links.Contact"), href: "/#contact" },
    ],
    Resources: [
      { name: t("links.Color Collections"), href: "/color-collections" },
      { name: t("links.Technical Support"), href: "#" },
      { name: t("links.Download Center"), href: "/Salomil.pdf" },
    ],
  }

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ]

  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image src="/al-mahaba-logo.png" alt="Al Mahaba" width={140} height={70} className="h-16 w-auto mb-6" />
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t("about")}
              </p>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-[#d4a574] hover:bg-gray-800 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-[#d4a574] mb-4">{t(`links.${category}`)}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-[#d4a574] transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Contact Column (Manually Added as 4th) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-[#d4a574] mb-4">{t("links.Contact Info")}</h4>
                <div className="space-y-4 text-sm text-gray-400">
                  <a href="tel:+201226088118" className="flex items-center gap-3 hover:text-[#d4a574] transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-[#d4a574] group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>012 26088118</span>
                  </a>
                  <a href="https://wa.me/201226088118" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#d4a574] transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-[#d4a574] group-hover:text-white transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span>WhatsApp</span>
                  </a>
                  <a href="mailto:almahabaeg@gmail.com
" className="flex items-center gap-3 hover:text-[#d4a574] transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-[#d4a574] group-hover:text-white transition-colors shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="break-all">almahabaeg@gmail.com
                    </span>
                  </a>
                  <a href="https://www.google.com/maps/dir/31.02384,29.7773348/31.1981,29.9192/@31.1117025,29.9912341,11z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#d4a574] transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-[#d4a574] group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Alexandria, Egypt</span>

                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm text-gray-400">
            <p>&copy; {currentYear} Al Mahaba. {t("rights")}</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#d4a574] transition-colors">
                {t("privacy")}
              </a>
              <a href="#" className="hover:text-[#d4a574] transition-colors">
                {t("terms")}
              </a>
              <a href="#" className="hover:text-[#d4a574] transition-colors">
                {t("cookie")}
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            <a
              href="https://mohamed-eid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4a574] transition-colors"
            >
              Made by mhmdDev
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
