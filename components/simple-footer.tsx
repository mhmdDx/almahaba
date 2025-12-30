"use client"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function SimpleFooter() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { name: "LinkedIn", icon: Linkedin, href: "#" },
        { name: "Instagram", icon: Instagram, href: "#" },
        { name: "Facebook", icon: Facebook, href: "#" },
        { name: "Twitter", icon: Twitter, href: "#" },
    ]

    return (
        <footer className="bg-gray-900 text-white" dir="ltr">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col items-center text-center space-y-8">
                    {/* Logo & Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <Image
                            src="/al-mahaba-logo.png"
                            alt="Al Mahaba"
                            width={140}
                            height={70}
                            className="h-16 w-auto mb-6 mx-auto"
                        />
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Leading manufacturer of premium high-pressure laminate solutions. Committed to quality, innovation, and sustainability.
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-4 mb-8">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#d4a574] hover:bg-gray-700 transition-all duration-200"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={18} />
                                    <span className="sr-only">{social.name}</span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
                            <a href="tel:+201226088118" className="flex items-center gap-2 hover:text-[#d4a574] transition-colors">
                                <Phone className="w-4 h-4" />
                                <span>012 26088118</span>
                            </a>
                            <a href="https://wa.me/201226088118" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#d4a574] transition-colors">
                                <MessageCircle className="w-4 h-4" />
                                <span>WhatsApp</span>
                            </a>
                            <a href="mailto:almahabaeg@gmail.com
" className="flex items-center gap-2 hover:text-[#d4a574] transition-colors">
                                <Mail className="w-4 h-4" />
                                <span>almahabaeg@gmail.com
                                </span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        className="w-full pt-8 border-t border-gray-800"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-gray-400">&copy; {currentYear} Al Mahaba. All rights reserved.</p>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}
