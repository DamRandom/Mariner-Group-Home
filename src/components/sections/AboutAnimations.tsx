"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutAnimations() {
  const { t } = useLanguage();

  const getText = (value: string | string[]) =>
    Array.isArray(value) ? value.join(" ") : value;

  return (
    <>
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionHeader title={getText(t("about.title"))} align="center" />
      </motion.div>

      {/* DESCRIPTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl font-light leading-relaxed mb-16 text-primary/90 text-justify">
          {getText(t("about.description"))}
        </p>
      </motion.div>

      {/* QUOTE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative px-8 py-12 md:px-16 md:py-16 rounded-[2.5rem] bg-sky-50/50 border border-sky-100/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
      >
        <span className="absolute top-6 left-8 text-7xl text-primary/10 font-serif leading-none">
          “
        </span>

        <div className="relative z-10">
          <p className="text-2xl md:text-3xl font-serif text-primary italic leading-snug mb-8">
            {getText(t("about.founderQuote"))}
          </p>

          <div className="flex flex-col items-center">
            <div className="w-12 h-0.5 bg-primary/20 mb-4" />
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary/60 font-semibold">
              {getText(t("about.founderName"))}
            </p>
          </div>
        </div>

        <span className="absolute bottom-6 right-8 text-7xl text-primary/10 font-serif rotate-180 leading-none">
          “
        </span>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <Link href="/about">
          <button
            aria-label="Read more about us"
            className="bg-primary text-white px-10 py-5 rounded-full font-medium shadow-xl hover:bg-secondary transition-all duration-300 border border-primary/10"
          >
            {getText(t("about.readMore"))}
          </button>
        </Link>
      </motion.div>
    </>
  );
}