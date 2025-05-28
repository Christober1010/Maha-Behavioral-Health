import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AutismInfoSection } from "@/components/autism-info-section"
import { AboutSection } from "@/components/about-section"
import { HowToStartSection } from "@/components/how-to-start-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <AutismInfoSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="how-to-start">
        <HowToStartSection />
      </section>
      <TestimonialsSection />
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
