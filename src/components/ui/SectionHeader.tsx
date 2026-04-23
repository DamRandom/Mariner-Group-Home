"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  overline?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  overline,
  align = "left",
  className = "",
  dark = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const textColor = dark ? "text-white" : "text-primary";
  const subtitleColor = dark ? "text-white/70" : "text-primary/60";
  const overlineColor = "text-secondary";

  return (
    <div className={`mb-16 ${isCenter ? "text-center mx-auto" : ""} ${className}`}>
      {overline && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`${overlineColor} font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 block`}
        >
          {overline}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: overline ? 0.1 : 0 }}
        viewport={{ once: true }}
        className={`text-[clamp(2.5rem,6vw,4rem)] font-serif ${textColor} leading-[1.1] ${
          isCenter ? "max-w-4xl mx-auto" : "max-w-2xl"
        } mb-6`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: overline ? 0.2 : 0.1 }}
          viewport={{ once: true }}
          className={`text-lg md:text-xl ${subtitleColor} font-light leading-relaxed text-justify ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
