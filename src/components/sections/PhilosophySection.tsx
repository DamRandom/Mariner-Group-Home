"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function PhilosophySection() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="bg-white text-primary py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <SectionHeader 
            title={t("philosophy.title") as string}
          />

          <div className="space-y-6">
            <p className="text-base md:text-lg font-light leading-relaxed text-primary/80 text-justify">
              {t("philosophy.p1")}
            </p>

            <p className="text-base md:text-lg font-light leading-relaxed text-primary/80 text-justify">
              {t("philosophy.p2")}
            </p>

            <p className="text-base md:text-lg font-light leading-relaxed text-primary/80 text-justify">
              {t("philosophy.p3")}
            </p>

            <p className="text-base md:text-lg font-light leading-relaxed text-primary/80 text-justify">
              {t("philosophy.p4")}
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-primary/5 bg-white flex items-center justify-center min-h-[300px]"
        >
          <Image
            src="/images/living6.png"
            alt="Personalized care"
            width={1200}
            height={800}
            priority
            className="w-full h-auto object-contain max-h-[600px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
