"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#AD9E8E]">
      {/* Background with slight zoom-in animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 30, ease: "easeOut" }}
      >
        <Image
          src="/images/hero1.jpg"
          alt="Mariner Group Home"
          fill
          priority
          className="object-cover object-[75%_50%] w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfb] via-[#fbfbfb]/80 to-transparent" />
        <div className="absolute inset-0 bg-[#adc69c]/30 mix-blend-multiply" />
      </motion.div>

      {/* Content fade-in from bottom */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-16 flex items-center">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-serif text-[#717A63] leading-tight mb-6">
            Compassionate Care<br />Rooted in Dignity
          </h1>
          <p className="text-lg md:text-xl text-[#717A63] font-light mb-10">
            Providing home & community services where empathy meets excellence.
          </p>
          <a
            href="#about"
            className="inline-block bg-[#695850] hover:bg-[#AD9E8E] text-[#F2F0EC] px-6 py-3 text-sm font-semibold tracking-wide uppercase rounded-md transition-all duration-200"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Bottom solid wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
            fill="#6A5C4D"
          />
        </svg>
      </div>
    </section>
  );
}
