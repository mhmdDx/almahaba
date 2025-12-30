"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import LanguageSwitcher from "@/components/language-switcher"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const t = useTranslations("Navigation")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-gray-500/70 backdrop-blur-md shadow-sm" : "bg-gray-500/70 backdrop-blur-md ",
      )}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex lg:grid lg:grid-cols-3 items-center justify-between h-20">
          {/* Logo - Column 1 (Starts Left in LTR, Right in RTL) */}
          <motion.div className="flex-shrink-0 justify-self-start" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="flex items-center" aria-label="Al Mahaba HPL Home">
              <Image
                src="/al-mahaba-logo.png"
                alt="Al Mahaba"
                width={120}
                height={90}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Column 2 (Centered) */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            <Link href="/#home" className="text-sm font-medium text-white hover:text-[#d4a574] transition-colors">
              {t("home")}
            </Link>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="text-sm font-medium text-white hover:text-[#d4a574] transition-colors flex items-center gap-1"
              >
                {t("about")}
                <span className={`text-xs transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {/* Dropdown Menu */}
              {isAboutDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50"
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-1 p-2">
                    <Link
                      href="/#about"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100/80 rounded-md transition-colors group"
                      onClick={() => setIsAboutDropdownOpen(false)}
                    >
                      <span className="group-hover:text-[#d4a574] transition-colors">{t("aboutDropdown")}</span>
                    </Link>
                    <Link
                      href="/portfolio"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100/80 rounded-md transition-colors group"
                      onClick={() => setIsAboutDropdownOpen(false)}
                    >
                      <span className="group-hover:text-[#d4a574] transition-colors">{t("portfolioDropdown")}</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className="text-sm font-medium text-white hover:text-[#d4a574] transition-colors flex items-center gap-1"
              >
                {t("products")}
                <span className={`text-xs transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[750px] bg-white shadow-xl rounded-xl overflow-hidden z-50 ring-1 ring-black/5"
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-6 p-6">
                    {/* Left Column: Core Products */}
                    <div className="space-y-3">
                      <div className="px-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {t("products")}
                      </div>
                      <div className="space-y-1">
                        <Link
                          href="/hpl"
                          className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#d4a574] rounded-lg transition-colors"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          {t("hplDropdown")}
                        </Link>
                        <Link
                          href="/compacts"
                          className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#d4a574] rounded-lg transition-colors"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          {t("compactDropdown")}
                        </Link>
                        <Link
                          href="/fiber"
                          className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#d4a574] rounded-lg transition-colors"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          {t("fiberGlassDropdown")}
                        </Link>
                        <Link
                          href="/postforming"
                          className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#d4a574] rounded-lg transition-colors"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          {t("postformingDropdown")}
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: New Arrivals & Collections */}
                    {/* Middle Column: New Arrivals */}
                    <div className="space-y-3">
                      <div className="px-2 text-xs font-bold text-[#d4a574] uppercase tracking-wider flex items-center gap-2">
                        {t("newArrivals")}
                        <span className="w-2 h-2 rounded-full bg-[#d4a574] animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <Link
                          href="/#new-arrivals"
                          className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#d4a574] rounded-lg transition-colors"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          {t("parquet")}
                          <span className="text-[10px] uppercase bg-[#d4a574]/10 text-[#d4a574] px-1.5 py-0.5 rounded-md font-bold tracking-wide">New</span>
                        </Link>
                        <Link
                          href="/face-doors"
                          className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#d4a574] rounded-lg transition-colors"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          {t("doorFaces")}
                          <span className="text-[10px] uppercase bg-[#d4a574]/10 text-[#d4a574] px-1.5 py-0.5 rounded-md font-bold tracking-wide">New</span>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Collections/Resources */}
                    <div className="space-y-3">
                      <div className="px-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Resources
                      </div>
                      <div className="space-y-1">
                        <Link
                          href="/color-collections"
                          className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#d4a574] hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          {t("colorCollectionsDropdown")}
                        </Link>
                        <Link
                          href="/texture"
                          className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#d4a574] hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          {t("textureDropdown")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <Link href="/#contact" className="text-sm font-medium text-white hover:text-[#d4a574] transition-colors">
              {t("contact")}
            </Link>
          </nav>

          {/* Desktop Actions - Column 3 (Ends Right in LTR, Left in RTL) */}
          <div className="hidden lg:flex items-center justify-end gap-3 justify-self-end">
            <LanguageSwitcher />
            <Link href="whatsapp://send?phone=+201226088118">
              <Button className="bg-[#d4a574] hover:bg-[#c49564] text-white">Chat</Button>
            </Link>
          </div>

          {/* Mobile Menu Button (Visible only on small screens) */}
          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-white/90 backdrop-blur-md border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-6 space-y-4">
            <Link href="/#home" className="block text-base font-medium text-gray-700 hover:text-[#d4a574]">
              {t("home")}
            </Link>

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="w-full text-left text-base font-medium text-gray-700 hover:text-[#d4a574] flex items-center justify-between"
              >
                {t("about")}
                <span className={`transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {isAboutDropdownOpen && (
                <div className="mt-2 ml-4 space-y-1">
                  <Link href="/#about" className="block px-2 py-2 text-sm text-gray-600 hover:text-[#d4a574] transition-colors">
                    {t("aboutDropdown")}
                  </Link>
                  <Link href="/portfolio" className="block px-2 py-2 text-sm text-gray-600 hover:text-[#d4a574] transition-colors">
                    {t("portfolioDropdown")}
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Products Dropdown */}
            <div>
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className="w-full text-left text-base font-medium text-gray-700 hover:text-[#d4a574] flex items-center justify-between"
              >
                {t("products")}
                <span className={`transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {isProductsDropdownOpen && (
                <div className="mt-2 ml-2 space-y-6 pl-2 border-l border-gray-100">
                  {/* New Arrivals Group */}
                  <div className="space-y-1">
                    <div className="px-2 text-xs font-bold text-[#d4a574] uppercase tracking-wider mb-1 flex items-center gap-2">
                      {t("newArrivals")}
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574] animate-pulse" />
                    </div>
                    <Link href="/#new-arrivals" className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-[#d4a574] rounded-md transition-all">
                      {t("parquet")}
                      <span className="text-[10px] bg-[#d4a574] text-white px-1.5 py-0.5 rounded ml-2">NEW</span>
                    </Link>
                    <Link href="/face-doors" className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-[#d4a574] rounded-md transition-all">
                      {t("doorFaces")}
                      <span className="text-[10px] bg-[#d4a574] text-white px-1.5 py-0.5 rounded ml-2">NEW</span>
                    </Link>

                  </div>

                  {/* Core Products Group */}
                  <div className="space-y-1">
                    <div className="px-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      {t("products")}
                    </div>
                    <Link href="/hpl" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all">
                      {t("hplDropdown")}
                    </Link>
                    <Link href="/compacts" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all">
                      {t("compactDropdown")}
                    </Link>
                    <Link href="/fiber" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all">
                      {t("fiberGlassDropdown")}
                    </Link>
                    <Link href="/postforming" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all">
                      {t("postformingDropdown")}
                    </Link>
                  </div>

                  {/* Collections & Finishes Group */}
                  <div className="space-y-1">
                    <div className="px-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Resources
                    </div>
                    <Link href="/color-collections" className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#d4a574] rounded-md transition-all">
                      {t("colorCollectionsDropdown")}
                    </Link>
                    <Link href="/texture" className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#d4a574] rounded-md transition-all">
                      {t("textureDropdown")}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2">
              <Link href="/#contact" className="block">
                <Button className="w-full bg-[#d4a574] hover:bg-[#c49564] text-white font-semibold shadow-sm">{t("contact")}</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
