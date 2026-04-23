"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import { MdArrowBack } from "react-icons/md";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen text-primary overflow-x-hidden">

      {/* NAV */}
      <nav className="px-6 md:px-16 py-8 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <MdArrowBack className="text-2xl text-secondary group-hover:text-primary transition-colors" />
            <span className="font-medium text-secondary group-hover:text-primary transition-colors">
              Volver
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
      About <span className="text-secondary">Mariner</span>
      <br />
      Group Home
    </h1>

    <div className="w-24 h-1 bg-secondary/30 mx-auto mb-8 rounded-full" />

    <p className="text-lg md:text-xl text-primary/70 font-light leading-relaxed max-w-2xl mx-auto">
      A deeper look into the decisions, values, and philosophy behind a place
      built not to manage people — but to truly understand them.
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
                About the home
              </span>

              <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6 leading-tight">
                A different approach to care
              </h2>

              <p className="text-lg text-primary/70 leading-relaxed mb-6">
                Mariner Group Home was not created to fill a gap in the market.
                It was created to question how care is usually done.
              </p>

              <div className="space-y-6 text-primary/80 leading-relaxed">
                <p className="text-justify">
                  In many places, care becomes structured to the point where it starts
                  prioritizing efficiency over individuality. Routines are optimized,
                  systems are refined, and slowly — almost without noticing — people are
                  expected to fit into predefined rhythms that were never designed for them.
                </p>

                <p className="text-justify">
                  This home exists as a response to that reality. Not by removing structure,
                  but by redefining its purpose. Structure here is flexible, responsive,
                  and built around the individual — not imposed onto them.
                </p>

                <p className="text-justify">
                  What truly defines this place is not immediately visible. It is found in
                  the pauses, in the patience of conversation, in the absence of urgency,
                  and in the consistency of presence.
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
                src="/images/living7.png"
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
              Care, in this context, is not a list of responsibilities. It is a
              relationship that develops over time — shaped by attention, trust,
              and repeated presence.
            </p>

            <p className="text-justify">
              We do not approach individuals as cases to manage, but as people
              whose lives already carry meaning. Our role is not to define that
              meaning, but to support it without interference.
            </p>

            <p className="text-justify">
              This is why presence matters more than perfection. Because real care
              is not about doing everything flawlessly — it is about showing up
              consistently, in ways that feel stable, respectful, and human.
            </p>
          </motion.div>

          {/* DIVIDER */}
          <div className="my-20 flex items-center gap-4">
            <div className="flex-1 h-px bg-primary/10" />
            <span className="text-xs tracking-[0.3em] text-primary/40 uppercase">
              Responsibility
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
              Commitment & Responsibility
            </h3>

            <p className="text-justify">
              Mariner Group Home operates under full licensing from the Florida
              Agency for Persons with Disabilities (APD). Our caregivers are trained,
              certified, and held to strict standards.
            </p>

            <p className="text-justify">
              But compliance is not what defines this place. It is only the baseline.
              What truly matters is how those standards are lived — daily, quietly,
              and consistently — in every interaction.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-4xl mx-auto space-y-10">

          <SectionHeader title="Questions you might still have" align="center" />

          <motion.div className="bg-white border border-primary/5 rounded-[2rem] p-10 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-serif mb-4">How do I know this is the right place?</h3>
            <p className="text-primary/70 text-justify">
              The only real way is to understand how a place thinks. What we offer
              is clarity and transparency, so you can make that decision with confidence.
            </p>
          </motion.div>

          <motion.div className="bg-sky-50/60 border border-sky-100 rounded-[2rem] p-10 hover:shadow-md transition">
            <h3 className="text-xl font-serif mb-4">Will my family member feel safe?</h3>
            <p className="text-primary/80 text-justify">
              Safety is built through consistency, familiarity, and respect — not just protocols.
            </p>
          </motion.div>

          <motion.div className="bg-white border border-primary/5 rounded-[2rem] p-10 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-serif mb-4">Will they be understood?</h3>
            <p className="text-primary/70 text-justify">
              Understanding takes time. That is why presence and observation
              are central to how we provide care.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CIERRE */}
      <section className="px-6 md:px-16 pb-24 text-center max-w-3xl mx-auto">
        <p className="text-2xl font-serif italic text-primary/70 leading-relaxed">
          You are not just choosing a place. You are choosing who will be present in someone else’s everyday life.
        </p>
      </section>

      <Footer />
    </main>
  );
}