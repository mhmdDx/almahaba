
"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function TexturePage() {
    const t = useTranslations("TexturePage")

    const dimensions = [
        "1220×2440 mm",
        "1220×2800 mm",
        "1220×3050 mm",
        "1300×2800 mm",
        "1300×3050 mm",
    ]

    const textures = [
        { ref: "M", descKey: "matt", avail: [true, true, true, true, true] },
        { ref: "G", descKey: "glossy", avail: [true, true, true, true, true] },
        { ref: "SD", descKey: "suede", avail: [true, false, false, false, false] },
        { ref: "J", descKey: "soft_suede", avail: [true, false, true, false, true] },
        { ref: "X", descKey: "matrix", avail: [true, false, true, false, true] },
        { ref: "X1", descKey: "matrix", avail: [true, false, true, false, true] },
        { ref: "EC", descKey: "engineering_cut", avail: [true, false, false, false, false] },
        { ref: "T", descKey: "textile", avail: [true, false, true, false, true] },
        { ref: "TS", descKey: "textile_square", avail: [true, false, false, false, false] },
        { ref: "L", descKey: "leather", avail: [true, false, false, false, false] },
        { ref: "S", descKey: "star", avail: [true, false, true, false, true] },
        { ref: "C", descKey: "charles_oak", avail: [false, true, false, true, false] },
        { ref: "RW", descKey: "real_wood", avail: [true, false, true, false, true] },
        { ref: "RW1", descKey: "real_wood", avail: [true, false, true, false, true] },
        { ref: "AW", descKey: "american_wood", avail: [true, false, false, false, false] },
        { ref: "E", descKey: "square", avail: [false, true, false, true, false] },
        { ref: "F", descKey: "flower", avail: [false, false, true, false, true] },
        { ref: "W", descKey: "wenge", avail: [true, false, true, false, true] },
        { ref: "A", descKey: "ash", avail: [false, true, false, true, false] },
    ]

    return (
        <main className="min-h-screen bg-stone-50">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[30vh] md:h-[40vh] min-h-[300px] md:min-h-[400px] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <Image
                    src="/hero1.jfif"
                    alt="Texture Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6 tracking-wide"
                    >
                        {t('title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-base md:text-lg lg:text-xl text-stone-100 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-20 relative z-30 pb-16 md:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100 ring-1 ring-black/5"
                >
                    <div className="p-6 md:p-8 border-b border-stone-100 bg-white">
                        <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-2">{t('matrixTitle')}</h2>
                        <p className="text-sm md:text-base text-stone-500">{t('matrixSubtitle')}</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="bg-stone-100 text-stone-600 uppercase text-xs tracking-wider border-b border-stone-200">
                                    <th scope="col" className="px-4 py-3 md:px-8 md:py-5 font-bold sticky left-0 z-20 bg-stone-100 w-[80px] md:w-[120px]">
                                        {t('table.ref')}
                                    </th>
                                    <th scope="col" className="px-4 py-3 md:px-8 md:py-5 font-bold sticky left-[80px] md:left-[120px] z-20 bg-stone-100/95 backdrop-blur-sm w-[140px] md:w-[200px] border-r border-stone-200 shadow-[4px_0_12px_-4px_rgba(0,0,0,0.1)]">
                                        {t('table.description')}
                                    </th>
                                    {dimensions.map((dim, i) => (
                                        <th key={i} scope="col" className="px-4 py-3 md:px-6 md:py-5 font-semibold text-center whitespace-nowrap min-w-[140px] md:min-w-[160px]">
                                            {dim}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {textures.map((item, idx) => (
                                    <motion.tr
                                        key={item.ref + idx}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 + idx * 0.03 }}
                                        className="bg-white hover:bg-stone-50 transition-colors group"
                                    >
                                        <td className="px-4 py-3 md:px-8 md:py-5 font-bold text-stone-900 sticky left-0 z-10 bg-white group-hover:bg-stone-50 transition-colors text-xs md:text-sm">
                                            {item.ref}
                                        </td>
                                        <td className="px-4 py-3 md:px-8 md:py-5 font-medium text-stone-700 sticky left-[80px] md:left-[120px] z-10 bg-white border-r border-stone-100 shadow-[4px_0_12px_-4px_rgba(0,0,0,0.05)] group-hover:bg-stone-50 transition-colors text-xs md:text-sm">
                                            {t(`textures.${item.descKey}`)}
                                        </td>
                                        {item.avail.map((isAvailable, i) => (
                                            <td key={i} className="px-4 py-3 md:px-6 md:py-5 text-center">
                                                {isAvailable ? (
                                                    <div className="flex items-center justify-center">
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            whileInView={{ scale: 1 }}
                                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                            className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#d4a574]/10 text-[#d4a574] flex items-center justify-center ring-1 ring-[#d4a574]/20"
                                                        >
                                                            <Check className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                                                        </motion.div>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center justify-center opacity-20">
                                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-stone-300" />
                                                    </div>
                                                )}
                                            </td>
                                        ))}
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <div className="mt-12 text-center">
                    <div className="inline-block px-6 py-3 bg-stone-100 rounded-full text-stone-600 text-sm font-medium border border-stone-200">
                        {t('note')}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

