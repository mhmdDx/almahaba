"use client"

import { Link } from "@/i18n/routing"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { useTranslations } from "next-intl"

const productKeys = ['hpl', 'compact', 'doubleface', 'postforming'] as const;

const productImages = {
  hpl: "/hpl.jfif",
  compact: "/compacts.jfif",
  doubleface: "/fiber glass.jpeg",
  postforming: "/postforming.jpg"
}

const productLinks = {
  hpl: "/hpl",
  compact: "/compacts",
  doubleface: "/fiber",
  postforming: "/postforming"
}

export function ProductsOverview() {
  const t = useTranslations("Products");

  return (
    <section id="products" className="py-16 lg:py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-[#d4a574] font-semibold tracking-widest uppercase text-sm mb-4 block">
            {t("sectionSubtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            {t("sectionTitle")}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-light text-lg">
            {t("sectionDescription")}
          </p>
        </motion.div>

        {/* Alternating Layout */}
        <div className="flex flex-col gap-16 lg:gap-15">
          {productKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col-reverse ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center lg:items-center gap-0 lg:gap-0`}
            >

              {/* Text Side (Card) */}
              <div className={`w-[95%] sm:w-[90%] lg:w-1/2 relative z-20 -mt-20 lg:mt-0 ${index % 2 === 0 ? 'ltr:lg:-mr-20 rtl:lg:-ml-20' : 'ltr:lg:-ml-20 rtl:lg:-mr-20'}`}>
                <div className="bg-white p-8 md:p-12 lg:p-16 shadow-xl w-full max-w-xl mx-auto lg:mx-0">
                  <span className="text-[#d4a574] text-sm font-bold uppercase tracking-wider mb-3 block">
                    {t(`items.${key}.subtitle`)}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-6 leading-tight">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-neutral-600 mb-8 leading-relaxed font-light">
                    {t(`items.${key}.description`)}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-neutral-500 font-medium">
                    {[1, 2, 3].map((i) => (
                      <span key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#d4a574] rounded-full mr-2"></span>
                        {t(`items.${key}.f${i}`)}
                      </span>
                    ))}
                  </div>

                  <Link href={productLinks[key]} className="w-full sm:w-auto block">
                    <Button
                      className="bg-neutral-800 hover:bg-neutral-900 text-white rounded-none px-8 py-6 text-sm tracking-wide font-medium transition-colors duration-300 w-full sm:w-auto"
                    >
                      {t("explore")}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-3/5 h-[250px] sm:h-[350px] lg:h-[490px] relative overflow-hidden shadow-lg group z-10">
                <motion.img
                  src={productImages[key]}
                  alt={t(`items.${key}.title`)}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
