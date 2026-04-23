"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function RealLifeGallery() {
  const { t } = useLanguage();

  const realLifeImages = [
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
  ];

  return (
    <section className="bg-sky-50 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title={t("lifeAtMariner.title") as string}
          subtitle={t("lifeAtMariner.subtitle") as string}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {realLifeImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
