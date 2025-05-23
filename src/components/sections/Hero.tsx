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
          sizes="100vw"
          className="object-cover object-[75%_50%] w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfb] via-[#fbfbfb]/80 to-transparent" />
        <div className="absolute inset-0 bg-[#adc69c]/30 mix-blend-multiply" />
      </motion.div>

      {/* Content fade-in from bottom */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex items-center">
        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex items-center flex-wrap gap-4 md:gap-6 mb-6">
            <div className="relative w-[clamp(60px,8vw,110px)] h-[clamp(50px,7vw,100px)] flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Mariner Group Home Logo"
                fill
                priority
                sizes="(max-width: 768px) 60px, 110px"
                className="object-contain"
              />
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,4rem)] font-serif text-[#717A63] whitespace-nowrap">
              Mariner Group Home
            </h1>
          </div>

          <p
            className="text-[clamp(1rem,2.5vw,1.25rem)] text-[#717A63] font-light"
            style={{
              maxWidth: "70vw",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            Home & Community Services with dignity, care, and a name you can
            trust.
          </p>
        </motion.div>
      </div>

      {/* Bottom solid wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[80px] md:h-[100px]"
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
