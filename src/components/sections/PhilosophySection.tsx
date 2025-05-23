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
            <span className="block text-[#E3E1DC]">Our Philosophy</span>
          </h2>

          <p className="text-base md:text-lg font-light leading-relaxed mb-6 text-[#e6e3dd] text-justify">
            At Mariner Group Home, we believe every person deserves to live with dignity, regardless of their abilities. We don’t start with diagnoses, we start with stories. We don’t organize routines, we build lives. Our philosophy isn’t written in a manual — it’s a daily practice: respect, consistency, and real presence.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed mb-6 text-[#e6e3dd] text-justify">
            We don’t work “for” someone. We live with them. We listen without rush. We respond without scripts. We adapt to each resident’s pace, without imposing structures foreign to their world.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed mb-6 text-[#e6e3dd] text-justify">
            We don’t want to be the best. We want to be the right ones. The ones who show up when needed, the ones who don’t fail at the basics, the ones who understand that caring is not intervening but accompanying.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed mb-6 text-[#e6e3dd] text-justify">
            This house has no long corridors or closed doors. It has shared armchairs, simple conversations, and a calm that’s not taught, it’s cultivated. Our philosophy doesn’t aim to impress. It only aims to do what’s right, every day.
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
