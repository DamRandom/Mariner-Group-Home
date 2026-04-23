"use client";

import { motion } from "framer-motion";
import { 
  FiHeart, 
  FiActivity,
  FiHome,
  FiUsers,
  FiCheckCircle
} from "react-icons/fi";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      id: "01",
      name: t("services.personalCare.name") as string,
      description: t("services.personalCare.desc") as string,
      icon: <FiHeart className="w-8 h-8" />,
      features: t("services.personalCare.features") as string[],
      color: "bg-sky-50 text-secondary",
      border: "border-sky-100"
    },
    {
      id: "02",
      name: t("services.medication.name") as string,
      description: t("services.medication.desc") as string,
      icon: <FiActivity className="w-8 h-8" />,
      features: t("services.medication.features") as string[],
      color: "bg-sky-50 text-secondary",
      border: "border-sky-100"
    },
    {
      id: "03",
      name: t("services.dailyLiving.name") as string,
      description: t("services.dailyLiving.desc") as string,
      icon: <FiHome className="w-8 h-8" />,
      features: t("services.dailyLiving.features") as string[],
      color: "bg-sky-50 text-secondary",
      border: "border-sky-100"
    },
    {
      id: "04",
      name: t("services.community.name") as string,
      description: t("services.community.desc") as string,
      icon: <FiUsers className="w-8 h-8" />,
      features: t("services.community.features") as string[],
      color: "bg-sky-50 text-secondary",
      border: "border-sky-100"
    },
  ];

  return (
    <section id="services" className="relative bg-white py-32 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        <SectionHeader 
          title={t("services.title") as string}
          subtitle={t("services.subtitle") as string}
          align="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-10 bg-white rounded-[2.5rem] border ${service.border} hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Number watermark */}
              <span className="absolute top-8 right-10 text-8xl font-serif text-primary/5 select-none transition-colors group-hover:text-primary/10">
                {service.id}
              </span>

              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                <div className={`w-20 h-20 shrink-0 flex items-center justify-center rounded-2xl ${service.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                  {service.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                    {service.name}
                  </h3>
                  <p className="text-primary/70 mb-8 leading-relaxed text-lg font-light text-justify">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-6 border-t border-primary/5">
                    {(service.features as string[]).map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-secondary group/feature">
                        <FiCheckCircle className="w-4 h-4 transition-transform group-hover/feature:scale-125" />
                        <span className="text-primary/80 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-primary/40 text-sm font-light italic">
            {t("services.disclaimer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
