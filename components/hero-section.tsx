import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { useTranslations } from "next-intl"

const HERO_IMAGES = [
  "/HERO1.jfif",

  "/HERO3.webp",
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const t = useTranslations("Hero")

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [currentImageIndex])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentImageIndex((prev) => (prev + newDirection + HERO_IMAGES.length) % HERO_IMAGES.length)
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Paralax effects for content
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1,
      transition: { duration: 0.5 }
    })
  }

  return (
    <section id="home" ref={containerRef} className="relative h-[80vh] md:h-[90vh] overflow-hidden mt-20 group">
      {/* Background Image Swiper */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentImageIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="absolute inset-0"
          >
            <img
              src={HERO_IMAGES[currentImageIndex]}
              alt="Premium HPL Surfaces"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 duration-300"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 translate-x-[20px] group-hover:translate-x-0 duration-300"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
          <motion.div
            key={currentImageIndex}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-white/80"
          />
        </div>
      </div>

      {/* Content */}
      <motion.div className="relative z-10 h-full flex items-center" style={{ y: contentY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {(() => {
                // Define unique animations for each slide
                const getSlideVariants = (index: number): Variants => {
                  switch (index) {
                    case 1: // Slide 2: Slide from side
                      return {
                        hidden: { opacity: 0, x: -100, filter: "blur(10px)" },
                        visible: {
                          opacity: 1,
                          x: 0,
                          filter: "blur(0px)",
                          transition: { duration: 0.8, ease: "backOut" }
                        }
                      }
                    default: // Slide 1 (0): Standard Slide Up
                      return {
                        hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                        visible: {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: { duration: 0.8, ease: "easeOut" }
                        }
                      }
                  }
                }

                const variants = getSlideVariants(currentImageIndex)

                return (
                  <>
                    <motion.h1
                      className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                      variants={variants}
                    >
                      {t(`slides.${currentImageIndex}.title` as any)}
                    </motion.h1>
                    <motion.p
                      className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
                      variants={variants}
                    >
                      {t(`slides.${currentImageIndex}.description` as any)}
                    </motion.p>
                  </>
                )
              })()}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-[#d4a574] to-[#e6c093] hover:from-[#c49564] hover:to-[#d4a574] text-white shadow-[0_0_20px_rgba(212,165,116,0.3)] hover:shadow-[0_0_30px_rgba(212,165,116,0.6)] transition-all duration-300 border-none h-8 px-4 text-xs md:text-sm md:h-10 md:px-6"
                >
                  {t("explore")}
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 rtl:rotate-180" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-white/5 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 h-8 px-4 text-xs md:text-sm md:h-10 md:px-6"
                >
                  {t("catalog")}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}
