"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="bg-[#6A5C4D] text-[#F2F0EC] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 text-[#F2F0EC]">
            <span className="block text-[#E3E1DC]">More Than Care,</span>
            <span className="block text-white">It’s a Philosophy</span>
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed mb-6 text-[#e6e3dd]">
            We don’t follow templates. We build care plans with empathy,
            respect, and clarity — ensuring dignity isn’t lost in the process.
          </p>
          <p className="italic text-sm text-[#F2F0EC] border-l-4 border-[#adc69c] pl-4 mt-6">
            “Care should feel like a relationship, not a routine.”
            <br />
            <span className="not-italic font-semibold text-[#D7D5CE] block mt-2">
              — Mariner Group Home
            </span>
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className={`relative w-full h-80 md:h-[28rem]
    border border-white/15 bg-white/5 backdrop-blur-sm shadow-md
    cursor-pointer transition-all duration-300 ease-in-out
    hover:shadow-lg hover:scale-[1.05] focus:shadow-lg focus:scale-[1.05]
    overflow-hidden
  `}
        >
          <Image
            src="/images/care-home.jpg"
            alt="Personalized care"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#adc69c]/30 mix-blend-multiply pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
