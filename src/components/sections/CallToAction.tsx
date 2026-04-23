"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section
      id="apd-certification"
      className="bg-primary px-6 py-24 md:px-16 lg:px-32"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-white tracking-tight"
        >
          {t("cta.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/90 text-lg font-light leading-relaxed text-justify"
        >
          {t("cta.p1")}
          <br className="hidden md:block" />
          {t("cta.p2")}
        </motion.p>
      </div>
    </section>
  );
}
