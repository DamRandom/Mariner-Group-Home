"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="bg-[#6A5C4D] text-[#F2F0EC] py-[clamp(4rem,8vw,6rem)] px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          role="button"
          tabIndex={0}
          className="relative w-full h-[clamp(16rem,40vw,28rem)] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl cursor-pointer transition-transform duration-300 hover:scale-[1.05] focus:scale-[1.05]"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.classList.toggle("ring");
            }
          }}
        >
          <Image
            src="/images/aboutus.jpg"
            alt="Mariner Group Home team and residence"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-center rounded-2xl"
          />
          <div className="absolute inset-0 bg-[#adc69c]/30 mix-blend-multiply pointer-events-none rounded-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-serif leading-tight mb-6 text-[#F2F0EC]">
            A home built on trust
          </h2>
          <p className="text-[clamp(1rem,2.3vw,1.25rem)] font-light leading-relaxed mb-6 text-justify">
            Mariner Group Home is a long-term residence for adults with
            developmental disabilities. Six individuals live here — not
            patients, not clients — residents, in every sense of the word.
          </p>
          <p className="text-[clamp(1rem,2.3vw,1.25rem)] font-light leading-relaxed mb-6 text-justify">
            Our support is quiet, daily, and personal. Meals, hygiene,
            medication — all handled with consistency and dignity. No uniforms.
            No rotations. Just people who care, doing their job the right way.
          </p>
          <p className="text-[clamp(1rem,2.3vw,1.25rem)] font-light leading-relaxed mb-6 text-justify">
            Families trust us because we don’t overpromise. We’re not a
            facility. We’re a house with a name on the mailbox and lights on in
            the kitchen. We’re present — day after day, moment after moment.
          </p>
          <p className="italic text-sm text-[#F2F0EC]/90">
            “What we give is time, patience, and a sense of belonging. That’s
            what real care looks like.”
            <br />— Evelyn Gonzalez, Founder
          </p>
        </motion.div>
      </div>
    </section>
  );
}
