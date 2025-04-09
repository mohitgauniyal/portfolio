import { CourseProvider } from "@/components/course-context"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import CurriculumSection from "@/components/sections/curriculum-section"
import PricingSection from "@/components/sections/pricing-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import BusinessSection from "@/components/sections/business-section"
import ContactSection from "@/components/sections/contact-section"

export default function PythonClassPage() {
  return (
    <CourseProvider>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <CurriculumSection />
        <PricingSection />
        <TestimonialsSection />
        <BusinessSection />
        <ContactSection />
      </main>
    </CourseProvider>
  )
}
