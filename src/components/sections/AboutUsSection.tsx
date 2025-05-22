"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="bg-[#6A5C4D] text-[#F2F0EC] py-[clamp(4rem,8vw,6rem)] px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[clamp(16rem,40vw,28rem)] rounded-[40%_30%_60%_50%/30%_60%_30%_50%] overflow-hidden shadow-lg"
        >
          <Image
            src="/images/aboutus.jpg"
            alt="Mariner Group Home Team"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-center rounded-[40%_30%_60%_50%/30%_60%_30%_50%]"
          />
          <div className="absolute inset-0 bg-[#adc69c]/30 mix-blend-multiply pointer-events-none rounded-[40%_30%_60%_50%/30%_60%_30%_50%]" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-serif leading-tight mb-6 text-[#F2F0EC]">
            About Us
          </h2>
          <p className="text-[clamp(1rem,2.3vw,1.25rem)] font-light leading-relaxed mb-8">
            Mariner Group Home is a place where diverse individuals find personalized care and a supportive community. Our dedicated staff create a warm, inclusive environment where every person is valued and empowered to live a fulfilling life.
          </p>
          <p className="italic text-sm text-[#F2F0EC]/90">
            “Our mission is to build a family-like home where respect and compassion lead the way.”<br />
            — Evelyn Gonzalez, Founder
          </p>
        </motion.div>
      </div>
    </section>
  );
}
