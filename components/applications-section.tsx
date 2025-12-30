
"use client"

import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

const applicationKeys = ['home', 'commercial', 'hospital'] as const;

const applicationImages = {
  home: "/HERO1.jpg",
  commercial: "/cormiccall.jfif",
  hospital: "/laps.png"
}

export function ApplicationsSection() {
  const t = useTranslations("Applications");
  const locale = useLocale();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", direction }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }) as any,
  ])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="applications" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#d4a574] font-semibold tracking-widest uppercase text-sm mb-4 block">
            {t("sectionSubtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">{t("sectionTitle")}</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
            {t("sectionDescription")}
          </p>
        </motion.div>

        {/* Mobile/Tablet Carousel (< lg) */}
        <div className="lg:hidden relative group/carousel">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {applicationKeys.map((key, index) => (
                <div className="flex-[0_0_100%] sm:flex-[0_0_80%] pl-4 min-w-0" key={key}>
                  <motion.div
                    className="group cursor-pointer h-full"
                  >
                    {/* Image Container */}
                    <div className="relative h-[300px] sm:h-[400px] overflow-hidden mb-6">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                      <img
                        src={applicationImages[key]}
                        alt={t(`items.${key}.title`)}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative pr-4">
                      <h3 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-3 group-hover:text-[#d4a574] transition-colors duration-300">
                        {t(`items.${key}.title`)}
                      </h3>

                      <p className="text-neutral-500 font-light leading-relaxed mb-6 text-sm sm:text-base">
                        {t(`items.${key}.description`)}
                      </p>

                      <div className="flex items-center text-[#d4a574] font-medium text-sm tracking-wide group/link w-fit">
                        <span className="border-b border-[#d4a574] pb-1 group-hover/link:border-opacity-100 border-opacity-30 transition-all duration-300">
                          {t("explore")}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Always visible on mobile */}
          <button
            onClick={direction === 'rtl' ? scrollNext : scrollPrev}
            className="absolute left-2 top-[150px] -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-neutral-800 hover:bg-[#d4a574] hover:text-white transition-all duration-300 z-20 rounded-full"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={direction === 'rtl' ? scrollPrev : scrollNext}
            className="absolute right-2 top-[150px] -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-neutral-800 hover:bg-[#d4a574] hover:text-white transition-all duration-300 z-20 rounded-full"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Grid (>= lg) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-10">
          {applicationKeys.map((key, index) => (
            <motion.div
              key={key}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <motion.img
                  src={applicationImages[key]}
                  alt={t(`items.${key}.title`)}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="relative pr-4">
                <h3 className="text-3xl font-serif text-neutral-900 mb-3 group-hover:text-[#d4a574] transition-colors duration-300">
                  {t(`items.${key}.title`)}
                </h3>

                <p className="text-neutral-500 font-light leading-relaxed mb-6 text-base max-w-sm">
                  {t(`items.${key}.description`)}
                </p>

                <div className="flex items-center text-[#d4a574] font-medium text-sm tracking-wide group/link w-fit">
                  <span className="border-b border-[#d4a574] pb-1 group-hover/link:border-opacity-100 border-opacity-30 transition-all duration-300">
                    {t("explore")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
