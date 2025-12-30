"use client"

import { useState } from "react"
import { ArrowRight, Download, Share2 } from "lucide-react"
import { useTranslations } from "next-intl"

// Main images: 1.PNG to 5.PNG from changColor folder
// Thumbnails: color1.jpeg to color5.jpeg for fast loading
const kitchens = [
    {
        id: 2,
        thumbnail: "/changColor/color2.jpeg",
        main: "/changColor/2.webp",
        title: "S 24301 J",
        subtitle: "Natural Wood Grain",
        description: "Experience the warmth of nature with our Nordic Oak finish. Perfect for creating a cozy, inviting atmosphere that blends seamlessly with modern organic design trends."
    },
    {
        id: 1,
        thumbnail: "/changColor/color1.jpeg",
        main: "/changColor/1.webp",
        title: "S 30126 SD",
        subtitle: "Ultra-Matte Finish",
        description: "Make a bold statement with Midnight Noir. This premium ultra-matte finish absorbs light to create a sophisticated, velvet-like appearance that defines modern luxury."
    },
    {
        id: 3,
        thumbnail: "/changColor/color3.jpeg",
        main: "/changColor/3.webp",
        title: "S 6114 J",
        subtitle: "Contemporary Minimalist",
        description: "Designed for the metropolitan lifestyle, Urban Grey offers a sleek, neutral foundation that pairs perfectly with industrial accents and stainless steel appliances."
    },
    {
        id: 4,
        thumbnail: "/changColor/color4.jpeg",
        main: "/changColor/4.webp",
        title: "S 30113 SD",
        subtitle: "Luxury Stone",
        description: "Timeless elegance meets modern durability. Our Carrara Marble finish captures the prestige of Italian stone, adding brightness and grandeur to any kitchen space."
    },
    {
        id: 5,
        thumbnail: "/changColor/color5.jpeg",
        main: "/changColor/5.webp",
        title: "S 5448 G",
        subtitle: "Warm Neutral",
        description: "A versatile classic that maximizes light and space. Classic Beige provides a soft, neutral canvas amenable to any decor style, from traditional to transitional."
    },
]

export function KitchenVisualizer() {
    const t = useTranslations('KitchenVisualizer')
    const [selectedId, setSelectedId] = useState(1)
    const activeKitchen = kitchens.find(k => k.id === selectedId) || kitchens[0]

    return (
        <section className="bg-white py-12" id="visualizer">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* Minimal Section Title */}
                <div className="mb-8 px-2 border-l-4 border-slate-900 pl-4">
                    <p className="text-xs font-bold text-slate-500 tracking-[0.3em] uppercase mb-1">{t('sectionSubtitle')}</p>
                    <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-wider uppercase">
                        {t('sectionTitle')}
                    </h2>
                </div>

                {/* Main Visualizer Container */}
                <div className="relative bg-slate-100 rounded-3xl overflow-hidden shadow-sm">

                    {/* Main Image Aspect Ratio */}
                    <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]">
                        {kitchens.map((kitchen) => (
                            <div
                                key={kitchen.id}
                                className={`absolute inset-0 ${selectedId === kitchen.id ? "z-10 block" : "z-0 hidden"}`}
                            >
                                <img
                                    src={kitchen.main}
                                    alt={kitchen.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Subtle gradient for text readability at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                            </div>
                        ))}

                        {/* Title Overlay - Always on image */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 md:flex md:justify-between md:items-end">
                            <div className="text-white">
                                <p className="text-xs font-medium uppercase tracking-wider opacity-80 mb-1">{t('finishSelected')}</p>
                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{activeKitchen.title}</h3>
                            </div>

                            {/* Thumbnails on desktop - overlaid */}
                            <div className="hidden md:flex gap-3 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/10">
                                {kitchens.map((kitchen) => (
                                    <button
                                        key={kitchen.id}
                                        onClick={() => setSelectedId(kitchen.id)}
                                        className={`relative w-14 h-14 rounded-xl overflow-hidden transition-all duration-300 ${selectedId === kitchen.id
                                            ? "ring-2 ring-white scale-110 shadow-lg"
                                            : "opacity-60 hover:opacity-100 hover:scale-105"
                                            }`}
                                    >
                                        <img
                                            src={kitchen.thumbnail}
                                            alt={kitchen.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Thumbnails on mobile - below image */}
                    <div className="md:hidden p-4 flex justify-center">
                        <div className="flex gap-3 bg-slate-200 p-2 rounded-2xl">
                            {kitchens.map((kitchen) => (
                                <button
                                    key={kitchen.id}
                                    onClick={() => setSelectedId(kitchen.id)}
                                    className={`relative w-16 h-16 rounded-xl overflow-hidden transition-all duration-300 ${selectedId === kitchen.id
                                        ? "ring-2 ring-slate-900 scale-110 shadow-lg"
                                        : "opacity-60 hover:opacity-100 hover:scale-105"
                                        }`}
                                >
                                    <img
                                        src={kitchen.thumbnail}
                                        alt={kitchen.title}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
