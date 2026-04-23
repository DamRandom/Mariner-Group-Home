import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const AboutUsSection = dynamic(() => import("@/components/sections/AboutUsSection"));
const HomeGallery = dynamic(() => import("@/components/sections/HomeGallery"));
const CoreValues = dynamic(() => import("@/components/sections/CoreValues"));
const PhilosophySection = dynamic(() => import("@/components/sections/PhilosophySection"));
const ServicesSection = dynamic(() => import("@/components/sections/Services"));
const TrustSection = dynamic(() => import("@/components/sections/TrustSection"));
const RealLifeGallery = dynamic(() => import("@/components/sections/RealLifeGallery"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

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
