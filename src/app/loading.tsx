"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <div className="relative w-24 h-20 mb-8">
        <div
          className="w-full h-full relative"
        >
          <Image
            src="/images/logo.png"
            alt="Mariner Group Home Logo"
            fill
            priority
            sizes="96px"
            className="object-contain"
          />
        </div>
        
        {/* Elegant spinning ring */}
        <div
          className="absolute -inset-4 border-2 border-primary/10 border-t-secondary rounded-full animate-spin"
        />
      </div>

      <p
        className="text-primary font-serif text-lg tracking-wide"
      >
        Mariner Group Home
      </p>
      
      {/* Dynamic line loader */}
      <div className="mt-4 w-32 h-1 bg-primary/5 rounded-full overflow-hidden">
        <div
          className="w-full h-full bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse"
        />
      </div>
    </div>
  );
}
