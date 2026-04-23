"use client";

import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustSection() {
  const { t } = useLanguage();

  const trustItems = [
    {
      title: t("trust.licensed.title") as string,
      description: t("trust.licensed.desc") as string,
      icon: <HiOutlineBadgeCheck className="w-12 h-12 text-primary" />,
    },
    {
      title: t("trust.certified.title") as string,
      description: t("trust.certified.desc") as string,
      icon: <HiOutlineDocumentText className="w-12 h-12 text-primary" />,
    },
    {
      title: t("trust.compliance.title") as string,
      description: t("trust.compliance.desc") as string,
      icon: <HiOutlineShieldCheck className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16 border-t border-primary/5">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          title={t("trust.title") as string}
          subtitle={t("trust.subtitle") as string}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={index} // ✅ FIX AQUÍ
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 p-4 bg-primary/5 rounded-full">
                {item.icon}
              </div>

              <h3 className="text-xl font-serif text-primary mb-3">
                {item.title}
              </h3>

              <p className="text-primary/70 font-light leading-relaxed text-justify">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}