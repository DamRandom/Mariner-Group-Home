"use client";

import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function HomeGallery() {
  const { t } = useLanguage();

  const getText = (value: string | string[]) =>
    Array.isArray(value) ? value.join(" ") : value;

  const homeImages = [
    {
      title: getText(t("gallery.kitchen")),
      src: "/images/kitchen2.png",
      alt: "Modern and clean kitchen area",
    },
    {
      title: getText(t("gallery.rooms")),
      src: "/images/room2.png",
      alt: "Comfortable and dignified resident room",
    },
    {
      title: getText(t("gallery.dining")),
      src: "/images/dinnerroom1.png",
      alt: "Welcoming dining space for residents",
    },
    {
      title: getText(t("gallery.patio")),
      src: "/images/outdoor.png",
      alt: "Peaceful outdoor patio",
    },
  ];

  return (
    <section id="gallery" className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          title={getText(t("gallery.title"))}
          subtitle={getText(t("gallery.subtitle"))}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {homeImages.map((image, index) => (
            <div
              key={`${image.title}-${index}`}
              className="relative group overflow-hidden rounded-2xl aspect-[16/10] shadow-md border border-primary/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-white text-2xl font-serif">
                  {image.title}
                </h3>
              </div>

              {/* mobile label */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full md:hidden">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
