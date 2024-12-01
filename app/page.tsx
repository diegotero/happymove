import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { LeaderSection } from "@/components/leader-section"
import { ServicesSection } from "@/components/services-section"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { LocationSection } from "@/components/location-section"
import { CTASection } from "@/components/cta-section"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <LeaderSection />
        <ServicesSection />
        <Gallery />
        <Testimonials />
        <LocationSection />
        <CTASection />
      </main>
      <FloatingWhatsApp />
    </div>
  )
}

