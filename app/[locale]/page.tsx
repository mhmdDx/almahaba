"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsOverview } from "@/components/products-overview"
import { ApplicationsSection } from "@/components/applications-section"
import { KitchenVisualizer } from "@/components/kitchen-visualizer"
import { NewArrivals } from "@/components/new-arrivals"
import { ResourcesSection } from "@/components/resources-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsOverview />
      <NewArrivals />
      <ApplicationsSection />
      <KitchenVisualizer />
      <CtaSection />
      <Footer />
    </main>
  )
}
