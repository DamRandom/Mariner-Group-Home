import AboutUsSection from "@/components/sections/AboutUsSection";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import PhilosophySection from "@/components/sections/PhilosophySection";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fbfbfb] text-[#635c54]">
      <Hero />
      <AboutUsSection />
      <ServicesSection />
      <PhilosophySection />
      <CallToAction />
      <Footer />
    </main>
  );
}
