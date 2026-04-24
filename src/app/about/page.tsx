"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MdArrowBack } from "react-icons/md";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const getText = (value: string | string[]) =>
    Array.isArray(value) ? value.join(" ") : value;

  return (
    <main className="bg-white min-h-screen text-primary overflow-x-hidden">

      {/* NAVBAR WITH LANGUAGE TOGGLE */}
      <Navbar />

      {/* SPACER for fixed navbar */}
      <div className="h-20" />

      {/* BACK LINK */}
      <nav className="px-6 md:px-16 py-8 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <MdArrowBack className="text-2xl text-secondary group-hover:text-primary transition-colors" />
            <span className="font-medium text-secondary group-hover:text-primary transition-colors">
              {getText(t("aboutPage.back"))}
            </span>
          </div>
        </Link>
      </nav>

      {/* HERO */}
<section className="relative py-32 px-6 md:px-16 text-center overflow-hidden">

  {/* Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

  {/* LOGO WATERMARK */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="relative w-[300px] md:w-[420px] h-[300px] md:h-[420px] opacity-[0.06]">
      <Image
        src="/images/logo.png"
        alt="Mariner watermark"
        fill
        className="object-contain blur-[1px]"
        priority
      />
    </div>
  </div>

  {/* CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    className="max-w-4xl mx-auto relative z-10"
  >
    <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif leading-[1.1] mb-6">
      {getText(t("aboutPage.heroTitle1"))}{" "}
      <span className="text-secondary">{getText(t("aboutPage.heroTitle2"))}</span>
      <br />
      {getText(t("aboutPage.heroTitle3"))}
    </h1>

    <div className="w-24 h-1 bg-secondary/30 mx-auto mb-8 rounded-full" />

    <p className="text-lg md:text-xl text-primary/80 font-light leading-relaxed max-w-2xl mx-auto">
      {getText(t("aboutPage.heroSubtitle"))}
    </p>
  </motion.div>
</section>

      {/* ABOUT CONTENT */}
      <section className="px-6 md:px-16 pb-24 relative">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-50/30 to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* INTRO + IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center mb-24"
          >
            {/* TEXT */}
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary/40">
                {getText(t("aboutPage.sectionLabel"))}
              </span>

              <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6 leading-tight">
                {getText(t("aboutPage.sectionTitle"))}
              </h2>

              <p className="text-lg text-primary/80 leading-relaxed mb-6">
                {getText(t("aboutPage.intro1"))}
              </p>

              <div className="space-y-6 text-primary/80 leading-relaxed">
                <p className="text-justify">
                  {getText(t("aboutPage.intro2"))}
                </p>

                <p className="text-justify">
                  {getText(t("aboutPage.intro3"))}
                </p>

                <p className="text-justify">
                  {getText(t("aboutPage.intro4"))}
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden border border-primary/5 shadow-2xl"
            >
              <Image
                src="/images/living5.png"
                alt="home environment"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* SECOND BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-lg leading-relaxed text-primary/80 mb-20"
          >
            <p className="text-justify">
              {getText(t("aboutPage.block1"))}
            </p>

            <p className="text-justify">
              {getText(t("aboutPage.block2"))}
            </p>

            <p className="text-justify">
              {getText(t("aboutPage.block3"))}
            </p>
          </motion.div>

          {/* DIVIDER */}
          <div className="my-20 flex items-center gap-4">
            <div className="flex-1 h-px bg-primary/10" />
            <span className="text-xs tracking-[0.3em] text-primary/40 uppercase">
              {getText(t("aboutPage.dividerLabel"))}
            </span>
            <div className="flex-1 h-px bg-primary/10" />
          </div>

          {/* COMMITMENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg leading-relaxed text-primary/80"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-primary">
              {getText(t("aboutPage.commitmentTitle"))}
            </h3>

            <p className="text-justify">
              {getText(t("aboutPage.commitment1"))}
            </p>

            <p className="text-justify">
              {getText(t("aboutPage.commitment2"))}
            </p>
          </motion.div>

        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-4xl mx-auto space-y-10">

          <SectionHeader title={getText(t("aboutPage.faqTitle"))} align="center" />

          <motion.div className="bg-white border border-primary/5 rounded-[2rem] p-10 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-serif mb-4">{getText(t("aboutPage.faq1Title"))}</h3>
            <p className="text-primary/80 text-justify">
              {getText(t("aboutPage.faq1Text"))}
            </p>
          </motion.div>

          <motion.div className="bg-sky-50/60 border border-sky-100 rounded-[2rem] p-10 hover:shadow-md transition">
            <h3 className="text-xl font-serif mb-4">{getText(t("aboutPage.faq2Title"))}</h3>
            <p className="text-primary/80 text-justify">
              {getText(t("aboutPage.faq2Text"))}
            </p>
          </motion.div>

          <motion.div className="bg-white border border-primary/5 rounded-[2rem] p-10 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-serif mb-4">{getText(t("aboutPage.faq3Title"))}</h3>
            <p className="text-primary/80 text-justify">
              {getText(t("aboutPage.faq3Text"))}
            </p>
          </motion.div>

        </div>
      </section>

      {/* CIERRE */}
      <section className="px-6 md:px-16 pb-24 text-center max-w-3xl mx-auto">
        <p className="text-2xl font-serif italic text-primary/80 leading-relaxed">
          {getText(t("aboutPage.closingQuote"))}
        </p>
      </section>

      <Footer />
    </main>
  );
}
