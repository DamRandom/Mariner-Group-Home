"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <div className="relative w-24 h-20 mb-8">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/logo.png"
            alt="Mariner Group Home Logo"
            fill
            priority
            sizes="96px"
            className="object-contain"
          />
        </motion.div>
        
        {/* Elegant spinning ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-4 border-2 border-primary/10 border-t-secondary rounded-full"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-primary font-serif text-lg tracking-wide"
      >
        Mariner Group Home
      </motion.p>
      
      {/* Dynamic line loader */}
      <div className="mt-4 w-32 h-1 bg-primary/5 rounded-full overflow-hidden">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-secondary to-transparent"
        />
      </div>
    </div>
  );
}
