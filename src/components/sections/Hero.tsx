"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import heroImg from "../../../public/images/hero.jpg";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-white"
    >
      {/* Background (removemos motion pesado del layout principal) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Mariner Group Home"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={80}
          placeholder="blur"
          className="object-cover object-[75%_50%] w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex items-center">
        <div
          className="w-full max-w-3xl"
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

            <h1 className="text-[clamp(1.8rem,5vw,4rem)] font-serif text-primary whitespace-nowrap">
              {t("hero.title")}
            </h1>
          </div>

          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-primary/80 font-light mb-10 text-justify max-w-[70vw]">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="#contact" 
              aria-label="Contact Mariner Group Home"
              className="bg-primary text-white px-8 py-4 rounded-full font-medium shadow-lg hover:bg-secondary hover:scale-105 active:scale-95 transition-all duration-300 block text-center"
            >
              {t("hero.contactBtn")}
            </Link>

            <a 
              href="tel:8133473060" 
              aria-label="Call Mariner Group Home at 813-347-3060"
              className="bg-white text-primary border border-primary/20 px-8 py-4 rounded-full font-medium shadow-sm hover:bg-primary/5 hover:scale-105 active:scale-95 transition-all duration-300 block text-center"
            >
              {t("hero.callBtn")}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave (sin cambios) */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[80px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-white"
          />
        </svg>
      </div>
    </section>
  );
}
