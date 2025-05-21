"use client";

import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section className="bg-[#6A5C4D] text-[#F2F0EC] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-[#F2F0EC]">
            Our Philosophy
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
            We go beyond care — we build trust, preserve dignity, and foster autonomy. Every individual receives a plan crafted with intention and humanity.
          </p>
          <p className="italic text-sm text-[#F2F0EC]">
            “Care should feel like a relationship, not a routine.”<br />
            — Mariner Group Home
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-80 md:h-[28rem] rounded-[40%_30%_60%_50%/30%_60%_30%_50%] overflow-hidden shadow-md">
          <Image
            src="/images/care-home.jpg"
            alt="Personalized care"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="rounded-[40%_30%_60%_50%/30%_60%_30%_50%]"
          />
          <div className="absolute inset-0 bg-[#adc69c]/30 mix-blend-multiply pointer-events-none rounded-[40%_30%_60%_50%/30%_60%_30%_50%]" />
        </div>
      </div>
    </section>
  );
}
