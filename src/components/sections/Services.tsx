"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Personal Care",
    description: "Assisting with daily personal needs to enhance comfort.",
    icon: "/images/icons/personal-care.png",
  },
  {
    name: "Companion Care",
    description: "Providing company and emotional support.",
    icon: "/images/icons/companion-care.png",
  },
  {
    name: "Hygiene Assistance",
    description: "Helping with bathing, grooming, and hygiene tasks.",
    icon: "/images/icons/hygiene-assistance.png",
  },
  {
    name: "Skilled Nursing",
    description: "Professional nursing care for medical needs.",
    icon: "/images/icons/skilled-nursing.png",
  },
  {
    name: "Assisted Living",
    description: "Support with everyday activities in a safe environment.",
    icon: "/images/icons/assisted-living.png",
  },
  {
    name: "Independent Living",
    description: "Empowering autonomy with minimal support.",
    icon: "/images/icons/independent-living.png",
  },
  {
    name: "Meal Preparation",
    description: "Preparing nutritious meals tailored to needs.",
    icon: "/images/icons/meal-preparation.png",
  },
  {
    name: "Grocery Shopping",
    description: "Assistance with shopping errands.",
    icon: "/images/icons/grocery-shopping.png",
  },
  {
    name: "Medication Reminders",
    description: "Ensuring timely medication intake.",
    icon: "/images/icons/medication-reminders.png",
  },
];

const readDurations: { [key in 1 | 2 | 3]: number } = {
  1: 2000,
  2: 4000,
  3: 6000,
};

function getVisibleCount(width: number) {
  if (width < 640) return 1;
  if (width < 768) return 2;
  return 3;
}

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const count = getVisibleCount(window.innerWidth);
      setVisibleCount(count);
      setStartIndex((cur) => Math.min(cur, services.length - count));
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setTimeout(() => {
      const totalGroups = Math.ceil(services.length / visibleCount);
      const currentGroup = Math.floor(startIndex / visibleCount);
      const nextGroup = (currentGroup + 1) % totalGroups;
      setStartIndex(nextGroup * visibleCount);
      setOpenIndex(null);
    }, readDurations[visibleCount as 1 | 2 | 3] || 6000); // <- Aquí el casteo

    return () => clearTimeout(timer);
  }, [startIndex, visibleCount, mounted]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!mounted) {
    return null;
  }

  const totalGroups = Math.ceil(services.length / visibleCount);

  const goToGroup = (groupIndex: number) => {
    const newStart = groupIndex * visibleCount;
    setStartIndex(newStart);
    setOpenIndex(null);
  };

  return (
    <section className="bg-[#6A5C4D] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto bg-[#717A63] p-12 shadow-lg">
        <h2 className="text-4xl md:text-5xl font-serif text-[#F2F0EC] mb-16 text-center leading-tight">
          Our Services
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {services
              .slice(startIndex, startIndex + visibleCount)
              .map(({ name, description, icon }, i) => {
                const realIndex = startIndex + i;
                const isOpen = openIndex === realIndex;

                return (
                  <motion.div
                    key={name}
                    role="button"
                    aria-expanded={isOpen}
                    aria-controls={`desc-${realIndex}`}
                    tabIndex={0}
                    onClick={() => toggle(realIndex)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggle(realIndex);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`group flex flex-col items-center text-center cursor-pointer 
                      border border-white/15 bg-white/5 backdrop-blur-sm
                      shadow-md transition-all duration-300 ease-in-out
                      ${
                        isOpen
                          ? "shadow-lg scale-[1.05]"
                          : "hover:shadow-lg hover:scale-[1.05]"
                      }
                    `}
                  >
                    <div className="w-16 h-16 relative mb-5 mt-8">
                      <Image
                        src={icon}
                        alt={`${name} icon`}
                        fill
                        sizes="64px"
                        className="object-contain drop-shadow-md"
                      />
                    </div>
                    <h3 className="font-serif text-xl text-[#F2F0EC] select-none mb-4">
                      {name}
                    </h3>

                    <div
                      id={`desc-${realIndex}`}
                      className={`transition-all duration-500 ease-in-out overflow-hidden
                        text-[#E3E1DC] font-light text-sm leading-relaxed max-w-[280px] px-6
                        ${
                          isOpen
                            ? "max-h-48 opacity-100 mb-6 pt-1"
                            : "max-h-0 opacity-0 mb-0 pt-0"
                        }
                      `}
                    >
                      <p className="transition-opacity duration-500 delay-100">
                        {description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
          </div>

          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: totalGroups }, (_, i) => {
              const isActive = startIndex / visibleCount === i;
              return (
                <motion.button
                  key={i}
                  onClick={() => goToGroup(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  initial={false}
                  animate={{ scale: isActive ? 0.6 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className={`rounded-full transition-all duration-300
          ${
            isActive
              ? "bg-[#F2F0EC] w-4 h-4"
              : "bg-[#B6B4AC] w-2 h-2 opacity-60 hover:opacity-90"
          }
        `}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
