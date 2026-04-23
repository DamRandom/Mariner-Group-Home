"use client";


interface SectionHeaderProps {
  title: string | string[];
  subtitle?: string | string[];
  overline?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export default function SectionHeader({
  title: rawTitle,
  subtitle: rawSubtitle,
  overline,
  align = "left",
  className = "",
  dark = false,
}: SectionHeaderProps) {
  const title = Array.isArray(rawTitle) ? rawTitle.join(" ") : rawTitle;
  const subtitle = rawSubtitle ? (Array.isArray(rawSubtitle) ? rawSubtitle.join(" ") : rawSubtitle) : undefined;
  const isCenter = align === "center";
  const textColor = dark ? "text-white" : "text-primary";
  const subtitleColor = dark ? "text-white/70" : "text-primary/60";
  const overlineColor = "text-secondary";

  return (
    <div className={`mb-16 ${isCenter ? "text-center mx-auto" : ""} ${className}`}>
      {overline && (
        <span
          className={`${overlineColor} font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 block`}
        >
          {overline}
        </span>
      )}
      <h2
        className={`text-[clamp(2.5rem,6vw,4rem)] font-serif ${textColor} leading-[1.1] ${
          isCenter ? "max-w-4xl mx-auto" : "max-w-2xl"
        } mb-6`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl ${subtitleColor} font-light leading-relaxed text-justify ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
