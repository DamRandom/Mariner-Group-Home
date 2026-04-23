"use client";

import { useMemo } from "react";
import {
  HiOutlineBadgeCheck,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustSection() {
  const { t } = useLanguage();

  const trustItems = useMemo(
    () => [
      {
        id: "licensed",
        title: t("trust.licensed.title"),
        description: t("trust.licensed.desc"),
        icon: HiOutlineBadgeCheck,
      },
      {
        id: "certified",
        title: t("trust.certified.title"),
        description: t("trust.certified.desc"),
        icon: HiOutlineDocumentText,
      },
      {
        id: "compliance",
        title: t("trust.compliance.title"),
        description: t("trust.compliance.desc"),
        icon: HiOutlineShieldCheck,
      },
    ],
    [t]
  );

  return (
    <section className="bg-white py-24 px-6 md:px-16 border-t border-primary/5">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          title={t("trust.title") as string}
          subtitle={t("trust.subtitle") as string}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="flex flex-col items-center"
              >
                <div className="mb-6 p-4 bg-primary/5 rounded-full">
                  <Icon className="w-12 h-12 text-primary" />
                </div>

                <h3 className="text-xl font-serif text-primary mb-3">
                  {item.title}
                </h3>

                <p className="text-primary/80 font-light leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
