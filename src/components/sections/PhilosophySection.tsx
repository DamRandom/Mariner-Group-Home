"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="bg-[#6A5C4D] text-[#F2F0EC] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-[#F2F0EC]">
            <span className="block text-[#E3E1DC]">More Than Care,</span>
            <span className="block text-[#ffffff]">It’s a Philosophy</span>
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
            We don’t follow templates. We build care plans with empathy, respect, and clarity — ensuring dignity isn’t lost in the process.
          </p>
          <p className="italic text-sm text-[#F2F0EC] border-l-4 border-[#adc69c] pl-4 mt-4">
            “Care should feel like a relationship, not a routine.”<br />
            <span className="not-italic font-semibold text-[#D7D5CE]">— Mariner Group Home</span>
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[28rem] rounded-[40%_30%_60%_50%/30%_60%_30%_50%] overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/care-home.jpg"
            alt="Personalized care"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="rounded-[40%_30%_60%_50%/30%_60%_30%_50%]"
          />
          <div className="absolute inset-0 bg-[#adc69c]/30 mix-blend-multiply pointer-events-none rounded-[40%_30%_60%_50%/30%_60%_30%_50%]" />
        </motion.div>
      </div>
    </section>
  );
}
