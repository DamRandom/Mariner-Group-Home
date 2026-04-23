"use client";

import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { useMemo } from "react";

export default function PhilosophySection() {
  const { t } = useLanguage();

  // evita re-render innecesario de strings múltiples
  const texts = useMemo(
    () => ({
      p1: t("philosophy.p1"),
      p2: t("philosophy.p2"),
      p3: t("philosophy.p3"),
      p4: t("philosophy.p4"),
    }),
    [t]
  );

  return (
    <section
      id="philosophy"
      className="bg-white text-primary py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div
          className="max-w-xl"
        >
          <SectionHeader title={t("philosophy.title") as string} />

          <div className="space-y-6">
            <p className="text-base md:text-lg font-light leading-relaxed text-primary/80 text-justify">
              {texts.p1}
            </p>

            <p className="text-base md:text-lg font-light leading-relaxed text-primary/80 text-justify">
              {texts.p2}
            </p>

            <p className="text-base md:text-lg font-light leading-relaxed text-primary/80 text-justify">
              {texts.p3}
            </p>

            <p className="text-base md:text-lg font-light leading-relaxed text-primary/80 text-justify">
              {texts.p4}
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-primary/5 bg-white flex items-center justify-center min-h-[300px]"
        >
          <Image
            src="/images/living6.png"
            alt="Personalized care"
            width={1200}
            height={800}
            className="w-full h-auto object-contain max-h-[600px]"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}
