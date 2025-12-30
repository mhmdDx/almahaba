"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetailsSidebar, ProductDetails } from "@/components/product-details-sidebar"

// Images from public/faceDoors
const FACE_DOORS_IMAGES = [
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.44 AM (1).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.44 AM (2).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.44 AM (3).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.44 AM (4).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.44 AM.jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.45 AM (1).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.45 AM (2).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.45 AM (3).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.45 AM (4).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.45 AM.jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.46 AM (1).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.46 AM (2).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.46 AM.jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.47 AM (1).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.47 AM (2).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.47 AM.jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.48 AM (1).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.48 AM (2).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.48 AM (3).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.48 AM (4).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.48 AM.jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.49 AM (1).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.49 AM.jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.50 AM (1).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.50 AM (2).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.50 AM (3).jpeg",
    "/faceDoors/WhatsApp Image 2025-12-25 at 10.13.50 AM.jpeg",
]

export default function FaceDoorsPage() {
    const t = useTranslations("FaceDoors") // Assuming we might add translations later, but will use fallback/hardcoded for now if needed.
    // Since we don't have keys, I'll use hardcoded strings for the table and content as requested.
    const locale = useLocale()
    const isRTL = locale === "ar"
    const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(null)

    const handleImageClick = (src: string, index: number) => {
        setSelectedProduct({
            id: `fd-${index}`,
            src: src,
            title: `Face Door ${index + 1}`,
            name: "Premium Door Face Collection",
            description: "High-quality door face specific cations available in various dimensions and thicknesses.",
            tags: ["Door", "Interior", "Design"],
        })
    }

    return (
        <div className="min-h-screen bg-neutral-50">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden mt-20">
                <div className="absolute inset-0">
                    <Image
                        src="/DOORS HERO.jpeg"
                        alt="Face Doors Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
                            Face Doors Collection
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Premium quality door faces for modern interiors
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Dimensions Table Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-hidden rounded-xl border border-gray-200 shadow-sm"
                    >
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-center border-b">Thickness</th>
                                    <th scope="col" className="px-6 py-3 text-center border-b">Dimensions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* 0.8mm */}
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td rowSpan={2} className="px-6 py-4 font-medium text-gray-900 text-center border-r">0.8mm</td>
                                    <td className="px-6 py-4 text-center">1220*2440mm</td>
                                </tr>
                                <tr className="bg-gray-50 border-b hover:bg-gray-100">
                                    {/* rowSpan handles the first col */}
                                    <td className="px-6 py-4 text-center">850*2150mm</td>
                                </tr>

                                {/* 1.5mm */}
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td rowSpan={2} className="px-6 py-4 font-medium text-gray-900 text-center border-r">1.5mm</td>
                                    <td className="px-6 py-4 text-center">1220*2440mm</td>
                                </tr>
                                <tr className="bg-gray-50 border-b hover:bg-gray-100">
                                    <td className="px-6 py-4 text-center">850*2150mm</td>
                                </tr>

                                {/* 3mm */}
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td rowSpan={2} className="px-6 py-4 font-medium text-gray-900 text-center border-r">3mm</td>
                                    <td className="px-6 py-4 text-center">1220*2440mm</td>
                                </tr>
                                <tr className="bg-gray-50 border-b hover:bg-gray-100">
                                    <td className="px-6 py-4 text-center">850*2150mm</td>
                                </tr>

                                {/* 5mm */}
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td rowSpan={2} className="px-6 py-4 font-medium text-gray-900 text-center border-r">5mm</td>
                                    <td className="px-6 py-4 text-center">1220*2440mm</td>
                                </tr>
                                <tr className="bg-gray-50 border-b hover:bg-gray-100">
                                    <td className="px-6 py-4 text-center">850*2150mm</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* Image Grid */}
            <section className="py-16 bg-neutral-50 mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif text-center mb-12">Collection Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {FACE_DOORS_IMAGES.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg shadow-md bg-white"
                                onClick={() => handleImageClick(src, index)}
                            >
                                <Image
                                    src={src}
                                    alt={`Face Door ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            {/* Sidebar */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductDetailsSidebar
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                        isRTL={isRTL}
                        t={(key: string) => {
                            // Simple text fallback since we don't have the dictionary handy right now
                            // or we can assume ProductDetailsSidebar handles missing keys gracefully or we provide a dummy t function that returns English.
                            // The existing ProductDetailsSidebar expects a t function.
                            // Let's provide a map or a simple pass-through.
                            const map: Record<string, string> = {
                                'hoverHint': 'Hover to zoom',
                                'downloadCatalogue': 'Download Catalog',
                                'fullSheet': 'Full Sheet',
                                'dimensions': 'Dimensions',
                                'note': 'Note',
                                'noteText': 'Colors on screen may differ slightly from actual colors.',
                                'availableIn': 'Available In',
                                'patterns': 'Pattern',
                                'finishes': 'Finish'
                            }
                            return map[key] || key
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}
