"use client";

import {
  FiHeart,
  FiActivity,
  FiHome,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { useMemo } from "react";

export default function ServicesSection() {
  const { t } = useLanguage();

  // estabiliza traducciones + evita recreación del array en cada render
  const services = useMemo(
    () => [
      {
        id: "01",
        name: t("services.personalCare.name") as string,
        description: t("services.personalCare.desc") as string,
        icon: FiHeart,
        features: t("services.personalCare.features") as string[],
        color: "bg-sky-50 text-secondary",
        border: "border-sky-100",
      },
      {
        id: "02",
        name: t("services.medication.name") as string,
        description: t("services.medication.desc") as string,
        icon: FiActivity,
        features: t("services.medication.features") as string[],
        color: "bg-sky-50 text-secondary",
        border: "border-sky-100",
      },
      {
        id: "03",
        name: t("services.dailyLiving.name") as string,
        description: t("services.dailyLiving.desc") as string,
        icon: FiHome,
        features: t("services.dailyLiving.features") as string[],
        color: "bg-sky-50 text-secondary",
        border: "border-sky-100",
      },
      {
        id: "04",
        name: t("services.community.name") as string,
        description: t("services.community.desc") as string,
        icon: FiUsers,
        features: t("services.community.features") as string[],
        color: "bg-sky-50 text-secondary",
        border: "border-sky-100",
      },
    ],
    [t]
  );

  return (
    <section
      id="services"
      className="relative bg-white py-32 overflow-hidden"
    >
      {/* background decorativo intacto */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">

        <SectionHeader
          title={t("services.title") as string}
          subtitle={t("services.subtitle") as string}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`group relative p-10 bg-white rounded-[2.5rem] border ${service.border} hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2`}
              >

                {/* watermark */}
                <span className="absolute top-8 right-10 text-8xl font-serif text-primary/5 select-none group-hover:text-primary/10 transition-colors">
                  {service.id}
                </span>

                <div className="flex flex-col md:flex-row gap-8 relative z-10">

                  <div
                    className={`w-20 h-20 shrink-0 flex items-center justify-center rounded-2xl ${service.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="flex-1">

                    <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                      {service.name}
                    </h3>

                    <p className="text-primary/80 mb-8 leading-relaxed text-lg font-light text-justify">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-6 border-t border-primary/5">

                      {(service.features as string[]).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-secondary group/feature"
                        >
                          <FiCheckCircle className="w-4 h-4 transition-transform group-hover/feature:scale-125" />
                          <span className="text-primary/80 font-medium text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

                {/* decorative line intacto */}
                <div className="absolute bottom-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

              </div>
            );
          })}

        </div>

        <div
          className="mt-20 text-center"
        >
          <p className="text-primary/40 text-sm font-light italic">
            {t("services.disclaimer")}
          </p>
        </div>

      </div>
    </section>
  );
}
