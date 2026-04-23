"use client";

import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../ui/Map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-slate-100 animate-pulse rounded-3xl" />
  ),
});

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-10 pt-4 h-full">
      <div>
        <SectionHeader
          title={t("contact.infoTitle") as string}
          subtitle={t("contact.infoSubtitle") as string}
        />

        <div className="space-y-8 mt-10">
          <div className="flex items-start gap-4">
            <MdLocationOn className="text-xl text-secondary" />
            <p>4432 Mariner Blvd, Spring Hill, FL</p>
          </div>

          <div className="flex items-start gap-4">
            <MdPhone className="text-xl text-secondary" />
            <p>813-347-3060</p>
          </div>

          <div className="flex items-start gap-4">
            <MdEmail className="text-xl text-secondary" />
            <p>absolutequalityservices752@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="h-64 w-full rounded-3xl overflow-hidden border border-primary/10 shadow-sm">
        <Map />
      </div>
    </div>
  );
}
