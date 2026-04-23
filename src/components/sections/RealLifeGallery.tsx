"use client";

import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { useMemo } from "react";

export default function RealLifeGallery() {
  const { t } = useLanguage();

  // evita recalcular strings en cada render
  const images = useMemo(
    () => [
      {
        title: t("lifeAtMariner.sharedMoments") as string,
        src: "/images/living1.png",
        alt: "Residents sharing a meal together",
      },
      {
        title: t("lifeAtMariner.dailyActivities") as string,
        src: "/images/living2.png",
        alt: "Social board games and interaction",
      },
      {
        title: t("lifeAtMariner.gardening") as string,
        src: "/images/living3.png",
        alt: "Outdoor gardening activities",
      },
      {
        title: t("lifeAtMariner.communityBond") as string,
        src: "/images/living4.jpg",
        alt: "Staff and residents smiling together",
      },
    ],
    [t]
  );

  return (
    <section className="bg-sky-50 py-24 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        <SectionHeader
          title={t("lifeAtMariner.title") as string}
          subtitle={t("lifeAtMariner.subtitle") as string}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-square overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group"
            >

              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
