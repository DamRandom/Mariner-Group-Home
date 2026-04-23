"use client";

import {
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineSun,
  HiOutlineHand,
} from "react-icons/hi";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { useMemo } from "react";

export default function CoreValues() {
  const { t } = useLanguage();

  const values = useMemo(
    () => [
      {
        title: t("coreValues.dignity.title"),
        description: t("coreValues.dignity.desc"),
        icon: HiOutlineHeart,
        gradient: "from-blue-50 to-white",
      },
      {
        title: t("coreValues.personCentered.title"),
        description: t("coreValues.personCentered.desc"),
        icon: HiOutlineUserGroup,
        gradient: "from-sky-50 to-white",
      },
      {
        title: t("coreValues.safety.title"),
        description: t("coreValues.safety.desc"),
        icon: HiOutlineShieldCheck,
        gradient: "from-indigo-50 to-white",
      },
      {
        title: t("coreValues.independence.title"),
        description: t("coreValues.independence.desc"),
        icon: HiOutlineSun,
        gradient: "from-cyan-50 to-white",
      },
      {
        title: t("coreValues.compassion.title"),
        description: t("coreValues.compassion.desc"),
        icon: HiOutlineHand,
        gradient: "from-blue-50 to-white",
      },
    ],
    [t]
  );

  return (
    <section className="bg-sky-50/30 py-24 overflow-hidden relative">

      {/* backgrounds intactos */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-16">
        <SectionHeader title={t("coreValues.title")} />
      </div>

      {/* CAROUSEL */}
      <div className="relative">

        <div
          className="flex gap-8 px-6 md:px-16 pb-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth"
        >
          {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className={`min-w-[85vw] sm:min-w-[380px] md:min-w-[420px] snap-center h-[450px] bg-gradient-to-br ${value.gradient} p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-white/60 flex flex-col justify-between group relative overflow-hidden backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2`}
                >

                  {/* decorativo */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-700 pointer-events-none">
                    <Icon className="w-10 h-10 text-secondary" />
                  </div>

                  {/* contenido */}
                  <div className="relative z-10">

                    <div className="w-20 h-20 bg-white rounded-3xl shadow-md flex items-center justify-center mb-10 border border-secondary/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <Icon className="w-10 h-10 text-secondary" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6">
                      {value.title}
                    </h3>

                    <p className="text-primary/80 font-light leading-relaxed text-justify text-base md:text-lg lg:line-clamp-6">
                      {value.description}
                    </p>

                  </div>

                  {/* footer intacto */}
                  <div className="mt-8 pt-6 border-t border-primary/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">

                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">
                      Our Commitment
                    </span>

                    <div className="flex gap-1">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`w-1 h-1 rounded-full ${
                            i <= index ? "bg-secondary" : "bg-secondary/20"
                          }`}
                        />
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        {/* scroll hint */}
        <div className="flex justify-center mt-4">
          <div
            className="flex items-center gap-3 px-6 py-2.5 bg-white/50 backdrop-blur-md rounded-full border border-primary/5 shadow-sm"
          >
            <div className="flex gap-1.5 items-center">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[11px] text-primary/60 uppercase tracking-widest font-bold">
                Slide to discover
              </span>
            </div>

            <div className="h-4 w-[1px] bg-primary/10 mx-1" />

            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-primary/10" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
