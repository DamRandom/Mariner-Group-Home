"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="bg-[#6A5C4D] px-6 py-20 md:px-0 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl font-serif text-[#EAE7DC] tracking-tight mb-4"
      >
        Let&apos;s Talk
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[#D6D1C4] text-lg font-light max-w-xl mx-auto"
      >
        Feel free to reach out. We’ll respond as soon as possible.
      </motion.p>
    </section>
  );
}
