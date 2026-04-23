import Hero from "@/components/sections/Hero";
import AboutUsSection from "@/components/sections/AboutUsSection";
import HomeGallery from "@/components/sections/HomeGallery";
import CoreValues from "@/components/sections/CoreValues";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ServicesSection from "@/components/sections/Services";
import TrustSection from "@/components/sections/TrustSection";
import RealLifeGallery from "@/components/sections/RealLifeGallery";
import ContactSection from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-primary">
      <Hero />
      <AboutUsSection />
      <HomeGallery />
      <CoreValues />
      <PhilosophySection />
      <ServicesSection />
      <TrustSection />
      <RealLifeGallery />
      <ContactSection />
      <Footer />
    </main>
  );
}
