"use client";

import Image from "next/image";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { useLanguage } from "@/context/LanguageContext";
 
export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-white text-primary/80 text-sm px-6 md:px-16 pt-32 pb-16">
      {/* SVG decorativo superior */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none"
        style={{ height: 100, backgroundColor: "#ffffff" }}
      >
        <svg
          className="relative block w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C300,20 900,120 1200,20 L1200,0 L0,0 Z"
            className="fill-primary"
          />
        </svg>
      </div>
 
      <div className="relative max-w-6xl mx-auto">
        <div className="w-24 h-1.5 bg-primary/20 mb-10 mx-auto rounded-full" />
 
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start">
          {/* Logo + Info */}
          <div className="flex flex-col items-start gap-6 flex-1">
            <div className="flex items-start gap-4">
              <div className="w-[85px] h-[76px] relative">
                <Image
                  src="/images/logo.png"
                  alt="Mariner Group Home Logo"
                  fill
                  sizes="(max-width: 768px) 85px, 85px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-primary mb-1">
                  Mariner Group Home
                </h3>
                <p className="text-sm">{t("footer.companyName")}</p>
                <p className="text-sm mt-2">{t("footer.tagline")}</p>
              </div>
            </div>
            <p className="text-xs text-primary/60">
              © {new Date().getFullYear()} Mariner Group Home. {t("footer.rights")}
            </p>
          </div>
 
          {/* Contact Info */}
          <div className="flex flex-col gap-5 flex-1 text-left md:text-right">
            <p className="flex items-start md:justify-end gap-3 text-primary">
              <MdLocationOn className="text-xl text-primary mt-0.5" />
              <span>4432 Mariner Blvd, Spring Hill, FL 34609</span>
            </p>
            <p className="flex items-start md:justify-end gap-3 text-primary">
              <MdPhone className="text-xl text-primary mt-0.5" />
              <span>
                813-347-3060
                <br />
                352-515-0706
              </span>
            </p>
            <p className="flex items-center md:justify-end gap-3 break-all text-primary">
              <MdEmail className="text-lg text-primary" />
              absolutequalityservices752@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
