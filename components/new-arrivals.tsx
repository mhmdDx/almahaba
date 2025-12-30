"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/routing"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const newArrivalsData = [
    { src: "/New-prodacts/parquet.webp", key: "item1", href: "#" },
    { src: "/New-prodacts/doorface.webp", key: "item2", href: "/face-doors" }
]

export function NewArrivals() {
    const t = useTranslations("NewArrivals");
    const locale = useLocale();
    const direction = locale === 'ar' ? 'rtl' : 'ltr';
    const [emblaRef] = useEmblaCarousel({ direction, loop: true, align: "start" }, [Autoplay({ delay: 3000 }) as any]);

    return (
        <section id="new-arrivals" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[0%] right-[-5%] w-[600px] h-[600px] bg-[#d4a574]/5 rounded-full blur-3xl opacity-40" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-neutral-900/5 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    className="text-center mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-[1px] w-12 bg-[#d4a574]/50"></span>
                        <span className="text-[#d4a574] font-semibold tracking-[0.2em] uppercase text-xs">
                            {t("sectionSubtitle")}
                        </span>
                        <span className="h-[1px] w-12 bg-[#d4a574]/50"></span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6">
                        {t("sectionTitle")}
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
                        {t("sectionDescription")}
                    </p>
                </motion.div>

                {/* Mobile Slider / Desktop Grid */}
                <div className="relative">
                    {/* Mobile Embla Carousel */}
                    <div className="lg:hidden overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4 touch-pan-y">
                            {newArrivalsData.map((item, index) => (
                                <div className="flex-[0_0_100%] min-w-0 pl-4" key={`mobile-${item.key}`}>
                                    <NewArrivalCard item={item} index={index} t={t} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop/Tablet Grid */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {newArrivalsData.map((item, index) => (
                            <NewArrivalCard key={`desktop-${item.key}`} item={item} index={index} t={t} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

function NewArrivalCard({ item, index, t }: { item: any, index: number, t: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative h-auto aspect-square lg:h-[600px] lg:aspect-auto w-full overflow-hidden rounded-[2rem] shadow-xl"
        >
            <Link href={item.href} className="block w-full h-full relative">
                {/* Image Background */}
                <img
                    src={item.src}
                    alt={t(`items.${item.key}.title`)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                />

                {/* Overlay Gradient - Stronger at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500" />

                {/* Hover Overlay - Lightens slightly on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                {/* Badge */}
                <div className="absolute top-8 right-8 z-20">
                    <span className="bg-[#d4a574] text-white text-xs flex items-center gap-2 font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-md bg-opacity-90">
                        <Star className="w-3 h-3 fill-current" /> {t(`items.${item.key}.badge`)}
                    </span>
                </div>

                {/* Content Content - Bottom Aligned */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="overflow-hidden">
                        <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 transform translate-y-0 transition-transform duration-500">
                            {t(`items.${item.key}.title`)}
                        </h3>
                        <p className="text-white/80 text-lg font-light leading-relaxed mb-8 line-clamp-2 max-w-md group-hover:text-white transition-colors duration-300">
                            {t(`items.${item.key}.description`)}
                        </p>

                        <div className="flex items-center gap-2 text-[#d4a574] font-medium tracking-wide uppercase text-sm group-hover:gap-4 transition-all duration-300">
                            <span>Explore Collection</span>
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
