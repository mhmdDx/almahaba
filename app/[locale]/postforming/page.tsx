"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback } from "react"
import { useTranslations, useLocale } from "next-intl"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const images = [
    "/postforming/1.jpg",
    "/postforming/2.jpg",
    "/postforming/3.avif",
    "/postforming/4.png",
    "/postforming/5.jpg",
    "/postforming/6.jpg",
    "/postforming/8.avif",
    "/postforming/9.jpg",
    "/postforming/10.png",
]

export default function PostformingGallery() {
    const t = useTranslations("Postforming")
    const locale = useLocale()
    const direction = locale === 'ar' ? 'rtl' : 'ltr'

    const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true, align: "start", direction }, [Autoplay({ delay: 3000 }) as any])
    const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true, align: "start", direction }, [Autoplay({ delay: 3500 }) as any])

    const scrollPrev1 = useCallback(() => emblaApi1?.scrollPrev(), [emblaApi1])
    const scrollNext1 = useCallback(() => emblaApi1?.scrollNext(), [emblaApi1])
    const scrollPrev2 = useCallback(() => emblaApi2?.scrollPrev(), [emblaApi2])
    const scrollNext2 = useCallback(() => emblaApi2?.scrollNext(), [emblaApi2])

    const midPoint = Math.ceil(images.length / 2)
    const row1Images = images.slice(0, midPoint)
    const row2Images = images.slice(midPoint)

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <Header />
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden pt-30">
                <div className="absolute inset-0 bg-neutral-900/90 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/postforming.jpg')" }}
                />
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#d4a574] font-semibold tracking-widest uppercase text-sm mb-4 block"
                    >
                        {t("collection")}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
                    >
                        {t("title")}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed"
                    >
                        {t("description")}
                    </motion.p>
                </div>
            </section>

            {/* Gallery Grid (Desktop) */}
            <section className="hidden lg:block py-16 lg:py-24 bg-neutral-50 text-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative aspect-[4/5] bg-neutral-200 overflow-hidden shadow-lg cursor-pointer"
                            >
                                <Image
                                    src={src}
                                    alt={`Postforming Design ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Carousels (Mobile/Tablet) - 2 Independent Rows */}
            <section className="block lg:hidden py-16 bg-neutral-50 text-neutral-900 overflow-hidden space-y-8 ">
                <div className="max-w-7xl mx-auto px-4 ">
                    {/* First Carousel */}
                    <div className="relative mb-5 group/carousel">
                        <div className="overflow-hidden" ref={emblaRef1} dir={direction}>
                            <div className="flex -ml-4">
                                {row1Images.map((src, index) => (
                                    <div key={index} className="flex-[0_0_50%] min-w-0 pl-4">
                                        <motion.div
                                            className="group relative aspect-[4/5] bg-neutral-200 overflow-hidden shadow-lg cursor-pointer"
                                        >
                                            <Image
                                                src={src}
                                                alt={`Postforming Design Row 1-${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 640px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={direction === 'rtl' ? scrollNext1 : scrollPrev1}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-900" />
                        </button>
                        <button
                            onClick={direction === 'rtl' ? scrollPrev1 : scrollNext1}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-900" />
                        </button>
                    </div>

                    {/* Second Carousel */}
                    <div className="relative group/carousel">
                        <div className="overflow-hidden" ref={emblaRef2} dir={direction}>
                            <div className="flex -ml-4">
                                {row2Images.map((src, index) => (
                                    <div key={index} className="flex-[0_0_50%] min-w-0 pl-4">
                                        <motion.div
                                            className="group relative aspect-[4/5] bg-neutral-200 overflow-hidden shadow-lg cursor-pointer"
                                        >
                                            <Image
                                                src={src}
                                                alt={`Postforming Design Row 2-${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 640px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={direction === 'rtl' ? scrollNext2 : scrollPrev2}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-900" />
                        </button>
                        <button
                            onClick={direction === 'rtl' ? scrollPrev2 : scrollNext2}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-900" />
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
