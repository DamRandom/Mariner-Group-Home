"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLang = () => setLanguage(language === "en" ? "es" : "en");

  const navLinks = [
    { name: t("nav.home") as string, href: "/#home" },
    { name: t("nav.about") as string, href: "/#about" },
    { name: t("nav.services") as string, href: "/#services" },
    { name: t("nav.philosophy") as string, href: "/#philosophy" },
    { name: t("nav.contact") as string, href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="Mariner Group Home Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-serif text-primary hidden sm:block">
              Mariner Group Home
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-primary/70 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-200 bg-primary/5 text-primary font-bold text-sm"
            >
              <span className={language === "en" ? "opacity-100" : "opacity-40"}>EN</span>
              <span className="mx-1 opacity-20">|</span>
              <span className={language === "es" ? "opacity-100" : "opacity-40"}>ES</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             {/* Language Toggle (Mobile) */}
             <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary font-bold text-sm"
            >
              <span className={language === "en" ? "opacity-100" : "opacity-40"}>EN</span>
              <span className="mx-1 opacity-20">|</span>
              <span className={language === "es" ? "opacity-100" : "opacity-40"}>ES</span>
            </button>
            <button
              onClick={toggleMenu}
              className="text-primary p-2 focus:outline-none"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-primary/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-primary/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
