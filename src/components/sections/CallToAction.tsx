"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="apd-certification"
      className="bg-[#6A5C4D] px-6 py-24 md:px-16 lg:px-32"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-[#EAE7DC] tracking-tight"
        >
          Built on Integrity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[#D6D1C4] text-lg font-light leading-relaxed text-justify"
        >
          Mariner Group Home operates with full licensure from the Florida Agency for Persons with Disabilities (APD).
          Our team of caregivers and professionals is certified and trained to deliver compassionate, specialized support for adults with developmental disabilities.
          <br className="hidden md:block" />
          We don’t just meet standards — we build a space where safety, dignity, and quality of life are foundational.
        </motion.p>
      </div>
    </section>
  );
}
