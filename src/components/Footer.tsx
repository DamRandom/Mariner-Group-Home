import Image from "next/image";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative bg-white text-[#635c54] text-sm px-6 md:px-16 pt-32 pb-16">
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
            fill="#6A5C4D"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="w-24 h-1.5 bg-[#6A5C4D] mb-10 mx-auto rounded-full" />

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
                <h3 className="text-2xl font-serif text-[#37332f] mb-1">
                  Mariner Group Home
                </h3>
                <p className="text-sm">Evelyn Gonzalez Inc.</p>
                <p className="text-sm mt-2">Home & Community Services</p>
              </div>
            </div>
            <p className="text-xs text-[#6A5C4D]">
              © {new Date().getFullYear()} Mariner Group Home. All rights
              reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-5 flex-1 text-left md:text-right">
            <p className="flex items-start md:justify-end gap-3">
              <MdLocationOn className="text-xl text-[#6A5C4D] mt-0.5" />
              <span>4432 Mariner Blvd, Spring Hill, FL 34609</span>
            </p>
            <p className="flex items-start md:justify-end gap-3">
              <MdPhone className="text-xl text-[#6A5C4D] mt-0.5" />
              <span>
                813-347-3060
                <br />
                352-515-0706
              </span>
            </p>
            <p className="flex items-center md:justify-end gap-3 break-all">
              <MdEmail className="text-lg text-[#6A5C4D]" />
              absolutequalityservices752@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
