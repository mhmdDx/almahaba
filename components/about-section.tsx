"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

export function AboutSection() {
    const t = useTranslations("About");

    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden shadow-2xl">
                            <img
                                src="/mainPOFTOFLIO.webp"
                                alt="Almahba Office Interior"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#f8f8f8] -z-10 hidden lg:block"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#d4a574]/10 -z-10 hidden lg:block"></div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-[#d4a574] font-semibold tracking-widest uppercase text-sm mb-4 block">
                            {t("story")}
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-neutral-900 mb-8 leading-tight text-right rtl:text-right ltr:text-left">
                            {t("title")}
                        </h2>
                        <div className="space-y-6 text-neutral-600 text-lg font-light leading-relaxed">
                            <p dangerouslySetInnerHTML={{ __html: t.raw("p1") }} />
                            <p dangerouslySetInnerHTML={{ __html: t.raw("p2") }} />
                        </div>

                        <div className="mt-10 pt-8 border-t border-neutral-100 grid grid-cols-2 gap-8">
                            <div>
                                <span className="block text-3xl font-serif text-neutral-900 mb-1">2009</span>
                                <span className="text-sm text-neutral-500 uppercase tracking-wider">{t("established")}</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-serif text-neutral-900 mb-1">Alexandria</span>
                                <span className="text-sm text-neutral-500 uppercase tracking-wider">{t("headquarters")}</span>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Link href="/portfolio">
                                <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-6 rounded-none text-sm tracking-wide transition-all duration-300 cursor-pointer">
                                    {t("readMore")}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
