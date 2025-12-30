"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ShieldCheck, Award, ArrowRight, ChevronLeft, ChevronRight, FileText } from "lucide-react"

export default function PortfolioPage() {
    const t = useTranslations("Portfolio")
    const [currentCertIndex, setCurrentCertIndex] = useState(0)
    const certImages = ["/1.jpeg", "/2.jpeg"]

    const nextCert = () => {
        setCurrentCertIndex((prev) => (prev + 1) % certImages.length)
    }

    const prevCert = () => {
        setCurrentCertIndex((prev) => (prev - 1 + certImages.length) % certImages.length)
    }

    useEffect(() => {
        const timer = setInterval(nextCert, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[70vh] lg:h-[100vh] w-full overflow-hidden mt-10">
                <Image
                    src="/POFTOFLION-HERO.png"
                    alt={t("title")}
                    fill
                    className="object-cover "
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4 max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                        >
                            {t("title")}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl font-light text-gray-200"
                        >
                            {t("subtitle")}
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* ISO Section */}
            <section className="py-24 px-4 md:px-8 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl group bg-neutral-100/50 border border-gray-100"
                        >
                            <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <Image
                                src="/2 (1).webp"
                                alt={t("isoSection.title")}
                                fill
                                className="object-contain p-2 hover:scale-[1.02] transition-all duration-700 ease-in-out"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
                                <Award className="w-4 h-4 text-[#d4a574]" />
                                <span className="text-[#d4a574]">{t("isoSection.subtitle")}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {t("isoSection.title")}
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>{t("isoSection.description")}</p>
                                <div className="w-full h-px bg-gray-200" />
                                <p>{t("isoSection.content")}</p>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-[#d4a574]" />
                                    <span className="font-medium ">Quality Management</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-[#d4a574]" />
                                    <span className="font-medium">Customer Focus</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* European Standards Section */}
            <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content Side (Order 2 on mobile, 1 on desktop) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-6">
                                <ShieldCheck className="w-4 h-4 text-[#d4a574]" />
                                <span className="text-[#d4a574]">{t("euSection.subtitle")}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {t("euSection.title")}
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>{t("euSection.description")}</p>
                                <div className="w-full h-px bg-gray-100" />
                                <p>{t("euSection.content")}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <h4 className="font-bold text-[#d4a574] mb-1">EN 438</h4>
                                    <p className="text-sm text-gray-500">HPL Standard</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <h4 className="font-bold text-[#d4a574] mb-1">CE Marking</h4>
                                    <p className="text-sm text-gray-500">European Conformity</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Side (Order 1 on mobile, 2 on desktop) */}
                        <div className="flex flex-col gap-6 order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl group bg-neutral-100/50 border border-gray-100"
                            >
                                <div className="relative w-full h-full">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentCertIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative w-full h-full"
                                        >
                                            <Image
                                                src={certImages[currentCertIndex]}
                                                alt={t("euSection.title")}
                                                fill
                                                className="object-contain p-2"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Arrows */}
                                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button
                                            onClick={prevCert}
                                            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm transition-all transform hover:scale-110"
                                        >
                                            <ChevronLeft className="w-6 h-6 text-gray-800" />
                                        </button>
                                        <button
                                            onClick={nextCert}
                                            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm transition-all transform hover:scale-110"
                                        >
                                            <ChevronRight className="w-6 h-6 text-gray-800" />
                                        </button>
                                    </div>

                                    {/* Dots */}
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                        {certImages.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentCertIndex(idx)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentCertIndex ? "bg-[#d4a574] w-4" : "bg-gray-300 hover:bg-gray-400"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex justify-center"
                            >
                                <a href="/HPL%20Product%20Data%20Sheet.pdf" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="bg-[#d4a574] hover:bg-[#c49564] text-white gap-2">
                                        <FileText className="w-5 h-5" />
                                        Download Product Data Sheet
                                    </Button>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
