"use client";

import Image from "next/image";
import { useState } from "react";

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

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#6A5C4D] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto bg-[#717A63] p-12 shadow-lg">
        <h2 className="text-4xl md:text-5xl font-serif text-[#F2F0EC] mb-16 text-center leading-tight">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map(({ name, description, icon }, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={name}
                role="button"
                aria-expanded={isOpen}
                aria-controls={`desc-${i}`}
                tabIndex={0}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggle(i);
                }}
                className={`group flex flex-col items-center text-center cursor-pointer 
                  border border-white/15 bg-white/5 backdrop-blur-sm
                  shadow-md transition-transform duration-300 ease-in-out
                  ${isOpen ? "shadow-lg scale-[1.05]" : "hover:shadow-lg hover:scale-[1.05]"}
                `}
              >
                <div className="w-16 h-16 relative mb-5">
                  <Image
                    src={icon}
                    alt={`${name} icon`}
                    fill
                    sizes="64px"
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <h3 className="font-serif text-xl text-[#F2F0EC] select-none">
                  {name}
                </h3>

                <div
                  id={`desc-${i}`}
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out 
                    text-[#E3E1DC] font-light text-sm leading-relaxed mt-4 max-w-[280px]
                    ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="transition-opacity duration-300 delay-100">
                    {isOpen && description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
